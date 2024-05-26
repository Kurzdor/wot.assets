(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7727),
                    i = n(6179),
                    r = n.n(i),
                    o = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: b,
                    onMouseDown: g,
                    onMouseUp: E,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, i.useRef)(null),
                        A = (0, i.useState)(n),
                        C = A[0],
                        D = A[1],
                        S = (0, i.useState)(!1),
                        F = S[0],
                        B = S[1],
                        y = (0, i.useState)(!1),
                        w = y[0],
                        k = y[1],
                        x = (0, i.useCallback)(() => {
                            c || (f.current && (f.current.focus(), D(!0)));
                        }, [c]),
                        T = (0, i.useCallback)(
                            (e) => {
                                C && null !== f.current && !f.current.contains(e.target) && D(!1);
                            },
                            [C],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                c || (v && v(e));
                            },
                            [c, v],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                c || (null !== d && (0, u.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (E && E(e), B(!1));
                            },
                            [c, E],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, u.G)(m), g && g(e), n && x(), B(!0));
                            },
                            [c, m, g, x, n],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e), B(!1));
                            },
                            [c, h],
                        ),
                        $ = s()(
                            o.Z.base,
                            o.Z[`base__${a}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: C,
                                [o.Z.base__highlightActive]: F,
                                [o.Z.base__firstHover]: w,
                            },
                            _,
                        ),
                        H = s()(o.Z.state, o.Z.state__default);
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
                            D(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: f,
                                className: $,
                                onMouseEnter: N,
                                onMouseMove: O,
                                onMouseUp: L,
                                onMouseDown: M,
                                onMouseLeave: P,
                                onClick: I,
                            },
                            a !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: o.Z.back }),
                                    r().createElement('span', { className: o.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: H },
                                r().createElement('span', { className: o.Z.stateDisabled }),
                                r().createElement('span', { className: o.Z.stateHighlightHover }),
                                r().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            r().createElement(
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
            2106: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { L: () => a, q: () => s }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(s || (s = {}));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u),
                    r = n(7727),
                    o = n(1641),
                    l = n(8844),
                    c = n(4382);
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        n = e.isChecked,
                        u = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        g = void 0 !== b && b,
                        E = e.size,
                        h = void 0 === E ? l.yB.medium : E,
                        v = e.type,
                        f = void 0 === v ? l.Rh.primary : v,
                        A = e.soundHover,
                        C = void 0 === A ? 'highlight' : A,
                        D = e.soundClick,
                        S = void 0 === D ? 'play' : D,
                        F = e.onMouseEnter,
                        B = e.onMouseLeave,
                        y = e.onMouseUp,
                        w = e.onMouseDown,
                        k = e.onClick,
                        x = e.onChange,
                        T = e.onFocus,
                        I = e.onBlur,
                        N = e.text,
                        R = e.contentStyles,
                        O = e.children,
                        L = e.alignment,
                        M = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, _);
                    const P = (0, a.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        j = (0, a.useState)(!1),
                        z = (j[0], j[1]),
                        G = (0, a.useCallback)(
                            (e) => {
                                p || (x && x(), k && k(e));
                            },
                            [p, x, k],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === o.t.LEFT;
                                p || (t && H(!0), t && w && w(e), S && (0, r.G)(S));
                            },
                            [p, w, S],
                        ),
                        Z = (0, a.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                p || (F && F(e), C && (0, r.G)(C));
                            },
                            [p, F, C],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                p || (H(!1), B && B(e));
                            },
                            [p, B],
                        ),
                        q = (0, a.useCallback)(
                            (e) => {
                                p || (z(!0), T && T(e));
                            },
                            [p, T],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                p || (z(!1), I && I(e));
                            },
                            [p, I],
                        ),
                        K = s().createElement(
                            'div',
                            { className: c.Z.label },
                            s().createElement(
                                'div',
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: R },
                                N || O,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: i()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: u,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: L === l.N3.Center,
                                    [c.Z.base__bottom]: L === l.N3.Bottom,
                                }),
                                onClick: G,
                                onMouseEnter: V,
                                onMouseLeave: U,
                                onMouseDown: W,
                                onMouseUp: Z,
                                onFocus: q,
                                onBlur: X,
                            },
                            M,
                        ),
                        s().createElement(
                            'div',
                            { className: c.Z.input },
                            s().createElement('div', { className: c.Z.alertOverlay }),
                            s().createElement('div', { className: c.Z.inputHoverOverlay }),
                            s().createElement('div', { className: c.Z.highlight }),
                        ),
                        s().createElement('div', { className: c.Z.checkmark }),
                        ((N || O) && K) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                'use strict';
                let a, s, u;
                n.d(t, { N3: () => u, Rh: () => s, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(u || (u = {}));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => c });
                var a = n(6483),
                    s = n.n(a),
                    u = n(2372),
                    i = n(6179),
                    r = n.n(i),
                    o = n(8460),
                    l = n(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: a,
                        value: i,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: b,
                    }) =>
                        r().createElement(
                            'span',
                            { className: s()(o.Z.base, o.Z[`base__${n}`], p) },
                            r().createElement(
                                'span',
                                {
                                    className: s()(
                                        o.Z.value,
                                        o.Z[`value__${a}`],
                                        !d && o.Z.value__notEnough,
                                        null == b ? void 0 : b.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                r().createElement(u.A, { value: i, format: a === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', {
                                className: s()(o.Z.icon, o.Z[`icon__${a}-${n}`], null == b ? void 0 : b.icon),
                            }),
                            e &&
                                r().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            t && o.Z.stock__interactive,
                                            null == b ? void 0 : b.stock,
                                        ),
                                    },
                                    r().createElement('span', {
                                        className: o.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, n) => {
                'use strict';
                let a, s, u;
                n.d(t, { V2: () => s, et: () => a, we: () => u }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(u || (u = {}));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => i });
                var a = n(6179),
                    s = n.n(a),
                    u = n(9916);
                class i extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = u.B3.GOLD;
                        else e = u.B3.INTEGRAL;
                        const t = u.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    s = n(6179),
                    u = n(1043),
                    i = n(5262);
                const r = a.O.client.getSize('rem'),
                    o = r.width,
                    l = r.height,
                    c = Object.assign({ width: o, height: l }, (0, i.T)(o, l, u.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    s = n(6536),
                    u = n(6179),
                    i = n.n(u),
                    r = n(3495),
                    o = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, u.useContext)(r.Y),
                        n = (0, u.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, u.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                s = a.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: s }, (0, l.T)(n, s, o.j)));
                        }, []),
                        m = (0, u.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, s.Z)(() => {
                        a.O.client.events.on('clientResized', d), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, u.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', d),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const p = (0, u.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(r.Y.Provider, { value: p }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    s = n(7382),
                    u = n(3495);
                const i = ['children'];
                const r = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, i);
                    const r = (0, a.useContext)(u.Y),
                        o = r.extraLarge,
                        l = r.large,
                        c = r.medium,
                        _ = r.small,
                        d = r.extraSmall,
                        m = r.extraLargeWidth,
                        p = r.largeWidth,
                        b = r.mediumWidth,
                        g = r.smallWidth,
                        E = r.extraSmallWidth,
                        h = r.extraLargeHeight,
                        v = r.largeHeight,
                        f = r.mediumHeight,
                        A = r.smallHeight,
                        C = r.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: f, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, s.H)(t, n, D);
                        if (n.largeWidth && p) return (0, s.H)(t, n, D);
                        if (n.mediumWidth && b) return (0, s.H)(t, n, D);
                        if (n.smallWidth && g) return (0, s.H)(t, n, D);
                        if (n.extraSmallWidth && E) return (0, s.H)(t, n, D);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                r.defaultProps = {
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
                (0, a.memo)(r);
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => s.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    s = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function s(e, t, n) {
                    const a = (function (e, t) {
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
                        })(e, n),
                        s = (function (e, t) {
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
                        })(t, n),
                        u = Math.min(a, s);
                    return {
                        extraLarge: u === n.extraLarge.weight,
                        large: u === n.large.weight,
                        medium: u === n.medium.weight,
                        small: u === n.small.weight,
                        extraSmall: u === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: s === n.extraLarge.weight,
                        largeHeight: s === n.large.weight,
                        mediumHeight: s === n.medium.weight,
                        smallHeight: s === n.small.weight,
                        extraSmallHeight: s === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => s, u: () => a }),
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
                    })(a || (a = {}));
            },
            8089: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u),
                    r = n(7727),
                    o = n(7476);
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class _ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, r.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, r.G)(this.props.soundClick);
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
                            n = e.onClick,
                            a = e.goto,
                            u = e.side,
                            r = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            b = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(e, l)),
                            E = i()(o.Z.base, o.Z[`base__${r}`], o.Z[`base__${u}`], null == _ ? void 0 : _.base),
                            h = i()(o.Z.icon, o.Z[`icon__${r}`], o.Z[`icon__${u}`], null == _ ? void 0 : _.icon),
                            v = i()(o.Z.glow, null == _ ? void 0 : _.glow),
                            f = i()(o.Z.caption, o.Z[`caption__${r}`], null == _ ? void 0 : _.caption),
                            A = i()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return s().createElement(
                            'div',
                            c(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(b),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                g,
                            ),
                            'info' !== r && s().createElement('div', { className: o.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: v })),
                            s().createElement('div', { className: f }, t),
                            a && s().createElement('div', { className: A }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => o });
                var a = n(6179),
                    s = n.n(a),
                    u = n(2056);
                const i = ['children'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, i);
                    return s().createElement(
                        u.u,
                        r(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    s = n(6179),
                    u = n.n(s);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function r() {
                    return (
                        (r =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        r.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, i);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return u().createElement(
                            a.u,
                            r(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var b;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    s = n(9916),
                    u = n(6179);
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
                function r(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const o = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            s = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            b = e.ignoreMouseClick,
                            g = void 0 !== b && b,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            D = e.onShow,
                            S = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, i);
                        const B = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, u.useMemo)(() => C || (0, a.F)().resId, [C]),
                            w = (0, u.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(n, h, { isMouseEvent: !0, on: !0, arguments: r(s) }, y),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [n, h, s, y, D]),
                            k = (0, u.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(n, h, { on: !1 }, y),
                                        B.current.isVisible && S && S(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, h, y, S]),
                            x = (0, u.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, u.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return f
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
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
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => r });
                var a = n(3138);
                function s(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function r({ initializer: e = !0, rootId: t = 0, getRoot: n = i, context: u = 'model' } = {}) {
                    const r = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = r.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            s = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, s);
                    };
                    return {
                        subscribe: (n, s) => {
                            const i = 'string' == typeof s ? `${u}.${s}` : u,
                                o = a.O.view.addModelObserver(i, t, !0);
                            return r.set(o, n), e && n(l(s)), o;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = s(r.keys()); !(e = n()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => o });
                var a = n(4598),
                    s = n(9174),
                    u = n(6179),
                    i = n.n(u),
                    r = n(8246);
                const o = () => (e, t) => {
                    const n = (0, u.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, u.useRef)([]),
                                m = (n, u, i) => {
                                    var o;
                                    const l = r.U(u),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const u = null != t ? t : _(e),
                                                        i = s.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const u = null != t ? t : _(e),
                                                        i = s.LO.box(u, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = _(t);
                                                    if (Array.isArray(e)) {
                                                        const u = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            u[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                    {
                                                        const u = e,
                                                            i = Object.entries(u),
                                                            r = i.reduce(
                                                                (e, [t, n]) => ((e[n] = s.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        i.forEach(([t, n]) => {
                                                                            r[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        b = { mode: n, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === n && i ? i.controls(b) : t(b),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                p = (0, u.useRef)(!1),
                                b = (0, u.useState)(o),
                                g = b[0],
                                E = b[1],
                                h = (0, u.useState)(() => m(o, l, _)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, u.useEffect)(() => {
                                    p.current ? f(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, u.useEffect)(() => {
                                    E(o);
                                }, [o]),
                                (0, u.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                i().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, u.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => o, on: () => r, onResize: () => u, onScaleUpdated: () => i });
                var a = n(2472),
                    s = n(1176);
                const u = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    r = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, s.R)(!1);
                    }
                    const u = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const u = `mouse${t}`,
                                        i = l[t]((e) => n([e, 'outside']));
                                    function r(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(u, r),
                                        a(),
                                        () => {
                                            s &&
                                                (i(),
                                                window.removeEventListener(u, r),
                                                (e.listeners -= 1),
                                                a(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, u, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => u,
                        getSize: () => s,
                        graphicsQuality: () => i,
                    });
                var a = n(527);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => s });
                var a = n(5959);
                const s = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function s(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => s, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(2472);
                const s = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => r,
                        children: () => a,
                        displayStatus: () => s.W,
                        displayStatusIs: () => F,
                        events: () => u.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var a = n(3722),
                    s = n(6112),
                    u = n(6538),
                    i = n(8566);
                function r(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : u.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const s = 2,
                    u = 16,
                    i = 32,
                    r = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, a);
                            return void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((s = u),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? s : i);
                        },
                        minimize() {
                            o(r);
                        },
                        move(e) {
                            o(u, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(6179);
                const s = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            8526: (e, t, n) => {
                'use strict';
                n.d(t, { gd: () => r });
                var a = n(3138),
                    s = n(5521),
                    u = (n(9916), n(6179));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = s.n.NONE, t = i, n = !1, r = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', u, n),
                                () => {
                                    window.removeEventListener('keydown', u, n);
                                }
                            );
                        function u(s) {
                            if (s.keyCode === e) {
                                if (!r && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(s), n && s.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(s || (s = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                n.d(t, {
                    G: () => o,
                    MH: () => u,
                    U2: () => s,
                    UI: () => r,
                    dF: () => c,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const u = s;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) {
                        if (t(u(e, n), n, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const u = null == (a = e[s]) ? void 0 : a.value;
                        t(u, s, e) && n.push(u);
                    }
                    return n;
                }
                function c(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = i(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function _(e, t) {
                    return (function (e, t, n) {
                        const a = [];
                        for (let s = 0; s < e.length; s++) {
                            const i = u(e, s);
                            t(i, s, e) && a.push(n(i, s, e));
                        }
                        return a;
                    })(e, a.C, t);
                }
                function d(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, u(e, n), n, e);
                    }
                    return a;
                }
            },
            1641: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { t: () => a }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(a || (a = {}));
            },
            8968: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                n.d(t, { C: () => a });
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { $: () => s, G: () => a });
                const s = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, {
                    BN: () => r,
                    Eg: () => c,
                    Uw: () => E,
                    WU: () => u,
                    e: () => o,
                    uF: () => i,
                    v2: () => s,
                    z4: () => l,
                });
                var a = n(1281);
                let s;
                function u(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(s || (s = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    m = (e, t, n = s.left) => e.split(t).reduce(n === s.left ? _ : d, []),
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
                    b = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = s.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(n)) return p(e);
                        if ('ja' === n) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = s.left) => {
                            let n = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                u = l(e);
                            return m(u, /( )/, t).forEach((e) => (n = n.concat(m(e, a, s.left)))), n;
                        })(e, t);
                    },
                    E = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : g(e, t)));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(3138);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const u = a.O.view.addModelObserver(e, n, s);
                        return (
                            u > 0
                                ? ((this._callbacks[u] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(u) : (this._views[n] = [u])))
                                : console.error("Can't add callback for model:", e),
                            u
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const u = s;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => u.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => i.Z5,
                    B0: () => r,
                    c9: () => v,
                    ry: () => E,
                    Eu: () => h,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const s = a;
                var u = n(1358);
                var i = n(8613);
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = n(5521),
                    m = n(3138);
                const p = ['args'];
                function b(e, t, n, a, s, u, i) {
                    try {
                        var r = e[u](i),
                            o = r.value;
                    } catch (e) {
                        return void n(e);
                    }
                    r.done ? t(o) : Promise.resolve(o).then(a, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                    return new Promise(function (a, s) {
                                        var u = e.apply(t, n);
                                        function i(e) {
                                            b(u, a, s, i, r, 'next', e);
                                        }
                                        function r(e) {
                                            b(u, a, s, i, r, 'throw', e);
                                        }
                                        i(void 0);
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
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        u = Object.keys(e);
                                    for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    f = () => v(r.CLOSE),
                    A = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var C = n(7572);
                const D = s.instance,
                    S = {
                        DataTracker: u.Z,
                        ViewModel: C.Z,
                        ViewEventType: r,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), u) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            v(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: u,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => A(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            A(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const s = Object.prototype.toString.call(t[a]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < s.length; t++) n[a].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => u, Z5: () => a, cy: () => s });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    u = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            3521: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { WL: () => r, aR: () => o, jZ: () => u, yG: () => i });
                const u = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var s, u = a(t); !(s = u()).done; ) {
                            const t = s.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    i = (e, t, n, a) => {
                        const s = n + t,
                            u = a - t;
                        return e < s ? s : e > u ? u : e;
                    },
                    r = (e, t, n) => {
                        let s = '',
                            u = 8e3;
                        for (var i, r = a(n); !(i = r()).done; ) {
                            const e = i.value,
                                n = Math.abs(e.centerX - t);
                            n < u && ((s = e.id), (u = n));
                        }
                        return s;
                    },
                    o = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
            },
            1820: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { m: () => s }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(s || (s = {}));
            },
            4301: (e, t, n) => {
                'use strict';
                n.d(t, { iN: () => u, j2: () => s, qG: () => i, s$: () => r });
                var a = n(4231);
                const s = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    u = (e) => e === a.w.Battle || e === a.w.Prebattle,
                    i = (e) => !u(e),
                    r = (e) => u(e) || e === a.w.Respawn;
            },
            7626: (e, t, n) => {
                'use strict';
                n.d(t, { YR: () => o, UW: () => c, Tu: () => l });
                var a = n(6179),
                    s = n(9152),
                    u = n(7727),
                    i = n(3521),
                    r = n(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const n = o(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: [s.y, ...a] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: s, syncInitiator: o }) => {
                        const l = ((e, t, n) => {
                                const s = (0, a.useRef)([]),
                                    o = (0, a.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, a.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, a.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, a.useCallback)((e, t) => {
                                        if (s.current) {
                                            const n = (0, i.WL)(e, t, s.current);
                                            n !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = n),
                                                _({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    p = (0, a.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const n = o.current,
                                                a = (0, i.WL)(e, t, s.current);
                                            (n.dropId = a),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                a !== e && (0, u.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    b = (0, a.useCallback)(() => {
                                        const e = o.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, a.useCallback)(
                                        (e) => {
                                            const t = o.current.dropId;
                                            t && t !== e ? n(e, t) : b();
                                        },
                                        [b, n],
                                    ),
                                    E = (0, a.useCallback)((e, t) => {
                                        const n = s.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    h = (0, a.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case r.m.Ready:
                                                    return E(n, a);
                                                case r.m.DragStart:
                                                    return d(n);
                                                case r.m.Drag:
                                                    return m(n, a);
                                                case r.m.Drop:
                                                    return p(n, a);
                                                case r.m.DropExit:
                                                    return g(n);
                                                default:
                                                    return;
                                            }
                                        },
                                        [d, m, p, g, E],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const n = new Array(e).fill(null);
                                            s.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: h,
                                        getForceCenterX: (0, a.useCallback)((e) => {
                                            const t = o.current,
                                                n = t.dragId,
                                                a = t.dropId;
                                            return e === n
                                                ? (0, i.aR)(a, s.current)
                                                : e === a
                                                  ? (0, i.aR)(n, s.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, n),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            p = (0, a.useCallback)(
                                (e, t) => {
                                    if (s)
                                        switch (e) {
                                            case r.m.DragStart:
                                            case r.m.Drag:
                                                s(!0);
                                                break;
                                            default:
                                                s(!1);
                                        }
                                    _(e, t);
                                },
                                [_, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, a.useEffect)(() => {
                                m();
                            }, [o, m]),
                            { handleGrabberAction: p, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { w: () => a }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(a || (a = {}));
            },
            3220: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c, t: () => _ });
                var a = n(3215),
                    s = n(9480),
                    u = n(3946),
                    i = n(4598),
                    r = n(4301),
                    o = n(7626);
                const l = (0, a.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    state: e.object('state'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, u.Om)(() => t.sectionGroups.get().length),
                                a = (0, u.Om)(
                                    (e) => {
                                        const n = s.U2(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: s.UI(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: s.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: s.UI(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: i.jv },
                                ),
                                l = (0, u.Om)(() => s.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, u.Om)((e) => a(e).sections.length),
                                _ = (0, u.Om)(
                                    (e, t) => {
                                        const n = a(e),
                                            u = s.U2(n.sections, t);
                                        if (!u) throw Error(`No ammunition section found with index: ${t}`);
                                        return u;
                                    },
                                    { equals: i.jv },
                                ),
                                d = (0, u.Om)((e, t) => _(e, t).slots.length),
                                m = (0, u.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.hX(n, (e) => Boolean(e) && !(0, r.j2)(e)).length;
                                }),
                                p = (0, u.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.G(n, (e) => e.intCD > 0);
                                }),
                                b = (0, u.Om)(
                                    (e, t, n) => {
                                        const a = _(e, t),
                                            u = s.U2(a.slots, n);
                                        if (!u) throw Error(`No ammunition slot found with index: ${n}`);
                                        return u;
                                    },
                                    { equals: i.jv },
                                ),
                                g = (0, u.Om)(
                                    (e) => {
                                        const t = a(e).sections;
                                        return s.v(t, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: i.jv },
                                ),
                                E = (0, u.Om)(
                                    (e, t, n) => {
                                        const a = b(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: s.UI(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: i.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: g },
                                    slots: { length: d, filteredLength: m, slot: b, existFilled: p },
                                    specializations: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            2288: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => ss,
                        Bar: () => ts,
                        DefaultScroll: () => as,
                        Direction: () => $a,
                        defaultSettings: () => Ha,
                        useHorizontalScrollApi: () => za,
                    });
                var s = {};
                n.r(s), n.d(s, { Area: () => Cs, Bar: () => vs, Default: () => As, useVerticalScrollApi: () => us });
                var u = n(3138),
                    i = n(7739),
                    r = n(6179),
                    o = n.n(r),
                    l = n(6483),
                    c = n.n(l),
                    _ = n(926),
                    d = n.n(_),
                    m = n(1043);
                let p, b, g;
                !(function (e) {
                    (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = m.j.small.width)] = 'Small'),
                        (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                        (e[(e.Large = m.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.width)] = 'Small'),
                            (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                            (e[(e.Large = m.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.height)] = 'Small'),
                            (e[(e.Medium = m.j.medium.height)] = 'Medium'),
                            (e[(e.Large = m.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.height)] = 'ExtraLarge');
                    })(g || (g = {}));
                const E = () => {
                        const e = (0, r.useContext)(i.YN),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return g.ExtraLarge;
                                    case e.largeHeight:
                                        return g.Large;
                                    case e.mediumHeight:
                                        return g.Medium;
                                    case e.smallHeight:
                                        return g.Small;
                                    case e.extraSmallHeight:
                                        return g.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), g.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: s, mediaHeight: u, remScreenWidth: t, remScreenHeight: n };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const f = {
                        [b.ExtraSmall]: '',
                        [b.Small]: d().SMALL_WIDTH,
                        [b.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [b.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [g.ExtraSmall]: '',
                        [g.Small]: d().SMALL_HEIGHT,
                        [g.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [g.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [p.ExtraSmall]: '',
                        [p.Small]: d().SMALL,
                        [p.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [p.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [p.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, h);
                        const s = E(),
                            u = s.mediaWidth,
                            i = s.mediaHeight,
                            r = s.mediaSize;
                        return o().createElement('div', v({ className: c()(n, f[u], A[i], C[r]) }, a), t);
                    },
                    S = ['children'];
                const F = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, S);
                    return o().createElement(i.ZN, null, o().createElement(D, n, t));
                };
                var B = n(493),
                    y = n.n(B),
                    w = n(7383),
                    k = n(1856),
                    x = n(3403);
                const T = [];
                function I(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), T)
                    );
                }
                const N = (0, r.createContext)(null);
                var O = n(5262),
                    L = n(3649);
                function M(e, t, n) {
                    const a = (0, r.useContext)(i.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in O.u);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, L.e)(t))(n, e[0])]),
                            );
                            return (e[n] = c()(t[n], ...a)), e;
                        }, {})
                    );
                }
                const P = (e, t = []) => {
                        const n = (0, r.useRef)(),
                            a = (0, r.useCallback)((...t) => {
                                n.current && n.current(), (n.current = e(...t));
                            }, t);
                        return (
                            (0, r.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    $ = (e, t, n, a = []) => {
                        const s = P(
                            () =>
                                (0, k.v)(() =>
                                    (0, k.v)(() => {
                                        if (e.current) {
                                            const n = e.current.getBoundingClientRect(),
                                                a = {
                                                    width: u.O.view.pxToRem(n.width),
                                                    height: u.O.view.pxToRem(n.height),
                                                    offsetX: u.O.view.pxToRem(n.left),
                                                    offsetY: u.O.view.pxToRem(n.top),
                                                };
                                            window.tutorialApi.updateComponents(), t(a);
                                        }
                                    }),
                                ),
                            [t, e],
                        );
                        return (
                            (0, r.useEffect)(() => {
                                s();
                            }, [s, ...a]),
                            (0, r.useEffect)(() => {
                                if (n)
                                    return (
                                        engine.on('clientResized', s),
                                        () => {
                                            engine.off('clientResized', s);
                                        }
                                    );
                            }, [n, s]),
                            s
                        );
                    };
                var H = n(3220);
                const j = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    z = 'Border_base_f9',
                    G = 'Border_border_83',
                    W = 'Border_wrapper_17',
                    Z = 'Border_active_e8',
                    V = (0, r.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, r.useRef)(null),
                            s = (0, r.useRef)(!1);
                        (0, r.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const u = (0, r.useCallback)(() => {
                            s.current && n(), (s.current = !1);
                        }, [n]);
                        (0, r.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', u),
                                () => {
                                    e && e.removeEventListener('transitionend', u);
                                }
                            );
                        }, [u]);
                        const i = (0, r.useMemo)(() => ({ left: e }), [e]),
                            l = (0, r.useMemo)(() => ({ width: t }), [t]);
                        return o().createElement(
                            'div',
                            { className: z },
                            o().createElement(
                                'div',
                                { ref: a, className: G, style: i },
                                o().createElement(
                                    'div',
                                    { className: W },
                                    o().createElement('div', { className: Z, style: l }),
                                ),
                            ),
                        );
                    }),
                    U = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    };
                var q = n(6373),
                    X = n(9344),
                    K = n(2558),
                    Y = n(8934);
                const J = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Q = 'up',
                    ee = 'down',
                    te = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, r.useRef)(1 - t),
                            u = (0, r.useMemo)(() => {
                                const e = ((n = t), (u = s.current), n === u ? '' : n > u ? ee : Q);
                                var n, u;
                                const i = e && (0, L.e)(e);
                                return a ? {} : { enter: J[`base__enter${i}`], exit: J[`base__exit${i}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            o().createElement(
                                K.Z,
                                { className: J.base },
                                o().createElement(
                                    Y.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: u,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var ne = n(4301);
                const ae = {
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
                    se = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const ie = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        u = e.hide,
                        i = e.maximumNumber,
                        r = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, se);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > i,
                        p = c()(
                            ae.base,
                            ae[`base__${t}`],
                            s && ae.base__animated,
                            u && ae.base__hidden,
                            !_ && ae.base__pattern,
                            a && ae.base__empty,
                            r,
                        );
                    return o().createElement(
                        'div',
                        ue({ className: p }, l),
                        o().createElement('div', { className: ae.bg }),
                        o().createElement('div', { className: ae.pattern }),
                        o().createElement(
                            'div',
                            { className: c()(ae.value, d && ae.value__text) },
                            m ? i : _,
                            m && o().createElement('span', { className: ae.plus }, '+'),
                        ),
                    );
                };
                ie.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const re = 'FormatText_base_d0',
                    oe = ({
                        binding: e,
                        text: t = '',
                        classMix: n,
                        alignment: a = L.v2.left,
                        formatWithBrackets: s,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const u = s && e ? (0, L.WU)(t, e) : t;
                        return o().createElement(
                            r.Fragment,
                            null,
                            u.split('\n').map((t, s) =>
                                o().createElement(
                                    'div',
                                    { className: c()(re, n), key: `${t}-${s}` },
                                    (0, L.Uw)(t, a, e).map((e, t) =>
                                        o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                var le = n(7902);
                const ce = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var _e = n(6536),
                    de = n(9916);
                const me = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    pe = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    be = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = ce(`${e}.${n}`, window);
                                return me(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    ge = (e) => {
                        const t = ((e) => {
                                const t = (0, le.F)(),
                                    n = t.caller,
                                    a = t.resId,
                                    s = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: s, modelPath: pe(s, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const s = ce(pe(n, `${t}.${a}`), window);
                                    return me(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Ee = de.Sw.instance;
                let he;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(he || (he = {}));
                const ve = (e = 'model', t = he.Deep) => {
                        const n = (0, r.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, r.useMemo)(() => (0, le.F)(), []),
                            u = s.caller,
                            i = s.resId,
                            o = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== u ? `subViews.${u}.${e}` : e),
                                [u, e],
                            ),
                            l = (0, r.useState)(() =>
                                ((e) => {
                                    const t = ce(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return me(t) ? t.value : t;
                                })(be(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, r.useRef)(-1);
                        return (
                            (0, _e.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? he.Deep : he.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== he.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === he.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        s = ge(e);
                                    d.current = Ee.addCallback(s, n, i, t === he.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== he.None)
                                    return () => {
                                        Ee.removeCallback(d.current, i);
                                    };
                            }, [i, t]),
                            c
                        );
                    },
                    fe = 'visible_change',
                    Ae = fe,
                    Ce = fe,
                    De = (e, t) => {
                        const n = ve('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                s = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && s.length > 0;
                        });
                        if (0 === n.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: n[0].value,
                            runTrigger: (n) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: n });
                            },
                        };
                    };
                var Se = n(4231);
                const Fe = 'TopLabel_base_7f',
                    Be = 'TopLabel_base__ready_00',
                    ye = 'TopLabel_text_d0',
                    we = 'TopLabel_text__hangar_36',
                    ke = 'TopLabel_text__shown_25',
                    xe = 'TopLabel_text__hidden_79',
                    Te = 'TopLabel_text__truncated_29',
                    Ie = (0, r.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const u = (0, r.useRef)(!1),
                            i = (0, r.useState)(!1),
                            l = i[0],
                            _ = i[1];
                        (0, r.useEffect)(() => {
                            n || (s && !u.current && (u.current = !0), _(s));
                        }, [s, n]);
                        const d = (0, r.useCallback)(() => {
                                (u.current = !0), _(!0);
                            }, []),
                            m = (0, r.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = n && n.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m);
                                        }
                                    );
                            }, [n, d, m]),
                            o().createElement(
                                'div',
                                { className: c()(Fe, u.current && Be) },
                                o().createElement(
                                    'div',
                                    { className: c()(ye, e !== Se.w.Setup && we, a && Te, s && l ? ke : xe) },
                                    t,
                                ),
                            )
                        );
                    }),
                    Ne = 'notUsableSection';
                var Re = n(7626);
                const Oe = 'Section_base_8a',
                    Le = 'Section_label_73',
                    Me = 'Section_counter_8a',
                    Pe = 'Section_configLabel_c9',
                    $e = 'Section_configText_eb',
                    He = 'Section_configVehicleIcon_20';
                let je;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(je || (je = {}));
                const ze = 'tooltip_watched';
                let Ge;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(Ge || (Ge = {}));
                const We = 'epic_battle';
                let Ze, Ve, Ue;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Ze || (Ze = {})),
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
                    })(Ve || (Ve = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ue || (Ue = {}));
                const qe = ['action', 'timeLimit'];
                const Xe = 'metrics',
                    Ke = () => Date.now(),
                    Ye = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: s || null,
                    }),
                    Je = (e, t) => {
                        const n = (0, r.useCallback)(
                            (n, a = je.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    Qe = (e, t) => {
                        const n = Je(e, t),
                            a = (0, r.useRef)(new Map()),
                            s = (0, r.useRef)(new Map()),
                            u = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, Ke());
                                },
                                [a],
                            ),
                            i = (0, r.useCallback)(() => {
                                a.current.clear(), s.current.clear();
                            }, [a, s]),
                            o = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Ke());
                                },
                                [a, s],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const u = Ke() - n;
                                    a.current.set(e, t + u);
                                },
                                [a, s],
                            ),
                            c = (0, r.useCallback)(
                                (e, t = 0, u, i) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== s.current.get(e) && l(e), a.current.delete(e);
                                    const o = (Ke() - r) / 1e3;
                                    o <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, o)),
                                        n(e, u, i));
                                },
                                [a, s, n, l],
                            );
                        return [(e) => u(e), (e, t, n, a) => c(e, t, n, a), () => i(), (e) => o(e), (e) => l(e)];
                    },
                    et = (e) => {
                        const t = Qe(e, Xe),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            u = t[3],
                            i = t[4],
                            o = (0, r.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        s = e.logLevel;
                                    a(t, n, s, Ye(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => o(e), () => s(), (e) => u(e), (e) => i(e)];
                    },
                    tt = (e, t) => {
                        const n = et(e),
                            a = n[0],
                            s = n[1],
                            u = t.action,
                            i = t.timeLimit,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(t, qe);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => a(u || ze),
                                onHide: () => s(Object.assign({ action: u || ze, timeLimit: i || 2 }, o)),
                            }),
                            [u, i, o, a, s],
                        );
                    },
                    nt = (e, t, n, a) => {
                        const s = et(We),
                            u = s[0],
                            i = s[1];
                        return [
                            (0, r.useCallback)(() => u(ze), [u]),
                            (0, r.useCallback)(
                                () => i({ action: ze, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [i, e, t, n, a],
                            ),
                        ];
                    };
                var at = n(2056);
                const st = o().memo(function ({ className: e, children: t }) {
                    const n = nt(Ve.SkillOrderTooltip, Ze.SetupView),
                        a = n[0],
                        s = n[1];
                    return o().createElement(
                        at.u,
                        {
                            contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                            onMouseEnter: a,
                            onMouseLeave: s,
                        },
                        o().createElement('div', { className: e }, t),
                    );
                });
                var ut = n(7727);
                const it = 'SlotDivider_base_60',
                    rt = () => o().createElement('div', { className: it });
                var ot = n(3267),
                    lt = n(8253),
                    ct = n(3141);
                const _t = (e) => {
                    const t = (0, r.useRef)(-1),
                        n = (0, r.useCallback)(
                            (n) => {
                                if (-1 === t.current) {
                                    const a = e(n);
                                    a &&
                                        (t.current = window.setTimeout(() => {
                                            t.current = -1;
                                        }, a));
                                }
                            },
                            [e],
                        );
                    return (0, r.useEffect)(() => () => clearTimeout(t.current), []), n;
                };
                var dt = n(8526),
                    mt = n(5521);
                const pt = 'Grabber_base_cf',
                    bt = 'Grabber_base__enabled_b0',
                    gt = 'Grabber_base__waitingUpdate_1d',
                    Et = 'Grabber_base__updating_f1',
                    ht = 'Grabber_base__active_71',
                    vt = 'Grabber_base__exit_1f',
                    ft = 'Grabber_base__showAnimation_d9';
                var At = n(3521),
                    Ct = n(1820);
                const Dt = o().memo(
                    ({
                        children: e,
                        id: t,
                        containerRef: n,
                        isEnabled: a = !0,
                        onClick: s,
                        forceCenterX: i,
                        isUpdateAvailable: l,
                        handleAction: _,
                        blockOnGrabIds: d = [],
                    }) => {
                        const m = E().mediaSize,
                            p = (0, r.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: t,
                            }),
                            b = (0, r.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            g = (0, r.useRef)(null),
                            h = (0, r.useState)(!1),
                            v = h[0],
                            f = h[1],
                            A = (0, r.useState)(0),
                            C = A[0],
                            D = A[1],
                            S = 0 !== i && a;
                        (0, r.useEffect)(() => {
                            if (((b.current.isValid = !1), t))
                                return (0, k.v)(() => {
                                    const e = g.current,
                                        a = n.current;
                                    if (a && e) {
                                        const n = e.getBoundingClientRect(),
                                            s = a.getBoundingClientRect(),
                                            u = n.left + 0.5 * n.width;
                                        (b.current = {
                                            isValid: !0,
                                            minXRestriction: s.left,
                                            maxXRestriction: s.left + s.width,
                                            startX: n.left,
                                            startCenterX: u,
                                        }),
                                            _(Ct.m.Ready, { dragId: t, currentCenterX: u });
                                    }
                                });
                        }, [m]);
                        const F = (0, r.useCallback)(
                                (e) => {
                                    (p.current.isDragActive = e),
                                        f(e),
                                        p.current.grabActivationPassed && !e && (0, At.jZ)(!1, d);
                                },
                                [d],
                            ),
                            B = (0, r.useCallback)(() => {
                                _(Ct.m.DragStart, { dragId: p.current.id }),
                                    (p.current.grabActivationPassed = !0),
                                    (0, At.jZ)(!0, d);
                            }, [_, d]),
                            y = (0, r.useCallback)((e) => {
                                const t = p.current,
                                    n = b.current,
                                    a = n.startX,
                                    s = n.startCenterX,
                                    u = n.minXRestriction,
                                    i = n.maxXRestriction,
                                    r = s - a,
                                    o = e - t.clickCenterOffset;
                                t.dropCenterX = (0, At.yG)(o, r, u, i);
                            }, []),
                            w = (0, r.useCallback)(
                                (e) => {
                                    const t = p.current,
                                        n = b.current;
                                    0 === e.button &&
                                        !t.isDragActive &&
                                        n.isValid &&
                                        a &&
                                        !l &&
                                        g.current &&
                                        ((t.actualX = e.clientX),
                                        (t.clickCenterOffset = t.actualX - n.startCenterX),
                                        F(!0));
                                },
                                [a, l, F],
                            ),
                            x = (0, r.useCallback)(() => {
                                !s || (a && b.current.isValid) || s();
                            }, [a, s]),
                            T = (0, r.useCallback)(
                                (e) => {
                                    const t = p.current;
                                    e.target === g.current &&
                                        t.grabActivationPassed &&
                                        ((t.grabActivationPassed = !1),
                                        setTimeout(() => _(Ct.m.DropExit, { dragId: t.id })));
                                },
                                [_],
                            );
                        (0, dt.gd)(mt.n.ESCAPE, () => F(!1)),
                            (0, r.useEffect)(() => {
                                a && i && D(0);
                            }, [i, a]);
                        const I = !v && p.current.grabActivationPassed;
                        (0, r.useEffect)(() => {
                            p.current.id = t;
                        }, [t]),
                            (0, r.useEffect)(() => {
                                I && _(Ct.m.Drop, { dragId: p.current.id, currentCenterX: p.current.dropCenterX });
                            }, [I, _]),
                            (0, r.useEffect)(() => {
                                const e = g.current;
                                if (S && e)
                                    return (
                                        e.addEventListener('transitionend', T),
                                        () => {
                                            e.removeEventListener('transitionend', T);
                                        }
                                    );
                            }, [S, T]),
                            (0, r.useEffect)(() => {
                                if (a && v && p.current.id) {
                                    const e = u.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return F(!1);
                                            const n = p.current,
                                                a = e.clientX;
                                            a === n.actualX && 0 === e.button && !p.current.grabActivationPassed
                                                ? s && s()
                                                : p.current.grabActivationPassed && y(a),
                                                p.current.isDragActive && F(!1);
                                        }),
                                        t = u.O.client.events.mouse.move(([e]) => {
                                            const t = p.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                            const n = e.clientX,
                                                a = t.grabActivationPassed;
                                            !a && B(),
                                                n !== t.actualX &&
                                                    ((t.actualX = n),
                                                    y(n),
                                                    a && _(Ct.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                    D(t.dropCenterX - b.current.startCenterX));
                                        });
                                    return () => {
                                        t(), e();
                                    };
                                }
                            }, [B, _, v, a, s, F, y]);
                        const N = (0, r.useMemo)(
                                () => (i ? { left: i - b.current.startCenterX } : { left: C }),
                                [C, i],
                            ),
                            R = a ? c()(pt, bt, v && ht, I && vt, S && gt, i && Et) : c()(pt, i && ft);
                        return o().createElement(
                            'div',
                            { id: t, ref: g, onClick: x, onMouseDown: w, className: R, style: N },
                            e,
                        );
                    },
                );
                let St;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(St || (St = {}));
                const Ft = 'KeyLabel_base_ec',
                    Bt = 'KeyLabel_base__current_c2',
                    yt = 'KeyLabel_base__next_fa',
                    wt = ({ text: e, show: t, panelType: n, shellState: a, className: s }) => {
                        if (!e) return null;
                        const u = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return o().createElement(
                            'div',
                            { className: c()(Ft, a === St.Current && Bt, a === St.Next && yt, s) },
                            o().createElement(Ie, { isTruncated: !0, text: u, show: t, panelType: n }),
                        );
                    };
                var kt = n(7078);
                const xt = ({ children: e, slotType: t, slotId: n, isEnabled: a = !0 }) => {
                        const s = (0, r.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return o().createElement(kt.t, { isEnabled: a, args: s }, o().createElement('div', null, e));
                    },
                    Tt = 'Close_base_f3',
                    It = 'Close_base__invisible_0e',
                    Nt = 'Close_base__shown_a2',
                    Rt = 'Close_base__hover_6d',
                    Ot = 'Close_base__down_2b',
                    Lt = (0, r.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const u = (0, r.useState)(!1),
                                i = u[0],
                                l = u[1],
                                _ = (0, r.useState)(!1),
                                d = _[0],
                                m = _[1],
                                p = (0, r.useState)(!1),
                                b = p[0],
                                g = p[1],
                                E = (0, r.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                h = (0, r.useCallback)(() => {
                                    m(!0), a && (0, ut.G)(a);
                                }, [a]),
                                v = (0, r.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, ut.G)(s));
                                    },
                                    [t, s],
                                ),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, r.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const C = c()(Tt, !b && It, b && t && Nt, i && Ot, d && Rt);
                            return o().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: v,
                                onMouseDown: f,
                                onMouseUp: A,
                                className: C,
                                onClick: E,
                            });
                        },
                    ),
                    Mt = 'Slot_base_3a',
                    Pt = 'Slot_label_e6',
                    $t = 'Slot_close_bb',
                    Ht = 'Slot_disabled_5d',
                    jt = 'Slot_shadow_a7',
                    zt = 'Slot_category_2c';
                var Gt = n(1641);
                const Wt = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: u = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, de.c9)(de.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    ut.$.playYes();
                            }, [s, t, n, a]),
                            l = (0, r.useCallback)(() => {
                                (0, de.c9)(de.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === Gt.t.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Zt = ['children'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const Ut = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Zt);
                    return o().createElement(
                        Wt,
                        Vt({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var qt = n(5918);
                const Xt = ({
                        intCD: e,
                        id: t,
                        itemInstalledSetupIdx: n,
                        isMountedMoreThanOne: a,
                        isInstalled: s,
                        isDisabled: u,
                        imageSource: i,
                        isEmpty: l,
                        slotIndex: c,
                        slotType: _,
                        contextMenuDisabled: d,
                        isSetupSwitching: m,
                        children: p,
                    }) => {
                        const b = (0, r.useMemo)(
                            () => ({
                                intCD: e,
                                slotType: _,
                                installedSlotId: t,
                                isMounted: s,
                                fieldType: 1,
                                itemInstalledSetupIdx: n,
                                itemInstalledSetupSlotIdx: t,
                                isMountedMoreThanOne: a,
                            }),
                            [e, _, t, n, s, a],
                        );
                        return o().createElement(
                            qt.y,
                            {
                                uniqueKey: e,
                                isEmpty: l,
                                slotIndex: c,
                                slotType: _,
                                imageSource: i,
                                itemInstalledSetupIndex: n,
                            },
                            o().createElement(
                                Ut,
                                { isEnabled: !(m || d || u || l), args: b },
                                o().createElement('div', null, p),
                            ),
                        );
                    },
                    Kt = (0, x.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: a,
                            isSetupSwitching: s,
                            isSectionSelected: u,
                            onActiveSlotChanged: i,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: p,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: E,
                            activeDragId: h,
                            handleGrabberAction: v,
                            forceLeftUpdate: f,
                            potentialDropId: A,
                            blockOnGrabIds: C,
                            contextMenuDisabled: D,
                            groupIndex: S,
                            sectionIndex: F,
                        }) => {
                            const B = (0, H.t)().model.computes.slots.slot(S, F, t),
                                y = B.imageSource,
                                w = B.isInstalled,
                                x = B.itemInstalledSetupIdx,
                                T = B.isMountedMoreThanOne,
                                I = B.overlayType,
                                N = B.keyName,
                                R = B.categoryImgSource,
                                O = B.withAttention,
                                L = B.id,
                                M = B.intCD,
                                P = d === Se.w.Setup,
                                $ = !(0, ne.s$)(d),
                                j = !(0, ne.iN)(d),
                                z = d === Se.w.Compare,
                                G = P && u && $,
                                W = (0, r.useRef)(!1),
                                Z = (0, r.useRef)(null),
                                V = -1 === M;
                            (0, r.useEffect)(() => {
                                if (!W.current && u && a)
                                    return (0, k.v)(() => {
                                        i && i(Z, e, L), (W.current = !0);
                                    });
                                W.current = !0;
                            }, [L, u, a, i, e]),
                                (0, r.useEffect)(() => {
                                    a && c(Z);
                                }, [a, c]);
                            const U = (0, r.useCallback)(() => (!a && $ && !s && l(e, L), 500), [L, $, a, s, l, e]),
                                q = _t(U),
                                X = (0, r.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                K = (0, r.useCallback)(() => {
                                    j && !a && !h && !m && ut.$.playHighlight();
                                }, [a, h, m, j]);
                            (0, r.useEffect)(() => {
                                A && ut.$.playHighlight();
                            }, [A]);
                            const Y = (0, r.useCallback)(() => {
                                    null == _ || _(L, e);
                                }, [L, _, e]),
                                J = P && !w,
                                Q = Boolean(g && A === g),
                                ee = g && (G || z),
                                te = `${e}-slot-${L}`,
                                ae = R && R.length > 0,
                                se = ae ? { backgroundImage: `url(${R})` } : {},
                                ue = {
                                    id: g,
                                    containerRef: E,
                                    isEnabled: !V,
                                    onClick: X,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: v,
                                    forceCenterX: f,
                                    blockOnGrabIds: C,
                                },
                                ie = {
                                    isEmpty: V,
                                    intCD: M,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: y,
                                    isDisabled: m,
                                    isInstalled: w,
                                    id: L,
                                    itemInstalledSetupIdx: x,
                                    isMountedMoreThanOne: T,
                                    contextMenuDisabled: D,
                                    isSetupSwitching: s,
                                };
                            return o().createElement(
                                'div',
                                { className: Mt, onMouseEnter: K, id: te },
                                (u || z) &&
                                    !w &&
                                    o().createElement(
                                        'div',
                                        { className: $t },
                                        o().createElement(Lt, { id: `close-${te}`, show: !h, onClick: Y }),
                                    ),
                                o().createElement(
                                    xt,
                                    { slotType: e, slotId: L, isEnabled: !h && (0, ne.qG)(d) },
                                    o().createElement(
                                        'div',
                                        { ref: Z },
                                        o().createElement(
                                            lt.W,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: a,
                                                isBorderActive: Boolean(p),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: Q,
                                                onClick: ee ? void 0 : X,
                                            },
                                            $ &&
                                                o().createElement(
                                                    'div',
                                                    { className: Pt },
                                                    o().createElement(wt, { text: N, show: Boolean(u), panelType: d }),
                                                ),
                                            o().createElement(
                                                ot.J,
                                                { when: Boolean(ee), wrapper: Dt, withProps: ue },
                                                o().createElement(
                                                    ot.J,
                                                    { when: $, wrapper: Xt, withProps: ie },
                                                    o().createElement(ct.c, {
                                                        imageSource: y,
                                                        isIncompatible: b,
                                                        overlayType: I,
                                                        level: n,
                                                        isTemporary: J,
                                                        withAttention: O,
                                                    }),
                                                ),
                                            ),
                                            ae &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('span', { className: jt }),
                                                    o().createElement('span', { className: zt, style: se }),
                                                ),
                                            m && o().createElement('div', { className: Ht }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Yt = 'BattleAbilitySlot_base_74',
                    Jt = 'BattleAbilitySlot_rank_01',
                    Qt = ['rank'];
                const en = (e) => {
                    let t = e.rank,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Qt);
                    return o().createElement(
                        'div',
                        { className: Yt },
                        o().createElement(Kt, n),
                        t && o().createElement('div', { className: Jt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var tn = n(4814);
                const nn = 'OptDeviceSlot_base_14',
                    an = 'OptDeviceSlot_specializations_c3',
                    sn = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const rn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.activeSpecsMask,
                            u = e.isChangeSetupIndex,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, sn);
                        const r = (0, H.t)(),
                            l = r.controls,
                            _ = r.model.computes.specializations(t, n, a),
                            d = _.specializations.length,
                            m = i.panelType === Se.w.Setup || i.panelType === Se.w.Compare,
                            p = !(0, ne.s$)(i.panelType),
                            b = _.isDynamic;
                        return o().createElement(
                            'div',
                            { className: c()(nn, d && !b && !u && 'specializationsSlot') },
                            p &&
                                o().createElement(
                                    'div',
                                    { className: an },
                                    o().createElement(tn.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: s,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: i.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            o().createElement(Kt, un({}, i, { groupIndex: t, sectionIndex: n, slotIndex: a })),
                        );
                    }),
                    on = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    ln = ({ id: e, isSelected: t, isLocked: n, onSlotSelected: a, panelType: s }) => {
                        const u = w.yZ,
                            i = (0, r.useCallback)(() => {
                                a(u, e);
                            }, [e, a, u]),
                            l = c()(on.base, on[`base__${s}`], n && on.base__disabled, t && on.base__toggle),
                            _ = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return o().createElement(
                            xt,
                            { slotType: u, slotId: e },
                            o().createElement(
                                'div',
                                { id: m, className: l, onClick: i, onMouseEnter: ut.$.playHighlight },
                                t && o().createElement('div', { className: on.glow }),
                                o().createElement('div', { className: on.image, style: _ }),
                                o().createElement('div', { className: on.toggle, style: d }),
                            ),
                        );
                    },
                    cn = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const dn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.sectionType,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, cn);
                        const i = (0, H.t)().model,
                            r = i.computes.slots.slot(t, n, a),
                            l = i.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === r.id;
                        switch (s) {
                            case w.zn: {
                                const e = r;
                                return o().createElement(
                                    rn,
                                    _n({}, e, u, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            case w.yZ: {
                                const e = r;
                                return o().createElement(
                                    ln,
                                    _n({}, u, e, { groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                            }
                            case w.YN: {
                                const e = r;
                                return o().createElement(
                                    en,
                                    _n({}, u, e, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            default:
                                return o().createElement(
                                    Kt,
                                    _n({}, u, { isSelected: d, groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                        }
                    }),
                    mn = 'Slots_base_27',
                    pn = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function bn() {
                    return (
                        (bn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        bn.apply(this, arguments)
                    );
                }
                const gn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.sectionType,
                            s = e.onActiveSlotChanged,
                            u = e.isDisabled,
                            i = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, pn);
                        const m = (0, r.useRef)(null),
                            p = (0, r.useRef)(null),
                            b = (0, H.t)(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, n),
                            v = g.ammunitionPanel.get(),
                            f = v.selectedSection,
                            A = v.selectedSlot,
                            C = v.syncInitiator,
                            D = (0, r.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: a,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, a],
                            ),
                            S = f === a,
                            F = a === w.YN,
                            B = S ? A : -1,
                            y = `${a}-${h}slots`,
                            k = (0, Re.UW)({
                                baseId: y,
                                slotsLength: h,
                                handleSwap: D,
                                setIsExitBlocked: _,
                                syncInitiator: C,
                            }),
                            x = k.handleGrabberAction,
                            T = k.dragState,
                            I = k.getForceCenterX;
                        (0, r.useEffect)(() => {
                            S && -1 !== B && m.current && s(m, f, B);
                        }, [s, S, f, B]);
                        const N = (e, t) => {
                                if ((u || ut.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                E.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            O = (e, t) => {
                                E.slotClear({ slotId: e, sectionType: t });
                            };
                        return o().createElement(
                            'div',
                            { id: y, ref: p, className: c()(mn, a) },
                            U(h, (e) => {
                                const c = !F && h > 1 ? `${y}-${e}` : '';
                                return o().createElement(
                                    r.Fragment,
                                    { key: `slot ${t}-${n}-${e}` },
                                    e > 0 && o().createElement(rt, null),
                                    o().createElement(
                                        dn,
                                        bn(
                                            {
                                                groupIndex: t,
                                                sectionIndex: n,
                                                slotIndex: e,
                                                sectionType: a,
                                                isSectionSelected: S,
                                                isDisabled: u,
                                                contextMenuDisabled: F,
                                                slotType: a,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: N,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: O,
                                                grabberId: c,
                                                containerRef: p,
                                                forceLeftUpdate: I(c),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: x,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: i,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    En = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function hn() {
                    return (
                        (hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        hn.apply(this, arguments)
                    );
                }
                const vn = (0, x.Pi)((e) => {
                    let t = e.groupIndex,
                        n = e.sectionIndex,
                        a = e.type,
                        s = e.newItemsCount,
                        u = e.panelType,
                        i = e.sectionsIds,
                        l = e.vehicle,
                        _ = e.vehicleType,
                        d = e.isSetupSwitching,
                        m = e.classMix,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, En);
                    const b = (0, H.t)().model,
                        g = (0, r.useRef)(null),
                        E = b.ammunitionPanel.get(),
                        h = E.selectedSection,
                        v = E.syncInitiator,
                        f = b.computes.slots.length(t, n),
                        A = b.computes.slots.existFilled(t, n),
                        C = De('AmmunitionPanelBattleAbilities', Ae);
                    (0, r.useEffect)(() => {
                        null == C || C.runTrigger(!0);
                    }, [C]);
                    const D = h === a,
                        S = (0, Re.Tu)(a, i),
                        F = S.selfId,
                        B = S.blockOnGrabIds,
                        y = ((l && l.length > 0) || (_ && _.length > 0)) && u !== Se.w.Battle && u !== Se.w.Respawn,
                        w = (0, r.useMemo)(
                            () => ({
                                icon: o().createElement('span', {
                                    className: He,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: l,
                            }),
                            [l, _],
                        ),
                        k = f > 0 && u !== Se.w.Compare && u !== Se.w.Battle && u !== Se.w.Respawn,
                        x = R.strings.tank_setup.section.$dyn(a);
                    if ('string' != typeof x)
                        throw new Error(`No top label text for section type ${a} or it's not a string`);
                    return o().createElement(
                        'div',
                        {
                            id: d ? Ne : F,
                            ref: g,
                            className: c()(
                                Oe,
                                m,
                                D && 'sectionSelected',
                                f > 1 && 'multiSlot',
                                v >= 0 && A && 'existFilledSlots',
                            ),
                        },
                        y &&
                            o().createElement(
                                st,
                                { className: Pe },
                                o().createElement(oe, {
                                    classMix: $e,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: w,
                                }),
                            ),
                        k &&
                            o().createElement(
                                'div',
                                { className: Le },
                                o().createElement(Ie, { text: x, parentRef: g, show: !D, panelType: u }),
                            ),
                        o().createElement(
                            gn,
                            hn({ groupIndex: t, sectionIndex: n, sectionType: a, panelType: u, blockOnGrabIds: B }, p),
                        ),
                        Boolean(s) &&
                            o().createElement(
                                'div',
                                { className: Me },
                                o().createElement(ie, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var fn = n(8598);
                const An = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    Cn = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isInfinity: u,
                        isSelected: i,
                        keyName: l,
                        panelType: _,
                        intCD: d,
                        slotIndex: m,
                        grabberId: p,
                        isSetupSwitching: b,
                        containerRef: g,
                        activeDragId: E,
                        handleGrabberAction: h,
                        forceLeftUpdate: v,
                        potentialDropId: f,
                        blockOnGrabIds: A,
                        shellState: C,
                        isDisabled: D,
                    }) => {
                        const S = !(0, ne.s$)(_),
                            F = (0, r.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            B = p && p === f,
                            y = p && p === E,
                            k = (0, r.useMemo)(() => {
                                const a = { slotType: w.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [d, e, t, n]),
                            x = k[0],
                            T = k[1],
                            I = (0, r.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && i,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: h,
                                    forceCenterX: v,
                                    blockOnGrabIds: A,
                                }),
                                [E, A, g, v, p, h, i],
                            ),
                            N = (0, r.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: w.g9, imageSource: null }),
                                [d, m],
                            );
                        return o().createElement(
                            Ut,
                            { isEnabled: S && !b && !D, args: T },
                            o().createElement(
                                kt.t,
                                { args: x, isEnabled: !E && (0, ne.qG)(_) },
                                o().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: An.base },
                                    l &&
                                        o().createElement(
                                            'div',
                                            { className: An.label },
                                            o().createElement(wt, {
                                                text: l,
                                                show: i || _ === Se.w.Battle || _ === Se.w.Respawn,
                                                shellState: C,
                                                panelType: _,
                                                className: c()(
                                                    0 === m && An.topLabel__first,
                                                    2 === m && An.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                An.shell,
                                                !E && S && !D && An.shell__active,
                                                y && An.shell__grabbing,
                                                !y && B && An.shell__potential,
                                            ),
                                        },
                                        o().createElement(
                                            ot.J,
                                            { when: S, wrapper: Dt, withProps: I },
                                            o().createElement(
                                                ot.J,
                                                { when: S, wrapper: qt.y, withProps: N },
                                                o().createElement('div', { className: An.image, style: F }),
                                                !u && o().createElement(fn.X, { count: s }),
                                                u && o().createElement('div', { className: An.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Dn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Sn = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a }) => {
                        const s = (0, r.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            u = c()(Dn.slot, !t && Dn.slot__active, Dn.slot__compare),
                            i = (0, r.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            l = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return o().createElement(
                            xt,
                            { slotType: w.WI, slotId: e },
                            o().createElement(
                                'div',
                                { className: Dn.base },
                                o().createElement(
                                    'div',
                                    { className: u, onClick: s, id: `shell-slot-${e}` },
                                    t && o().createElement('div', { className: Dn.glow }),
                                    o().createElement('div', { className: Dn.image, style: i }),
                                    o().createElement('div', { className: Dn.toggle, style: l }),
                                ),
                            ),
                        );
                    },
                    Fn = 'ShellContainer_base_46',
                    Bn = 'ShellContainer_base__compressed_13',
                    yn = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function wn() {
                    return (
                        (wn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wn.apply(this, arguments)
                    );
                }
                const kn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.isCompare,
                            u = e.handleSlotSelected,
                            i = e.baseId,
                            r = e.grabber,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, yn);
                        const _ = r.handleGrabberAction,
                            d = r.dragState,
                            m = r.getForceCenterX,
                            p = (0, H.t)().model,
                            b = p.computes.slots.length(t, n),
                            g = p.computes.slots.slot(t, n, a),
                            E = !s && b > 1 ? `${i}-${g.id}` : '';
                        return (0, ne.j2)(g)
                            ? null
                            : o().createElement(
                                  'div',
                                  { key: g.id, className: c()(Fn, !s && 0 !== a && Bn) },
                                  s
                                      ? o().createElement(Sn, wn({}, g, { onSlotSelected: u }))
                                      : o().createElement(
                                            Cn,
                                            wn(
                                                {},
                                                g,
                                                {
                                                    slotIndex: a,
                                                    grabberId: E,
                                                    forceLeftUpdate: m(E),
                                                    activeDragId: d.activeDragId,
                                                    handleGrabberAction: _,
                                                    potentialDropId: d.potentialDropId,
                                                },
                                                l,
                                            ),
                                        ),
                              );
                    }),
                    xn = 'Shells_base_f9',
                    Tn = (0, x.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: n,
                            isSelected: a,
                            syncInitiator: s,
                            blockOnGrabIds: u,
                            isDisabled: i,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, H.t)(),
                                p = m.model,
                                b = m.controls,
                                g = p.computes.slots.length(_, d),
                                E = (0, r.useRef)(!1),
                                h = (0, r.useRef)(null),
                                v = n ? w.WI : w.g9,
                                f = `${v}-${g}shells`,
                                A = !(0, ne.iN)(e),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        b.sectionSelect({ selectedSlot: e, selectedSection: v }), A && ut.$.playClick();
                                    },
                                    [b, v, A],
                                ),
                                D = (0, r.useCallback)(() => {
                                    a || n || i || l || C(0);
                                }, [a, n, l, i, C]),
                                S = (0, r.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: v,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, v],
                                ),
                                F = (0, Re.UW)({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: S,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, r.useEffect)(
                                    () =>
                                        (0, k.v)(() => {
                                            E.current = !0;
                                        }),
                                    [],
                                ),
                                (0, r.useEffect)(() => {
                                    if (a && e === Se.w.Setup) {
                                        if (!E.current)
                                            return (0, k.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [a, e, t]),
                                o().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: h,
                                        className: xn,
                                        onClick: D,
                                        onMouseEnter: () => {
                                            !i && A && ut.$.playHighlight();
                                        },
                                    },
                                    U(g, (t) =>
                                        o().createElement(kn, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: n,
                                            containerRef: h,
                                            handleSlotSelected: C,
                                            panelType: e,
                                            blockOnGrabIds: u,
                                            isSelected: a,
                                            isDisabled: i,
                                            isSetupSwitching: l,
                                            grabber: F,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    In = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Nn = [Se.w.Hangar, Se.w.Battle, Se.w.Prebattle, Se.w.Respawn],
                    Rn = (0, x.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: n,
                            onActiveSlotChanged: a,
                            isDisabled: s,
                            isBorderActive: u,
                            classMix: i,
                            isSetupSwitching: l,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: m,
                            sectionIndex: p,
                        }) => {
                            const b = (0, H.t)().model,
                                g = b.ammunitionPanel.get(),
                                E = g.ammoNotFull,
                                h = g.selectedSection,
                                v = g.syncInitiator,
                                f = (0, r.useRef)(null),
                                A = n === Se.w.Compare,
                                C = n === Se.w.Prebattle && e === w.g9,
                                D = h === e || C,
                                S = (0, r.useCallback)(() => {
                                    a(f, h, 0);
                                }, [a, h]),
                                F = (0, Re.Tu)(e, t),
                                B = F.selfId,
                                y = F.blockOnGrabIds,
                                k = ((e) => Nn.includes(e))(n) && !s && E,
                                x = b.computes.slots.filteredLength(m, p),
                                T = !A && n !== Se.w.Battle && n !== Se.w.Respawn;
                            return o().createElement(
                                'div',
                                {
                                    id: l ? Ne : B,
                                    className: c()(
                                        In.base,
                                        i,
                                        In[`base__${n}`],
                                        !u && D && In.base__selected,
                                        A && In.base__compare,
                                        s && In.base__disabled,
                                    ),
                                    ref: f,
                                },
                                k && o().createElement('div', { className: In.attention }),
                                T &&
                                    o().createElement(
                                        'div',
                                        { className: In.label },
                                        o().createElement(Ie, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: f,
                                            show: !D,
                                            panelType: n,
                                        }),
                                    ),
                                k &&
                                    o().createElement('div', {
                                        className: c()(
                                            In.border,
                                            2 === x && In.border__double,
                                            3 === x && In.border__triple,
                                        ),
                                    }),
                                o().createElement(Tn, {
                                    groupIndex: m,
                                    sectionIndex: p,
                                    panelType: n,
                                    onSelected: S,
                                    isSelected: D,
                                    isCompare: A,
                                    syncInitiator: v,
                                    blockOnGrabIds: y,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    o().createElement(
                                        'div',
                                        { className: In.counter },
                                        o().createElement(ie, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && o().createElement('div', { className: In.disabled }),
                            );
                        },
                    ),
                    On = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Ln() {
                    return (
                        (Ln =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ln.apply(this, arguments)
                    );
                }
                const Mn = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: n = !1,
                            onActiveSlotChanged: a,
                            isBorderActive: s,
                            isChangeSetupIndex: u,
                            setIsExitBlocked: i,
                        }) => {
                            const r = (0, H.t)().model,
                                l = M(['section'], On),
                                _ = r.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: a,
                                    isBorderActive: s,
                                    sectionsIds: _,
                                    isChangeSetupIndex: u,
                                    setIsExitBlocked: i,
                                };
                            return o().createElement(
                                'div',
                                { className: On.base },
                                U(r.computes.sections.length(e), (n) => {
                                    const a = r.computes.sections.section(e, n);
                                    if (!a.slots || !a.slots.length) return null;
                                    const s = c()(
                                        l.section,
                                        0 !== n && (0, ne.s$)(t) && On.section__battle,
                                        0 === n && On.section__first,
                                    );
                                    if (a.type === w.g9 || a.type === w.WI) {
                                        const t = a;
                                        return o().createElement(
                                            Rn,
                                            Ln({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: n,
                                                isSetupSwitching: u,
                                                key: `${a.name}${e}${a.slots.length}`,
                                                classMix: s,
                                            }),
                                        );
                                    }
                                    return o().createElement(
                                        vn,
                                        Ln({}, a, d, {
                                            groupIndex: e,
                                            sectionIndex: n,
                                            isSetupSwitching: u,
                                            key: `${a.name}${e}${a.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Pn = 'KeyboardKey_base_57',
                    $n = 'KeyboardKey_back_43',
                    Hn = o().memo(({ text: e }) =>
                        o().createElement('div', { className: Pn }, o().createElement('div', { className: $n }, e)),
                    ),
                    jn = 'SetupSwitchHotkey_base_4c',
                    zn = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Gn = 'SetupSwitchHotkey_plusWrapper_f0',
                    Wn = 'SetupSwitchHotkey_plus_f0',
                    Zn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Vn = 'SetupSwitchHotkey_plus__vertical_5b',
                    Un = o().memo(({ hotKeys: e }) =>
                        o().createElement(
                            'div',
                            { className: jn },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? o().createElement(Hn, { key: t, text: n })
                                    : o().createElement(
                                          'div',
                                          { key: t, className: zn },
                                          o().createElement(
                                              'div',
                                              { className: Gn },
                                              o().createElement('div', { className: `${Wn} ${Zn}` }),
                                              o().createElement('div', { className: `${Wn} ${Vn}` }),
                                          ),
                                          o().createElement(Hn, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    qn = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function Xn() {
                    return (
                        (Xn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Xn.apply(this, arguments)
                    );
                }
                const Kn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Yn = (e) => e.setupSelector.hotKeys,
                    Jn = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: n,
                            setSetupSwitching: a,
                            handleSetupSwitching: s,
                        }) => {
                            const u = M(['switch'], qn),
                                i = (0, H.t)().model,
                                r = i.root.get().isDisabled,
                                l = i.computes.groups.group(e);
                            return o().createElement(
                                'div',
                                { key: l.groupId, className: qn.base },
                                o().createElement(
                                    'div',
                                    { className: qn.wrapper },
                                    o().createElement(
                                        te,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, a),
                                        o().createElement(Mn, Xn({}, t, { groupIndex: e, isChangeSetupIndex: n })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        o().createElement(
                                            'div',
                                            { className: c()(u.switch, (0, ne.iN)(t.panelType) && qn.switch__battle) },
                                            o().createElement(X._, {
                                                states: l.setupSelector.states,
                                                onClick: s,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                o().createElement(
                                                    q.i,
                                                    {
                                                        header: Kn.title(),
                                                        body: String(Kn.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    o().createElement('div', {
                                                        className: qn.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = l),
                                ((d = t.panelType) === Se.w.Battle || d === Se.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Yn(_) &&
                                    o().createElement(
                                        'div',
                                        { className: c()(qn.hint, r && qn.hint__disabled) },
                                        o().createElement(Un, { hotKeys: Yn(l) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    Qn = 'Groups_base_de',
                    ea = (0, x.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                            const u = (0, H.t)(),
                                i = u.model,
                                l = u.controls,
                                c = i.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, r.useEffect)(() => {
                                (e.panelType !== Se.w.Hangar && e.panelType !== Se.w.Setup) || !n || a(!1);
                            }, [n, e.panelType, a]),
                                (0, r.useEffect)(() => {
                                    e.panelType === Se.w.Respawn && a(!1);
                                }, [d, e.panelType, a]);
                            const m = (0, r.useCallback)(
                                (t) => {
                                    e.panelType === Se.w.Respawn && a(!0), _(t);
                                },
                                [_, e.panelType, a],
                            );
                            return o().createElement(
                                'div',
                                { className: Qn },
                                U(i.computes.groups.length(), (n) =>
                                    o().createElement(Jn, {
                                        key: `group-${n}`,
                                        sectionProps: e,
                                        groupIndex: n,
                                        isSetupSwitching: t,
                                        setSetupSwitching: a,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function ta() {
                    return (
                        (ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ta.apply(this, arguments)
                    );
                }
                const na = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = o().createElement('div', { className: n }, e);
                        if (t.header || t.body) return o().createElement(q.i, t, a);
                        const s = t.contentId;
                        return s
                            ? o().createElement(at.u, ta({}, t, { contentId: s }), a)
                            : o().createElement(kt.t, t, a);
                    },
                    aa = 'RoleSkillSlot_base_c4',
                    sa = 'RoleSkillSlot_icon_79',
                    ua = ({ roleSkill: e, tooltipId: t, tooltipHeader: n, tooltipBody: a, className: s }) => {
                        const u = (0, r.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: n, body: a, hasHtmlContent: !0 },
                                header: n,
                                body: a,
                                ignoreShowDelay: !0,
                            }),
                            [e, n, a, t],
                        );
                        return o().createElement(
                            na,
                            { tooltipArgs: u, className: c()(aa, s) },
                            o().createElement('div', {
                                className: sa,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    ia = 'SlotGlow_base_40',
                    ra = 'SlotGlow_glow_a9',
                    oa = 'SlotGlow_glow__initialized_8d',
                    la = 'SlotGlow_glow__shown_f2',
                    ca = 'SlotGlow_glow__hidden_94',
                    _a = (0, r.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, r.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            i = a[1],
                            l = (0, r.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, r.useEffect)(() => {
                            let n = l.current.initialized;
                            !n && e && ((n = !0), i({ offset: e, slotWidth: t })),
                                (l.current = { initialized: n, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, r.useEffect)(() => {
                                n || i(l.current);
                            }, [n]);
                        const _ = (0, r.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${u.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !n && s.offset === l.current.offset,
                            m = c()(ra, l.current.initialized && oa, d ? la : ca);
                        return o().createElement(
                            'div',
                            { className: ia },
                            o().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    da = (0, x.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: n,
                            isDisabled: a = !1,
                            onResize: s,
                            setIsExitBlocked: u,
                        }) => {
                            const i = (0, H.t)(),
                                l = i.model,
                                _ = i.controls,
                                d = l.ammunitionPanel.get(),
                                m = d.isSetupSwitchInProgress,
                                p = d.syncInitiator,
                                b = l.roleSkillSlot.get(),
                                g = (0, r.useState)(!1),
                                E = g[0],
                                h = g[1],
                                v = (0, r.useRef)(!1),
                                f = (0, r.useState)({ slotWidth: 0, slotOffset: 0 }),
                                A = f[0],
                                C = f[1],
                                D = (0, r.useState)(!1),
                                S = D[0],
                                F = D[1],
                                B = (0, r.useRef)(null),
                                y = (0, r.useContext)(N),
                                w = (0, r.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                x = (0, r.useCallback)(
                                    (e, t) => {
                                        if (E || m || n !== Se.w.Hangar) return;
                                        const a = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        _.sectionResized(Object.assign({ sectionType: e }, a)),
                                            y && (y.freeze(), y.resize());
                                    },
                                    [E, m, n, _, y],
                                ),
                                T = (0, r.useCallback)(
                                    (e) => {
                                        x('main', e);
                                    },
                                    [x],
                                );
                            $(B, T, !0, [p]), (0, r.useEffect)(() => () => T(), [T]);
                            const I = (0, r.useCallback)(() => {
                                    F(!1);
                                }, []),
                                R = (0, r.useCallback)(() => {
                                    if (w.current.element && B.current) {
                                        const e = w.current.element.getBoundingClientRect(),
                                            t = B.current.getBoundingClientRect();
                                        C({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                O = (0, r.useCallback)(
                                    (e, t, n) => {
                                        if (e.current && B.current) {
                                            const a = ((e, t, n) =>
                                                e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, w);
                                            (w.current.element = e.current),
                                                (w.current.slotIndex = n),
                                                (w.current.sectionIndex = t),
                                                v.current && a ? F(!0) : (v.current = !0),
                                                w.current.generation && R();
                                        }
                                    },
                                    [R],
                                ),
                                L = (0, r.useCallback)(
                                    () =>
                                        (0, k.v)(() => {
                                            (w.current.generation += 1), R();
                                        }),
                                    [w, R],
                                );
                            (0, r.useEffect)(() => (0, k.v)(L), [L]),
                                (0, r.useEffect)(
                                    () => (
                                        engine.on('clientResized', L),
                                        () => {
                                            engine.off('clientResized', L);
                                        }
                                    ),
                                    [L],
                                );
                            const P = A.slotWidth,
                                z = A.slotOffset,
                                G = c()(j.base, !t && j.base__locked, !e && j.base__hidden, a && j.base__disabled),
                                W = c()(j.border, !S && j.border__hidden),
                                Z = n === Se.w.Setup || n === Se.w.Compare,
                                U = {
                                    panelType: n,
                                    isDisabled: a,
                                    onActiveSlotChanged: O,
                                    isBorderActive: S,
                                    setIsExitBlocked: u,
                                };
                            (0, r.useEffect)(() => {
                                null == s || s();
                            }, [s, b.roleSkill]);
                            const q = M(['roleSkillSlot'], j);
                            return o().createElement(
                                'div',
                                { ref: B, className: G },
                                Z &&
                                    o().createElement(_a, {
                                        key: w.current.generation,
                                        slotOffset: z,
                                        slotWidth: P,
                                        isAnimationRunning: S,
                                    }),
                                o().createElement(
                                    ea,
                                    { isSetupSwitching: m || E, sectionProps: U, isReady: t, setSetupSwitching: h },
                                    b.roleSkill &&
                                        o().createElement(ua, {
                                            roleSkill: b.roleSkill,
                                            tooltipId: b.tooltipId,
                                            tooltipHeader: b.tooltipHeader,
                                            tooltipBody: b.tooltipBody,
                                            className: c()(j.roleSkillSlot, j[`roleSkillSlot__${n}`], q.roleSkillSlot),
                                        }),
                                ),
                                Z &&
                                    o().createElement(
                                        'div',
                                        { className: W },
                                        o().createElement(V, { slotWidth: P, slotOffset: z, onAnimationEnd: I }),
                                    ),
                            );
                        },
                    );
                var ma = n(9152);
                const pa = (0, r.createContext)(null),
                    ba = () => {
                        const e = (0, r.useContext)(pa);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var ga = n(3028),
                    Ea = n(1922),
                    ha = n(2262),
                    va = n(5310),
                    fa = n(7198);
                const Aa = 'model.tankSetup.frontlineSetup',
                    Ca = {
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
                var Da = n(3457);
                const Sa = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let Fa, Ba;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(Fa || (Fa = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(Ba || (Ba = {}));
                const ya = o().memo(function ({ value: e, className: t, theme: n, size: a }) {
                        return o().createElement(
                            'div',
                            { className: c()(Sa.base, Sa[`base__${n}`], Sa[`base__${a}`], t) },
                            o().createElement('div', { className: Sa.label }, e),
                            o().createElement('div', { className: Sa.icon }),
                        );
                    }),
                    wa = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return o().createElement(
                            at.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, n),
                        );
                    }),
                    ka = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    xa = o().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const s = { pointsNeeded: e - (0, r.useContext)(Jr), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: c()(ka.base, t && ka.base__isAvailable) },
                            o().createElement(
                                wa,
                                s,
                                o().createElement(
                                    'div',
                                    { className: ka.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: ka.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(ya, { value: e, theme: t ? Ba.Brown : Ba.Red, size: Fa.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ka.actions },
                                o().createElement(
                                    wa,
                                    s,
                                    o().createElement(
                                        Da.u5,
                                        {
                                            size: Da.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: c()(ka.purchaseButton, ka.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    Da.u5,
                                    { size: Da.qE.medium, type: Da.L$.secondary, mixClass: ka.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function Ta() {
                    return (
                        (Ta =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ta.apply(this, arguments)
                    );
                }
                const Ia = () => {
                        const e = (0, Ea.GS)(),
                            t = (0, r.useContext)(Jr),
                            n = ve(Aa),
                            a = n.isTypeSelected,
                            s = n.vehicleType,
                            u = n.onChangeApplyAbilitiesToTypeSettings,
                            i = n.onDealConfirmed,
                            l = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = ve(`${Aa}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            g = m.canCancel,
                            E = (0, L.BN)(s),
                            h = (0, r.useCallback)(() => u(), [u]),
                            v = (0, r.useCallback)(() => i(), [i]),
                            f = (0, r.useCallback)(() => l(), [l]),
                            A = (0, r.useCallback)(() => d(), [d]),
                            C = c()(Ca.base, e && Ca[`base__${e}`]),
                            D = c()(Ca.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            S = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: E
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(E)})`
                                        : '',
                                }),
                                [E],
                            ),
                            F = (0, r.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: Ca.vehicleIcon, style: S }),
                                    vehicle: R.strings.menu.classes.short.$dyn(E),
                                }),
                                [S, E],
                            ),
                            B = De('ShowAbilitiesButton', Ce),
                            y = (0, r.useRef)(_),
                            k = (0, r.useRef)(t);
                        (0, r.useEffect)(() => {
                            (y.current = _), (k.current = t);
                        }, [_, t]),
                            (0, r.useEffect)(() => {
                                B && B.runTrigger(!0);
                            }, [B]);
                        const x = De('ApplyAbilitiesToTypeCheckbox', Ce);
                        (0, r.useEffect)(() => {
                            x && x.runTrigger(!0);
                        }, [x]);
                        const T = tt(We, { item: Ve.AbilitiesCheckboxTooltip, parentScreen: Ze.SetupView }),
                            I = _ || y.current,
                            N = I > 0 && t === k.current,
                            O = !N && b;
                        return o().createElement(
                            'div',
                            { className: C },
                            O &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        q.i,
                                        Ta(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(E) },
                                            T,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Ca.checkBoxZone },
                                            o().createElement(
                                                ha.XZ,
                                                { isChecked: a, onChange: h, type: ha.Rh.main, size: ha.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: Ca.checkBoxLabel },
                                                    o().createElement(oe, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                va.f,
                                { when: !0, canAccept: N || O },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    N &&
                                        o().createElement(xa, {
                                            price: I,
                                            isAvailable: t >= I,
                                            onPurchase: A,
                                            onCancel: f,
                                        }),
                                    O &&
                                        o().createElement(fa.Z, {
                                            applyBtnString: a ? w.qZ : w.k4,
                                            isDisabled: p,
                                            canCancel: g,
                                            onCancel: f,
                                            onConfirm: v,
                                        }),
                                ),
                            ),
                        );
                    },
                    Na = (e, t, n) => (n < e ? e : n > t ? t : n);
                function Ra(e, t, n = []) {
                    const a = (0, r.useRef)(0),
                        s = (0, r.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, r.useEffect)(() => s, [s]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, u),
                        s,
                    ];
                }
                function Oa(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return La(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return La(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function La(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ma(e, t, n) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let s,
                                    u = !1,
                                    i = 0;
                                function r() {
                                    s && clearTimeout(s);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function _() {
                                        (i = Date.now()), n.apply(l, o);
                                    }
                                    u ||
                                        (a && !s && _(),
                                        r(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (s = setTimeout(
                                                  a
                                                      ? function () {
                                                            s = void 0;
                                                        }
                                                      : _,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (o.cancel = function () {
                                        r(), (u = !0);
                                    }),
                                    o
                                );
                            })(n, e),
                        t,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                var Pa = n(7030);
                let $a;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })($a || ($a = {}));
                const Ha = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ja = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                u = a[1];
                            return u <= s ? 0 : Na(s, u, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Ha : c,
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                p = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        s = (e, ...n) => {
                                            for (var a, s = Oa(t(e).values()); !(a = s()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, r.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = Ma(
                                    () => {
                                        u.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Pa.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), p.trigger('change', e), i && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                v = (0, r.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = E.scrollPosition.get(),
                                            u = (null != (a = E.scrollPosition.goal) ? a : 0) - s;
                                        return o(e, t * n + u + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: o(a, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, E.scrollPosition],
                                ),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, _.step),
                                            u = v(t, e, a);
                                        f(u);
                                    },
                                    [f, v, _.step],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            d.current && p.trigger('mouseWheel', e, E.scrollPosition, t(d.current));
                                    },
                                    [E.scrollPosition, A, p],
                                ),
                                D = P(
                                    () =>
                                        (0, k.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (f(o(e, E.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [f, E.scrollPosition.goal],
                                ),
                                S = I(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, E.scrollPosition.goal);
                                    t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: E,
                                    recalculateContent: S,
                                    events: { on: p.on, off: p.off },
                                }),
                                [E.scrollPosition, f, A, p.off, p.on, S, C, h, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    za = ja({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $a.Next : $a.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ga = 'HorizontalBar_base_49',
                    Wa = 'HorizontalBar_base__nonActive_82',
                    Za = 'HorizontalBar_leftButton_5f',
                    Va = 'HorizontalBar_rightButton_03',
                    Ua = 'HorizontalBar_track_0d',
                    qa = 'HorizontalBar_thumb_fd',
                    Xa = 'HorizontalBar_rail_32',
                    Ka = 'disable',
                    Ya = { pending: !1, offset: 0 },
                    Ja = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qa = () => {},
                    es = (e, t) => Math.max(20, e.offsetWidth * t),
                    ts = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Ja, onDrag: a = Qa }) => {
                        const s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, r.useState)(Ya),
                            b = p[0],
                            g = p[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / s),
                                    o = Na(0, 1, u / (s - a)),
                                    c = (t.offsetWidth - es(t, r)) * o;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (i.current && l.current && _.current && d.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Ka), void l.current.classList.remove(Ka);
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ka), void l.current.classList.add(Ka);
                                            var t, n;
                                            i.current.classList.remove(Ka), l.current.classList.remove(Ka);
                                        }
                                    })(c);
                            },
                            v = I(() => {
                                (() => {
                                    const t = d.current,
                                        n = _.current,
                                        a = e.getWrapperSize(),
                                        u = e.getContainerSize();
                                    if (!(u && t && a && n)) return;
                                    const i = Math.min(1, a / u);
                                    (t.style.width = `${es(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === i ? s.current.classList.add(Wa) : s.current.classList.remove(Wa));
                                })(),
                                    h();
                            });
                        (0, r.useEffect)(() => (0, k.v)(v)),
                            (0, r.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Qa;
                                        const a = () => {
                                            n(), (n = (0, k.v)(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!b.pending) return;
                                const t = u.O.client.events.mouse.move(([t, n]) => {
                                        var s;
                                        const u = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!u || !i) return;
                                        const r = _.current,
                                            o = d.current;
                                        if (!r || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - b.offset - r.getBoundingClientRect().x,
                                            c = (l / r.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    n = u.O.client.events.mouse.up(() => {
                                        t(), E(Ya);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, b.offset, b.pending, a, E]);
                        const f = Ra((t) => e.applyStepTo(t), m, [e]),
                            A = f[0],
                            C = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ka) || (0, ut.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(Ga, t.base), ref: s, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(Za, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) ||
                                        0 !== e.button ||
                                        ((0, ut.G)('play'), A($a.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(Ua, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, ut.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        s = e.contentRef.current;
                                                    if (!a || !s) return;
                                                    const u = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + u * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? $a.Prev : $a.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: d, className: c()(qa, t.thumb) }),
                                o().createElement('div', { className: c()(Xa, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(Va, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) ||
                                        0 !== e.button ||
                                        ((0, ut.G)('play'), A($a.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    ns = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    as = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: u,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(ns.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(ns.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(ns.defaultScrollArea, s) },
                                o().createElement(ss, { className: i, api: m, classNames: u }, e),
                            ),
                            o().createElement(ts, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ss = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, r.useEffect)(() => (0, k.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(ns.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: c()(ns.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(ns.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (ss.Bar = ts), (ss.Default = as);
                const us = ja({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $a.Next : $a.Prev),
                    }),
                    is = 'VerticalBar_base_f3',
                    rs = 'VerticalBar_base__nonActive_42',
                    os = 'VerticalBar_topButton_d7',
                    ls = 'VerticalBar_bottomButton_06',
                    cs = 'VerticalBar_track_df',
                    _s = 'VerticalBar_thumb_32',
                    ds = 'VerticalBar_rail_43',
                    ms = 'disable',
                    ps = () => {},
                    bs = { pending: !1, offset: 0 },
                    gs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Es = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    hs = (e, t) => Math.max(20, e.offsetHeight * t),
                    vs = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = gs, onDrag: a = ps }) => {
                        const s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, r.useState)(bs),
                            b = p[0],
                            g = p[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = I(() => {
                                const t = d.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const i = Math.min(1, a / u);
                                return (
                                    (t.style.height = `${hs(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 === i ? s.current.classList.add(rs) : s.current.classList.remove(rs)),
                                    i
                                );
                            }),
                            v = I(() => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / s),
                                    o = Na(0, 1, u / (s - a)),
                                    c = (t.offsetHeight - hs(t, r)) * o;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (i.current && l.current && _.current && d.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(ms), void l.current.classList.remove(ms);
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(ms), void l.current.classList.add(ms);
                                            var t, n;
                                            i.current.classList.remove(ms), l.current.classList.remove(ms);
                                        }
                                    })(c);
                            }),
                            f = I(() => {
                                Es(e, () => {
                                    h(), v();
                                });
                            });
                        (0, r.useEffect)(() => (0, k.v)(f)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Es(e, () => {
                                        v();
                                    });
                                };
                                let n = ps;
                                const a = () => {
                                    n(), (n = (0, k.v)(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!b.pending) return;
                                const t = u.O.client.events.mouse.up(() => {
                                        E(bs);
                                    }),
                                    n = u.O.client.events.mouse.move(([t]) => {
                                        Es(e, (n) => {
                                            const s = _.current,
                                                u = d.current,
                                                i = e.getContainerSize();
                                            if (!s || !u || !i) return;
                                            const r = t.screenY - b.offset - s.getBoundingClientRect().y,
                                                o = (r / s.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: u, thumbOffset: r, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, b.offset, b.pending, a, E]);
                        const A = Ra((t) => e.applyStepTo(t), m, [e]),
                            C = A[0],
                            D = A[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const S = (e) => {
                            e.target.classList.contains(ms) || (0, ut.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(is, t.base), ref: s, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(os, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ms) ||
                                        0 !== e.button ||
                                        ((0, ut.G)('play'), C($a.Next));
                                },
                                ref: i,
                                onMouseEnter: S,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(cs, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, ut.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Es(e, (a) => {
                                                            if (!a) return;
                                                            const s = n(e),
                                                                u = e.clampPosition(a, a.scrollTop + s * t);
                                                            e.applyScroll(u);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? $a.Prev : $a.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: S,
                                },
                                o().createElement('div', { ref: d, className: c()(_s, t.thumb) }),
                                o().createElement('div', { className: c()(ds, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(ls, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ms) ||
                                        0 !== e.button ||
                                        ((0, ut.G)('play'), C($a.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    fs = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    As = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: u,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(fs.base, e.base) });
                            }, [a]),
                            m = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(fs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.area, s) },
                                o().createElement(Cs, { className: u, classNames: i, api: m }, e),
                            ),
                            o().createElement(vs, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Cs = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, r.useEffect)(() => (0, k.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fs.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Cs.Default = As;
                const Ds = { Vertical: s, Horizontal: a };
                var Ss = n(8045);
                const Fs = 'ExtendedText_base_71',
                    Bs = 'ExtendedText_base__zeroPadding_25',
                    ys = 'ExtendedText_base__isTruncationAvailable_5b',
                    ws = 'ExtendedText_truncated_97',
                    ks = 'ExtendedText_truncated__hide_31',
                    xs = 'ExtendedText_unTruncated_b8';
                let Ts, Is, Ns;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Ts || (Ts = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Is || (Is = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ns || (Ns = {}));
                const Rs = { [Ns.NBSP]: Ts.NoBreakSymbol, [Ns.ZWNBSP]: Ts.NoBreakSymbol, [Ns.NEW_LINE]: Ts.LineBreak },
                    Os = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ls = {
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
                    Ms = 'renderers_noBreakWrapper_10',
                    Ps = 'renderers_lineBreak_b5',
                    $s = 'renderers_newLine_bd',
                    Hs = 'renderers_word_f3',
                    js = (e) => ({ color: `#${e}` }),
                    zs = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Ls[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: c()(Hs, Ls[a]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: Hs, style: js(a) },
                                      e,
                                  )
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType, className: Hs }, e);
                    },
                    Gs = {
                        [Ts.Word]: zs,
                        [Ts.NoBreakSymbol]: zs,
                        [Ts.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Ts.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Ts.LineBreak, className: Ps }),
                        [Ts.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Ts.NewLine, className: $s }, e),
                        [Ts.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Ts.NoBreakWrapper, className: Ms },
                                e,
                            ),
                    },
                    Ws = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, u) => {
                                const i = `${n}_${u}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = Ws(e, Gs[t], i);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    Zs = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            s = Gs[a],
                                            u = Ws(e, s, t);
                                        return (
                                            a === Ts.NoBreakWrapper
                                                ? n.push(s({ elementList: u, textBlock: e, key: `${t}` }))
                                                : n.push(...u),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    Vs = (e, t, n, a) => {
                        let s = t.exec(e),
                            u = 0;
                        for (; s; ) u !== s.index && n(e.slice(u, s.index)), a(s), (u = t.lastIndex), (s = t.exec(e));
                        u !== e.length && n(e.slice(u));
                    },
                    Us = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    qs = (e) => {
                        const t = [];
                        return (
                            Vs(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(Us) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Xs = Os
                        ? (e) => {
                              const t = [];
                              return (
                                  Vs(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...qs(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let s = 0;
                              for (; n; ) a.push(e.slice(s, t.lastIndex)), (s = t.lastIndex), (n = t.exec(e));
                              return s !== e.length && a.push(e.slice(s)), a;
                          },
                    Ks = (e, t = '') => {
                        const n = [];
                        return (
                            Vs(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ts.Word, colorTag: t, childList: Xs(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        s = Rs[a.charAt(0)];
                                    s === Ts.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ts.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Ts.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: s, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    Ys = (e, t, n = '') => {
                        const a = [];
                        return (
                            Vs(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Ks(e, n));
                                },
                                (e) => {
                                    const s = e[1],
                                        u = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof u || 'number' == typeof u
                                        ? a.push(...Ks(String(u), n))
                                        : a.push({ blockType: Ts.Binding, colorTag: n, childList: [u] });
                                },
                            ),
                            a
                        );
                    },
                    Js = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ts.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Ts.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    Qs = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ts.NoBreakSymbol
                                        ? ((n = !0), t.push(...Js(t.pop(), e)))
                                        : (n ? t.push(...Js(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    Vs(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...Ys(e, t));
                                        },
                                        (e) => {
                                            n.push(...Ys(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, L.Eg)((0, L.z4)(e)), t),
                        );
                        return Zs(n);
                    },
                    eu = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    tu = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    nu = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = tu(e, t),
                            s = e.textContent.length,
                            u = e.offsetWidth / s,
                            i = Math.ceil(a / u);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / u);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const r = Math.max(n + i, 0);
                        return s < r ? [!1, 0] : [!0, r];
                    },
                    au = (e, t, n, a, s, u) => {
                        let i = -1,
                            r = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ts.LineBreak || c === Ts.NewLine || c === Ts.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = nu(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + u,
                                    p = t[l];
                                (r = o().cloneElement(p, p.props, m)), (i = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = au(e, d, e.length - 1, a, s, u),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (r = o().cloneElement(c, c.props, e, b)), (i = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [i, r];
                    },
                    su = (e, t, n, a = '...') => {
                        const s = [...t],
                            u = e.current;
                        if (!u) return [s, !1];
                        const i = n.height,
                            r = n.width,
                            o = u.lastElementChild;
                        if (!eu(o, i) && tu(o, r) <= 0) return [s, !1];
                        const l = u.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    eu(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(l, i);
                        if (c < 0) return [s, !1];
                        const _ = au(l, s, c, r, a.length, a),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    uu = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: u = !1,
                            targetId: i,
                            justifyContent: l = Is.FlexStart,
                            alignContent: _ = Is.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, r.useRef)(null),
                                p = (0, r.useRef)({ height: 0, width: 0 }),
                                b = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = b[0],
                                E = b[1],
                                h = (0, r.useMemo)(() => Qs(e, a), [a, e]),
                                v = (0, r.useMemo)(() => {
                                    if (
                                        s &&
                                        g.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, s, i, e, g.isTruncated]),
                                f = (0, r.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = su(m, h, p.current, d),
                                            a = t[0],
                                            s = t[1];
                                        E({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                    },
                                    [n, d, h],
                                ),
                                A = (0, r.useMemo)(() => ({ justifyContent: l, alignContent: _ }), [_, l]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, r.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Ss.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, f, u),
                                o().createElement(
                                    'div',
                                    { className: c()(Fs, t, Bs, u && ys), style: A },
                                    o().createElement('div', { className: xs, ref: m }, h),
                                    o().createElement(
                                        na,
                                        { tooltipArgs: v },
                                        o().createElement(
                                            'div',
                                            { className: c()(ws, !g.isTruncateFinished && u && ks), style: A },
                                            g.isTruncateFinished && u ? g.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    iu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ru = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ou = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    lu = (e) =>
                        ou
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = ru.length - 1; n >= 0; n--)
                                      for (; e >= ru[n]; ) (t += iu[n]), (e -= ru[n]);
                                  return t;
                              })(e),
                    cu = (e, t) => e.split(',').includes(t),
                    _u = {
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
                let du, mu;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(du || (du = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(mu || (mu = {}));
                const pu = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: s,
                        tags: u = '',
                        size: i = du.extraSmall,
                        type: r = mu.colored,
                        className: l,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, L.BN)(a)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    _u.base,
                                    _u[`base__size${(0, L.e)(i)}`],
                                    _u[`base__type${(0, L.e)(r)}`],
                                    l,
                                ),
                            },
                            o().createElement('div', { className: c()(_u.level, null == _ ? void 0 : _.level) }, lu(s)),
                            o().createElement('div', {
                                className: c()(
                                    _u.type,
                                    e && _u[`type__elite${(0, L.e)(i)}`],
                                    _u[`type__${i}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: { backgroundImage: `url(${p})` },
                            }),
                            cu(u, 'premiumIGR') && o().createElement('div', { className: _u.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: c()(_u.name, null == _ ? void 0 : _.name) },
                                d ? n : t,
                            ),
                        );
                    },
                    bu = 'Aside_base_a5',
                    gu = 'Aside_content_24',
                    Eu = 'Aside_tankDetails_35',
                    hu = 'Aside_description_f0',
                    vu = 'Aside_title_6f',
                    fu = 'Aside_category_c0',
                    Au = 'Aside_text_ca',
                    Cu = 'Aside_status_91',
                    Du = 'Aside_status__activated_4e',
                    Su = 'Aside_statusDescrBlock_2c',
                    Fu = 'Aside_statusDescription_75',
                    Bu = 'Aside_infoIcon_96',
                    yu = 'CategoryTitle_base_f3',
                    wu = 'CategoryTitle_title_9d',
                    ku = 'CategoryTitle_icon_48';
                let xu;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(xu || (xu = {}));
                const Tu = (0, r.memo)(({ category: e, iconTheme: t = xu.Small, className: n }) => {
                        const a = (0, r.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: c()(yu, n) },
                            o().createElement('div', { className: ku, style: a }),
                            o().createElement('div', { className: wu }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Iu = 'InfoIcon_base_83',
                    Nu = 'InfoIcon_icon_47',
                    Ru = (0, r.memo)(({ item: e, className: t }) => {
                        const n = nt(e, Ze.SetupView),
                            a = n[0],
                            s = n[1];
                        return o().createElement(
                            'div',
                            { className: c()(Iu, t) },
                            o().createElement(
                                at.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: s,
                                },
                                o().createElement('div', { className: Nu }),
                            ),
                        );
                    }),
                    Ou = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Lu;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Lu || (Lu = {}));
                const Mu = (0, r.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: s }) => {
                        const u = t + 1,
                            i = (0, r.useMemo)(() => lu(u), [u]),
                            l = ((e) => {
                                const t = Je(e, Xe),
                                    n = (0, r.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Ye(e));
                                        },
                                        [t],
                                    );
                                return (e) => n(e);
                            })(We),
                            _ = (0, r.useCallback)(() => {
                                a(t),
                                    ut.$.playClick(),
                                    l({
                                        item: Ve.SkillLevelTab,
                                        action: Ue.Click,
                                        parentScreen: Ze.SetupView,
                                        info: String(u),
                                    });
                            }, [t, u, a, l]),
                            d = (0, r.useCallback)(() => ut.$.playHighlight(), []);
                        return o().createElement(
                            'div',
                            { className: c()(Ou.base, e && Ou.base__active, s), onClick: _, onMouseEnter: d },
                            o().createElement('div', { className: Ou.label }, i),
                            n !== Lu.None && o().createElement('div', { className: c()(Ou.arrow, Ou[`arrow__${n}`]) }),
                        );
                    }),
                    Pu = {
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
                    $u = (0, r.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            s = Number(t.value),
                            u = Number(n.value),
                            i = (0, r.useMemo)(() => s < u, [s, u]),
                            l = (0, r.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(s)) {
                                    const e = a - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, a]),
                            _ = (0, r.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, L.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: de.Z5.getRealFormat(Math.abs(l), de.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: Pu.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, r.useMemo)(() => {
                                const e = !isNaN(s),
                                    n = e && s < 0 ? '-' : '';
                                return {
                                    sign: t.sign || n,
                                    value: e ? de.Z5.getNumberFormat(Math.abs(s), de.B3.GOLD) : t.value,
                                };
                            }, [t, s]),
                            m = (0, r.useMemo)(() => (i ? { width: ((100 * s) / u).toString() + '%' } : {}), [i, s, u]),
                            p = (0, r.useMemo)(
                                () => (i ? { width: ((100 * (a - s)) / u).toString() + '%' } : {}),
                                [i, s, a, u],
                            );
                        return o().createElement(
                            'div',
                            { className: Pu.base },
                            o().createElement(
                                'div',
                                { className: Pu.valueWrapper },
                                l &&
                                    o().createElement(uu, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: Pu.diff,
                                        alignContent: Is.FlexEnd,
                                    }),
                                o().createElement(uu, { text: e.valueTemplate, binding: d, classMix: Pu.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: Pu.labelWrapper },
                                o().createElement('div', { className: Pu.label }, t.name),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: Pu.progress },
                                    o().createElement('div', { className: Pu.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: Pu.progressValue, style: m },
                                        o().createElement('div', { className: Pu.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: Pu.progressDelta, style: p }),
                                    o().createElement('div', { className: c()(Pu.progressDot, Pu.progressDot__end) }),
                                ),
                        );
                    }),
                    Hu = 'Levels_base_a9',
                    ju = 'Levels_tabsWrapper_a0',
                    zu = 'Levels_tabsBorder_cf',
                    Gu = 'Levels_tabsBorder__top_8f',
                    Wu = 'Levels_tabsBorder__bottom_82',
                    Zu = 'Levels_tabsLabel_60',
                    Vu = 'Levels_tabs_8f',
                    Uu = 'Levels_tab_c3',
                    qu = 'Levels_caret_7e',
                    Xu = 'Levels_params_d6',
                    Ku = 'Levels_infoIcon_68',
                    Yu = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            s = n[0].value.params,
                            u = n[n.length - 1].value.params,
                            i = n[t].value,
                            l = (0, r.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, r.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: Hu },
                            o().createElement(
                                'div',
                                { className: ju },
                                o().createElement('div', { className: c()(zu, Gu) }),
                                o().createElement('div', { className: c()(zu, Wu) }),
                                o().createElement(Ru, { item: Ve.AbilityLevelsTooltip, className: Ku }),
                                o().createElement(
                                    'div',
                                    { className: Zu },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Vu },
                                    n.map(({ value: e }, n) => {
                                        const s = n < t ? Lu.Active : Lu.Default;
                                        return o().createElement(Mu, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? s : Lu.None,
                                            onClick: _,
                                            classMix: Uu,
                                        });
                                    }),
                                    o().createElement('div', { className: qu, style: l }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Xu },
                                i.params.map(({ value: e }, t) =>
                                    o().createElement($u, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: u[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Ju = (0, r.memo)(function ({ className: e }) {
                        const t = us(),
                            n = ve('model.vehicleInfo'),
                            a = ve(`${Aa}`).setCurrentSlotDetailsLevel,
                            s = ve(`${Aa}.details`),
                            u = s.name,
                            i = s.category,
                            l = s.selectedLevel,
                            _ = s.description,
                            d = s.levelInfos,
                            m = s.isActivated,
                            p = m
                                ? R.strings.tank_setup.abilities.details.status.unlocked()
                                : R.strings.tank_setup.abilities.details.status.locked(),
                            b = m
                                ? R.strings.tank_setup.abilities.details.description.unlocked()
                                : R.strings.tank_setup.abilities.details.description.locked(),
                            g = (0, r.useCallback)((e) => a({ level: e }), [a]);
                        return (
                            (0, r.useEffect)(() => (0, k.v)(() => (0, k.v)(t.recalculateContent)), [t]),
                            o().createElement(
                                'div',
                                { className: c()(bu, e) },
                                o().createElement(
                                    Ds.Vertical.Area.Default,
                                    { api: t },
                                    o().createElement(
                                        'div',
                                        { className: gu },
                                        o().createElement('div', { className: Eu }, o().createElement(pu, n)),
                                        o().createElement(
                                            'div',
                                            { className: hu },
                                            o().createElement('div', { className: vu }, u),
                                            o().createElement(Tu, { category: i, className: fu }),
                                            o().createElement('div', { className: Au }, _),
                                        ),
                                        o().createElement(Yu, { onLevelChanged: g, selectedLevel: l, levelInfos: d }),
                                        o().createElement('div', { className: c()(Cu, m && Du) }, p),
                                        o().createElement(
                                            'div',
                                            { className: Su },
                                            o().createElement('div', { className: Bu }),
                                            o().createElement(uu, { text: b, classMix: Fu }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Qu = 'BattleAbilitiesSetup_aside_bd';
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
                const ei = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    ti = (e) => {
                        const t = (0, r.useState)(ei(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, r.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        ei(e ? e.current : null) ? a(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => () => a(!1), [e]),
                            n
                        );
                    },
                    ni = 'ScrollableCards_base_e0',
                    ai = 'ScrollableCards_scroll_4b',
                    si = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, r.useState)(!1),
                            u = s[0],
                            i = s[1],
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            _ = (0, r.useRef)(!1),
                            d = (0, r.useRef)(''),
                            m = ti(l),
                            p = us();
                        (0, r.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = I(() => {
                                _.current && i(!0), p.events.off('rest', b);
                            }),
                            g = (0, r.useCallback)(() => {
                                _.current && i(!1);
                            }, []),
                            E = (0, r.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', b), p.applyScroll(n);
                                }
                            }, [b, p]);
                        (0, r.useEffect)(() => {
                            (0, k.v)(() => {
                                m &&
                                    (d.current === n
                                        ? E()
                                        : ((d.current = n),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              E(), _.current || (_.current = !0);
                                          })));
                            });
                        }, [m, n, E, t]),
                            (0, r.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, a]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: u,
                            onFinalAnimationDone: g,
                        };
                        return o().createElement(
                            'div',
                            { className: ni },
                            o().createElement(
                                'div',
                                { className: ai, ref: l },
                                o().createElement(Ds.Vertical.Default, { key: n, api: p }, (0, r.cloneElement)(e, h)),
                            ),
                        );
                    },
                    ui = (e, t) => {
                        const n = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                (t && !t(e)) || (n.current = e);
                            }, [t, e]),
                            n.current
                        );
                    };
                var ii = n(8613);
                Date.now(), ii.Ew.getRegionalDateTime, ii.Ew.getFormattedDateTime;
                de.Sw.instance;
                const ri = ui;
                var oi = n(4888),
                    li = n(1363);
                const ci = [
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
                function _i(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const di = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: de.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    mi = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            u = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            E = e.onShow,
                            h = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, ci);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            A = (0, r.useMemo)(() => (0, le.F)(), []).resId,
                            C = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (di(n, p, { isMouseEvent: !0, on: !0, arguments: _i(a) }, A),
                                    E && E(),
                                    (f.current.isVisible = !0));
                            }, [n, p, a, A, E]),
                            D = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        di(n, p, { on: !1 }, A),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1);
                                }
                            }, [n, p, A, h]),
                            S = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
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
                        return g
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((F = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), u && u(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), o && o(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), i && i(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    pi = ['children'];
                function bi() {
                    return (
                        (bi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        bi.apply(this, arguments)
                    );
                }
                const gi = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, pi);
                    return o().createElement(
                        mi,
                        bi(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                var Ei = n(5282);
                const hi = {
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
                    vi = 'DisabledAbilities_base_1d',
                    fi = 'DisabledAbilities_glow_75',
                    Ai = 'DisabledAbilities_line_54',
                    Ci = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: c()(vi, e) },
                            o().createElement('div', { className: fi }),
                            o().createElement('div', { className: Ai }),
                        );
                let Di;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster');
                })(Di || (Di = {}));
                const Si = 'Warning_base_4c',
                    Fi = 'Warning_glow_79',
                    Bi = 'Warning_line_df',
                    yi = 'Warning_icon_24',
                    wi = (e) => Object.values(Di).includes(e),
                    ki = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, r.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return o().createElement(
                            'div',
                            { id: e, className: Si },
                            o().createElement('div', { className: Fi }),
                            o().createElement('div', { className: Bi }),
                            o().createElement(
                                at.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: a,
                                    isEnabled: wi(t),
                                },
                                o().createElement('div', { className: yi }),
                            ),
                        );
                    },
                    xi = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: n,
                        contextMenuArgs: a,
                        imageSource: s,
                        overlayType: u,
                        highlightType: i,
                        isModernized: l,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: b,
                        isAbilitiesCard: g = !1,
                        isClickable: E = !0,
                        details: h,
                        options: v,
                        actions: f,
                        specializations: A,
                        extraImages: C,
                        onSlotClick: D,
                        shouldHandleMouseOver: S,
                        category: F,
                        onTooltipShow: B,
                        onTooltipHide: y,
                        lockReason: w,
                    }) => {
                        const k = (0, Ea.GS)(),
                            x = (0, r.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = x[0],
                            I = x[1],
                            N = (0, r.useState)(!1),
                            O = N[0],
                            L = N[1],
                            M = (0, r.useCallback)(() => {
                                !T.isActionsHovered && ut.$.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    S && L(!0);
                            }, [T.isActionsHovered, S]),
                            P = (0, r.useCallback)(() => {
                                S && L(!1);
                            }, [S]),
                            $ = (0, r.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, r.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            j = E && (!d || g),
                            z = (0, r.useCallback)(() => {
                                j && D && (ut.$.playClick(), D());
                            }, [D, j]),
                            G = T.isBaseHovered || T.isActionsHovered,
                            W = (0, r.useMemo)(() => {
                                let e = o().createElement(
                                    'div',
                                    { onMouseEnter: M, onMouseLeave: H, className: hi.hover, onClick: z },
                                    d && g && o().createElement(Ci, { className: hi.locked }),
                                );
                                return (
                                    n && (e = o().createElement(gi, { args: n, onShow: B, onHide: y }, e)),
                                    a && (e = o().createElement(Ut, { args: a }, e)),
                                    e
                                );
                            }, [d, g, M, H, z, n, a, B, y]),
                            Z = (0, r.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            V =
                                k === Ea.cJ.Large || k === Ea.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            U = (0, r.useMemo)(() => {
                                let e;
                                return (
                                    u && (e = l ? V.$dyn(`${u}_${_}_overlay`) : V.$dyn(`${u}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [V, u, l, _]),
                            q = (0, r.useMemo)(() => {
                                let e;
                                return i && (e = V.$dyn(`${i}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [V, i]),
                            X = (0, r.useMemo)(() => {
                                const e =
                                        (k === Ea.cJ.Large || k === Ea.cJ.Huge ? Ea.cJ.Large : Ea.cJ.Medium) + '_' + F,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [F, k]);
                        return o().createElement(
                            'div',
                            { className: hi.base },
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(
                                        hi.content,
                                        hi[`content__${k}`],
                                        G && E && !d && hi.content__hovered,
                                        !G && hi.content__out,
                                        p && hi.content__installed,
                                        m && hi.content__current,
                                        d && hi.content__disabled,
                                        !j && hi.content__nonclickable,
                                    ),
                                    onMouseLeave: P,
                                },
                                q &&
                                    o().createElement(
                                        'div',
                                        { className: hi.types },
                                        o().createElement('div', {
                                            className: c()(hi.highlight, hi[`highlight__${i}`]),
                                            style: q,
                                        }),
                                    ),
                                o().createElement('div', { className: hi.image, style: Z }, C),
                                d && o().createElement('div', { className: hi.disabled }),
                                X &&
                                    o().createElement('span', {
                                        className: c()(hi.category, hi[`category__${k}`]),
                                        style: X,
                                    }),
                                U &&
                                    o().createElement(
                                        'div',
                                        { className: hi.types },
                                        o().createElement('div', {
                                            className: c()(hi.overlay, hi[`overlay__${u}`]),
                                            style: U,
                                        }),
                                    ),
                                A && o().createElement('div', { className: hi.specialization }, A),
                                o().createElement(
                                    'div',
                                    { className: c()(hi.name, d && hi.name__disabled) },
                                    o().createElement(Ei.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, Ei.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && o().createElement('div', { className: hi.details }, h),
                                o().createElement('div', { className: c()(hi.options, d && hi.options__disabled) }, v),
                                W,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: $, onMouseLeave: H, className: hi.actions },
                                    S && f
                                        ? (0, r.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: O }))
                                        : f,
                                ),
                            ),
                            b &&
                                o().createElement(
                                    'div',
                                    { className: hi.locked },
                                    o().createElement(ki, { reason: w, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var Ti = n(8401),
                    Ii = n(3934);
                const Ni = 'Availability_base_51',
                    Ri = () => o().createElement('div', { className: Ni }),
                    Oi = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Li = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            let u = null;
                            return (
                                (u = n
                                    ? o().createElement(Ri, null)
                                    : e || (a && 0 === e)
                                      ? o().createElement(Ii.K, { itemsInStorage: e })
                                      : t && o().createElement(Ti.t, t)),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Oi.base,
                                            Oi['base__' + (s ? 'shown' : 'hidden')],
                                            (n || e || (a && 0 === e)) && Oi.base__visually,
                                        ),
                                    },
                                    u,
                                )
                            );
                        },
                    ),
                    Mi = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Pi = n(8750);
                const $i = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Hi = ({ level: e }) => {
                        const t = (0, Ea.GS)();
                        if (!e) return null;
                        const n = c()($i.base, t && $i[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: n },
                            o().createElement(Pi.a, {
                                type: Pi.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    ji = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: s,
                            onSlotAction: u,
                            intCD: i,
                            level: l,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: g,
                        }) => {
                            const E = (0, Ea.GS)(),
                                h = t > -1,
                                v = `${i}-ability`,
                                f = (0, r.useMemo)(() => ({ intCD: i, slotType: w.YN, fieldType: 0 }), [i]),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        u({ actionType: e, intCD: i, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [u, i, n],
                                ),
                                C = (0, r.useCallback)(() => {
                                    A(oi.eC);
                                }, [A]),
                                D = (0, r.useContext)(Jr),
                                S = (0, r.useMemo)(() => {
                                    const e = c()(Mi.bonuses, E && Mi[`base__${E}`]),
                                        t = D >= g ? Ba.Brown : Ba.Red;
                                    return o().createElement(
                                        'div',
                                        { className: Mi.base },
                                        o().createElement(li._, {
                                            parentId: v,
                                            mediaSize: E,
                                            classMix: e,
                                            classColorMix: Mi.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(ya, {
                                                value: g,
                                                theme: t,
                                                size: Fa.Small,
                                                className: Mi.points,
                                            }),
                                    );
                                }, [E, _, v, m, g, D]),
                                F =
                                    ((0, r.useMemo)(() => o().createElement(Hi, { level: l }), [l]),
                                    (0, r.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return o().createElement(xi, {
                                parentId: v,
                                name: e,
                                tooltipArgs: f,
                                imageSource: F,
                                isCurrent: a,
                                isActive: h,
                                details: S,
                                isDisabled: m && D < g,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: C,
                                options: o().createElement(Li, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    zi = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Gi() {
                    return (
                        (Gi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Gi.apply(this, arguments)
                    );
                }
                const Wi = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = ve(Aa),
                            s = a.categoriesOrder,
                            u = a.onSlotAction,
                            i = a.slots,
                            l = ve('model.ammunitionPanel'),
                            _ = l.onSectionSelect,
                            d = l.selectedSection,
                            m = (0, Ea.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = i.map(({ value: e }) => e),
                            g = (0, r.useMemo)(() => {
                                if (m === Ea.cJ.Tiny)
                                    return b.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                b.map((t) => {
                                    t.category in e || (e[t.category] = []), e[t.category].push(t);
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    });
                                const t = [];
                                do {
                                    p.map((n) => {
                                        const a = e[n].shift();
                                        a && t.push(a);
                                    });
                                } while (t.length < b.length);
                                return t;
                            }, [b, p, m]),
                            E = (0, r.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), u(e);
                                },
                                [_, u, d],
                            ),
                            h = g.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    s = a > -1 && t === a;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: s ? e : null, className: c()(zi.card, m && zi[`card__${m}`]) },
                                    o().createElement(ji, Gi({}, n, { isCurrent: s, onSlotAction: E })),
                                );
                            }),
                            v = c()(zi.base, m && zi[`base__${m}`], n && zi.base__disabled);
                        return o().createElement('div', { className: v }, h);
                    },
                    Zi = 'BattleAbilitiesNoSelected_base_06',
                    Vi = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Ui = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    qi = 'BattleAbilitiesNoSelected_title_20',
                    Xi = 'BattleAbilitiesNoSelected_title__small_65',
                    Ki = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Yi = 'BattleAbilitiesNoSelected_button_bf',
                    Ji = R.strings.tank_setup.abilities.noSelected,
                    Qi = () => {
                        const e = (0, Ea.GS)(),
                            t = ve(Aa, he.None).showInfoPage,
                            n = (0, r.useMemo)(() => e === Ea.cJ.Small || e === Ea.cJ.Tiny, [e]),
                            a = (0, r.useMemo)(() => (e === Ea.cJ.Tiny ? Da.qE.small : Da.qE.medium), [e]),
                            s = (0, r.useCallback)(() => t(), [t]),
                            u = c()(Vi, n && Ui),
                            i = c()(qi, n && Xi);
                        return o().createElement(
                            'div',
                            { className: Zi, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: u }),
                            o().createElement('div', { className: i }, Ji.title()),
                            o().createElement('div', { className: Ki }, Ji.subTitle()),
                            o().createElement(Da.u5, { size: a, mixClass: Yi, onClick: s }, Ji.toReserves()),
                        );
                    },
                    er = 'Content_base_d8',
                    tr = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: er },
                            e
                                ? o().createElement(
                                      si,
                                      { selectedSlotId: t },
                                      o().createElement(Wi, { selectedSlot: t }),
                                  )
                                : o().createElement(Qi, null),
                        );
                    }),
                    nr = 'Tabs_base_d9',
                    ar = 'Tabs_base__vertical_c0',
                    sr = 'Tabs_list_0a',
                    ur = 'Tabs_list__centered_dc',
                    ir = 'Tabs_wrapper_2d',
                    rr = 'Tabs_wrapper__centered_d8',
                    or = 'Tabs_wrapper__vertical_a5';
                function lr() {
                    return (
                        (lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        lr.apply(this, arguments)
                    );
                }
                const cr = 'tabs-role';
                var _r;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(_r || (_r = {}));
                class dr extends r.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[_r.TAB]);
                                return t && t.props[_r.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[cr] === _r.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        (e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[_r.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((u = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(u).length === Object.keys(i).length &&
                                    Object.keys(u).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && u[e] === i[e],
                                    )
                                ));
                        var u, i;
                        const r = c()(
                                ir,
                                n.props.className,
                                this.props.isTabsCentered && rr,
                                this.props.isVerticalTabs && or,
                            ),
                            l = c()(sr, this.props.isTabsCentered && ur);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[cr] === _r.CONTENT)
                                        return e.props[_r.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                u = s.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[_r.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][_r.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, ut.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, ut.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        o().createElement(
                                            'div',
                                            { className: l, key: _r.LIST },
                                            o().createElement('div', lr({}, n.props, { className: r }), u),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(nr, this.props.isVerticalTabs && ar);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                dr.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const mr = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const br = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            s = e.onClickSound,
                            u = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, mr);
                        return o().createElement(
                            'div',
                            pr({ className: n }, r),
                            o().createElement(
                                dr,
                                { activeKey: a, onClickSound: s, onMouseEnterSound: u, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    gr = ({ children: e, component: t, props: n = {} }) => (t ? o().createElement(t, n, e) : e || null),
                    Er = 'Tab_base_dd',
                    hr = 'Tab_base__first_4a',
                    vr = 'Tab_base__last_96',
                    fr = 'Tab_base__medium_ec',
                    Ar = 'Tab_base__active_5d',
                    Cr = 'Tab_divider_ca',
                    Dr = 'Tab_divider__show_62',
                    Sr = 'Tab_state_6c',
                    Fr = 'Tab_stateHighlight_1e',
                    Br = 'Tab_stateBorder_64',
                    yr = 'Tab_stateBorder__positionLeft_e7',
                    wr = 'Tab_stateBorder__positionRight_db',
                    kr = 'Tab_counter_e1',
                    xr = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const Ir = (0, r.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            u = e.isLast,
                            i = void 0 !== u && u,
                            r = e.isMedium,
                            l = void 0 !== r && r,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            g = void 0 === b ? {} : b,
                            E = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    u = Object.keys(e);
                                for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, xr);
                        return o().createElement(
                            gr,
                            g,
                            o().createElement(
                                'div',
                                Tr({ className: c()(Er, { [Ar]: n }, { [hr]: s }, { [vr]: i }, { [fr]: l }) }, h),
                                o().createElement(
                                    'span',
                                    { className: Sr },
                                    o().createElement('span', { className: Fr }),
                                    o().createElement('span', { className: c()(Br, yr) }),
                                    o().createElement('span', { className: c()(Br, wr) }),
                                ),
                                p,
                                !i && !n && o().createElement('span', { className: c()(Cr, Dr) }),
                                (Boolean(E) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: kr },
                                        o().createElement(ie, { value: E, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Nr = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Rr = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Or() {
                    return (
                        (Or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Or.apply(this, arguments)
                    );
                }
                const Lr = (e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        u = void 0 === s || s,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Rr);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, r.useCallback)(() => {
                            ut.$.playClick(), a({ name: t });
                        }, [a, t]),
                        _ = (0, r.useMemo)(() => ({ name: t }), [t]),
                        d = M(['tab'], Nr);
                    return o().createElement(
                        at.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: u,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Ir,
                                Or({}, i, { isNotified: Boolean(n), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const Pr = ({ tabs: e, selectedTabName: t, handleTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const s = De('ModernizedSetupTabHintZone', Ae);
                        return (
                            (0, r.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            o().createElement(
                                br,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': _r.LIST },
                                    e.map(({ value: e }) =>
                                        o().createElement(
                                            Lr,
                                            Mr(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: n,
                                                    'tabs-role': _r.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: a,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    $r = {
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
                    Hr = ({ title: e, children: t, tabProps: n }) => {
                        const a = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()($r.base, a && $r[`base__${a}`]) },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: c()($r.title, a && $r[`title__${a}`]) }, e),
                                n &&
                                    o().createElement(
                                        'div',
                                        { className: c()($r.tabs, a && $r[`tabs__${a}`]) },
                                        o().createElement(Pr, n),
                                    ),
                            ),
                            t,
                        );
                    };
                var jr = n(8089);
                const zr = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let Gr;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(Gr || (Gr = {}));
                const Wr = o().memo(function ({ id: e, theme: t, className: n }) {
                        const a = ve(Aa, he.None).showInfoPage;
                        return o().createElement(
                            'div',
                            { id: e, className: c()(zr.base, zr[`base__${t}`], n) },
                            o().createElement(jr.A, {
                                caption:
                                    t === Gr.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => a(),
                                classNames: { caption: t === Gr.OnlyIcon ? zr.hidden : '' },
                            }),
                        );
                    }),
                    Zr = 'Header_base_aa',
                    Vr = 'Header_points_d5',
                    Ur = 'Header_content_2c',
                    qr = 'Header_textWrapper_63',
                    Xr = 'Header_text_dc',
                    Kr = 'Header_infoButton_5e',
                    Yr = o().memo(function () {
                        const e = E().mediaWidth,
                            t = (0, r.useContext)(Jr),
                            n = (0, r.useMemo)(
                                () => ({
                                    points: o().createElement(ya, {
                                        theme: Ba.Brown,
                                        size: Fa.Normal,
                                        value: t,
                                        className: Vr,
                                    }),
                                }),
                                [t],
                            ),
                            a = nt(Ve.SkillPointsTooltip, Ze.SetupView),
                            s = a[0],
                            u = a[1];
                        return o().createElement(
                            'div',
                            { className: Zr },
                            o().createElement(
                                Hr,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                o().createElement(
                                    'div',
                                    { className: Ur },
                                    e <= m.j.medium.width &&
                                        o().createElement(Wr, {
                                            id: 'scenarios_btn_small',
                                            theme: Gr.OnlyIcon,
                                            className: Kr,
                                        }),
                                    o().createElement(
                                        q.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: s,
                                            onMouseLeave: u,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: qr },
                                            o().createElement(uu, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: n,
                                                classMix: Xr,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Jr = o().createContext(0),
                    Qr = () => {
                        const e = ve(Aa),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = ve('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            Jr.Provider,
                            { value: n },
                            o().createElement(Ea.Ar, {
                                header: o().createElement(Yr, null),
                                content: o().createElement(tr, { isLocked: t, selectedSlot: a }),
                                aside: o().createElement(Ju, { className: Qu }),
                                footer: o().createElement(Ia, null),
                            }),
                        );
                    };
                var eo = n(8175),
                    to = n(3755),
                    no = n(8774);
                const ao = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    so = (0, r.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) =>
                        o().createElement(
                            'div',
                            { className: c()(ao.base, ao['base__' + (t.length ? 'shown' : 'hidden')]) },
                            o().createElement(no.a, {
                                parentId: `${e}-${oi.GV}`,
                                actionType: oi.GV,
                                onClick: n,
                                show: t.includes(oi.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(no.a, {
                                parentId: `${e}-${oi.DA}`,
                                actionType: oi.DA,
                                onClick: n,
                                show: t.includes(oi.DA),
                            }),
                            o().createElement(no.a, {
                                parentId: `${e}-${oi.FR}`,
                                actionType: oi.FR,
                                onClick: n,
                                show: t.includes(oi.FR),
                            }),
                        ),
                    ),
                    uo = 'Booster_base_e5',
                    io = 'Booster_unit_5e',
                    ro = (0, x.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            u = ba(),
                            i = u.model,
                            l = u.controls,
                            c = i.computes.boosters.booster(n),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.oldStylePrice,
                            v = c.intCD,
                            f = c.isDisabled,
                            A = c.overlayType,
                            C = c.isLocked,
                            D = c.isMounted,
                            S = c.isMountedInOtherSetup,
                            F = c.description,
                            B = c.isBuyMoreVisible,
                            y = c.isBuyMoreDisabled,
                            k = c.highlightType,
                            x = c.lockReason,
                            T = d > -1,
                            I = `${v}-booster`,
                            N = (0, r.useMemo)(() => {
                                const e = [];
                                return (
                                    !f &&
                                        T &&
                                        (!t && B && e.push(oi.GV),
                                        (!Boolean(E) && !D) || S ? e.push(oi.FR) : e.push(oi.DA)),
                                    e
                                );
                            }, [f, T, t, B, E, D, S]),
                            O = (0, r.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: v, installedSlotId: d }),
                                    e === oi.GV ? 1e3 : 120
                                ),
                                [l, v, d],
                            ),
                            L = _t(O),
                            M = (0, r.useCallback)(() => {
                                N.includes(oi.FR) ? L(oi.FR) : N.includes(oi.DA) ? L(oi.DA) : L(oi.eC);
                            }, [N, L]),
                            P = (0, r.useMemo)(() => {
                                const e = { intCD: v, slotType: w.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: D,
                                        isDisabled: f,
                                    }),
                                ];
                            }, [v, d, m, p, D, b, f]),
                            $ = P[0],
                            H = P[1],
                            j = (0, r.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(xi, {
                            parentId: I,
                            name: _,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: j,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: f,
                            isLocked: C,
                            options: o().createElement(Li, {
                                isMounted: D || S,
                                itemsInStorage: E,
                                show: !N.length,
                                price: h,
                            }),
                            actions: o().createElement(so, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: L,
                                isBuyMoreDisabled: y,
                            }),
                            details: o().createElement(li._, {
                                key: F,
                                parentId: I,
                                classMix: uo,
                                mediaSize: a,
                                classColorMix: io,
                                linesShown: s ? 4 : 3,
                                text: F,
                            }),
                            overlayType: A,
                            highlightType: k,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    oo = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    lo = (0, x.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            u = ba(),
                            i = u.model,
                            l = u.controls,
                            _ = i.computes.consumables.consumable(n, t, a),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            b = _.itemInstalledSetupSlotIdx,
                            g = _.isMountedMoreThanOne,
                            E = _.imageName,
                            h = _.itemsInStorage,
                            v = _.oldStylePrice,
                            f = _.intCD,
                            A = _.isDisabled,
                            C = _.overlayType,
                            D = _.isLocked,
                            S = _.isMounted,
                            F = _.isMountedInOtherSetup,
                            B = _.isBuiltIn,
                            y = _.description,
                            k = _.isBuyMoreDisabled,
                            x = _.lockReason,
                            T = m > -1,
                            I = `${f}-consumable`,
                            N = (0, r.useMemo)(() => {
                                const n = [];
                                return (
                                    !A &&
                                        T &&
                                        (!e && n.push(oi.Xo),
                                        B ||
                                            (!t && n.push(oi.GV),
                                            (!Boolean(h) && !S) || F ? n.push(oi.FR) : n.push(oi.DA))),
                                    n
                                );
                            }, [A, T, e, B, t, h, S, F]),
                            O = (0, r.useCallback)(
                                (e) => (
                                    l.consumables.actSlot({ actionType: e, intCD: f, installedSlotId: m }),
                                    e === oi.GV ? 1e3 : 300
                                ),
                                [l, f, m],
                            ),
                            L = _t(O),
                            M = (0, r.useCallback)(() => {
                                N.includes(oi.Xo)
                                    ? L(oi.Xo)
                                    : N.includes(oi.FR)
                                      ? L(oi.FR)
                                      : N.includes(oi.DA)
                                        ? L(oi.DA)
                                        : L(oi.eC);
                            }, [N, L]),
                            P = (0, r.useMemo)(() => {
                                const e = { intCD: f, slotType: w.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                        isMounted: S,
                                        isDisabled: A,
                                    }),
                                ];
                            }, [f, m, p, b, g, S, A]),
                            $ = P[0],
                            H = P[1],
                            j = (0, r.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(E)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(E);
                                return String(e);
                            }, [s, E]),
                            z = (0, r.useMemo)(
                                () =>
                                    o().createElement(li._, {
                                        parentId: I,
                                        mediaSize: a,
                                        classMix: c()(oo.base, a && oo[`base__${a}`]),
                                        classColorMix: oo.unit,
                                        linesShown: s ? 4 : 3,
                                        text: y,
                                    }),
                                [a, s, y, I],
                            );
                        return o().createElement(xi, {
                            parentId: I,
                            name: d,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: j,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: A,
                            isLocked: D,
                            isClickable: !B,
                            options: o().createElement(Li, {
                                price: v,
                                isMounted: S || F,
                                itemsInStorage: h,
                                show: !N.length,
                            }),
                            actions: o().createElement(so, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: L,
                                isBuyMoreDisabled: k,
                            }),
                            details: z,
                            overlayType: C,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    co = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    _o = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return co;
                        const a = n.value,
                            s = a.value,
                            u = 'mul' === a.valueType ? 100 * (s - 1) : s;
                        return { calcValue: u, isPositive: u > 0, valueKey: a.valueKey };
                    },
                    mo = 'Bonus_base_aa',
                    po = 'Bonus_bonus_49',
                    bo = 'Bonus_text_48',
                    go = 'Unit_base_15',
                    Eo = 'Unit_base__special_37',
                    ho = 'Unit_glow_38',
                    vo = R.strings.tank_setup.kpi.bonus.valueTypes,
                    fo = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Ao = (0, x.Pi)(({ deviceID: e, bonusID: t }) => {
                        const n = ba().model,
                            a = n.computes.optDevices.device(e).activeSpecsMask,
                            s = n.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const u = s.valueType,
                            i = s.value,
                            r = s.valueKey,
                            l = Boolean(a),
                            _ = 'mul' === u ? 100 * (i - 1) : i,
                            d = _ > 0 ? '+' : '',
                            m = de.Z5.getRealFormat(_, de.Gr.WO_ZERO_DIGITS),
                            p = vo.$dyn(r),
                            b = `${m}${p ? ` ${p}` : fo}`;
                        return o().createElement(
                            'div',
                            { className: c()(go, l && Eo) },
                            o().createElement('span', null, o().createElement('span', { className: ho }), d + b),
                        );
                    }),
                    Co = (0, x.Pi)(({ bonusID: e, compare: t, deviceID: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge ? 4 : 3,
                            u = ba().model,
                            i = u.computes.optDevices.bonusVisibleLinesCount(n, e, s),
                            r = ((e, t = !1) =>
                                t || _o(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                u.computes.optDevices.bonus(n, e),
                            );
                        return i
                            ? o().createElement(
                                  'div',
                                  { className: mo },
                                  r &&
                                      o().createElement(
                                          'span',
                                          { className: po },
                                          o().createElement(Ao, { compare: t, deviceID: n, bonusID: e }),
                                          ' ',
                                          i &&
                                              r &&
                                              o().createElement(
                                                  'span',
                                                  { className: bo },
                                                  o().createElement(Ei.n, {
                                                      linesCount: i,
                                                      blocks: (0, Ei.D)(String(r)),
                                                      mediaSize: a,
                                                  }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    Do = 'Bonuses_base_af',
                    So = 'Bonuses_bonus_d1',
                    Fo = 'Bonuses_text_37',
                    Bo = 'Bonuses_effect_f8',
                    yo = 'Bonuses_icon_40',
                    wo = (0, x.Pi)(({ compare: e, deviceID: t }) => {
                        const n = (0, Ea.GS)(),
                            a = ba().model,
                            s = a.computes.optDevices.device(t),
                            u = s.intCD,
                            i = s.effect,
                            r = a.computes.optDevices.bonusesLength(t),
                            l = `${u}-device`,
                            c = a.computes.optDevices.bonusEffectLinesCount(t);
                        return o().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: Do },
                            i &&
                                o().createElement(
                                    'div',
                                    { className: So },
                                    o().createElement(
                                        'span',
                                        { className: Bo },
                                        o().createElement('span', { className: yo }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    o().createElement(
                                        'span',
                                        { className: Fo },
                                        o().createElement(Ei.n, { mediaSize: n, linesCount: c, blocks: (0, Ei.D)(i) }),
                                    ),
                                ),
                            U(r, (n) =>
                                o().createElement(Co, { key: `${n}_${u}`, bonusID: n, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var ko = n(2106);
                const xo = 'DeviceActions_base_c0',
                    To = 'DeviceActions_base__hidden_a6',
                    Io = 'DeviceActions_base__shown_b0',
                    No = (0, r.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: u,
                            isFreeToDemount: i,
                            destroyTooltipBodyPath: r,
                            level: l,
                        }) => {
                            const _ = (s || a) && t.includes(oi.Rs),
                                d = t.length && (t[0] !== oi.Rs || _),
                                m = c()(xo, d ? Io : To);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.DA}`,
                                    actionType: oi.DA,
                                    onClick: n,
                                    show: t.includes(oi.DA),
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.FR}`,
                                    actionType: oi.FR,
                                    onClick: n,
                                    show: t.includes(oi.FR),
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.Rs}`,
                                    actionType: oi.Rs,
                                    onClick: n,
                                    show: _,
                                    isModernized: u,
                                    level: l,
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.dZ}`,
                                    actionType: oi.dZ,
                                    onClick: n,
                                    show: t.includes(oi.dZ),
                                    isFreeToDemount: i,
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.Fd}`,
                                    actionType: oi.Fd,
                                    onClick: n,
                                    show: t.includes(oi.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: i,
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi.sH}`,
                                    actionType: oi.sH,
                                    onClick: n,
                                    show: t.includes(oi.sH),
                                }),
                                o().createElement(no.a, {
                                    parentId: `${e}-${oi._2}`,
                                    actionType: oi._2,
                                    buttonType: ko.L.secondary,
                                    onClick: n,
                                    show: (u || !i) && t.includes(oi._2),
                                    isModernized: u,
                                    tooltipBodyPath: r,
                                }),
                            );
                        },
                    );
                function Ro() {
                    return (
                        (Ro =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ro.apply(this, arguments)
                    );
                }
                const Oo = (0, x.Pi)(({ compare: e, index: t, isCurrent: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            u = ba(),
                            i = u.model,
                            l = u.controls,
                            c = i.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.oldStylePrice,
                            v = c.specializations,
                            f = c.intCD,
                            A = c.isMounted,
                            C = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            S = c.isFreeToDemount,
                            F = c.overlayType,
                            B = c.isLocked,
                            y = c.isUpgradable,
                            k = c.isTrophy,
                            x = c.activeSpecsMask,
                            T = c.isModernized,
                            I = c.level,
                            N = c.lockReason,
                            O = c.destroyTooltipBodyPath,
                            L = d > -1,
                            M = `${f}-device`,
                            P = (0, r.useMemo)(() => {
                                const t = [];
                                let a = !0;
                                return (
                                    L &&
                                        !D &&
                                        (n || t.push(oi.Xo),
                                        A && !e
                                            ? ((a = !n),
                                              t.push(...((e) => (e ? [oi.Fd, oi.sH] : [oi.dZ]))(b)),
                                              t.push(oi._2))
                                            : t.push(
                                                  ((e, t, n) => ((!Boolean(e) && !t) || n ? oi.FR : oi.DA))(E, A, C),
                                              )),
                                    !y || e || D || t.push(oi.Rs),
                                    { availableActions: t, isDeviceClickable: a }
                                );
                            }, [L, D, y, e, n, A, b, E, C]),
                            $ = P.availableActions,
                            H = P.isDeviceClickable,
                            j = (0, r.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: d });
                                },
                                [l, f, d],
                            ),
                            z = (0, r.useCallback)(() => {
                                $.length && $[0] !== oi.Rs ? j($[0]) : j(oi.eC);
                            }, [$, j]),
                            G = (0, r.useMemo)(() => {
                                const e = { intCD: f, slotType: w.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: A,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [f, d, m, p, b, A, D]),
                            W = G[0],
                            Z = G[1],
                            V = (0, r.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(xi, {
                            parentId: M,
                            name: _,
                            tooltipArgs: W,
                            contextMenuArgs: Z,
                            imageSource: V,
                            isCurrent: n,
                            isActive: L,
                            isDisabled: D,
                            isLocked: B,
                            isClickable: H,
                            isModernized: T,
                            level: I,
                            specializations:
                                v && v.specializations.length
                                    ? o().createElement(tn.G, Ro({}, v, { activeSpecsMask: x, mediaSize: a }))
                                    : null,
                            details: o().createElement(wo, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : o().createElement(Li, {
                                      isMounted: A || C,
                                      itemsInStorage: E,
                                      price: h,
                                      possibleZeroCount: k || T,
                                      show: !$.length || Boolean(E || A || C),
                                  }),
                            actions: o().createElement(No, {
                                parentId: M,
                                availableActions: $,
                                onActionClick: j,
                                isInstalled: L,
                                isModernized: T,
                                level: I,
                                isFreeToDemount: S,
                                destroyTooltipBodyPath: O,
                            }),
                            overlayType: F,
                            onSlotClick: z,
                            shouldHandleMouseOver: !0,
                            lockReason: N,
                        });
                    }),
                    Lo = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    Mo = (0, x.Pi)(({ index: e, forwardRef: t, type: n, compare: a = !1 }) => {
                        const s = (0, Ea.GS)(),
                            u = ba().model,
                            i = u.ammunitionPanel.get().selectedSlot,
                            r = (() => {
                                switch (n) {
                                    case w.zn:
                                        return u.computes.optDevices.device(e);
                                    case w.mH:
                                        return u.computes.consumables.consumable(e, a, s);
                                    case w.G$:
                                        return u.computes.boosters.booster(e);
                                    default:
                                        return u.computes.optDevices.device(e);
                                }
                            })(),
                            l = r.isVisible,
                            _ = r.installedSlotId,
                            d = _ > -1 && i === _;
                        return l
                            ? o().createElement(
                                  'div',
                                  { className: c()(Lo.base, s && Lo[`base__${s}`]), ref: d ? t : null },
                                  (() => {
                                      switch (n) {
                                          case w.G$:
                                              return o().createElement(ro, { index: e, compare: a, isCurrent: d });
                                          case w.mH:
                                              return o().createElement(lo, { index: e, compare: a, isCurrent: d });
                                          case w.zn:
                                          default:
                                              return o().createElement(Oo, { index: e, compare: a, isCurrent: d });
                                      }
                                  })(),
                              )
                            : null;
                    }),
                    Po = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    $o = ({ isDisabled: e, compare: t = !1, currentCardRef: n, cardsAmount: a, type: s }) => {
                        const u = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Po.base, u && Po[`base__${u}`], e && Po.base__disabled) },
                            U(a, (e) =>
                                o().createElement(Mo, { key: e, index: e, compare: t, forwardRef: n, type: s }),
                            ),
                        );
                    };
                var Ho = n(3215),
                    jo = n(3522);
                const zo = (0, Ho.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, jo._)(e),
                                n = t.model,
                                a = t.computes,
                                s = e.object();
                            return Object.assign({}, n, { ammunitionPanel: s, computes: a });
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
                    Go = (zo[0], zo[1]);
                var Wo = n(9480),
                    Zo = n(8586),
                    Vo = n(3978);
                const Uo = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    qo = 'FilterItem_base_2e',
                    Xo = ({ name: e }) =>
                        o().createElement('div', {
                            className: qo,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Ko;
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
                })(Ko || (Ko = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let Yo;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Yo || (Yo = {}));
                const Jo = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Qo;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(Qo || (Qo = {}));
                let el;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(el || (el = {}));
                const tl = 'ClearBtn_base_a6',
                    nl = 'ClearBtn_stroke_09',
                    al = 'ClearBtn_background_61',
                    sl = 'ClearBtn_base__hover_3b',
                    ul = 'ClearBtn_base__down_60',
                    il = 'ClearBtn_cross_1d',
                    rl = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, r.useState)(!1),
                            u = s[0],
                            i = s[1],
                            l = (0, r.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, r.useCallback)(() => {
                                (0, ut.G)(a), d(!1), i(!0);
                            }, [a]),
                            p = (0, r.useCallback)(() => {
                                (0, ut.G)(n), d(!0);
                            }, [n]),
                            b = (0, r.useCallback)(() => {
                                d(!1), i(!1);
                            }, []);
                        return o().createElement(
                            q.i,
                            Jo,
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(tl, _ && sl, u && ul),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: b,
                                    onClick: t,
                                },
                                o().createElement('div', { className: al }),
                                o().createElement('div', { className: nl }),
                                o().createElement('div', { className: il }),
                            ),
                        );
                    },
                    ol = 'MatchDetails_base_a8',
                    ll = 'MatchDetails_count_d2',
                    cl = 'MatchDetails_clear_21',
                    _l = 'MatchDetails_clear__shown_49',
                    dl = 'MatchDetails_separator_bc',
                    ml = 'MatchDetails_arrow_b0',
                    pl = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, r.useCallback)(() => t(), [t]);
                        return o().createElement(
                            'div',
                            { className: ol },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: ll }, n),
                                    o().createElement(
                                        'span',
                                        { className: dl },
                                        '/',
                                        o().createElement('span', { className: ml }),
                                    ),
                                ),
                            o().createElement('span', { className: ll }, a),
                            o().createElement(
                                'span',
                                { className: c()(cl, e && _l) },
                                o().createElement(rl, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    bl = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: u,
                        onFilterReset: i,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, Ea.GS)(),
                            d = De('FilterTutorialHintZone', Ae);
                        (0, r.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, Wo.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Xo, { name: e }),
                            callback: (e, t) => {
                                u({ name: e }), (0, Vo.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: ko.L.ghost,
                                mixClass: c()(Uo.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: c()(Uo.base, _ && Uo[`base__${_}`], s && Uo.base__detailed) },
                            s &&
                                o().createElement(pl, {
                                    isFilterActive: a,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Uo.buttons },
                                o().createElement(Zo.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var gl = n(2372);
                const El = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    hl = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    vl = (e) => (e ? hl.disabled.text() : hl.notDisabled.text()),
                    fl = (0, x.Pi)(({ disabled: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)(),
                            a = n.model,
                            s = n.controls,
                            u = a.optDevices.specialCurrency.get().value;
                        return o().createElement(
                            'div',
                            { className: c()(El.base, t && El[`base__${t}`]) },
                            o().createElement(
                                kt.t,
                                { args: { tooltipId: w.$4 } },
                                o().createElement(
                                    'div',
                                    { className: El.currency },
                                    o().createElement(gl.A, { value: u }),
                                    o().createElement('div', { className: El.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                q.i,
                                { body: vl(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        Da.u5,
                                        { onClick: s.moreCurrencyGot, mixClass: El.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Al = 'HeaderContent_base_cd';
                function Cl() {
                    return (
                        (Cl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Cl.apply(this, arguments)
                    );
                }
                const Dl = (0, x.Pi)(({ compare: e }) => {
                        const t = ba(),
                            n = t.model,
                            a = t.controls,
                            s = n.optDevices.setup.get(),
                            u = s.withIntroduction,
                            i = s.hasUnfitItems,
                            r = n.computes.optDevices.slotsLength(),
                            l = n.optDevices.tabs.get(),
                            c = n.optDevices.filter.get(),
                            _ = e ? void 0 : n.computes.selectedSlotSpecialization();
                        switch (l.selectedTabName) {
                            case w.S:
                                return o().createElement(
                                    'div',
                                    { className: Al },
                                    o().createElement(
                                        bl,
                                        Cl({}, c, {
                                            onFilterChanged: a.filterChanged,
                                            onFilterReset: a.filterReset,
                                            selectedSlotSpecialization: _,
                                        }),
                                    ),
                                );
                            case w.pi:
                                return e
                                    ? null
                                    : r > 0
                                      ? o().createElement(
                                            'div',
                                            { className: Al },
                                            o().createElement(fl, { disabled: u ? !i : r <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    Sl = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    Fl = R.strings.tank_setup.compare.section,
                    Bl = (0, x.Pi)(({ type: e, children: t, withContent: n }) => {
                        const a = Go().model.vehicleInfo.get(),
                            s = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Sl.base, Sl[`base__${s}`]) },
                            o().createElement(
                                'div',
                                { className: Sl.title },
                                (0, L.WU)(String(Fl.title.$dyn(e)), { name: a.vehicleName }),
                            ),
                            o().createElement('div', { className: Sl.description }, Fl.description.$dyn(e)),
                            o().createElement(
                                'div',
                                { className: Sl.controlsContainer },
                                o().createElement('div', { className: Sl.tabs }, t),
                                n && o().createElement(Dl, { compare: !0 }),
                            ),
                        );
                    });
                function yl() {
                    return (
                        (yl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        yl.apply(this, arguments)
                    );
                }
                const wl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = ba(),
                            n = t.model,
                            a = t.controls,
                            s = (0, Ea.GS)(),
                            u = n.ammunitionPanel.get().selectedSlot,
                            i = n.boosters.tabs.get(),
                            r = n.computes.boosters.length();
                        return o().createElement(Ea.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(
                                      Bl,
                                      { type: w.G$ },
                                      o().createElement(
                                          Pr,
                                          yl({}, i, { handleTabChanged: a.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : o().createElement(Hr, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, i, {
                                          handleTabChanged: a.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: o().createElement(
                                si,
                                { selectedSlotId: u, scrollAreaKey: i.selectedTabName, updateKey: r },
                                o().createElement($o, { compare: e, type: w.G$, cardsAmount: r }),
                            ),
                            footer:
                                !e &&
                                o().createElement(to.w, {
                                    withConfirmation: !0,
                                    renewalType: eo.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: a.boosters.confirmDeal,
                                    onDealCancelled: a.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => a.boosters.changeAutoRenewal(e),
                                    mediaSize: s,
                                }),
                        });
                    }),
                    kl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Ea.GS)(),
                            n = ba(),
                            a = n.model,
                            s = n.controls,
                            u = a.ammunitionPanel.get().selectedSlot,
                            i = a.computes.consumables.length(e, t);
                        return o().createElement(Ea.Ar, {
                            header: e
                                ? o().createElement(Bl, { type: w.mH })
                                : o().createElement(Hr, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                si,
                                { selectedSlotId: u },
                                o().createElement($o, { compare: e, cardsAmount: i, type: w.mH }),
                            ),
                            footer:
                                !e &&
                                o().createElement(to.w, {
                                    withConfirmation: !0,
                                    renewalType: eo.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: s.consumables.confirmDeal,
                                    onDealCancelled: s.consumables.cancelDeal,
                                    onAutoRenewalChanged: s.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function xl() {
                    return (
                        (xl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        xl.apply(this, arguments)
                    );
                }
                const Tl = (0, x.Pi)(({ compare: e }) => {
                        const t = ba(),
                            n = t.model,
                            a = t.controls,
                            s = n.optDevices.tabs.get(),
                            u = s.tabs.length > 1;
                        return e
                            ? o().createElement(
                                  Bl,
                                  { type: w.zn, withContent: !0 },
                                  u && o().createElement(Pr, xl({}, s, { handleTabChanged: a.optDevices.changeTab })),
                              )
                            : o().createElement(
                                  Hr,
                                  {
                                      title: R.strings.tank_setup.section.optDevices(),
                                      tabProps: u
                                          ? Object.assign({}, s, { handleTabChanged: a.optDevices.changeTab })
                                          : void 0,
                                      tabs:
                                          u &&
                                          o().createElement(
                                              Pr,
                                              xl({}, s, { handleTabChanged: a.optDevices.changeTab }),
                                          ),
                                  },
                                  o().createElement(Dl, { compare: e }),
                              );
                    }),
                    Il = {
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
                    Nl = ({ introType: e }) => {
                        const t = c()(Il.icon, Il[`icon__currency-${e}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: Il.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? o().createElement(oe, { binding: n, text: a, classMix: Il.message }) : null;
                    },
                    Rl = (0, x.Pi)(() => {
                        const e = (0, Ea.GS)(),
                            t = e === Ea.cJ.Large || e === Ea.cJ.Huge,
                            n = (0, r.useState)(!0),
                            a = n[0],
                            s = n[1],
                            u = (0, ga.t)(),
                            i = u.model,
                            l = u.controls,
                            _ = i.optDevices.setup.get().introductionType,
                            d = i.computes.optDevices.slotsLength() > 0,
                            m = (0, r.useCallback)(() => {
                                s(!1);
                            }, []),
                            p = (0, r.useCallback)(() => {
                                l.introPassed(), s(!0);
                            }, [l]),
                            b = (0, r.useMemo)(
                                () => ({
                                    enter: Il.base__enter,
                                    enterActive: Il.base__enterActive,
                                    exit: Il.base__exit,
                                    exitActive: Il.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return o().createElement(
                            Y.Z,
                            { in: a, classNames: b, timeout: 300, onExited: p },
                            o().createElement(
                                'div',
                                { className: c()(Il.base, e && Il[`base__${e}`]), id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: Il.introduction },
                                    o().createElement('div', {
                                        className: c()(Il.image, t ? Il[`image__${_}Large`] : Il[`image__${_}`]),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Il.description },
                                        o().createElement('div', { className: Il.title }, g),
                                        o().createElement(Nl, { introType: _ }),
                                    ),
                                    d &&
                                        o().createElement(
                                            Da.u5,
                                            { type: Da.L$.secondary, size: Da.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Ol = 'OptDevicesSetup_intro_ae',
                    Ll = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Ea.GS)(),
                            n = ba().model,
                            a = (0, ga.t)().controls,
                            s = n.ammunitionPanel.get().selectedSlot,
                            u = n.optDevices.setup.get().withIntroduction,
                            i = n.computes.optDevices.slotsLength(),
                            r = n.optDevices.filter.get().selectedFilterCount,
                            l = n.optDevices.tabs.get().selectedTabName,
                            c = n.computes.optDevices.slotsLength();
                        return o().createElement(Ea.Ar, {
                            compare: e,
                            header: o().createElement(Tl, { compare: e }),
                            content:
                                !e && u
                                    ? o().createElement(
                                          'div',
                                          { className: Ol },
                                          o().createElement($o, {
                                              compare: !1,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          o().createElement(Rl, null),
                                      )
                                    : o().createElement(
                                          si,
                                          { selectedSlotId: s, scrollAreaKey: l, updateKey: `${r}:${i}` },
                                          o().createElement($o, {
                                              compare: e,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: u,
                                          }),
                                      ),
                            footer:
                                !e &&
                                o().createElement(to.w, {
                                    withConfirmation: !0,
                                    parentModelPath: 'model.tankSetup.optDevicesSetup',
                                    mediaSize: t,
                                    onDealConfirmed: a.optDevices.confirmDeal,
                                    onDealCancelled: a.optDevices.cancelDeal,
                                    onAutoRenewalChanged: a.optDevices.changeAutoRenewal,
                                }),
                        });
                    });
                var Ml = n(5096),
                    Pl = n(5958);
                const $l = {
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
                    Hl = (0, x.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: s,
                            uniqueKey: u,
                            onTransitionEnd: i,
                        }) => {
                            const l = ri(u),
                                _ = n === Ea.cJ.Tiny,
                                d = a === t,
                                m = l && l !== u,
                                p = (0, r.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, r.useMemo)(() => ((s - a > 1 && _) || !m ? 'Fade' : ''), [m, a, s, _]),
                                g = (0, r.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: $l.base__enter,
                                                enterDone: $l[`base__enter${p}${b}`],
                                                exit: $l[`base__exit${p}${b}`],
                                                exitActive: $l.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                E = (0, r.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), i && i();
                                        }, Pl.PD);
                                    },
                                    [i],
                                ),
                                h = (0, r.useMemo)(() => ({ animationDuration: `${Pl.PD}ms` }), []);
                            return o().createElement(
                                K.Z,
                                { component: null, childFactory: g },
                                o().createElement(
                                    Y.Z,
                                    { key: u, timeout: Pl.PD, onEntered: E },
                                    o().createElement(
                                        'div',
                                        { className: c()($l.base, $l[`base__${n}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var jl = n(2094);
                const zl = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        count__zero: 'Shell_count__zero_45',
                        name: 'Shell_name_29',
                        base__small: 'Shell_base__small_eb',
                        base__medium: 'Shell_base__medium_5e',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    Gl = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Wl = (0, x.Pi)(({ shellID: e, specificationID: t }) => {
                        const n = (0, Ea.GS)(),
                            a = n === Ea.cJ.Tiny,
                            s = (0, ga.t)().model.computes.shells.specification(e, t),
                            u = s.paramName,
                            i = s.value,
                            l = s.metricValue,
                            _ = (0, r.useMemo)(() => {
                                if ('avgPiercingPower' === u) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [u]);
                        return 'avgPiercingPower' === u || (!a && i)
                            ? o().createElement(
                                  'div',
                                  { className: c()(Gl.base, n && Gl[`base__${n}`]) },
                                  a
                                      ? o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(u),
                                            ' ',
                                            o().createElement(
                                                'div',
                                                { className: Gl.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                            o().createElement('div', { className: Gl.units }, _),
                                        )
                                      : o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(u),
                                            o().createElement('div', { className: Gl.units }, l),
                                            o().createElement('div', {
                                                className: c()(Gl.separator, n && Gl[`separator__${n}`]),
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: Gl.value },
                                                i || o().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    Zl = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var Vl = n(7405),
                    Ul = n(329);
                const ql = {
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
                function Xl() {
                    return (
                        (Xl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Xl.apply(this, arguments)
                    );
                }
                const Kl = R.strings.tank_setup.shells,
                    Yl = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = t === Ea.cJ.Tiny,
                            a = (0, ga.t)().model,
                            s = a.computes.shells.shell(e),
                            u = s.buyCount,
                            i = s.itemsInStorage,
                            l = s.itemsInVehicle,
                            _ = s.totalPrice,
                            d = s.price,
                            m = a.computes.shells.defPriceLength(e),
                            p = a.computes.shells.priceLength(e) ? a.computes.shells.price(e, 0) : null,
                            b = m ? a.computes.shells.defPrice(e, 0) : null,
                            g = (0, r.useMemo)(() => Kl[n ? 'shortSpecification' : 'specification'].inStorage(), [n]),
                            E = (0, r.useMemo)(() => Kl[n ? 'shortSpecification' : 'specification'].inVehicle(), [n]),
                            h = (0, r.useMemo)(() => Kl[n ? 'shortSpecification' : 'specification'].price(), [n]),
                            v = l >= 0,
                            f = m > 0,
                            A = (0, r.useMemo)(
                                () =>
                                    p && b
                                        ? {
                                              tooltip: 'priceDiscount',
                                              price: p.value,
                                              defPrice: b.value,
                                              currencyType: p.name,
                                          }
                                        : void 0,
                                [b, p],
                            );
                        return o().createElement(
                            'div',
                            { className: c()(ql.base, t && ql[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: c()(ql.row, t && ql[`row__${t}`]) },
                                o().createElement(
                                    'div',
                                    { className: ql.rowItem },
                                    o().createElement('div', { className: c()(ql.total, t && ql[`total__${t}`]) }, g),
                                    o().createElement(
                                        'div',
                                        { className: c()(ql.lowResolutionValue, t && ql[`lowResolutionValue__${t}`]) },
                                        o().createElement('span', { className: ql.indent }),
                                        i,
                                    ),
                                ),
                                v &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('span', { className: ql.divider }, '/'),
                                        o().createElement(
                                            'div',
                                            { className: ql.rowItem },
                                            o().createElement(
                                                'div',
                                                { className: c()(ql.total, t && ql[`total__${t}`]) },
                                                o().createElement(
                                                    'div',
                                                    { className: c()(ql.colored, t && ql[`colored__${t}`]) },
                                                    E,
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: c()(
                                                        ql.lowResolutionValue,
                                                        t && ql[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                o().createElement('span', { className: ql.indent }),
                                                l,
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: c()(ql.separator, t && ql[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: c()(ql.hiResolutionValue, t && ql[`hiResolutionValue__${t}`]) },
                                    i,
                                    v &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('span', { className: ql.divider }, '/'),
                                            o().createElement(
                                                'div',
                                                { className: c()(ql.colored, t && ql[`colored__${t}`]) },
                                                l,
                                            ),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(ql.row, t && ql[`row__${t}`]) },
                                o().createElement('div', { className: c()(ql.total, t && ql[`total__${t}`]) }, h),
                                o().createElement('div', { className: c()(ql.separator, t && ql[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: ql.value },
                                    o().createElement(
                                        'div',
                                        { className: ql.overall },
                                        '(',
                                        o().createElement('span', null, u),
                                        ' ×',
                                        o().createElement(
                                            kt.t,
                                            { args: A, isEnabled: f },
                                            o().createElement(
                                                'span',
                                                { className: ql.price },
                                                o().createElement(Ti.t, Xl({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        o().createElement(
                                            'span',
                                            { className: c()(ql.price, ql.price__final) },
                                            u
                                                ? o().createElement(Ti.t, Xl({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : o().createElement(Vl.F, {
                                                      size: Ul.et.small,
                                                      type: Ul.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Jl = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)().model.computes.shells.specificationsLength(e);
                        return o().createElement(
                            'div',
                            { className: c()(Zl.base, t && Zl[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: Zl.overall },
                                U(n, (t) =>
                                    o().createElement(
                                        r.Fragment,
                                        { key: t },
                                        o().createElement(Wl, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: Zl.total }, o().createElement(Yl, { id: e })),
                        );
                    }),
                    Ql = R.images.gui.maps.icons.shell,
                    ec = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)(),
                            a = n.model,
                            s = n.controls,
                            u = a.computes.shells.shell(e),
                            i = u.count,
                            l = u.type,
                            _ = u.intCD,
                            d = u.imageName,
                            m = u.installedSlotId,
                            p = u.itemInstalledSetupIdx,
                            b = u.itemInstalledSetupSlotIdx,
                            g = u.isMountedMoreThanOne,
                            E = a.shellsSetup.get(),
                            h = E.installedCount,
                            v = E.maxCount,
                            f = E.clipCount,
                            A = v - h + i,
                            C = (0, r.useCallback)(
                                (e) => {
                                    s.shells.updateSlot && s.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [s, _],
                            ),
                            D = (0, r.useMemo)(() => {
                                const e = { slotType: w.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                    }),
                                ];
                            }, [_, m, p, b, g]),
                            S = D[0],
                            F = D[1],
                            B = (0, r.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case Ea.cJ.Huge:
                                        case Ea.cJ.Large:
                                            return Ql.large;
                                        default:
                                            return Ql.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            y = R.strings.item_types.shell.kinds.$dyn(l),
                            k = systemLocale.toUpperCase(y);
                        return o().createElement(
                            'div',
                            { className: c()(zl.base, t && zl[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: zl.shell },
                                o().createElement(
                                    Ut,
                                    { args: F },
                                    o().createElement(
                                        kt.t,
                                        { args: S },
                                        o().createElement(
                                            'div',
                                            { className: zl.icon, style: B },
                                            o().createElement(
                                                'div',
                                                { className: c()(zl.count, !i && zl.count__zero) },
                                                i,
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: zl.name }, k),
                            ),
                            o().createElement(
                                'div',
                                { className: zl.ammunition },
                                o().createElement(jl.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: i,
                                    maximum: v,
                                    sliderMaximum: A,
                                    onUpdates: C,
                                    stepCount: f,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: zl.specifications },
                                o().createElement(Jl, { id: e }),
                            ),
                        );
                    }),
                    tc = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    nc = ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: s = 'play' }) => {
                        const u = (0, r.useCallback)(() => {
                                s && (0, ut.G)(s), t(e);
                            }, [e, t, s]),
                            i = (0, r.useCallback)(() => {
                                a && (0, ut.G)(a);
                            }, [a]);
                        return o().createElement('div', {
                            id: `swap-${e}`,
                            onClick: u,
                            onMouseEnter: i,
                            className: c()(tc.base, tc[`base__${n}`]),
                        });
                    },
                    ac = {
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
                    sc = (0, x.Pi)(({ id: e, onTransitionEnd: t, onSwap: n, leftID: a, rightID: s }) => {
                        const u = (0, Ea.GS)(),
                            i = (0, ga.t)().model,
                            r = i.computes.shells.length(),
                            l = i.computes.shells.shell(e).intCD;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                Hl,
                                { index: e, uniqueKey: l, leftID: a, rightID: s, mediaSize: u, onTransitionEnd: t },
                                o().createElement(
                                    'div',
                                    { className: c()(ac.base, u && ac[`base__${u}`]) },
                                    o().createElement(ec, { id: e }),
                                ),
                            ),
                            e !== r - 1 &&
                                o().createElement(
                                    'div',
                                    { className: c()(ac.swap, u && ac[`swap__${u}`]) },
                                    o().createElement(nc, { id: e, mediaSize: u, onSwap: n }),
                                ),
                        );
                    }),
                    uc = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    ic = (0, x.Pi)(() => {
                        const e = (0, ga.t)(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.shells.length(),
                            s = (0, r.useState)(!1),
                            u = s[0],
                            i = s[1],
                            l = (0, Ea.GS)(),
                            _ = t.computes.shells.ids(),
                            d = ri(_),
                            m = (0, r.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            b = m.rightID,
                            g = (0, r.useCallback)(
                                (e) => {
                                    u || n.shells.actSlot({ actionType: oi.Xo, leftID: e, rightID: e + 1 }), i(!0);
                                },
                                [n, u],
                            ),
                            E = (0, r.useCallback)(() => {
                                i(!1);
                            }, [i]);
                        return o().createElement(
                            'div',
                            { className: c()(uc.base, uc[`base__${l}`]) },
                            U(a, (e) =>
                                o().createElement(sc, { id: e, onTransitionEnd: E, onSwap: g, leftID: p, rightID: b }),
                            ),
                        );
                    }),
                    rc = (0, x.Pi)(() => {
                        const e = (0, Ea.GS)(),
                            t = (0, ga.t)().controls;
                        return o().createElement(Ea.Ar, {
                            header: o().createElement(
                                Hr,
                                { title: R.strings.tank_setup.section.shells() },
                                o().createElement(Ml.k, { isShortened: !0 }),
                            ),
                            content: o().createElement(ic, null),
                            footer: o().createElement(to.w, {
                                withConfirmation: !0,
                                renewalType: eo.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    oc = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    },
                    lc = (0, x.Pi)(({ isHidden: e = !1 }) => {
                        const t = o().useRef(null),
                            n = (0, ga.t)(),
                            a = n.model,
                            s = n.controls,
                            i = a.vehicleInfo.get(),
                            r = (0, Ea.GS)();
                        return (
                            $(t, s.resized, !0, [s.resized, u.O.view.getScale()]),
                            o().createElement(
                                'div',
                                { className: c()(oc.base, r && oc[`base__${r}`], e && oc.base__hidden), ref: t },
                                o().createElement(pu, i),
                            )
                        );
                    }),
                    cc = {
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
                    _c = [w.zn, w.g9, w.mH, w.G$, w.YN],
                    dc = (e, t) => (t === e ? '' : _c.indexOf(t) > _c.indexOf(e) ? 'right' : 'left'),
                    mc = ({ children: e, selectedSetup: t }) => {
                        const n = o().createRef(),
                            a = (0, r.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, r.useMemo)(() => {
                                const e = dc(a.current.selectedSetup, t);
                                return { enter: cc[`base__${e}Enter`] };
                            }, [t]),
                            u = (0, r.useCallback)(
                                (e) => {
                                    const s = dc(a.current.selectedSetup, t);
                                    (e.className = c()(cc.base, cc.base__exit)),
                                        e.classList.add(cc[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n);
                                    Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(cc.base__previous);
                                    }),
                                        n.current && n.current.classList.add(cc.base__previous);
                                },
                                [n, t],
                            ),
                            i = (0, r.useCallback)(
                                (e) => {
                                    const n = dc(a.current.previousSelectedSetup, t);
                                    (e.className = cc.base), e.classList.add(cc[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    const n = dc(a.current.previousSelectedSetup, t);
                                    e.classList.add(cc[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, r.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            o().createElement(
                                K.Z,
                                null,
                                o().createElement(
                                    Y.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: u,
                                        onEnter: i,
                                        onEntering: l,
                                    },
                                    o().createElement('div', { className: cc.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    pc = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = ba().model.tankSetup.get().selectedSetup;
                        return o().createElement(
                            r.Fragment,
                            null,
                            o().createElement(
                                mc,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case w.zn:
                                            return o().createElement(Ll, { compare: e });
                                        case w.g9:
                                            return o().createElement(rc, null);
                                        case w.mH:
                                            return o().createElement(kl, { compare: e });
                                        case w.G$:
                                            return o().createElement(wl, { compare: e });
                                        case w.YN:
                                            return o().createElement(Qr, null);
                                        default:
                                            return o().createElement(Ll, { compare: e });
                                    }
                                })(),
                            ),
                            !e && o().createElement(lc, { isHidden: t === w.YN }),
                        );
                    }),
                    bc = (0, x.Pi)(() => {
                        const e = (0, ga.t)(),
                            t = e.model,
                            n = e.controls,
                            a = t.tankSetup.get().selectedSetup,
                            s = E().mediaWidth,
                            u = (0, r.useState)(!1),
                            i = u[0],
                            l = u[1];
                        (0, r.useEffect)(() => (0, k.v)(n.viewRendered), [n]);
                        const c = (0, r.useCallback)(() => {
                            i || n.close();
                        }, [i, n]);
                        return o().createElement(
                            pa.Provider,
                            { value: e },
                            o().createElement(ma.S, {
                                show: t.show.get(),
                                content: o().createElement(pc, null),
                                panel: o().createElement(
                                    H.k,
                                    null,
                                    o().createElement(da, {
                                        show: t.show.get(),
                                        isReady: t.isReady.get(),
                                        panelType: Se.w.Setup,
                                        setIsExitBlocked: l,
                                    }),
                                ),
                                button:
                                    a === w.YN &&
                                    s > m.j.medium.width &&
                                    o().createElement(Wr, { id: 'scenarios_btn', theme: Gr.Standalone }),
                                onAnimationDone: n.animationEnded,
                                onClose: c,
                            }),
                        );
                    });
                u.O.view.whenTutorialReady.then(() => {
                    y().render(
                        o().createElement(ga.k, null, o().createElement(F, null, o().createElement(bc, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7739),
                    i = n(6179),
                    r = n.n(i),
                    o = n(1960);
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
                        const e = (0, i.useContext)(u.YN);
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
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: u = !1 }) => {
                        const i = c(),
                            l = s()(o.Z.base, i && o.Z[`base__${i}`], u && o.Z.base__compare),
                            _ = s()(o.Z.header, i && o.Z[`header__${i}`]),
                            d = s()(o.Z.main),
                            m = s()(o.Z.content);
                        return r().createElement(
                            'div',
                            { className: l },
                            e && r().createElement('div', { className: _ }, e),
                            r().createElement(
                                'div',
                                { className: m },
                                r().createElement(
                                    'div',
                                    { className: d },
                                    r().createElement('div', { className: o.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && r().createElement('div', { className: o.Z.footer }, a),
                        );
                    };
            },
            3522: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(4598),
                    s = n(9480),
                    u = n(3946),
                    i = n(1922);
                const r = [
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
                        ...r,
                    ],
                    l = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...r,
                    ],
                    c = (e) =>
                        s.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: s.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: s.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: s.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                                oldStylePrice: Object.assign({}, e.price, {
                                    price: s.UI(e.price.price, (e) => ({ value: Object.assign({}, e) })),
                                    defPrice: s.UI(e.price.defPrice, (e) => ({ value: Object.assign({}, e) })),
                                    discount: s.UI(e.price.discount, (e) => ({ value: Object.assign({}, e) })),
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
                            n = (0, u.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return s.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: s.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: s.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: s.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: a.jv },
                            ),
                            r = (0, u.Om)(() => n().length),
                            _ = (0, u.Om)(
                                (e) => {
                                    const t = s.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: a.jv },
                            ),
                            d = (0, u.Om)((e) => _(e).bonuses.items.length, { equals: a.jv }),
                            m = (0, u.Om)(
                                (e, t) => {
                                    const n = _(e),
                                        a = s.U2(n.bonuses.items, t);
                                    if (!a) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            p = (0, u.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            b = (0, u.Om)((e, t, n) => {
                                const a = d(e),
                                    s = p(e);
                                let u = s ? n - s : n,
                                    i = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!u) return null;
                                    (i = a > 2 ? 1 : 2 === a ? (u > 2 ? 2 : 1) : u), (u -= i);
                                }
                                return i;
                            }),
                            g = (0, u.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return s.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: a.jv },
                            ),
                            E = (0, u.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const a = n !== i.cJ.Tiny || t ? o : l,
                                            u = c(e),
                                            r = s.u4(
                                                u,
                                                (e, t) => {
                                                    const n = a.indexOf(t.itemName);
                                                    return (e[-1 === n ? Math.max(e.length, l.length) : n] = t), e;
                                                },
                                                [],
                                            );
                                        return s.hX(r, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: a.jv },
                            ),
                            h = (0, u.Om)((e, t) => E(e, t).length),
                            v = (0, u.Om)(
                                (e, t, n) => {
                                    const a = s.U2(E(t, n), e);
                                    if (!a) throw Error(`No consumable found with index: ${a}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            f = (0, u.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), c(e);
                                    var e;
                                },
                                { equals: a.jv },
                            ),
                            A = (0, u.Om)(() => f().length),
                            C = (0, u.Om)(
                                (e) => {
                                    const t = s.U2(f(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: a.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: r,
                                    device: _,
                                    bonusesLength: d,
                                    bonus: m,
                                    bonusEffectLinesCount: p,
                                    bonusVisibleLinesCount: b,
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: v },
                                boosters: { length: A, booster: C },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => l, t: () => c });
                var a = n(3215),
                    s = n(4598),
                    u = n(9480),
                    i = n(3946),
                    r = n(3522);
                const o = (0, a.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, r._)(e),
                                n = t.model,
                                a = t.computes,
                                o = e.object('tankSetup.shellsSetup'),
                                l = e.array('tankSetup.shellsSetup.slots'),
                                c = e.object('ammunitionPanel'),
                                _ = e.array('ammunitionPanel.sectionGroups'),
                                d = (0, i.Om)(
                                    (e) => {
                                        const t = u.U2(l.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: s.jv },
                                ),
                                m = (0, i.Om)(() => l.get().length),
                                p = (0, i.Om)(() => u.UI(l.get(), (e) => e.intCD), { equals: s.jv }),
                                b = (0, i.Om)((e) => d(e).specifications.length),
                                g = (0, i.Om)(
                                    (e, t) => {
                                        const n = d(e),
                                            a = u.U2(n.specifications, t);
                                        if (!a) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: s.jv },
                                ),
                                E = (0, i.Om)(
                                    (e, t) => {
                                        const n = d(e),
                                            a = u.U2(n.price.price, t);
                                        if (!a) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: s.jv },
                                ),
                                h = (0, i.Om)(
                                    (e, t) => {
                                        const n = d(e),
                                            a = u.U2(n.price.defPrice, t);
                                        if (!a) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: s.jv },
                                ),
                                v = (0, i.Om)((e) => d(e).price.price.length),
                                f = (0, i.Om)((e) => d(e).price.defPrice.length),
                                A = (0, i.Om)(() => {
                                    const e = c.get().selectedSlot,
                                        t = u.U2(_.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = u.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = u.U2(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const s = u.U2(a.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: o,
                                shellsSlots: l,
                                ammunitionPanel: c,
                                sectionGroups: _,
                                computes: Object.assign({}, a, {
                                    shells: {
                                        length: m,
                                        shell: d,
                                        specificationsLength: b,
                                        specification: g,
                                        price: E,
                                        priceLength: v,
                                        defPriceLength: f,
                                        defPrice: h,
                                        ids: p,
                                    },
                                    selectedSlotSpecialization: A,
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
                    l = o[0],
                    c = o[1];
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => A });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3457),
                    i = n(2106),
                    r = n(6373),
                    o = n(6179),
                    l = n.n(o);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    b = 'Action_image_e9',
                    g = 'Action_button_74',
                    E = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    v = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var f;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(f || (f = {}));
                const A = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: A = !1,
                    disabledTooltipText: C,
                    tooltipBodyPath: D,
                    buttonType: S = i.L.primary,
                    isModernized: F,
                    isFreeToDemount: B,
                    level: y,
                    onClick: w,
                }) => {
                    const k = (0, o.useRef)(null),
                        x = (0, o.useRef)(f.Hidden),
                        T = (0, o.useRef)(!1),
                        I = (0, o.useState)(!a),
                        N = I[0],
                        O = I[1],
                        L = (0, o.useState)(!1),
                        M = L[0],
                        P = L[1],
                        $ = (0, o.useState)(),
                        H = $[0],
                        j = $[1],
                        z = (0, o.useCallback)(() => {
                            const e = x.current;
                            e === f.FadeIn
                                ? ((x.current = f.Hidden), O(!0))
                                : e === f.FadeOut && (x.current = f.Visible);
                        }, []);
                    (0, o.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', z),
                                () => {
                                    e.removeEventListener('animationend', z);
                                }
                            );
                    }, [z]),
                        (0, o.useEffect)(() => {
                            a !== T.current &&
                                (a ? ((x.current = f.FadeOut), O(!1)) : (x.current = f.FadeIn), (T.current = a));
                        }, [a]),
                        (0, o.useEffect)(() => {
                            if (M) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [M]),
                        (0, o.useEffect)(() => () => H && clearTimeout(H), [H]);
                    const G = (0, o.useCallback)(() => {
                            M || (P(!0), x.current === f.Visible && j(setTimeout(() => w(t), 200)));
                        }, [t, w, M]),
                        W = F ? v(t, y) : t,
                        Z = (0, o.useMemo)(() => {
                            if (A) return { body: C, isEnabled: Boolean(C) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? v(e, t) : e))(t, y, B, F);
                            return {
                                header: E.title.$dyn(e),
                                body: h.includes(e) ? void 0 : E.description.$dyn(D || e),
                            };
                        }, [t, A, C, B, F, y, D]),
                        V = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(W)})`,
                            }),
                            [W, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, a ? d : _, N && m) },
                        l().createElement(
                            r.i,
                            Z,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    u.u5,
                                    { onClick: G, type: S, mixClass: g, disabled: A },
                                    l().createElement('div', { className: b, style: V }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => h });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u),
                    r = n(3457),
                    o = n(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    _ = 'CtaButtons_substrate_2d',
                    d = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: u,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: E,
                }) => {
                    const h = (0, a.useCallback)(() => {
                            u(t, g);
                        }, [t, u, g]),
                        v = (0, a.useMemo)(() => {
                            if (l) {
                                const t = i()(m, g && p);
                                return s().createElement(
                                    'div',
                                    { className: c },
                                    s().createElement('div', { className: _ }),
                                    g && s().createElement('div', { className: d }),
                                    s().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, g]);
                    return s().createElement(o.i, n, s().createElement(r.u5, b({}, E, { onClick: h }), v));
                };
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    s().createElement(
                        'div',
                        { className: l },
                        e.map((e) => s().createElement(g, E({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(9916),
                    i = n(6179),
                    r = n.n(i),
                    o = n(2558),
                    l = n(8934),
                    c = n(8529);
                const _ = ({ children: e, when: t, canAccept: n }) => {
                    const a = (0, i.useCallback)((e, t) => {
                            (0, u.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
                            });
                        }, []),
                        _ = (0, i.useCallback)(
                            (e) => {
                                a(e, c.Z.base__enter);
                            },
                            [a],
                        ),
                        d = (0, i.useCallback)(
                            (e) => {
                                a(e, c.Z.base__exit);
                            },
                            [a],
                        );
                    return t
                        ? r().createElement(
                              o.Z,
                              null,
                              r().createElement(
                                  l.Z,
                                  { in: n, timeout: 500, onEnter: _, onExit: d, key: `index-${n}` },
                                  r().createElement('div', { className: s()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : r().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, n) => {
                'use strict';
                n.d(t, { my: () => E, sF: () => f });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3403),
                    i = n(6179),
                    r = n.n(i),
                    o = n(1922),
                    l = n(3934),
                    c = n(5310),
                    _ = n(5851),
                    d = n(2306),
                    m = n(7198),
                    p = n(5178),
                    b = n(6826),
                    g = n(628);
                let E, h;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(E || (E = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(h || (h = {}));
                const v = R.strings.tank_setup.dealPanel,
                    f = (0, u.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: n = o.cJ.Medium,
                            panelType: a = h.Row,
                            priceLabel: u = v.toBePaid(),
                            autoRenewalLabel: E,
                            onAutoRenewalChanged: f,
                            onDealConfirmed: A,
                            onDealCancelled: C,
                        }) => {
                            const D = (0, p.t)(),
                                S = D.model,
                                F = (0, i.useRef)(null),
                                B = n === o.cJ.Tiny || n === o.cJ.Small,
                                y = a === h.Row,
                                w = Boolean(S.totalItemsInStorage.get()),
                                k = Boolean(S.price.get().length),
                                x = B && w && k;
                            return r().createElement(
                                d.h.Provider,
                                { value: D },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            g.Z.base,
                                            n && g.Z[`base__${n}`],
                                            e && g.Z.base__renewal,
                                            !y && g.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        r().createElement(
                                            'div',
                                            { className: s()(g.Z.renewal, !y && g.Z.renewal__dialog) },
                                            r().createElement(_.Y, { renewType: e, onValueChanged: f, label: E }),
                                        ),
                                    r().createElement(
                                        c.f,
                                        { when: y, canAccept: S.canAccept.get() },
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            w &&
                                                r().createElement(
                                                    'div',
                                                    { className: s()(g.Z.storage, n && g.Z[`storage__${n}`]) },
                                                    !B &&
                                                        r().createElement(
                                                            'div',
                                                            { className: g.Z.from },
                                                            v.fromStorage(),
                                                        ),
                                                    r().createElement(l.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: S.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            x && r().createElement('div', { className: g.Z.plus }),
                                            k &&
                                                r().createElement(
                                                    'div',
                                                    { className: s()(g.Z.totalPrice, x && g.Z.totalPrice__mixed) },
                                                    r().createElement(b.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: u,
                                                        isHideMessage: B && y,
                                                    }),
                                                ),
                                            t &&
                                                S.canAccept.get() &&
                                                r().createElement(
                                                    'div',
                                                    { className: g.Z.control },
                                                    r().createElement(m.Z, {
                                                        isDisabled: S.isDisabled.get(),
                                                        canCancel: S.canCancel.get(),
                                                        onCancel: () => C && C(),
                                                        onConfirm: () => A && A(),
                                                        confirmButtonRef: F,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => c });
                var a = n(2262),
                    s = n(6373),
                    u = n(3403),
                    i = n(6179),
                    r = n.n(i),
                    o = n(8175),
                    l = n(2306);
                const c = (0, u.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: n = o.my.General,
                    }) => {
                        const u = (0, l.o)(),
                            c = u.model,
                            _ = u.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, i.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            p = (0, i.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(n),
                                    a = n === o.my.General ? '' : e.body.$dyn(n);
                                return { header: String(t || e.header.general()), body: a ? String(a) : void 0 };
                            }, [n]);
                        return r().createElement(
                            s.i,
                            p,
                            r().createElement(a.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: e,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            1957: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => r });
                var a = n(3457),
                    s = n(6179),
                    u = n.n(s),
                    i = n(2527);
                const r = u().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: s }) =>
                    u().createElement(
                        'div',
                        { ref: s, className: i.Z.base, id: 'deal-panel-confirm' },
                        u().createElement(
                            a.u5,
                            { size: a.qE.medium, disabled: t, onClick: () => n && n() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3457),
                    s = n(6373),
                    u = n(7383),
                    i = n(6179),
                    r = n.n(i),
                    o = n(1957),
                    l = n(8099);
                const c = r().memo(
                    ({
                        applyBtnString: e = u.YR,
                        isDisabled: t,
                        canCancel: n,
                        onCancel: i,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = r().createElement(o.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return r().createElement(
                            'div',
                            { className: l.Z.base },
                            t
                                ? r().createElement(
                                      s.i,
                                      { body: d.tooltip.notEnough() },
                                      r().createElement('div', null, m),
                                  )
                                : m,
                            r().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                r().createElement(
                                    a.u5,
                                    {
                                        size: a.qE.medium,
                                        type: a.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !n,
                                        onClick: i,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => l });
                var a = n(3403),
                    s = n(6179),
                    u = n.n(s),
                    i = n(8175),
                    r = n(5178);
                const o = ['parentModelPath'];
                const l = (0, a.Pi)((e) => {
                    let t = e.parentModelPath,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                u = Object.keys(e);
                            for (a = 0; a < u.length; a++) (n = u[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, o);
                    const a = `${t}.dealPanel`;
                    return u().createElement(r.k, { options: { context: a } }, u().createElement(i.sF, n));
                });
            },
            6826: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => c });
                var a = n(6483),
                    s = n.n(a),
                    u = n(6179),
                    i = n.n(u),
                    r = n(8401),
                    o = n(5178),
                    l = n(1523);
                const c = ({ parentId: e, isHideMessage: t, priceLabel: n }) => {
                    const a = (0, o.t)().model;
                    return i().createElement(
                        'div',
                        { id: `${e}-total-price`, className: l.Z.base },
                        i().createElement('div', { className: s()(l.Z.message, t && l.Z.message__hidden) }, n),
                        i().createElement(r.t, {
                            ignoreDiscount: !0,
                            bigSize: !0,
                            price: a.price.get(),
                            defPrice: a.defPrice.get(),
                            discount: a.discount.get(),
                            priceSeparator: i().createElement('div', { className: l.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => s, o: () => u });
                var a = n(6179);
                const s = (0, a.createContext)(null),
                    u = () => {
                        const e = (0, a.useContext)(s);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => s, t: () => u });
                const a = (0, n(3215).q)()(
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
                    s = a[0],
                    u = a[1];
            },
            8750: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => l, F: () => o });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let o;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(o || (o = {}));
                const l = ({ type: e = o.SMALL, imageSource: t }) => {
                    const n = i()(r.base, e !== o.SMALL && r[`base__${e}`]),
                        u = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: n, style: u });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3649),
                    i = n(6179),
                    r = n.n(i),
                    o = n(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: a,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, u.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? r().createElement(
                                              'span',
                                              { key: t, className: s()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          r().createElement(
                                              'span',
                                              { key: t, className: c },
                                              r().createElement(o.n, {
                                                  mediaSize: n,
                                                  blocks: (0, o.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            b = (0, i.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? r().createElement(
                                                      'span',
                                                      { key: t, className: s()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : r().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return r().createElement(
                            'div',
                            { id: `${e}-details`, className: s()(l, a) },
                            m ? p : r().createElement(o.n, { mediaSize: n, blocks: b, linesCount: d }),
                        );
                    };
            },
            3267: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => u });
                var a = n(6179),
                    s = n.n(a);
                const u = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                    n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => d });
                var a = n(6483),
                    s = n.n(a),
                    u = n(7405),
                    i = n(329),
                    r = n(6179),
                    o = n.n(r);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: a = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length);
                        return o().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (a || Boolean(e.value)) &&
                                    o().createElement(
                                        r.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        o().createElement(
                                            'div',
                                            { className: s()(c, p && _) },
                                            o().createElement(u.F, {
                                                key: t,
                                                isDiscount: p,
                                                size: d ? i.et.big : i.et.small,
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
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { S: () => p, y: () => m });
                var a = n(6483),
                    s = n.n(a),
                    u = n(8089),
                    i = n(8526),
                    r = n(5521),
                    o = n(7727),
                    l = n(6179),
                    c = n.n(l),
                    _ = n(1922);
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
                    m = 'setup-content',
                    p = ({ content: e, panel: t, button: n, show: a = !0, onAnimationDone: p, onClose: b }) => {
                        const g = (0, _.GS)(),
                            E = (0, l.useRef)(null),
                            h = (0, l.useRef)(!1);
                        (0, i.gd)(r.n.ESCAPE, b);
                        const v = !t,
                            f = (0, l.useCallback)(
                                (e) => {
                                    p && e.target === E.current && p();
                                },
                                [p],
                            );
                        return (
                            (0, l.useEffect)(() => {
                                a && (h.current = !0), h.current && (0, o.G)('cons_select_view');
                            }, [a]),
                            (0, l.useEffect)(() => {
                                const e = E.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', f),
                                        () => {
                                            e.removeEventListener('animationend', f);
                                        }
                                    );
                            }, [f]),
                            c().createElement(
                                'div',
                                { className: s()(d.base, a && d.base__shown, v ? d.base__compare : d.base__setup) },
                                v && c().createElement('div', { className: d.back }),
                                n,
                                c().createElement(
                                    'div',
                                    { className: s()(d.close, g && d[`close__${g}`], !a && d.close__hidden) },
                                    c().createElement(u.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: b,
                                    }),
                                ),
                                c().createElement(
                                    'div',
                                    {
                                        id: m,
                                        ref: E,
                                        className: s()(
                                            d.content,
                                            v && d.content__compare,
                                            !a && !h.current && d.content__invisible,
                                            d['content__' + (a ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    e,
                                ),
                                t && c().createElement('div', { className: d.panel }, t),
                            )
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    s = n.n(a),
                    u = n(1856),
                    i = n(3138),
                    r = n(9916),
                    o = n(6179),
                    l = n.n(o),
                    c = n(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af',
                    m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement('span', { key: t }, `${e} `)),
                    p = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, o.useState)(e),
                            m = a[0],
                            p = a[1],
                            b = (0, o.useState)({ width: 0, height: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, o.useRef)(null),
                            v = (0, o.useRef)({ shortened: !1 }),
                            f = (0, o.useCallback)(() => {
                                (0, r.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = h.current;
                                        if (a && isFinite(n)) {
                                            const e = i.O.view.remToPx(t * n);
                                            E({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, o.useEffect)(() => {
                            if (e.length) return v.current.shortened && (v.current.shortened = !1), (0, u.v)(f);
                        }, [e, n, f]),
                            (0, o.useEffect)(() => {
                                if (g.height && !v.current.shortened) {
                                    const t = (0, c.M)(h, g.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        n.push(l().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (v.current.shortened = !0);
                                    }
                                }
                            }, [e, g, n]);
                        const A = (0, o.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: s()(_, g.height && d), style: A }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => u });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    u = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                u = Array.from(n.children);
                            if (u.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!s(e[n], t)) return -1;
                                    let a = 0,
                                        u = n - 1,
                                        i = !1;
                                    for (; u - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (u - a + 1));
                                        (i = s(e[n], t)), i ? (u = n) : (a = n);
                                    }
                                    return i || s(e[u], t) ? a : u;
                                })(u, a);
                                if (t > 0) {
                                    const n = u[t].getBoundingClientRect();
                                    return e.right - n.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => B });
                var a = n(6483),
                    s = n.n(a),
                    u = n(8526),
                    i = n(5521),
                    r = n(7727),
                    o = n(6179),
                    l = n.n(o),
                    c = n(3978);
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
                        availableMaximum: n,
                        maximum: a,
                        picker: u,
                        allowSlide: i,
                        theme: r = d,
                    }) => {
                        const o = {
                            '--progress-base': r.bgImageBase,
                            '--progress-line-base': r.line.bgColorBase,
                            '--progress-line-disabled': r.line.bgColorDisabled,
                            '--progress-line-finished': r.line.bgColorFinished,
                            '--progress-pattern-base': r.pattern.bgImageBase,
                            '--progress-pattern-disabled': r.pattern.bgImageDisabled,
                            '--progress-pattern-finished': r.pattern.bgImageFinished,
                            '--progress-glow': `url('${r.glow}')`,
                            '--progress-glow-small': `url('${r.glowSmall}')`,
                            '--progress-delta-color': r.delta.color,
                            '--progress-delta-shadow': r.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: o },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !i && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                u && l().createElement('div', { className: _.picker }, u),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    E = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = s()(b, n && g, t && E);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: a }),
                        );
                    },
                    v = 'Slider_base_2c',
                    f = 'Slider_slideArea_dd',
                    A = 'Slider_editor_5c',
                    C = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    S = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    F = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const u = s()(S.base, n && S.base__enabled, S[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: u, onClick: a });
                    },
                    B = ({
                        parentId: e,
                        currentValue: t,
                        maximum: n,
                        sliderMaximum: a,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: b = !0,
                        stepCount: g = 1,
                    }) => {
                        const E = (0, o.useRef)(null),
                            S = (0, o.useRef)({ down: !1, move: !1, over: !1 }),
                            B = (0, o.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            y = (0, o.useState)(t),
                            w = y[0],
                            k = y[1],
                            x = (0, o.useState)(!1),
                            T = x[0],
                            I = x[1],
                            N = (0, o.useState)(!1),
                            R = N[0],
                            O = N[1],
                            L = (0, o.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = B.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = n % g;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [g],
                            ),
                            M = (0, o.useCallback)(
                                (e, t) => {
                                    if (!E.current) return 0;
                                    const n = E.current.getBoundingClientRect(),
                                        a = B.current.maximum,
                                        s = n.width / a,
                                        u = e - n.left,
                                        i = Math.floor(s > 0 ? u / s : u);
                                    if (i > a) return a;
                                    if (i <= 0) return 0;
                                    if (g > 1) {
                                        let e = i - (i % g);
                                        const n = i - e;
                                        return (
                                            n > 0 && ((t && i > B.current.currentValue) || n > 0.5 * g) && (e += g), e
                                        );
                                    }
                                    return i;
                                },
                                [g],
                            ),
                            P = (0, o.useCallback)(
                                (e) => {
                                    const t = B.current,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum;
                                    e < a ? (e = a) : e > n && (e = n),
                                        B.current.currentValue !== e && (k(e), (B.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            $ = t < a,
                            H = t > 0,
                            j = (0, o.useCallback)(() => {
                                if ($ && S.current.over) {
                                    const e = L(!0);
                                    P(e);
                                }
                            }, [$, L, P]),
                            z = (0, o.useCallback)(() => {
                                if (H && S.current.over) {
                                    const e = L(!1);
                                    P(e);
                                }
                            }, [H, L, P]),
                            G = (0, o.useCallback)(() => {
                                (S.current.down = !1), O(!1);
                            }, []),
                            W = (0, o.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && S.current.down) {
                                        S.current.move = !0;
                                        const t = M(e.clientX);
                                        P(t);
                                    } else G();
                                },
                                [G, M, P],
                            );
                        (0, u.gd)(i.n.ARROW_UP, j, !1, !0),
                            (0, u.gd)(i.n.ARROW_RIGHT, j, !1, !0),
                            (0, u.gd)(i.n.ARROW_DOWN, z, !1, !0),
                            (0, u.gd)(i.n.ARROW_LEFT, z, !1, !0),
                            (0, o.useEffect)(() => {
                                B.current.maximum = n;
                            }, [n]),
                            (0, o.useEffect)(() => {
                                if (R)
                                    return (
                                        document.addEventListener('mouseup', G),
                                        document.addEventListener('mousemove', W),
                                        () => {
                                            document.removeEventListener('mouseup', G),
                                                document.removeEventListener('mousemove', W);
                                        }
                                    );
                            }, [R, W, G]),
                            (0, o.useEffect)(() => {
                                (B.current.sliderMaximum = a), (B.current.sliderMinimum = _);
                            }, [a, _]),
                            (0, o.useEffect)(() => {
                                t !== B.current.currentValue && ((B.current.currentValue = t), k(t));
                            }, [t]);
                        const Z = (0, o.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((S.current.down = !0), O(!0));
                                },
                                [d],
                            ),
                            V = (0, o.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = M(e.clientX, !S.current.move),
                                        n = B.current,
                                        a = n.currentValue,
                                        s = n.sliderMaximum,
                                        u = n.sliderMinimum;
                                    P(t), (0, c.u)(a, t, s, u), (S.current.move = !1);
                                },
                                [M, d, P],
                            ),
                            U = (0, o.useCallback)(() => {
                                (S.current.over = !0), I(!0), (0, r.G)('highlight');
                            }, []),
                            q = (0, o.useCallback)(() => {
                                (S.current.over = !1), I(!1);
                            }, []),
                            X = (0, o.useCallback)(
                                (e) => {
                                    const t = B.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        u = L(e.deltaY > 0);
                                    P(u), (0, c.u)(n, u, a, s);
                                },
                                [L, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: E, onMouseEnter: U, onMouseLeave: q, onWheel: X, className: v },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(A, C) },
                                        l().createElement(F, { parentId: e, type: 'minus', isEnabled: H, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(A, D) },
                                        l().createElement(F, { parentId: e, type: 'plus', isEnabled: $, onClick: j }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: V, onMouseDown: Z, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: w,
                                    availableMaximum: a,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: T }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => o });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    o = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const u = i()(r.base, e && r.base__fitting),
                            o = i()(r.icon, r[`icon__${t}`]),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: u },
                            s().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => o });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    o = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: u,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = i()(
                            r.base,
                            !e && r[`base__${o}`],
                            t && r[`base__${t}`],
                            n && !c && !a && r.base__selected,
                            c && r['base__dragIn' + (n ? 'Active' : '')],
                            l && r.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, u);
                    };
            },
            8598: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => l });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = i()(r, !e && o);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, n) => {
                'use strict';
                n.d(t, { c: () => p });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3977),
                    i = n(6179),
                    r = n.n(i),
                    o = n(906),
                    l = n(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    p = ({
                        level: e,
                        overlayType: t,
                        isTemporary: n,
                        withAttention: a,
                        imageSource: p,
                        isIncompatible: b,
                    }) => {
                        const g = (0, i.useMemo)(() => {
                                const n = t === u.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            E = (0, i.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !g && Boolean(t) && e;
                        return r().createElement(
                            'div',
                            null,
                            h && r().createElement(l.a, { level: e }),
                            r().createElement('div', { className: s()(c, (n || a) && _), style: E }),
                            a && r().createElement('div', { className: d }),
                            b && r().createElement('div', { className: m }),
                            g && r().createElement(o.r, { isTemporary: n, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => o });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    o = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = i()(r.base, r[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    s = n(6179),
                    u = n.n(s),
                    i = n(1922),
                    r = n(6483),
                    o = n.n(r),
                    l = n(3457),
                    c = n(7078);
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
                        isSpecializationActive: n = !0,
                        isDynamic: a,
                        mediaSize: r,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const b = r !== i.cJ.None,
                            g = (0, s.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            E = (0, s.useMemo)(() => {
                                let n = '';
                                b && (n = (r === i.cJ.Large || r === i.cJ.Huge ? i.cJ.Large : i.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, r, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!E) return null;
                        const v = o()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${r}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            f = o()(_.icon, b && _[`icon__${r}`]),
                            A = b ? '' : _.specializationWrapper,
                            C = u().createElement(
                                'div',
                                { key: e, className: v },
                                u().createElement('div', { className: _.glow }),
                                u().createElement('div', { className: f, style: E }),
                            );
                        return u().createElement(
                            c.t,
                            { args: h },
                            d && n
                                ? u().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      C,
                                  )
                                : u().createElement('div', { className: A }, C),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: s = i.cJ.None,
                    activeSpecsMask: r,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? u().createElement(
                              'div',
                              { className: m, key: r },
                              a.UI(e, (e, a) =>
                                  u().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: s,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            3934: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => d });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                const r = 'Storage_base_53',
                    o = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = i()(r, e && o),
                            a = i()(c, 0 === t && _);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement('div', { className: l }),
                            s().createElement('div', { className: a }, t),
                        );
                    };
            },
            9605: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => h });
                var a = n(6179),
                    s = n.n(a),
                    u = n(6483),
                    i = n.n(u);
                let r;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(r || (r = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    g = 'SwitchButton_buttonWarning_3f',
                    E = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: n, isHovered: u }) => {
                        const h = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            v = e === n,
                            f = !v && t === r.WARNING;
                        return s().createElement(
                            'div',
                            { className: i()(o, { [l]: v, [c]: f, [m]: u }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: g }),
                            s().createElement('div', { style: h, className: E }),
                        );
                    };
            },
            9344: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    s = n.n(a),
                    u = n(9480),
                    i = n(7727),
                    r = n(6179),
                    o = n.n(r),
                    l = n(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: n, states: a, isDisabled: m, groupId: p }) => {
                        const b = (0, r.useRef)(null),
                            g = (0, r.useState)(!1),
                            E = g[0],
                            h = g[1],
                            v = (n + 1) % t,
                            f = (0, r.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: v });
                            }, [p, m, v, e]),
                            A = (0, r.useCallback)(() => {
                                m || (h(!0), i.$.playHighlight());
                            }, [m]),
                            C = (0, r.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: D,
                                onClick: f,
                                onMouseEnter: A,
                                onMouseLeave: C,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                o().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: u.MH(a, t),
                                    currentIndex: n,
                                    isHovered: E,
                                }),
                            ),
                            m && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => y });
                var a = n(4888),
                    s = n(7383),
                    u = n(3403),
                    i = n(6179),
                    r = n.n(i),
                    o = n(2558),
                    l = n(8934),
                    c = n(3220),
                    _ = n(5958);
                const d = 'BackEffects_shine_f6',
                    m = 'BackEffects_sparks_55',
                    p = 'BackEffects_nut_79',
                    b = 'BackEffects_wrench_5a',
                    g = { enterActive: 'BackEffects_shine__enterActive_54' },
                    E = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    h = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    v = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    f = [a.dZ, a.sH],
                    A = r().memo(({ in: e, actionType: t }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                l.Z,
                                { in: e, timeout: _.Dp, classNames: g },
                                r().createElement('div', { className: d }),
                            ),
                            r().createElement(
                                l.Z,
                                { in: e, timeout: _.IG, classNames: E },
                                r().createElement('div', { className: m }),
                            ),
                            f.includes(t) &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        l.Z,
                                        { in: e, timeout: _.wx, classNames: h },
                                        r().createElement('div', { className: p }),
                                    ),
                                    r().createElement(
                                        l.Z,
                                        { in: e, timeout: _.Kz, classNames: v },
                                        r().createElement('div', { className: b }),
                                    ),
                                ),
                        ),
                    ),
                    C = 'ColorMask_base_60',
                    D = 'ColorMask_base__enterActive_62',
                    S = ({ inProp: e, maskImage: t }) =>
                        r().createElement(
                            l.Z,
                            { in: e, timeout: _.Qj, classNames: { enterActive: D } },
                            r().createElement('div', { className: C, style: { maskImage: `url(${t})` } }),
                        ),
                    F = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    B = { enter: F.base__enter, exit: F.base__enter },
                    y = (0, u.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: u,
                            isEmpty: d = !1,
                            imageSource: m,
                            itemInstalledSetupIndex: p,
                        }) => {
                            const b = (0, c.t)().model.lastSlotAction.get(),
                                g = b.leftID,
                                E = b.rightID,
                                h = b.leftIntCD,
                                v = b.rightIntCD,
                                f = b.actionType,
                                C = b.intCD,
                                D = (0, i.useState)(!0),
                                y = D[0],
                                w = D[1],
                                k = (0, i.useState)(!0),
                                x = k[0],
                                T = k[1],
                                I = (0, i.useState)(m),
                                N = I[0],
                                R = I[1],
                                O = (0, i.useState)(n),
                                L = O[0],
                                M = O[1],
                                P = (0, i.useState)(p),
                                $ = P[0],
                                H = P[1],
                                j = (0, i.useRef)(),
                                z = (0, i.useRef)(),
                                G = [a._2, a.dZ, a.sH],
                                W = (C === n || C === L) && $ !== p && G.includes(f),
                                Z = -1 === h || -1 === v,
                                V = u ? `base${u[0].toUpperCase() + u.slice(1)}` : 'base',
                                U = _.Sr[f] || 0;
                            (0, i.useEffect)(
                                () => () => {
                                    j.current && clearTimeout(j.current), z.current && clearTimeout(z.current);
                                },
                                [],
                            ),
                                (0, i.useEffect)(() => {
                                    d || R(m);
                                }, [d, m]);
                            const q = (0, i.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, B);
                                        switch (f) {
                                            case a.Xo: {
                                                const e = g === t ? _.mI.RIGHT : _.mI.LEFT,
                                                    a = E - g != 1 ? _.mI.SWAP : '';
                                                (n.enterDone = F[`${V}__enter${e}${a}`]),
                                                    (n.exit = F[`${V}__exit${e}${a}`]),
                                                    Z &&
                                                        (d
                                                            ? (n.enterDone = F[`${V}__enter${_.mI.FADE}`])
                                                            : (n.exit = F[`${V}__exit${_.mI.FADE}`]));
                                                break;
                                            }
                                            case a._2:
                                                (n.enterDone = F[`${V}__enter${_.mI.DESTROY}`]),
                                                    (n.exit = F[`${V}__exit${_.mI.DESTROY}`]),
                                                    (j.current = setTimeout(() => w(!0), _.YJ)),
                                                    T(!0);
                                                break;
                                            case a.sH:
                                            case a.dZ:
                                                (n.enter = F[`${V}__enter${_.mI.DEMOUNT}${_.mI.FADE}`]),
                                                    (n.exit = F[`${V}__exit${_.mI.DEMOUNT}`]),
                                                    (j.current = setTimeout(() => w(!0), _.Ij));
                                                break;
                                            case a.eC:
                                            case a.FR:
                                                if (u !== s.g9) {
                                                    const e = f === a.eC ? _.mI.FITTING : _.mI.FITTING_REMOVE;
                                                    (n.enter = F[`${V}__enter${e}`]),
                                                        (n.exit = F[`${V}__exit${e}`]),
                                                        (n.exitActive = F[`${V}__exitActive${_.mI.FITTING}`]);
                                                } else
                                                    (n.enterDone = F[`${V}__enter${_.mI.FADE}`]),
                                                        (n.exit = F[`${V}__exit${_.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return r().cloneElement(e, { classNames: n, timeout: U });
                                    },
                                    [f, u, V, U, g, t, E, d, Z],
                                ),
                                X = (0, i.useCallback)(
                                    (e) => {
                                        z.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(F.base), M(n), H(p);
                                        }, U);
                                    },
                                    [U, n, p],
                                ),
                                K = (0, i.useCallback)(() => {
                                    w(!1), T(!1);
                                }, []);
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(
                                    o.Z,
                                    { component: null, childFactory: q },
                                    r().createElement(
                                        l.Z,
                                        {
                                            key: n,
                                            timeout: U,
                                            classNames: B,
                                            onEntered: X,
                                            onExiting: K,
                                            unmountOnExit: !0,
                                        },
                                        r().createElement('div', { className: F.base }, e),
                                    ),
                                ),
                                W &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(A, { in: y, actionType: f }),
                                        r().createElement(S, { inProp: x, maskImage: N }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Dp: () => o,
                    IG: () => l,
                    Ij: () => i,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => r,
                    mI: () => m,
                    wx: () => c,
                });
                var a = n(4888);
                const s = 200,
                    u = 1600,
                    i = 900,
                    r = 900,
                    o = 200,
                    l = 400,
                    c = 600,
                    _ = 600,
                    d = 1200;
                let m;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(m || (m = {}));
                const p = { [a.Xo]: s, [a.FR]: 250, [a.eC]: 250, [a._2]: 1400, [a.dZ]: u, [a.sH]: u, [a.Fd]: u };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    u = n(3403),
                    i = n(6179),
                    r = n.n(i),
                    o = n(1922),
                    l = n(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, u.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const n = (0, o.GS)(),
                            a = (0, l.t)().model.shellsSetup.get(),
                            u = a.installedCount,
                            i = a.maxCount,
                            _ = u === i,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return r().createElement(
                            'div',
                            { className: s()(c.base, !_ && c.base__incomplete) },
                            !t && r().createElement('div', { className: c.tip }, m),
                            e
                                ? `${u}/${i}`
                                : r().createElement(
                                      'div',
                                      {
                                          className: s()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${n}`],
                                          ),
                                      },
                                      `${u}/${i}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => s, u: () => u });
                var a = n(7727);
                const s = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    u = (e, t, n, s) => {
                        t > n ||
                            t < s ||
                            (t > e ? (0, a.G)('cons_ammo_roll_plus') : t < e && (0, a.G)('cons_ammo_roll_minus'));
                    };
            },
            3977: (e, t, n) => {
                'use strict';
                n.d(t, { qm: () => a });
                const a = 'equipmentModernized';
            },
            4888: (e, t, n) => {
                'use strict';
                n.d(t, {
                    DA: () => u,
                    FR: () => s,
                    Fd: () => o,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => i,
                    _2: () => c,
                    dZ: () => r,
                    eC: () => a,
                    sH: () => l,
                });
                const a = 'select',
                    s = 'undo',
                    u = 'cancel',
                    i = 'swap',
                    r = 'demount',
                    o = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one';
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => m,
                    G$: () => i,
                    S: () => p,
                    WI: () => o,
                    YN: () => r,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => u,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => l,
                    zn: () => a,
                });
                const a = 'optDevices',
                    s = 'shells',
                    u = 'consumables',
                    i = 'battleBoosters',
                    r = 'battleAbilities',
                    o = 'toggleShells',
                    l = 'toggleCamouflage',
                    c = 'apply',
                    _ = 'applyVehicle',
                    d = 'applyType',
                    m = 'equipCoinInfo',
                    p = 'simple',
                    b = 'modernized';
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            4382: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8460: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            7476: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            1960: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8529: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            2527: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var s = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], u = !0, i = 0; i < t.length; i++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((u = !1), a < s && (s = a));
                    if (u) {
                        deferred.splice(o--, 1);
                        var r = n();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, a];
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
        (__webpack_require__.j = 336),
        (() => {
            var e = {
                336: 0,
                26: 0,
                301: 0,
                826: 0,
                130: 0,
                418: 0,
                927: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                754: 0,
                803: 0,
                761: 0,
                833: 0,
                795: 0,
                723: 0,
                653: 0,
                287: 0,
                975: 0,
                197: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        s,
                        [u, i, r] = n,
                        o = 0;
                    if (u.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(n); o < u.length; o++)
                        (s = u[o]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(2288));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
