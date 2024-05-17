(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var u = a(6483),
                    n = a.n(u),
                    s = a(7727),
                    r = a(6179),
                    i = a.n(r),
                    o = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: u,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: E,
                    onMouseDown: b,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: A,
                }) => {
                    const C = (0, r.useRef)(null),
                        v = (0, r.useState)(a),
                        f = v[0],
                        D = v[1],
                        F = (0, r.useState)(!1),
                        B = F[0],
                        y = F[1],
                        w = (0, r.useState)(!1),
                        S = w[0],
                        k = w[1],
                        T = (0, r.useCallback)(() => {
                            c || (C.current && (C.current.focus(), D(!0)));
                        }, [c]),
                        x = (0, r.useCallback)(
                            (e) => {
                                f && null !== C.current && !C.current.contains(e.target) && D(!1);
                            },
                            [f],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                c || (A && A(e));
                            },
                            [c, A],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                c || (null !== d && (0, s.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                c || (g && g(e), y(!1));
                            },
                            [c, g],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                c || (null !== m && (0, s.G)(m), b && b(e), a && T(), y(!0));
                            },
                            [c, m, b, T, a],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                c || (h && h(e), y(!1));
                            },
                            [c, h],
                        ),
                        $ = n()(
                            o.Z.base,
                            o.Z[`base__${u}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: f,
                                [o.Z.base__highlightActive]: B,
                                [o.Z.base__firstHover]: S,
                            },
                            _,
                        ),
                        H = n()(o.Z.state, o.Z.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, r.useEffect)(() => {
                            D(a);
                        }, [a]),
                        i().createElement(
                            'div',
                            {
                                ref: C,
                                className: $,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: O,
                                onMouseDown: I,
                                onMouseLeave: P,
                                onClick: N,
                            },
                            u !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: H },
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
                const _ = (0, r.memo)(c);
            },
            2106: (e, t, a) => {
                'use strict';
                let u, n;
                a.d(t, { L: () => u, q: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(u || (u = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(n || (n = {}));
            },
            2262: (e, t, a) => {
                'use strict';
                a.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var u = a(6179),
                    n = a.n(u),
                    s = a(6483),
                    r = a.n(s),
                    i = a(7727),
                    o = a(1641),
                    l = a(8844),
                    c = a(4382);
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
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        a = e.isChecked,
                        s = void 0 !== a && a,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        E = e.isAlert,
                        b = void 0 !== E && E,
                        g = e.size,
                        h = void 0 === g ? l.yB.medium : g,
                        A = e.type,
                        C = void 0 === A ? l.Rh.primary : A,
                        v = e.soundHover,
                        f = void 0 === v ? 'highlight' : v,
                        D = e.soundClick,
                        F = void 0 === D ? 'play' : D,
                        B = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        S = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        x = e.onFocus,
                        N = e.onBlur,
                        M = e.text,
                        L = e.contentStyles,
                        O = e.children,
                        R = e.alignment,
                        I = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, _);
                    const P = (0, u.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        z = (0, u.useState)(!1),
                        j = (z[0], z[1]),
                        W = (0, u.useCallback)(
                            (e) => {
                                p || (T && T(), k && k(e));
                            },
                            [p, T, k],
                        ),
                        G = (0, u.useCallback)(
                            (e) => {
                                const t = e.button === o.t.LEFT;
                                p || (t && H(!0), t && S && S(e), F && (0, i.G)(F));
                            },
                            [p, S, F],
                        ),
                        V = (0, u.useCallback)(
                            (e) => {
                                p || (H(!1), w && w(e));
                            },
                            [p, w],
                        ),
                        Z = (0, u.useCallback)(
                            (e) => {
                                p || (B && B(e), f && (0, i.G)(f));
                            },
                            [p, B, f],
                        ),
                        U = (0, u.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, u.useCallback)(
                            (e) => {
                                p || (j(!0), x && x(e));
                            },
                            [p, x],
                        ),
                        K = (0, u.useCallback)(
                            (e) => {
                                p || (j(!1), N && N(e));
                            },
                            [p, N],
                        ),
                        Y = n().createElement(
                            'div',
                            { className: c.Z.label },
                            n().createElement(
                                'div',
                                { className: r()(c.Z.labelContent, 's-labelContent'), style: L },
                                M || O,
                            ),
                        );
                    return n().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${C}`], {
                                    [c.Z.base__checked]: s,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: b,
                                    [c.Z.base__center]: R === l.N3.Center,
                                    [c.Z.base__bottom]: R === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: Z,
                                onMouseLeave: U,
                                onMouseDown: G,
                                onMouseUp: V,
                                onFocus: q,
                                onBlur: K,
                            },
                            I,
                        ),
                        n().createElement(
                            'div',
                            { className: c.Z.input },
                            n().createElement('div', { className: c.Z.alertOverlay }),
                            n().createElement('div', { className: c.Z.inputHoverOverlay }),
                            n().createElement('div', { className: c.Z.highlight }),
                        ),
                        n().createElement('div', { className: c.Z.checkmark }),
                        ((M || O) && Y) || null,
                    );
                };
            },
            8844: (e, t, a) => {
                'use strict';
                let u, n, s;
                a.d(t, { N3: () => s, Rh: () => n, yB: () => u }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(u || (u = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(s || (s = {}));
            },
            7405: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var u = a(6483),
                    n = a.n(u),
                    s = a(2372),
                    r = a(6179),
                    i = a.n(r),
                    o = a(8460),
                    l = a(329);
                const c = (0, r.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: u,
                        value: r,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: E,
                    }) =>
                        i().createElement(
                            'span',
                            { className: n()(o.Z.base, o.Z[`base__${a}`], p) },
                            i().createElement(
                                'span',
                                {
                                    className: n()(
                                        o.Z.value,
                                        o.Z[`value__${u}`],
                                        !d && o.Z.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                _ && r > 0 && '+',
                                i().createElement(s.A, { value: r, format: u === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: n()(o.Z.icon, o.Z[`icon__${u}-${a}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: n()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            t && o.Z.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: o.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, a) => {
                'use strict';
                let u, n, s;
                a.d(t, { V2: () => n, et: () => u, we: () => s }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(u || (u = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(s || (s = {}));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => r });
                var u = a(6179),
                    n = a.n(u),
                    s = a(9916);
                class r extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = s.B3.GOLD;
                        else e = s.B3.INTEGRAL;
                        const t = s.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                r.defaultProps = { format: 'integral' };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => _ });
                var u = a(3138),
                    n = a(6179),
                    s = a(1043),
                    r = a(5262);
                const i = u.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, r.T)(o, l, s.j)),
                    _ = (0, n.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var u = a(3138),
                    n = a(6536),
                    s = a(6179),
                    r = a.n(s),
                    i = a(3495),
                    o = a(1043),
                    l = a(5262);
                const c = ({ children: e }) => {
                    const t = (0, s.useContext)(i.Y),
                        a = (0, s.useState)(t),
                        c = a[0],
                        _ = a[1],
                        d = (0, s.useCallback)((e, t) => {
                            const a = u.O.view.pxToRem(e),
                                n = u.O.view.pxToRem(t);
                            _(Object.assign({ width: a, height: n }, (0, l.T)(a, n, o.j)));
                        }, []),
                        m = (0, s.useCallback)(() => {
                            const e = u.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, n.Z)(() => {
                        u.O.client.events.on('clientResized', d), u.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                u.O.client.events.off('clientResized', d),
                                    u.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const p = (0, s.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(i.Y.Provider, { value: p }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var u = a(6179),
                    n = a(7382),
                    s = a(3495);
                const r = ['children'];
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, r);
                    const i = (0, u.useContext)(s.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        _ = i.small,
                        d = i.extraSmall,
                        m = i.extraLargeWidth,
                        p = i.largeWidth,
                        E = i.mediumWidth,
                        b = i.smallWidth,
                        g = i.extraSmallWidth,
                        h = i.extraLargeHeight,
                        A = i.largeHeight,
                        C = i.mediumHeight,
                        v = i.smallHeight,
                        f = i.extraSmallHeight,
                        D = { extraLarge: h, large: A, medium: C, small: v, extraSmall: f };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && _) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, n.H)(t, a, D);
                        if (a.largeWidth && p) return (0, n.H)(t, a, D);
                        if (a.mediumWidth && E) return (0, n.H)(t, a, D);
                        if (a.smallWidth && b) return (0, n.H)(t, a, D);
                        if (a.extraSmallWidth && g) return (0, n.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && A) return t;
                            if (a.mediumHeight && C) return t;
                            if (a.smallHeight && v) return t;
                            if (a.extraSmallHeight && f) return t;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, u.memo)(i);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => u });
                const u = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => n.Y, ZN: () => u.Z });
                a(6010);
                var u = a(1039),
                    n = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => u });
                const u = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var u;
                function n(e, t, a) {
                    const u = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, a),
                        n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, a),
                        s = Math.min(u, n);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => n, u: () => u }),
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
                    })(u || (u = {}));
            },
            8089: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => _ });
                var u = a(6179),
                    n = a.n(u),
                    s = a(6483),
                    r = a.n(s),
                    i = a(7727),
                    o = a(7476);
                const l = [
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
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            u = e.goto,
                            s = e.side,
                            i = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            E = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        s = Object.keys(e);
                                    for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(e, l)),
                            g = r()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${s}`], null == _ ? void 0 : _.base),
                            h = r()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${s}`], null == _ ? void 0 : _.icon),
                            A = r()(o.Z.glow, null == _ ? void 0 : _.glow),
                            C = r()(o.Z.caption, o.Z[`caption__${i}`], null == _ ? void 0 : _.caption),
                            v = r()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return n().createElement(
                            'div',
                            c(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                b,
                            ),
                            'info' !== i && n().createElement('div', { className: o.Z.shine }),
                            n().createElement('div', { className: h }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: C }, t),
                            u && n().createElement('div', { className: v }, u),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => o });
                var u = a(6179),
                    n = a.n(u),
                    s = a(2056);
                const r = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, r);
                    return n().createElement(
                        s.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var u = a(2056),
                    n = a(6179),
                    s = a.n(n);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, r);
                        const p = (0, n.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return s().createElement(
                            u.u,
                            i(
                                {
                                    contentId:
                                        ((E = null == d ? void 0 : d.hasHtmlContent),
                                        E ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var u = a(7902),
                    n = a(9916),
                    s = a(6179);
                const r = [
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
                function i(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const o = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            g = e.decoratorId,
                            h = void 0 === g ? 0 : g,
                            A = e.isEnabled,
                            C = void 0 === A || A,
                            v = e.targetId,
                            f = void 0 === v ? 0 : v,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, r);
                        const y = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, s.useMemo)(() => f || (0, u.F)().resId, [f]),
                            S = (0, s.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(a, h, { isMouseEvent: !0, on: !0, arguments: i(n) }, w),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [a, h, n, w, D]),
                            k = (0, s.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(a, h, { on: !1 }, w),
                                        y.current.isVisible && F && F(),
                                        (y.current.isVisible = !1);
                                }
                            }, [a, h, w, F]),
                            T = (0, s.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === C && k();
                            }, [C, k]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return C
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var x;
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
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => u });
                const u = (e) => {
                    let t,
                        a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                (a = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                        }
                    );
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => i });
                var u = a(3138);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: a = r, context: s = 'model' } = {}) {
                    const i = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = i.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const u = a(t),
                            n = s.split('.').reduce((e, t) => e[t], u);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, n);
                    };
                    return {
                        subscribe: (a, n) => {
                            const r = 'string' == typeof n ? `${s}.${n}` : s,
                                o = u.O.view.addModelObserver(r, t, !0);
                            return i.set(o, a), e && a(l(n)), o;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const a = l(t);
                            return (...t) => {
                                a(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, a = n(i.keys()); !(e = a()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => o });
                var u = a(4598),
                    n = a(9174),
                    s = a(6179),
                    r = a.n(s),
                    i = a(8246);
                const o = () => (e, t) => {
                    const a = (0, s.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, s.useRef)([]),
                                m = (a, s, r) => {
                                    var o;
                                    const l = i.U(s),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == r ? void 0 : r.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === a ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: a,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const s = null != t ? t : _(e),
                                                        r = n.LO.box(s, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : _(e),
                                                        r = n.LO.box(s, { equals: u.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const u = _(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(u[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            r = Object.entries(s),
                                                            i = r.reduce(
                                                                (e, [t, a]) => ((e[a] = n.LO.box(u[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        r.forEach(([t, a]) => {
                                                                            i[a].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        E = { mode: a, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === a && r ? r.controls(E) : t(E),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                p = (0, s.useRef)(!1),
                                E = (0, s.useState)(o),
                                b = E[0],
                                g = E[1],
                                h = (0, s.useState)(() => m(o, l, _)),
                                A = h[0],
                                C = h[1];
                            return (
                                (0, s.useEffect)(() => {
                                    p.current ? C(m(b, l, _)) : (p.current = !0);
                                }, [_, b, l]),
                                (0, s.useEffect)(() => {
                                    g(o);
                                }, [o]),
                                (0, s.useEffect)(
                                    () => () => {
                                        A.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [A],
                                ),
                                r().createElement(a.Provider, { value: A }, c)
                            );
                        },
                        () => (0, s.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => o, on: () => i, onResize: () => s, onScaleUpdated: () => r });
                var u = a(2472),
                    n = a(1176);
                const s = (0, u.E)('clientResized'),
                    r = (0, u.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function u() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const s = `mouse${t}`,
                                        r = l[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, i),
                                        u(),
                                        () => {
                                            n &&
                                                (r(),
                                                window.removeEventListener(s, i),
                                                (e.listeners -= 1),
                                                u(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), u();
                        },
                        enable() {
                            (e.enabled = !0), u();
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => s,
                        getSize: () => n,
                        graphicsQuality: () => r,
                    });
                var u = a(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            2472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => n });
                var u = a(5959);
                const n = { view: a(7641), client: u };
            },
            3722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => u });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var u = a(2472);
                const n = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => u,
                        displayStatus: () => n.W,
                        displayStatusIs: () => B,
                        events: () => s.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var u = a(3722),
                    n = a(6112),
                    s = a(6538),
                    r = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const u = ['args'];
                const n = 2,
                    s = 16,
                    r = 32,
                    i = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        s = Object.keys(e);
                                    for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, u);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : r);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                a.d(t, { jv: () => u });
                function u() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                const u = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        u = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (u = window.subViews[a].id)),
                        { caller: a, stack: t, resId: u }
                    );
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var u = a(6179);
                const n = (e) => {
                    const t = (0, u.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            8526: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => i });
                var u = a(3138),
                    n = a(5521),
                    s = (a(9916), a(6179));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = n.n.NONE, t = r, a = !1, i = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== n.n.NONE)
                            return (
                                window.addEventListener('keydown', s, a),
                                () => {
                                    window.removeEventListener('keydown', s, a);
                                }
                            );
                        function s(n) {
                            if (n.keyCode === e) {
                                if (!i && u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a, i]);
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let u, n;
                a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            9480: (e, t, a) => {
                'use strict';
                function u(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                a.d(t, { U2: () => u, UI: () => r, dF: () => o, hX: () => i, u4: () => l });
                const n = u;
                function s(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                function i(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let n = 0; n < e.length; n++) {
                        var u;
                        const s = null == (u = e[n]) ? void 0 : u.value;
                        t(s, n, e) && a.push(s);
                    }
                    return a;
                }
                function o(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        const u = s(e[a]);
                        if (t(u, a, e)) return u;
                    }
                }
                function l(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let u = a;
                    for (let a = 0; a < e.length; a++) {
                        u = t(u, n(e, a), a, e);
                    }
                    return u;
                }
            },
            1641: (e, t, a) => {
                'use strict';
                let u;
                a.d(t, { t: () => u }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(u || (u = {}));
            },
            7727: (e, t, a) => {
                'use strict';
                function u(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { $: () => n, G: () => u });
                const n = {
                    playHighlight() {
                        u('highlight');
                    },
                    playClick() {
                        u('play');
                    },
                    playYes() {
                        u('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                a.d(t, {
                    BN: () => i,
                    Eg: () => c,
                    Uw: () => g,
                    WU: () => s,
                    e: () => o,
                    uF: () => r,
                    v2: () => n,
                    z4: () => l,
                });
                var u = a(1281);
                let n;
                function s(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    m = (e, t, a = n.left) => e.split(t).reduce(a === n.left ? _ : d, []),
                    p = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    b = (e, t = n.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(a)) return p(e);
                        if ('ja' === a) {
                            return (0, u.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = n.left) => {
                            let a = [];
                            const u =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                s = l(e);
                            return m(s, /( )/, t).forEach((e) => (a = a.concat(m(e, u, n.left)))), a;
                        })(e, t);
                    },
                    g = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : b(e, t)));
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var u = a(3138);
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
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = u.O.view.addModelObserver(e, a, n);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const s = n;
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => r.Z5,
                    B0: () => i,
                    c9: () => A,
                    ry: () => g,
                    Eu: () => h,
                });
                class u {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return u.__instance || (u.__instance = new u()), u.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const n = u;
                var s = a(1358);
                var r = a(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = a(5521),
                    m = a(3138);
                const p = ['args'];
                function E(e, t, a, u, n, s, r) {
                    try {
                        var i = e[s](r),
                            o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(u, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        a = arguments;
                                    return new Promise(function (u, n) {
                                        var s = e.apply(t, a);
                                        function r(e) {
                                            E(s, u, n, r, i, 'next', e);
                                        }
                                        function i(e) {
                                            E(s, u, n, r, i, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        n = {},
                                        s = Object.keys(e);
                                    for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, p);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((u = n),
                                              Object.entries(u).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    C = () => A(i.CLOSE),
                    v = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var f = a(7572);
                const D = n.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => A(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => A(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, u, n = R.invalid('resId'), s) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            A(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: u || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: b(p),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => v(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, C);
                        },
                        handleViewEvent: A,
                        onBindingsReady: g,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const n = Object.prototype.toString.call(t[u]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < n.length; t++) a[u].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => u, cy: () => n });
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            1922: (e, t, a) => {
                'use strict';
                a.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var u = a(6483),
                    n = a.n(u),
                    s = a(7739),
                    r = a(6179),
                    i = a.n(r),
                    o = a(1960);
                let l;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(l || (l = {}));
                const c = () => {
                        const e = (0, r.useContext)(s.YN);
                        return e.extraSmall
                            ? l.Tiny
                            : e.small
                              ? l.Small
                              : e.medium || 1080 === e.height
                                ? l.Medium
                                : e.large
                                  ? l.Large
                                  : e.extraLarge
                                    ? l.Huge
                                    : l.None;
                    },
                    _ = ({ header: e, content: t, aside: a, footer: u, compare: s = !1 }) => {
                        const r = c(),
                            l = n()(o.Z.base, r && o.Z[`base__${r}`], s && o.Z.base__compare),
                            _ = n()(o.Z.header, r && o.Z[`header__${r}`]),
                            d = n()(o.Z.main),
                            m = n()(o.Z.content);
                        return i().createElement(
                            'div',
                            { className: l },
                            e && i().createElement('div', { className: _ }, e),
                            i().createElement(
                                'div',
                                { className: m },
                                i().createElement(
                                    'div',
                                    { className: d },
                                    i().createElement('div', { className: o.Z.inner }, t),
                                ),
                                a,
                            ),
                            u && i().createElement('div', { className: o.Z.footer }, u),
                        );
                    };
            },
            3522: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var u = a(4598),
                    n = a(9480),
                    s = a(3946),
                    r = a(1922);
                const i = [
                        'ration',
                        'chocolate',
                        'cocacola',
                        'hotCoffee',
                        'ration_uk',
                        'ration_czech',
                        'ration_china',
                        'ration_japan',
                        'ration_poland',
                        'ration_sweden',
                        'ration_italy',
                        'removedRpmLimiter',
                        'qualityOil',
                        'gasoline100',
                        'gasoline105',
                    ],
                    o = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...i,
                    ],
                    l = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...i,
                    ],
                    c = (e) =>
                        n.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: n.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: n.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: n.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                                oldStylePrice: Object.assign({}, e.price, {
                                    price: n.UI(e.price.price, (e) => ({ value: Object.assign({}, e) })),
                                    defPrice: n.UI(e.price.defPrice, (e) => ({ value: Object.assign({}, e) })),
                                    discount: n.UI(e.price.discount, (e) => ({ value: Object.assign({}, e) })),
                                }),
                            }),
                        ),
                    _ = (e) => {
                        const t = {
                                root: e.object(),
                                tankSetup: e.object('tankSetup'),
                                vehicleInfo: e.object('vehicleInfo'),
                                lastSlotAction: e.object('lastSlotAction'),
                                optDevices: {
                                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                                    setup: e.object('tankSetup.optDevicesSetup'),
                                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                },
                                consumables: {
                                    consumables: e.object('tankSetup.consumablesSetup'),
                                    slots: e.array('tankSetup.consumablesSetup.slots'),
                                },
                                boosters: {
                                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                },
                            },
                            a = (0, s.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return n.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: n.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: n.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: n.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: u.jv },
                            ),
                            i = (0, s.Om)(() => a().length),
                            _ = (0, s.Om)(
                                (e) => {
                                    const t = n.U2(a(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: u.jv },
                            ),
                            d = (0, s.Om)((e) => _(e).bonuses.items.length, { equals: u.jv }),
                            m = (0, s.Om)(
                                (e, t) => {
                                    const a = _(e),
                                        u = n.U2(a.bonuses.items, t);
                                    if (!u) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, u);
                                },
                                { equals: u.jv },
                            ),
                            p = (0, s.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            E = (0, s.Om)((e, t, a) => {
                                const u = d(e),
                                    n = p(e);
                                let s = n ? a - n : a,
                                    r = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!s) return null;
                                    (r = u > 2 ? 1 : 2 === u ? (s > 2 ? 2 : 1) : s), (s -= r);
                                }
                                return r;
                            }),
                            b = (0, s.Om)(
                                (e, t) => {
                                    const a = m(e, t);
                                    return n.dF(a.values, ({ valueKey: e }) => e === a.localeName);
                                },
                                { equals: u.jv },
                            ),
                            g = (0, s.Om)(
                                (e, a) =>
                                    ((e, t, a) => {
                                        const u = a !== r.cJ.Tiny || t ? o : l,
                                            s = c(e),
                                            i = n.u4(
                                                s,
                                                (e, t) => {
                                                    const a = u.indexOf(t.itemName);
                                                    return (e[-1 === a ? Math.max(e.length, l.length) : a] = t), e;
                                                },
                                                [],
                                            );
                                        return n.hX(i, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, a),
                                { equals: u.jv },
                            ),
                            h = (0, s.Om)((e, t) => g(e, t).length),
                            A = (0, s.Om)(
                                (e, t, a) => {
                                    const u = n.U2(g(t, a), e);
                                    if (!u) throw Error(`No consumable found with index: ${u}`);
                                    return Object.assign({}, u);
                                },
                                { equals: u.jv },
                            ),
                            C = (0, s.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), c(e);
                                    var e;
                                },
                                { equals: u.jv },
                            ),
                            v = (0, s.Om)(() => C().length),
                            f = (0, s.Om)(
                                (e) => {
                                    const t = n.U2(C(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: u.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: i,
                                    device: _,
                                    bonusesLength: d,
                                    bonus: m,
                                    bonusEffectLinesCount: p,
                                    bonusVisibleLinesCount: E,
                                    bonusValue: b,
                                },
                                consumables: { length: h, consumable: A },
                                boosters: { length: v, booster: f },
                            },
                        };
                    };
            },
            3028: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var u = a(3215),
                    n = a(4598),
                    s = a(9480),
                    r = a(3946),
                    i = a(3522);
                const o = (0, u.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, i._)(e),
                                a = t.model,
                                u = t.computes,
                                o = e.object('tankSetup.shellsSetup'),
                                l = e.array('tankSetup.shellsSetup.slots'),
                                c = e.object('ammunitionPanel'),
                                _ = e.array('ammunitionPanel.sectionGroups'),
                                d = (0, r.Om)(
                                    (e) => {
                                        const t = s.U2(l.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: n.jv },
                                ),
                                m = (0, r.Om)(() => l.get().length),
                                p = (0, r.Om)(() => s.UI(l.get(), (e) => e.intCD), { equals: n.jv }),
                                E = (0, r.Om)((e) => d(e).specifications.length),
                                b = (0, r.Om)(
                                    (e, t) => {
                                        const a = d(e),
                                            u = s.U2(a.specifications, t);
                                        if (!u) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, u);
                                    },
                                    { equals: n.jv },
                                ),
                                g = (0, r.Om)(
                                    (e, t) => {
                                        const a = d(e),
                                            u = s.U2(a.price.price, t);
                                        if (!u) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, u);
                                    },
                                    { equals: n.jv },
                                ),
                                h = (0, r.Om)(
                                    (e, t) => {
                                        const a = d(e),
                                            u = s.U2(a.price.defPrice, t);
                                        if (!u) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, u);
                                    },
                                    { equals: n.jv },
                                ),
                                A = (0, r.Om)((e) => d(e).price.price.length),
                                C = (0, r.Om)((e) => d(e).price.defPrice.length),
                                v = (0, r.Om)(() => {
                                    const e = c.get().selectedSlot,
                                        t = s.U2(_.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const a = s.U2(t.sections, 0);
                                    if (!a) throw Error('No section found');
                                    const u = s.U2(a.slots, e);
                                    if (!u) throw Error(`No slot found with index: ${e}`);
                                    const n = s.U2(u.specializations.specializations, 0);
                                    return null == n ? void 0 : n.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), a, {
                                shellsSetup: o,
                                shellsSlots: l,
                                ammunitionPanel: c,
                                sectionGroups: _,
                                computes: Object.assign({}, u, {
                                    shells: {
                                        length: m,
                                        shell: d,
                                        specificationsLength: E,
                                        specification: b,
                                        price: g,
                                        priceLength: A,
                                        defPriceLength: C,
                                        defPrice: h,
                                        ids: p,
                                    },
                                    selectedSlotSpecialization: v,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    l = (o[0], o[1]);
            },
            2135: (e, t, a) => {
                'use strict';
                var u = {};
                a.r(u),
                    a.d(u, {
                        Area: () => it,
                        Bar: () => nt,
                        DefaultScroll: () => rt,
                        Direction: () => je,
                        defaultSettings: () => We,
                        useHorizontalScrollApi: () => Ve,
                    });
                var n = {};
                a.r(n), a.d(n, { Area: () => Bt, Bar: () => ft, Default: () => Ft, useVerticalScrollApi: () => ot });
                var s = a(7739),
                    r = a(6179),
                    i = a.n(r),
                    o = a(6483),
                    l = a.n(o),
                    c = a(926),
                    _ = a.n(c),
                    d = a(1043);
                let m, p, E;
                !(function (e) {
                    (e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = d.j.small.width)] = 'Small'),
                        (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                        (e[(e.Large = d.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge');
                })(m || (m = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.width)] = 'Small'),
                            (e[(e.Medium = d.j.medium.width)] = 'Medium'),
                            (e[(e.Large = d.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.width)] = 'ExtraLarge');
                    })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = d.j.small.height)] = 'Small'),
                            (e[(e.Medium = d.j.medium.height)] = 'Medium'),
                            (e[(e.Large = d.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = d.j.extraLarge.height)] = 'ExtraLarge');
                    })(E || (E = {}));
                const b = () => {
                        const e = (0, r.useContext)(s.YN),
                            t = e.width,
                            a = e.height,
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return m.ExtraLarge;
                                    case e.large:
                                        return m.Large;
                                    case e.medium:
                                        return m.Medium;
                                    case e.small:
                                        return m.Small;
                                    case e.extraSmall:
                                        return m.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), m.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return p.ExtraLarge;
                                    case e.largeWidth:
                                        return p.Large;
                                    case e.mediumWidth:
                                        return p.Medium;
                                    case e.smallWidth:
                                        return p.Small;
                                    case e.extraSmallWidth:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return E.ExtraLarge;
                                    case e.largeHeight:
                                        return E.Large;
                                    case e.mediumHeight:
                                        return E.Medium;
                                    case e.smallHeight:
                                        return E.Small;
                                    case e.extraSmallHeight:
                                        return E.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), E.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: u, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: a };
                    },
                    g = ['children', 'className'];
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: _().SMALL_WIDTH,
                        [p.Medium]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH}`,
                        [p.Large]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH}`,
                        [p.ExtraLarge]: `${_().SMALL_WIDTH} ${_().MEDIUM_WIDTH} ${_().LARGE_WIDTH} ${_().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [E.ExtraSmall]: '',
                        [E.Small]: _().SMALL_HEIGHT,
                        [E.Medium]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT}`,
                        [E.Large]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${_().SMALL_HEIGHT} ${_().MEDIUM_HEIGHT} ${_().LARGE_HEIGHT} ${_().EXTRA_LARGE_HEIGHT}`,
                    },
                    v = {
                        [m.ExtraSmall]: '',
                        [m.Small]: _().SMALL,
                        [m.Medium]: `${_().SMALL} ${_().MEDIUM}`,
                        [m.Large]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE}`,
                        [m.ExtraLarge]: `${_().SMALL} ${_().MEDIUM} ${_().LARGE} ${_().EXTRA_LARGE}`,
                    },
                    f = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, g);
                        const n = b(),
                            s = n.mediaWidth,
                            r = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', h({ className: l()(a, A[s], C[r], v[o]) }, u), t);
                    },
                    D = ['children'];
                const F = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, D);
                    return i().createElement(s.ZN, null, i().createElement(f, a, t));
                };
                var B = a(493),
                    y = a.n(B),
                    w = a(1856),
                    S = a(3403),
                    k = a(9152),
                    T = a(7383);
                const x = (0, r.createContext)(null),
                    N = () => {
                        const e = (0, r.useContext)(x);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var M = a(7902);
                const L = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var O = a(6536),
                    I = a(9916);
                const P = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    H = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const u = L(`${e}.${a}`, window);
                                return P(u) ? t(e, a, u) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    z = (e) => {
                        const t = ((e) => {
                                const t = (0, M.F)(),
                                    a = t.caller,
                                    u = t.resId,
                                    n = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: n, modelPath: $(n, e || ''), resId: u };
                            })(),
                            a = t.modelPrefix,
                            u = e.split('.');
                        if (u.length > 0) {
                            const e = [u[0]];
                            return (
                                u.reduce((t, u) => {
                                    const n = L($(a, `${t}.${u}`), window);
                                    return P(n) ? (e.push(n.id), `${t}.${u}.value`) : (e.push(u), `${t}.${u}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    j = I.Sw.instance;
                let W;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(W || (W = {}));
                const G = (e = 'model', t = W.Deep) => {
                    const a = (0, r.useState)(0),
                        u = (a[0], a[1]),
                        n = (0, r.useMemo)(() => (0, M.F)(), []),
                        s = n.caller,
                        i = n.resId,
                        o = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const t = L(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return P(t) ? t.value : t;
                            })(H(o)),
                        ),
                        c = l[0],
                        _ = l[1],
                        d = (0, r.useRef)(-1);
                    return (
                        (0, O.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? W.Deep : W.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== W.None)
                            ) {
                                const a = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === W.Deep
                                            ? (e === c && u((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    n = z(e);
                                d.current = j.addCallback(n, a, i, t === W.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== W.None)
                                return () => {
                                    j.removeCallback(d.current, i);
                                };
                        }, [i, t]),
                        c
                    );
                };
                var V = a(1922),
                    Z = a(2262),
                    U = a(3649);
                const q = 'FormatText_base_d0',
                    K = ({
                        binding: e,
                        text: t = '',
                        classMix: a,
                        alignment: u = U.v2.left,
                        formatWithBrackets: n,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const s = n && e ? (0, U.WU)(t, e) : t;
                        return i().createElement(
                            r.Fragment,
                            null,
                            s.split('\n').map((t, n) =>
                                i().createElement(
                                    'div',
                                    { className: l()(q, a), key: `${t}-${n}` },
                                    (0, U.Uw)(t, u, e).map((e, t) =>
                                        i().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                var Y = a(6373);
                const X = 'visible_change',
                    J = X,
                    Q = X,
                    ee = (e, t) => {
                        const a = G('tutorialModel.triggers.items').filter((a) => {
                            if (!a) return !1;
                            const u = a.value,
                                n = u.triggers.filter((e) => e.value === t);
                            return u.componentId === e && n.length > 0;
                        });
                        if (0 === a.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: a[0].value,
                            runTrigger: (a) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: a });
                            },
                        };
                    },
                    te = 'epic_battle';
                let ae, ue, ne, se;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(ae || (ae = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(ue || (ue = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(ne || (ne = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(se || (se = {}));
                const re = 'tooltip_watched';
                let ie;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(ie || (ie = {}));
                const oe = ['action', 'timeLimit'];
                const le = 'metrics',
                    ce = () => Date.now(),
                    _e = ({ partnerID: e, item: t, parentScreen: a, itemState: u, info: n }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: u || null,
                        additional_info: n || null,
                    }),
                    de = (e, t) => {
                        const a = (0, r.useCallback)(
                            (a, u = se.Info, n) => {
                                n || (n = {}),
                                    Object.keys(n).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: u,
                                            params: JSON.stringify(n),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, u) => a(e, t, u);
                    },
                    me = (e, t) => {
                        const a = de(e, t),
                            u = (0, r.useRef)(new Map()),
                            n = (0, r.useRef)(new Map()),
                            s = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    (void 0 !== t && t > 0) || u.current.set(e, ce());
                                },
                                [u],
                            ),
                            i = (0, r.useCallback)(() => {
                                u.current.clear(), n.current.clear();
                            }, [u, n]),
                            o = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== u.current.get(e) &&
                                        void 0 === n.current.get(e) &&
                                        n.current.set(e, ce());
                                },
                                [u, n],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    if (void 0 === t) return;
                                    const a = n.current.get(e);
                                    if (void 0 === a) return;
                                    n.current.delete(e);
                                    const s = ce() - a;
                                    u.current.set(e, t + s);
                                },
                                [u, n],
                            ),
                            c = (0, r.useCallback)(
                                (e, t = 0, s, r) => {
                                    const i = u.current.get(e);
                                    if (void 0 === i) return;
                                    void 0 !== n.current.get(e) && l(e), u.current.delete(e);
                                    const o = (ce() - i) / 1e3;
                                    o <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, o)),
                                        a(e, s, r));
                                },
                                [u, n, a, l],
                            );
                        return [(e) => s(e), (e, t, a, u) => c(e, t, a, u), () => i(), (e) => o(e), (e) => l(e)];
                    },
                    pe = (e) => {
                        const t = me(e, le),
                            a = t[0],
                            u = t[1],
                            n = t[2],
                            s = t[3],
                            i = t[4],
                            o = (0, r.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        a = e.timeLimit,
                                        n = e.logLevel;
                                    u(t, a, n, _e(e));
                                },
                                [u],
                            );
                        return [(e) => a(e), (e) => o(e), () => n(), (e) => s(e), (e) => i(e)];
                    },
                    Ee = (e, t) => {
                        const a = pe(e),
                            u = a[0],
                            n = a[1],
                            s = t.action,
                            i = t.timeLimit,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(t, oe);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => u(s || re),
                                onHide: () => n(Object.assign({ action: s || re, timeLimit: i || 2 }, o)),
                            }),
                            [s, i, o, u, n],
                        );
                    };
                var be = a(5310),
                    ge = a(7198);
                const he = 'model.tankSetup.frontlineSetup',
                    Ae = {
                        base: 'AbilitiesActionsPanel_base_c0',
                        base__tiny: 'AbilitiesActionsPanel_base__tiny_b8',
                        base__small: 'AbilitiesActionsPanel_base__small_9d',
                        base__medium: 'AbilitiesActionsPanel_base__medium_31',
                        base__large: 'AbilitiesActionsPanel_base__large_15',
                        base__huge: 'AbilitiesActionsPanel_base__huge_27',
                        toReservesBtn: 'AbilitiesActionsPanel_toReservesBtn_6b',
                        checkBox: 'AbilitiesActionsPanel_checkBox_77',
                        checkBoxZone: 'AbilitiesActionsPanel_checkBoxZone_49',
                        checkBoxLabel: 'AbilitiesActionsPanel_checkBoxLabel_2a',
                        vehicleIcon: 'AbilitiesActionsPanel_vehicleIcon_2f',
                    };
                var Ce = a(3457);
                const ve = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let fe, De;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(fe || (fe = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(De || (De = {}));
                const Fe = i().memo(function ({ value: e, className: t, theme: a, size: u }) {
                    return i().createElement(
                        'div',
                        { className: l()(ve.base, ve[`base__${a}`], ve[`base__${u}`], t) },
                        i().createElement('div', { className: ve.label }, e),
                        i().createElement('div', { className: ve.icon }),
                    );
                });
                var Be = a(2056);
                const ye = i().memo(function ({ pointsNeeded: e, isEnabled: t, children: a }) {
                        return i().createElement(
                            Be.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            i().createElement('div', null, a),
                        );
                    }),
                    we = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    Se = i().memo(function ({ price: e, isAvailable: t, onPurchase: a, onCancel: u }) {
                        const n = { pointsNeeded: e - (0, r.useContext)(Fs), isEnabled: !t };
                        return i().createElement(
                            'div',
                            { className: l()(we.base, t && we.base__isAvailable) },
                            i().createElement(
                                ye,
                                n,
                                i().createElement(
                                    'div',
                                    { className: we.priceContainer },
                                    i().createElement(
                                        'div',
                                        { className: we.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    i().createElement(Fe, { value: e, theme: t ? De.Brown : De.Red, size: fe.Big }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: we.actions },
                                i().createElement(
                                    ye,
                                    n,
                                    i().createElement(
                                        Ce.u5,
                                        {
                                            size: Ce.qE.medium,
                                            disabled: !t,
                                            onClick: a,
                                            mixClass: l()(we.purchaseButton, we.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                i().createElement(
                                    Ce.u5,
                                    { size: Ce.qE.medium, type: Ce.L$.secondary, mixClass: we.button, onClick: u },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Te = () => {
                        const e = (0, V.GS)(),
                            t = (0, r.useContext)(Fs),
                            a = G(he),
                            u = a.isTypeSelected,
                            n = a.vehicleType,
                            s = a.onChangeApplyAbilitiesToTypeSettings,
                            o = a.onDealConfirmed,
                            c = a.onDealCancelled,
                            _ = a.totalPurchasePrice,
                            d = a.purchaseSelectedAbilities,
                            m = G(`${he}.dealPanel`),
                            p = m.isDisabled,
                            E = m.canAccept,
                            b = m.canCancel,
                            g = (0, U.BN)(n),
                            h = (0, r.useCallback)(() => s(), [s]),
                            A = (0, r.useCallback)(() => o(), [o]),
                            C = (0, r.useCallback)(() => c(), [c]),
                            v = (0, r.useCallback)(() => d(), [d]),
                            f = l()(Ae.base, e && Ae[`base__${e}`]),
                            D = l()(Ae.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            F = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            B = (0, r.useMemo)(
                                () => ({
                                    icon: i().createElement('span', { className: Ae.vehicleIcon, style: F }),
                                    vehicle: R.strings.menu.classes.short.$dyn(g),
                                }),
                                [F, g],
                            ),
                            y = ee('ShowAbilitiesButton', Q),
                            w = (0, r.useRef)(_),
                            S = (0, r.useRef)(t);
                        (0, r.useEffect)(() => {
                            (w.current = _), (S.current = t);
                        }, [_, t]),
                            (0, r.useEffect)(() => {
                                y && y.runTrigger(!0);
                            }, [y]);
                        const k = ee('ApplyAbilitiesToTypeCheckbox', Q);
                        (0, r.useEffect)(() => {
                            k && k.runTrigger(!0);
                        }, [k]);
                        const x = Ee(te, { item: ue.AbilitiesCheckboxTooltip, parentScreen: ae.SetupView }),
                            N = _ || w.current,
                            M = N > 0 && t === S.current,
                            L = !M && E;
                        return i().createElement(
                            'div',
                            { className: f },
                            L &&
                                i().createElement(
                                    'div',
                                    { className: D },
                                    i().createElement(
                                        Y.i,
                                        ke(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(g) },
                                            x,
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: Ae.checkBoxZone },
                                            i().createElement(
                                                Z.XZ,
                                                { isChecked: u, onChange: h, type: Z.Rh.main, size: Z.yB.medium },
                                                i().createElement(
                                                    'span',
                                                    { className: Ae.checkBoxLabel },
                                                    i().createElement(K, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: B,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            i().createElement(
                                be.f,
                                { when: !0, canAccept: M || L },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    M &&
                                        i().createElement(Se, {
                                            price: N,
                                            isAvailable: t >= N,
                                            onPurchase: v,
                                            onCancel: C,
                                        }),
                                    L &&
                                        i().createElement(ge.Z, {
                                            applyBtnString: u ? T.qZ : T.k4,
                                            isDisabled: p,
                                            canCancel: b,
                                            onCancel: C,
                                            onConfirm: A,
                                        }),
                                ),
                            ),
                        );
                    },
                    xe = (e, t, a) => (a < e ? e : a > t ? t : a);
                var Ne = a(3138);
                const Me = [];
                function Le(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), Me)
                    );
                }
                function Oe(e, t, a = []) {
                    const u = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(u.current), a || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != a ? a : []).concat([t]);
                    return [
                        (0, r.useCallback)((a) => {
                            (u.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, s),
                        n,
                    ];
                }
                var Re = a(7727);
                const Ie = (e, t = []) => {
                    const a = (0, r.useRef)(),
                        u = (0, r.useCallback)((...t) => {
                            a.current && a.current(), (a.current = e(...t));
                        }, t);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                a.current && a.current();
                            },
                            [u],
                        ),
                        u
                    );
                };
                function Pe(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return $e(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return $e(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var u = 0;
                        return function () {
                            return u >= e.length ? { done: !0 } : { done: !1, value: e[u++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $e(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                function He(e, t, a) {
                    const u = (0, r.useMemo)(
                        () =>
                            (function (e, t, a, u) {
                                let n,
                                    s = !1,
                                    r = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - r;
                                    function _() {
                                        (r = Date.now()), a.apply(l, o);
                                    }
                                    s ||
                                        (u && !n && _(),
                                        i(),
                                        void 0 === u && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  u
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : _,
                                                  void 0 === u ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                                    (o.cancel = function () {
                                        i(), (s = !0);
                                    }),
                                    o
                                );
                            })(a, e),
                        t,
                    );
                    return (0, r.useEffect)(() => u.cancel, [u]), u;
                }
                var ze = a(7030);
                let je;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(je || (je = {}));
                const We = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ge = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: u,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, a) => {
                            const u = t(e),
                                n = u[0],
                                s = u[1];
                            return s <= n ? 0 : xe(n, s, a);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? We : l,
                                _ = (0, r.useRef)(null),
                                d = (0, r.useRef)(null),
                                m = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        u = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        n = (e, ...a) => {
                                            for (var u, n = Pe(t(e).values()); !(u = n()).done; ) (0, u.value)(...a);
                                        };
                                    return (0, r.useMemo)(() => ({ on: a, off: u, trigger: n }), []);
                                })(),
                                p = He(
                                    () => {
                                        Ne.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, ze.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (a(t, e), m.trigger('change', e), s && p());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                b = E[0],
                                g = E[1],
                                h = (0, r.useCallback)(
                                    (e, t, a) => {
                                        var u;
                                        const n = b.scrollPosition.get(),
                                            s = (null != (u = b.scrollPosition.goal) ? u : 0) - n;
                                        return i(e, t * a + s + n);
                                    },
                                    [b.scrollPosition],
                                ),
                                A = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const u = _.current;
                                        u &&
                                            g.start({
                                                scrollPosition: i(u, e),
                                                immediate: t,
                                                reset: a,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(u, b.scrollPosition.get()) },
                                            });
                                    },
                                    [g, c.animationConfig, b.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            a = d.current;
                                        if (!t || !a) return;
                                        const u = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, c.step),
                                            s = h(t, e, u);
                                        A(s);
                                    },
                                    [A, h, c.step],
                                ),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(u(e)),
                                            _.current && m.trigger('mouseWheel', e, b.scrollPosition, t(_.current));
                                    },
                                    [b.scrollPosition, C, m],
                                ),
                                f = Ie(
                                    () =>
                                        (0, w.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (A(i(e, b.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [A, b.scrollPosition.goal],
                                ),
                                D = Le(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, b.scrollPosition.goal);
                                    t !== b.scrollPosition.goal && A(t, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: v,
                                    applyScroll: A,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: g,
                                    animationScroll: b,
                                    recalculateContent: D,
                                    events: { on: m.on, off: m.off },
                                }),
                                [b.scrollPosition, A, C, m.off, m.on, D, v, g, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ve = Ge({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? je.Next : je.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ze = 'HorizontalBar_base_49',
                    Ue = 'HorizontalBar_base__nonActive_82',
                    qe = 'HorizontalBar_leftButton_5f',
                    Ke = 'HorizontalBar_rightButton_03',
                    Ye = 'HorizontalBar_track_0d',
                    Xe = 'HorizontalBar_thumb_fd',
                    Je = 'HorizontalBar_rail_32',
                    Qe = 'disable',
                    et = { pending: !1, offset: 0 },
                    tt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    at = () => {},
                    ut = (e, t) => Math.max(20, e.offsetWidth * t),
                    nt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = tt, onDrag: u = at }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(et),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        _.current && u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [u],
                            ),
                            g = () => {
                                const t = c.current,
                                    a = _.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, u / n),
                                    l = xe(0, 1, r / (n - u)),
                                    d = (t.offsetWidth - ut(t, i)) * l;
                                (a.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && o.current && c.current && _.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Qe), void o.current.classList.remove(Qe);
                                            if (
                                                ((t = c.current),
                                                (a = _.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Qe), void o.current.classList.add(Qe);
                                            var t, a;
                                            s.current.classList.remove(Qe), o.current.classList.remove(Qe);
                                        }
                                    })(d);
                            },
                            h = Le(() => {
                                (() => {
                                    const t = _.current,
                                        a = c.current,
                                        u = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && u && a)) return;
                                    const r = Math.min(1, u / s);
                                    (t.style.width = `${ut(a, r)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === r ? n.current.classList.add(Ue) : n.current.classList.remove(Ue));
                                })(),
                                    g();
                            });
                        (0, r.useEffect)(() => (0, w.v)(h)),
                            (0, r.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let a = at;
                                        const u = () => {
                                            a(), (a = (0, w.v)(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', u),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', u);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = Ne.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const s = e.contentRef.current,
                                            r = e.wrapperRef.current;
                                        if (!s || !r) return;
                                        const i = c.current,
                                            o = _.current;
                                        if (!i || !o) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - i.getBoundingClientRect().x,
                                            d = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            u({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: d });
                                    }),
                                    a = Ne.O.client.events.mouse.up(() => {
                                        t(), b(et);
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, p.offset, p.pending, u, b]);
                        const A = Oe((t) => e.applyStepTo(t), d, [e]),
                            C = A[0],
                            v = A[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Qe) || (0, Re.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(Ze, t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(qe, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) ||
                                        0 !== e.button ||
                                        ((0, Re.G)('play'), C(je.Next));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(Ye, t.track),
                                    onMouseDown: (t) => {
                                        const u = _.current;
                                        if (u && 0 === t.button)
                                            if (((0, Re.G)('play'), t.target === u))
                                                b({ pending: !0, offset: t.screenX - u.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const u = _.current,
                                                        n = e.contentRef.current;
                                                    if (!u || !n) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > u.getBoundingClientRect().x ? je.Prev : je.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: _, className: l()(Xe, t.thumb) }),
                                i().createElement('div', { className: l()(Je, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(Ke, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) ||
                                        0 !== e.button ||
                                        ((0, Re.G)('play'), C(je.Prev));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    st = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    rt = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: l()(st.base, e.base) });
                            }, [u]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(st.defaultScroll, a), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(st.defaultScrollArea, n) },
                                i().createElement(it, { className: o, api: m, classNames: s }, e),
                            ),
                            i().createElement(nt, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    it = ({ api: e, className: t, classNames: a, children: u }) => (
                        (0, r.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(st.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: l()(st.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(st.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    u,
                                ),
                            ),
                        )
                    );
                (it.Bar = nt), (it.Default = rt);
                const ot = Ge({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? je.Next : je.Prev),
                    }),
                    lt = 'VerticalBar_base_f3',
                    ct = 'VerticalBar_base__nonActive_42',
                    _t = 'VerticalBar_topButton_d7',
                    dt = 'VerticalBar_bottomButton_06',
                    mt = 'VerticalBar_track_df',
                    pt = 'VerticalBar_thumb_32',
                    Et = 'VerticalBar_rail_43',
                    bt = 'disable',
                    gt = () => {},
                    ht = { pending: !1, offset: 0 },
                    At = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ct = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    vt = (e, t) => Math.max(20, e.offsetHeight * t),
                    ft = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = At, onDrag: u = gt }) => {
                        const n = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, r.useState)(ht),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        _.current && u({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [u],
                            ),
                            g = Le(() => {
                                const t = _.current,
                                    a = c.current,
                                    u = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(u && s && t && a)) return;
                                const r = Math.min(1, u / s);
                                return (
                                    (t.style.height = `${vt(a, r)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 === r ? n.current.classList.add(ct) : n.current.classList.remove(ct)),
                                    r
                                );
                            }),
                            h = Le(() => {
                                const t = c.current,
                                    a = _.current,
                                    u = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(u && t && a && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, u / n),
                                    l = xe(0, 1, r / (n - u)),
                                    d = (t.offsetHeight - vt(t, i)) * l;
                                (a.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && o.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(bt), void o.current.classList.remove(bt);
                                            if (
                                                ((t = c.current),
                                                (a = _.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(bt), void o.current.classList.add(bt);
                                            var t, a;
                                            s.current.classList.remove(bt), o.current.classList.remove(bt);
                                        }
                                    })(d);
                            }),
                            A = Le(() => {
                                Ct(e, () => {
                                    g(), h();
                                });
                            });
                        (0, r.useEffect)(() => (0, w.v)(A)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Ct(e, () => {
                                        h();
                                    });
                                };
                                let a = gt;
                                const u = () => {
                                    a(), (a = (0, w.v)(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', u),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', u);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = Ne.O.client.events.mouse.up(() => {
                                        b(ht);
                                    }),
                                    a = Ne.O.client.events.mouse.move(([t]) => {
                                        Ct(e, (a) => {
                                            const n = c.current,
                                                s = _.current,
                                                r = e.getContainerSize();
                                            if (!n || !s || !r) return;
                                            const i = t.screenY - p.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * r;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                u({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, p.offset, p.pending, u, b]);
                        const C = Oe((t) => e.applyStepTo(t), d, [e]),
                            v = C[0],
                            f = C[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const D = (e) => {
                            e.target.classList.contains(bt) || (0, Re.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(lt, t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(_t, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(bt) ||
                                        0 !== e.button ||
                                        ((0, Re.G)('play'), v(je.Next));
                                },
                                ref: s,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(mt, t.track),
                                    onMouseDown: (t) => {
                                        const u = _.current;
                                        if (u && 0 === t.button)
                                            if (((0, Re.G)('play'), t.target === u))
                                                b({ pending: !0, offset: t.screenY - u.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        Ct(e, (u) => {
                                                            if (!u) return;
                                                            const n = a(e),
                                                                s = e.clampPosition(u, u.scrollTop + n * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > u.getBoundingClientRect().y ? je.Prev : je.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: _, className: l()(pt, t.thumb) }),
                                i().createElement('div', { className: l()(Et, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(dt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(bt) ||
                                        0 !== e.button ||
                                        ((0, Re.G)('play'), v(je.Prev));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Dt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ft = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: u,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = u || {};
                                return Object.assign({}, e, { base: l()(Dt.base, e.base) });
                            }, [u]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Dt.defaultScroll, a), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Dt.area, n) },
                                i().createElement(Bt, { className: s, classNames: o, api: m }, e),
                            ),
                            i().createElement(ft, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Bt = ({ className: e, classNames: t, children: a, api: u }) => (
                        (0, r.useEffect)(() => (0, w.v)(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Dt.base, e), ref: u.wrapperRef, onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Dt.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                a,
                            ),
                        )
                    );
                Bt.Default = Ft;
                const yt = { Vertical: n, Horizontal: u };
                var wt = a(7078);
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const kt = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const u = i().createElement('div', { className: a }, e);
                    if (t.header || t.body) return i().createElement(Y.i, t, u);
                    const n = t.contentId;
                    return n ? i().createElement(Be.u, St({}, t, { contentId: n }), u) : i().createElement(wt.t, t, u);
                };
                var Tt = a(8045);
                const xt = 'ExtendedText_base_71',
                    Nt = 'ExtendedText_base__zeroPadding_25',
                    Mt = 'ExtendedText_base__isTruncationAvailable_5b',
                    Lt = 'ExtendedText_truncated_97',
                    Ot = 'ExtendedText_truncated__hide_31',
                    Rt = 'ExtendedText_unTruncated_b8';
                let It, Pt, $t;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(It || (It = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Pt || (Pt = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })($t || ($t = {}));
                const Ht = { [$t.NBSP]: It.NoBreakSymbol, [$t.ZWNBSP]: It.NoBreakSymbol, [$t.NEW_LINE]: It.LineBreak },
                    zt = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    jt = {
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
                    },
                    Wt = 'renderers_noBreakWrapper_10',
                    Gt = 'renderers_lineBreak_b5',
                    Vt = 'renderers_newLine_bd',
                    Zt = 'renderers_word_f3',
                    Ut = (e) => ({ color: `#${e}` }),
                    qt = ({ elementList: e, textBlock: t, key: a }) => {
                        const u = t.colorTag;
                        return u
                            ? jt[u]
                                ? i().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: l()(Zt, jt[u]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: Zt, style: Ut(u) },
                                      e,
                                  )
                            : i().createElement('span', { key: a, 'data-block-type': t.blockType, className: Zt }, e);
                    },
                    Kt = {
                        [It.Word]: qt,
                        [It.NoBreakSymbol]: qt,
                        [It.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            i().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: a }, e)),
                            ),
                        [It.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': It.LineBreak, className: Gt }),
                        [It.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': It.NewLine, className: Vt }, e),
                        [It.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': It.NoBreakWrapper, className: Wt },
                                e,
                            ),
                    },
                    Yt = (e, t, a) => {
                        const u = [];
                        return (
                            e.childList.forEach((n, s) => {
                                const r = `${a}_${s}`;
                                if (((e) => void 0 !== e.childList)(n)) {
                                    const e = n,
                                        t = e.blockType,
                                        a = Yt(e, Kt[t], r);
                                    u.push(...a);
                                } else u.push(t({ elementList: [n], textBlock: e, key: r }));
                            }),
                            u
                        );
                    },
                    Xt = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            u = e.blockType,
                                            n = Kt[u],
                                            s = Yt(e, n, t);
                                        return (
                                            u === It.NoBreakWrapper
                                                ? a.push(n({ elementList: s, textBlock: e, key: `${t}` }))
                                                : a.push(...s),
                                            a
                                        );
                                    })(e, a),
                                );
                            }),
                            t
                        );
                    },
                    Jt = (e, t, a, u) => {
                        let n = t.exec(e),
                            s = 0;
                        for (; n; ) s !== n.index && a(e.slice(s, n.index)), u(n), (s = t.lastIndex), (n = t.exec(e));
                        s !== e.length && a(e.slice(s));
                    },
                    Qt = zt
                        ? (e) => {
                              const t = [];
                              return (
                                  Jt(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      Jt(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e) => {
                              const t = /[\s\u002d]/g;
                              let a = t.exec(e);
                              if (!a) return [e];
                              const u = [];
                              let n = 0;
                              for (; a; ) u.push(e.slice(n, t.lastIndex)), (n = t.lastIndex), (a = t.exec(e));
                              return n !== e.length && u.push(e.slice(n)), u;
                          },
                    ea = (e, t = '') => {
                        const a = [];
                        return (
                            Jt(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: It.Word, colorTag: t, childList: Qt(e) });
                                },
                                (e) => {
                                    const u = e[0],
                                        n = Ht[u.charAt(0)];
                                    n === It.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: It.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: It.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : a.push({ blockType: n, colorTag: t, childList: [u] });
                                },
                            ),
                            a
                        );
                    },
                    ta = (e, t, a = '') => {
                        const u = [];
                        return (
                            Jt(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    u.push(...ea(e, a));
                                },
                                (e) => {
                                    const n = e[1],
                                        s = void 0 === t[n] ? e[0] : t[n];
                                    'string' == typeof s || 'number' == typeof s
                                        ? u.push(...ea(String(s), a))
                                        : u.push({ blockType: It.Binding, colorTag: a, childList: [s] });
                                },
                            ),
                            u
                        );
                    },
                    aa = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            u = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === It.NoBreakWrapper) e.childList.push(u), a.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && a.push(e),
                                a.push({ blockType: It.NoBreakWrapper, colorTag: '', childList: [t, u] });
                        }
                        return t.childList.length > 0 && a.push(t), a;
                    },
                    ua = (e, t = {}) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === It.NoBreakSymbol
                                        ? ((a = !0), t.push(...aa(t.pop(), e)))
                                        : (a ? t.push(...aa(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const a = [];
                                return (
                                    Jt(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            a.push(...ta(e, t));
                                        },
                                        (e) => {
                                            a.push(...ta(e[2], t, e[1]));
                                        },
                                    ),
                                    a
                                );
                            })((0, U.Eg)((0, U.z4)(e)), t),
                        );
                        return Xt(a);
                    },
                    na = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    sa = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    ra = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const u = sa(e, t),
                            n = e.textContent.length,
                            s = e.offsetWidth / n,
                            r = Math.ceil(u / s);
                        if (u > 0) {
                            const u = Math.floor((t - e.offsetLeft) / s);
                            return u >= a ? [!0, a + r] : [!1, u];
                        }
                        const i = Math.max(a + r, 0);
                        return n < i ? [!1, 0] : [!0, i];
                    },
                    ia = (e, t, a, u, n, s) => {
                        let r = -1,
                            o = null;
                        for (let l = a; l >= 0; l--) {
                            const a = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === It.LineBreak || c === It.NewLine || c === It.Binding) continue;
                            const _ = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = ra(a, u, n),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (n -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + s,
                                    p = t[l];
                                (o = i().cloneElement(p, p.props, m)), (r = l);
                                break;
                            }
                            {
                                const e = a.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = ia(e, d, e.length - 1, u, n, s),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (o = i().cloneElement(c, c.props, e, E)), (r = l);
                                    break;
                                }
                                n -= _.length;
                            }
                        }
                        return [r, o];
                    },
                    oa = (e, t, a, u = '...') => {
                        const n = [...t],
                            s = e.current;
                        if (!s) return [n, !1];
                        const r = a.height,
                            i = a.width,
                            o = s.lastElementChild;
                        if (!na(o, r) && sa(o, i) <= 0) return [n, !1];
                        const l = s.children,
                            c = ((e, t) => {
                                let a = 0,
                                    u = e.length - 1;
                                for (; u - a >= 0; ) {
                                    const n = a + Math.ceil(0.5 * (u - a));
                                    na(e[n], t) ? (u = n - 1) : (a = n + 1);
                                }
                                return a - 1;
                            })(l, r);
                        if (c < 0) return [n, !1];
                        const _ = ia(l, n, c, i, u.length, u),
                            d = _[0],
                            m = _[1];
                        return m && (n.splice(d, 1, m), n.splice(d + 1)), [n, !0];
                    },
                    la = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: a,
                            binding: u,
                            isTooltipEnable: n = !1,
                            isTruncationAvailable: s = !1,
                            targetId: o,
                            justifyContent: c = Pt.FlexStart,
                            alignContent: _ = Pt.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, r.useRef)(null),
                                p = (0, r.useRef)({ height: 0, width: 0 }),
                                E = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                b = E[0],
                                g = E[1],
                                h = (0, r.useMemo)(() => ua(e, u), [u, e]),
                                A = (0, r.useMemo)(() => {
                                    if (
                                        n &&
                                        b.isTruncated &&
                                        (!u || !Object.values(u).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: u ? JSON.stringify(u) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [u, n, o, e, b.isTruncated]),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = oa(m, h, p.current, d),
                                            u = t[0],
                                            n = t[1];
                                        g({ elementList: u, isTruncated: n, isTruncateFinished: !0 }), a && a(n);
                                    },
                                    [a, d, h],
                                ),
                                v = (0, r.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, a = !0) => {
                                    const u = (0, r.useCallback)(
                                        (e) => {
                                            const a = e[0];
                                            t && t(a);
                                        },
                                        [t],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !a) return;
                                        const t = new Tt.Z((e) => u(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [u, a, e]);
                                })(m, C, s),
                                i().createElement(
                                    'div',
                                    { className: l()(xt, t, Nt, s && Mt), style: v },
                                    i().createElement('div', { className: Rt, ref: m }, h),
                                    i().createElement(
                                        kt,
                                        { tooltipArgs: A },
                                        i().createElement(
                                            'div',
                                            { className: l()(Lt, !b.isTruncateFinished && s && Ot), style: v },
                                            b.isTruncateFinished && s ? b.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ca = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const da = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ma = (e) =>
                        da
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = _a.length - 1; a >= 0; a--)
                                      for (; e >= _a[a]; ) (t += ca[a]), (e -= _a[a]);
                                  return t;
                              })(e),
                    pa = (e, t) => e.split(',').includes(t),
                    Ea = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let ba, ga;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(ba || (ba = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(ga || (ga = {}));
                const ha = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: u,
                        vehicleLvl: n,
                        tags: s = '',
                        size: r = ba.extraSmall,
                        type: o = ga.colored,
                        className: c,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, U.BN)(u)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return i().createElement(
                            'div',
                            {
                                className: l()(
                                    Ea.base,
                                    Ea[`base__size${(0, U.e)(r)}`],
                                    Ea[`base__type${(0, U.e)(o)}`],
                                    c,
                                ),
                            },
                            i().createElement('div', { className: l()(Ea.level, null == _ ? void 0 : _.level) }, ma(n)),
                            i().createElement('div', {
                                className: l()(
                                    Ea.type,
                                    e && Ea[`type__elite${(0, U.e)(r)}`],
                                    Ea[`type__${r}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: { backgroundImage: `url(${p})` },
                            }),
                            pa(s, 'premiumIGR') && i().createElement('div', { className: Ea.premiumIGR }),
                            i().createElement(
                                'div',
                                { className: l()(Ea.name, null == _ ? void 0 : _.name) },
                                d ? a : t,
                            ),
                        );
                    },
                    Aa = 'Aside_base_a5',
                    Ca = 'Aside_content_24',
                    va = 'Aside_tankDetails_35',
                    fa = 'Aside_description_f0',
                    Da = 'Aside_title_6f',
                    Fa = 'Aside_category_c0',
                    Ba = 'Aside_text_ca',
                    ya = 'Aside_status_91',
                    wa = 'Aside_status__activated_4e',
                    Sa = 'Aside_statusDescrBlock_2c',
                    ka = 'Aside_statusDescription_75',
                    Ta = 'Aside_infoIcon_96',
                    xa = 'CategoryTitle_base_f3',
                    Na = 'CategoryTitle_title_9d',
                    Ma = 'CategoryTitle_icon_48';
                let La;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(La || (La = {}));
                const Oa = (0, r.memo)(({ category: e, iconTheme: t = La.Small, className: a }) => {
                        const u = (0, r.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return i().createElement(
                            'div',
                            { className: l()(xa, a) },
                            i().createElement('div', { className: Ma, style: u }),
                            i().createElement('div', { className: Na }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Ra = (e, t, a, u) => {
                        const n = pe(te),
                            s = n[0],
                            i = n[1];
                        return [
                            (0, r.useCallback)(() => s(re), [s]),
                            (0, r.useCallback)(
                                () => i({ action: re, timeLimit: 2, item: e, parentScreen: t, itemState: a, info: u }),
                                [i, e, t, a, u],
                            ),
                        ];
                    },
                    Ia = 'InfoIcon_base_83',
                    Pa = 'InfoIcon_icon_47',
                    $a = (0, r.memo)(({ item: e, className: t }) => {
                        const a = Ra(e, ae.SetupView),
                            u = a[0],
                            n = a[1];
                        return i().createElement(
                            'div',
                            { className: l()(Ia, t) },
                            i().createElement(
                                Be.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: u,
                                    onMouseLeave: n,
                                },
                                i().createElement('div', { className: Pa }),
                            ),
                        );
                    }),
                    Ha = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let za;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(za || (za = {}));
                const ja = (0, r.memo)(({ isActive: e, index: t, arrowType: a, onClick: u, classMix: n }) => {
                        const s = t + 1,
                            o = (0, r.useMemo)(() => ma(s), [s]),
                            c = ((e) => {
                                const t = de(e, le),
                                    a = (0, r.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, _e(e));
                                        },
                                        [t],
                                    );
                                return (e) => a(e);
                            })(te),
                            _ = (0, r.useCallback)(() => {
                                u(t),
                                    Re.$.playClick(),
                                    c({
                                        item: ue.SkillLevelTab,
                                        action: ne.Click,
                                        parentScreen: ae.SetupView,
                                        info: String(s),
                                    });
                            }, [t, s, u, c]),
                            d = (0, r.useCallback)(() => Re.$.playHighlight(), []);
                        return i().createElement(
                            'div',
                            { className: l()(Ha.base, e && Ha.base__active, n), onClick: _, onMouseEnter: d },
                            i().createElement('div', { className: Ha.label }, o),
                            a !== za.None && i().createElement('div', { className: l()(Ha.arrow, Ha[`arrow__${a}`]) }),
                        );
                    }),
                    Wa = {
                        base: 'SkillParam_base_66',
                        valueWrapper: 'SkillParam_valueWrapper_96',
                        diff: 'SkillParam_diff_06',
                        diffValue: 'SkillParam_diffValue_9c',
                        labelWrapper: 'SkillParam_labelWrapper_60',
                        label: 'SkillParam_label_66',
                        progress: 'SkillParam_progress_2f',
                        progressDot: 'SkillParam_progressDot_28',
                        progressDot__end: 'SkillParam_progressDot__end_aa',
                        progressValue: 'SkillParam_progressValue_6d',
                        progressValueDot: 'SkillParam_progressValueDot_52',
                        progressDelta: 'SkillParam_progressDelta_1d',
                    },
                    Ga = (0, r.memo)(({ currentParam: e, firstParam: t, lastParam: a }) => {
                        const u = Number(e.value),
                            n = Number(t.value),
                            s = Number(a.value),
                            o = (0, r.useMemo)(() => n < s, [n, s]),
                            c = (0, r.useMemo)(() => {
                                if (!isNaN(u) && !isNaN(n)) {
                                    const e = u - n;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [n, u]),
                            _ = (0, r.useMemo)(() => {
                                if (!c) return {};
                                const t = (0, U.uF)(e.valueTemplate, {
                                    sign: c < 0 ? '-' : '+',
                                    value: I.Z5.getRealFormat(Math.abs(c), I.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: i().createElement('div', { className: Wa.diffValue }, t) };
                            }, [c, e.valueTemplate]),
                            d = (0, r.useMemo)(() => {
                                const e = !isNaN(n),
                                    a = e && n < 0 ? '-' : '';
                                return {
                                    sign: t.sign || a,
                                    value: e ? I.Z5.getNumberFormat(Math.abs(n), I.B3.GOLD) : t.value,
                                };
                            }, [t, n]),
                            m = (0, r.useMemo)(() => (o ? { width: ((100 * n) / s).toString() + '%' } : {}), [o, n, s]),
                            p = (0, r.useMemo)(
                                () => (o ? { width: ((100 * (u - n)) / s).toString() + '%' } : {}),
                                [o, n, u, s],
                            );
                        return i().createElement(
                            'div',
                            { className: Wa.base },
                            i().createElement(
                                'div',
                                { className: Wa.valueWrapper },
                                c &&
                                    i().createElement(la, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: Wa.diff,
                                        alignContent: Pt.FlexEnd,
                                    }),
                                i().createElement(la, { text: e.valueTemplate, binding: d, classMix: Wa.value }),
                            ),
                            i().createElement(
                                'div',
                                { className: Wa.labelWrapper },
                                i().createElement('div', { className: Wa.label }, t.name),
                            ),
                            o &&
                                i().createElement(
                                    'div',
                                    { className: Wa.progress },
                                    i().createElement('div', { className: Wa.progressDot }),
                                    i().createElement(
                                        'div',
                                        { className: Wa.progressValue, style: m },
                                        i().createElement('div', { className: Wa.progressValueDot }),
                                    ),
                                    i().createElement('div', { className: Wa.progressDelta, style: p }),
                                    i().createElement('div', { className: l()(Wa.progressDot, Wa.progressDot__end) }),
                                ),
                        );
                    }),
                    Va = 'Levels_base_a9',
                    Za = 'Levels_tabsWrapper_a0',
                    Ua = 'Levels_tabsBorder_cf',
                    qa = 'Levels_tabsBorder__top_8f',
                    Ka = 'Levels_tabsBorder__bottom_82',
                    Ya = 'Levels_tabsLabel_60',
                    Xa = 'Levels_tabs_8f',
                    Ja = 'Levels_tab_c3',
                    Qa = 'Levels_caret_7e',
                    eu = 'Levels_params_d6',
                    tu = 'Levels_infoIcon_68',
                    au = ({ onLevelChanged: e, selectedLevel: t, levelInfos: a }) => {
                        const u = a.length - 1,
                            n = a[0].value.params,
                            s = a[a.length - 1].value.params,
                            o = a[t].value,
                            c = (0, r.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, r.useCallback)((t) => e(t), [e]);
                        return i().createElement(
                            'div',
                            { className: Va },
                            i().createElement(
                                'div',
                                { className: Za },
                                i().createElement('div', { className: l()(Ua, qa) }),
                                i().createElement('div', { className: l()(Ua, Ka) }),
                                i().createElement($a, { item: ue.AbilityLevelsTooltip, className: tu }),
                                i().createElement(
                                    'div',
                                    { className: Ya },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Xa },
                                    a.map(({ value: e }, a) => {
                                        const n = a < t ? za.Active : za.Default;
                                        return i().createElement(ja, {
                                            key: e.id,
                                            index: a,
                                            isActive: a <= t,
                                            arrowType: a < u ? n : za.None,
                                            onClick: _,
                                            classMix: Ja,
                                        });
                                    }),
                                    i().createElement('div', { className: Qa, style: c }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: eu },
                                o.params.map(({ value: e }, t) =>
                                    i().createElement(Ga, {
                                        key: e.id,
                                        firstParam: n[t].value,
                                        lastParam: s[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    uu = (0, r.memo)(function ({ className: e }) {
                        const t = ot(),
                            a = G('model.vehicleInfo'),
                            u = G(`${he}`).setCurrentSlotDetailsLevel,
                            n = G(`${he}.details`),
                            s = n.name,
                            o = n.category,
                            c = n.selectedLevel,
                            _ = n.description,
                            d = n.levelInfos,
                            m = n.isActivated,
                            p = m
                                ? R.strings.tank_setup.abilities.details.status.unlocked()
                                : R.strings.tank_setup.abilities.details.status.locked(),
                            E = m
                                ? R.strings.tank_setup.abilities.details.description.unlocked()
                                : R.strings.tank_setup.abilities.details.description.locked(),
                            b = (0, r.useCallback)((e) => u({ level: e }), [u]);
                        return (
                            (0, r.useEffect)(() => (0, w.v)(() => (0, w.v)(t.recalculateContent)), [t]),
                            i().createElement(
                                'div',
                                { className: l()(Aa, e) },
                                i().createElement(
                                    yt.Vertical.Area.Default,
                                    { api: t },
                                    i().createElement(
                                        'div',
                                        { className: Ca },
                                        i().createElement('div', { className: va }, i().createElement(ha, a)),
                                        i().createElement(
                                            'div',
                                            { className: fa },
                                            i().createElement('div', { className: Da }, s),
                                            i().createElement(Oa, { category: o, className: Fa }),
                                            i().createElement('div', { className: Ba }, _),
                                        ),
                                        i().createElement(au, { onLevelChanged: b, selectedLevel: c, levelInfos: d }),
                                        i().createElement('div', { className: l()(ya, m && wa) }, p),
                                        i().createElement(
                                            'div',
                                            { className: Sa },
                                            i().createElement('div', { className: Ta }),
                                            i().createElement(la, { text: E, classMix: ka }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    nu = 'BattleAbilitiesSetup_aside_bd';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const su = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            a = t.width,
                            u = t.height;
                        return 0 !== a && 0 !== u;
                    },
                    ru = (e) => {
                        const t = (0, r.useState)(su(e ? e.current : null)),
                            a = t[0],
                            u = t[1];
                        return (
                            (0, r.useEffect)(() => {
                                let t = 0;
                                const a = () => {
                                    t = requestAnimationFrame(() => {
                                        su(e ? e.current : null) ? u(!0) : a();
                                    });
                                };
                                return (
                                    a(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => () => u(!1), [e]),
                            a
                        );
                    },
                    iu = 'ScrollableCards_base_e0',
                    ou = 'ScrollableCards_scroll_4b',
                    lu = ({ children: e, selectedSlotId: t, scrollAreaKey: a = 'area', updateKey: u = null }) => {
                        const n = (0, r.useState)(!1),
                            s = n[0],
                            o = n[1],
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(!1),
                            d = (0, r.useRef)(''),
                            m = ru(l),
                            p = ot();
                        (0, r.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const E = Le(() => {
                                _.current && o(!0), p.events.off('rest', E);
                            }),
                            b = (0, r.useCallback)(() => {
                                _.current && o(!1);
                            }, []),
                            g = (0, r.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const a = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', E), p.applyScroll(a);
                                }
                            }, [E, p]);
                        (0, r.useEffect)(() => {
                            (0, w.v)(() => {
                                m &&
                                    (d.current === a
                                        ? g()
                                        : ((d.current = a),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              g(), _.current || (_.current = !0);
                                          })));
                            });
                        }, [m, a, g, t]),
                            (0, r.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, u]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: s,
                            onFinalAnimationDone: b,
                        };
                        return i().createElement(
                            'div',
                            { className: iu },
                            i().createElement(
                                'div',
                                { className: ou, ref: l },
                                i().createElement(yt.Vertical.Default, { key: a, api: p }, (0, r.cloneElement)(e, h)),
                            ),
                        );
                    },
                    cu = (e, t) => {
                        const a = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (a.current = e);
                            }, [t, e]),
                            a.current
                        );
                    };
                var _u = a(8613);
                Date.now(), _u.Ew.getRegionalDateTime, _u.Ew.getFormattedDateTime;
                I.Sw.instance;
                const du = cu,
                    mu = 'select',
                    pu = 'undo',
                    Eu = 'cancel',
                    bu = 'swap',
                    gu = 'demount',
                    hu = 'demount_from_setup',
                    Au = 'demount_from_setups',
                    Cu = 'destroy',
                    vu = 'upgrade',
                    fu = 'add_one';
                var Du = a(1363),
                    Fu = a(1641);
                const Bu = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: u = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, I.c9)(I.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: u,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    Re.$.playYes();
                            }, [n, t, a, u]),
                            l = (0, r.useCallback)(() => {
                                (0, I.c9)(I.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: u,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, u]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === Fu.t.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    yu = ['children'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Su = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, yu);
                        return i().createElement(
                            Bu,
                            wu({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    ku = [
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
                        'onShow',
                        'onHide',
                    ];
                function Tu(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const xu = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: I.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    Nu = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            u = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            b = void 0 === E || E,
                            g = e.onShow,
                            h = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, ku);
                        const C = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(() => (0, M.F)(), []).resId,
                            f = (0, r.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (xu(a, p, { isMouseEvent: !0, on: !0, arguments: Tu(u) }, v),
                                    g && g(),
                                    (C.current.isVisible = !0));
                            }, [a, p, u, v, g]),
                            D = (0, r.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        xu(a, p, { on: !1 }, v),
                                        C.current.isVisible && h && h(),
                                        (C.current.isVisible = !1);
                                }
                            }, [a, p, v, h]),
                            F = (0, r.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', F, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', F, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((B = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      B && B(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), s && s(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), o && o(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), i && i(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      A,
                                  ),
                              )
                            : t;
                        var B;
                    },
                    Mu = ['children'];
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Ou = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, Mu);
                    return i().createElement(
                        Nu,
                        Lu(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            a,
                        ),
                        t,
                    );
                };
                var Ru = a(5282);
                const Iu = {
                        base: 'BaseCard_base_17',
                        content: 'BaseCard_content_42',
                        content__large: 'BaseCard_content__large_be',
                        content__huge: 'BaseCard_content__huge_f3',
                        content__installed: 'BaseCard_content__installed_1b',
                        content__current: 'BaseCard_content__current_89',
                        content__nonclickable: 'BaseCard_content__nonclickable_75',
                        content__disabled: 'BaseCard_content__disabled_eb',
                        image: 'BaseCard_image_53',
                        types: 'BaseCard_types_09',
                        highlight: 'BaseCard_highlight_73',
                        overlay: 'BaseCard_overlay_ba',
                        highlight__battleBooster: 'BaseCard_highlight__battleBooster_49',
                        overlay__battleBooster: 'BaseCard_overlay__battleBooster_85',
                        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_53',
                        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_62',
                        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_68',
                        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_ae',
                        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_1b',
                        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_97',
                        specialization: 'BaseCard_specialization_62',
                        name: 'BaseCard_name_c3',
                        details: 'BaseCard_details_fc',
                        options: 'BaseCard_options_15',
                        actions: 'BaseCard_actions_95',
                        hover: 'BaseCard_hover_cf',
                        disabled: 'BaseCard_disabled_c8',
                        locked: 'BaseCard_locked_13',
                        category: 'BaseCard_category_5e',
                        category__tiny: 'BaseCard_category__tiny_03',
                        category__small: 'BaseCard_category__small_96',
                        category__medium: 'BaseCard_category__medium_11',
                        category__large: 'BaseCard_category__large_c1',
                        category__huge: 'BaseCard_category__huge_71',
                    },
                    Pu = 'DisabledAbilities_base_1d',
                    $u = 'DisabledAbilities_glow_75',
                    Hu = 'DisabledAbilities_line_54',
                    zu = ({ className: e }) =>
                        i().createElement(
                            'div',
                            { className: l()(Pu, e) },
                            i().createElement('div', { className: $u }),
                            i().createElement('div', { className: Hu }),
                        );
                let ju;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster');
                })(ju || (ju = {}));
                const Wu = 'Warning_base_4c',
                    Gu = 'Warning_glow_79',
                    Vu = 'Warning_line_df',
                    Zu = 'Warning_icon_24',
                    Uu = (e) => Object.values(ju).includes(e),
                    qu = ({ parentId: e, reason: t, isCritical: a }) => {
                        const u = (0, r.useMemo)(() => ({ reason: t, isCritical: a }), [t, a]);
                        return i().createElement(
                            'div',
                            { id: e, className: Wu },
                            i().createElement('div', { className: Gu }),
                            i().createElement('div', { className: Vu }),
                            i().createElement(
                                Be.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: u,
                                    isEnabled: Uu(t),
                                },
                                i().createElement('div', { className: Zu }),
                            ),
                        );
                    },
                    Ku = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: a,
                        contextMenuArgs: u,
                        imageSource: n,
                        overlayType: s,
                        highlightType: o,
                        isModernized: c,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: E,
                        isAbilitiesCard: b = !1,
                        isClickable: g = !0,
                        details: h,
                        options: A,
                        actions: C,
                        specializations: v,
                        extraImages: f,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: B,
                        onTooltipShow: y,
                        onTooltipHide: w,
                        lockReason: S,
                    }) => {
                        const k = (0, V.GS)(),
                            T = (0, r.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            x = T[0],
                            N = T[1],
                            M = (0, r.useState)(!1),
                            L = M[0],
                            O = M[1],
                            I = (0, r.useCallback)(() => {
                                !x.isActionsHovered && Re.$.playHighlight(),
                                    N({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && O(!0);
                            }, [x.isActionsHovered, F]),
                            P = (0, r.useCallback)(() => {
                                F && O(!1);
                            }, [F]),
                            $ = (0, r.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, r.useCallback)(() => {
                                N({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            z = g && (!d || b),
                            j = (0, r.useCallback)(() => {
                                z && D && (Re.$.playClick(), D());
                            }, [D, z]),
                            W = x.isBaseHovered || x.isActionsHovered,
                            G = (0, r.useMemo)(() => {
                                let e = i().createElement(
                                    'div',
                                    { onMouseEnter: I, onMouseLeave: H, className: Iu.hover, onClick: j },
                                    d && b && i().createElement(zu, { className: Iu.locked }),
                                );
                                return (
                                    a && (e = i().createElement(Ou, { args: a, onShow: y, onHide: w }, e)),
                                    u && (e = i().createElement(Su, { args: u }, e)),
                                    e
                                );
                            }, [d, b, I, H, j, a, u, y, w]),
                            Z = (0, r.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            U =
                                k === V.cJ.Large || k === V.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            q = (0, r.useMemo)(() => {
                                let e;
                                return (
                                    s && (e = c ? U.$dyn(`${s}_${_}_overlay`) : U.$dyn(`${s}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [U, s, c, _]),
                            K = (0, r.useMemo)(() => {
                                let e;
                                return o && (e = U.$dyn(`${o}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [U, o]),
                            Y = (0, r.useMemo)(() => {
                                const e = (k === V.cJ.Large || k === V.cJ.Huge ? V.cJ.Large : V.cJ.Medium) + '_' + B,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [B, k]);
                        return i().createElement(
                            'div',
                            { className: Iu.base },
                            i().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(
                                        Iu.content,
                                        Iu[`content__${k}`],
                                        W && g && !d && Iu.content__hovered,
                                        !W && Iu.content__out,
                                        p && Iu.content__installed,
                                        m && Iu.content__current,
                                        d && Iu.content__disabled,
                                        !z && Iu.content__nonclickable,
                                    ),
                                    onMouseLeave: P,
                                },
                                K &&
                                    i().createElement(
                                        'div',
                                        { className: Iu.types },
                                        i().createElement('div', {
                                            className: l()(Iu.highlight, Iu[`highlight__${o}`]),
                                            style: K,
                                        }),
                                    ),
                                i().createElement('div', { className: Iu.image, style: Z }, f),
                                d && i().createElement('div', { className: Iu.disabled }),
                                Y &&
                                    i().createElement('span', {
                                        className: l()(Iu.category, Iu[`category__${k}`]),
                                        style: Y,
                                    }),
                                q &&
                                    i().createElement(
                                        'div',
                                        { className: Iu.types },
                                        i().createElement('div', {
                                            className: l()(Iu.overlay, Iu[`overlay__${s}`]),
                                            style: q,
                                        }),
                                    ),
                                v && i().createElement('div', { className: Iu.specialization }, v),
                                i().createElement(
                                    'div',
                                    { className: l()(Iu.name, d && Iu.name__disabled) },
                                    i().createElement(Ru.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, Ru.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && i().createElement('div', { className: Iu.details }, h),
                                i().createElement('div', { className: l()(Iu.options, d && Iu.options__disabled) }, A),
                                G,
                                i().createElement(
                                    'div',
                                    { onMouseEnter: $, onMouseLeave: H, className: Iu.actions },
                                    F && C
                                        ? (0, r.cloneElement)(C, Object.assign({}, C.props, { isMouseOverCard: L }))
                                        : C,
                                ),
                            ),
                            E &&
                                i().createElement(
                                    'div',
                                    { className: Iu.locked },
                                    i().createElement(qu, { reason: S, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var Yu = a(8401),
                    Xu = a(3934);
                const Ju = 'Availability_base_51',
                    Qu = () => i().createElement('div', { className: Ju }),
                    en = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    tn = i().memo(
                        ({ itemsInStorage: e, price: t, isMounted: a, possibleZeroCount: u, show: n = !0 }) => {
                            let s = null;
                            return (
                                (s = a
                                    ? i().createElement(Qu, null)
                                    : e || (u && 0 === e)
                                      ? i().createElement(Xu.K, { itemsInStorage: e })
                                      : t && i().createElement(Yu.t, t)),
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            en.base,
                                            en['base__' + (n ? 'shown' : 'hidden')],
                                            (a || e || (u && 0 === e)) && en.base__visually,
                                        ),
                                    },
                                    s,
                                )
                            );
                        },
                    ),
                    an = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var un = a(8750);
                const nn = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    sn = ({ level: e }) => {
                        const t = (0, V.GS)();
                        if (!e) return null;
                        const a = l()(nn.base, t && nn[`base__${t}`]);
                        return i().createElement(
                            'div',
                            { className: a },
                            i().createElement(un.a, {
                                type: un.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    rn = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: a,
                            isCurrent: u,
                            imageName: n,
                            onSlotAction: s,
                            intCD: o,
                            level: c,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: E,
                            cost: b,
                        }) => {
                            const g = (0, V.GS)(),
                                h = t > -1,
                                A = `${o}-ability`,
                                C = (0, r.useMemo)(() => ({ intCD: o, slotType: T.YN, fieldType: 0 }), [o]),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        s({ actionType: e, intCD: o, currentSlotId: a, isAutoSelect: !1 });
                                    },
                                    [s, o, a],
                                ),
                                f = (0, r.useCallback)(() => {
                                    v(mu);
                                }, [v]),
                                D = (0, r.useContext)(Fs),
                                F = (0, r.useMemo)(() => {
                                    const e = l()(an.bonuses, g && an[`base__${g}`]),
                                        t = D >= b ? De.Brown : De.Red;
                                    return i().createElement(
                                        'div',
                                        { className: an.base },
                                        i().createElement(Du._, {
                                            parentId: A,
                                            mediaSize: g,
                                            classMix: e,
                                            classColorMix: an.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            i().createElement(Fe, {
                                                value: b,
                                                theme: t,
                                                size: fe.Small,
                                                className: an.points,
                                            }),
                                    );
                                }, [g, _, A, m, b, D]),
                                B =
                                    ((0, r.useMemo)(() => i().createElement(sn, { level: c }), [c]),
                                    (0, r.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(n),
                                        [n],
                                    ));
                            return i().createElement(Ku, {
                                parentId: A,
                                name: e,
                                tooltipArgs: C,
                                imageSource: B,
                                isCurrent: u,
                                isActive: h,
                                details: F,
                                isDisabled: m && D < b,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: f,
                                options: i().createElement(tn, { show: E, isMounted: E }),
                            });
                        },
                    ),
                    on = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function ln() {
                    return (
                        (ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ln.apply(this, arguments)
                    );
                }
                const cn = ({ currentCardRef: e, selectedSlot: t, isDisabled: a }) => {
                        const u = G(he),
                            n = u.categoriesOrder,
                            s = u.onSlotAction,
                            o = u.slots,
                            c = G('model.ammunitionPanel'),
                            _ = c.onSectionSelect,
                            d = c.selectedSection,
                            m = (0, V.GS)(),
                            p = n.map(({ value: e }) => e),
                            E = o.map(({ value: e }) => e),
                            b = (0, r.useMemo)(() => {
                                if (m === V.cJ.Tiny)
                                    return E.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                E.map((t) => {
                                    t.category in e || (e[t.category] = []), e[t.category].push(t);
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    });
                                const t = [];
                                do {
                                    p.map((a) => {
                                        const u = e[a].shift();
                                        u && t.push(u);
                                    });
                                } while (t.length < E.length);
                                return t;
                            }, [E, p, m]),
                            g = (0, r.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), s(e);
                                },
                                [_, s, d],
                            ),
                            h = b.map((a) => {
                                if (!a) return null;
                                const u = a.installedSlotId,
                                    n = u > -1 && t === u;
                                return i().createElement(
                                    'div',
                                    { key: a.intCD, ref: n ? e : null, className: l()(on.card, m && on[`card__${m}`]) },
                                    i().createElement(rn, ln({}, a, { isCurrent: n, onSlotAction: g })),
                                );
                            }),
                            A = l()(on.base, m && on[`base__${m}`], a && on.base__disabled);
                        return i().createElement('div', { className: A }, h);
                    },
                    _n = 'BattleAbilitiesNoSelected_base_06',
                    dn = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    mn = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    pn = 'BattleAbilitiesNoSelected_title_20',
                    En = 'BattleAbilitiesNoSelected_title__small_65',
                    bn = 'BattleAbilitiesNoSelected_subTitle_aa',
                    gn = 'BattleAbilitiesNoSelected_button_bf',
                    hn = R.strings.tank_setup.abilities.noSelected,
                    An = () => {
                        const e = (0, V.GS)(),
                            t = G(he, W.None).showInfoPage,
                            a = (0, r.useMemo)(() => e === V.cJ.Small || e === V.cJ.Tiny, [e]),
                            u = (0, r.useMemo)(() => (e === V.cJ.Tiny ? Ce.qE.small : Ce.qE.medium), [e]),
                            n = (0, r.useCallback)(() => t(), [t]),
                            s = l()(dn, a && mn),
                            o = l()(pn, a && En);
                        return i().createElement(
                            'div',
                            { className: _n, id: 'no-abilities-show-button' },
                            i().createElement('div', { className: s }),
                            i().createElement('div', { className: o }, hn.title()),
                            i().createElement('div', { className: bn }, hn.subTitle()),
                            i().createElement(Ce.u5, { size: u, mixClass: gn, onClick: n }, hn.toReserves()),
                        );
                    },
                    Cn = 'Content_base_d8',
                    vn = i().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return i().createElement(
                            'div',
                            { className: Cn },
                            e
                                ? i().createElement(
                                      lu,
                                      { selectedSlotId: t },
                                      i().createElement(cn, { selectedSlot: t }),
                                  )
                                : i().createElement(An, null),
                        );
                    }),
                    fn = 'Tabs_base_d9',
                    Dn = 'Tabs_base__vertical_c0',
                    Fn = 'Tabs_list_0a',
                    Bn = 'Tabs_list__centered_dc',
                    yn = 'Tabs_wrapper_2d',
                    wn = 'Tabs_wrapper__centered_d8',
                    Sn = 'Tabs_wrapper__vertical_a5';
                function kn() {
                    return (
                        (kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        kn.apply(this, arguments)
                    );
                }
                const Tn = 'tabs-role';
                var xn;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(xn || (xn = {}));
                class Nn extends r.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[xn.TAB]);
                                return t && t.props[xn.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = i().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Tn] === xn.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(i().Children.toArray(e[t].props.children));
                        (e[t] = i().cloneElement(e[t], {
                            children: i()
                                .Children.toArray(e[t].props.children)
                                .map((e) => i().cloneElement(e, { key: e.props[xn.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(a);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const a = i().Children.toArray(this.props.children)[this.tabsListIndex],
                            u = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            n =
                                ((s = this.tabsProps),
                                (r = u),
                                !(
                                    Object.keys(s).length === Object.keys(r).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && s[e] === r[e],
                                    )
                                ));
                        var s, r;
                        const o = l()(
                                yn,
                                a.props.className,
                                this.props.isTabsCentered && wn,
                                this.props.isVerticalTabs && Sn,
                            ),
                            c = l()(Fn, this.props.isTabsCentered && Bn);
                        if (t.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Tn] === xn.CONTENT)
                                        return e.props[xn.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                n = t[0].props.children,
                                s = n.map((e, t) =>
                                    i().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            u[t],
                                            { key: t, isActive: this.state.activeKey === e.props[xn.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === n.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = u[t][xn.TAB];
                                                    this.state.activeKey === a ||
                                                        (u[t].onClick && u[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && (0, Re.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    u[t].onMouseEnter && u[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, Re.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = u),
                                this.setState({
                                    activeElements: [
                                        i().createElement(
                                            'div',
                                            { className: c, key: xn.LIST },
                                            i().createElement('div', kn({}, a.props, { className: o }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = l()(fn, this.props.isVerticalTabs && Dn);
                        return i().createElement('div', { className: t }, e);
                    }
                }
                Nn.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Mn = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const On = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = e.activeKey,
                            n = e.onClickSound,
                            s = e.onMouseEnterSound,
                            r = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    n = {},
                                    s = Object.keys(e);
                                for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, Mn);
                        return i().createElement(
                            'div',
                            Ln({ className: a }, o),
                            i().createElement(
                                Nn,
                                { activeKey: u, onClickSound: n, onMouseEnterSound: s, isTabsCentered: r },
                                t,
                            ),
                        );
                    },
                    Rn = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    In = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Pn() {
                    return (
                        (Pn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Pn.apply(this, arguments)
                    );
                }
                const $n = (e) => {
                    let t = e.size,
                        a = e.value,
                        u = e.isEmpty,
                        n = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, In);
                    const _ = u ? null : a,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > r,
                        p = l()(
                            Rn.base,
                            Rn[`base__${t}`],
                            n && Rn.base__animated,
                            s && Rn.base__hidden,
                            !_ && Rn.base__pattern,
                            u && Rn.base__empty,
                            o,
                        );
                    return i().createElement(
                        'div',
                        Pn({ className: p }, c),
                        i().createElement('div', { className: Rn.bg }),
                        i().createElement('div', { className: Rn.pattern }),
                        i().createElement(
                            'div',
                            { className: l()(Rn.value, d && Rn.value__text) },
                            m ? r : _,
                            m && i().createElement('span', { className: Rn.plus }, '+'),
                        ),
                    );
                };
                $n.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Hn = ({ children: e, component: t, props: a = {} }) =>
                        t ? i().createElement(t, a, e) : e || null,
                    zn = 'Tab_base_dd',
                    jn = 'Tab_base__first_4a',
                    Wn = 'Tab_base__last_96',
                    Gn = 'Tab_base__medium_ec',
                    Vn = 'Tab_base__active_5d',
                    Zn = 'Tab_divider_ca',
                    Un = 'Tab_divider__show_62',
                    qn = 'Tab_state_6c',
                    Kn = 'Tab_stateHighlight_1e',
                    Yn = 'Tab_stateBorder_64',
                    Xn = 'Tab_stateBorder__positionLeft_e7',
                    Jn = 'Tab_stateBorder__positionRight_db',
                    Qn = 'Tab_counter_e1',
                    es = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function ts() {
                    return (
                        (ts =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ts.apply(this, arguments)
                    );
                }
                const as = (0, r.memo)((e) => {
                    let t = e.isActive,
                        a = void 0 !== t && t,
                        u = e.isFirst,
                        n = void 0 !== u && u,
                        s = e.isLast,
                        r = void 0 !== s && s,
                        o = e.isMedium,
                        c = void 0 !== o && o,
                        _ = e.isNotified,
                        d = void 0 !== _ && _,
                        m = e.children,
                        p = void 0 === m ? 'Tab' : m,
                        E = e.wrapper,
                        b = void 0 === E ? {} : E,
                        g = e.counter,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, es);
                    return i().createElement(
                        Hn,
                        b,
                        i().createElement(
                            'div',
                            ts({ className: l()(zn, { [Vn]: a }, { [jn]: n }, { [Wn]: r }, { [Gn]: c }) }, h),
                            i().createElement(
                                'span',
                                { className: qn },
                                i().createElement('span', { className: Kn }),
                                i().createElement('span', { className: l()(Yn, Xn) }),
                                i().createElement('span', { className: l()(Yn, Jn) }),
                            ),
                            p,
                            !r && !a && i().createElement('span', { className: l()(Zn, Un) }),
                            (Boolean(g) || d) &&
                                i().createElement(
                                    'div',
                                    { className: Qn },
                                    i().createElement($n, { value: g, isEmpty: d }),
                                ),
                        ),
                    );
                });
                var us = a(5262);
                function ns(e, t, a) {
                    const u = (0, r.useContext)(s.YN);
                    let n = Object.entries(u).filter(([e, t]) => !0 === t && e in us.u);
                    return (
                        a && (n = n.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const u = n.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, U.e)(t))(a, e[0])]),
                            );
                            return (e[a] = l()(t[a], ...u)), e;
                        }, {})
                    );
                }
                const ss = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    rs = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function is() {
                    return (
                        (is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        is.apply(this, arguments)
                    );
                }
                const os = (e) => {
                    let t = e.name,
                        a = e.newItemsCount,
                        u = e.handleTabChanged,
                        n = e.isTooltipEnabled,
                        s = void 0 === n || n,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, rs);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, r.useCallback)(() => {
                            Re.$.playClick(), u({ name: t });
                        }, [u, t]),
                        _ = (0, r.useMemo)(() => ({ name: t }), [t]),
                        d = ns(['tab'], ss);
                    return i().createElement(
                        Be.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: s,
                        },
                        i().createElement(
                            'div',
                            null,
                            i().createElement(
                                as,
                                is({}, o, { isNotified: Boolean(a), onClick: c }),
                                i().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function ls() {
                    return (
                        (ls =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ls.apply(this, arguments)
                    );
                }
                const cs = ({ tabs: e, selectedTabName: t, handleTabChanged: a, isTooltipEnabled: u = !0 }) => {
                        const n = ee('ModernizedSetupTabHintZone', J);
                        return (
                            (0, r.useEffect)(() => {
                                n && n.runTrigger(!0);
                            }, [n]),
                            i().createElement(
                                On,
                                { key: t, activeKey: t },
                                i().createElement(
                                    'div',
                                    { 'tabs-role': xn.LIST },
                                    e.map(({ value: e }) =>
                                        i().createElement(
                                            os,
                                            ls(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: a,
                                                    'tabs-role': xn.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: u,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    _s = {
                        base: 'Header_base_fb',
                        base__small: 'Header_base__small_d1',
                        base__medium: 'Header_base__medium_66',
                        base__large: 'Header_base__large_63',
                        base__huge: 'Header_base__huge_45',
                        title: 'Header_title_64',
                        title__small: 'Header_title__small_fc',
                        title__tiny: 'Header_title__tiny_8e',
                        tabs: 'Header_tabs_73',
                        tabs__small: 'Header_tabs__small_5f',
                        tabs__tiny: 'Header_tabs__tiny_35',
                    },
                    ds = ({ title: e, children: t, tabProps: a }) => {
                        const u = (0, V.GS)();
                        return i().createElement(
                            'div',
                            { className: l()(_s.base, u && _s[`base__${u}`]) },
                            i().createElement(
                                'div',
                                null,
                                i().createElement('div', { className: l()(_s.title, u && _s[`title__${u}`]) }, e),
                                a &&
                                    i().createElement(
                                        'div',
                                        { className: l()(_s.tabs, u && _s[`tabs__${u}`]) },
                                        i().createElement(cs, a),
                                    ),
                            ),
                            t,
                        );
                    };
                var ms = a(8089);
                const ps = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let Es;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(Es || (Es = {}));
                const bs = i().memo(function ({ id: e, theme: t, className: a }) {
                        const u = G(he, W.None).showInfoPage;
                        return i().createElement(
                            'div',
                            { id: e, className: l()(ps.base, ps[`base__${t}`], a) },
                            i().createElement(ms.A, {
                                caption:
                                    t === Es.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => u(),
                                classNames: { caption: t === Es.OnlyIcon ? ps.hidden : '' },
                            }),
                        );
                    }),
                    gs = 'Header_base_aa',
                    hs = 'Header_points_d5',
                    As = 'Header_content_2c',
                    Cs = 'Header_textWrapper_63',
                    vs = 'Header_text_dc',
                    fs = 'Header_infoButton_5e',
                    Ds = i().memo(function () {
                        const e = b().mediaWidth,
                            t = (0, r.useContext)(Fs),
                            a = (0, r.useMemo)(
                                () => ({
                                    points: i().createElement(Fe, {
                                        theme: De.Brown,
                                        size: fe.Normal,
                                        value: t,
                                        className: hs,
                                    }),
                                }),
                                [t],
                            ),
                            u = Ra(ue.SkillPointsTooltip, ae.SetupView),
                            n = u[0],
                            s = u[1];
                        return i().createElement(
                            'div',
                            { className: gs },
                            i().createElement(
                                ds,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                i().createElement(
                                    'div',
                                    { className: As },
                                    e <= d.j.medium.width &&
                                        i().createElement(bs, {
                                            id: 'scenarios_btn_small',
                                            theme: Es.OnlyIcon,
                                            className: fs,
                                        }),
                                    i().createElement(
                                        Y.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: n,
                                            onMouseLeave: s,
                                        },
                                        i().createElement(
                                            'div',
                                            { className: Cs },
                                            i().createElement(la, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: a,
                                                classMix: vs,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Fs = i().createContext(0),
                    Bs = () => {
                        const e = G(he),
                            t = e.isLocked,
                            a = e.pointsAmount,
                            u = G('model.ammunitionPanel').selectedSlot;
                        return i().createElement(
                            Fs.Provider,
                            { value: a },
                            i().createElement(V.Ar, {
                                header: i().createElement(Ds, null),
                                content: i().createElement(vn, { isLocked: t, selectedSlot: u }),
                                aside: i().createElement(uu, { className: nu }),
                                footer: i().createElement(Te, null),
                            }),
                        );
                    };
                var ys = a(8175),
                    ws = a(3755);
                const Ss = (e, t) => {
                        const a = [];
                        for (let u = 0; u < e; u++) a.push(t(u));
                        return a;
                    },
                    ks = (e) => {
                        const t = (0, r.useRef)(-1),
                            a = (0, r.useCallback)(
                                (a) => {
                                    if (-1 === t.current) {
                                        const u = e(a);
                                        u &&
                                            (t.current = window.setTimeout(() => {
                                                t.current = -1;
                                            }, u));
                                    }
                                },
                                [e],
                            );
                        return (0, r.useEffect)(() => () => clearTimeout(t.current), []), a;
                    };
                var Ts = a(8774);
                const xs = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    Ns = (0, r.memo)(({ parentId: e, availableActions: t, onActionClick: a, isBuyMoreDisabled: u }) =>
                        i().createElement(
                            'div',
                            { className: l()(xs.base, xs['base__' + (t.length ? 'shown' : 'hidden')]) },
                            i().createElement(Ts.a, {
                                parentId: `${e}-add_one`,
                                actionType: fu,
                                onClick: a,
                                show: t.includes(fu),
                                disabled: u,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            i().createElement(Ts.a, {
                                parentId: `${e}-cancel`,
                                actionType: Eu,
                                onClick: a,
                                show: t.includes(Eu),
                            }),
                            i().createElement(Ts.a, {
                                parentId: `${e}-undo`,
                                actionType: pu,
                                onClick: a,
                                show: t.includes(pu),
                            }),
                        ),
                    ),
                    Ms = 'Booster_base_e5',
                    Ls = 'Booster_unit_5e',
                    Os = (0, S.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const u = (0, V.GS)(),
                            n = u === V.cJ.Large || u === V.cJ.Huge,
                            s = N(),
                            o = s.model,
                            l = s.controls,
                            c = o.computes.boosters.booster(a),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            b = c.imageName,
                            g = c.itemsInStorage,
                            h = c.oldStylePrice,
                            A = c.intCD,
                            C = c.isDisabled,
                            v = c.overlayType,
                            f = c.isLocked,
                            D = c.isMounted,
                            F = c.isMountedInOtherSetup,
                            B = c.description,
                            y = c.isBuyMoreVisible,
                            w = c.isBuyMoreDisabled,
                            S = c.highlightType,
                            k = c.lockReason,
                            x = d > -1,
                            M = `${A}-booster`,
                            L = (0, r.useMemo)(() => {
                                const e = [];
                                return (
                                    !C &&
                                        x &&
                                        (!t && y && e.push(fu), (!Boolean(g) && !D) || F ? e.push(pu) : e.push(Eu)),
                                    e
                                );
                            }, [C, x, t, y, g, D, F]),
                            O = (0, r.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: A, installedSlotId: d }),
                                    e === fu ? 1e3 : 120
                                ),
                                [l, A, d],
                            ),
                            I = ks(O),
                            P = (0, r.useCallback)(() => {
                                L.includes(pu) ? I(pu) : L.includes(Eu) ? I(Eu) : I(mu);
                            }, [L, I]),
                            $ = (0, r.useMemo)(() => {
                                const e = { intCD: A, slotType: T.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: D,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [A, d, m, p, D, E, C]),
                            H = $[0],
                            z = $[1],
                            j = (0, r.useMemo)(() => {
                                const e = n
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [n, b]);
                        return i().createElement(Ku, {
                            parentId: M,
                            name: _,
                            tooltipArgs: H,
                            contextMenuArgs: z,
                            imageSource: j,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: C,
                            isLocked: f,
                            options: i().createElement(tn, {
                                isMounted: D || F,
                                itemsInStorage: g,
                                show: !L.length,
                                price: h,
                            }),
                            actions: i().createElement(Ns, {
                                parentId: M,
                                availableActions: L,
                                onActionClick: I,
                                isBuyMoreDisabled: w,
                            }),
                            details: i().createElement(Du._, {
                                key: B,
                                parentId: M,
                                classMix: Ms,
                                mediaSize: u,
                                classColorMix: Ls,
                                linesShown: n ? 4 : 3,
                                text: B,
                            }),
                            overlayType: v,
                            highlightType: S,
                            onSlotClick: P,
                            lockReason: k,
                        });
                    }),
                    Rs = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    Is = (0, S.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const u = (0, V.GS)(),
                            n = u === V.cJ.Large || u === V.cJ.Huge,
                            s = N(),
                            o = s.model,
                            c = s.controls,
                            _ = o.computes.consumables.consumable(a, t, u),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            E = _.itemInstalledSetupSlotIdx,
                            b = _.isMountedMoreThanOne,
                            g = _.imageName,
                            h = _.itemsInStorage,
                            A = _.oldStylePrice,
                            C = _.intCD,
                            v = _.isDisabled,
                            f = _.overlayType,
                            D = _.isLocked,
                            F = _.isMounted,
                            B = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            w = _.description,
                            S = _.isBuyMoreDisabled,
                            k = _.lockReason,
                            x = m > -1,
                            M = `${C}-consumable`,
                            L = (0, r.useMemo)(() => {
                                const a = [];
                                return (
                                    !v &&
                                        x &&
                                        (!e && a.push(bu),
                                        y || (!t && a.push(fu), (!Boolean(h) && !F) || B ? a.push(pu) : a.push(Eu))),
                                    a
                                );
                            }, [v, x, e, y, t, h, F, B]),
                            O = (0, r.useCallback)(
                                (e) => (
                                    c.consumables.actSlot({ actionType: e, intCD: C, installedSlotId: m }),
                                    e === fu ? 1e3 : 300
                                ),
                                [c, C, m],
                            ),
                            I = ks(O),
                            P = (0, r.useCallback)(() => {
                                L.includes(bu) ? I(bu) : L.includes(pu) ? I(pu) : L.includes(Eu) ? I(Eu) : I(mu);
                            }, [L, I]),
                            $ = (0, r.useMemo)(() => {
                                const e = { intCD: C, slotType: T.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: b,
                                        isMounted: F,
                                        isDisabled: v,
                                    }),
                                ];
                            }, [C, m, p, E, b, F, v]),
                            H = $[0],
                            z = $[1],
                            j = (0, r.useMemo)(() => {
                                const e = n
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [n, g]),
                            W = (0, r.useMemo)(
                                () =>
                                    i().createElement(Du._, {
                                        parentId: M,
                                        mediaSize: u,
                                        classMix: l()(Rs.base, u && Rs[`base__${u}`]),
                                        classColorMix: Rs.unit,
                                        linesShown: n ? 4 : 3,
                                        text: w,
                                    }),
                                [u, n, w, M],
                            );
                        return i().createElement(Ku, {
                            parentId: M,
                            name: d,
                            tooltipArgs: H,
                            contextMenuArgs: z,
                            imageSource: j,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: v,
                            isLocked: D,
                            isClickable: !y,
                            options: i().createElement(tn, {
                                price: A,
                                isMounted: F || B,
                                itemsInStorage: h,
                                show: !L.length,
                            }),
                            actions: i().createElement(Ns, {
                                parentId: M,
                                availableActions: L,
                                onActionClick: I,
                                isBuyMoreDisabled: S,
                            }),
                            details: W,
                            overlayType: f,
                            onSlotClick: P,
                            lockReason: k,
                        });
                    });
                var Ps = a(4814);
                const $s = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Hs = ({ values: e, localeName: t }) => {
                        const a = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!a) return $s;
                        const u = a.value,
                            n = u.value,
                            s = 'mul' === u.valueType ? 100 * (n - 1) : n;
                        return { calcValue: s, isPositive: s > 0, valueKey: u.valueKey };
                    },
                    zs = 'Bonus_base_aa',
                    js = 'Bonus_bonus_49',
                    Ws = 'Bonus_text_48',
                    Gs = 'Unit_base_15',
                    Vs = 'Unit_base__special_37',
                    Zs = 'Unit_glow_38',
                    Us = R.strings.tank_setup.kpi.bonus.valueTypes,
                    qs = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Ks = (0, S.Pi)(({ deviceID: e, bonusID: t }) => {
                        const a = N().model,
                            u = a.computes.optDevices.device(e).activeSpecsMask,
                            n = a.computes.optDevices.bonusValue(e, t);
                        if (!n) return null;
                        const s = n.valueType,
                            r = n.value,
                            o = n.valueKey,
                            c = Boolean(u),
                            _ = 'mul' === s ? 100 * (r - 1) : r,
                            d = _ > 0 ? '+' : '',
                            m = I.Z5.getRealFormat(_, I.Gr.WO_ZERO_DIGITS),
                            p = Us.$dyn(o),
                            E = `${m}${p ? ` ${p}` : qs}`;
                        return i().createElement(
                            'div',
                            { className: l()(Gs, c && Vs) },
                            i().createElement('span', null, i().createElement('span', { className: Zs }), d + E),
                        );
                    }),
                    Ys = (0, S.Pi)(({ bonusID: e, compare: t, deviceID: a }) => {
                        const u = (0, V.GS)(),
                            n = u === V.cJ.Large || u === V.cJ.Huge ? 4 : 3,
                            s = N().model,
                            r = s.computes.optDevices.bonusVisibleLinesCount(a, e, n),
                            o = ((e, t = !1) =>
                                t || Hs(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                s.computes.optDevices.bonus(a, e),
                            );
                        return r
                            ? i().createElement(
                                  'div',
                                  { className: zs },
                                  o &&
                                      i().createElement(
                                          'span',
                                          { className: js },
                                          i().createElement(Ks, { compare: t, deviceID: a, bonusID: e }),
                                          ' ',
                                          r &&
                                              o &&
                                              i().createElement(
                                                  'span',
                                                  { className: Ws },
                                                  i().createElement(Ru.n, {
                                                      linesCount: r,
                                                      blocks: (0, Ru.D)(String(o)),
                                                      mediaSize: u,
                                                  }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    Xs = 'Bonuses_base_af',
                    Js = 'Bonuses_bonus_d1',
                    Qs = 'Bonuses_text_37',
                    er = 'Bonuses_effect_f8',
                    tr = 'Bonuses_icon_40',
                    ar = (0, S.Pi)(({ compare: e, deviceID: t }) => {
                        const a = (0, V.GS)(),
                            u = N().model,
                            n = u.computes.optDevices.device(t),
                            s = n.intCD,
                            r = n.effect,
                            o = u.computes.optDevices.bonusesLength(t),
                            l = `${s}-device`,
                            c = u.computes.optDevices.bonusEffectLinesCount(t);
                        return i().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: Xs },
                            r &&
                                i().createElement(
                                    'div',
                                    { className: Js },
                                    i().createElement(
                                        'span',
                                        { className: er },
                                        i().createElement('span', { className: tr }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    i().createElement(
                                        'span',
                                        { className: Qs },
                                        i().createElement(Ru.n, { mediaSize: a, linesCount: c, blocks: (0, Ru.D)(r) }),
                                    ),
                                ),
                            Ss(o, (a) =>
                                i().createElement(Ys, { key: `${a}_${s}`, bonusID: a, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var ur = a(2106);
                const nr = 'DeviceActions_base_c0',
                    sr = 'DeviceActions_base__hidden_a6',
                    rr = 'DeviceActions_base__shown_b0',
                    ir = (0, r.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: a,
                            isInstalled: u,
                            isMouseOverCard: n,
                            isModernized: s,
                            isFreeToDemount: r,
                            destroyTooltipBodyPath: o,
                            level: c,
                        }) => {
                            const _ = (n || u) && t.includes(vu),
                                d = t.length && (t[0] !== vu || _),
                                m = l()(nr, d ? rr : sr);
                            return i().createElement(
                                'div',
                                { className: m },
                                i().createElement(Ts.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: Eu,
                                    onClick: a,
                                    show: t.includes(Eu),
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-undo`,
                                    actionType: pu,
                                    onClick: a,
                                    show: t.includes(pu),
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: vu,
                                    onClick: a,
                                    show: _,
                                    isModernized: s,
                                    level: c,
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-demount`,
                                    actionType: gu,
                                    onClick: a,
                                    show: t.includes(gu),
                                    isFreeToDemount: r,
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: hu,
                                    onClick: a,
                                    show: t.includes(hu),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: r,
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: Au,
                                    onClick: a,
                                    show: t.includes(Au),
                                }),
                                i().createElement(Ts.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: Cu,
                                    buttonType: ur.L.secondary,
                                    onClick: a,
                                    show: (s || !r) && t.includes(Cu),
                                    isModernized: s,
                                    tooltipBodyPath: o,
                                }),
                            );
                        },
                    );
                function or() {
                    return (
                        (or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        or.apply(this, arguments)
                    );
                }
                const lr = (0, S.Pi)(({ compare: e, index: t, isCurrent: a }) => {
                        const u = (0, V.GS)(),
                            n = u === V.cJ.Large || u === V.cJ.Huge,
                            s = N(),
                            o = s.model,
                            l = s.controls,
                            c = o.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            E = c.isMountedMoreThanOne,
                            b = c.imageName,
                            g = c.itemsInStorage,
                            h = c.oldStylePrice,
                            A = c.specializations,
                            C = c.intCD,
                            v = c.isMounted,
                            f = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            F = c.isFreeToDemount,
                            B = c.overlayType,
                            y = c.isLocked,
                            w = c.isUpgradable,
                            S = c.isTrophy,
                            k = c.activeSpecsMask,
                            x = c.isModernized,
                            M = c.level,
                            L = c.lockReason,
                            O = c.destroyTooltipBodyPath,
                            I = d > -1,
                            P = `${C}-device`,
                            $ = (0, r.useMemo)(() => {
                                const t = [];
                                let u = !0;
                                return (
                                    I &&
                                        !D &&
                                        (a || t.push(bu),
                                        v && !e
                                            ? ((u = !a), t.push(...((e) => (e ? [hu, Au] : [gu]))(E)), t.push(Cu))
                                            : t.push(((e, t, a) => ((!Boolean(e) && !t) || a ? pu : Eu))(g, v, f))),
                                    !w || e || D || t.push(vu),
                                    { availableActions: t, isDeviceClickable: u }
                                );
                            }, [I, D, w, e, a, v, E, g, f]),
                            H = $.availableActions,
                            z = $.isDeviceClickable,
                            j = (0, r.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: C, installedSlotId: d });
                                },
                                [l, C, d],
                            ),
                            W = (0, r.useCallback)(() => {
                                H.length && H[0] !== vu ? j(H[0]) : j(mu);
                            }, [H, j]),
                            G = (0, r.useMemo)(() => {
                                const e = { intCD: C, slotType: T.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: E,
                                        isMounted: v,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [C, d, m, p, E, v, D]),
                            Z = G[0],
                            U = G[1],
                            q = (0, r.useMemo)(() => {
                                const e = n
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [n, b]);
                        return i().createElement(Ku, {
                            parentId: P,
                            name: _,
                            tooltipArgs: Z,
                            contextMenuArgs: U,
                            imageSource: q,
                            isCurrent: a,
                            isActive: I,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: z,
                            isModernized: x,
                            level: M,
                            specializations:
                                A && A.specializations.length
                                    ? i().createElement(Ps.G, or({}, A, { activeSpecsMask: k, mediaSize: u }))
                                    : null,
                            details: i().createElement(ar, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : i().createElement(tn, {
                                      isMounted: v || f,
                                      itemsInStorage: g,
                                      price: h,
                                      possibleZeroCount: S || x,
                                      show: !H.length || Boolean(g || v || f),
                                  }),
                            actions: i().createElement(ir, {
                                parentId: P,
                                availableActions: H,
                                onActionClick: j,
                                isInstalled: I,
                                isModernized: x,
                                level: M,
                                isFreeToDemount: F,
                                destroyTooltipBodyPath: O,
                            }),
                            overlayType: B,
                            onSlotClick: W,
                            shouldHandleMouseOver: !0,
                            lockReason: L,
                        });
                    }),
                    cr = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    _r = (0, S.Pi)(({ index: e, forwardRef: t, type: a, compare: u = !1 }) => {
                        const n = (0, V.GS)(),
                            s = N().model,
                            r = s.ammunitionPanel.get().selectedSlot,
                            o = (() => {
                                switch (a) {
                                    case T.zn:
                                        return s.computes.optDevices.device(e);
                                    case T.mH:
                                        return s.computes.consumables.consumable(e, u, n);
                                    case T.G$:
                                        return s.computes.boosters.booster(e);
                                    default:
                                        return s.computes.optDevices.device(e);
                                }
                            })(),
                            c = o.isVisible,
                            _ = o.installedSlotId,
                            d = _ > -1 && r === _;
                        return c
                            ? i().createElement(
                                  'div',
                                  { className: l()(cr.base, n && cr[`base__${n}`]), ref: d ? t : null },
                                  (() => {
                                      switch (a) {
                                          case T.G$:
                                              return i().createElement(Os, { index: e, compare: u, isCurrent: d });
                                          case T.mH:
                                              return i().createElement(Is, { index: e, compare: u, isCurrent: d });
                                          case T.zn:
                                          default:
                                              return i().createElement(lr, { index: e, compare: u, isCurrent: d });
                                      }
                                  })(),
                              )
                            : null;
                    }),
                    dr = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    mr = ({ isDisabled: e, compare: t = !1, currentCardRef: a, cardsAmount: u, type: n }) => {
                        const s = (0, V.GS)();
                        return i().createElement(
                            'div',
                            { className: l()(dr.base, s && dr[`base__${s}`], e && dr.base__disabled) },
                            Ss(u, (e) =>
                                i().createElement(_r, { key: e, index: e, compare: t, forwardRef: a, type: n }),
                            ),
                        );
                    };
                var pr = a(3215),
                    Er = a(3522);
                const br = (0, pr.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, Er._)(e),
                                a = t.model,
                                u = t.computes,
                                n = e.object();
                            return Object.assign({}, a, { ammunitionPanel: n, computes: u });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    gr = br[0],
                    hr = br[1];
                var Ar = a(9480),
                    Cr = a(8586),
                    vr = a(3978);
                const fr = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Dr = 'FilterItem_base_2e',
                    Fr = ({ name: e }) =>
                        i().createElement('div', {
                            className: Dr,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Br;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(Br || (Br = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let yr;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(yr || (yr = {}));
                const wr = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Sr;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(Sr || (Sr = {}));
                let kr;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(kr || (kr = {}));
                const Tr = 'ClearBtn_base_a6',
                    xr = 'ClearBtn_stroke_09',
                    Nr = 'ClearBtn_background_61',
                    Mr = 'ClearBtn_base__hover_3b',
                    Lr = 'ClearBtn_base__down_60',
                    Or = 'ClearBtn_cross_1d',
                    Rr = ({ parentId: e, onClick: t, soundHover: a = 'highlight', soundClick: u = 'play' }) => {
                        const n = (0, r.useState)(!1),
                            s = n[0],
                            o = n[1],
                            c = (0, r.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, r.useCallback)(() => {
                                (0, Re.G)(u), d(!1), o(!0);
                            }, [u]),
                            p = (0, r.useCallback)(() => {
                                (0, Re.G)(a), d(!0);
                            }, [a]),
                            E = (0, r.useCallback)(() => {
                                d(!1), o(!1);
                            }, []);
                        return i().createElement(
                            Y.i,
                            wr,
                            i().createElement(
                                'div',
                                {
                                    id: e,
                                    className: l()(Tr, _ && Mr, s && Lr),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: E,
                                    onClick: t,
                                },
                                i().createElement('div', { className: Nr }),
                                i().createElement('div', { className: xr }),
                                i().createElement('div', { className: Or }),
                            ),
                        );
                    },
                    Ir = 'MatchDetails_base_a8',
                    Pr = 'MatchDetails_count_d2',
                    $r = 'MatchDetails_clear_21',
                    Hr = 'MatchDetails_clear__shown_49',
                    zr = 'MatchDetails_separator_bc',
                    jr = 'MatchDetails_arrow_b0',
                    Wr = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: a, totalCount: u }) => {
                        const n = (0, r.useCallback)(() => t(), [t]);
                        return i().createElement(
                            'div',
                            { className: Ir },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('span', { className: Pr }, a),
                                    i().createElement(
                                        'span',
                                        { className: zr },
                                        '/',
                                        i().createElement('span', { className: jr }),
                                    ),
                                ),
                            i().createElement('span', { className: Pr }, u),
                            i().createElement(
                                'span',
                                { className: l()($r, e && Hr) },
                                i().createElement(Rr, { parentId: 'match-details-clear-btn', onClick: n }),
                            ),
                        );
                    },
                    Gr = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: a,
                        isEnabled: u,
                        showDetails: n = !1,
                        onFilterChanged: s,
                        onFilterReset: o,
                        selectedSlotSpecialization: c,
                    }) => {
                        const _ = (0, V.GS)(),
                            d = ee('FilterTutorialHintZone', J);
                        (0, r.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, Ar.UI)(a, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: i().createElement(Fr, { name: e }),
                            callback: (e, t) => {
                                s({ name: e }), (0, vr.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: ur.L.ghost,
                                mixClass: l()(fr.button, c && e === c && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return i().createElement(
                            'div',
                            { className: l()(fr.base, _ && fr[`base__${_}`], n && fr.base__detailed) },
                            n &&
                                i().createElement(Wr, {
                                    isFilterActive: u,
                                    onFilterReset: o,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            i().createElement(
                                'div',
                                { className: fr.buttons },
                                i().createElement(Cr.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var Vr = a(2372),
                    Zr = a(3028);
                const Ur = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    qr = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Kr = (e) => (e ? qr.disabled.text() : qr.notDisabled.text()),
                    Yr = (0, S.Pi)(({ disabled: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, Zr.t)(),
                            u = a.model,
                            n = a.controls,
                            s = u.optDevices.specialCurrency.get().value;
                        return i().createElement(
                            'div',
                            { className: l()(Ur.base, t && Ur[`base__${t}`]) },
                            i().createElement(
                                wt.t,
                                { args: { tooltipId: T.$4 } },
                                i().createElement(
                                    'div',
                                    { className: Ur.currency },
                                    i().createElement(Vr.A, { value: s }),
                                    i().createElement('div', { className: Ur.currencyIcon }),
                                ),
                            ),
                            i().createElement(
                                Y.i,
                                { body: Kr(e) },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(
                                        Ce.u5,
                                        { onClick: n.moreCurrencyGot, mixClass: Ur.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Xr = 'HeaderContent_base_cd';
                function Jr() {
                    return (
                        (Jr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Jr.apply(this, arguments)
                    );
                }
                const Qr = (0, S.Pi)(({ compare: e }) => {
                        const t = N(),
                            a = t.model,
                            u = t.controls,
                            n = a.optDevices.setup.get(),
                            s = n.withIntroduction,
                            r = n.hasUnfitItems,
                            o = a.computes.optDevices.slotsLength(),
                            l = a.optDevices.tabs.get(),
                            c = a.optDevices.filter.get(),
                            _ = e ? void 0 : a.computes.selectedSlotSpecialization();
                        switch (l.selectedTabName) {
                            case T.S:
                                return i().createElement(
                                    'div',
                                    { className: Xr },
                                    i().createElement(
                                        Gr,
                                        Jr({}, c, {
                                            onFilterChanged: u.filterChanged,
                                            onFilterReset: u.filterReset,
                                            selectedSlotSpecialization: _,
                                        }),
                                    ),
                                );
                            case T.pi:
                                return e
                                    ? null
                                    : o > 0
                                      ? i().createElement(
                                            'div',
                                            { className: Xr },
                                            i().createElement(Yr, { disabled: s ? !r : o <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    ei = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    ti = R.strings.tank_setup.compare.section,
                    ai = (0, S.Pi)(({ type: e, children: t, withContent: a }) => {
                        const u = hr().model.vehicleInfo.get(),
                            n = (0, V.GS)();
                        return i().createElement(
                            'div',
                            { className: l()(ei.base, ei[`base__${n}`]) },
                            i().createElement(
                                'div',
                                { className: ei.title },
                                (0, U.WU)(String(ti.title.$dyn(e)), { name: u.vehicleName }),
                            ),
                            i().createElement('div', { className: ei.description }, ti.description.$dyn(e)),
                            i().createElement(
                                'div',
                                { className: ei.controlsContainer },
                                i().createElement('div', { className: ei.tabs }, t),
                                a && i().createElement(Qr, { compare: !0 }),
                            ),
                        );
                    });
                function ui() {
                    return (
                        (ui =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ui.apply(this, arguments)
                    );
                }
                const ni = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N(),
                            a = t.model,
                            u = t.controls,
                            n = (0, V.GS)(),
                            s = a.ammunitionPanel.get().selectedSlot,
                            r = a.boosters.tabs.get(),
                            o = a.computes.boosters.length();
                        return i().createElement(V.Ar, {
                            compare: e,
                            header: e
                                ? i().createElement(
                                      ai,
                                      { type: T.G$ },
                                      i().createElement(
                                          cs,
                                          ui({}, r, { handleTabChanged: u.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : i().createElement(ds, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, r, {
                                          handleTabChanged: u.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: i().createElement(
                                lu,
                                { selectedSlotId: s, scrollAreaKey: r.selectedTabName, updateKey: o },
                                i().createElement(mr, { compare: e, type: T.G$, cardsAmount: o }),
                            ),
                            footer:
                                !e &&
                                i().createElement(ws.w, {
                                    withConfirmation: !0,
                                    renewalType: ys.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: u.boosters.confirmDeal,
                                    onDealCancelled: u.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => u.boosters.changeAutoRenewal(e),
                                    mediaSize: n,
                                }),
                        });
                    }),
                    si = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, V.GS)(),
                            a = N(),
                            u = a.model,
                            n = a.controls,
                            s = u.ammunitionPanel.get().selectedSlot,
                            r = u.computes.consumables.length(e, t);
                        return i().createElement(V.Ar, {
                            header: e
                                ? i().createElement(ai, { type: T.mH })
                                : i().createElement(ds, { title: R.strings.tank_setup.section.consumables() }),
                            content: i().createElement(
                                lu,
                                { selectedSlotId: s },
                                i().createElement(mr, { compare: e, cardsAmount: r, type: T.mH }),
                            ),
                            footer:
                                !e &&
                                i().createElement(ws.w, {
                                    withConfirmation: !0,
                                    renewalType: ys.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: n.consumables.confirmDeal,
                                    onDealCancelled: n.consumables.cancelDeal,
                                    onAutoRenewalChanged: n.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function ri() {
                    return (
                        (ri =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ri.apply(this, arguments)
                    );
                }
                const ii = (0, S.Pi)(({ compare: e }) => {
                    const t = N(),
                        a = t.model,
                        u = t.controls,
                        n = a.optDevices.tabs.get(),
                        s = n.tabs.length > 1;
                    return e
                        ? i().createElement(
                              ai,
                              { type: T.zn, withContent: !0 },
                              s && i().createElement(cs, ri({}, n, { handleTabChanged: u.optDevices.changeTab })),
                          )
                        : i().createElement(
                              ds,
                              {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  tabProps: s
                                      ? Object.assign({}, n, { handleTabChanged: u.optDevices.changeTab })
                                      : void 0,
                                  tabs:
                                      s &&
                                      i().createElement(cs, ri({}, n, { handleTabChanged: u.optDevices.changeTab })),
                              },
                              i().createElement(Qr, { compare: e }),
                          );
                });
                var oi = a(8934);
                const li = {
                        base: 'Introduction_base_0e',
                        base__enter: 'Introduction_base__enter_93',
                        base__enterActive: 'Introduction_base__enterActive_e5',
                        base__exit: 'Introduction_base__exit_74',
                        base__exitActive: 'Introduction_base__exitActive_4e',
                        introduction: 'Introduction_introduction_b1',
                        image: 'Introduction_image_78',
                        base__large: 'Introduction_base__large_30',
                        base__huge: 'Introduction_base__huge_51',
                        image__deluxe: 'Introduction_image__deluxe_b6',
                        image__deluxeLarge: 'Introduction_image__deluxeLarge_ce',
                        image__trophy: 'Introduction_image__trophy_1f',
                        image__trophyLarge: 'Introduction_image__trophyLarge_58',
                        image__modernized: 'Introduction_image__modernized_f6',
                        image__modernizedLarge: 'Introduction_image__modernizedLarge_d7',
                        description: 'Introduction_description_f2',
                        title: 'Introduction_title_74',
                        message: 'Introduction_message_d3',
                        currency: 'Introduction_currency_60',
                        icon: 'Introduction_icon_0d',
                        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_5e',
                        'icon__currency-modernized': 'Introduction_icon__currency-modernized_09',
                    },
                    ci = ({ introType: e }) => {
                        const t = l()(li.icon, li[`icon__currency-${e}`]),
                            a = (0, r.useMemo)(
                                () => ({
                                    currencyName: i().createElement(
                                        'span',
                                        { className: li.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: i().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            u = R.strings.tank_setup.introduction.message.$dyn(e);
                        return u ? i().createElement(K, { binding: a, text: u, classMix: li.message }) : null;
                    },
                    _i = (0, S.Pi)(() => {
                        const e = (0, V.GS)(),
                            t = e === V.cJ.Large || e === V.cJ.Huge,
                            a = (0, r.useState)(!0),
                            u = a[0],
                            n = a[1],
                            s = (0, Zr.t)(),
                            o = s.model,
                            c = s.controls,
                            _ = o.optDevices.setup.get().introductionType,
                            d = o.computes.optDevices.slotsLength() > 0,
                            m = (0, r.useCallback)(() => {
                                n(!1);
                            }, []),
                            p = (0, r.useCallback)(() => {
                                c.introPassed(), n(!0);
                            }, [c]),
                            E = (0, r.useMemo)(
                                () => ({
                                    enter: li.base__enter,
                                    enterActive: li.base__enterActive,
                                    exit: li.base__exit,
                                    exitActive: li.base__exitActive,
                                }),
                                [],
                            ),
                            b = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return i().createElement(
                            oi.Z,
                            { in: u, classNames: E, timeout: 300, onExited: p },
                            i().createElement(
                                'div',
                                { className: l()(li.base, e && li[`base__${e}`]), id: 'introduction' },
                                i().createElement(
                                    'div',
                                    { className: li.introduction },
                                    i().createElement('div', {
                                        className: l()(li.image, t ? li[`image__${_}Large`] : li[`image__${_}`]),
                                    }),
                                    i().createElement(
                                        'div',
                                        { className: li.description },
                                        i().createElement('div', { className: li.title }, b),
                                        i().createElement(ci, { introType: _ }),
                                    ),
                                    d &&
                                        i().createElement(
                                            Ce.u5,
                                            { type: Ce.L$.secondary, size: Ce.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    di = 'OptDevicesSetup_intro_ae',
                    mi = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = (0, V.GS)(),
                            a = N().model,
                            u = (0, Zr.t)().controls,
                            n = a.ammunitionPanel.get().selectedSlot,
                            s = a.optDevices.setup.get().withIntroduction,
                            r = a.computes.optDevices.slotsLength(),
                            o = a.optDevices.filter.get().selectedFilterCount,
                            l = a.optDevices.tabs.get().selectedTabName,
                            c = a.computes.optDevices.slotsLength();
                        return i().createElement(V.Ar, {
                            compare: e,
                            header: i().createElement(ii, { compare: e }),
                            content:
                                !e && s
                                    ? i().createElement(
                                          'div',
                                          { className: di },
                                          i().createElement(mr, {
                                              compare: !1,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          i().createElement(_i, null),
                                      )
                                    : i().createElement(
                                          lu,
                                          { selectedSlotId: n, scrollAreaKey: l, updateKey: `${o}:${r}` },
                                          i().createElement(mr, {
                                              compare: e,
                                              type: T.zn,
                                              cardsAmount: c,
                                              isDisabled: s,
                                          }),
                                      ),
                            footer:
                                !e &&
                                i().createElement(ws.w, {
                                    withConfirmation: !0,
                                    parentModelPath: 'model.tankSetup.optDevicesSetup',
                                    mediaSize: t,
                                    onDealConfirmed: u.optDevices.confirmDeal,
                                    onDealCancelled: u.optDevices.cancelDeal,
                                    onAutoRenewalChanged: u.optDevices.changeAutoRenewal,
                                }),
                        });
                    });
                var pi = a(5096),
                    Ei = a(2558);
                const bi = 200;
                let gi;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(gi || (gi = {}));
                const hi = {
                        base__tiny: 'SectionsSwapTransition_base__tiny_fe',
                        base__enter: 'SectionsSwapTransition_base__enter_9c',
                        base__exitActive: 'SectionsSwapTransition_base__exitActive_c5',
                        base__exitFade: 'SectionsSwapTransition_base__exitFade_5d',
                        'animation-fade': 'SectionsSwapTransition_animation-fade_8e',
                        base__enterFade: 'SectionsSwapTransition_base__enterFade_d1',
                        base__exitLeft: 'SectionsSwapTransition_base__exitLeft_6c',
                        'animation-left': 'SectionsSwapTransition_animation-left_02',
                        base__exitRight: 'SectionsSwapTransition_base__exitRight_1e',
                        'animation-right': 'SectionsSwapTransition_animation-right_6c',
                        base__enterLeft: 'SectionsSwapTransition_base__enterLeft_5a',
                        base__enterRight: 'SectionsSwapTransition_base__enterRight_90',
                        base__exitTop: 'SectionsSwapTransition_base__exitTop_b5',
                        'animation-top': 'SectionsSwapTransition_animation-top_cc',
                        base__exitTopFade: 'SectionsSwapTransition_base__exitTopFade_3d',
                        'animation-top-fade': 'SectionsSwapTransition_animation-top-fade_ba',
                        base__exitBottom: 'SectionsSwapTransition_base__exitBottom_7c',
                        base__exitBottomFade: 'SectionsSwapTransition_base__exitBottomFade_fa',
                        'animation-bottom-fade': 'SectionsSwapTransition_animation-bottom-fade_c5',
                        base__enterTop: 'SectionsSwapTransition_base__enterTop_bd',
                        base__enterTopFade: 'SectionsSwapTransition_base__enterTopFade_48',
                        base__enterBottom: 'SectionsSwapTransition_base__enterBottom_0c',
                        'animation-bottom': 'SectionsSwapTransition_animation-bottom_c9',
                        base__enterBottomFade: 'SectionsSwapTransition_base__enterBottomFade_55',
                    },
                    Ai = (0, S.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: a,
                            leftID: u,
                            rightID: n,
                            uniqueKey: s,
                            onTransitionEnd: o,
                        }) => {
                            const c = du(s),
                                _ = a === V.cJ.Tiny,
                                d = u === t,
                                m = c && c !== s,
                                p = (0, r.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                E = (0, r.useMemo)(() => ((n - u > 1 && _) || !m ? 'Fade' : ''), [m, u, n, _]),
                                b = (0, r.useCallback)(
                                    (e) =>
                                        i().cloneElement(e, {
                                            classNames: {
                                                enterActive: hi.base__enter,
                                                enterDone: hi[`base__enter${p}${E}`],
                                                exit: hi[`base__exit${p}${E}`],
                                                exitActive: hi.base__exitActive,
                                            },
                                        }),
                                    [p, E],
                                ),
                                g = (0, r.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), o && o();
                                        }, bi);
                                    },
                                    [o],
                                ),
                                h = (0, r.useMemo)(() => ({ animationDuration: '200ms' }), []);
                            return i().createElement(
                                Ei.Z,
                                { component: null, childFactory: b },
                                i().createElement(
                                    oi.Z,
                                    { key: s, timeout: bi, onEntered: g },
                                    i().createElement(
                                        'div',
                                        { className: l()(hi.base, hi[`base__${a}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Ci = a(2094);
                const vi = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        count__zero: 'Shell_count__zero_45',
                        name: 'Shell_name_29',
                        base__medium: 'Shell_base__medium_5e',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    fi = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Di = (0, S.Pi)(({ shellID: e, specificationID: t }) => {
                        const a = (0, V.GS)(),
                            u = a === V.cJ.Tiny,
                            n = (0, Zr.t)().model.computes.shells.specification(e, t),
                            s = n.paramName,
                            o = n.value,
                            c = n.metricValue,
                            _ = (0, r.useMemo)(() => {
                                if ('avgPiercingPower' === s) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [s]);
                        return 'avgPiercingPower' === s || (!u && o)
                            ? i().createElement(
                                  'div',
                                  { className: l()(fi.base, a && fi[`base__${a}`]) },
                                  u
                                      ? i().createElement(
                                            i().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(s),
                                            ' ',
                                            i().createElement(
                                                'div',
                                                { className: fi.value },
                                                o || i().createElement('span', null, '—'),
                                            ),
                                            i().createElement('div', { className: fi.units }, _),
                                        )
                                      : i().createElement(
                                            i().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(s),
                                            i().createElement('div', { className: fi.units }, c),
                                            i().createElement('div', {
                                                className: l()(fi.separator, a && fi[`separator__${a}`]),
                                            }),
                                            i().createElement(
                                                'div',
                                                { className: fi.value },
                                                o || i().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    Fi = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var Bi = a(7405),
                    yi = a(329);
                const wi = {
                    base__tiny: 'TotalRow_base__tiny_c9',
                    row: 'TotalRow_row_f2',
                    row__medium: 'TotalRow_row__medium_fd',
                    row__large: 'TotalRow_row__large_44',
                    row__huge: 'TotalRow_row__huge_e2',
                    rowItem: 'TotalRow_rowItem_ff',
                    separator: 'TotalRow_separator_a2',
                    separator__tiny: 'TotalRow_separator__tiny_7a',
                    total: 'TotalRow_total_f7',
                    total__tiny: 'TotalRow_total__tiny_bf',
                    colored: 'TotalRow_colored_33',
                    overall: 'TotalRow_overall_09',
                    value: 'TotalRow_value_b8',
                    lowResolutionValue: 'TotalRow_lowResolutionValue_a2',
                    lowResolutionValue__tiny: 'TotalRow_lowResolutionValue__tiny_e6',
                    hiResolutionValue: 'TotalRow_hiResolutionValue_fa',
                    hiResolutionValue__tiny: 'TotalRow_hiResolutionValue__tiny_94',
                    price: 'TotalRow_price_4a',
                    price__final: 'TotalRow_price__final_d4',
                    indent: 'TotalRow_indent_0e',
                    divider: 'TotalRow_divider_94',
                };
                function Si() {
                    return (
                        (Si =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Si.apply(this, arguments)
                    );
                }
                const ki = R.strings.tank_setup.shells,
                    Ti = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = t === V.cJ.Tiny,
                            u = (0, Zr.t)().model,
                            n = u.computes.shells.shell(e),
                            s = n.buyCount,
                            o = n.itemsInStorage,
                            c = n.itemsInVehicle,
                            _ = n.totalPrice,
                            d = n.price,
                            m = u.computes.shells.defPriceLength(e),
                            p = u.computes.shells.priceLength(e) ? u.computes.shells.price(e, 0) : null,
                            E = m ? u.computes.shells.defPrice(e, 0) : null,
                            b = (0, r.useMemo)(() => ki[a ? 'shortSpecification' : 'specification'].inStorage(), [a]),
                            g = (0, r.useMemo)(() => ki[a ? 'shortSpecification' : 'specification'].inVehicle(), [a]),
                            h = (0, r.useMemo)(() => ki[a ? 'shortSpecification' : 'specification'].price(), [a]),
                            A = c >= 0,
                            C = m > 0,
                            v = (0, r.useMemo)(
                                () =>
                                    p && E
                                        ? {
                                              tooltip: 'priceDiscount',
                                              price: p.value,
                                              defPrice: E.value,
                                              currencyType: p.name,
                                          }
                                        : void 0,
                                [E, p],
                            );
                        return i().createElement(
                            'div',
                            { className: l()(wi.base, t && wi[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: l()(wi.row, t && wi[`row__${t}`]) },
                                i().createElement(
                                    'div',
                                    { className: wi.rowItem },
                                    i().createElement('div', { className: l()(wi.total, t && wi[`total__${t}`]) }, b),
                                    i().createElement(
                                        'div',
                                        { className: l()(wi.lowResolutionValue, t && wi[`lowResolutionValue__${t}`]) },
                                        i().createElement('span', { className: wi.indent }),
                                        o,
                                    ),
                                ),
                                A &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('span', { className: wi.divider }, '/'),
                                        i().createElement(
                                            'div',
                                            { className: wi.rowItem },
                                            i().createElement(
                                                'div',
                                                { className: l()(wi.total, t && wi[`total__${t}`]) },
                                                i().createElement(
                                                    'div',
                                                    { className: l()(wi.colored, t && wi[`colored__${t}`]) },
                                                    g,
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                {
                                                    className: l()(
                                                        wi.lowResolutionValue,
                                                        t && wi[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                i().createElement('span', { className: wi.indent }),
                                                c,
                                            ),
                                        ),
                                    ),
                                i().createElement('div', { className: l()(wi.separator, t && wi[`separator__${t}`]) }),
                                i().createElement(
                                    'div',
                                    { className: l()(wi.hiResolutionValue, t && wi[`hiResolutionValue__${t}`]) },
                                    o,
                                    A &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('span', { className: wi.divider }, '/'),
                                            i().createElement(
                                                'div',
                                                { className: l()(wi.colored, t && wi[`colored__${t}`]) },
                                                c,
                                            ),
                                        ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: l()(wi.row, t && wi[`row__${t}`]) },
                                i().createElement('div', { className: l()(wi.total, t && wi[`total__${t}`]) }, h),
                                i().createElement('div', { className: l()(wi.separator, t && wi[`separator__${t}`]) }),
                                i().createElement(
                                    'div',
                                    { className: wi.value },
                                    i().createElement(
                                        'div',
                                        { className: wi.overall },
                                        '(',
                                        i().createElement('span', null, s),
                                        ' ×',
                                        i().createElement(
                                            wt.t,
                                            { args: v, isEnabled: C },
                                            i().createElement(
                                                'span',
                                                { className: wi.price },
                                                i().createElement(Yu.t, Si({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        i().createElement(
                                            'span',
                                            { className: l()(wi.price, wi.price__final) },
                                            s
                                                ? i().createElement(Yu.t, Si({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : i().createElement(Bi.F, {
                                                      size: yi.et.small,
                                                      type: yi.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xi = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, Zr.t)().model.computes.shells.specificationsLength(e);
                        return i().createElement(
                            'div',
                            { className: l()(Fi.base, t && Fi[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: Fi.overall },
                                Ss(a, (t) =>
                                    i().createElement(
                                        r.Fragment,
                                        { key: t },
                                        i().createElement(Di, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: Fi.total }, i().createElement(Ti, { id: e })),
                        );
                    }),
                    Ni = R.images.gui.maps.icons.shell,
                    Mi = (0, S.Pi)(({ id: e }) => {
                        const t = (0, V.GS)(),
                            a = (0, Zr.t)(),
                            u = a.model,
                            n = a.controls,
                            s = u.computes.shells.shell(e),
                            o = s.count,
                            c = s.type,
                            _ = s.intCD,
                            d = s.imageName,
                            m = s.installedSlotId,
                            p = s.itemInstalledSetupIdx,
                            E = s.itemInstalledSetupSlotIdx,
                            b = s.isMountedMoreThanOne,
                            g = u.shellsSetup.get(),
                            h = g.installedCount,
                            A = g.maxCount,
                            C = g.clipCount,
                            v = A - h + o,
                            f = (0, r.useCallback)(
                                (e) => {
                                    n.shells.updateSlot && n.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [n, _],
                            ),
                            D = (0, r.useMemo)(() => {
                                const e = { slotType: T.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: E,
                                        isMountedMoreThanOne: b,
                                    }),
                                ];
                            }, [_, m, p, E, b]),
                            F = D[0],
                            B = D[1],
                            y = (0, r.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case V.cJ.Huge:
                                        case V.cJ.Large:
                                            return Ni.large;
                                        default:
                                            return Ni.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            w = R.strings.item_types.shell.kinds.$dyn(c),
                            S = systemLocale.toUpperCase(w);
                        return i().createElement(
                            'div',
                            { className: l()(vi.base, t && vi[`base__${t}`]) },
                            i().createElement(
                                'div',
                                { className: vi.shell },
                                i().createElement(
                                    Su,
                                    { args: B },
                                    i().createElement(
                                        wt.t,
                                        { args: F },
                                        i().createElement(
                                            'div',
                                            { className: vi.icon, style: y },
                                            i().createElement(
                                                'div',
                                                { className: l()(vi.count, !o && vi.count__zero) },
                                                o,
                                            ),
                                        ),
                                    ),
                                ),
                                i().createElement('div', { className: vi.name }, S),
                            ),
                            i().createElement(
                                'div',
                                { className: vi.ammunition },
                                i().createElement(Ci.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: o,
                                    maximum: A,
                                    sliderMaximum: v,
                                    onUpdates: f,
                                    stepCount: C,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: vi.specifications },
                                i().createElement(xi, { id: e }),
                            ),
                        );
                    }),
                    Li = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    Oi = ({ id: e, onSwap: t, mediaSize: a, hoverSound: u = 'highlight', clickSound: n = 'play' }) => {
                        const s = (0, r.useCallback)(() => {
                                n && (0, Re.G)(n), t(e);
                            }, [e, t, n]),
                            o = (0, r.useCallback)(() => {
                                u && (0, Re.G)(u);
                            }, [u]);
                        return i().createElement('div', {
                            id: `swap-${e}`,
                            onClick: s,
                            onMouseEnter: o,
                            className: l()(Li.base, Li[`base__${a}`]),
                        });
                    },
                    Ri = {
                        base: 'ShellContainer_base_d7',
                        base__tiny: 'ShellContainer_base__tiny_4b',
                        base__large: 'ShellContainer_base__large_10',
                        base__huge: 'ShellContainer_base__huge_74',
                        swap: 'ShellContainer_swap_14',
                        swap__noEvents: 'ShellContainer_swap__noEvents_e5',
                        swap__tiny: 'ShellContainer_swap__tiny_f2',
                        swap__large: 'ShellContainer_swap__large_60',
                        swap__huge: 'ShellContainer_swap__huge_b8',
                    },
                    Ii = (0, S.Pi)(({ id: e, onTransitionEnd: t, onSwap: a, leftID: u, rightID: n }) => {
                        const s = (0, V.GS)(),
                            r = (0, Zr.t)().model,
                            o = r.computes.shells.length(),
                            c = r.computes.shells.shell(e).intCD;
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                Ai,
                                { index: e, uniqueKey: c, leftID: u, rightID: n, mediaSize: s, onTransitionEnd: t },
                                i().createElement(
                                    'div',
                                    { className: l()(Ri.base, s && Ri[`base__${s}`]) },
                                    i().createElement(Mi, { id: e }),
                                ),
                            ),
                            e !== o - 1 &&
                                i().createElement(
                                    'div',
                                    { className: l()(Ri.swap, s && Ri[`swap__${s}`]) },
                                    i().createElement(Oi, { id: e, mediaSize: s, onSwap: a }),
                                ),
                        );
                    }),
                    Pi = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    $i = (0, S.Pi)(() => {
                        const e = (0, Zr.t)(),
                            t = e.model,
                            a = e.controls,
                            u = t.computes.shells.length(),
                            n = (0, r.useState)(!1),
                            s = n[0],
                            o = n[1],
                            c = (0, V.GS)(),
                            _ = t.computes.shells.ids(),
                            d = du(_),
                            m = (0, r.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            E = m.rightID,
                            b = (0, r.useCallback)(
                                (e) => {
                                    s || a.shells.actSlot({ actionType: bu, leftID: e, rightID: e + 1 }), o(!0);
                                },
                                [a, s],
                            ),
                            g = (0, r.useCallback)(() => {
                                o(!1);
                            }, [o]);
                        return i().createElement(
                            'div',
                            { className: l()(Pi.base, Pi[`base__${c}`]) },
                            Ss(u, (e) =>
                                i().createElement(Ii, { id: e, onTransitionEnd: g, onSwap: b, leftID: p, rightID: E }),
                            ),
                        );
                    }),
                    Hi = (0, S.Pi)(() => {
                        const e = (0, V.GS)(),
                            t = (0, Zr.t)().controls;
                        return i().createElement(V.Ar, {
                            header: i().createElement(
                                ds,
                                { title: R.strings.tank_setup.section.shells() },
                                i().createElement(pi.k, { isShortened: !0 }),
                            ),
                            content: i().createElement($i, null),
                            footer: i().createElement(ws.w, {
                                withConfirmation: !0,
                                renewalType: ys.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    zi = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    },
                    ji = (0, S.Pi)(({ isHidden: e = !1 }) => {
                        const t = i().useRef(null),
                            a = (0, Zr.t)(),
                            u = a.model,
                            n = a.controls,
                            s = u.vehicleInfo.get(),
                            o = (0, V.GS)();
                        return (
                            ((e, t, a, u = []) => {
                                const n = Ie(
                                    () =>
                                        (0, w.v)(() =>
                                            (0, w.v)(() => {
                                                if (e.current) {
                                                    const a = e.current.getBoundingClientRect(),
                                                        u = {
                                                            width: Ne.O.view.pxToRem(a.width),
                                                            height: Ne.O.view.pxToRem(a.height),
                                                            offsetX: Ne.O.view.pxToRem(a.left),
                                                            offsetY: Ne.O.view.pxToRem(a.top),
                                                        };
                                                    window.tutorialApi.updateComponents(), t(u);
                                                }
                                            }),
                                        ),
                                    [t, e],
                                );
                                (0, r.useEffect)(() => {
                                    n();
                                }, [n, ...u]),
                                    (0, r.useEffect)(() => {
                                        if (a)
                                            return (
                                                engine.on('clientResized', n),
                                                () => {
                                                    engine.off('clientResized', n);
                                                }
                                            );
                                    }, [a, n]);
                            })(t, n.resized, !0, [n.resized, Ne.O.view.getScale()]),
                            i().createElement(
                                'div',
                                { className: l()(zi.base, o && zi[`base__${o}`], e && zi.base__hidden), ref: t },
                                i().createElement(ha, s),
                            )
                        );
                    }),
                    Wi = {
                        base: 'Animation_base_bf',
                        base__leftEnter: 'Animation_base__leftEnter_5f',
                        base__rightEnter: 'Animation_base__rightEnter_c1',
                        base__leftEntering: 'Animation_base__leftEntering_9c',
                        'animation-show-left': 'Animation_animation-show-left_24',
                        base__rightEntering: 'Animation_base__rightEntering_8d',
                        'animation-show-right': 'Animation_animation-show-right_bb',
                        base__exit: 'Animation_base__exit_b5',
                        base__previous: 'Animation_base__previous_09',
                        base__leftExit: 'Animation_base__leftExit_f1',
                        'animation-hide-left': 'Animation_animation-hide-left_df',
                        base__rightExit: 'Animation_base__rightExit_e3',
                        'animation-hide-right': 'Animation_animation-hide-right_fe',
                    },
                    Gi = [T.zn, T.g9, T.mH, T.G$, T.YN],
                    Vi = (e, t) => (t === e ? '' : Gi.indexOf(t) > Gi.indexOf(e) ? 'right' : 'left'),
                    Zi = ({ children: e, selectedSetup: t }) => {
                        const a = i().createRef(),
                            u = (0, r.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            n = (0, r.useMemo)(() => {
                                const e = Vi(u.current.selectedSetup, t);
                                return { enter: Wi[`base__${e}Enter`] };
                            }, [t]),
                            s = (0, r.useCallback)(
                                (e) => {
                                    const n = Vi(u.current.selectedSetup, t);
                                    (e.className = l()(Wi.base, Wi.base__exit)),
                                        e.classList.add(Wi[`base__${n}Exit`]),
                                        (u.current.animatedElements[t] = a);
                                    Object.values(u.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(Wi.base__previous);
                                    }),
                                        a.current && a.current.classList.add(Wi.base__previous);
                                },
                                [a, t],
                            ),
                            o = (0, r.useCallback)(
                                (e) => {
                                    const a = Vi(u.current.previousSelectedSetup, t);
                                    (e.className = Wi.base), e.classList.add(Wi[`base__${a}Enter`]);
                                },
                                [t],
                            ),
                            c = (0, r.useCallback)(
                                (e) => {
                                    const a = Vi(u.current.previousSelectedSetup, t);
                                    e.classList.add(Wi[`base__${a}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, r.cloneElement)(e);
                        return (
                            (u.current.previousSelectedSetup = u.current.selectedSetup),
                            (u.current.selectedSetup = t),
                            i().createElement(
                                Ei.Z,
                                null,
                                i().createElement(
                                    oi.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: n,
                                        onExit: s,
                                        onEnter: o,
                                        onEntering: c,
                                    },
                                    i().createElement('div', { className: Wi.base, ref: a }, _),
                                ),
                            )
                        );
                    },
                    Ui = (0, S.Pi)(({ compare: e = !1 }) => {
                        const t = N().model.tankSetup.get().selectedSetup;
                        return i().createElement(
                            r.Fragment,
                            null,
                            i().createElement(
                                Zi,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case T.zn:
                                            return i().createElement(mi, { compare: e });
                                        case T.g9:
                                            return i().createElement(Hi, null);
                                        case T.mH:
                                            return i().createElement(si, { compare: e });
                                        case T.G$:
                                            return i().createElement(ni, { compare: e });
                                        case T.YN:
                                            return i().createElement(Bs, null);
                                        default:
                                            return i().createElement(mi, { compare: e });
                                    }
                                })(),
                            ),
                            !e && i().createElement(ji, { isHidden: t === T.YN }),
                        );
                    }),
                    qi = (0, S.Pi)(() => {
                        const e = hr(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get().show;
                        return (
                            (0, r.useEffect)(() => (0, w.v)(a.viewRendered), [a]),
                            i().createElement(
                                x.Provider,
                                { value: e },
                                i().createElement(k.S, {
                                    onClose: a.close,
                                    content: i().createElement(Ui, { compare: !0 }),
                                    show: u,
                                    onAnimationDone: a.animationEnded,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    y().render(
                        i().createElement(gr, null, i().createElement(F, null, i().createElement(qi, null))),
                        document.getElementById('root'),
                    );
                });
            },
            8774: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => v });
                var u = a(6483),
                    n = a.n(u),
                    s = a(3457),
                    r = a(2106),
                    i = a(6373),
                    o = a(6179),
                    l = a.n(o);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    E = 'Action_image_e9',
                    b = 'Action_button_74',
                    g = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    A = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var C;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(C || (C = {}));
                const v = ({
                    parentId: e,
                    actionType: t,
                    imageSource: a = '',
                    show: u = !1,
                    disabled: v = !1,
                    disabledTooltipText: f,
                    tooltipBodyPath: D,
                    buttonType: F = r.L.primary,
                    isModernized: B,
                    isFreeToDemount: y,
                    level: w,
                    onClick: S,
                }) => {
                    const k = (0, o.useRef)(null),
                        T = (0, o.useRef)(C.Hidden),
                        x = (0, o.useRef)(!1),
                        N = (0, o.useState)(!u),
                        M = N[0],
                        L = N[1],
                        O = (0, o.useState)(!1),
                        I = O[0],
                        P = O[1],
                        $ = (0, o.useState)(),
                        H = $[0],
                        z = $[1],
                        j = (0, o.useCallback)(() => {
                            const e = T.current;
                            e === C.FadeIn
                                ? ((T.current = C.Hidden), L(!0))
                                : e === C.FadeOut && (T.current = C.Visible);
                        }, []);
                    (0, o.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', j),
                                () => {
                                    e.removeEventListener('animationend', j);
                                }
                            );
                    }, [j]),
                        (0, o.useEffect)(() => {
                            u !== x.current &&
                                (u ? ((T.current = C.FadeOut), L(!1)) : (T.current = C.FadeIn), (x.current = u));
                        }, [u]),
                        (0, o.useEffect)(() => {
                            if (I) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [I]),
                        (0, o.useEffect)(() => () => H && clearTimeout(H), [H]);
                    const W = (0, o.useCallback)(() => {
                            I || (P(!0), T.current === C.Visible && z(setTimeout(() => S(t), 200)));
                        }, [t, S, I]),
                        G = B ? A(t, w) : t,
                        V = (0, o.useMemo)(() => {
                            if (v) return { body: f, isEnabled: Boolean(f) };
                            const e = ((e, t, a, u) => (a ? 'demount_plus' : u ? A(e, t) : e))(t, w, y, B);
                            return {
                                header: g.title.$dyn(e),
                                body: h.includes(e) ? void 0 : g.description.$dyn(D || e),
                            };
                        }, [t, v, f, y, B, w, D]),
                        Z = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${a || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, a],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: n()(c, u ? d : _, M && m) },
                        l().createElement(
                            i.i,
                            V,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    s.u5,
                                    { onClick: W, type: F, mixClass: b, disabled: v },
                                    l().createElement('div', { className: E, style: Z }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => h });
                var u = a(6179),
                    n = a.n(u),
                    s = a(6483),
                    r = a.n(s),
                    i = a(3457),
                    o = a(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    _ = 'CtaButtons_substrate_2d',
                    d = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const b = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: a,
                    callback: s,
                    withToggle: l = !1,
                    toggle: b,
                    buttonProps: g,
                }) => {
                    const h = (0, u.useCallback)(() => {
                            s(t, b);
                        }, [t, s, b]),
                        A = (0, u.useMemo)(() => {
                            if (l) {
                                const t = r()(m, b && p);
                                return n().createElement(
                                    'div',
                                    { className: c },
                                    n().createElement('div', { className: _ }),
                                    b && n().createElement('div', { className: d }),
                                    n().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, b]);
                    return n().createElement(o.i, a, n().createElement(i.u5, E({}, g, { onClick: h }), A));
                };
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    n().createElement(
                        'div',
                        { className: l },
                        e.map((e) => n().createElement(b, g({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => _ });
                var u = a(6483),
                    n = a.n(u),
                    s = a(9916),
                    r = a(6179),
                    i = a.n(r),
                    o = a(2558),
                    l = a(8934),
                    c = a(8529);
                const _ = ({ children: e, when: t, canAccept: a }) => {
                    const u = (0, r.useCallback)((e, t) => {
                            (0, s.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
                            });
                        }, []),
                        _ = (0, r.useCallback)(
                            (e) => {
                                u(e, c.Z.base__enter);
                            },
                            [u],
                        ),
                        d = (0, r.useCallback)(
                            (e) => {
                                u(e, c.Z.base__exit);
                            },
                            [u],
                        );
                    return t
                        ? i().createElement(
                              o.Z,
                              null,
                              i().createElement(
                                  l.Z,
                                  { in: a, timeout: 500, onEnter: _, onExit: d, key: `index-${a}` },
                                  i().createElement('div', { className: n()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : i().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, a) => {
                'use strict';
                a.d(t, { my: () => g, sF: () => C });
                var u = a(6483),
                    n = a.n(u),
                    s = a(3403),
                    r = a(6179),
                    i = a.n(r),
                    o = a(1922),
                    l = a(3934),
                    c = a(5310),
                    _ = a(5851),
                    d = a(2306),
                    m = a(7198),
                    p = a(5178),
                    E = a(6826),
                    b = a(628);
                let g, h;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(g || (g = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(h || (h = {}));
                const A = R.strings.tank_setup.dealPanel,
                    C = (0, s.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: a = o.cJ.Medium,
                            panelType: u = h.Row,
                            priceLabel: s = A.toBePaid(),
                            autoRenewalLabel: g,
                            onAutoRenewalChanged: C,
                            onDealConfirmed: v,
                            onDealCancelled: f,
                        }) => {
                            const D = (0, p.t)(),
                                F = D.model,
                                B = (0, r.useRef)(null),
                                y = a === o.cJ.Tiny || a === o.cJ.Small,
                                w = u === h.Row,
                                S = Boolean(F.totalItemsInStorage.get()),
                                k = Boolean(F.price.get().length),
                                T = y && S && k;
                            return i().createElement(
                                d.h.Provider,
                                { value: D },
                                i().createElement(
                                    'div',
                                    {
                                        className: n()(
                                            b.Z.base,
                                            a && b.Z[`base__${a}`],
                                            e && b.Z.base__renewal,
                                            !w && b.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        i().createElement(
                                            'div',
                                            { className: n()(b.Z.renewal, !w && b.Z.renewal__dialog) },
                                            i().createElement(_.Y, { renewType: e, onValueChanged: C, label: g }),
                                        ),
                                    i().createElement(
                                        c.f,
                                        { when: w, canAccept: F.canAccept.get() },
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            S &&
                                                i().createElement(
                                                    'div',
                                                    { className: n()(b.Z.storage, a && b.Z[`storage__${a}`]) },
                                                    !y &&
                                                        i().createElement(
                                                            'div',
                                                            { className: b.Z.from },
                                                            A.fromStorage(),
                                                        ),
                                                    i().createElement(l.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: F.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            T && i().createElement('div', { className: b.Z.plus }),
                                            k &&
                                                i().createElement(
                                                    'div',
                                                    { className: n()(b.Z.totalPrice, T && b.Z.totalPrice__mixed) },
                                                    i().createElement(E.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: s,
                                                        isHideMessage: y && w,
                                                    }),
                                                ),
                                            t &&
                                                F.canAccept.get() &&
                                                i().createElement(
                                                    'div',
                                                    { className: b.Z.control },
                                                    i().createElement(m.Z, {
                                                        isDisabled: F.isDisabled.get(),
                                                        canCancel: F.canCancel.get(),
                                                        onCancel: () => f && f(),
                                                        onConfirm: () => v && v(),
                                                        confirmButtonRef: B,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => c });
                var u = a(2262),
                    n = a(6373),
                    s = a(3403),
                    r = a(6179),
                    i = a.n(r),
                    o = a(8175),
                    l = a(2306);
                const c = (0, s.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: a = o.my.General,
                    }) => {
                        const s = (0, l.o)(),
                            c = s.model,
                            _ = s.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, r.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            p = (0, r.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(a),
                                    u = a === o.my.General ? '' : e.body.$dyn(a);
                                return { header: String(t || e.header.general()), body: u ? String(u) : void 0 };
                            }, [a]);
                        return i().createElement(
                            n.i,
                            p,
                            i().createElement(u.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: e,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            1957: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => i });
                var u = a(3457),
                    n = a(6179),
                    s = a.n(n),
                    r = a(2527);
                const i = s().memo(({ applyBtnString: e, isDisabled: t, onConfirm: a, confirmButtonRef: n }) =>
                    s().createElement(
                        'div',
                        { ref: n, className: r.Z.base, id: 'deal-panel-confirm' },
                        s().createElement(
                            u.u5,
                            { size: u.qE.medium, disabled: t, onClick: () => a && a() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var u = a(3457),
                    n = a(6373),
                    s = a(7383),
                    r = a(6179),
                    i = a.n(r),
                    o = a(1957),
                    l = a(8099);
                const c = i().memo(
                    ({
                        applyBtnString: e = s.YR,
                        isDisabled: t,
                        canCancel: a,
                        onCancel: r,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = i().createElement(o.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return i().createElement(
                            'div',
                            { className: l.Z.base },
                            t
                                ? i().createElement(
                                      n.i,
                                      { body: d.tooltip.notEnough() },
                                      i().createElement('div', null, m),
                                  )
                                : m,
                            i().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                i().createElement(
                                    u.u5,
                                    {
                                        size: u.qE.medium,
                                        type: u.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !a,
                                        onClick: r,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, a) => {
                'use strict';
                a.d(t, { w: () => l });
                var u = a(3403),
                    n = a(6179),
                    s = a.n(n),
                    r = a(8175),
                    i = a(5178);
                const o = ['parentModelPath'];
                const l = (0, u.Pi)((e) => {
                    let t = e.parentModelPath,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                n = {},
                                s = Object.keys(e);
                            for (u = 0; u < s.length; u++) (a = s[u]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, o);
                    const u = `${t}.dealPanel`;
                    return s().createElement(i.k, { options: { context: u } }, s().createElement(r.sF, a));
                });
            },
            6826: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => c });
                var u = a(6483),
                    n = a.n(u),
                    s = a(6179),
                    r = a.n(s),
                    i = a(8401),
                    o = a(5178),
                    l = a(1523);
                const c = ({ parentId: e, isHideMessage: t, priceLabel: a }) => {
                    const u = (0, o.t)().model;
                    return r().createElement(
                        'div',
                        { id: `${e}-total-price`, className: l.Z.base },
                        r().createElement('div', { className: n()(l.Z.message, t && l.Z.message__hidden) }, a),
                        r().createElement(i.t, {
                            ignoreDiscount: !0,
                            bigSize: !0,
                            price: u.price.get(),
                            defPrice: u.defPrice.get(),
                            discount: u.discount.get(),
                            priceSeparator: r().createElement('div', { className: l.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => n, o: () => s });
                var u = a(6179);
                const n = (0, u.createContext)(null),
                    s = () => {
                        const e = (0, u.useContext)(n);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => n, t: () => s });
                const u = (0, a(3215).q)()(
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
                    n = u[0],
                    s = u[1];
            },
            8750: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => l, F: () => o });
                var u = a(6179),
                    n = a.n(u),
                    s = a(6483),
                    r = a.n(s);
                const i = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let o;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(o || (o = {}));
                const l = ({ type: e = o.SMALL, imageSource: t }) => {
                    const a = r()(i.base, e !== o.SMALL && i[`base__${e}`]),
                        s = (0, u.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return n().createElement('div', { className: a, style: s });
                };
            },
            1363: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var u = a(6483),
                    n = a.n(u),
                    s = a(3649),
                    r = a(6179),
                    i = a.n(r),
                    o = a(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: a,
                        classMix: u,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, s.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? i().createElement(
                                              'span',
                                              { key: t, className: n()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          i().createElement(
                                              'span',
                                              { key: t, className: c },
                                              i().createElement(o.n, {
                                                  mediaSize: a,
                                                  blocks: (0, o.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            E = (0, r.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? i().createElement(
                                                      'span',
                                                      { key: t, className: n()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : i().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return i().createElement(
                            'div',
                            { id: `${e}-details`, className: n()(l, u) },
                            m ? p : i().createElement(o.n, { mediaSize: a, blocks: E, linesCount: d }),
                        );
                    };
            },
            8401: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => d });
                var u = a(6483),
                    n = a.n(u),
                    s = a(7405),
                    r = a(329),
                    i = a(6179),
                    o = a.n(i);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: a = null,
                        showZero: u = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length);
                        return o().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (u || Boolean(e.value)) &&
                                    o().createElement(
                                        i.Fragment,
                                        { key: t },
                                        t > 0 && a,
                                        o().createElement(
                                            'div',
                                            { className: n()(c, p && _) },
                                            o().createElement(s.F, {
                                                key: t,
                                                isDiscount: p,
                                                size: d ? r.et.big : r.et.small,
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
            9152: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => m });
                var u = a(6483),
                    n = a.n(u),
                    s = a(8089),
                    r = a(8526),
                    i = a(5521),
                    o = a(7727),
                    l = a(6179),
                    c = a.n(l),
                    _ = a(1922);
                const d = {
                        base: 'SetupApp_base_7b',
                        base__shown: 'SetupApp_base__shown_a0',
                        base__compare: 'SetupApp_base__compare_9d',
                        base__setup: 'SetupApp_base__setup_92',
                        close: 'SetupApp_close_da',
                        close__hidden: 'SetupApp_close__hidden_5a',
                        close__small: 'SetupApp_close__small_61',
                        content: 'SetupApp_content_65',
                        content__compare: 'SetupApp_content__compare_6e',
                        content__invisible: 'SetupApp_content__invisible_9a',
                        content__shown: 'SetupApp_content__shown_dd',
                        'show-app': 'SetupApp_show-app_00',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_29',
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    m = ({ content: e, panel: t, button: a, show: u = !0, onAnimationDone: m, onClose: p }) => {
                        const E = (0, _.GS)(),
                            b = (0, l.useRef)(null),
                            g = (0, l.useRef)(!1);
                        (0, r.gd)(i.n.ESCAPE, p);
                        const h = !t,
                            A = (0, l.useCallback)(
                                (e) => {
                                    m && e.target === b.current && m();
                                },
                                [m],
                            );
                        return (
                            (0, l.useEffect)(() => {
                                u && (g.current = !0), g.current && (0, o.G)('cons_select_view');
                            }, [u]),
                            (0, l.useEffect)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', A),
                                        () => {
                                            e.removeEventListener('animationend', A);
                                        }
                                    );
                            }, [A]),
                            c().createElement(
                                'div',
                                { className: n()(d.base, u && d.base__shown, h ? d.base__compare : d.base__setup) },
                                h && c().createElement('div', { className: d.back }),
                                a,
                                c().createElement(
                                    'div',
                                    { className: n()(d.close, E && d[`close__${E}`], !u && d.close__hidden) },
                                    c().createElement(s.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: p,
                                    }),
                                ),
                                c().createElement(
                                    'div',
                                    {
                                        id: 'setup-content',
                                        ref: b,
                                        className: n()(
                                            d.content,
                                            h && d.content__compare,
                                            !u && !g.current && d.content__invisible,
                                            d['content__' + (u ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    e,
                                ),
                                t && c().createElement('div', { className: d.panel }, t),
                            )
                        );
                    };
            },
            5282: (e, t, a) => {
                'use strict';
                a.d(t, { n: () => p, D: () => m });
                var u = a(6483),
                    n = a.n(u),
                    s = a(1856),
                    r = a(3138),
                    i = a(9916),
                    o = a(6179),
                    l = a.n(o),
                    c = a(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af',
                    m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement('span', { key: t }, `${e} `)),
                    p = ({ blocks: e, linesCount: t = 2, mediaSize: a }) => {
                        const u = (0, o.useState)(e),
                            m = u[0],
                            p = u[1],
                            E = (0, o.useState)({ width: 0, height: 0 }),
                            b = E[0],
                            g = E[1],
                            h = (0, o.useRef)(null),
                            A = (0, o.useRef)({ shortened: !1 }),
                            C = (0, o.useCallback)(() => {
                                (0, i.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const a = Number(e.split('rem')[0]),
                                            u = h.current;
                                        if (u && isFinite(a)) {
                                            const e = r.O.view.remToPx(t * a);
                                            g({ height: e, width: u.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, o.useEffect)(() => {
                            if (e.length) return A.current.shortened && (A.current.shortened = !1), (0, s.v)(C);
                        }, [e, a, C]),
                            (0, o.useEffect)(() => {
                                if (b.height && !A.current.shortened) {
                                    const t = (0, c.M)(h, b.height);
                                    if (-1 !== t) {
                                        const a = e.slice(0, t);
                                        a.push(l().createElement('span', { key: t }, '...')),
                                            p(a),
                                            (A.current.shortened = !0);
                                    }
                                }
                            }, [e, b, a]);
                        const v = (0, o.useMemo)(() => (b.height ? { maxHeight: `${b.height}rem` } : {}), [b.height]);
                        return l().createElement('div', { ref: h, className: n()(_, b.height && d), style: v }, m);
                    };
            },
            6605: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => u, M: () => s });
                const u = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    n = (e, t) => e.getBoundingClientRect().top >= t,
                    s = (e, t) => {
                        const a = e.current;
                        if (a) {
                            const e = a.getBoundingClientRect(),
                                u = e.top + t,
                                s = Array.from(a.children);
                            if (s.length) {
                                const t = ((e, t) => {
                                    const a = e.length - 1;
                                    if (!n(e[a], t)) return -1;
                                    let u = 0,
                                        s = a - 1,
                                        r = !1;
                                    for (; s - u > 1; ) {
                                        const a = u + Math.floor(0.5 * (s - u + 1));
                                        (r = n(e[a], t)), r ? (s = a) : (u = a);
                                    }
                                    return r || n(e[s], t) ? u : s;
                                })(s, u);
                                if (t > 0) {
                                    const a = s[t].getBoundingClientRect();
                                    return e.right - a.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => y });
                var u = a(6483),
                    n = a.n(u),
                    s = a(8526),
                    r = a(5521),
                    i = a(7727),
                    o = a(6179),
                    l = a.n(o),
                    c = a(3978);
                const _ = {
                        base: 'EditableProgress_base_3a',
                        base__small: 'EditableProgress_base__small_e2',
                        glow: 'EditableProgress_glow_2d',
                        glow__left: 'EditableProgress_glow__left_8f',
                        glow__right: 'EditableProgress_glow__right_2d',
                        base__disabled: 'EditableProgress_base__disabled_44',
                        base__finished: 'EditableProgress_base__finished_32',
                        picker: 'EditableProgress_picker_41',
                        progressBar: 'EditableProgress_progressBar_9f',
                        line: 'EditableProgress_line_11',
                        pattern: 'EditableProgress_pattern_79',
                        delta: 'EditableProgress_delta_05',
                        gradient: 'EditableProgress_gradient_e7',
                    },
                    d = {
                        bgImageBase: '#ffffff19',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: { bgImageBase: '#ffb266', bgImageDisabled: '#ffffff33', bgImageFinished: '#c5ff51a6' },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: { color: 'rgba(249,249,249,0.17)', shadow: '0 0 1rem 0 #ffffff33' },
                    },
                    m = ({
                        size: e = 'normal',
                        value: t,
                        availableMaximum: a,
                        maximum: u,
                        picker: s,
                        allowSlide: r,
                        theme: i = d,
                    }) => {
                        const o = {
                            '--progress-base': i.bgImageBase,
                            '--progress-line-base': i.line.bgColorBase,
                            '--progress-line-disabled': i.line.bgColorDisabled,
                            '--progress-line-finished': i.line.bgColorFinished,
                            '--progress-pattern-base': i.pattern.bgImageBase,
                            '--progress-pattern-disabled': i.pattern.bgImageDisabled,
                            '--progress-pattern-finished': i.pattern.bgImageFinished,
                            '--progress-glow': `url('${i.glow}')`,
                            '--progress-glow-small': `url('${i.glowSmall}')`,
                            '--progress-delta-color': i.delta.color,
                            '--progress-delta-shadow': i.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: n()(_.progressBar, _.base, _[`base__${e}`]), style: o },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (a / u) * 100 + '%' } },
                                !r && l().createElement('div', { className: n()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / u) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                s && l().createElement('div', { className: _.picker }, s),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    E = 'SlideControl_image_61',
                    b = 'SlideControl_image__hover_eb',
                    g = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: a }) => {
                        const u = n()(E, a && b, t && g);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: u }),
                        );
                    },
                    A = 'Slider_base_2c',
                    C = 'Slider_slideArea_dd',
                    v = 'Slider_editor_5c',
                    f = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    F = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    B = ({ parentId: e, type: t, isEnabled: a, onClick: u }) => {
                        const s = n()(F.base, a && F.base__enabled, F[`base__${t}${a ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: s, onClick: u });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: a,
                        sliderMaximum: u,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: E = !0,
                        stepCount: b = 1,
                    }) => {
                        const g = (0, o.useRef)(null),
                            F = (0, o.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, o.useRef)({ currentValue: t, maximum: a, sliderMaximum: u, sliderMinimum: _ }),
                            w = (0, o.useState)(t),
                            S = w[0],
                            k = w[1],
                            T = (0, o.useState)(!1),
                            x = T[0],
                            N = T[1],
                            M = (0, o.useState)(!1),
                            L = M[0],
                            O = M[1],
                            R = (0, o.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        a = y.current.currentValue;
                                    if (b > 1) {
                                        t *= b;
                                        const e = a % b;
                                        t < 0 && e ? (a -= e) : (a += t - e);
                                    } else a += t;
                                    return a;
                                },
                                [b],
                            ),
                            I = (0, o.useCallback)(
                                (e, t) => {
                                    if (!g.current) return 0;
                                    const a = g.current.getBoundingClientRect(),
                                        u = y.current.maximum,
                                        n = a.width / u,
                                        s = e - a.left,
                                        r = Math.floor(n > 0 ? s / n : s);
                                    if (r > u) return u;
                                    if (r <= 0) return 0;
                                    if (b > 1) {
                                        let e = r - (r % b);
                                        const a = r - e;
                                        return (
                                            a > 0 && ((t && r > y.current.currentValue) || a > 0.5 * b) && (e += b), e
                                        );
                                    }
                                    return r;
                                },
                                [b],
                            ),
                            P = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.sliderMaximum,
                                        u = t.sliderMinimum;
                                    e < u ? (e = u) : e > a && (e = a),
                                        y.current.currentValue !== e && (k(e), (y.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            $ = t < u,
                            H = t > 0,
                            z = (0, o.useCallback)(() => {
                                if ($ && F.current.over) {
                                    const e = R(!0);
                                    P(e);
                                }
                            }, [$, R, P]),
                            j = (0, o.useCallback)(() => {
                                if (H && F.current.over) {
                                    const e = R(!1);
                                    P(e);
                                }
                            }, [H, R, P]),
                            W = (0, o.useCallback)(() => {
                                (F.current.down = !1), O(!1);
                            }, []),
                            G = (0, o.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && F.current.down) {
                                        F.current.move = !0;
                                        const t = I(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, I, P],
                            );
                        (0, s.gd)(r.n.ARROW_UP, z, !1, !0),
                            (0, s.gd)(r.n.ARROW_RIGHT, z, !1, !0),
                            (0, s.gd)(r.n.ARROW_DOWN, j, !1, !0),
                            (0, s.gd)(r.n.ARROW_LEFT, j, !1, !0),
                            (0, o.useEffect)(() => {
                                y.current.maximum = a;
                            }, [a]),
                            (0, o.useEffect)(() => {
                                if (L)
                                    return (
                                        document.addEventListener('mouseup', W),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            document.removeEventListener('mouseup', W),
                                                document.removeEventListener('mousemove', G);
                                        }
                                    );
                            }, [L, G, W]),
                            (0, o.useEffect)(() => {
                                (y.current.sliderMaximum = u), (y.current.sliderMinimum = _);
                            }, [u, _]),
                            (0, o.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]);
                        const V = (0, o.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((F.current.down = !0), O(!0));
                                },
                                [d],
                            ),
                            Z = (0, o.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = I(e.clientX, !F.current.move),
                                        a = y.current,
                                        u = a.currentValue,
                                        n = a.sliderMaximum,
                                        s = a.sliderMinimum;
                                    P(t), (0, c.u)(u, t, n, s), (F.current.move = !1);
                                },
                                [I, d, P],
                            ),
                            U = (0, o.useCallback)(() => {
                                (F.current.over = !0), N(!0), (0, i.G)('highlight');
                            }, []),
                            q = (0, o.useCallback)(() => {
                                (F.current.over = !1), N(!1);
                            }, []),
                            K = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.currentValue,
                                        u = t.sliderMaximum,
                                        n = t.sliderMinimum,
                                        s = R(e.deltaY > 0);
                                    P(s), (0, c.u)(a, s, u, n);
                                },
                                [R, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: g, onMouseEnter: U, onMouseLeave: q, onWheel: K, className: A },
                            E &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: n()(v, f) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: H, onClick: j }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: n()(v, D) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: $, onClick: z }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: Z, onMouseDown: V, className: C },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: a,
                                    value: S,
                                    availableMaximum: u,
                                    picker: l().createElement(h, { parentId: e, isActive: L, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => E });
                var u = a(9480),
                    n = a(6179),
                    s = a.n(n),
                    r = a(1922),
                    i = a(6483),
                    o = a.n(i),
                    l = a(3457),
                    c = a(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: a = !0,
                        isDynamic: u,
                        mediaSize: i,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const E = i !== r.cJ.None,
                            b = (0, n.useCallback)(() => {
                                d && a && m && m(p);
                            }, [p, d, a, m]),
                            g = (0, n.useMemo)(() => {
                                let a = '';
                                E && (a = (i === r.cJ.Large || i === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const u = `${a}${e}_${t ? 'on' : 'off'}`,
                                    n = R.images.gui.maps.icons.specialization.$dyn(u);
                                return n && { backgroundImage: `url(${n})` };
                            }, [e, t, i, E]),
                            h = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: u, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, u, d],
                            );
                        if (!g) return null;
                        const A = o()(
                                `specialization-${e}`,
                                _.base,
                                E && _[`base__${i}`],
                                a && _.base__setup,
                                t && _.base__correct,
                            ),
                            C = o()(_.icon, E && _[`icon__${i}`]),
                            v = E ? '' : _.specializationWrapper,
                            f = s().createElement(
                                'div',
                                { key: e, className: A },
                                s().createElement('div', { className: _.glow }),
                                s().createElement('div', { className: C, style: g }),
                            );
                        return s().createElement(
                            c.t,
                            { args: h },
                            d && a
                                ? s().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: b,
                                      },
                                      f,
                                  )
                                : s().createElement('div', { className: v }, f),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const E = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: a,
                    mediaSize: n = r.cJ.None,
                    activeSpecsMask: i,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? s().createElement(
                              'div',
                              { className: m, key: i },
                              u.UI(e, (e, u) =>
                                  s().createElement(
                                      d,
                                      p({ index: u, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: a,
                                          mediaSize: n,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            3934: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => d });
                var u = a(6179),
                    n = a.n(u),
                    s = a(6483),
                    r = a.n(s);
                const i = 'Storage_base_53',
                    o = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const a = r()(i, e && o),
                            u = r()(c, 0 === t && _);
                        return n().createElement(
                            'div',
                            { className: a },
                            n().createElement('div', { className: l }),
                            n().createElement('div', { className: u }, t),
                        );
                    };
            },
            5096: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var u = a(6483),
                    n = a.n(u),
                    s = a(3403),
                    r = a(6179),
                    i = a.n(r),
                    o = a(1922),
                    l = a(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, s.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const a = (0, o.GS)(),
                            u = (0, l.t)().model.shellsSetup.get(),
                            s = u.installedCount,
                            r = u.maxCount,
                            _ = s === r,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return i().createElement(
                            'div',
                            { className: n()(c.base, !_ && c.base__incomplete) },
                            !t && i().createElement('div', { className: c.tip }, m),
                            e
                                ? `${s}/${r}`
                                : i().createElement(
                                      'div',
                                      {
                                          className: n()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${a}`],
                                          ),
                                      },
                                      `${s}/${r}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => n, u: () => s });
                var u = a(7727);
                const n = (e, t) => {
                        const a = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, u.G)(a + '_' + e) : (0, u.G)(a);
                    },
                    s = (e, t, a, n) => {
                        t > a ||
                            t < n ||
                            (t > e ? (0, u.G)('cons_ammo_roll_plus') : t < e && (0, u.G)('cons_ammo_roll_minus'));
                    };
            },
            7383: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $4: () => _,
                    G$: () => r,
                    S: () => d,
                    YN: () => i,
                    YR: () => o,
                    g9: () => n,
                    k4: () => l,
                    mH: () => s,
                    pi: () => m,
                    qZ: () => c,
                    zn: () => u,
                });
                const u = 'optDevices',
                    n = 'shells',
                    s = 'consumables',
                    r = 'battleBoosters',
                    i = 'battleAbilities',
                    o = 'apply',
                    l = 'applyVehicle',
                    c = 'applyType',
                    _ = 'equipCoinInfo',
                    d = 'simple',
                    m = 'modernized';
            },
            6880: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            4382: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
            8460: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
            7476: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
                };
            },
            1960: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'Layout_base_81',
                    base__small: 'Layout_base__small_cb',
                    base__medium: 'Layout_base__medium_df',
                    base__large: 'Layout_base__large_f6',
                    base__huge: 'Layout_base__huge_d2',
                    header: 'Layout_header_46',
                    base__compare: 'Layout_base__compare_56',
                    header__small: 'Layout_header__small_cb',
                    header__tiny: 'Layout_header__tiny_4b',
                    content: 'Layout_content_79',
                    main: 'Layout_main_df',
                    inner: 'Layout_inner_3e',
                    footer: 'Layout_footer_f4',
                };
            },
            8529: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
            2527: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => u });
                const u = {
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, u] = deferred[o], s = !0, r = 0; r < t.length; r++)
                        (!1 & u || n >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((s = !1), u < n && (n = u));
                    if (s) {
                        deferred.splice(o--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > u; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, a, u];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 70),
        (() => {
            var e = {
                70: 0,
                26: 0,
                301: 0,
                826: 0,
                130: 0,
                418: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                723: 0,
                653: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        n,
                        [s, r, i] = a,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (u in r) __webpack_require__.o(r, u) && (__webpack_require__.m[u] = r[u]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); o < s.length; o++)
                        (n = s[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(2135));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
