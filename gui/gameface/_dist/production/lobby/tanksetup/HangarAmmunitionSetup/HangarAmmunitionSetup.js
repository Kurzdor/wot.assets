(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7727),
                    u = a(6179),
                    i = a.n(u),
                    o = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
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
                    const f = (0, u.useRef)(null),
                        C = (0, u.useState)(a),
                        A = C[0],
                        D = C[1],
                        S = (0, u.useState)(!1),
                        F = S[0],
                        y = S[1];
                    return (
                        (0, u.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, u.useEffect)(() => {
                            D(a);
                        }, [a]),
                        i().createElement(
                            'div',
                            {
                                ref: f,
                                className: s()(
                                    o.Z.base,
                                    o.Z[`base__${n}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    A && o.Z.base__focus,
                                    F && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, r.G)(d), p && p(e));
                                },
                                onMouseMove: function (e) {
                                    b && b(e);
                                },
                                onMouseUp: function (e) {
                                    c || (E && E(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, r.G)(m),
                                        g && g(e),
                                        a && (c || (f.current && (f.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (v && v(e));
                                },
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: s()(o.Z.state, o.Z.state__default) },
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
                const _ = c;
            },
            2106: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { L: () => n, q: () => s }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(s || (s = {}));
            },
            2262: (e, t, a) => {
                'use strict';
                a.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r),
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
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        a = e.isChecked,
                        r = void 0 !== a && a,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        g = void 0 !== b && b,
                        E = e.size,
                        h = void 0 === E ? l.yB.medium : E,
                        v = e.type,
                        f = void 0 === v ? l.Rh.primary : v,
                        C = e.soundHover,
                        A = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        S = void 0 === D ? 'play' : D,
                        F = e.onMouseEnter,
                        y = e.onMouseLeave,
                        B = e.onMouseUp,
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
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, _);
                    const P = (0, n.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        j = (0, n.useState)(!1),
                        z = (j[0], j[1]),
                        W = (0, n.useCallback)(
                            (e) => {
                                p || (x && x(), k && k(e));
                            },
                            [p, x, k],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                const t = e.button === o.t.LEFT;
                                p || (t && H(!0), t && w && w(e), S && (0, i.G)(S));
                            },
                            [p, w, S],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), B && B(e));
                            },
                            [p, B],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                p || (F && F(e), A && (0, i.G)(A));
                            },
                            [p, F, A],
                        ),
                        V = (0, n.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                p || (z(!0), T && T(e));
                            },
                            [p, T],
                        ),
                        X = (0, n.useCallback)(
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
                                { className: u()(c.Z.labelContent, 's-labelContent'), style: R },
                                N || O,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: u()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: L === l.N3.Center,
                                    [c.Z.base__bottom]: L === l.N3.Bottom,
                                }),
                                onClick: W,
                                onMouseEnter: U,
                                onMouseLeave: V,
                                onMouseDown: G,
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
            8844: (e, t, a) => {
                'use strict';
                let n, s, r;
                a.d(t, { N3: () => r, Rh: () => s, yB: () => n }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var n = a(6483),
                    s = a.n(n),
                    r = a(2372),
                    u = a(6179),
                    i = a.n(u),
                    o = a(8460),
                    l = a(329);
                const c = (0, u.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: n,
                        value: u,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: b,
                    }) =>
                        i().createElement(
                            'span',
                            { className: s()(o.Z.base, o.Z[`base__${a}`], p) },
                            i().createElement(
                                'span',
                                {
                                    className: s()(
                                        o.Z.value,
                                        o.Z[`value__${n}`],
                                        !d && o.Z.value__notEnough,
                                        null == b ? void 0 : b.value,
                                    ),
                                },
                                _ && u > 0 && '+',
                                i().createElement(r.A, { value: u, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: s()(o.Z.icon, o.Z[`icon__${n}-${a}`], null == b ? void 0 : b.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            t && o.Z.stock__interactive,
                                            null == b ? void 0 : b.stock,
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
                let n, s, r;
                a.d(t, { V2: () => s, et: () => n, we: () => r }),
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
                    })(s || (s = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => u });
                var n = a(6179),
                    s = a.n(n),
                    r = a(9916);
                class u extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                u.defaultProps = { format: 'integral' };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3649),
                    u = a(6179),
                    i = a.n(u),
                    o = a(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, r.WU)(t, e) : t;
                    return i().createElement(
                        u.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            i().createElement(
                                'div',
                                { className: s()(o.Z.base, a), key: `${t}-${l}` },
                                (0, r.Uw)(t, n, e).map((e, t) =>
                                    i().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => _ });
                var n = a(3138),
                    s = a(6179),
                    r = a(1043),
                    u = a(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, u.T)(o, l, r.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(3138),
                    s = a(6536),
                    r = a(6179),
                    u = a.n(r),
                    i = a(3495),
                    o = a(1043),
                    l = a(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(i.Y),
                        a = (0, r.useState)(t),
                        c = a[0],
                        _ = a[1],
                        d = (0, r.useCallback)((e, t) => {
                            const a = n.O.view.pxToRem(e),
                                s = n.O.view.pxToRem(t);
                            _(Object.assign({ width: a, height: s }, (0, l.T)(a, s, o.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, s.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const p = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return u().createElement(i.Y.Provider, { value: p }, e);
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    s = a(7382),
                    r = a(3495);
                const u = ['children'];
                const i = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, u);
                    const i = (0, n.useContext)(r.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        _ = i.small,
                        d = i.extraSmall,
                        m = i.extraLargeWidth,
                        p = i.largeWidth,
                        b = i.mediumWidth,
                        g = i.smallWidth,
                        E = i.extraSmallWidth,
                        h = i.extraLargeHeight,
                        v = i.largeHeight,
                        f = i.mediumHeight,
                        C = i.smallHeight,
                        A = i.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: f, small: C, extraSmall: A };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && o) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && _) return t;
                        if (a.extraSmall && d) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, s.H)(t, a, D);
                        if (a.largeWidth && p) return (0, s.H)(t, a, D);
                        if (a.mediumWidth && b) return (0, s.H)(t, a, D);
                        if (a.smallWidth && g) return (0, s.H)(t, a, D);
                        if (a.extraSmallWidth && E) return (0, s.H)(t, a, D);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && h) return t;
                            if (a.largeHeight && v) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && A) return t;
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
                (0, n.memo)(i);
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => n });
                const n = (e, t, a) =>
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
                a.d(t, { YN: () => s.Y, ZN: () => n.Z });
                a(6010);
                var n = a(1039),
                    s = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var n;
                function s(e, t, a) {
                    const n = (function (e, t) {
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
                        })(t, a),
                        r = Math.min(n, s);
                    return {
                        extraLarge: r === a.extraLarge.weight,
                        large: r === a.large.weight,
                        medium: r === a.medium.weight,
                        small: r === a.small.weight,
                        extraSmall: r === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: s === a.extraLarge.weight,
                        largeHeight: s === a.large.weight,
                        mediumHeight: s === a.medium.weight,
                        smallHeight: s === a.small.weight,
                        extraSmallHeight: s === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => s, u: () => n }),
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
            8089: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => _ });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r),
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
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                            n = e.goto,
                            r = e.side,
                            i = e.type,
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
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(e, l)),
                            E = u()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            h = u()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            v = u()(o.Z.glow, null == _ ? void 0 : _.glow),
                            f = u()(o.Z.caption, o.Z[`caption__${i}`], null == _ ? void 0 : _.caption),
                            C = u()(o.Z.goto, null == _ ? void 0 : _.goto);
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
                                    onClick: a,
                                },
                                g,
                            ),
                            'info' !== i && s().createElement('div', { className: o.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: v })),
                            s().createElement('div', { className: f }, t),
                            n && s().createElement('div', { className: C }, n),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => o });
                var n = a(6179),
                    s = a.n(n),
                    r = a(2056);
                const u = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, u);
                    return s().createElement(
                        r.u,
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
                var n = a(2056),
                    s = a(6179),
                    r = a.n(s);
                const u = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, u);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: a, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, a, l, c, d]);
                        return r().createElement(
                            n.u,
                            i(
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
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var n = a(7902),
                    s = a(9916),
                    r = a(6179);
                const u = [
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
                const o = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
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
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            D = e.onShow,
                            S = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, u);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, r.useMemo)(() => A || (0, n.F)().resId, [A]),
                            w = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(a, h, { isMouseEvent: !0, on: !0, arguments: i(s) }, B),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [a, h, s, B, D]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(a, h, { on: !1 }, B),
                                        y.current.isVisible && S && S(),
                                        (y.current.isVisible = !1);
                                }
                            }, [a, h, B, S]),
                            x = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return f
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
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
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => n });
                const n = (e) => {
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
                var n = a(3138);
                function s(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return r(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const u = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: a = u, context: r = 'model' } = {}) {
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
                        const n = a(t),
                            s = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, s);
                    };
                    return {
                        subscribe: (a, s) => {
                            const u = 'string' == typeof s ? `${r}.${s}` : r,
                                o = n.O.view.addModelObserver(u, t, !0);
                            return i.set(o, a), e && a(l(s)), o;
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
                            for (var e, a = s(i.keys()); !(e = a()).done; ) {
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
                var n = a(4598),
                    s = a(9174),
                    r = a(6179),
                    u = a.n(r),
                    i = a(8246);
                const o = () => (e, t) => {
                    const a = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                m = (a, r, u) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == u ? void 0 : u.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === a ? (null == u ? void 0 : u.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: a,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        u = s.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : _(e),
                                                        u = s.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            u = Object.entries(r),
                                                            i = u.reduce(
                                                                (e, [t, a]) => ((e[a] = s.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        u.forEach(([t, a]) => {
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
                                        b = { mode: a, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === a && u ? u.controls(b) : t(b),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                p = (0, r.useRef)(!1),
                                b = (0, r.useState)(o),
                                g = b[0],
                                E = b[1],
                                h = (0, r.useState)(() => m(o, l, _)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    p.current ? f(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, r.useEffect)(() => {
                                    E(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                u().createElement(a.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(a),
                    ];
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => u });
                var n = a(2472),
                    s = a(1176);
                const r = (0, n.E)('clientResized'),
                    u = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, s.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const r = `mouse${t}`,
                                        u = l[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            s &&
                                                (u(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
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
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => u,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    });
                var n = a(527),
                    s = a(2493);
                function r(e = 'px') {
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
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2493: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => s, G: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959),
                    s = a(514);
                const r = { view: a(7641), client: n, sound: s.ZP };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => u });
                var n = a(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, n.playSound)(s[t])), e), {}),
                    u = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function s(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => s, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => s });
                var n = a(2472);
                const s = {
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => s.W,
                        displayStatusIs: () => F,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => A,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => B,
                    });
                var n = a(3722),
                    s = a(6112),
                    r = a(6538),
                    u = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
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
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
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
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    B = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const s = 2,
                    r = 16,
                    u = 32,
                    i = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, u, {
                                          arguments:
                                              ((s = r),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? s : u);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function n() {}
                a.d(t, { ZT: () => n, jv: () => r, yR: () => s });
                function s(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== a &&
                                window.subViews[a] &&
                                (n = window.subViews[a].id)),
                        { caller: a, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(6179);
                const s = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r });
                var n = a(6179);
                const s = [];
                function r(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => i });
                var n = a(3138),
                    s = a(5521),
                    r = (a(9916), a(6179));
                const u = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = s.n.NONE, t = u, a = !1, i = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', r, a),
                                () => {
                                    window.removeEventListener('keydown', r, a);
                                }
                            );
                        function r(s) {
                            if (s.keyCode === e) {
                                if (!i && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(s), a && s.stopPropagation();
                            }
                        }
                    }, [t, e, a, i]);
                }
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => s });
                var n = a(6179);
                const s = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => r });
                var n = a(6179),
                    s = a(2039);
                function r() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, s.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, a) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), t();
                                        }, a));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { n: () => n }),
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
                    })(s || (s = {}));
            },
            9480: (e, t, a) => {
                'use strict';
                a.d(t, {
                    G: () => o,
                    MH: () => r,
                    U2: () => s,
                    UI: () => i,
                    dF: () => c,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                });
                var n = a(8968);
                function s(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const r = s;
                function u(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(r(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let s = 0; s < e.length; s++) {
                        var n;
                        const r = null == (n = e[s]) ? void 0 : n.value;
                        t(r, s, e) && a.push(r);
                    }
                    return a;
                }
                function c(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        const n = u(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function _(e, t) {
                    return (function (e, t, a) {
                        const n = [];
                        for (let s = 0; s < e.length; s++) {
                            const u = r(e, s);
                            t(u, s, e) && n.push(a(u, s, e));
                        }
                        return n;
                    })(e, n.C, t);
                }
                function d(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let n = a;
                    for (let a = 0; a < e.length; a++) {
                        n = t(n, r(e, a), a, e);
                    }
                    return n;
                }
            },
            1641: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { t: () => n }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(n || (n = {}));
            },
            8968: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                a.d(t, { C: () => n });
            },
            7727: (e, t, a) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => s, G: () => n });
                const s = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                a.d(t, {
                    BN: () => i,
                    Eg: () => c,
                    Uw: () => E,
                    WU: () => r,
                    dL: () => h,
                    e: () => o,
                    uF: () => u,
                    v2: () => s,
                    z4: () => l,
                });
                var n = a(1281);
                let s;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e, t) {
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
                })(s || (s = {}));
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
                    m = (e, t, a = s.left) => e.split(t).reduce(a === s.left ? _ : d, []),
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
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(a)) return p(e);
                        if ('ja' === a) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = s.left) => {
                            let a = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = l(e);
                            return m(r, /( )/, t).forEach((e) => (a = a.concat(m(e, n, s.left)))), a;
                        })(e, t);
                    },
                    E = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : g(e, t))),
                    h = (e) => r(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, a, s);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(r) : (this._views[a] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const r = s;
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
                    Sw: () => r.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => u.Z5,
                    B0: () => i,
                    c9: () => v,
                    ry: () => E,
                    Eu: () => h,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                const s = n;
                var r = a(1358);
                var u = a(8613);
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
                function b(e, t, a, n, s, r, u) {
                    try {
                        var i = e[r](u),
                            o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, s);
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
                                        a = arguments;
                                    return new Promise(function (n, s) {
                                        var r = e.apply(t, a);
                                        function u(e) {
                                            b(r, n, s, u, i, 'next', e);
                                        }
                                        function i(e) {
                                            b(r, n, s, u, i, 'throw', e);
                                        }
                                        u(void 0);
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
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        s = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                    return s;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, r, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => v(i.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var A = a(7572);
                const D = s.instance,
                    S = {
                        DataTracker: r.Z,
                        ViewModel: A.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, s = R.invalid('resId'), r) => {
                            const u = m.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + u.x,
                                    y: m.O.view.pxToRem(c) + u.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            v(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const s = Object.prototype.toString.call(t[n]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < s.length; t++) a[n].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: u.Z5,
                        UserLocale: u.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => r, Z5: () => n, cy: () => s });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    r = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            7260: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => c });
                var n = a(6179),
                    s = a.n(n),
                    r = a(280),
                    u = a(8852);
                const i = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, n.useMemo)(() => t || {}, [t]);
                        let d = i.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const a = d[0],
                                n = o.exec(a),
                                b = l.exec(a),
                                g = d[1];
                            if (n && b) {
                                const e = n[0],
                                    i = e + p++ + e;
                                (m = m.replace(a, `%(${i})`)),
                                    (_[i] = u.Z[e]
                                        ? s().createElement(
                                              'span',
                                              { className: u.Z[e] },
                                              s().createElement(r.z, { text: g, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: c(e) },
                                              s().createElement(r.z, { text: g, binding: t }),
                                          ));
                            }
                            d = i.exec(e);
                        }
                        return s().createElement(r.z, { text: m, classMix: a, binding: _ });
                    });
            },
            3521: (e, t, a) => {
                'use strict';
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
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                a.d(t, { WL: () => i, aR: () => o, jZ: () => r, yG: () => u });
                const r = (e, t = []) => {
                        const a = document.getElementById('root');
                        a && (a.style.cursor = e ? 'grabbing' : 'default');
                        for (var s, r = n(t); !(s = r()).done; ) {
                            const t = s.value,
                                a = document.getElementById(t);
                            a && (a.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    u = (e, t, a, n) => {
                        const s = a + t,
                            r = n - t;
                        return e < s ? s : e > r ? r : e;
                    },
                    i = (e, t, a) => {
                        let s = '',
                            r = 8e3;
                        for (var u, i = n(a); !(u = i()).done; ) {
                            const e = u.value,
                                a = Math.abs(e.centerX - t);
                            a < r && ((s = e.id), (r = a));
                        }
                        return s;
                    },
                    o = (e, t) => {
                        const a = t.find((t) => t.id === e);
                        return a ? a.centerX : 0;
                    };
            },
            1820: (e, t, a) => {
                'use strict';
                let n, s;
                a.d(t, { m: () => s }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(s || (s = {}));
            },
            4301: (e, t, a) => {
                'use strict';
                a.d(t, { iN: () => r, j2: () => s, qG: () => u, s$: () => i });
                var n = a(4231);
                const s = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    r = (e) => e === n.w.Battle || e === n.w.Prebattle,
                    u = (e) => !r(e),
                    i = (e) => r(e) || e === n.w.Respawn;
            },
            7626: (e, t, a) => {
                'use strict';
                a.d(t, { YR: () => o, UW: () => c, Tu: () => l });
                var n = a(6179),
                    s = a(9152),
                    r = a(7727),
                    u = a(3521),
                    i = a(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const a = o(e),
                            n = t.filter((e) => e !== a);
                        return { selfId: a, blockOnGrabIds: [s.y, ...n] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: a, setIsExitBlocked: s, syncInitiator: o }) => {
                        const l = ((e, t, a) => {
                                const s = (0, n.useRef)([]),
                                    o = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, n.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, n.useCallback)((e, t) => {
                                        if (s.current) {
                                            const a = (0, u.WL)(e, t, s.current);
                                            a !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = a),
                                                _({ activeDragId: e, potentialDropId: a }));
                                        }
                                    }, []),
                                    p = (0, n.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const a = o.current,
                                                n = (0, u.WL)(e, t, s.current);
                                            (a.dropId = n),
                                                (a.dragId = e),
                                                (a.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && (0, r.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    b = (0, n.useCallback)(() => {
                                        const e = o.current,
                                            t = e.dragId,
                                            a = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (t || a || n) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, n.useCallback)(
                                        (e) => {
                                            const t = o.current.dropId;
                                            t && t !== e ? a(e, t) : b();
                                        },
                                        [b, a],
                                    ),
                                    E = (0, n.useCallback)((e, t) => {
                                        const a = s.current.find((t) => t.id === e);
                                        a && t && (a.centerX = t);
                                    }, []),
                                    h = (0, n.useCallback)(
                                        (e, t) => {
                                            const a = t.dragId,
                                                n = t.currentCenterX;
                                            switch (e) {
                                                case i.m.Ready:
                                                    return E(a, n);
                                                case i.m.DragStart:
                                                    return d(a);
                                                case i.m.Drag:
                                                    return m(a, n);
                                                case i.m.Drop:
                                                    return p(a, n);
                                                case i.m.DropExit:
                                                    return g(a);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, m, p, g, E],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const a = new Array(e).fill(null);
                                            s.current = a.map((e, a) => ({ id: `${t}-${a}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: h,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const t = o.current,
                                                a = t.dragId,
                                                n = t.dropId;
                                            return e === a
                                                ? (0, u.aR)(n, s.current)
                                                : e === n
                                                  ? (0, u.aR)(a, s.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, a),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            p = (0, n.useCallback)(
                                (e, t) => {
                                    if (s)
                                        switch (e) {
                                            case i.m.DragStart:
                                            case i.m.Drag:
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
                            (0, n.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, n.useEffect)(() => m, [o, m]),
                            { handleGrabberAction: p, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, a) => {
                'use strict';
                let n;
                a.d(t, { w: () => n }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(n || (n = {}));
            },
            3220: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => c, t: () => _ });
                var n = a(3215),
                    s = a(9480),
                    r = a(3946),
                    u = a(4598),
                    i = a(4301),
                    o = a(7626);
                const l = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                a = (0, r.Om)(() => t.sectionGroups.get().length),
                                n = (0, r.Om)(
                                    (e) => {
                                        const a = s.U2(t.sectionGroups.get(), e);
                                        if (!a) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, a, {
                                            sections: s.UI(a.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: s.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, a.setupSelector, {
                                                states: s.UI(a.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: u.jv },
                                ),
                                l = (0, r.Om)(() => s.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, r.Om)((e) => n(e).sections.length),
                                _ = (0, r.Om)(
                                    (e, t) => {
                                        const a = n(e),
                                            r = s.U2(a.sections, t);
                                        if (!r) throw Error(`No ammunition section found with index: ${t}`);
                                        return r;
                                    },
                                    { equals: u.jv },
                                ),
                                d = (0, r.Om)((e, t) => _(e, t).slots.length),
                                m = (0, r.Om)((e, t) => {
                                    const a = _(e, t).slots;
                                    return s.hX(a, (e) => Boolean(e) && !(0, i.j2)(e)).length;
                                }),
                                p = (0, r.Om)((e, t) => {
                                    const a = _(e, t).slots;
                                    return s.G(a, (e) => e.intCD > 0);
                                }),
                                b = (0, r.Om)(
                                    (e, t, a) => {
                                        const n = _(e, t),
                                            r = s.U2(n.slots, a);
                                        if (!r) throw Error(`No ammunition slot found with index: ${a}`);
                                        return r;
                                    },
                                    { equals: u.jv },
                                ),
                                g = (0, r.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return s.v(t, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: u.jv },
                                ),
                                E = (0, r.Om)(
                                    (e, t, a) => {
                                        const n = b(e, t, a);
                                        if (!n) throw Error(`No ammunition slot found with index: ${a}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: s.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: u.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: a, group: n },
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
            9096: (e, t, a) => {
                'use strict';
                var n = {};
                a.r(n),
                    a.d(n, {
                        Area: () => ss,
                        Bar: () => ts,
                        DefaultScroll: () => ns,
                        Direction: () => $n,
                        defaultSettings: () => Hn,
                        useHorizontalScrollApi: () => zn,
                    });
                var s = {};
                a.r(s), a.d(s, { Area: () => As, Bar: () => vs, Default: () => Cs, useVerticalScrollApi: () => rs });
                var r = a(3138),
                    u = a(7739),
                    i = a(6179),
                    o = a.n(i),
                    l = a(6483),
                    c = a.n(l),
                    _ = a(926),
                    d = a.n(_),
                    m = a(1043);
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
                        const e = (0, i.useContext)(u.YN),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
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
                            r = ((e) => {
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
                        return { mediaSize: n, mediaWidth: s, mediaHeight: r, remScreenWidth: t, remScreenHeight: a };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
                    C = {
                        [g.ExtraSmall]: '',
                        [g.Small]: d().SMALL_HEIGHT,
                        [g.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [g.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: d().SMALL,
                        [p.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [p.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [p.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, h);
                        const s = E(),
                            r = s.mediaWidth,
                            u = s.mediaHeight,
                            i = s.mediaSize;
                        return o().createElement('div', v({ className: c()(a, f[r], C[u], A[i]) }, n), t);
                    },
                    S = ['children'];
                const F = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, S);
                    return o().createElement(u.ZN, null, o().createElement(D, a, t));
                };
                var y = a(493),
                    B = a.n(y),
                    w = a(7383),
                    k = a(1856),
                    x = a(3403),
                    T = a(3815),
                    I = a(2039);
                const N = (0, i.createContext)(null);
                var O = a(5262),
                    L = a(3649);
                function M(e, t, a) {
                    const n = (0, i.useContext)(u.YN);
                    let s = Object.entries(n).filter(([e, t]) => !0 === t && e in O.u);
                    return (
                        a && (s = s.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const n = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, L.e)(t))(a, e[0])]),
                            );
                            return (e[a] = c()(t[a], ...n)), e;
                        }, {})
                    );
                }
                const P = (e, t = []) => {
                        const a = (0, i.useRef)(),
                            n = (0, i.useCallback)((...t) => {
                                a.current && a.current(), (a.current = e(...t));
                            }, t);
                        return (
                            (0, i.useEffect)(
                                () => () => {
                                    a.current && a.current();
                                },
                                [n],
                            ),
                            n
                        );
                    },
                    $ = (e, t, { listenResize: a = !0, intervalMs: n = 50, minStableTicks: s = 3 }, r) => {
                        const u = (0, i.useRef)(e()),
                            o = (0, i.useState)(0),
                            l = o[0],
                            c = o[1];
                        (0, i.useEffect)(() => {
                            let a = 0;
                            const r = setInterval(() => {
                                const n = e();
                                n !== u.current
                                    ? ((u.current = n), (a = 0), t(n))
                                    : (a++, a >= s && (t(n), clearInterval(r)));
                            }, n);
                            return () => {
                                clearInterval(r);
                            };
                        }, [e, t, l, n, s, ...r]),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    c((e) => e + 1);
                                };
                                if (a)
                                    return (
                                        engine.on('clientResized', e),
                                        () => {
                                            engine.off('clientResized', e);
                                        }
                                    );
                            }, [a]);
                    };
                var H = a(3220);
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
                    W = 'Border_border_83',
                    G = 'Border_wrapper_17',
                    Z = 'Border_active_e8',
                    U = (0, i.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: a }) => {
                        const n = (0, i.useRef)(null),
                            s = (0, i.useRef)(!1);
                        (0, i.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, i.useCallback)(() => {
                            s.current && a(), (s.current = !1);
                        }, [a]);
                        (0, i.useEffect)(() => {
                            const e = n.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const u = (0, i.useMemo)(() => ({ left: e }), [e]),
                            l = (0, i.useMemo)(() => ({ width: t }), [t]);
                        return o().createElement(
                            'div',
                            { className: z },
                            o().createElement(
                                'div',
                                { ref: n, className: W, style: u },
                                o().createElement(
                                    'div',
                                    { className: G },
                                    o().createElement('div', { className: Z, style: l }),
                                ),
                            ),
                        );
                    }),
                    V = (e, t) => {
                        const a = [];
                        for (let n = 0; n < e; n++) a.push(t(n));
                        return a;
                    };
                var q = a(6373),
                    X = a(9344),
                    K = a(2558),
                    Y = a(8934);
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
                    te = ({ children: e, index: t, setSetupSwitching: a, disabled: n = !1 }) => {
                        const s = (0, i.useRef)(1 - t),
                            r = (0, i.useMemo)(() => {
                                const e = ((a = t), (r = s.current), a === r ? '' : a > r ? ee : Q);
                                var a, r;
                                const u = e && (0, L.e)(e);
                                return n ? {} : { enter: J[`base__enter${u}`], exit: J[`base__exit${u}`] };
                            }, [t, n]);
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
                                        classNames: r,
                                        onEnter: () => a(!0),
                                        onExited: () => a(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var ae = a(4301);
                const ne = {
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
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                const ue = (e) => {
                    let t = e.size,
                        a = e.value,
                        n = e.isEmpty,
                        s = e.fadeInAnimation,
                        r = e.hide,
                        u = e.maximumNumber,
                        i = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, se);
                    const _ = n ? null : a,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > u,
                        p = c()(
                            ne.base,
                            ne[`base__${t}`],
                            s && ne.base__animated,
                            r && ne.base__hidden,
                            !_ && ne.base__pattern,
                            n && ne.base__empty,
                            i,
                        );
                    return o().createElement(
                        'div',
                        re({ className: p }, l),
                        o().createElement('div', { className: ne.bg }),
                        o().createElement('div', { className: ne.pattern }),
                        o().createElement(
                            'div',
                            { className: c()(ne.value, d && ne.value__text) },
                            m ? u : _,
                            m && o().createElement('span', { className: ne.plus }, '+'),
                        ),
                    );
                };
                ue.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var ie = a(280),
                    oe = a(7902);
                const le = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var ce = a(6536),
                    _e = a(9916);
                const de = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    me = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    pe = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const n = le(`${e}.${a}`, window);
                                return de(n) ? t(e, a, n) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    be = (e) => {
                        const t = ((e) => {
                                const t = (0, oe.F)(),
                                    a = t.caller,
                                    n = t.resId,
                                    s = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: s, modelPath: me(s, e || ''), resId: n };
                            })(),
                            a = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const s = le(me(a, `${t}.${n}`), window);
                                    return de(s) ? (e.push(s.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ge = _e.Sw.instance;
                let Ee;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Ee || (Ee = {}));
                const he = (e = 'model', t = Ee.Deep) => {
                        const a = (0, i.useState)(0),
                            n = (a[0], a[1]),
                            s = (0, i.useMemo)(() => (0, oe.F)(), []),
                            r = s.caller,
                            u = s.resId,
                            o = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                                [r, e],
                            ),
                            l = (0, i.useState)(() =>
                                ((e) => {
                                    const t = le(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return de(t) ? t.value : t;
                                })(pe(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, i.useRef)(-1);
                        return (
                            (0, ce.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Ee.Deep : Ee.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Ee.None)
                                ) {
                                    const a = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Ee.Deep
                                                ? (e === c && n((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        s = be(e);
                                    d.current = ge.addCallback(s, a, u, t === Ee.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (t !== Ee.None)
                                    return () => {
                                        ge.removeCallback(d.current, u);
                                    };
                            }, [u, t]),
                            c
                        );
                    },
                    ve = 'visible_change',
                    fe = ve,
                    Ce = ve,
                    Ae = (e, t) => {
                        const a = he('tutorialModel.triggers.items').filter((a) => {
                            if (!a) return !1;
                            const n = a.value,
                                s = n.triggers.filter((e) => e.value === t);
                            return n.componentId === e && s.length > 0;
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
                    };
                var De = a(4231);
                const Se = 'TopLabel_base_7f',
                    Fe = 'TopLabel_base__ready_00',
                    ye = 'TopLabel_text_d0',
                    Be = 'TopLabel_text__hangar_36',
                    we = 'TopLabel_text__shown_25',
                    ke = 'TopLabel_text__hidden_79',
                    xe = 'TopLabel_text__truncated_29',
                    Te = (0, i.memo)(({ panelType: e, text: t, parentRef: a, isTruncated: n = !1, show: s = !1 }) => {
                        const r = (0, i.useRef)(!1),
                            u = (0, i.useState)(!1),
                            l = u[0],
                            _ = u[1];
                        (0, i.useEffect)(() => {
                            a || (s && !r.current && (r.current = !0), _(s));
                        }, [s, a]);
                        const d = (0, i.useCallback)(() => {
                                (r.current = !0), _(!0);
                            }, []),
                            m = (0, i.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = a && a.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m);
                                        }
                                    );
                            }, [a, d, m]),
                            o().createElement(
                                'div',
                                { className: c()(Se, r.current && Fe) },
                                o().createElement(
                                    'div',
                                    { className: c()(ye, e !== De.w.Setup && Be, n && xe, s && l ? we : ke) },
                                    t,
                                ),
                            )
                        );
                    }),
                    Ie = 'notUsableSection';
                var Ne = a(7626);
                const Re = 'Section_base_8a',
                    Oe = 'Section_label_73',
                    Le = 'Section_counter_8a',
                    Me = 'Section_configLabel_c9',
                    Pe = 'Section_configText_eb',
                    $e = 'Section_configVehicleIcon_20';
                let He;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(He || (He = {}));
                const je = 'tooltip_watched';
                let ze;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(ze || (ze = {}));
                const We = 'epic_battle';
                let Ge, Ze, Ue;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Ge || (Ge = {})),
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
                    })(Ze || (Ze = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ue || (Ue = {}));
                const Ve = ['action', 'timeLimit'];
                const qe = 'metrics',
                    Xe = () => Date.now(),
                    Ke = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: a || null,
                        item_state: n || null,
                        additional_info: s || null,
                    }),
                    Ye = (e, t) => {
                        const a = (0, i.useCallback)(
                            (a, n = He.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: a,
                                            logLevel: n,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, n) => a(e, t, n);
                    },
                    Je = (e, t) => {
                        const a = Ye(e, t),
                            n = (0, i.useRef)(new Map()),
                            s = (0, i.useRef)(new Map()),
                            r = (0, i.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    (void 0 !== t && t > 0) || n.current.set(e, Xe());
                                },
                                [n],
                            ),
                            u = (0, i.useCallback)(() => {
                                n.current.clear(), s.current.clear();
                            }, [n, s]),
                            o = (0, i.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== n.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Xe());
                                },
                                [n, s],
                            ),
                            l = (0, i.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = n.current.get(e);
                                    if (void 0 === t) return;
                                    const a = s.current.get(e);
                                    if (void 0 === a) return;
                                    s.current.delete(e);
                                    const r = Xe() - a;
                                    n.current.set(e, t + r);
                                },
                                [n, s],
                            ),
                            c = (0, i.useCallback)(
                                (e, t = 0, r, u) => {
                                    const i = n.current.get(e);
                                    if (void 0 === i) return;
                                    void 0 !== s.current.get(e) && l(e), n.current.delete(e);
                                    const o = (Xe() - i) / 1e3;
                                    o <= t ||
                                        ((u = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(u, o)),
                                        a(e, r, u));
                                },
                                [n, s, a, l],
                            );
                        return [(e) => r(e), (e, t, a, n) => c(e, t, a, n), () => u(), (e) => o(e), (e) => l(e)];
                    },
                    Qe = (e) => {
                        const t = Je(e, qe),
                            a = t[0],
                            n = t[1],
                            s = t[2],
                            r = t[3],
                            u = t[4],
                            o = (0, i.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        a = e.timeLimit,
                                        s = e.logLevel;
                                    n(t, a, s, Ke(e));
                                },
                                [n],
                            );
                        return [(e) => a(e), (e) => o(e), () => s(), (e) => r(e), (e) => u(e)];
                    },
                    et = (e, t) => {
                        const a = Qe(e),
                            n = a[0],
                            s = a[1],
                            r = t.action,
                            u = t.timeLimit,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(t, Ve);
                        return (0, i.useMemo)(
                            () => ({
                                onShow: () => n(r || je),
                                onHide: () => s(Object.assign({ action: r || je, timeLimit: u || 2 }, o)),
                            }),
                            [r, u, o, n, s],
                        );
                    },
                    tt = (e, t, a, n) => {
                        const s = Qe(We),
                            r = s[0],
                            u = s[1];
                        return [
                            (0, i.useCallback)(() => r(je), [r]),
                            (0, i.useCallback)(
                                () => u({ action: je, timeLimit: 2, item: e, parentScreen: t, itemState: a, info: n }),
                                [u, e, t, a, n],
                            ),
                        ];
                    };
                var at = a(2056);
                const nt = o().memo(function ({ className: e, children: t }) {
                    const a = tt(Ze.SkillOrderTooltip, Ge.SetupView),
                        n = a[0],
                        s = a[1];
                    return o().createElement(
                        at.u,
                        {
                            contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                            onMouseEnter: n,
                            onMouseLeave: s,
                        },
                        o().createElement('div', { className: e }, t),
                    );
                });
                var st = a(7727);
                const rt = 'SlotDivider_base_60',
                    ut = () => o().createElement('div', { className: rt });
                var it = a(3267),
                    ot = a(8253),
                    lt = a(3141);
                const ct = (e) => {
                    const t = (0, i.useRef)(-1),
                        a = (0, i.useCallback)(
                            (a) => {
                                if (-1 === t.current) {
                                    const n = e(a);
                                    n &&
                                        (t.current = window.setTimeout(() => {
                                            t.current = -1;
                                        }, n));
                                }
                            },
                            [e],
                        );
                    return (0, i.useEffect)(() => () => clearTimeout(t.current), []), a;
                };
                var _t = a(8526),
                    dt = a(5521);
                const mt = 'Grabber_base_cf',
                    pt = 'Grabber_base__enabled_b0',
                    bt = 'Grabber_base__waitingUpdate_1d',
                    gt = 'Grabber_base__updating_f1',
                    Et = 'Grabber_base__active_71',
                    ht = 'Grabber_base__exit_1f',
                    vt = 'Grabber_base__showAnimation_d9';
                var ft = a(3521),
                    Ct = a(1820);
                const At = ({
                    children: e,
                    id: t,
                    containerRef: a,
                    isEnabled: n = !0,
                    onClick: s,
                    forceCenterX: u,
                    isUpdateAvailable: l,
                    handleAction: _,
                    blockOnGrabIds: d = [],
                }) => {
                    const m = E().mediaSize,
                        p = (0, i.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: t,
                        }),
                        b = (0, i.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        g = (0, i.useRef)(null),
                        h = (0, i.useState)(!1),
                        v = h[0],
                        f = h[1],
                        C = (0, i.useState)(0),
                        A = C[0],
                        D = C[1],
                        S = (function () {
                            const e = (0, i.useRef)(0);
                            return (
                                (0, I.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, i.useMemo)(
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
                        })(),
                        F = 0 !== u && n,
                        y = u ? u - b.current.startCenterX : A;
                    (0, i.useEffect)(() => {
                        if (((b.current.isValid = !1), t))
                            return (0, k.v)(() => {
                                const e = g.current,
                                    n = a.current;
                                if (n && e) {
                                    const a = e.getBoundingClientRect(),
                                        s = n.getBoundingClientRect(),
                                        r = a.left + 0.5 * a.width;
                                    (b.current = {
                                        isValid: !0,
                                        minXRestriction: s.left,
                                        maxXRestriction: s.left + s.width,
                                        startX: a.left,
                                        startCenterX: r,
                                    }),
                                        _(Ct.m.Ready, { dragId: t, currentCenterX: r });
                                }
                            });
                    }, [m]);
                    const B = (0, i.useCallback)(
                            (e) => {
                                (p.current.isDragActive = e),
                                    f(e),
                                    p.current.grabActivationPassed && !e && (0, ft.jZ)(!1, d);
                            },
                            [d],
                        ),
                        w = (0, i.useCallback)(() => {
                            _(Ct.m.DragStart, { dragId: p.current.id }),
                                (p.current.grabActivationPassed = !0),
                                (0, ft.jZ)(!0, d);
                        }, [_, d]),
                        x = (0, i.useCallback)((e) => {
                            const t = p.current,
                                a = b.current,
                                n = a.startX,
                                s = a.startCenterX,
                                r = a.minXRestriction,
                                u = a.maxXRestriction,
                                i = s - n,
                                o = e - t.clickCenterOffset;
                            t.dropCenterX = (0, ft.yG)(o, i, r, u);
                        }, []),
                        N = (0, i.useCallback)(
                            (e) => {
                                const t = p.current,
                                    a = b.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    a.isValid &&
                                    n &&
                                    !l &&
                                    g.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - a.startCenterX),
                                    B(!0));
                            },
                            [n, l, B],
                        ),
                        R = (0, i.useCallback)(() => {
                            !s || (n && b.current.isValid) || s();
                        }, [n, s]);
                    (0, _t.gd)(
                        v ? dt.n.ESCAPE : dt.n.NONE,
                        (0, T.z)(() => B(!1)),
                    ),
                        (0, i.useEffect)(() => {
                            n && u && D(0);
                        }, [u, n]);
                    const O = !v && p.current.grabActivationPassed;
                    (0, i.useLayoutEffect)(() => {
                        p.current.id = t;
                    }, [t]),
                        (0, i.useEffect)(() => {
                            if (O) {
                                const e = p.current;
                                _(Ct.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    u === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        S.run(() => _(Ct.m.DropExit, { dragId: e.id })));
                            }
                        }, [O, S, u, _]),
                        (0, i.useEffect)(() => {
                            if (n && v && p.current.id) {
                                const e = r.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return B(!1);
                                        const a = p.current,
                                            n = e.clientX;
                                        n === a.actualX && 0 === e.button && !p.current.grabActivationPassed
                                            ? s && s()
                                            : p.current.grabActivationPassed && x(n),
                                            p.current.isDragActive && B(!1);
                                    }),
                                    t = r.O.client.events.mouse.move(([e]) => {
                                        const t = p.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const a = e.clientX,
                                            n = t.grabActivationPassed;
                                        !n && w(),
                                            a !== t.actualX &&
                                                ((t.actualX = a),
                                                x(a),
                                                n && _(Ct.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                D(t.dropCenterX - b.current.startCenterX));
                                    });
                                return () => {
                                    t(), e();
                                };
                            }
                        }, [w, _, v, n, s, B, x]);
                    const L = n ? c()(mt, pt, v && Et, O && ht, F && bt, u && gt) : c()(mt, u && vt);
                    return o().createElement(
                        'div',
                        {
                            id: t,
                            ref: g,
                            onClick: R,
                            onMouseDown: N,
                            onTransitionEnd: (e) => {
                                const t = p.current;
                                e.target === g.current &&
                                    t.grabActivationPassed &&
                                    ((t.grabActivationPassed = !1), S.run(() => _(Ct.m.DropExit, { dragId: t.id })));
                            },
                            className: L,
                            style: { left: y },
                        },
                        e,
                    );
                };
                let Dt;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(Dt || (Dt = {}));
                const St = 'KeyLabel_base_ec',
                    Ft = 'KeyLabel_base__current_c2',
                    yt = 'KeyLabel_base__next_fa',
                    Bt = ({ text: e, show: t, panelType: a, shellState: n, className: s }) => {
                        if (!e) return null;
                        const r = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return o().createElement(
                            'div',
                            { className: c()(St, n === Dt.Current && Ft, n === Dt.Next && yt, s) },
                            o().createElement(Te, { isTruncated: !0, text: r, show: t, panelType: a }),
                        );
                    };
                var wt = a(7078);
                const kt = ({ children: e, slotType: t, slotId: a, isEnabled: n = !0 }) => {
                        const s = (0, i.useMemo)(() => ({ slotType: t, slotId: a }), [t, a]);
                        return o().createElement(wt.t, { isEnabled: n, args: s }, o().createElement('div', null, e));
                    },
                    xt = 'Close_base_f3',
                    Tt = 'Close_base__invisible_0e',
                    It = 'Close_base__shown_a2',
                    Nt = 'Close_base__hover_6d',
                    Rt = 'Close_base__down_2b',
                    Ot = (0, i.memo)(
                        ({ id: e, show: t = !0, onClick: a, soundHover: n = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, i.useState)(!1),
                                u = r[0],
                                l = r[1],
                                _ = (0, i.useState)(!1),
                                d = _[0],
                                m = _[1],
                                p = (0, i.useState)(!1),
                                b = p[0],
                                g = p[1],
                                E = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                h = (0, i.useCallback)(() => {
                                    m(!0), n && (0, st.G)(n);
                                }, [n]),
                                v = (0, i.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                f = (0, i.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, st.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && a && a();
                                    },
                                    [t, a],
                                );
                            (0, i.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const A = c()(xt, !b && Tt, b && t && It, u && Rt, d && Nt);
                            return o().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: v,
                                onMouseDown: f,
                                onMouseUp: C,
                                className: A,
                                onClick: E,
                            });
                        },
                    ),
                    Lt = 'Slot_base_3a',
                    Mt = 'Slot_label_e6',
                    Pt = 'Slot_close_bb',
                    $t = 'Slot_disabled_5d',
                    Ht = 'Slot_shadow_a7',
                    jt = 'Slot_category_2c';
                var zt = a(1641);
                const Wt = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: n = 0,
                        args: s,
                        isEnabled: r = !0,
                        onMouseDown: u,
                    }) => {
                        const o = (0, i.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    st.$.playYes();
                            }, [s, t, a, n]),
                            l = (0, i.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, n]),
                            c = (0, i.useCallback)(
                                (e) => {
                                    u && u(e), ((e) => e.button === zt.t.RIGHT)(e) && o();
                                },
                                [u, o],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                !1 === r && l();
                            }, [r, l]),
                            r ? (0, i.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Gt = ['children'];
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Ut = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, Gt);
                    return o().createElement(
                        Wt,
                        Zt({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var Vt = a(1396),
                    qt = a(5918);
                const Xt = (0, x.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: a,
                            isMountedMoreThanOne: n,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: u,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) => {
                            const b = (0, H.t)().model.root.get().vehicleCD,
                                g = (0, i.useState)(!0),
                                E = g[0],
                                h = g[1],
                                v = (0, Vt.K)();
                            (0, i.useEffect)(() => {
                                h(!1), v.run(() => h(!0), 100);
                            }, [b]);
                            const f = (0, i.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: a,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: n,
                                }),
                                [e, _, t, a, s, n],
                            );
                            return E
                                ? o().createElement(
                                      qt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: u,
                                          itemInstalledSetupIndex: a,
                                      },
                                      o().createElement(
                                          Ut,
                                          { isEnabled: !(m || d || r || l), args: f },
                                          o().createElement('div', null, p),
                                      ),
                                  )
                                : o().createElement('div', null, p);
                        },
                    ),
                    Kt = (0, x.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: a,
                            isSelected: n,
                            isSetupSwitching: s,
                            isSectionSelected: r,
                            onActiveSlotChanged: u,
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
                            potentialDropId: C,
                            blockOnGrabIds: A,
                            contextMenuDisabled: D,
                            groupIndex: S,
                            sectionIndex: F,
                        }) => {
                            const y = (0, H.t)().model.computes.slots.slot(S, F, t),
                                B = y.imageSource,
                                w = y.isInstalled,
                                x = y.itemInstalledSetupIdx,
                                T = y.isMountedMoreThanOne,
                                I = y.overlayType,
                                N = y.keyName,
                                R = y.categoryImgSource,
                                O = y.withAttention,
                                L = y.id,
                                M = y.intCD,
                                P = d === De.w.Setup,
                                $ = !(0, ae.s$)(d),
                                j = !(0, ae.iN)(d),
                                z = d === De.w.Compare,
                                W = P && r && $,
                                G = (0, i.useRef)(!1),
                                Z = (0, i.useRef)(null),
                                U = -1 === M;
                            (0, i.useEffect)(() => {
                                if (!G.current && r && n)
                                    return (0, k.v)(() => {
                                        u && u(Z, e, L), (G.current = !0);
                                    });
                                G.current = !0;
                            }, [L, r, n, u, e]),
                                (0, i.useEffect)(() => {
                                    n && c(Z);
                                }, [n, c]);
                            const V = (0, i.useCallback)(() => (!n && $ && !s && l(e, L), 500), [L, $, n, s, l, e]),
                                q = ct(V),
                                X = (0, i.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                K = (0, i.useCallback)(() => {
                                    j && !n && !h && !m && st.$.playHighlight();
                                }, [n, h, m, j]);
                            (0, i.useEffect)(() => {
                                C && st.$.playHighlight();
                            }, [C]);
                            const Y = (0, i.useCallback)(() => {
                                    null == _ || _(L, e);
                                }, [L, _, e]),
                                J = P && !w,
                                Q = Boolean(g && C === g),
                                ee = g && (W || z),
                                te = `${e}-slot-${L}`,
                                ne = R && R.length > 0,
                                se = ne ? { backgroundImage: `url(${R})` } : {},
                                re = {
                                    id: g,
                                    containerRef: E,
                                    isEnabled: !U,
                                    onClick: X,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: v,
                                    forceCenterX: f,
                                    blockOnGrabIds: A,
                                },
                                ue = {
                                    isEmpty: U,
                                    intCD: M,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: B,
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
                                { className: Lt, onMouseEnter: K, id: te },
                                (r || z) &&
                                    !w &&
                                    o().createElement(
                                        'div',
                                        { className: Pt },
                                        o().createElement(Ot, { id: `close-${te}`, show: !h, onClick: Y }),
                                    ),
                                o().createElement(
                                    kt,
                                    { slotType: e, slotId: L, isEnabled: !h && (0, ae.qG)(d) },
                                    o().createElement(
                                        'div',
                                        { ref: Z },
                                        o().createElement(
                                            ot.W,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: n,
                                                isBorderActive: Boolean(p),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: Q,
                                                onClick: ee ? void 0 : X,
                                            },
                                            $ &&
                                                o().createElement(
                                                    'div',
                                                    { className: Mt },
                                                    o().createElement(Bt, { text: N, show: Boolean(r), panelType: d }),
                                                ),
                                            o().createElement(
                                                it.J,
                                                { when: Boolean(ee), wrapper: At, withProps: re },
                                                o().createElement(
                                                    it.J,
                                                    { when: $, wrapper: Xt, withProps: ue },
                                                    o().createElement(lt.c, {
                                                        imageSource: B,
                                                        isIncompatible: b,
                                                        overlayType: I,
                                                        level: a,
                                                        isTemporary: J,
                                                        withAttention: O,
                                                    }),
                                                ),
                                            ),
                                            ne &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('span', { className: Ht }),
                                                    o().createElement('span', { className: jt, style: se }),
                                                ),
                                            m && o().createElement('div', { className: $t }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Yt = 'BattleAbilitySlot_base_74',
                    Jt = 'BattleAbilitySlot_rank_01',
                    Qt = ['rank'];
                const ea = (e) => {
                    let t = e.rank,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, Qt);
                    return o().createElement(
                        'div',
                        { className: Yt },
                        o().createElement(Kt, a),
                        t && o().createElement('div', { className: Jt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var ta = a(4814);
                const aa = 'OptDeviceSlot_base_14',
                    na = 'OptDeviceSlot_specializations_c3',
                    sa = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function ra() {
                    return (
                        (ra =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ra.apply(this, arguments)
                    );
                }
                const ua = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, sa);
                        const i = (0, H.t)(),
                            l = i.controls,
                            _ = i.model.computes.specializations(t, a, n),
                            d = _.specializations.length,
                            m = u.panelType === De.w.Setup || u.panelType === De.w.Compare,
                            p = !(0, ae.s$)(u.panelType),
                            b = _.isDynamic;
                        return o().createElement(
                            'div',
                            { className: c()(aa, d && !b && !r && 'specializationsSlot') },
                            p &&
                                o().createElement(
                                    'div',
                                    { className: na },
                                    o().createElement(ta.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: s,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: u.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            o().createElement(Kt, ra({}, u, { groupIndex: t, sectionIndex: a, slotIndex: n })),
                        );
                    }),
                    ia = {
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
                    oa = ({ id: e, isSelected: t, isLocked: a, onSlotSelected: n, panelType: s }) => {
                        const r = w.yZ,
                            u = (0, i.useCallback)(() => {
                                n(r, e);
                            }, [e, n, r]),
                            l = c()(ia.base, ia[`base__${s}`], a && ia.base__disabled, t && ia.base__toggle),
                            _ = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return o().createElement(
                            kt,
                            { slotType: r, slotId: e },
                            o().createElement(
                                'div',
                                { id: m, className: l, onClick: u, onMouseEnter: st.$.playHighlight },
                                t && o().createElement('div', { className: ia.glow }),
                                o().createElement('div', { className: ia.image, style: _ }),
                                o().createElement('div', { className: ia.toggle, style: d }),
                            ),
                        );
                    },
                    la = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function ca() {
                    return (
                        (ca =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ca.apply(this, arguments)
                    );
                }
                const _a = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.sectionType,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, la);
                        const u = (0, H.t)().model,
                            i = u.computes.slots.slot(t, a, n),
                            l = u.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === i.id;
                        switch (s) {
                            case w.zn: {
                                const e = i;
                                return o().createElement(
                                    ua,
                                    ca({}, e, r, { groupIndex: t, sectionIndex: a, slotIndex: n, isSelected: d }),
                                );
                            }
                            case w.yZ: {
                                const e = i;
                                return o().createElement(
                                    oa,
                                    ca({}, r, e, { groupIndex: t, sectionIndex: a, slotIndex: n }),
                                );
                            }
                            case w.YN: {
                                const e = i;
                                return o().createElement(
                                    ea,
                                    ca({}, r, e, { groupIndex: t, sectionIndex: a, slotIndex: n, isSelected: d }),
                                );
                            }
                            default:
                                return o().createElement(
                                    Kt,
                                    ca({}, r, { isSelected: d, groupIndex: t, sectionIndex: a, slotIndex: n }),
                                );
                        }
                    }),
                    da = 'Slots_base_27',
                    ma = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function pa() {
                    return (
                        (pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        pa.apply(this, arguments)
                    );
                }
                const ba = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.sectionType,
                            s = e.onActiveSlotChanged,
                            r = e.isDisabled,
                            u = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, ma);
                        const m = (0, i.useRef)(null),
                            p = (0, i.useRef)(null),
                            b = (0, H.t)(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, a),
                            v = g.ammunitionPanel.get(),
                            f = v.selectedSection,
                            C = v.selectedSlot,
                            A = v.syncInitiator,
                            D = (0, i.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: n,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, n],
                            ),
                            S = f === n,
                            F = n === w.YN,
                            y = S ? C : -1,
                            B = `${n}-${h}slots`,
                            k = (0, Ne.UW)({
                                baseId: B,
                                slotsLength: h,
                                handleSwap: D,
                                setIsExitBlocked: _,
                                syncInitiator: A,
                            }),
                            x = k.handleGrabberAction,
                            T = k.dragState,
                            I = k.getForceCenterX;
                        (0, i.useEffect)(() => {
                            S && -1 !== y && m.current && s(m, f, y);
                        }, [s, S, f, y]);
                        const N = (e, t) => {
                                if ((r || st.$.playClick(), 'number' != typeof t))
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
                            { id: B, ref: p, className: c()(da, n) },
                            V(h, (e) => {
                                const c = !F && h > 1 ? `${B}-${e}` : '';
                                return o().createElement(
                                    i.Fragment,
                                    { key: `slot ${t}-${a}-${e}` },
                                    e > 0 && o().createElement(ut, null),
                                    o().createElement(
                                        _a,
                                        pa(
                                            {
                                                groupIndex: t,
                                                sectionIndex: a,
                                                slotIndex: e,
                                                sectionType: n,
                                                isSectionSelected: S,
                                                isDisabled: r,
                                                contextMenuDisabled: F,
                                                slotType: n,
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
                                                blockOnGrabIds: u,
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
                    ga = [
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
                function Ea() {
                    return (
                        (Ea =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ea.apply(this, arguments)
                    );
                }
                const ha = (0, x.Pi)((e) => {
                    let t = e.groupIndex,
                        a = e.sectionIndex,
                        n = e.type,
                        s = e.newItemsCount,
                        r = e.panelType,
                        u = e.sectionsIds,
                        l = e.vehicle,
                        _ = e.vehicleType,
                        d = e.isSetupSwitching,
                        m = e.classMix,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, ga);
                    const b = (0, H.t)().model,
                        g = (0, i.useRef)(null),
                        E = b.ammunitionPanel.get(),
                        h = E.selectedSection,
                        v = E.syncInitiator,
                        f = b.computes.slots.length(t, a),
                        C = b.computes.slots.existFilled(t, a),
                        A = Ae('AmmunitionPanelBattleAbilities', fe);
                    (0, i.useEffect)(() => {
                        null == A || A.runTrigger(!0);
                    }, [A]);
                    const D = h === n,
                        S = (0, Ne.Tu)(n, u),
                        F = S.selfId,
                        y = S.blockOnGrabIds,
                        B = ((l && l.length > 0) || (_ && _.length > 0)) && r !== De.w.Battle && r !== De.w.Respawn,
                        w = (0, i.useMemo)(
                            () => ({
                                icon: o().createElement('span', {
                                    className: $e,
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
                        k = f > 0 && r !== De.w.Compare && r !== De.w.Battle && r !== De.w.Respawn,
                        x = R.strings.tank_setup.section.$dyn(n);
                    if ('string' != typeof x)
                        throw new Error(`No top label text for section type ${n} or it's not a string`);
                    return o().createElement(
                        'div',
                        {
                            id: d ? Ie : F,
                            ref: g,
                            className: c()(
                                Re,
                                m,
                                D && 'sectionSelected',
                                f > 1 && 'multiSlot',
                                v >= 0 && C && 'existFilledSlots',
                            ),
                        },
                        B &&
                            o().createElement(
                                nt,
                                { className: Me },
                                o().createElement(ie.z, {
                                    classMix: Pe,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: w,
                                }),
                            ),
                        k &&
                            o().createElement(
                                'div',
                                { className: Oe },
                                o().createElement(Te, { text: x, parentRef: g, show: !D, panelType: r }),
                            ),
                        o().createElement(
                            ba,
                            Ea({ groupIndex: t, sectionIndex: a, sectionType: n, panelType: r, blockOnGrabIds: y }, p),
                        ),
                        Boolean(s) &&
                            o().createElement(
                                'div',
                                { className: Le },
                                o().createElement(ue, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var va = a(8598);
                const fa = {
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
                    Ca = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: a,
                        imageSource: n,
                        count: s,
                        isInfinity: r,
                        isSelected: u,
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
                        blockOnGrabIds: C,
                        shellState: A,
                        isDisabled: D,
                    }) => {
                        const S = !(0, ae.s$)(_),
                            F = (0, i.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            y = p && p === f,
                            B = p && p === E,
                            k = (0, i.useMemo)(() => {
                                const n = { slotType: w.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: a,
                                    }),
                                ];
                            }, [d, e, t, a]),
                            x = k[0],
                            T = k[1],
                            I = (0, i.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && u,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: h,
                                    forceCenterX: v,
                                    blockOnGrabIds: C,
                                }),
                                [E, C, g, v, p, h, u],
                            ),
                            N = (0, i.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: w.g9, imageSource: null }),
                                [d, m],
                            );
                        return o().createElement(
                            Ut,
                            { isEnabled: S && !b && !D, args: T },
                            o().createElement(
                                wt.t,
                                { args: x, isEnabled: !E && (0, ae.qG)(_) },
                                o().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: fa.base },
                                    l &&
                                        o().createElement(
                                            'div',
                                            { className: fa.label },
                                            o().createElement(Bt, {
                                                text: l,
                                                show: u || _ === De.w.Battle || _ === De.w.Respawn,
                                                shellState: A,
                                                panelType: _,
                                                className: c()(
                                                    0 === m && fa.topLabel__first,
                                                    2 === m && fa.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                fa.shell,
                                                !E && S && !D && fa.shell__active,
                                                B && fa.shell__grabbing,
                                                !B && y && fa.shell__potential,
                                            ),
                                        },
                                        o().createElement(
                                            it.J,
                                            { when: S, wrapper: At, withProps: I },
                                            o().createElement(
                                                it.J,
                                                { when: S, wrapper: qt.y, withProps: N },
                                                o().createElement('div', { className: fa.image, style: F }),
                                                !r && o().createElement(va.X, { count: s }),
                                                r && o().createElement('div', { className: fa.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Aa = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Da = ({ id: e, isSelected: t, imageSource: a, onSlotSelected: n }) => {
                        const s = (0, i.useCallback)(() => {
                                !t && n(e);
                            }, [e, t, n]),
                            r = c()(Aa.slot, !t && Aa.slot__active, Aa.slot__compare),
                            u = (0, i.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            l = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return o().createElement(
                            kt,
                            { slotType: w.WI, slotId: e },
                            o().createElement(
                                'div',
                                { className: Aa.base },
                                o().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    t && o().createElement('div', { className: Aa.glow }),
                                    o().createElement('div', { className: Aa.image, style: u }),
                                    o().createElement('div', { className: Aa.toggle, style: l }),
                                ),
                            ),
                        );
                    },
                    Sa = 'ShellContainer_base_46',
                    Fa = 'ShellContainer_base__compressed_13',
                    ya = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function Ba() {
                    return (
                        (Ba =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ba.apply(this, arguments)
                    );
                }
                const wa = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            a = e.sectionIndex,
                            n = e.slotIndex,
                            s = e.isCompare,
                            r = e.handleSlotSelected,
                            u = e.baseId,
                            i = e.grabber,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, ya);
                        const _ = i.handleGrabberAction,
                            d = i.dragState,
                            m = i.getForceCenterX,
                            p = (0, H.t)().model,
                            b = p.computes.slots.length(t, a),
                            g = p.computes.slots.slot(t, a, n),
                            E = !s && b > 1 ? `${u}-${g.id}` : '';
                        return (0, ae.j2)(g)
                            ? null
                            : o().createElement(
                                  'div',
                                  { key: g.id, className: c()(Sa, !s && 0 !== n && Fa) },
                                  s
                                      ? o().createElement(Da, Ba({}, g, { onSlotSelected: r }))
                                      : o().createElement(
                                            Ca,
                                            Ba(
                                                {},
                                                g,
                                                {
                                                    slotIndex: n,
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
                    ka = 'Shells_base_f9',
                    xa = (0, x.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: a,
                            isSelected: n,
                            syncInitiator: s,
                            blockOnGrabIds: r,
                            isDisabled: u,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, H.t)(),
                                p = m.model,
                                b = m.controls,
                                g = p.computes.slots.length(_, d),
                                E = (0, i.useRef)(!1),
                                h = (0, i.useRef)(null),
                                v = a ? w.WI : w.g9,
                                f = `${v}-${g}shells`,
                                C = !(0, ae.iN)(e),
                                A = (0, i.useCallback)(
                                    (e) => {
                                        b.sectionSelect({ selectedSlot: e, selectedSection: v }), C && st.$.playClick();
                                    },
                                    [b, v, C],
                                ),
                                D = (0, i.useCallback)(() => {
                                    n || a || u || l || A(0);
                                }, [n, a, l, u, A]),
                                S = (0, i.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: v,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, v],
                                ),
                                F = (0, Ne.UW)({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: S,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, i.useEffect)(
                                    () =>
                                        (0, k.v)(() => {
                                            E.current = !0;
                                        }),
                                    [],
                                ),
                                (0, i.useEffect)(() => {
                                    if (n && e === De.w.Setup) {
                                        if (!E.current)
                                            return (0, k.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [n, e, t]),
                                o().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: h,
                                        className: ka,
                                        onClick: D,
                                        onMouseEnter: () => {
                                            !u && C && st.$.playHighlight();
                                        },
                                    },
                                    V(g, (t) =>
                                        o().createElement(wa, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: a,
                                            containerRef: h,
                                            handleSlotSelected: A,
                                            panelType: e,
                                            blockOnGrabIds: r,
                                            isSelected: n,
                                            isDisabled: u,
                                            isSetupSwitching: l,
                                            grabber: F,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ta = {
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
                    Ia = [De.w.Hangar, De.w.Battle, De.w.Prebattle, De.w.Respawn],
                    Na = (0, x.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: a,
                            onActiveSlotChanged: n,
                            isDisabled: s,
                            isBorderActive: r,
                            classMix: u,
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
                                f = (0, i.useRef)(null),
                                C = a === De.w.Compare,
                                A = a === De.w.Prebattle && e === w.g9,
                                D = h === e || A,
                                S = (0, i.useCallback)(() => {
                                    n(f, h, 0);
                                }, [n, h]),
                                F = (0, Ne.Tu)(e, t),
                                y = F.selfId,
                                B = F.blockOnGrabIds,
                                k = ((e) => Ia.includes(e))(a) && !s && E,
                                x = b.computes.slots.filteredLength(m, p),
                                T = !C && a !== De.w.Battle && a !== De.w.Respawn;
                            return o().createElement(
                                'div',
                                {
                                    id: l ? Ie : y,
                                    className: c()(
                                        Ta.base,
                                        u,
                                        Ta[`base__${a}`],
                                        !r && D && Ta.base__selected,
                                        C && Ta.base__compare,
                                        s && Ta.base__disabled,
                                    ),
                                    ref: f,
                                },
                                k && o().createElement('div', { className: Ta.attention }),
                                T &&
                                    o().createElement(
                                        'div',
                                        { className: Ta.label },
                                        o().createElement(Te, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: f,
                                            show: !D,
                                            panelType: a,
                                        }),
                                    ),
                                k &&
                                    o().createElement('div', {
                                        className: c()(
                                            Ta.border,
                                            2 === x && Ta.border__double,
                                            3 === x && Ta.border__triple,
                                        ),
                                    }),
                                o().createElement(xa, {
                                    groupIndex: m,
                                    sectionIndex: p,
                                    panelType: a,
                                    onSelected: S,
                                    isSelected: D,
                                    isCompare: C,
                                    syncInitiator: v,
                                    blockOnGrabIds: B,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    o().createElement(
                                        'div',
                                        { className: Ta.counter },
                                        o().createElement(ue, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && o().createElement('div', { className: Ta.disabled }),
                            );
                        },
                    ),
                    Ra = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                const La = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: a = !1,
                            onActiveSlotChanged: n,
                            isBorderActive: s,
                            isChangeSetupIndex: r,
                            setIsExitBlocked: u,
                        }) => {
                            const i = (0, H.t)().model,
                                l = M(['section'], Ra),
                                _ = i.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: a,
                                    onActiveSlotChanged: n,
                                    isBorderActive: s,
                                    sectionsIds: _,
                                    isChangeSetupIndex: r,
                                    setIsExitBlocked: u,
                                };
                            return o().createElement(
                                'div',
                                { className: Ra.base },
                                V(i.computes.sections.length(e), (a) => {
                                    const n = i.computes.sections.section(e, a);
                                    if (!n.slots || !n.slots.length) return null;
                                    const s = c()(
                                        l.section,
                                        0 !== a && (0, ae.s$)(t) && Ra.section__battle,
                                        0 === a && Ra.section__first,
                                    );
                                    if (n.type === w.g9 || n.type === w.WI) {
                                        const t = n;
                                        return o().createElement(
                                            Na,
                                            Oa({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: a,
                                                isSetupSwitching: r,
                                                key: `${n.name}${e}${n.slots.length}`,
                                                classMix: s,
                                            }),
                                        );
                                    }
                                    return o().createElement(
                                        ha,
                                        Oa({}, n, d, {
                                            groupIndex: e,
                                            sectionIndex: a,
                                            isSetupSwitching: r,
                                            key: `${n.name}${e}${n.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Ma = 'KeyboardKey_base_57',
                    Pa = 'KeyboardKey_back_43',
                    $a = o().memo(({ text: e }) =>
                        o().createElement('div', { className: Ma }, o().createElement('div', { className: Pa }, e)),
                    ),
                    Ha = 'SetupSwitchHotkey_base_4c',
                    ja = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    za = 'SetupSwitchHotkey_plusWrapper_f0',
                    Wa = 'SetupSwitchHotkey_plus_f0',
                    Ga = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Za = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ua = o().memo(({ hotKeys: e }) =>
                        o().createElement(
                            'div',
                            { className: Ha },
                            e.map((e, t) => {
                                if (!e) return null;
                                const a = e.value;
                                return 0 === t
                                    ? o().createElement($a, { key: t, text: a })
                                    : o().createElement(
                                          'div',
                                          { key: t, className: ja },
                                          o().createElement(
                                              'div',
                                              { className: za },
                                              o().createElement('div', { className: `${Wa} ${Ga}` }),
                                              o().createElement('div', { className: `${Wa} ${Za}` }),
                                          ),
                                          o().createElement($a, { text: a }),
                                      );
                            }),
                        ),
                    ),
                    Va = {
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
                function qa() {
                    return (
                        (qa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        qa.apply(this, arguments)
                    );
                }
                const Xa = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Ka = (e) => e.setupSelector.hotKeys,
                    Ya = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: a,
                            setSetupSwitching: n,
                            handleSetupSwitching: s,
                        }) => {
                            const r = M(['switch'], Va),
                                u = (0, H.t)().model,
                                i = u.root.get().isDisabled,
                                l = u.computes.groups.group(e);
                            return o().createElement(
                                'div',
                                { key: l.groupId, className: Va.base },
                                o().createElement(
                                    'div',
                                    { className: Va.wrapper },
                                    o().createElement(
                                        te,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, n),
                                        o().createElement(La, qa({}, t, { groupIndex: e, isChangeSetupIndex: a })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        o().createElement(
                                            'div',
                                            { className: c()(r.switch, (0, ae.iN)(t.panelType) && Va.switch__battle) },
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
                                                        header: Xa.title(),
                                                        body: String(Xa.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    o().createElement('div', {
                                                        className: Va.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = l),
                                ((d = t.panelType) === De.w.Battle || d === De.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Ka(_) &&
                                    o().createElement(
                                        'div',
                                        { className: c()(Va.hint, i && Va.hint__disabled) },
                                        o().createElement(Ua, { hotKeys: Ka(l) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    Ja = 'Groups_base_de',
                    Qa = (0, x.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: a, setSetupSwitching: n, children: s }) => {
                            const r = (0, H.t)(),
                                u = r.model,
                                l = r.controls,
                                c = u.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, i.useEffect)(() => {
                                (e.panelType !== De.w.Hangar && e.panelType !== De.w.Setup) || !a || n(!1);
                            }, [a, e.panelType, n]),
                                (0, i.useEffect)(() => {
                                    e.panelType === De.w.Respawn && n(!1);
                                }, [d, e.panelType, n]);
                            const m = (0, i.useCallback)(
                                (t) => {
                                    e.panelType === De.w.Respawn && n(!0), _(t);
                                },
                                [_, e.panelType, n],
                            );
                            return o().createElement(
                                'div',
                                { className: Ja },
                                V(u.computes.groups.length(), (a) =>
                                    o().createElement(Ya, {
                                        key: `group-${a}`,
                                        sectionProps: e,
                                        groupIndex: a,
                                        isSetupSwitching: t,
                                        setSetupSwitching: n,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = o().createElement('div', { className: a }, e);
                        if (t.header || t.body) return o().createElement(q.i, t, n);
                        const s = t.contentId;
                        return s
                            ? o().createElement(at.u, en({}, t, { contentId: s }), n)
                            : o().createElement(wt.t, t, n);
                    },
                    an = 'RoleSkillSlot_base_c4',
                    nn = 'RoleSkillSlot_icon_79',
                    sn = ({ roleSkill: e, tooltipId: t, tooltipHeader: a, tooltipBody: n, className: s }) => {
                        const r = (0, i.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: a, body: n, hasHtmlContent: !0 },
                                header: a,
                                body: n,
                                ignoreShowDelay: !0,
                            }),
                            [e, a, n, t],
                        );
                        return o().createElement(
                            tn,
                            { tooltipArgs: r, className: c()(an, s) },
                            o().createElement('div', {
                                className: nn,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    rn = 'SlotGlow_base_40',
                    un = 'SlotGlow_glow_a9',
                    on = 'SlotGlow_glow__initialized_8d',
                    ln = 'SlotGlow_glow__shown_f2',
                    cn = 'SlotGlow_glow__hidden_94',
                    _n = (0, i.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: a }) => {
                        const n = (0, i.useState)({ offset: e, slotWidth: t }),
                            s = n[0],
                            u = n[1],
                            l = (0, i.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, i.useEffect)(() => {
                            let a = l.current.initialized;
                            !a && e && ((a = !0), u({ offset: e, slotWidth: t })),
                                (l.current = { initialized: a, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, i.useEffect)(() => {
                                a || u(l.current);
                            }, [a]);
                        const _ = (0, i.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${r.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !a && s.offset === l.current.offset,
                            m = c()(un, l.current.initialized && on, d ? ln : cn);
                        return o().createElement(
                            'div',
                            { className: rn },
                            o().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    dn = (0, x.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: a,
                            isDisabled: n = !1,
                            onResize: s,
                            setIsExitBlocked: u,
                        }) => {
                            const l = (0, H.t)(),
                                _ = l.model,
                                d = l.controls,
                                m = _.ammunitionPanel.get(),
                                p = m.isSetupSwitchInProgress,
                                b = m.syncInitiator,
                                g = _.roleSkillSlot.get(),
                                E = (0, i.useState)(!1),
                                h = E[0],
                                v = E[1],
                                f = (0, i.useRef)(!1),
                                C = (0, i.useState)({ slotWidth: 0, slotOffset: 0 }),
                                A = C[0],
                                D = C[1],
                                S = (0, i.useState)(!1),
                                F = S[0],
                                y = S[1],
                                B = (0, i.useRef)(null),
                                w = (0, i.useContext)(N),
                                x = (0, i.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                T = (0, i.useCallback)(
                                    (e, t) => {
                                        if (h || p || a !== De.w.Hangar) return;
                                        const n = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        d.sectionResized(Object.assign({ sectionType: e }, n)),
                                            w && (w.freeze(), w.resize());
                                    },
                                    [h, p, a, d, w],
                                ),
                                I = (0, i.useCallback)(
                                    (e) => {
                                        T('main', e);
                                    },
                                    [T],
                                );
                            ((e, t, a, n = []) => {
                                const s = P(
                                    () =>
                                        (0, k.v)(() =>
                                            (0, k.v)(() => {
                                                if (e.current) {
                                                    const a = e.current.getBoundingClientRect(),
                                                        n = {
                                                            width: r.O.view.pxToRem(a.width),
                                                            height: r.O.view.pxToRem(a.height),
                                                            offsetX: r.O.view.pxToRem(a.left),
                                                            offsetY: r.O.view.pxToRem(a.top),
                                                        };
                                                    window.tutorialApi.updateComponents(), t(n);
                                                }
                                            }),
                                        ),
                                    [t, e],
                                );
                                (0, i.useEffect)(() => {
                                    s();
                                }, [s, ...n]),
                                    (0, i.useEffect)(() => {
                                        if (a)
                                            return (
                                                engine.on('clientResized', s),
                                                () => {
                                                    engine.off('clientResized', s);
                                                }
                                            );
                                    }, [a, s]);
                            })(B, I, !0, [b]),
                                (0, i.useEffect)(() => () => I(), [I]);
                            const R = (0, i.useCallback)(() => {
                                    y(!1);
                                }, []),
                                O = (0, i.useCallback)(() => {
                                    if (x.current.element && B.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = B.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                L = (0, i.useCallback)(
                                    (e, t, a) => {
                                        if (e.current && B.current) {
                                            const n = ((e, t, a) =>
                                                e !== a.current.slotIndex || t !== a.current.sectionIndex)(a, t, x);
                                            (x.current.element = e.current),
                                                (x.current.slotIndex = a),
                                                (x.current.sectionIndex = t),
                                                f.current && n ? y(!0) : (f.current = !0),
                                                x.current.generation && O();
                                        }
                                    },
                                    [O],
                                ),
                                $ = (0, i.useCallback)(
                                    () =>
                                        (0, k.v)(() => {
                                            (x.current.generation += 1), O();
                                        }),
                                    [x, O],
                                );
                            (0, i.useEffect)(() => (0, k.v)($), [$]),
                                (0, i.useEffect)(
                                    () => (
                                        engine.on('clientResized', $),
                                        () => {
                                            engine.off('clientResized', $);
                                        }
                                    ),
                                    [$],
                                );
                            const z = A.slotWidth,
                                W = A.slotOffset,
                                G = c()(j.base, !t && j.base__locked, !e && j.base__hidden, n && j.base__disabled),
                                Z = c()(j.border, !F && j.border__hidden),
                                V = a === De.w.Setup || a === De.w.Compare,
                                q = {
                                    panelType: a,
                                    isDisabled: n,
                                    onActiveSlotChanged: L,
                                    isBorderActive: F,
                                    setIsExitBlocked: u,
                                };
                            (0, i.useEffect)(() => {
                                null == s || s();
                            }, [s, g.roleSkill]);
                            const X = M(['roleSkillSlot'], j);
                            return o().createElement(
                                'div',
                                { ref: B, className: G },
                                V &&
                                    o().createElement(_n, {
                                        key: x.current.generation,
                                        slotOffset: W,
                                        slotWidth: z,
                                        isAnimationRunning: F,
                                    }),
                                o().createElement(
                                    Qa,
                                    { isSetupSwitching: p || h, sectionProps: q, isReady: t, setSetupSwitching: v },
                                    g.roleSkill &&
                                        o().createElement(sn, {
                                            roleSkill: g.roleSkill,
                                            tooltipId: g.tooltipId,
                                            tooltipHeader: g.tooltipHeader,
                                            tooltipBody: g.tooltipBody,
                                            className: c()(j.roleSkillSlot, j[`roleSkillSlot__${a}`], X.roleSkillSlot),
                                        }),
                                ),
                                V &&
                                    o().createElement(
                                        'div',
                                        { className: Z },
                                        o().createElement(U, { slotWidth: z, slotOffset: W, onAnimationEnd: R }),
                                    ),
                            );
                        },
                    );
                var mn = a(9152);
                const pn = (0, i.createContext)(null),
                    bn = () => {
                        const e = (0, i.useContext)(pn);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var gn = a(3028),
                    En = a(1922),
                    hn = a(2262),
                    vn = a(5310),
                    fn = a(7198);
                const Cn = 'model.tankSetup.frontlineSetup',
                    An = {
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
                var Dn = a(3457);
                const Sn = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let Fn, yn;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(Fn || (Fn = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(yn || (yn = {}));
                const Bn = o().memo(function ({ value: e, className: t, theme: a, size: n }) {
                        return o().createElement(
                            'div',
                            { className: c()(Sn.base, Sn[`base__${a}`], Sn[`base__${n}`], t) },
                            o().createElement('div', { className: Sn.label }, e),
                            o().createElement('div', { className: Sn.icon }),
                        );
                    }),
                    wn = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: a }) {
                        return o().createElement(
                            at.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, a),
                        );
                    }),
                    kn = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    xn = o().memo(function ({ price: e, isAvailable: t, onPurchase: a, onCancel: n }) {
                        const s = { pointsNeeded: e - (0, i.useContext)(Vi), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: c()(kn.base, t && kn.base__isAvailable) },
                            o().createElement(
                                wn,
                                s,
                                o().createElement(
                                    'div',
                                    { className: kn.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: kn.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(Bn, { value: e, theme: t ? yn.Brown : yn.Red, size: Fn.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: kn.actions },
                                o().createElement(
                                    wn,
                                    s,
                                    o().createElement(
                                        Dn.u5,
                                        {
                                            size: Dn.qE.medium,
                                            disabled: !t,
                                            onClick: a,
                                            mixClass: c()(kn.purchaseButton, kn.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    Dn.u5,
                                    { size: Dn.qE.medium, type: Dn.L$.secondary, mixClass: kn.button, onClick: n },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function Tn() {
                    return (
                        (Tn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Tn.apply(this, arguments)
                    );
                }
                const In = () => {
                        const e = (0, En.GS)(),
                            t = (0, i.useContext)(Vi),
                            a = he(Cn),
                            n = a.isTypeSelected,
                            s = a.vehicleType,
                            r = a.onChangeApplyAbilitiesToTypeSettings,
                            u = a.onDealConfirmed,
                            l = a.onDealCancelled,
                            _ = a.totalPurchasePrice,
                            d = a.purchaseSelectedAbilities,
                            m = he(`${Cn}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            g = m.canCancel,
                            E = (0, L.BN)(s),
                            h = (0, i.useCallback)(() => r(), [r]),
                            v = (0, i.useCallback)(() => u(), [u]),
                            f = (0, i.useCallback)(() => l(), [l]),
                            C = (0, i.useCallback)(() => d(), [d]),
                            A = c()(An.base, e && An[`base__${e}`]),
                            D = c()(An.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            S = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: E
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(E)})`
                                        : '',
                                }),
                                [E],
                            ),
                            F = (0, i.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: An.vehicleIcon, style: S }),
                                    vehicle: R.strings.menu.classes.short.$dyn(E),
                                }),
                                [S, E],
                            ),
                            y = Ae('ShowAbilitiesButton', Ce),
                            B = (0, i.useRef)(_),
                            k = (0, i.useRef)(t);
                        (0, i.useEffect)(() => {
                            (B.current = _), (k.current = t);
                        }, [_, t]),
                            (0, i.useEffect)(() => {
                                y && y.runTrigger(!0);
                            }, [y]);
                        const x = Ae('ApplyAbilitiesToTypeCheckbox', Ce);
                        (0, i.useEffect)(() => {
                            x && x.runTrigger(!0);
                        }, [x]);
                        const T = et(We, { item: Ze.AbilitiesCheckboxTooltip, parentScreen: Ge.SetupView }),
                            I = _ || B.current,
                            N = I > 0 && t === k.current,
                            O = !N && b;
                        return o().createElement(
                            'div',
                            { className: A },
                            O &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        q.i,
                                        Tn(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(E) },
                                            T,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: An.checkBoxZone },
                                            o().createElement(
                                                hn.XZ,
                                                { isChecked: n, onChange: h, type: hn.Rh.main, size: hn.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: An.checkBoxLabel },
                                                    o().createElement(ie.z, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                vn.f,
                                { when: !0, canAccept: N || O },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    N &&
                                        o().createElement(xn, {
                                            price: I,
                                            isAvailable: t >= I,
                                            onPurchase: C,
                                            onCancel: f,
                                        }),
                                    O &&
                                        o().createElement(fn.Z, {
                                            applyBtnString: n ? w.qZ : w.k4,
                                            isDisabled: p,
                                            canCancel: g,
                                            onCancel: f,
                                            onConfirm: v,
                                        }),
                                ),
                            ),
                        );
                    },
                    Nn = (e, t, a) => (a < e ? e : a > t ? t : a);
                function Rn(e, t, a = []) {
                    const n = (0, i.useRef)(0),
                        s = (0, i.useCallback)(() => window.clearInterval(n.current), a || []);
                    (0, i.useEffect)(() => s, [s]);
                    const r = (null != a ? a : []).concat([t]);
                    return [
                        (0, i.useCallback)((a) => {
                            (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, r),
                        s,
                    ];
                }
                function On(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ln(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return Ln(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ln(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                function Mn(e, t, a) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (e, t, a, n) {
                                let s,
                                    r = !1,
                                    u = 0;
                                function i() {
                                    s && clearTimeout(s);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - u;
                                    function _() {
                                        (u = Date.now()), a.apply(l, o);
                                    }
                                    r ||
                                        (n && !s && _(),
                                        i(),
                                        void 0 === n && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (s = setTimeout(
                                                  n
                                                      ? function () {
                                                            s = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(a, e),
                        t,
                    );
                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                }
                var Pn = a(7030);
                let $n;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })($n || ($n = {}));
                const Hn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    jn = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: n,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const o = (e, a) => {
                            const n = t(e),
                                s = n[0],
                                r = n[1];
                            return r <= s ? 0 : Nn(s, r, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Hn : c,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                p = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        n = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        s = (e, ...a) => {
                                            for (var n, s = On(t(e).values()); !(n = s()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, i.useMemo)(() => ({ on: a, off: n, trigger: s }), []);
                                })(),
                                b = Mn(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Pn.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (a(t, e), p.trigger('change', e), u && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                v = (0, i.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const s = E.scrollPosition.get(),
                                            r = (null != (n = E.scrollPosition.goal) ? n : 0) - s;
                                        return o(e, t * a + r + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                f = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            h.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: _.animationConfig,
                                                from: { scrollPosition: o(n, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, E.scrollPosition],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            a = m.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, _.step),
                                            r = v(t, e, n);
                                        f(r);
                                    },
                                    [f, v, _.step],
                                ),
                                A = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(n(e)),
                                            d.current && p.trigger('mouseWheel', e, E.scrollPosition, t(d.current));
                                    },
                                    [E.scrollPosition, C, p],
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
                                S = (0, T.z)(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, E.scrollPosition.goal);
                                    t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: E,
                                    recalculateContent: S,
                                    events: { on: p.on, off: p.off },
                                }),
                                [E.scrollPosition, f, C, p.off, p.on, S, A, h, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    zn = jn({
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
                        getDirection: (e) => (e.deltaY > 1 ? $n.Next : $n.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Wn = 'HorizontalBar_base_49',
                    Gn = 'HorizontalBar_base__nonActive_82',
                    Zn = 'HorizontalBar_leftButton_5f',
                    Un = 'HorizontalBar_rightButton_03',
                    Vn = 'HorizontalBar_track_0d',
                    qn = 'HorizontalBar_thumb_fd',
                    Xn = 'HorizontalBar_rail_32',
                    Kn = 'disable',
                    Yn = { pending: !1, offset: 0 },
                    Jn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qn = () => {},
                    es = (e, t) => Math.max(20, e.offsetWidth * t),
                    ts = (0, i.memo)(
                        ({
                            api: e,
                            classNames: t = {},
                            getStepByRailClick: a = Jn,
                            onDrag: n = Qn,
                            onClick: s = Qn,
                        }) => {
                            const u = (0, i.useRef)(null),
                                l = (0, i.useRef)(null),
                                _ = (0, i.useRef)(null),
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                p = e.stepTimeout || 100,
                                b = (0, i.useState)(Yn),
                                g = b[0],
                                E = b[1],
                                h = (0, i.useCallback)(
                                    (e) => {
                                        E(e),
                                            m.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                    },
                                    [n],
                                ),
                                v = () => {
                                    const t = d.current,
                                        a = m.current,
                                        n = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(n && t && a && s)) return;
                                    const r = e.animationScroll.scrollPosition.get(),
                                        u = Math.min(1, n / s),
                                        i = Nn(0, 1, r / (s - n)),
                                        o = (t.offsetWidth - es(t, u)) * i;
                                    (a.style.transform = `translateX(${0 | o}px)`),
                                        ((e) => {
                                            if (l.current && _.current && d.current && m.current) {
                                                if (0 === e)
                                                    return (
                                                        l.current.classList.add(Kn), void _.current.classList.remove(Kn)
                                                    );
                                                if (
                                                    ((t = d.current),
                                                    (a = m.current),
                                                    e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        l.current.classList.remove(Kn), void _.current.classList.add(Kn)
                                                    );
                                                var t, a;
                                                l.current.classList.remove(Kn), _.current.classList.remove(Kn);
                                            }
                                        })(o);
                                },
                                f = (0, T.z)(() => {
                                    (() => {
                                        const t = m.current,
                                            a = d.current,
                                            n = e.getWrapperSize(),
                                            s = e.getContainerSize();
                                        if (!(s && t && n && a)) return;
                                        const r = Math.min(1, n / s);
                                        (t.style.width = `${es(a, r)}px`),
                                            (t.style.display = 'flex'),
                                            u.current &&
                                                (1 === r
                                                    ? u.current.classList.add(Gn)
                                                    : u.current.classList.remove(Gn));
                                    })(),
                                        v();
                                });
                            (0, i.useEffect)(() => (0, k.v)(f)),
                                (0, i.useEffect)(
                                    () =>
                                        (0, k.v)(() => {
                                            const t = () => {
                                                v();
                                            };
                                            let a = Qn;
                                            const n = () => {
                                                a(), (a = (0, k.v)(f));
                                            };
                                            return (
                                                e.events.on('recalculateContent', f),
                                                e.events.on('rest', t),
                                                e.events.on('change', t),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    a(),
                                                        e.events.off('recalculateContent', f),
                                                        e.events.off('rest', t),
                                                        e.events.off('change', t),
                                                        e.events.off('resizeHandled', n);
                                                }
                                            );
                                        }),
                                    [e],
                                ),
                                (0, i.useEffect)(() => {
                                    if (!g.pending) return;
                                    const t = r.O.client.events.mouse.move(([t, a]) => {
                                            var s;
                                            const r = e.contentRef.current,
                                                u = e.wrapperRef.current;
                                            if (!r || !u) return;
                                            const i = d.current,
                                                o = m.current;
                                            if (!i || !o) return;
                                            if ('inside' === a && t.clientX < 0) return;
                                            const l = t.clientX - g.offset - i.getBoundingClientRect().x,
                                                c = (l / i.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(r, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                        }),
                                        a = r.O.client.events.mouse.up(() => {
                                            t(), h(Yn);
                                        });
                                    return () => {
                                        t(), a();
                                    };
                                }, [e, g.offset, g.pending, n, h]);
                            const C = Rn(
                                    (t) => {
                                        e.applyStepTo(t), s(t);
                                    },
                                    p,
                                    [e],
                                ),
                                A = C[0],
                                D = C[1];
                            (0, i.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', D, !0),
                                    () => document.removeEventListener('mouseup', D, !0)
                                ),
                                [D],
                            );
                            const S = (e) => {
                                e.target.classList.contains(Kn) || (0, st.G)('highlight');
                            };
                            return o().createElement(
                                'div',
                                { className: c()(Wn, t.base), ref: u, onWheel: e.handleMouseWheel },
                                o().createElement('div', {
                                    className: c()(Zn, t.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Kn) ||
                                            0 !== e.button ||
                                            ((0, st.G)('play'), A($n.Next));
                                    },
                                    onMouseUp: D,
                                    ref: l,
                                    onMouseEnter: S,
                                }),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(Vn, t.track),
                                        onMouseDown: (t) => {
                                            const n = m.current;
                                            if (n && 0 === t.button)
                                                if (((0, st.G)('play'), t.target === n))
                                                    h({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((t) => {
                                                        const n = m.current,
                                                            s = e.contentRef.current;
                                                        if (!n || !s) return;
                                                        const r = a(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                    })(t.screenX > n.getBoundingClientRect().x ? $n.Prev : $n.Next);
                                                }
                                        },
                                        ref: d,
                                        onMouseEnter: S,
                                    },
                                    o().createElement('div', { ref: m, className: c()(qn, t.thumb) }),
                                    o().createElement('div', { className: c()(Xn, t.rail) }),
                                ),
                                o().createElement('div', {
                                    className: c()(Un, t.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(Kn) ||
                                            0 !== e.button ||
                                            ((0, st.G)('play'), A($n.Prev));
                                    },
                                    onMouseUp: D,
                                    ref: _,
                                    onMouseEnter: S,
                                }),
                            );
                        },
                    ),
                    as = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ns = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: s,
                        classNames: r,
                        scrollClassName: u,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(as.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(as.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(as.defaultScrollArea, s) },
                                o().createElement(ss, { className: u, api: m, classNames: r }, e),
                            ),
                            o().createElement(ts, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ss = ({ api: e, className: t, classNames: a, children: n }) => (
                        (0, i.useEffect)(() => (0, k.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(as.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: c()(as.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(as.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (ss.Bar = ts), (ss.Default = ns);
                const rs = jn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $n.Next : $n.Prev),
                    }),
                    us = 'VerticalBar_base_f3',
                    is = 'VerticalBar_base__nonActive_42',
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
                    vs = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = gs, onDrag: n = ps }) => {
                        const s = (0, i.useRef)(null),
                            u = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            _ = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, i.useState)(bs),
                            b = p[0],
                            g = p[1],
                            E = (0, i.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            h = (0, T.z)(() => {
                                const t = d.current,
                                    a = _.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const u = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${hs(a, u)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 === u ? s.current.classList.add(is) : s.current.classList.remove(is)),
                                    u
                                );
                            }),
                            v = (0, T.z)(() => {
                                const t = _.current,
                                    a = d.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(n && t && a && s)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / s),
                                    o = Nn(0, 1, r / (s - n)),
                                    c = (t.offsetHeight - hs(t, i)) * o;
                                (a.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (u.current && l.current && _.current && d.current) {
                                            if (0 === Math.round(e))
                                                return u.current.classList.add(ms), void l.current.classList.remove(ms);
                                            if (
                                                ((t = _.current),
                                                (a = d.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return u.current.classList.remove(ms), void l.current.classList.add(ms);
                                            var t, a;
                                            u.current.classList.remove(ms), l.current.classList.remove(ms);
                                        }
                                    })(c);
                            }),
                            f = (0, T.z)(() => {
                                Es(e, () => {
                                    h(), v();
                                });
                            });
                        (0, i.useEffect)(() => (0, k.v)(f)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    Es(e, () => {
                                        v();
                                    });
                                };
                                let a = ps;
                                const n = () => {
                                    a(), (a = (0, k.v)(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!b.pending) return;
                                const t = r.O.client.events.mouse.up(() => {
                                        E(bs);
                                    }),
                                    a = r.O.client.events.mouse.move(([t]) => {
                                        Es(e, (a) => {
                                            const s = _.current,
                                                r = d.current,
                                                u = e.getContainerSize();
                                            if (!s || !r || !u) return;
                                            const i = t.screenY - b.offset - s.getBoundingClientRect().y,
                                                o = (i / s.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), a();
                                };
                            }, [e, b.offset, b.pending, n, E]);
                        const C = Rn((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const S = (e) => {
                            e.target.classList.contains(ms) || (0, st.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(us, t.base), ref: s, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(os, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ms) ||
                                        0 !== e.button ||
                                        ((0, st.G)('play'), A($n.Next));
                                },
                                ref: u,
                                onMouseEnter: S,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(cs, t.track),
                                    onMouseDown: (t) => {
                                        const n = d.current;
                                        if (n && 0 === t.button)
                                            if (((0, st.G)('play'), t.target === n))
                                                E({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Es(e, (n) => {
                                                            if (!n) return;
                                                            const s = a(e),
                                                                r = e.clampPosition(n, n.scrollTop + s * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? $n.Prev : $n.Next);
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
                                        ((0, st.G)('play'), A($n.Prev));
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
                    Cs = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: s,
                        scrollClassName: r,
                        scrollClassNames: u,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: c()(fs.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(fs.defaultScroll, a), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.area, s) },
                                o().createElement(As, { className: r, classNames: u, api: m }, e),
                            ),
                            o().createElement(vs, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    As = ({ className: e, classNames: t, children: a, api: n }) => (
                        (0, i.useEffect)(() => (0, k.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fs.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                a,
                            ),
                        )
                    );
                As.Default = Cs;
                const Ds = { Vertical: s, Horizontal: n };
                var Ss = a(8045);
                const Fs = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let ys, Bs, ws;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(ys || (ys = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Bs || (Bs = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(ws || (ws = {}));
                const ks = { [ws.NBSP]: ys.NoBreakSymbol, [ws.ZWNBSP]: ys.NoBreakSymbol, [ws.NEW_LINE]: ys.LineBreak },
                    xs = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ts = {
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
                    Is = 'renderers_noBreakWrapper_10',
                    Ns = 'renderers_lineBreak_b5',
                    Rs = 'renderers_newLine_bd',
                    Os = 'renderers_word_f3',
                    Ls = (e) => ({ color: `#${e}` }),
                    Ms = ({ elementList: e, textBlock: t, key: a }) => {
                        const n = t.colorTag;
                        return n
                            ? Ts[n]
                                ? o().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: c()(Os, Ts[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: a, 'data-block-type': t.blockType, className: Os, style: Ls(n) },
                                      e,
                                  )
                            : o().createElement('span', { key: a, 'data-block-type': t.blockType, className: Os }, e);
                    },
                    Ps = {
                        [ys.Word]: Ms,
                        [ys.NoBreakSymbol]: Ms,
                        [ys.Binding]: ({ elementList: e, textBlock: t, key: a }) =>
                            o().createElement(
                                'span',
                                { key: a, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: a }, e)),
                            ),
                        [ys.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': ys.LineBreak, className: Ns }),
                        [ys.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': ys.NewLine, className: Rs }, e),
                        [ys.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': ys.NoBreakWrapper, className: Is },
                                e,
                            ),
                    },
                    $s = (e, t, a) => {
                        const n = [];
                        return (
                            e.childList.forEach((s, r) => {
                                const u = `${a}_${r}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        a = $s(e, Ps[t], u);
                                    n.push(...a);
                                } else n.push(t({ elementList: [s], textBlock: e, key: u }));
                            }),
                            n
                        );
                    },
                    Hs = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, a) => {
                                t.push(
                                    ...((e, t) => {
                                        const a = [],
                                            n = e.blockType,
                                            s = Ps[n],
                                            r = $s(e, s, t);
                                        return (
                                            n === ys.NoBreakWrapper
                                                ? a.push(s({ elementList: r, textBlock: e, key: `${t}` }))
                                                : a.push(...r),
                                            a
                                        );
                                    })(e, a),
                                );
                            }),
                            t
                        );
                    },
                    js = (e, t, a, n) => {
                        let s = t.exec(e),
                            r = 0;
                        for (; s; ) r !== s.index && a(e.slice(r, s.index)), n(s), (r = t.lastIndex), (s = t.exec(e));
                        r !== e.length && a(e.slice(r));
                    },
                    zs = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    Ws = (e) => {
                        const t = [];
                        return (
                            js(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var a;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((a = e), a.match(zs) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Gs = xs
                        ? (e) => {
                              const t = [];
                              return (
                                  js(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Ws(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const a = /[\s\u002d]/g;
                              let n = a.exec(e);
                              if (!n) return [e];
                              const s = [];
                              let r = 0;
                              for (; n; ) {
                                  const u = t.justifyContent === Bs.FlexEnd ? n.index : a.lastIndex;
                                  s.push(e.slice(r, u)), (r = u), (n = a.exec(e));
                              }
                              return r !== e.length && s.push(e.slice(r)), s;
                          },
                    Zs = (e, t = '', a) => {
                        const n = [];
                        return (
                            js(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: ys.Word, colorTag: t, childList: Gs(e, a) });
                                },
                                (e) => {
                                    const a = e[0],
                                        s = ks[a.charAt(0)];
                                    s === ys.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: ys.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let a = 0; a < e.length - 1; a++)
                                                      t.push({
                                                          blockType: ys.NewLine,
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
                    Us = (e, t, a = '', n) => {
                        const s = [];
                        return (
                            js(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...Zs(e, a, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        u = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof u || 'number' == typeof u
                                        ? s.push(...Zs(String(u), a, n))
                                        : s.push({ blockType: ys.Binding, colorTag: a, childList: [u] });
                                },
                            ),
                            s
                        );
                    },
                    Vs = (e, t) => {
                        if (!e) return [t];
                        const a = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === ys.NoBreakWrapper) e.childList.push(n), a.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && a.push(e),
                                a.push({ blockType: ys.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && a.push(t), a;
                    },
                    qs = (e, t = {}, a) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let a = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ys.NoBreakSymbol
                                        ? ((a = !0), t.push(...Vs(t.pop(), e)))
                                        : (a ? t.push(...Vs(t.pop(), e)) : t.push(e), (a = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, a) => {
                                const n = [];
                                return (
                                    js(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Us(e, t, '', a));
                                        },
                                        (e) => {
                                            n.push(...Us(e[2] + e[3], t, e[1], a));
                                        },
                                    ),
                                    n
                                );
                            })((0, L.Eg)((0, L.z4)(e)), t, a),
                        );
                        return Hs(n);
                    },
                    Xs = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ks = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ys = (e, t, a) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Ks(e, t),
                            s = e.textContent.length,
                            r = e.offsetWidth / s,
                            u = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= a ? [!0, a + u] : [!1, n];
                        }
                        const i = Math.max(a + u, 0);
                        return s < i ? [!1, 0] : [!0, i];
                    },
                    Js = (e, t, a, n, s, r) => {
                        let u = -1,
                            i = null;
                        for (let l = a; l >= 0; l--) {
                            const a = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === ys.LineBreak || c === ys.NewLine || c === ys.Binding) continue;
                            const _ = a.textContent || '';
                            if (!(a.childElementCount > 1)) {
                                const e = Ys(a, n, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    p = t[l];
                                (i = o().cloneElement(p, p.props, m)), (u = l);
                                break;
                            }
                            {
                                const e = a.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = Js(e, d, e.length - 1, n, s, r),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (i = o().cloneElement(c, c.props, e, b)), (u = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [u, i];
                    },
                    Qs = (e, t, a, n = '...') => {
                        const s = [...t],
                            r = e.current;
                        if (!r) return [s, !1];
                        const u = a.height,
                            i = a.width,
                            o = r.lastElementChild;
                        if (!Xs(o, u) && Ks(o, i) <= 0) return [s, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let a = 0,
                                    n = e.length - 1;
                                for (; n - a >= 0; ) {
                                    const s = a + Math.ceil(0.5 * (n - a));
                                    Xs(e[s], t) ? (n = s - 1) : (a = s + 1);
                                }
                                return a - 1;
                            })(l, u);
                        if (c < 0) return [s, !1];
                        const _ = Js(l, s, c, i, n.length, n),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    er = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: a,
                            binding: n,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: r = !1,
                            customTooltipArgs: u,
                            targetId: l,
                            justifyContent: _ = Bs.FlexStart,
                            alignContent: d = Bs.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, i.useRef)(null),
                                b = (0, i.useRef)({ height: 0, width: 0 }),
                                g = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = g[0],
                                h = g[1],
                                v = (0, i.useMemo)(() => qs(e, n, { justifyContent: _ }), [n, _, e]),
                                f = (0, i.useMemo)(() => {
                                    if (
                                        s &&
                                        E.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, u, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [n, s, l, e, u, E.isTruncated]),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        (b.current.width = e.contentRect.width),
                                            (b.current.height = e.contentRect.height);
                                        const t = Qs(p, v, b.current, m),
                                            n = t[0],
                                            s = t[1];
                                        h({ elementList: n, isTruncated: s, isTruncateFinished: !0 }), a && a(s);
                                    },
                                    [a, m, v],
                                ),
                                A = (0, i.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, a = !0) => {
                                    const n = (0, i.useCallback)(
                                        (e) => {
                                            const a = e[0];
                                            t && t(a);
                                        },
                                        [t],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !a) return;
                                        const t = new Ss.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, a, e]);
                                })(p, C, r),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Fs.base,
                                            t,
                                            Fs.base__zeroPadding,
                                            r && Fs.base__isTruncationAvailable,
                                        ),
                                        style: A,
                                    },
                                    o().createElement('div', { className: Fs.unTruncated, ref: p }, v),
                                    o().createElement(
                                        tn,
                                        {
                                            tooltipArgs: f,
                                            className: c()(
                                                Fs.tooltip,
                                                Fs[`tooltip__justify-${_}`],
                                                Fs[`tooltip__align-${d}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Fs.truncated,
                                                    !E.isTruncateFinished && r && Fs.truncated__hide,
                                                ),
                                                style: A,
                                            },
                                            E.isTruncateFinished && r ? E.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    tr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ar = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const nr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    sr = (e) =>
                        nr
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = ar.length - 1; a >= 0; a--)
                                      for (; e >= ar[a]; ) (t += tr[a]), (e -= ar[a]);
                                  return t;
                              })(e),
                    rr = (e, t) => e.split(',').includes(t),
                    ur = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
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
                let ir, or;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(ir || (ir = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(or || (or = {}));
                const lr = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: a,
                        vehicleType: n,
                        vehicleLvl: s,
                        tags: r = '',
                        size: u = ir.extraSmall,
                        type: i = or.colored,
                        className: l,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, L.BN)(n)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    ur.base,
                                    ur[`base__size${(0, L.e)(u)}`],
                                    ur[`base__type${(0, L.e)(i)}`],
                                    l,
                                ),
                            },
                            o().createElement('div', { className: c()(ur.level, null == _ ? void 0 : _.level) }, sr(s)),
                            o().createElement('div', {
                                className: c()(
                                    ur.type,
                                    e && ur[`type__elite${(0, L.e)(u)}`],
                                    ur[`type__${u}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: n ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            rr(r, 'premiumIGR') && o().createElement('div', { className: ur.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: c()(ur.name, null == _ ? void 0 : _.name) },
                                d ? a : t,
                            ),
                        );
                    },
                    cr = 'Aside_base_a5',
                    _r = 'Aside_content_24',
                    dr = 'Aside_tankDetails_35',
                    mr = 'Aside_description_f0',
                    pr = 'Aside_title_6f',
                    br = 'Aside_category_c0',
                    gr = 'Aside_text_ca',
                    Er = 'Aside_status_91',
                    hr = 'Aside_status__activated_4e',
                    vr = 'Aside_statusDescrBlock_2c',
                    fr = 'Aside_statusDescription_75',
                    Cr = 'Aside_infoIcon_96',
                    Ar = 'CategoryTitle_base_f3',
                    Dr = 'CategoryTitle_title_9d',
                    Sr = 'CategoryTitle_icon_48';
                let Fr;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(Fr || (Fr = {}));
                const yr = (0, i.memo)(({ category: e, iconTheme: t = Fr.Small, className: a }) => {
                        const n = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: c()(Ar, a) },
                            o().createElement('div', { className: Sr, style: n }),
                            o().createElement('div', { className: Dr }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Br = 'InfoIcon_base_83',
                    wr = 'InfoIcon_icon_47',
                    kr = (0, i.memo)(({ item: e, className: t }) => {
                        const a = tt(e, Ge.SetupView),
                            n = a[0],
                            s = a[1];
                        return o().createElement(
                            'div',
                            { className: c()(Br, t) },
                            o().createElement(
                                at.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: n,
                                    onMouseLeave: s,
                                },
                                o().createElement('div', { className: wr }),
                            ),
                        );
                    }),
                    xr = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Tr;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Tr || (Tr = {}));
                const Ir = (0, i.memo)(({ isActive: e, index: t, arrowType: a, onClick: n, classMix: s }) => {
                        const r = t + 1,
                            u = (0, i.useMemo)(() => sr(r), [r]),
                            l = ((e) => {
                                const t = Ye(e, qe),
                                    a = (0, i.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Ke(e));
                                        },
                                        [t],
                                    );
                                return (e) => a(e);
                            })(We),
                            _ = (0, i.useCallback)(() => {
                                n(t),
                                    st.$.playClick(),
                                    l({
                                        item: Ze.SkillLevelTab,
                                        action: Ue.Click,
                                        parentScreen: Ge.SetupView,
                                        info: String(r),
                                    });
                            }, [t, r, n, l]),
                            d = (0, i.useCallback)(() => st.$.playHighlight(), []);
                        return o().createElement(
                            'div',
                            { className: c()(xr.base, e && xr.base__active, s), onClick: _, onMouseEnter: d },
                            o().createElement('div', { className: xr.label }, u),
                            a !== Tr.None && o().createElement('div', { className: c()(xr.arrow, xr[`arrow__${a}`]) }),
                        );
                    }),
                    Nr = {
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
                    Rr = (0, i.memo)(({ currentParam: e, firstParam: t, lastParam: a }) => {
                        const n = Number(e.value),
                            s = Number(t.value),
                            r = Number(a.value),
                            u = (0, i.useMemo)(() => s < r, [s, r]),
                            l = (0, i.useMemo)(() => {
                                if (!isNaN(n) && !isNaN(s)) {
                                    const e = n - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, n]),
                            _ = (0, i.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, L.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: _e.Z5.getRealFormat(Math.abs(l), _e.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: Nr.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, i.useMemo)(() => {
                                const e = !isNaN(s),
                                    a = e && s < 0 ? '-' : '';
                                return {
                                    sign: t.sign || a,
                                    value: e ? _e.Z5.getNumberFormat(Math.abs(s), _e.B3.GOLD) : t.value,
                                };
                            }, [t, s]),
                            m = (0, i.useMemo)(() => (u ? { width: ((100 * s) / r).toString() + '%' } : {}), [u, s, r]),
                            p = (0, i.useMemo)(
                                () => (u ? { width: ((100 * (n - s)) / r).toString() + '%' } : {}),
                                [u, s, n, r],
                            );
                        return o().createElement(
                            'div',
                            { className: Nr.base },
                            o().createElement(
                                'div',
                                { className: Nr.valueWrapper },
                                l &&
                                    o().createElement(er, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: Nr.diff,
                                        alignContent: Bs.FlexEnd,
                                    }),
                                o().createElement(er, { text: e.valueTemplate, binding: d, classMix: Nr.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: Nr.labelWrapper },
                                o().createElement('div', { className: Nr.label }, t.name),
                            ),
                            u &&
                                o().createElement(
                                    'div',
                                    { className: Nr.progress },
                                    o().createElement('div', { className: Nr.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: Nr.progressValue, style: m },
                                        o().createElement('div', { className: Nr.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: Nr.progressDelta, style: p }),
                                    o().createElement('div', { className: c()(Nr.progressDot, Nr.progressDot__end) }),
                                ),
                        );
                    }),
                    Or = 'Levels_base_a9',
                    Lr = 'Levels_tabsWrapper_a0',
                    Mr = 'Levels_tabsBorder_cf',
                    Pr = 'Levels_tabsBorder__top_8f',
                    $r = 'Levels_tabsBorder__bottom_82',
                    Hr = 'Levels_tabsLabel_60',
                    jr = 'Levels_tabs_8f',
                    zr = 'Levels_tab_c3',
                    Wr = 'Levels_caret_7e',
                    Gr = 'Levels_params_d6',
                    Zr = 'Levels_infoIcon_68',
                    Ur = ({ onLevelChanged: e, selectedLevel: t, levelInfos: a }) => {
                        const n = a.length - 1,
                            s = a[0].value.params,
                            r = a[a.length - 1].value.params,
                            u = a[t].value,
                            l = (0, i.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, i.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: Or },
                            o().createElement(
                                'div',
                                { className: Lr },
                                o().createElement('div', { className: c()(Mr, Pr) }),
                                o().createElement('div', { className: c()(Mr, $r) }),
                                o().createElement(kr, { item: Ze.AbilityLevelsTooltip, className: Zr }),
                                o().createElement(
                                    'div',
                                    { className: Hr },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: jr },
                                    a.map(({ value: e }, a) => {
                                        const s = a < t ? Tr.Active : Tr.Default;
                                        return o().createElement(Ir, {
                                            key: e.id,
                                            index: a,
                                            isActive: a <= t,
                                            arrowType: a < n ? s : Tr.None,
                                            onClick: _,
                                            classMix: zr,
                                        });
                                    }),
                                    o().createElement('div', { className: Wr, style: l }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Gr },
                                u.params.map(({ value: e }, t) =>
                                    o().createElement(Rr, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: r[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Vr = (0, i.memo)(function ({ className: e }) {
                        const t = rs(),
                            a = he('model.vehicleInfo'),
                            n = he(`${Cn}`).setCurrentSlotDetailsLevel,
                            s = he(`${Cn}.details`),
                            r = s.name,
                            u = s.category,
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
                            g = (0, i.useCallback)((e) => n({ level: e }), [n]);
                        return (
                            (0, i.useEffect)(() => (0, k.v)(() => (0, k.v)(t.recalculateContent)), [t]),
                            o().createElement(
                                'div',
                                { className: c()(cr, e) },
                                o().createElement(
                                    Ds.Vertical.Area.Default,
                                    { api: t },
                                    o().createElement(
                                        'div',
                                        { className: _r },
                                        o().createElement('div', { className: dr }, o().createElement(lr, a)),
                                        o().createElement(
                                            'div',
                                            { className: mr },
                                            o().createElement('div', { className: pr }, r),
                                            o().createElement(yr, { category: u, className: br }),
                                            o().createElement('div', { className: gr }, _),
                                        ),
                                        o().createElement(Ur, { onLevelChanged: g, selectedLevel: l, levelInfos: d }),
                                        o().createElement('div', { className: c()(Er, m && hr) }, p),
                                        o().createElement(
                                            'div',
                                            { className: vr },
                                            o().createElement('div', { className: Cr }),
                                            o().createElement(er, { text: b, classMix: fr }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    qr = 'BattleAbilitiesSetup_aside_bd';
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
                const Xr = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            a = t.width,
                            n = t.height;
                        return 0 !== a && 0 !== n;
                    },
                    Kr = (e) => {
                        const t = (0, i.useState)(Xr(e ? e.current : null)),
                            a = t[0],
                            n = t[1];
                        return (
                            (0, i.useEffect)(() => {
                                let t = 0;
                                const a = () => {
                                    t = requestAnimationFrame(() => {
                                        Xr(e ? e.current : null) ? n(!0) : a();
                                    });
                                };
                                return (
                                    a(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => () => n(!1), [e]),
                            a
                        );
                    },
                    Yr = 'ScrollableCards_base_e0',
                    Jr = 'ScrollableCards_scroll_4b',
                    Qr = ({ children: e, selectedSlotId: t, scrollAreaKey: a = 'area', updateKey: n = null }) => {
                        const s = (0, i.useState)(!1),
                            r = s[0],
                            u = s[1],
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            _ = (0, i.useRef)(!1),
                            d = (0, i.useRef)(''),
                            m = Kr(l),
                            p = rs();
                        (0, i.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = (0, T.z)(() => {
                                _.current && u(!0), p.events.off('rest', b);
                            }),
                            g = (0, i.useCallback)(() => {
                                _.current && u(!1);
                            }, []),
                            E = (0, i.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const a = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', b), p.applyScroll(a);
                                }
                            }, [b, p]);
                        (0, i.useEffect)(() => {
                            (0, k.v)(() => {
                                m &&
                                    (d.current === a
                                        ? E()
                                        : ((d.current = a),
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
                        }, [m, a, E, t]),
                            (0, i.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, n]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: r,
                            onFinalAnimationDone: g,
                        };
                        return o().createElement(
                            'div',
                            { className: Yr },
                            o().createElement(
                                'div',
                                { className: Jr, ref: l },
                                o().createElement(Ds.Vertical.Default, { key: a, api: p }, (0, i.cloneElement)(e, h)),
                            ),
                        );
                    },
                    eu = (e, t) => {
                        const a = (0, i.useRef)();
                        return (
                            (0, i.useEffect)(() => {
                                (t && !t(e)) || (a.current = e);
                            }, [t, e]),
                            a.current
                        );
                    };
                var tu = a(8613);
                Date.now(), tu.Ew.getRegionalDateTime, tu.Ew.getFormattedDateTime;
                _e.Sw.instance;
                const au = eu;
                var nu = a(4888),
                    su = a(1363);
                const ru = [
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
                function uu(e) {
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
                const iu = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _e.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    ou = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            s = e.onMouseEnter,
                            r = e.onMouseLeave,
                            u = e.onMouseDown,
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
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, ru);
                        const f = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, i.useMemo)(() => (0, oe.F)(), []).resId,
                            A = (0, i.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (iu(a, p, { isMouseEvent: !0, on: !0, arguments: uu(n) }, C),
                                    E && E(),
                                    (f.current.isVisible = !0));
                            }, [a, p, n, C, E]),
                            D = (0, i.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        iu(a, p, { on: !1 }, C),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1);
                                }
                            }, [a, p, C, h]),
                            S = (0, i.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            );
                        return g
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((F = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), r && r(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), o && o(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), u && u(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    lu = ['children'];
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const _u = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, lu);
                    return o().createElement(
                        ou,
                        cu(
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
                var du = a(5282);
                const mu = {
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
                    pu = 'DisabledAbilities_base_1d',
                    bu = 'DisabledAbilities_glow_75',
                    gu = 'DisabledAbilities_line_54',
                    Eu = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: c()(pu, e) },
                            o().createElement('div', { className: bu }),
                            o().createElement('div', { className: gu }),
                        );
                let hu;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster');
                })(hu || (hu = {}));
                const vu = 'Warning_base_4c',
                    fu = 'Warning_glow_79',
                    Cu = 'Warning_line_df',
                    Au = 'Warning_icon_24',
                    Du = (e) => Object.values(hu).includes(e),
                    Su = ({ parentId: e, reason: t, isCritical: a }) => {
                        const n = (0, i.useMemo)(() => ({ reason: t, isCritical: a }), [t, a]);
                        return o().createElement(
                            'div',
                            { id: e, className: vu },
                            o().createElement('div', { className: fu }),
                            o().createElement('div', { className: Cu }),
                            o().createElement(
                                at.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: n,
                                    isEnabled: Du(t),
                                },
                                o().createElement('div', { className: Au }),
                            ),
                        );
                    },
                    Fu = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: a,
                        contextMenuArgs: n,
                        imageSource: s,
                        overlayType: r,
                        highlightType: u,
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
                        specializations: C,
                        extraImages: A,
                        onSlotClick: D,
                        shouldHandleMouseOver: S,
                        category: F,
                        onTooltipShow: y,
                        onTooltipHide: B,
                        lockReason: w,
                    }) => {
                        const k = (0, En.GS)(),
                            x = (0, i.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = x[0],
                            I = x[1],
                            N = (0, i.useState)(!1),
                            O = N[0],
                            L = N[1],
                            M = (0, i.useCallback)(() => {
                                !T.isActionsHovered && st.$.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    S && L(!0);
                            }, [T.isActionsHovered, S]),
                            P = (0, i.useCallback)(() => {
                                S && L(!1);
                            }, [S]),
                            $ = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            j = E && (!d || g),
                            z = (0, i.useCallback)(() => {
                                j && D && (st.$.playClick(), D());
                            }, [D, j]),
                            W = T.isBaseHovered || T.isActionsHovered,
                            G = (0, i.useMemo)(() => {
                                let e = o().createElement(
                                    'div',
                                    { onMouseEnter: M, onMouseLeave: H, className: mu.hover, onClick: z },
                                    d && g && o().createElement(Eu, { className: mu.locked }),
                                );
                                return (
                                    a && (e = o().createElement(_u, { args: a, onShow: y, onHide: B }, e)),
                                    n && (e = o().createElement(Ut, { args: n }, e)),
                                    e
                                );
                            }, [d, g, M, H, z, a, n, y, B]),
                            Z = (0, i.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            U =
                                k === En.cJ.Large || k === En.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            V = (0, i.useMemo)(() => {
                                let e;
                                return (
                                    r && (e = l ? U.$dyn(`${r}_${_}_overlay`) : U.$dyn(`${r}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [U, r, l, _]),
                            q = (0, i.useMemo)(() => {
                                let e;
                                return u && (e = U.$dyn(`${u}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [U, u]),
                            X = (0, i.useMemo)(() => {
                                const e =
                                        (k === En.cJ.Large || k === En.cJ.Huge ? En.cJ.Large : En.cJ.Medium) + '_' + F,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [F, k]);
                        return o().createElement(
                            'div',
                            { className: mu.base },
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(
                                        mu.content,
                                        mu[`content__${k}`],
                                        W && E && !d && mu.content__hovered,
                                        !W && mu.content__out,
                                        p && mu.content__installed,
                                        m && mu.content__current,
                                        d && mu.content__disabled,
                                        !j && mu.content__nonclickable,
                                    ),
                                    onMouseLeave: P,
                                },
                                q &&
                                    o().createElement(
                                        'div',
                                        { className: mu.types },
                                        o().createElement('div', {
                                            className: c()(mu.highlight, mu[`highlight__${u}`]),
                                            style: q,
                                        }),
                                    ),
                                o().createElement('div', { className: mu.image, style: Z }, A),
                                d && o().createElement('div', { className: mu.disabled }),
                                X &&
                                    o().createElement('span', {
                                        className: c()(mu.category, mu[`category__${k}`]),
                                        style: X,
                                    }),
                                V &&
                                    o().createElement(
                                        'div',
                                        { className: mu.types },
                                        o().createElement('div', {
                                            className: c()(mu.overlay, mu[`overlay__${r}`]),
                                            style: V,
                                        }),
                                    ),
                                C && o().createElement('div', { className: mu.specialization }, C),
                                o().createElement(
                                    'div',
                                    { className: c()(mu.name, d && mu.name__disabled) },
                                    o().createElement(du.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, du.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && o().createElement('div', { className: mu.details }, h),
                                o().createElement('div', { className: c()(mu.options, d && mu.options__disabled) }, v),
                                G,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: $, onMouseLeave: H, className: mu.actions },
                                    S && f
                                        ? (0, i.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: O }))
                                        : f,
                                ),
                            ),
                            b &&
                                o().createElement(
                                    'div',
                                    { className: mu.locked },
                                    o().createElement(Su, { reason: w, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var yu = a(8401),
                    Bu = a(3934);
                const wu = 'Availability_base_51',
                    ku = () => o().createElement('div', { className: wu }),
                    xu = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Tu = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: a, possibleZeroCount: n, show: s = !0 }) => {
                            let r = null;
                            return (
                                (r = a
                                    ? o().createElement(ku, null)
                                    : e || (n && 0 === e)
                                      ? o().createElement(Bu.K, { itemsInStorage: e })
                                      : t && o().createElement(yu.t, t)),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            xu.base,
                                            xu['base__' + (s ? 'shown' : 'hidden')],
                                            (a || e || (n && 0 === e)) && xu.base__visually,
                                        ),
                                    },
                                    r,
                                )
                            );
                        },
                    ),
                    Iu = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Nu = a(8750);
                const Ru = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Ou = ({ level: e }) => {
                        const t = (0, En.GS)();
                        if (!e) return null;
                        const a = c()(Ru.base, t && Ru[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(Nu.a, {
                                type: Nu.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Lu = (0, i.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: a,
                            isCurrent: n,
                            imageName: s,
                            onSlotAction: r,
                            intCD: u,
                            level: l,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: g,
                        }) => {
                            const E = (0, En.GS)(),
                                h = t > -1,
                                v = `${u}-ability`,
                                f = (0, i.useMemo)(() => ({ intCD: u, slotType: w.YN, fieldType: 0 }), [u]),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        r({ actionType: e, intCD: u, currentSlotId: a, isAutoSelect: !1 });
                                    },
                                    [r, u, a],
                                ),
                                A = (0, i.useCallback)(() => {
                                    C(nu.eC);
                                }, [C]),
                                D = (0, i.useContext)(Vi),
                                S = (0, i.useMemo)(() => {
                                    const e = c()(Iu.bonuses, E && Iu[`base__${E}`]),
                                        t = D >= g ? yn.Brown : yn.Red;
                                    return o().createElement(
                                        'div',
                                        { className: Iu.base },
                                        o().createElement(su._, {
                                            parentId: v,
                                            mediaSize: E,
                                            classMix: e,
                                            classColorMix: Iu.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(Bn, {
                                                value: g,
                                                theme: t,
                                                size: Fn.Small,
                                                className: Iu.points,
                                            }),
                                    );
                                }, [E, _, v, m, g, D]),
                                F =
                                    ((0, i.useMemo)(() => o().createElement(Ou, { level: l }), [l]),
                                    (0, i.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return o().createElement(Fu, {
                                parentId: v,
                                name: e,
                                tooltipArgs: f,
                                imageSource: F,
                                isCurrent: n,
                                isActive: h,
                                details: S,
                                isDisabled: m && D < g,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: o().createElement(Tu, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    Mu = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const $u = ({ currentCardRef: e, selectedSlot: t, isDisabled: a }) => {
                        const n = he(Cn),
                            s = n.categoriesOrder,
                            r = n.onSlotAction,
                            u = n.slots,
                            l = he('model.ammunitionPanel'),
                            _ = l.onSectionSelect,
                            d = l.selectedSection,
                            m = (0, En.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = u.map(({ value: e }) => e),
                            g = (0, i.useMemo)(() => {
                                if (m === En.cJ.Tiny)
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
                                    p.map((a) => {
                                        const n = e[a].shift();
                                        n && t.push(n);
                                    });
                                } while (t.length < b.length);
                                return t;
                            }, [b, p, m]),
                            E = (0, i.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), r(e);
                                },
                                [_, r, d],
                            ),
                            h = g.map((a) => {
                                if (!a) return null;
                                const n = a.installedSlotId,
                                    s = n > -1 && t === n;
                                return o().createElement(
                                    'div',
                                    { key: a.intCD, ref: s ? e : null, className: c()(Mu.card, m && Mu[`card__${m}`]) },
                                    o().createElement(Lu, Pu({}, a, { isCurrent: s, onSlotAction: E })),
                                );
                            }),
                            v = c()(Mu.base, m && Mu[`base__${m}`], a && Mu.base__disabled);
                        return o().createElement('div', { className: v }, h);
                    },
                    Hu = 'BattleAbilitiesNoSelected_base_06',
                    ju = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    zu = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    Wu = 'BattleAbilitiesNoSelected_title_20',
                    Gu = 'BattleAbilitiesNoSelected_title__small_65',
                    Zu = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Uu = 'BattleAbilitiesNoSelected_button_bf',
                    Vu = R.strings.tank_setup.abilities.noSelected,
                    qu = () => {
                        const e = (0, En.GS)(),
                            t = he(Cn, Ee.None).showInfoPage,
                            a = (0, i.useMemo)(() => e === En.cJ.Small || e === En.cJ.Tiny, [e]),
                            n = (0, i.useMemo)(() => (e === En.cJ.Tiny ? Dn.qE.small : Dn.qE.medium), [e]),
                            s = (0, i.useCallback)(() => t(), [t]),
                            r = c()(ju, a && zu),
                            u = c()(Wu, a && Gu);
                        return o().createElement(
                            'div',
                            { className: Hu, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: r }),
                            o().createElement('div', { className: u }, Vu.title()),
                            o().createElement('div', { className: Zu }, Vu.subTitle()),
                            o().createElement(Dn.u5, { size: n, mixClass: Uu, onClick: s }, Vu.toReserves()),
                        );
                    },
                    Xu = 'Content_base_d8',
                    Ku = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: Xu },
                            e
                                ? o().createElement(
                                      Qr,
                                      { selectedSlotId: t },
                                      o().createElement($u, { selectedSlot: t }),
                                  )
                                : o().createElement(qu, null),
                        );
                    }),
                    Yu = 'Tabs_base_d9',
                    Ju = 'Tabs_base__vertical_c0',
                    Qu = 'Tabs_list_0a',
                    ei = 'Tabs_list__centered_dc',
                    ti = 'Tabs_wrapper_2d',
                    ai = 'Tabs_wrapper__centered_d8',
                    ni = 'Tabs_wrapper__vertical_a5';
                function si() {
                    return (
                        (si =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        si.apply(this, arguments)
                    );
                }
                const ri = 'tabs-role';
                var ui;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(ui || (ui = {}));
                class ii extends i.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[ui.TAB]);
                                return t && t.props[ui.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[ri] === ui.LIST);
                        if (t < 0) return;
                        const a =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        (e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[ui.TAB] })),
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
                        const a = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            n = a.props.children.reduce(
                                (e, t, a) => ((e[a] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((r = this.tabsProps),
                                (u = n),
                                !(
                                    Object.keys(r).length === Object.keys(u).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(u, e) && r[e] === u[e],
                                    )
                                ));
                        var r, u;
                        const i = c()(
                                ti,
                                a.props.className,
                                this.props.isTabsCentered && ai,
                                this.props.isVerticalTabs && ni,
                            ),
                            l = c()(Qu, this.props.isTabsCentered && ei);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[ri] === ui.CONTENT)
                                        return e.props[ui.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, a) => [this.tabsListIndex, e].includes(a)),
                                s = t[0].props.children,
                                r = s.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            n[t],
                                            { key: t, isActive: this.state.activeKey === e.props[ui.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const a = n[t][ui.TAB];
                                                    this.state.activeKey === a ||
                                                        (n[t].onClick && n[t].onClick(e),
                                                        this.handleSetActiveKey(a),
                                                        this.props.onClickSound && (0, st.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    n[t].onMouseEnter && n[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, st.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = n),
                                this.setState({
                                    activeElements: [
                                        o().createElement(
                                            'div',
                                            { className: l, key: ui.LIST },
                                            o().createElement('div', si({}, a.props, { className: i }), r),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Yu, this.props.isVerticalTabs && Ju);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                ii.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const oi = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function li() {
                    return (
                        (li =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        li.apply(this, arguments)
                    );
                }
                const ci = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = e.activeKey,
                            s = e.onClickSound,
                            r = e.onMouseEnterSound,
                            u = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, oi);
                        return o().createElement(
                            'div',
                            li({ className: a }, i),
                            o().createElement(
                                ii,
                                { activeKey: n, onClickSound: s, onMouseEnterSound: r, isTabsCentered: u },
                                t,
                            ),
                        );
                    },
                    _i = ({ children: e, component: t, props: a = {} }) => (t ? o().createElement(t, a, e) : e || null),
                    di = 'Tab_base_dd',
                    mi = 'Tab_base__first_4a',
                    pi = 'Tab_base__last_96',
                    bi = 'Tab_base__medium_ec',
                    gi = 'Tab_base__active_5d',
                    Ei = 'Tab_divider_ca',
                    hi = 'Tab_divider__show_62',
                    vi = 'Tab_state_6c',
                    fi = 'Tab_stateHighlight_1e',
                    Ci = 'Tab_stateBorder_64',
                    Ai = 'Tab_stateBorder__positionLeft_e7',
                    Di = 'Tab_stateBorder__positionRight_db',
                    Si = 'Tab_counter_e1',
                    Fi = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function yi() {
                    return (
                        (yi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        yi.apply(this, arguments)
                    );
                }
                const Bi = (0, i.memo)((e) => {
                        let t = e.isActive,
                            a = void 0 !== t && t,
                            n = e.isFirst,
                            s = void 0 !== n && n,
                            r = e.isLast,
                            u = void 0 !== r && r,
                            i = e.isMedium,
                            l = void 0 !== i && i,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            g = void 0 === b ? {} : b,
                            E = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    s = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                                return s;
                            })(e, Fi);
                        return o().createElement(
                            _i,
                            g,
                            o().createElement(
                                'div',
                                yi({ className: c()(di, { [gi]: a }, { [mi]: s }, { [pi]: u }, { [bi]: l }) }, h),
                                o().createElement(
                                    'span',
                                    { className: vi },
                                    o().createElement('span', { className: fi }),
                                    o().createElement('span', { className: c()(Ci, Ai) }),
                                    o().createElement('span', { className: c()(Ci, Di) }),
                                ),
                                p,
                                !u && !a && o().createElement('span', { className: c()(Ei, hi) }),
                                (Boolean(E) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: Si },
                                        o().createElement(ue, { value: E, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    wi = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    ki = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function xi() {
                    return (
                        (xi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xi.apply(this, arguments)
                    );
                }
                const Ti = (e) => {
                    let t = e.name,
                        a = e.newItemsCount,
                        n = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        r = void 0 === s || s,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, ki);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, i.useCallback)(() => {
                            st.$.playClick(), n({ name: t });
                        }, [n, t]),
                        _ = (0, i.useMemo)(() => ({ name: t }), [t]),
                        d = M(['tab'], wi);
                    return o().createElement(
                        at.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: r,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Bi,
                                xi({}, u, { isNotified: Boolean(a), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Ii() {
                    return (
                        (Ii =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ii.apply(this, arguments)
                    );
                }
                const Ni = ({ tabs: e, selectedTabName: t, handleTabChanged: a, isTooltipEnabled: n = !0 }) => {
                        const s = Ae('ModernizedSetupTabHintZone', fe);
                        return (
                            (0, i.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            o().createElement(
                                ci,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': ui.LIST },
                                    e.map(({ value: e }) =>
                                        o().createElement(
                                            Ti,
                                            Ii(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: a,
                                                    'tabs-role': ui.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: n,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Ri = {
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
                    Oi = ({ title: e, children: t, tabProps: a }) => {
                        const n = (0, En.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Ri.base, n && Ri[`base__${n}`]) },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: c()(Ri.title, n && Ri[`title__${n}`]) }, e),
                                a &&
                                    o().createElement(
                                        'div',
                                        { className: c()(Ri.tabs, n && Ri[`tabs__${n}`]) },
                                        o().createElement(Ni, a),
                                    ),
                            ),
                            t,
                        );
                    };
                var Li = a(8089);
                const Mi = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let Pi;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(Pi || (Pi = {}));
                const $i = o().memo(function ({ id: e, theme: t, className: a }) {
                        const n = he(Cn, Ee.None).showInfoPage;
                        return o().createElement(
                            'div',
                            { id: e, className: c()(Mi.base, Mi[`base__${t}`], a) },
                            o().createElement(Li.A, {
                                caption:
                                    t === Pi.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => n(),
                                classNames: { caption: t === Pi.OnlyIcon ? Mi.hidden : '' },
                            }),
                        );
                    }),
                    Hi = 'Header_base_aa',
                    ji = 'Header_points_d5',
                    zi = 'Header_content_2c',
                    Wi = 'Header_textWrapper_63',
                    Gi = 'Header_text_dc',
                    Zi = 'Header_infoButton_5e',
                    Ui = o().memo(function () {
                        const e = E().mediaWidth,
                            t = (0, i.useContext)(Vi),
                            a = (0, i.useMemo)(
                                () => ({
                                    points: o().createElement(Bn, {
                                        theme: yn.Brown,
                                        size: Fn.Normal,
                                        value: t,
                                        className: ji,
                                    }),
                                }),
                                [t],
                            ),
                            n = tt(Ze.SkillPointsTooltip, Ge.SetupView),
                            s = n[0],
                            r = n[1];
                        return o().createElement(
                            'div',
                            { className: Hi },
                            o().createElement(
                                Oi,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                o().createElement(
                                    'div',
                                    { className: zi },
                                    e <= m.j.medium.width &&
                                        o().createElement($i, {
                                            id: 'scenarios_btn_small',
                                            theme: Pi.OnlyIcon,
                                            className: Zi,
                                        }),
                                    o().createElement(
                                        q.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: s,
                                            onMouseLeave: r,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Wi },
                                            o().createElement(er, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: a,
                                                classMix: Gi,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Vi = o().createContext(0),
                    qi = () => {
                        const e = he(Cn),
                            t = e.isLocked,
                            a = e.pointsAmount,
                            n = he('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            Vi.Provider,
                            { value: a },
                            o().createElement(En.Ar, {
                                header: o().createElement(Ui, null),
                                content: o().createElement(Ku, { isLocked: t, selectedSlot: n }),
                                aside: o().createElement(Vr, { className: qr }),
                                footer: o().createElement(In, null),
                            }),
                        );
                    };
                var Xi = a(8175),
                    Ki = a(3755),
                    Yi = a(8774);
                const Ji = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    Qi = (0, i.memo)(({ parentId: e, availableActions: t, onActionClick: a, isBuyMoreDisabled: n }) =>
                        o().createElement(
                            'div',
                            { className: c()(Ji.base, Ji['base__' + (t.length ? 'shown' : 'hidden')]) },
                            o().createElement(Yi.a, {
                                parentId: `${e}-${nu.GV}`,
                                actionType: nu.GV,
                                onClick: a,
                                show: t.includes(nu.GV),
                                disabled: n,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(Yi.a, {
                                parentId: `${e}-${nu.DA}`,
                                actionType: nu.DA,
                                onClick: a,
                                show: t.includes(nu.DA),
                            }),
                            o().createElement(Yi.a, {
                                parentId: `${e}-${nu.FR}`,
                                actionType: nu.FR,
                                onClick: a,
                                show: t.includes(nu.FR),
                            }),
                        ),
                    ),
                    eo = 'Booster_base_e5',
                    to = 'Booster_unit_5e',
                    ao = (0, x.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, En.GS)(),
                            s = n === En.cJ.Large || n === En.cJ.Huge,
                            r = bn(),
                            u = r.model,
                            l = r.controls,
                            c = u.computes.boosters.booster(a),
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
                            C = c.overlayType,
                            A = c.isLocked,
                            D = c.isMounted,
                            S = c.isMountedInOtherSetup,
                            F = c.description,
                            y = c.isBuyMoreVisible,
                            B = c.isBuyMoreDisabled,
                            k = c.highlightType,
                            x = c.lockReason,
                            T = d > -1,
                            I = `${v}-booster`,
                            N = (0, i.useMemo)(() => {
                                const e = [];
                                return (
                                    !f &&
                                        T &&
                                        (!t && y && e.push(nu.GV),
                                        (!Boolean(E) && !D) || S ? e.push(nu.FR) : e.push(nu.DA)),
                                    e
                                );
                            }, [f, T, t, y, E, D, S]),
                            O = (0, i.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: v, installedSlotId: d }),
                                    e === nu.GV ? 1e3 : 120
                                ),
                                [l, v, d],
                            ),
                            L = ct(O),
                            M = (0, i.useCallback)(() => {
                                N.includes(nu.FR) ? L(nu.FR) : N.includes(nu.DA) ? L(nu.DA) : L(nu.eC);
                            }, [N, L]),
                            P = (0, i.useMemo)(() => {
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
                            j = (0, i.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(Fu, {
                            parentId: I,
                            name: _,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: j,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: f,
                            isLocked: A,
                            options: o().createElement(Tu, {
                                isMounted: D || S,
                                itemsInStorage: E,
                                show: !N.length,
                                price: h,
                            }),
                            actions: o().createElement(Qi, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: L,
                                isBuyMoreDisabled: B,
                            }),
                            details: o().createElement(su._, {
                                key: F,
                                parentId: I,
                                classMix: eo,
                                mediaSize: n,
                                classColorMix: to,
                                linesShown: s ? 4 : 3,
                                text: F,
                            }),
                            overlayType: C,
                            highlightType: k,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    no = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    so = (0, x.Pi)(({ isCurrent: e, compare: t, index: a }) => {
                        const n = (0, En.GS)(),
                            s = n === En.cJ.Large || n === En.cJ.Huge,
                            r = bn(),
                            u = r.model,
                            l = r.controls,
                            _ = u.computes.consumables.consumable(a, t, n),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            b = _.itemInstalledSetupSlotIdx,
                            g = _.isMountedMoreThanOne,
                            E = _.imageName,
                            h = _.itemsInStorage,
                            v = _.oldStylePrice,
                            f = _.intCD,
                            C = _.isDisabled,
                            A = _.overlayType,
                            D = _.isLocked,
                            S = _.isMounted,
                            F = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            B = _.description,
                            k = _.isBuyMoreDisabled,
                            x = _.lockReason,
                            T = m > -1,
                            I = `${f}-consumable`,
                            N = (0, i.useMemo)(() => {
                                const a = [];
                                return (
                                    !C &&
                                        T &&
                                        (!e && a.push(nu.Xo),
                                        y ||
                                            (!t && a.push(nu.GV),
                                            (!Boolean(h) && !S) || F ? a.push(nu.FR) : a.push(nu.DA))),
                                    a
                                );
                            }, [C, T, e, y, t, h, S, F]),
                            O = (0, i.useCallback)(
                                (e) => (
                                    l.consumables.actSlot({ actionType: e, intCD: f, installedSlotId: m }),
                                    e === nu.GV ? 1e3 : 300
                                ),
                                [l, f, m],
                            ),
                            L = ct(O),
                            M = (0, i.useCallback)(() => {
                                N.includes(nu.Xo)
                                    ? L(nu.Xo)
                                    : N.includes(nu.FR)
                                      ? L(nu.FR)
                                      : N.includes(nu.DA)
                                        ? L(nu.DA)
                                        : L(nu.eC);
                            }, [N, L]),
                            P = (0, i.useMemo)(() => {
                                const e = { intCD: f, slotType: w.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                        isMounted: S,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [f, m, p, b, g, S, C]),
                            $ = P[0],
                            H = P[1],
                            j = (0, i.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(E)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(E);
                                return String(e);
                            }, [s, E]),
                            z = (0, i.useMemo)(
                                () =>
                                    o().createElement(su._, {
                                        parentId: I,
                                        mediaSize: n,
                                        classMix: c()(no.base, n && no[`base__${n}`]),
                                        classColorMix: no.unit,
                                        linesShown: s ? 4 : 3,
                                        text: B,
                                    }),
                                [n, s, B, I],
                            );
                        return o().createElement(Fu, {
                            parentId: I,
                            name: d,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: j,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: C,
                            isLocked: D,
                            isClickable: !y,
                            options: o().createElement(Tu, {
                                price: v,
                                isMounted: S || F,
                                itemsInStorage: h,
                                show: !N.length,
                            }),
                            actions: o().createElement(Qi, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: L,
                                isBuyMoreDisabled: k,
                            }),
                            details: z,
                            overlayType: A,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    ro = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    uo = ({ values: e, localeName: t }) => {
                        const a = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!a) return ro;
                        const n = a.value,
                            s = n.value,
                            r = 'mul' === n.valueType ? 100 * (s - 1) : s;
                        return { calcValue: r, isPositive: r > 0, valueKey: n.valueKey };
                    },
                    io = 'Bonus_base_aa',
                    oo = 'Bonus_bonus_49',
                    lo = 'Bonus_text_48',
                    co = 'Unit_base_15',
                    _o = 'Unit_base__special_37',
                    mo = 'Unit_glow_38',
                    po = R.strings.tank_setup.kpi.bonus.valueTypes,
                    bo = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    go = (0, x.Pi)(({ deviceID: e, bonusID: t }) => {
                        const a = bn().model,
                            n = a.computes.optDevices.device(e).activeSpecsMask,
                            s = a.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const r = s.valueType,
                            u = s.value,
                            i = s.valueKey,
                            l = Boolean(n),
                            _ = 'mul' === r ? 100 * (u - 1) : u,
                            d = _ > 0 ? '+' : '',
                            m = _e.Z5.getRealFormat(_, _e.Gr.WO_ZERO_DIGITS),
                            p = po.$dyn(i),
                            b = `${m}${p ? ` ${p}` : bo}`;
                        return o().createElement(
                            'div',
                            { className: c()(co, l && _o) },
                            o().createElement('span', null, o().createElement('span', { className: mo }), d + b),
                        );
                    }),
                    Eo = (0, x.Pi)(({ bonusID: e, compare: t, deviceID: a }) => {
                        const n = (0, En.GS)(),
                            s = n === En.cJ.Large || n === En.cJ.Huge ? 4 : 3,
                            r = bn().model,
                            u = r.computes.optDevices.bonusVisibleLinesCount(a, e, s),
                            l = ((e, t = !1) =>
                                t || uo(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                r.computes.optDevices.bonus(a, e),
                            ),
                            c = (0, i.useMemo)(() => (0, du.D)(String(l)), [l]);
                        return u
                            ? o().createElement(
                                  'div',
                                  { className: io },
                                  l &&
                                      o().createElement(
                                          'span',
                                          { className: oo },
                                          o().createElement(go, { compare: t, deviceID: a, bonusID: e }),
                                          ' ',
                                          u &&
                                              l &&
                                              o().createElement(
                                                  'span',
                                                  { className: lo },
                                                  o().createElement(du.n, { linesCount: u, blocks: c, mediaSize: n }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    ho = 'Bonuses_base_af',
                    vo = 'Bonuses_bonus_d1',
                    fo = 'Bonuses_text_37',
                    Co = 'Bonuses_effect_f8',
                    Ao = 'Bonuses_icon_40',
                    Do = (0, x.Pi)(({ compare: e, deviceID: t }) => {
                        const a = (0, En.GS)(),
                            n = bn().model,
                            s = n.computes.optDevices.device(t),
                            r = s.intCD,
                            u = s.effect,
                            i = n.computes.optDevices.bonusesLength(t),
                            l = `${r}-device`,
                            c = n.computes.optDevices.bonusEffectLinesCount(t);
                        return o().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: ho },
                            u &&
                                o().createElement(
                                    'div',
                                    { className: vo },
                                    o().createElement(
                                        'span',
                                        { className: Co },
                                        o().createElement('span', { className: Ao }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    o().createElement(
                                        'span',
                                        { className: fo },
                                        o().createElement(du.n, { mediaSize: a, linesCount: c, blocks: (0, du.D)(u) }),
                                    ),
                                ),
                            V(i, (a) =>
                                o().createElement(Eo, { key: `${a}_${r}`, bonusID: a, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var So = a(2106);
                const Fo = 'DeviceActions_base_c0',
                    yo = 'DeviceActions_base__hidden_a6',
                    Bo = 'DeviceActions_base__shown_b0',
                    wo = (0, i.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: a,
                            isInstalled: n,
                            isMouseOverCard: s,
                            isModernized: r,
                            isFreeToDemount: u,
                            destroyTooltipBodyPath: i,
                            level: l,
                        }) => {
                            const _ = (s || n) && t.includes(nu.Rs),
                                d = t.length && (t[0] !== nu.Rs || _),
                                m = c()(Fo, d ? Bo : yo);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.DA}`,
                                    actionType: nu.DA,
                                    onClick: a,
                                    show: t.includes(nu.DA),
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.FR}`,
                                    actionType: nu.FR,
                                    onClick: a,
                                    show: t.includes(nu.FR),
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.Rs}`,
                                    actionType: nu.Rs,
                                    onClick: a,
                                    show: _,
                                    isModernized: r,
                                    level: l,
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.dZ}`,
                                    actionType: nu.dZ,
                                    onClick: a,
                                    show: t.includes(nu.dZ),
                                    isFreeToDemount: u,
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.Fd}`,
                                    actionType: nu.Fd,
                                    onClick: a,
                                    show: t.includes(nu.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: u,
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu.sH}`,
                                    actionType: nu.sH,
                                    onClick: a,
                                    show: t.includes(nu.sH),
                                }),
                                o().createElement(Yi.a, {
                                    parentId: `${e}-${nu._2}`,
                                    actionType: nu._2,
                                    buttonType: So.L.secondary,
                                    onClick: a,
                                    show: (r || !u) && t.includes(nu._2),
                                    isModernized: r,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function ko() {
                    return (
                        (ko =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ko.apply(this, arguments)
                    );
                }
                const xo = (0, x.Pi)(({ compare: e, index: t, isCurrent: a }) => {
                        const n = (0, En.GS)(),
                            s = n === En.cJ.Large || n === En.cJ.Huge,
                            r = bn(),
                            u = r.model,
                            l = r.controls,
                            c = u.computes.optDevices.device(t),
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
                            C = c.isMounted,
                            A = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            S = c.isFreeToDemount,
                            F = c.overlayType,
                            y = c.isLocked,
                            B = c.isUpgradable,
                            k = c.isTrophy,
                            x = c.activeSpecsMask,
                            T = c.isModernized,
                            I = c.level,
                            N = c.lockReason,
                            O = c.destroyTooltipBodyPath,
                            L = d > -1,
                            M = `${f}-device`,
                            P = (0, i.useMemo)(() => {
                                const t = [];
                                let n = !0;
                                return (
                                    L &&
                                        !D &&
                                        (a || t.push(nu.Xo),
                                        C && !e
                                            ? ((n = !a),
                                              t.push(...((e) => (e ? [nu.Fd, nu.sH] : [nu.dZ]))(b)),
                                              t.push(nu._2))
                                            : t.push(
                                                  ((e, t, a) => ((!Boolean(e) && !t) || a ? nu.FR : nu.DA))(E, C, A),
                                              )),
                                    !B || e || D || t.push(nu.Rs),
                                    { availableActions: t, isDeviceClickable: n }
                                );
                            }, [L, D, B, e, a, C, b, E, A]),
                            $ = P.availableActions,
                            H = P.isDeviceClickable,
                            j = (0, i.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: d });
                                },
                                [l, f, d],
                            ),
                            z = (0, i.useCallback)(() => {
                                $.length && $[0] !== nu.Rs ? j($[0]) : j(nu.eC);
                            }, [$, j]),
                            W = (0, i.useMemo)(() => {
                                const e = { intCD: f, slotType: w.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: C,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [f, d, m, p, b, C, D]),
                            G = W[0],
                            Z = W[1],
                            U = (0, i.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(Fu, {
                            parentId: M,
                            name: _,
                            tooltipArgs: G,
                            contextMenuArgs: Z,
                            imageSource: U,
                            isCurrent: a,
                            isActive: L,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: H,
                            isModernized: T,
                            level: I,
                            specializations:
                                v && v.specializations.length
                                    ? o().createElement(ta.G, ko({}, v, { activeSpecsMask: x, mediaSize: n }))
                                    : null,
                            details: o().createElement(Do, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : o().createElement(Tu, {
                                      isMounted: C || A,
                                      itemsInStorage: E,
                                      price: h,
                                      possibleZeroCount: k || T,
                                      show: !$.length || Boolean(E || C || A),
                                  }),
                            actions: o().createElement(wo, {
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
                    To = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    Io = (0, x.Pi)(({ index: e, forwardRef: t, type: a, compare: n = !1 }) => {
                        const s = (0, En.GS)(),
                            r = bn().model,
                            u = r.ammunitionPanel.get().selectedSlot,
                            i = (() => {
                                switch (a) {
                                    case w.zn:
                                        return r.computes.optDevices.device(e);
                                    case w.mH:
                                        return r.computes.consumables.consumable(e, n, s);
                                    case w.G$:
                                        return r.computes.boosters.booster(e);
                                    default:
                                        return r.computes.optDevices.device(e);
                                }
                            })(),
                            l = i.isVisible,
                            _ = i.installedSlotId,
                            d = _ > -1 && u === _;
                        return l
                            ? o().createElement(
                                  'div',
                                  { className: c()(To.base, s && To[`base__${s}`]), ref: d ? t : null },
                                  (() => {
                                      switch (a) {
                                          case w.G$:
                                              return o().createElement(ao, { index: e, compare: n, isCurrent: d });
                                          case w.mH:
                                              return o().createElement(so, { index: e, compare: n, isCurrent: d });
                                          case w.zn:
                                          default:
                                              return o().createElement(xo, { index: e, compare: n, isCurrent: d });
                                      }
                                  })(),
                              )
                            : null;
                    }),
                    No = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    Ro = ({ isDisabled: e, compare: t = !1, currentCardRef: a, cardsAmount: n, type: s }) => {
                        const r = (0, En.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(No.base, r && No[`base__${r}`], e && No.base__disabled) },
                            V(n, (e) =>
                                o().createElement(Io, { key: e, index: e, compare: t, forwardRef: a, type: s }),
                            ),
                        );
                    };
                var Oo = a(3215),
                    Lo = a(3522);
                const Mo = (0, Oo.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, Lo._)(e),
                                a = t.model,
                                n = t.computes,
                                s = e.object();
                            return Object.assign({}, a, { ammunitionPanel: s, computes: n });
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
                    Po = (Mo[0], Mo[1]);
                var $o = a(9480),
                    Ho = a(8586),
                    jo = a(3978);
                const zo = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Wo = 'FilterItem_base_2e',
                    Go = ({ name: e }) =>
                        o().createElement('div', {
                            className: Wo,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Zo;
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
                })(Zo || (Zo = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let Uo;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Uo || (Uo = {}));
                const Vo = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let qo;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(qo || (qo = {}));
                let Xo;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(Xo || (Xo = {}));
                const Ko = 'ClearBtn_base_a6',
                    Yo = 'ClearBtn_stroke_09',
                    Jo = 'ClearBtn_background_61',
                    Qo = 'ClearBtn_base__hover_3b',
                    el = 'ClearBtn_base__down_60',
                    tl = 'ClearBtn_cross_1d',
                    al = ({ parentId: e, onClick: t, soundHover: a = 'highlight', soundClick: n = 'play' }) => {
                        const s = (0, i.useState)(!1),
                            r = s[0],
                            u = s[1],
                            l = (0, i.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, i.useCallback)(() => {
                                (0, st.G)(n), d(!1), u(!0);
                            }, [n]),
                            p = (0, i.useCallback)(() => {
                                (0, st.G)(a), d(!0);
                            }, [a]),
                            b = (0, i.useCallback)(() => {
                                d(!1), u(!1);
                            }, []);
                        return o().createElement(
                            q.i,
                            Vo,
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(Ko, _ && Qo, r && el),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: b,
                                    onClick: t,
                                },
                                o().createElement('div', { className: Jo }),
                                o().createElement('div', { className: Yo }),
                                o().createElement('div', { className: tl }),
                            ),
                        );
                    },
                    nl = 'MatchDetails_base_a8',
                    sl = 'MatchDetails_count_d2',
                    rl = 'MatchDetails_clear_21',
                    ul = 'MatchDetails_clear__shown_49',
                    il = 'MatchDetails_separator_bc',
                    ol = 'MatchDetails_arrow_b0',
                    ll = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: a, totalCount: n }) => {
                        const s = (0, i.useCallback)(() => t(), [t]);
                        return o().createElement(
                            'div',
                            { className: nl },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: sl }, a),
                                    o().createElement(
                                        'span',
                                        { className: il },
                                        '/',
                                        o().createElement('span', { className: ol }),
                                    ),
                                ),
                            o().createElement('span', { className: sl }, n),
                            o().createElement(
                                'span',
                                { className: c()(rl, e && ul) },
                                o().createElement(al, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    cl = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: a,
                        isEnabled: n,
                        showDetails: s = !1,
                        onFilterChanged: r,
                        onFilterReset: u,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, En.GS)(),
                            d = Ae('FilterTutorialHintZone', fe);
                        (0, i.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, $o.UI)(a, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Go, { name: e }),
                            callback: (e, t) => {
                                r({ name: e }), (0, jo.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: So.L.ghost,
                                mixClass: c()(zo.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: c()(zo.base, _ && zo[`base__${_}`], s && zo.base__detailed) },
                            s &&
                                o().createElement(ll, {
                                    isFilterActive: n,
                                    onFilterReset: u,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: zo.buttons },
                                o().createElement(Ho.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var _l = a(2372);
                const dl = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    ml = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    pl = (e) => (e ? ml.disabled.text() : ml.notDisabled.text()),
                    bl = (0, x.Pi)(({ disabled: e }) => {
                        const t = (0, En.GS)(),
                            a = (0, gn.t)(),
                            n = a.model,
                            s = a.controls,
                            r = n.optDevices.specialCurrency.get().value;
                        return o().createElement(
                            'div',
                            { className: c()(dl.base, t && dl[`base__${t}`]) },
                            o().createElement(
                                wt.t,
                                { args: { tooltipId: w.$4 } },
                                o().createElement(
                                    'div',
                                    { className: dl.currency },
                                    o().createElement(_l.A, { value: r }),
                                    o().createElement('div', { className: dl.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                q.i,
                                { body: pl(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        Dn.u5,
                                        { onClick: s.moreCurrencyGot, mixClass: dl.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    gl = 'HeaderContent_base_cd';
                function El() {
                    return (
                        (El =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        El.apply(this, arguments)
                    );
                }
                const hl = (0, x.Pi)(({ compare: e }) => {
                        const t = bn(),
                            a = t.model,
                            n = t.controls,
                            s = a.optDevices.setup.get(),
                            r = s.withIntroduction,
                            u = s.hasUnfitItems,
                            i = a.computes.optDevices.slotsLength(),
                            l = a.optDevices.tabs.get(),
                            c = a.optDevices.filter.get(),
                            _ = e ? void 0 : a.computes.selectedSlotSpecialization();
                        switch (l.selectedTabName) {
                            case w.S:
                                return o().createElement(
                                    'div',
                                    { className: gl },
                                    o().createElement(
                                        cl,
                                        El({}, c, {
                                            onFilterChanged: n.filterChanged,
                                            onFilterReset: n.filterReset,
                                            selectedSlotSpecialization: _,
                                        }),
                                    ),
                                );
                            case w.pi:
                                return e
                                    ? null
                                    : i > 0
                                      ? o().createElement(
                                            'div',
                                            { className: gl },
                                            o().createElement(bl, { disabled: r ? !u : i <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    vl = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    fl = R.strings.tank_setup.compare.section,
                    Cl = (0, x.Pi)(({ type: e, children: t, withContent: a }) => {
                        const n = Po().model.vehicleInfo.get(),
                            s = (0, En.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(vl.base, vl[`base__${s}`]) },
                            o().createElement(
                                'div',
                                { className: vl.title },
                                (0, L.WU)(String(fl.title.$dyn(e)), { name: n.vehicleName }),
                            ),
                            o().createElement('div', { className: vl.description }, fl.description.$dyn(e)),
                            o().createElement(
                                'div',
                                { className: vl.controlsContainer },
                                o().createElement('div', { className: vl.tabs }, t),
                                a && o().createElement(hl, { compare: !0 }),
                            ),
                        );
                    });
                function Al() {
                    return (
                        (Al =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Al.apply(this, arguments)
                    );
                }
                const Dl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = bn(),
                            a = t.model,
                            n = t.controls,
                            s = (0, En.GS)(),
                            r = a.ammunitionPanel.get().selectedSlot,
                            u = a.boosters.tabs.get(),
                            i = a.computes.boosters.length();
                        return o().createElement(En.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(
                                      Cl,
                                      { type: w.G$ },
                                      o().createElement(
                                          Ni,
                                          Al({}, u, { handleTabChanged: n.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : o().createElement(Oi, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, u, {
                                          handleTabChanged: n.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: o().createElement(
                                Qr,
                                { selectedSlotId: r, scrollAreaKey: u.selectedTabName, updateKey: i },
                                o().createElement(Ro, { compare: e, type: w.G$, cardsAmount: i }),
                            ),
                            footer:
                                !e &&
                                o().createElement(Ki.w, {
                                    withConfirmation: !0,
                                    renewalType: Xi.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: n.boosters.confirmDeal,
                                    onDealCancelled: n.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => n.boosters.changeAutoRenewal(e),
                                    mediaSize: s,
                                }),
                        });
                    }),
                    Sl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, En.GS)(),
                            a = bn(),
                            n = a.model,
                            s = a.controls,
                            r = n.ammunitionPanel.get().selectedSlot,
                            u = n.computes.consumables.length(e, t);
                        return o().createElement(En.Ar, {
                            header: e
                                ? o().createElement(Cl, { type: w.mH })
                                : o().createElement(Oi, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                Qr,
                                { selectedSlotId: r },
                                o().createElement(Ro, { compare: e, cardsAmount: u, type: w.mH }),
                            ),
                            footer:
                                !e &&
                                o().createElement(Ki.w, {
                                    withConfirmation: !0,
                                    renewalType: Xi.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: s.consumables.confirmDeal,
                                    onDealCancelled: s.consumables.cancelDeal,
                                    onAutoRenewalChanged: s.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function Fl() {
                    return (
                        (Fl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Fl.apply(this, arguments)
                    );
                }
                const yl = (0, x.Pi)(({ compare: e }) => {
                        const t = bn(),
                            a = t.model,
                            n = t.controls,
                            s = a.optDevices.tabs.get(),
                            r = s.tabs.length > 1;
                        return e
                            ? o().createElement(
                                  Cl,
                                  { type: w.zn, withContent: !0 },
                                  r && o().createElement(Ni, Fl({}, s, { handleTabChanged: n.optDevices.changeTab })),
                              )
                            : o().createElement(
                                  Oi,
                                  {
                                      title: R.strings.tank_setup.section.optDevices(),
                                      tabProps: r
                                          ? Object.assign({}, s, { handleTabChanged: n.optDevices.changeTab })
                                          : void 0,
                                      tabs:
                                          r &&
                                          o().createElement(
                                              Ni,
                                              Fl({}, s, { handleTabChanged: n.optDevices.changeTab }),
                                          ),
                                  },
                                  o().createElement(hl, { compare: e }),
                              );
                    }),
                    Bl = {
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
                    wl = ({ introType: e }) => {
                        const t = c()(Bl.icon, Bl[`icon__currency-${e}`]),
                            a = (0, i.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: Bl.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            n = R.strings.tank_setup.introduction.message.$dyn(e);
                        return n ? o().createElement(ie.z, { binding: a, text: n, classMix: Bl.message }) : null;
                    },
                    kl = (0, x.Pi)(() => {
                        const e = (0, En.GS)(),
                            t = e === En.cJ.Large || e === En.cJ.Huge,
                            a = (0, i.useState)(!0),
                            n = a[0],
                            s = a[1],
                            r = (0, gn.t)(),
                            u = r.model,
                            l = r.controls,
                            _ = u.optDevices.setup.get().introductionType,
                            d = u.computes.optDevices.slotsLength() > 0,
                            m = (0, i.useCallback)(() => {
                                s(!1);
                            }, []),
                            p = (0, i.useCallback)(() => {
                                l.introPassed(), s(!0);
                            }, [l]),
                            b = (0, i.useMemo)(
                                () => ({
                                    enter: Bl.base__enter,
                                    enterActive: Bl.base__enterActive,
                                    exit: Bl.base__exit,
                                    exitActive: Bl.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return o().createElement(
                            Y.Z,
                            { in: n, classNames: b, timeout: 300, onExited: p },
                            o().createElement(
                                'div',
                                { className: c()(Bl.base, e && Bl[`base__${e}`]), id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: Bl.introduction },
                                    o().createElement('div', {
                                        className: c()(Bl.image, t ? Bl[`image__${_}Large`] : Bl[`image__${_}`]),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Bl.description },
                                        o().createElement('div', { className: Bl.title }, g),
                                        o().createElement(wl, { introType: _ }),
                                    ),
                                    d &&
                                        o().createElement(
                                            Dn.u5,
                                            { type: Dn.L$.secondary, size: Dn.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    xl = 'OptDevicesSetup_intro_ae',
                    Tl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, En.GS)(),
                            a = bn().model,
                            n = (0, gn.t)().controls,
                            s = a.ammunitionPanel.get().selectedSlot,
                            r = a.optDevices.setup.get().withIntroduction,
                            u = a.computes.optDevices.slotsLength(),
                            i = a.optDevices.filter.get().selectedFilterCount,
                            l = a.optDevices.tabs.get().selectedTabName,
                            c = a.computes.optDevices.slotsLength();
                        return o().createElement(En.Ar, {
                            compare: e,
                            header: o().createElement(yl, { compare: e }),
                            content:
                                !e && r
                                    ? o().createElement(
                                          'div',
                                          { className: xl },
                                          o().createElement(Ro, {
                                              compare: !1,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          o().createElement(kl, null),
                                      )
                                    : o().createElement(
                                          Qr,
                                          { selectedSlotId: s, scrollAreaKey: l, updateKey: `${i}:${u}` },
                                          o().createElement(Ro, {
                                              compare: e,
                                              type: w.zn,
                                              cardsAmount: c,
                                              isDisabled: r,
                                          }),
                                      ),
                            footer:
                                !e &&
                                o().createElement(Ki.w, {
                                    withConfirmation: !0,
                                    parentModelPath: 'model.tankSetup.optDevicesSetup',
                                    mediaSize: t,
                                    onDealConfirmed: n.optDevices.confirmDeal,
                                    onDealCancelled: n.optDevices.cancelDeal,
                                    onAutoRenewalChanged: n.optDevices.changeAutoRenewal,
                                }),
                        });
                    });
                var Il = a(5959);
                const Nl = {
                        base: 'PopularLoadouts_base_f1',
                        base__hidden: 'PopularLoadouts_base__hidden_2d',
                        header: 'PopularLoadouts_header_92',
                        header_container: 'PopularLoadouts_header_container_03',
                        header_text: 'PopularLoadouts_header_text_e9',
                        header_icon: 'PopularLoadouts_header_icon_98',
                        header_notEnoughData: 'PopularLoadouts_header_notEnoughData_05',
                        scrollWrapper: 'PopularLoadouts_scrollWrapper_30',
                        scroll: 'PopularLoadouts_scroll_73',
                        backgroundWrapper: 'PopularLoadouts_backgroundWrapper_4d',
                        animatedBackground: 'PopularLoadouts_animatedBackground_83',
                        shine1: 'PopularLoadouts_shine1_08',
                        shine2: 'PopularLoadouts_shine2_47',
                        border: 'PopularLoadouts_border_d5',
                        border_visible: 'PopularLoadouts_border_visible_28',
                        container: 'PopularLoadouts_container_33',
                        row: 'PopularLoadouts_row_8c',
                        row_images: 'PopularLoadouts_row_images_d8',
                        row_image: 'PopularLoadouts_row_image_a4',
                        row_info: 'PopularLoadouts_row_info_c4',
                        place: 'PopularLoadouts_place_9c',
                        popularity: 'PopularLoadouts_popularity_4e',
                        notEnoughData_highlight: 'PopularLoadouts_notEnoughData_highlight_7a',
                        noData: 'PopularLoadouts_noData_44',
                        noData_image: 'PopularLoadouts_noData_image_59',
                        noData_text: 'PopularLoadouts_noData_text_d0',
                    },
                    Rl = (e) =>
                        e in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : (console.error(`Optional device type ${e} is not supported`), null),
                    Ol = ({ place: e, popularity: t, optionalDevice: a }) => {
                        const n = (0, i.useMemo)(() => a.map(Rl), [a]);
                        return o().createElement(
                            'div',
                            { className: Nl.row },
                            o().createElement(
                                'div',
                                { className: Nl.row_images },
                                n.map((e, t) =>
                                    e ? o().createElement('img', { key: t, className: Nl.row_image, src: e }) : null,
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Nl.row_info },
                                o().createElement(er, {
                                    text: (0, L.dL)(_e.Z5.getRealFormat(t, _e.Gr.FRACTIONAL)),
                                    classMix: Nl.popularity,
                                }),
                                o().createElement(er, { text: e, classMix: Nl.place }),
                            ),
                        );
                    },
                    Ll = [
                        R.strings.tank_setup.popularLoadouts.place.first(),
                        R.strings.tank_setup.popularLoadouts.place.second(),
                        R.strings.tank_setup.popularLoadouts.place.third(),
                    ],
                    Ml = (0, x.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, gn.t)(),
                            a = t.model,
                            n = t.controls,
                            s = (0, i.useState)(null),
                            r = s[0],
                            u = s[1],
                            l = (0, i.useRef)(null),
                            _ = (0, i.useState)(!0),
                            d = _[0],
                            m = _[1],
                            p = a.optionalDevicesAssistant.get().optionalDevicesResultType,
                            b = a.computes.sortedOptionalDevicesAssistantItems(),
                            g = a.optionalDevicesAssistant.get().isHintShown;
                        (0, i.useEffect)(
                            () => (
                                g ||
                                    (l.current = window.setInterval(() => {
                                        u((e) => ('shine1' === e ? 'shine2' : 'shine1'));
                                    }, 4e3)),
                                () => {
                                    l.current && window.clearInterval(l.current);
                                }
                            ),
                            [],
                        );
                        const E = 1 === p,
                            h = 2 === p,
                            v = rs(),
                            f = (0, i.useRef)(null),
                            C = (0, i.useCallback)(() => {
                                var e;
                                const t = null == (e = f.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        return (
                            $(
                                C,
                                () => {
                                    v.recalculateContent();
                                    const e = v.getContainerSize() || 0,
                                        t = v.getWrapperSize() || 0;
                                    m(e > t);
                                },
                                { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                                [],
                            ),
                            o().createElement(
                                'div',
                                { className: c()(Nl.base, e && Nl.base__hidden) },
                                o().createElement(
                                    'div',
                                    { className: Nl.header },
                                    o().createElement(
                                        'div',
                                        { className: Nl.header_container },
                                        o().createElement(
                                            'div',
                                            { className: Nl.header_text },
                                            R.strings.tank_setup.popularLoadouts.title(),
                                        ),
                                        o().createElement(
                                            at.u,
                                            {
                                                contentId:
                                                    R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip('resId'),
                                            },
                                            o().createElement('div', {
                                                className: Nl.header_icon,
                                                onMouseEnter: () => (0, Il.playSound)('highlight'),
                                            }),
                                        ),
                                    ),
                                    E &&
                                        o().createElement(
                                            at.u,
                                            {
                                                contentId:
                                                    R.views.lobby.tanksetup.tooltips.NotEnoughDataForPopularLoadoutsTooltip(
                                                        'resId',
                                                    ),
                                                args: {
                                                    sourceVehicleCompDescr:
                                                        a.optionalDevicesAssistant.get().sourceVehicleCompDescr,
                                                },
                                            },
                                            o().createElement(
                                                'div',
                                                null,
                                                o().createElement('div', { className: Nl.header_notEnoughData }),
                                            ),
                                        ),
                                ),
                                h
                                    ? o().createElement(
                                          'div',
                                          { className: Nl.noData },
                                          o().createElement('img', {
                                              className: Nl.noData_image,
                                              src: R.images.gui.maps.icons.tanksetup.popular_loadouts.noData(),
                                          }),
                                          o().createElement(
                                              'div',
                                              { className: Nl.noData_text },
                                              R.strings.tank_setup.popularLoadouts.noData(),
                                          ),
                                      )
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement('div', {
                                              className: c()([Nl.border, d && Nl.border_visible]),
                                          }),
                                          o().createElement(
                                              'div',
                                              {
                                                  className: Nl.scrollWrapper,
                                                  onMouseEnter: () => {
                                                      l.current && window.clearInterval(l.current),
                                                          g || n.onHintShown();
                                                  },
                                              },
                                              E && o().createElement('div', { className: Nl.notEnoughData_highlight }),
                                              o().createElement(
                                                  Ds.Vertical.Default,
                                                  { api: v, className: Nl.scroll },
                                                  o().createElement(
                                                      'div',
                                                      { className: Nl.container, ref: f },
                                                      b.map((e, t) =>
                                                          o().createElement(Ol, {
                                                              key: t,
                                                              place: Ll[t],
                                                              popularity: e.popularity,
                                                              optionalDevice: e.items,
                                                          }),
                                                      ),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: Nl.backgroundWrapper },
                                                  o().createElement('div', {
                                                      className: c()(Nl.animatedBackground, r && Nl[r]),
                                                  }),
                                              ),
                                          ),
                                          o().createElement('div', {
                                              className: c()([Nl.border, d && Nl.border_visible]),
                                          }),
                                      ),
                            )
                        );
                    }),
                    Pl = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    },
                    $l = (0, x.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, gn.t)().model.vehicleInfo.get(),
                            a = (0, En.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Pl.base, a && Pl[`base__${a}`], e && Pl.base__hidden) },
                            o().createElement(lr, t),
                        );
                    }),
                    Hl = 'RightSideTankParameters_tankNamePosition_b3',
                    jl = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    zl = ({ compare: e, isBattleAbilities: t, arePopularLoadoutsHidden: a }) => {
                        const n = (0, gn.t)(),
                            s = n.controls,
                            u = n.model,
                            l = o().useRef(null),
                            c = o().useRef(null),
                            _ = E().mediaHeight,
                            d =
                                !e &&
                                (null == u ? void 0 : u.optionalDevicesAssistant.get().sourceVehicleCompDescr) > 0,
                            m = (0, i.useCallback)(() => {
                                var e, t;
                                const a = null == (e = l.current) ? void 0 : e.getBoundingClientRect(),
                                    n = null == (t = c.current) ? void 0 : t.getBoundingClientRect();
                                return a && n ? `${a.left}-${a.width}-${n.top}` : null;
                            }, [l, c]),
                            p = (0, i.useCallback)(() => {
                                if (!l.current || !c.current) return;
                                const e = l.current.getBoundingClientRect(),
                                    t = c.current.getBoundingClientRect(),
                                    a = {
                                        width: r.O.view.pxToRem(e.width),
                                        height: r.O.view.pxToRem(e.height),
                                        offsetX: r.O.view.pxToRem(e.left),
                                        offsetY: r.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(r.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                window.tutorialApi.updateComponents(),
                                    a.offsetX &&
                                        a.width &&
                                        (_ === g.ExtraSmall
                                            ? (a.bottomMargin -= 18)
                                            : _ === g.Medium
                                              ? (a.bottomMargin -= 15)
                                              : _ >= g.Large && (a.bottomMargin -= 8),
                                        s.resized(a));
                            }, [s, _]);
                        return (
                            $(m, p, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, []),
                            o().createElement(
                                o().Fragment,
                                null,
                                !e &&
                                    o().createElement(
                                        'div',
                                        { className: Hl, ref: l },
                                        o().createElement($l, { isHidden: t }),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: jl, ref: c },
                                    d && o().createElement(Ml, { isHidden: a }),
                                ),
                            )
                        );
                    };
                var Wl = a(5096),
                    Gl = a(5958);
                const Zl = {
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
                    Ul = (0, x.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: a,
                            leftID: n,
                            rightID: s,
                            uniqueKey: r,
                            onTransitionEnd: u,
                        }) => {
                            const l = au(r),
                                _ = a === En.cJ.Tiny,
                                d = n === t,
                                m = l && l !== r,
                                p = (0, i.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, i.useMemo)(() => ((s - n > 1 && _) || !m ? 'Fade' : ''), [m, n, s, _]),
                                g = (0, i.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: Zl.base__enter,
                                                enterDone: Zl[`base__enter${p}${b}`],
                                                exit: Zl[`base__exit${p}${b}`],
                                                exitActive: Zl.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                E = (0, i.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), u && u();
                                        }, Gl.PD);
                                    },
                                    [u],
                                ),
                                h = (0, i.useMemo)(() => ({ animationDuration: `${Gl.PD}ms` }), []);
                            return o().createElement(
                                K.Z,
                                { component: null, childFactory: g },
                                o().createElement(
                                    Y.Z,
                                    { key: r, timeout: Gl.PD, onEntered: E },
                                    o().createElement(
                                        'div',
                                        { className: c()(Zl.base, Zl[`base__${a}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Vl = a(2094);
                const ql = {
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
                    Xl = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Kl = (0, x.Pi)(({ shellID: e, specificationID: t }) => {
                        const a = (0, En.GS)(),
                            n = a === En.cJ.Tiny,
                            s = (0, gn.t)().model.computes.shells.specification(e, t),
                            r = s.paramName,
                            u = s.value,
                            l = s.metricValue,
                            _ = (0, i.useMemo)(() => {
                                if ('avgPiercingPower' === r) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [r]);
                        return 'avgPiercingPower' === r || (!n && u)
                            ? o().createElement(
                                  'div',
                                  { className: c()(Xl.base, a && Xl[`base__${a}`]) },
                                  n
                                      ? o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(r),
                                            ' ',
                                            o().createElement(
                                                'div',
                                                { className: Xl.value },
                                                u || o().createElement('span', null, '—'),
                                            ),
                                            o().createElement('div', { className: Xl.units }, _),
                                        )
                                      : o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(r),
                                            o().createElement('div', { className: Xl.units }, l),
                                            o().createElement('div', {
                                                className: c()(Xl.separator, a && Xl[`separator__${a}`]),
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: Xl.value },
                                                u || o().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    Yl = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var Jl = a(7405),
                    Ql = a(329);
                const ec = {
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
                function tc() {
                    return (
                        (tc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        tc.apply(this, arguments)
                    );
                }
                const ac = R.strings.tank_setup.shells,
                    nc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, En.GS)(),
                            a = t === En.cJ.Tiny,
                            n = (0, gn.t)().model,
                            s = n.computes.shells.shell(e),
                            r = s.buyCount,
                            u = s.itemsInStorage,
                            l = s.itemsInVehicle,
                            _ = s.totalPrice,
                            d = s.price,
                            m = n.computes.shells.defPriceLength(e),
                            p = n.computes.shells.priceLength(e) ? n.computes.shells.price(e, 0) : null,
                            b = m ? n.computes.shells.defPrice(e, 0) : null,
                            g = (0, i.useMemo)(() => ac[a ? 'shortSpecification' : 'specification'].inStorage(), [a]),
                            E = (0, i.useMemo)(() => ac[a ? 'shortSpecification' : 'specification'].inVehicle(), [a]),
                            h = (0, i.useMemo)(() => ac[a ? 'shortSpecification' : 'specification'].price(), [a]),
                            v = l >= 0,
                            f = m > 0,
                            C = (0, i.useMemo)(
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
                            { className: c()(ec.base, t && ec[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: c()(ec.row, t && ec[`row__${t}`]) },
                                o().createElement(
                                    'div',
                                    { className: ec.rowItem },
                                    o().createElement('div', { className: c()(ec.total, t && ec[`total__${t}`]) }, g),
                                    o().createElement(
                                        'div',
                                        { className: c()(ec.lowResolutionValue, t && ec[`lowResolutionValue__${t}`]) },
                                        o().createElement('span', { className: ec.indent }),
                                        u,
                                    ),
                                ),
                                v &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('span', { className: ec.divider }, '/'),
                                        o().createElement(
                                            'div',
                                            { className: ec.rowItem },
                                            o().createElement(
                                                'div',
                                                { className: c()(ec.total, t && ec[`total__${t}`]) },
                                                o().createElement(
                                                    'div',
                                                    { className: c()(ec.colored, t && ec[`colored__${t}`]) },
                                                    E,
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: c()(
                                                        ec.lowResolutionValue,
                                                        t && ec[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                o().createElement('span', { className: ec.indent }),
                                                l,
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: c()(ec.separator, t && ec[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: c()(ec.hiResolutionValue, t && ec[`hiResolutionValue__${t}`]) },
                                    u,
                                    v &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('span', { className: ec.divider }, '/'),
                                            o().createElement(
                                                'div',
                                                { className: c()(ec.colored, t && ec[`colored__${t}`]) },
                                                l,
                                            ),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(ec.row, t && ec[`row__${t}`]) },
                                o().createElement('div', { className: c()(ec.total, t && ec[`total__${t}`]) }, h),
                                o().createElement('div', { className: c()(ec.separator, t && ec[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: ec.value },
                                    o().createElement(
                                        'div',
                                        { className: ec.overall },
                                        '(',
                                        o().createElement('span', null, r),
                                        ' ×',
                                        o().createElement(
                                            wt.t,
                                            { args: C, isEnabled: f },
                                            o().createElement(
                                                'span',
                                                { className: ec.price },
                                                o().createElement(yu.t, tc({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        o().createElement(
                                            'span',
                                            { className: c()(ec.price, ec.price__final) },
                                            r
                                                ? o().createElement(yu.t, tc({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : o().createElement(Jl.F, {
                                                      size: Ql.et.small,
                                                      type: Ql.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    sc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, En.GS)(),
                            a = (0, gn.t)().model.computes.shells.specificationsLength(e);
                        return o().createElement(
                            'div',
                            { className: c()(Yl.base, t && Yl[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: Yl.overall },
                                V(a, (t) =>
                                    o().createElement(
                                        i.Fragment,
                                        { key: t },
                                        o().createElement(Kl, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: Yl.total }, o().createElement(nc, { id: e })),
                        );
                    }),
                    rc = R.images.gui.maps.icons.shell,
                    uc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, En.GS)(),
                            a = (0, gn.t)(),
                            n = a.model,
                            s = a.controls,
                            r = n.computes.shells.shell(e),
                            u = r.count,
                            l = r.type,
                            _ = r.intCD,
                            d = r.imageName,
                            m = r.installedSlotId,
                            p = r.itemInstalledSetupIdx,
                            b = r.itemInstalledSetupSlotIdx,
                            g = r.isMountedMoreThanOne,
                            E = n.shellsSetup.get(),
                            h = E.installedCount,
                            v = E.maxCount,
                            f = E.clipCount,
                            C = v - h + u,
                            A = (0, i.useCallback)(
                                (e) => {
                                    s.shells.updateSlot && s.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [s, _],
                            ),
                            D = (0, i.useMemo)(() => {
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
                            y = (0, i.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case En.cJ.Huge:
                                        case En.cJ.Large:
                                            return rc.large;
                                        default:
                                            return rc.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            B = R.strings.item_types.shell.kinds.$dyn(l),
                            k = systemLocale.toUpperCase(B);
                        return o().createElement(
                            'div',
                            { className: c()(ql.base, t && ql[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: ql.shell },
                                o().createElement(
                                    Ut,
                                    { args: F },
                                    o().createElement(
                                        wt.t,
                                        { args: S },
                                        o().createElement(
                                            'div',
                                            { className: ql.icon, style: y },
                                            o().createElement(
                                                'div',
                                                { className: c()(ql.count, !u && ql.count__zero) },
                                                u,
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: ql.name }, k),
                            ),
                            o().createElement(
                                'div',
                                { className: ql.ammunition },
                                o().createElement(Vl.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: u,
                                    maximum: v,
                                    sliderMaximum: C,
                                    onUpdates: A,
                                    stepCount: f,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: ql.specifications },
                                o().createElement(sc, { id: e }),
                            ),
                        );
                    }),
                    ic = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    oc = ({ id: e, onSwap: t, mediaSize: a, hoverSound: n = 'highlight', clickSound: s = 'play' }) => {
                        const r = (0, i.useCallback)(() => {
                                s && (0, st.G)(s), t(e);
                            }, [e, t, s]),
                            u = (0, i.useCallback)(() => {
                                n && (0, st.G)(n);
                            }, [n]);
                        return o().createElement('div', {
                            id: `swap-${e}`,
                            onClick: r,
                            onMouseEnter: u,
                            className: c()(ic.base, ic[`base__${a}`]),
                        });
                    },
                    lc = {
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
                    cc = (0, x.Pi)(({ id: e, onTransitionEnd: t, onSwap: a, leftID: n, rightID: s }) => {
                        const r = (0, En.GS)(),
                            u = (0, gn.t)().model,
                            i = u.computes.shells.length(),
                            l = u.computes.shells.shell(e).intCD;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                Ul,
                                { index: e, uniqueKey: l, leftID: n, rightID: s, mediaSize: r, onTransitionEnd: t },
                                o().createElement(
                                    'div',
                                    { className: c()(lc.base, r && lc[`base__${r}`]) },
                                    o().createElement(uc, { id: e }),
                                ),
                            ),
                            e !== i - 1 &&
                                o().createElement(
                                    'div',
                                    { className: c()(lc.swap, r && lc[`swap__${r}`]) },
                                    o().createElement(oc, { id: e, mediaSize: r, onSwap: a }),
                                ),
                        );
                    }),
                    _c = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    dc = (0, x.Pi)(() => {
                        const e = (0, gn.t)(),
                            t = e.model,
                            a = e.controls,
                            n = t.computes.shells.length(),
                            s = (0, i.useState)(!1),
                            r = s[0],
                            u = s[1],
                            l = (0, En.GS)(),
                            _ = t.computes.shells.ids(),
                            d = au(_),
                            m = (0, i.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            b = m.rightID,
                            g = (0, i.useCallback)(
                                (e) => {
                                    r || a.shells.actSlot({ actionType: nu.Xo, leftID: e, rightID: e + 1 }), u(!0);
                                },
                                [a, r],
                            ),
                            E = (0, i.useCallback)(() => {
                                u(!1);
                            }, [u]);
                        return o().createElement(
                            'div',
                            { className: c()(_c.base, _c[`base__${l}`]) },
                            V(n, (e) =>
                                o().createElement(cc, {
                                    id: e,
                                    onTransitionEnd: E,
                                    onSwap: g,
                                    leftID: p,
                                    rightID: b,
                                    key: `shell-container-${e}`,
                                }),
                            ),
                        );
                    }),
                    mc = (0, x.Pi)(() => {
                        const e = (0, En.GS)(),
                            t = (0, gn.t)().controls;
                        return o().createElement(En.Ar, {
                            header: o().createElement(
                                Oi,
                                { title: R.strings.tank_setup.section.shells() },
                                o().createElement(Wl.k, { isShortened: !0 }),
                            ),
                            content: o().createElement(dc, null),
                            footer: o().createElement(Ki.w, {
                                withConfirmation: !0,
                                renewalType: Xi.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    pc = {
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
                    bc = [w.zn, w.g9, w.mH, w.G$, w.YN],
                    gc = (e, t) => (t === e ? '' : bc.indexOf(t) > bc.indexOf(e) ? 'right' : 'left'),
                    Ec = ({ children: e, selectedSetup: t }) => {
                        const a = o().createRef(),
                            n = (0, i.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, i.useMemo)(() => {
                                const e = gc(n.current.selectedSetup, t);
                                return { enter: pc[`base__${e}Enter`] };
                            }, [t]),
                            r = (0, i.useCallback)(
                                (e) => {
                                    const s = gc(n.current.selectedSetup, t);
                                    (e.className = c()(pc.base, pc.base__exit)),
                                        e.classList.add(pc[`base__${s}Exit`]),
                                        (n.current.animatedElements[t] = a);
                                    Object.values(n.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(pc.base__previous);
                                    }),
                                        a.current && a.current.classList.add(pc.base__previous);
                                },
                                [a, t],
                            ),
                            u = (0, i.useCallback)(
                                (e) => {
                                    const a = gc(n.current.previousSelectedSetup, t);
                                    (e.className = pc.base), e.classList.add(pc[`base__${a}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, i.useCallback)(
                                (e) => {
                                    const a = gc(n.current.previousSelectedSetup, t);
                                    e.classList.add(pc[`base__${a}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, i.cloneElement)(e);
                        return (
                            (n.current.previousSelectedSetup = n.current.selectedSetup),
                            (n.current.selectedSetup = t),
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
                                        onExit: r,
                                        onEnter: u,
                                        onEntering: l,
                                    },
                                    o().createElement('div', { className: pc.base, ref: a }, _),
                                ),
                            )
                        );
                    },
                    hc = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = bn().model.tankSetup.get().selectedSetup;
                        return o().createElement(
                            i.Fragment,
                            null,
                            o().createElement(
                                Ec,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case w.zn:
                                            return o().createElement(Tl, { compare: e });
                                        case w.g9:
                                            return o().createElement(mc, null);
                                        case w.mH:
                                            return o().createElement(Sl, { compare: e });
                                        case w.G$:
                                            return o().createElement(Dl, { compare: e });
                                        case w.YN:
                                            return o().createElement(qi, null);
                                        default:
                                            return o().createElement(Tl, { compare: e });
                                    }
                                })(),
                            ),
                            o().createElement(zl, {
                                isBattleAbilities: t === w.YN,
                                arePopularLoadoutsHidden: t !== w.zn,
                                compare: e,
                            }),
                        );
                    }),
                    vc = (0, x.Pi)(() => {
                        const e = (0, gn.t)(),
                            t = e.model,
                            a = e.controls,
                            n = t.tankSetup.get().selectedSetup,
                            s = E().mediaWidth,
                            r = (0, i.useState)(!1),
                            u = r[0],
                            l = r[1];
                        (0, i.useEffect)(() => (0, k.v)(a.viewRendered), [a]);
                        const c = (0, i.useCallback)(() => {
                            u || a.close();
                        }, [u, a]);
                        return o().createElement(
                            pn.Provider,
                            { value: e },
                            o().createElement(mn.S, {
                                show: t.show.get(),
                                content: o().createElement(hc, null),
                                panel: o().createElement(
                                    H.k,
                                    null,
                                    o().createElement(dn, {
                                        show: t.show.get(),
                                        isReady: t.isReady.get(),
                                        panelType: De.w.Setup,
                                        setIsExitBlocked: l,
                                    }),
                                ),
                                button:
                                    n === w.YN &&
                                    s > m.j.medium.width &&
                                    o().createElement($i, { id: 'scenarios_btn', theme: Pi.Standalone }),
                                onAnimationDone: a.animationEnded,
                                onClose: c,
                            }),
                        );
                    });
                r.O.view.whenTutorialReady.then(() => {
                    B().render(
                        o().createElement(gn.k, null, o().createElement(F, null, o().createElement(vc, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, a) => {
                'use strict';
                a.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7739),
                    u = a(6179),
                    i = a.n(u),
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
                        const e = (0, u.useContext)(r.YN);
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
                    _ = ({ header: e, content: t, aside: a, footer: n, compare: r = !1 }) => {
                        const u = c(),
                            l = s()(o.Z.base, u && o.Z[`base__${u}`], r && o.Z.base__compare),
                            _ = s()(o.Z.header, u && o.Z[`header__${u}`]),
                            d = s()(o.Z.main),
                            m = s()(o.Z.content);
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
                            n && i().createElement('div', { className: o.Z.footer }, n),
                        );
                    };
            },
            3522: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(4598),
                    s = a(9480),
                    r = a(3946),
                    u = a(1922);
                const i = [
                        'qualityFuel',
                        'excellentFuel',
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
                    ],
                    o = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...i,
                    ],
                    l = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...i,
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
                            a = (0, r.Om)(
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
                                { equals: n.jv },
                            ),
                            i = (0, r.Om)(() => a().length),
                            _ = (0, r.Om)(
                                (e) => {
                                    const t = s.U2(a(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: n.jv },
                            ),
                            d = (0, r.Om)((e) => _(e).bonuses.items.length, { equals: n.jv }),
                            m = (0, r.Om)(
                                (e, t) => {
                                    const a = _(e),
                                        n = s.U2(a.bonuses.items, t);
                                    if (!n) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            p = (0, r.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            b = (0, r.Om)((e, t, a) => {
                                const n = d(e),
                                    s = p(e);
                                let r = s ? a - s : a,
                                    u = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!r) return null;
                                    (u = n > 2 ? 1 : 2 === n ? (r > 2 ? 2 : 1) : r), (r -= u);
                                }
                                return u;
                            }),
                            g = (0, r.Om)(
                                (e, t) => {
                                    const a = m(e, t);
                                    return s.dF(a.values, ({ valueKey: e }) => e === a.localeName);
                                },
                                { equals: n.jv },
                            ),
                            E = (0, r.Om)(
                                (e, a) =>
                                    ((e, t, a) => {
                                        const n = a !== u.cJ.Tiny || t ? o : l,
                                            r = c(e),
                                            i = s.u4(
                                                r,
                                                (e, t) => {
                                                    const a = n.indexOf(t.itemName);
                                                    return (e[-1 === a ? Math.max(e.length, l.length) : a] = t), e;
                                                },
                                                [],
                                            );
                                        return s.hX(i, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, a),
                                { equals: n.jv },
                            ),
                            h = (0, r.Om)((e, t) => E(e, t).length),
                            v = (0, r.Om)(
                                (e, t, a) => {
                                    const n = s.U2(E(t, a), e);
                                    if (!n) throw Error(`No consumable found with index: ${n}`);
                                    return Object.assign({}, n);
                                },
                                { equals: n.jv },
                            ),
                            f = (0, r.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), c(e);
                                    var e;
                                },
                                { equals: n.jv },
                            ),
                            C = (0, r.Om)(() => f().length),
                            A = (0, r.Om)(
                                (e) => {
                                    const t = s.U2(f(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: n.jv },
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
                                    bonusVisibleLinesCount: b,
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: v },
                                boosters: { length: C, booster: A },
                            },
                        };
                    };
            },
            3028: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => l, t: () => c });
                var n = a(3215),
                    s = a(4598),
                    r = a(9480),
                    u = a(3946),
                    i = a(3522);
                const o = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, i._)(e),
                                a = t.model,
                                n = t.computes,
                                o = e.object('tankSetup.shellsSetup'),
                                l = e.array('tankSetup.shellsSetup.slots'),
                                c = e.object('ammunitionPanel'),
                                _ = e.array('ammunitionPanel.sectionGroups'),
                                d = e.object('optionalDevicesAssistant'),
                                m = e.array('optionalDevicesAssistant.optionalDevicesAssistantItems'),
                                p = () => r.UI(m.get(), (e) => Object.assign({}, e, { items: r.UI(e.items, s.yR) })),
                                b = (0, u.Om)(() => p().sort((e, t) => t.popularity - e.popularity)),
                                g = (0, u.Om)(
                                    (e) => {
                                        const t = r.U2(l.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: s.jv },
                                ),
                                E = (0, u.Om)(() => l.get().length),
                                h = (0, u.Om)(() => r.UI(l.get(), (e) => e.intCD), { equals: s.jv }),
                                v = (0, u.Om)((e) => g(e).specifications.length),
                                f = (0, u.Om)(
                                    (e, t) => {
                                        const a = g(e),
                                            n = r.U2(a.specifications, t);
                                        if (!n) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                C = (0, u.Om)(
                                    (e, t) => {
                                        const a = g(e),
                                            n = r.U2(a.price.price, t);
                                        if (!n) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                A = (0, u.Om)(
                                    (e, t) => {
                                        const a = g(e),
                                            n = r.U2(a.price.defPrice, t);
                                        if (!n) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: s.jv },
                                ),
                                D = (0, u.Om)((e) => g(e).price.price.length),
                                S = (0, u.Om)((e) => g(e).price.defPrice.length),
                                F = (0, u.Om)(() => {
                                    const e = c.get().selectedSlot,
                                        t = r.U2(_.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const a = r.U2(t.sections, 0);
                                    if (!a) throw Error('No section found');
                                    const n = r.U2(a.slots, e);
                                    if (!n) throw Error(`No slot found with index: ${e}`);
                                    const s = r.U2(n.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), a, {
                                shellsSetup: o,
                                shellsSlots: l,
                                ammunitionPanel: c,
                                sectionGroups: _,
                                optionalDevicesAssistant: d,
                                computes: Object.assign({}, n, {
                                    getOptionalDevicesAssistantItems: p,
                                    sortedOptionalDevicesAssistantItems: b,
                                    shells: {
                                        length: E,
                                        shell: g,
                                        specificationsLength: v,
                                        specification: f,
                                        price: C,
                                        priceLength: D,
                                        defPriceLength: S,
                                        defPrice: A,
                                        ids: h,
                                    },
                                    selectedSlotSpecialization: F,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            onHintShown: e.createCallback(
                                () => ({ value: !0 }),
                                'optionalDevicesAssistant.onHintShown',
                            ),
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
            8774: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => C });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3457),
                    u = a(2106),
                    i = a(6373),
                    o = a(6179),
                    l = a.n(o);
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
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: a = '',
                    show: n = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: S = u.L.primary,
                    isModernized: F,
                    isFreeToDemount: y,
                    level: B,
                    onClick: w,
                }) => {
                    const k = (0, o.useRef)(null),
                        x = (0, o.useRef)(f.Hidden),
                        T = (0, o.useRef)(!1),
                        I = (0, o.useState)(!n),
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
                            n !== T.current &&
                                (n ? ((x.current = f.FadeOut), O(!1)) : (x.current = f.FadeIn), (T.current = n));
                        }, [n]),
                        (0, o.useEffect)(() => {
                            if (M) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [M]),
                        (0, o.useEffect)(() => () => H && clearTimeout(H), [H]);
                    const W = (0, o.useCallback)(() => {
                            M || (P(!0), x.current === f.Visible && j(setTimeout(() => w(t), 200)));
                        }, [t, w, M]),
                        G = F ? v(t, B) : t,
                        Z = (0, o.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, a, n) => (a ? 'demount_plus' : n ? v(e, t) : e))(t, B, y, F);
                            return {
                                header: E.title.$dyn(e),
                                body: h.includes(e) ? void 0 : E.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, F, B, D]),
                        U = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${a || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, a],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, n ? d : _, N && m) },
                        l().createElement(
                            i.i,
                            Z,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    r.u5,
                                    { onClick: W, type: S, mixClass: g, disabled: C },
                                    l().createElement('div', { className: b, style: U }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => h });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r),
                    i = a(3457),
                    o = a(6373);
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
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: a,
                    callback: r,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: E,
                }) => {
                    const h = (0, n.useCallback)(() => {
                            r(t, g);
                        }, [t, r, g]),
                        v = (0, n.useMemo)(() => {
                            if (l) {
                                const t = u()(m, g && p);
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
                    return s().createElement(o.i, a, s().createElement(i.u5, b({}, E, { onClick: h }), v));
                };
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
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
            5310: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(9916),
                    u = a(6179),
                    i = a.n(u),
                    o = a(2558),
                    l = a(8934),
                    c = a(8529);
                const _ = ({ children: e, when: t, canAccept: a }) => {
                    const n = (0, u.useCallback)((e, t) => {
                            (0, r.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
                            });
                        }, []),
                        _ = (0, u.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        d = (0, u.useCallback)(
                            (e) => {
                                n(e, c.Z.base__exit);
                            },
                            [n],
                        );
                    return t
                        ? i().createElement(
                              o.Z,
                              null,
                              i().createElement(
                                  l.Z,
                                  { in: a, timeout: 500, onEnter: _, onExit: d, key: `index-${a}` },
                                  i().createElement('div', { className: s()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : i().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, a) => {
                'use strict';
                a.d(t, { my: () => E, sF: () => f });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3403),
                    u = a(6179),
                    i = a.n(u),
                    o = a(1922),
                    l = a(3934),
                    c = a(5310),
                    _ = a(5851),
                    d = a(2306),
                    m = a(7198),
                    p = a(5178),
                    b = a(6826),
                    g = a(628);
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
                    f = (0, r.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: a = o.cJ.Medium,
                            panelType: n = h.Row,
                            priceLabel: r = v.toBePaid(),
                            autoRenewalLabel: E,
                            onAutoRenewalChanged: f,
                            onDealConfirmed: C,
                            onDealCancelled: A,
                        }) => {
                            const D = (0, p.t)(),
                                S = D.model,
                                F = (0, u.useRef)(null),
                                y = a === o.cJ.Tiny || a === o.cJ.Small,
                                B = n === h.Row,
                                w = Boolean(S.totalItemsInStorage.get()),
                                k = Boolean(S.price.get().length),
                                x = y && w && k;
                            return i().createElement(
                                d.h.Provider,
                                { value: D },
                                i().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            g.Z.base,
                                            a && g.Z[`base__${a}`],
                                            e && g.Z.base__renewal,
                                            !B && g.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        i().createElement(
                                            'div',
                                            { className: s()(g.Z.renewal, !B && g.Z.renewal__dialog) },
                                            i().createElement(_.Y, { renewType: e, onValueChanged: f, label: E }),
                                        ),
                                    i().createElement(
                                        c.f,
                                        { when: B, canAccept: S.canAccept.get() },
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            w &&
                                                i().createElement(
                                                    'div',
                                                    { className: s()(g.Z.storage, a && g.Z[`storage__${a}`]) },
                                                    !y &&
                                                        i().createElement(
                                                            'div',
                                                            { className: g.Z.from },
                                                            v.fromStorage(),
                                                        ),
                                                    i().createElement(l.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: S.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            x && i().createElement('div', { className: g.Z.plus }),
                                            k &&
                                                i().createElement(
                                                    'div',
                                                    { className: s()(g.Z.totalPrice, x && g.Z.totalPrice__mixed) },
                                                    i().createElement(b.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: r,
                                                        isHideMessage: y && B,
                                                    }),
                                                ),
                                            t &&
                                                S.canAccept.get() &&
                                                i().createElement(
                                                    'div',
                                                    { className: g.Z.control },
                                                    i().createElement(m.Z, {
                                                        isDisabled: S.isDisabled.get(),
                                                        canCancel: S.canCancel.get(),
                                                        onCancel: () => A && A(),
                                                        onConfirm: () => C && C(),
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
            5851: (e, t, a) => {
                'use strict';
                a.d(t, { Y: () => c });
                var n = a(2262),
                    s = a(6373),
                    r = a(3403),
                    u = a(6179),
                    i = a.n(u),
                    o = a(8175),
                    l = a(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: a = o.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            _ = r.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, u.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            p = (0, u.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(a),
                                    n = a === o.my.General ? '' : e.body.$dyn(a);
                                return { header: String(t || e.header.general()), body: n ? String(n) : void 0 };
                            }, [a]);
                        return i().createElement(
                            s.i,
                            p,
                            i().createElement(n.XZ, {
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
                var n = a(3457),
                    s = a(6179),
                    r = a.n(s),
                    u = a(2527);
                const i = r().memo(({ applyBtnString: e, isDisabled: t, onConfirm: a, confirmButtonRef: s }) =>
                    r().createElement(
                        'div',
                        { ref: s, className: u.Z.base, id: 'deal-panel-confirm' },
                        r().createElement(
                            n.u5,
                            { size: n.qE.medium, disabled: t, onClick: () => a && a() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => c });
                var n = a(3457),
                    s = a(6373),
                    r = a(7383),
                    u = a(6179),
                    i = a.n(u),
                    o = a(1957),
                    l = a(8099);
                const c = i().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: t,
                        canCancel: a,
                        onCancel: u,
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
                                      s.i,
                                      { body: d.tooltip.notEnough() },
                                      i().createElement('div', null, m),
                                  )
                                : m,
                            i().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                i().createElement(
                                    n.u5,
                                    {
                                        size: n.qE.medium,
                                        type: n.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !a,
                                        onClick: u,
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
                var n = a(3403),
                    s = a(6179),
                    r = a.n(s),
                    u = a(8175),
                    i = a(5178);
                const o = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let t = e.parentModelPath,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, o);
                    const n = `${t}.dealPanel`;
                    return r().createElement(i.k, { options: { context: n } }, r().createElement(u.sF, a));
                });
            },
            6826: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => c });
                var n = a(6483),
                    s = a.n(n),
                    r = a(6179),
                    u = a.n(r),
                    i = a(8401),
                    o = a(5178),
                    l = a(1523);
                const c = ({ parentId: e, isHideMessage: t, priceLabel: a }) => {
                    const n = (0, o.t)().model;
                    return u().createElement(
                        'div',
                        { id: `${e}-total-price`, className: l.Z.base },
                        u().createElement('div', { className: s()(l.Z.message, t && l.Z.message__hidden) }, a),
                        u().createElement(i.t, {
                            ignoreDiscount: !0,
                            bigSize: !0,
                            price: n.price.get(),
                            defPrice: n.defPrice.get(),
                            discount: n.discount.get(),
                            priceSeparator: u().createElement('div', { className: l.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => s, o: () => r });
                var n = a(6179);
                const s = (0, n.createContext)(null),
                    r = () => {
                        const e = (0, n.useContext)(s);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => s, t: () => r });
                const n = (0, a(3215).q)()(
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
                    s = n[0],
                    r = n[1];
            },
            8750: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => l, F: () => o });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
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
                    const a = u()(i.base, e !== o.SMALL && i[`base__${e}`]),
                        r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: a, style: r });
                };
            },
            1363: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3649),
                    u = a(6179),
                    i = a.n(u),
                    o = a(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: a,
                        classMix: n,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, r.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? i().createElement(
                                              'span',
                                              { key: t, className: s()(l, _) },
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
                            b = (0, u.useMemo)(
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
                                                      { key: t, className: s()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : i().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return i().createElement(
                            'div',
                            { id: `${e}-details`, className: s()(l, n) },
                            m ? p : i().createElement(o.n, { mediaSize: a, blocks: b, linesCount: d }),
                        );
                    };
            },
            3267: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => r });
                var n = a(6179),
                    s = a.n(n);
                const r = ({ wrapper: e, children: t, when: a, withProps: n }) =>
                    a ? s().createElement(e, n, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => d });
                var n = a(6483),
                    s = a.n(n),
                    r = a(7405),
                    u = a(329),
                    i = a(6179),
                    o = a.n(i);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: a = null,
                        showZero: n = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length);
                        return o().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (n || Boolean(e.value)) &&
                                    o().createElement(
                                        i.Fragment,
                                        { key: t },
                                        t > 0 && a,
                                        o().createElement(
                                            'div',
                                            { className: s()(c, p && _) },
                                            o().createElement(r.F, {
                                                key: t,
                                                isDiscount: p,
                                                size: d ? u.et.big : u.et.small,
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
                a.d(t, { S: () => g, y: () => b });
                var n = a(6483),
                    s = a.n(n),
                    r = a(8089),
                    u = a(4598),
                    i = a(3815),
                    o = a(8526),
                    l = a(5521),
                    c = a(7727),
                    _ = a(6179),
                    d = a.n(_),
                    m = a(1922);
                const p = {
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
                    b = 'setup-content',
                    g = ({ content: e, panel: t, button: a, show: n = !0, onAnimationDone: g = u.ZT, onClose: E }) => {
                        const h = (0, m.GS)(),
                            v = (0, _.useRef)(null),
                            f = (0, _.useRef)(!1);
                        (0, o.gd)(l.n.ESCAPE, (0, i.z)(E)),
                            (0, _.useEffect)(() => {
                                n && (f.current = !0), f.current && (0, c.G)('cons_select_view');
                            }, [n]);
                        const C = (0, i.z)(g);
                        (0, _.useEffect)(() => {
                            const e = v.current;
                            if (e) {
                                function t(e) {
                                    e.target === v.current && C();
                                }
                                return (
                                    e.addEventListener('animationend', t),
                                    () => {
                                        e.removeEventListener('animationend', t);
                                    }
                                );
                            }
                        }, [C]);
                        const A = !t;
                        return d().createElement(
                            'div',
                            { className: s()(p.base, n && p.base__shown, A ? p.base__compare : p.base__setup) },
                            A && d().createElement('div', { className: p.back }),
                            a,
                            d().createElement(
                                'div',
                                { className: s()(p.close, h && p[`close__${h}`], !n && p.close__hidden) },
                                d().createElement(r.A, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: E,
                                }),
                            ),
                            d().createElement(
                                'div',
                                {
                                    id: b,
                                    ref: v,
                                    className: s()(
                                        p.content,
                                        A && p.content__compare,
                                        !n && !f.current && p.content__invisible,
                                        p['content__' + (n ? 'shown' : 'hidden')],
                                    ),
                                },
                                e,
                            ),
                            t && d().createElement('div', { className: p.panel }, t),
                        );
                    };
            },
            5282: (e, t, a) => {
                'use strict';
                a.d(t, { n: () => b, D: () => p });
                var n = a(6483),
                    s = a.n(n),
                    r = a(1856),
                    u = a(3138),
                    i = a(9916),
                    o = a(6179),
                    l = a.n(o),
                    c = a(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = a(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    b = ({ blocks: e, linesCount: t = 2, mediaSize: a }) => {
                        const n = (0, o.useState)(e),
                            m = n[0],
                            p = n[1],
                            b = (0, o.useState)({ width: 0, height: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, o.useRef)(null),
                            v = (0, o.useRef)({ shortened: !1 }),
                            f = (0, o.useCallback)(() => {
                                (0, i.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const a = Number(e.split('rem')[0]),
                                            n = h.current;
                                        if (n && isFinite(a)) {
                                            const e = u.O.view.remToPx(t * a);
                                            E({ height: e, width: n.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, o.useEffect)(() => {
                            if (e.length) return v.current.shortened && ((v.current.shortened = !1), p(e)), (0, r.v)(f);
                        }, [e, a, f]),
                            (0, o.useEffect)(() => {
                                if (g.height && !v.current.shortened) {
                                    const e = (0, c.M)(h, g.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (v.current.shortened = !0);
                                    }
                                }
                            }, [m, g, a]);
                        const C = (0, o.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: s()(_, g.height && d), style: C }, m);
                    };
            },
            6605: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => n, M: () => r });
                const n = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const a = e.current;
                        if (a) {
                            const e = a.getBoundingClientRect(),
                                n = e.top + t,
                                r = Array.from(a.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const a = e.length - 1;
                                    if (!s(e[a], t)) return -1;
                                    let n = 0,
                                        r = a - 1,
                                        u = !1;
                                    for (; r - n > 1; ) {
                                        const a = n + Math.floor(0.5 * (r - n + 1));
                                        (u = s(e[a], t)), u ? (r = a) : (n = a);
                                    }
                                    return u || s(e[r], t) ? n : r;
                                })(r, n);
                                if (t > 0) {
                                    const a = r[t].getBoundingClientRect();
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
                var n = a(6483),
                    s = a.n(n),
                    r = a(8526),
                    u = a(5521),
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
                        maximum: n,
                        picker: r,
                        allowSlide: u,
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
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: o },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (a / n) * 100 + '%' } },
                                !u && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / n) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                r && l().createElement('div', { className: _.picker }, r),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    E = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: a }) => {
                        const n = s()(b, a && g, t && E);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: n }),
                        );
                    },
                    v = 'Slider_base_2c',
                    f = 'Slider_slideArea_dd',
                    C = 'Slider_editor_5c',
                    A = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    S = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    F = ({ parentId: e, type: t, isEnabled: a, onClick: n }) => {
                        const r = s()(S.base, a && S.base__enabled, S[`base__${t}${a ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: n });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: a,
                        sliderMaximum: n,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: b = !0,
                        stepCount: g = 1,
                    }) => {
                        const E = (0, o.useRef)(null),
                            S = (0, o.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, o.useRef)({ currentValue: t, maximum: a, sliderMaximum: n, sliderMinimum: _ }),
                            B = (0, o.useState)(t),
                            w = B[0],
                            k = B[1],
                            x = (0, o.useState)(!1),
                            T = x[0],
                            I = x[1],
                            N = (0, o.useState)(!1),
                            R = N[0],
                            O = N[1],
                            L = (0, o.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        a = y.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = a % g;
                                        t < 0 && e ? (a -= e) : (a += t - e);
                                    } else a += t;
                                    return a;
                                },
                                [g],
                            ),
                            M = (0, o.useCallback)(
                                (e, t) => {
                                    if (!E.current) return 0;
                                    const a = E.current.getBoundingClientRect(),
                                        n = y.current.maximum,
                                        s = a.width / n,
                                        r = e - a.left,
                                        u = Math.floor(s > 0 ? r / s : r);
                                    if (u > n) return n;
                                    if (u <= 0) return 0;
                                    if (g > 1) {
                                        let e = u - (u % g);
                                        const a = u - e;
                                        return (
                                            a > 0 && ((t && u > y.current.currentValue) || a > 0.5 * g) && (e += g), e
                                        );
                                    }
                                    return u;
                                },
                                [g],
                            ),
                            P = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.sliderMaximum,
                                        n = t.sliderMinimum;
                                    e < n ? (e = n) : e > a && (e = a),
                                        y.current.currentValue !== e && (k(e), (y.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            $ = t < n,
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
                            W = (0, o.useCallback)(() => {
                                (S.current.down = !1), O(!1);
                            }, []),
                            G = (0, o.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && S.current.down) {
                                        S.current.move = !0;
                                        const t = M(e.clientX);
                                        P(t);
                                    } else W();
                                },
                                [W, M, P],
                            );
                        (0, r.gd)(u.n.ARROW_UP, j, !1, !0),
                            (0, r.gd)(u.n.ARROW_RIGHT, j, !1, !0),
                            (0, r.gd)(u.n.ARROW_DOWN, z, !1, !0),
                            (0, r.gd)(u.n.ARROW_LEFT, z, !1, !0),
                            (0, o.useEffect)(() => {
                                y.current.maximum = a;
                            }, [a]),
                            (0, o.useEffect)(() => {
                                if (R)
                                    return (
                                        document.addEventListener('mouseup', W),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            document.removeEventListener('mouseup', W),
                                                document.removeEventListener('mousemove', G);
                                        }
                                    );
                            }, [R, G, W]),
                            (0, o.useEffect)(() => {
                                (y.current.sliderMaximum = n), (y.current.sliderMinimum = _);
                            }, [n, _]),
                            (0, o.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]);
                        const Z = (0, o.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((S.current.down = !0), O(!0));
                                },
                                [d],
                            ),
                            U = (0, o.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = M(e.clientX, !S.current.move),
                                        a = y.current,
                                        n = a.currentValue,
                                        s = a.sliderMaximum,
                                        r = a.sliderMinimum;
                                    P(t), (0, c.u)(n, t, s, r), (S.current.move = !1);
                                },
                                [M, d, P],
                            ),
                            V = (0, o.useCallback)(() => {
                                (S.current.over = !0), I(!0), (0, i.G)('highlight');
                            }, []),
                            q = (0, o.useCallback)(() => {
                                (S.current.over = !1), I(!1);
                            }, []),
                            X = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        a = t.currentValue,
                                        n = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        r = L(e.deltaY > 0);
                                    P(r), (0, c.u)(a, r, n, s);
                                },
                                [L, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: E, onMouseEnter: V, onMouseLeave: q, onWheel: X, className: v },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(C, A) },
                                        l().createElement(F, { parentId: e, type: 'minus', isEnabled: H, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(C, D) },
                                        l().createElement(F, { parentId: e, type: 'plus', isEnabled: $, onClick: j }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: U, onMouseDown: Z, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: a,
                                    value: w,
                                    availableMaximum: n,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: T }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => o });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                const i = {
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
                    o = s().memo(({ isTemporary: e, overlayType: t, overlaySource: a }) => {
                        const r = u()(i.base, e && i.base__fitting),
                            o = u()(i.icon, i[`icon__${t}`]),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => o });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                const i = {
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
                        isSelected: a,
                        isBorderActive: n,
                        children: r,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = u()(
                            i.base,
                            !e && i[`base__${o}`],
                            t && i[`base__${t}`],
                            a && !c && !n && i.base__selected,
                            c && i['base__dragIn' + (a ? 'Active' : '')],
                            l && i.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, r);
                    };
            },
            8598: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => l });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                const i = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = u()(i, !e && o);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, a) => {
                'use strict';
                a.d(t, { c: () => p });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3977),
                    u = a(6179),
                    i = a.n(u),
                    o = a(906),
                    l = a(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    p = ({
                        level: e,
                        overlayType: t,
                        isTemporary: a,
                        withAttention: n,
                        imageSource: p,
                        isIncompatible: b,
                    }) => {
                        const g = (0, u.useMemo)(() => {
                                const a = t === r.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(a);
                            }, [t, e]),
                            E = (0, u.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !g && Boolean(t) && e;
                        return i().createElement(
                            'div',
                            null,
                            h && i().createElement(l.a, { level: e }),
                            i().createElement('div', { className: s()(c, (a || n) && _), style: E }),
                            n && i().createElement('div', { className: d }),
                            b && i().createElement('div', { className: m }),
                            g && i().createElement(o.r, { isTemporary: a, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, a) => {
                'use strict';
                a.d(t, { a: () => o });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                const i = {
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
                        const t = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            a = u()(i.base, i[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: a });
                    };
            },
            4814: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => b });
                var n = a(9480),
                    s = a(6179),
                    r = a.n(s),
                    u = a(1922),
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
                        isDynamic: n,
                        mediaSize: i,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const b = i !== u.cJ.None,
                            g = (0, s.useCallback)(() => {
                                d && a && m && m(p);
                            }, [p, d, a, m]),
                            E = (0, s.useMemo)(() => {
                                let a = '';
                                b && (a = (i === u.cJ.Large || i === u.cJ.Huge ? u.cJ.Large : u.cJ.Medium) + '_');
                                const n = `${a}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(n);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, i, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: n, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, n, d],
                            );
                        if (!E) return null;
                        const v = o()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${i}`],
                                a && _.base__setup,
                                t && _.base__correct,
                            ),
                            f = o()(_.icon, b && _[`icon__${i}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = r().createElement(
                                'div',
                                { key: e, className: v },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: f, style: E }),
                            );
                        return r().createElement(
                            c.t,
                            { args: h },
                            d && a
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      A,
                                  )
                                : r().createElement('div', { className: C }, A),
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
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: a,
                    mediaSize: s = u.cJ.None,
                    activeSpecsMask: i,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: i },
                              n.UI(e, (e, n) =>
                                  r().createElement(
                                      d,
                                      p({ index: n, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: a,
                                          mediaSize: s,
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
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                const i = 'Storage_base_53',
                    o = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const a = u()(i, e && o),
                            n = u()(c, 0 === t && _);
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: l }),
                            s().createElement('div', { className: n }, t),
                        );
                    };
            },
            9605: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => h });
                var n = a(6179),
                    s = a.n(n),
                    r = a(6483),
                    u = a.n(r);
                let i;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(i || (i = {}));
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
                    h = ({ id: e, state: t, currentIndex: a, isHovered: r }) => {
                        const h = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            v = e === a,
                            f = !v && t === i.WARNING;
                        return s().createElement(
                            'div',
                            { className: u()(o, { [l]: v, [c]: f, [m]: r }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: g }),
                            s().createElement('div', { style: h, className: E }),
                        );
                    };
            },
            9344: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => m });
                var n = a(6483),
                    s = a.n(n),
                    r = a(9480),
                    u = a(7727),
                    i = a(6179),
                    o = a.n(i),
                    l = a(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: a, states: n, isDisabled: m, groupId: p }) => {
                        const b = (0, i.useRef)(null),
                            g = (0, i.useState)(!1),
                            E = g[0],
                            h = g[1],
                            v = (a + 1) % t,
                            f = (0, i.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: v });
                            }, [p, m, v, e]),
                            C = (0, i.useCallback)(() => {
                                m || (h(!0), u.$.playHighlight());
                            }, [m]),
                            A = (0, i.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: D,
                                onClick: f,
                                onMouseEnter: C,
                                onMouseLeave: A,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                o().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: r.MH(n, t),
                                    currentIndex: a,
                                    isHovered: E,
                                }),
                            ),
                            m && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, a) => {
                'use strict';
                a.d(t, { y: () => w });
                var n = a(4888),
                    s = a(7383),
                    r = a(1396),
                    u = a(3403),
                    i = a(6179),
                    o = a.n(i),
                    l = a(2558),
                    c = a(8934),
                    _ = a(3220),
                    d = a(5958);
                const m = 'BackEffects_shine_f6',
                    p = 'BackEffects_sparks_55',
                    b = 'BackEffects_nut_79',
                    g = 'BackEffects_wrench_5a',
                    E = { enterActive: 'BackEffects_shine__enterActive_54' },
                    h = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    v = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    f = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [n.dZ, n.sH],
                    A = o().memo(({ in: e, actionType: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: E },
                                o().createElement('div', { className: m }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: h },
                                o().createElement('div', { className: p }),
                            ),
                            C.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: v },
                                        o().createElement('div', { className: b }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: f },
                                        o().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    D = 'ColorMask_base_60',
                    S = 'ColorMask_base__enterActive_62',
                    F = ({ inProp: e, maskImage: t }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: S } },
                            o().createElement('div', { className: D, style: { maskImage: `url(${t})` } }),
                        ),
                    y = {
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
                    B = { enter: y.base__enter, exit: y.base__enter },
                    w = (0, u.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: a,
                            slotType: u,
                            isEmpty: m = !1,
                            imageSource: p,
                            itemInstalledSetupIndex: b,
                        }) => {
                            const g = (0, _.t)().model.lastSlotAction.get(),
                                E = g.leftID,
                                h = g.rightID,
                                v = g.leftIntCD,
                                f = g.rightIntCD,
                                C = g.actionType,
                                D = g.intCD,
                                S = (0, i.useState)(!0),
                                w = S[0],
                                k = S[1],
                                x = (0, i.useState)(!0),
                                T = x[0],
                                I = x[1],
                                N = (0, i.useState)(p),
                                R = N[0],
                                O = N[1],
                                L = (0, i.useState)(a),
                                M = L[0],
                                P = L[1],
                                $ = (0, i.useState)(b),
                                H = $[0],
                                j = $[1],
                                z = (0, r.K)(),
                                W = (0, r.K)(),
                                G = [n._2, n.dZ, n.sH],
                                Z = (D === a || D === M) && H !== b && G.includes(C),
                                U = -1 === v || -1 === f,
                                V = u ? `base${u[0].toUpperCase() + u.slice(1)}` : 'base',
                                q = d.Sr[C] || 0;
                            (0, i.useEffect)(() => {
                                m || O(p);
                            }, [m, p]);
                            const X = (0, i.useCallback)(
                                    (e) => {
                                        const a = Object.assign({}, B);
                                        switch (C) {
                                            case n.Xo: {
                                                const e = E === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    n = h - E != 1 ? d.mI.SWAP : '';
                                                (a.enterDone = y[`${V}__enter${e}${n}`]),
                                                    (a.exit = y[`${V}__exit${e}${n}`]),
                                                    U &&
                                                        (m
                                                            ? (a.enterDone = y[`${V}__enter${d.mI.FADE}`])
                                                            : (a.exit = y[`${V}__exit${d.mI.FADE}`]));
                                                break;
                                            }
                                            case n._2:
                                                (a.enterDone = y[`${V}__enter${d.mI.DESTROY}`]),
                                                    (a.exit = y[`${V}__exit${d.mI.DESTROY}`]),
                                                    z.run(() => k(!0), d.YJ),
                                                    I(!0);
                                                break;
                                            case n.sH:
                                            case n.dZ:
                                                (a.enter = y[`${V}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (a.exit = y[`${V}__exit${d.mI.DEMOUNT}`]),
                                                    z.run(() => k(!0), d.Ij);
                                                break;
                                            case n.eC:
                                            case n.FR:
                                                if (u !== s.g9) {
                                                    const e = C === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    (a.enter = y[`${V}__enter${e}`]),
                                                        (a.exit = y[`${V}__exit${e}`]),
                                                        (a.exitActive = y[`${V}__exitActive${d.mI.FITTING}`]);
                                                } else
                                                    (a.enterDone = y[`${V}__enter${d.mI.FADE}`]),
                                                        (a.exit = y[`${V}__exit${d.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: a, timeout: q });
                                    },
                                    [C, q, E, t, h, V, U, m, z, u],
                                ),
                                K = (0, i.useCallback)(
                                    (e) => {
                                        W.run(() => {
                                            (e.className = ''), e.classList.add(y.base), P(a), j(b);
                                        }, q);
                                    },
                                    [W, q, a, b],
                                ),
                                Y = (0, i.useCallback)(() => {
                                    k(!1), I(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: X },
                                    o().createElement(
                                        c.Z,
                                        {
                                            key: a,
                                            timeout: q,
                                            classNames: B,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: y.base }, e),
                                    ),
                                ),
                                Z &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(A, { in: w, actionType: C }),
                                        o().createElement(F, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Dp: () => o,
                    IG: () => l,
                    Ij: () => u,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => i,
                    mI: () => m,
                    wx: () => c,
                });
                var n = a(4888);
                const s = 200,
                    r = 1600,
                    u = 900,
                    i = 900,
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
                const p = { [n.Xo]: s, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: r, [n.sH]: r, [n.Fd]: r };
            },
            5096: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var n = a(6483),
                    s = a.n(n),
                    r = a(3403),
                    u = a(6179),
                    i = a.n(u),
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
                    _ = (0, r.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const a = (0, o.GS)(),
                            n = (0, l.t)().model.shellsSetup.get(),
                            r = n.installedCount,
                            u = n.maxCount,
                            _ = r === u,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return i().createElement(
                            'div',
                            { className: s()(c.base, !_ && c.base__incomplete) },
                            !t && i().createElement('div', { className: c.tip }, m),
                            e
                                ? `${r}/${u}`
                                : i().createElement(
                                      'div',
                                      {
                                          className: s()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${a}`],
                                          ),
                                      },
                                      `${r}/${u}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => s, u: () => r });
                var n = a(7727);
                const s = (e, t) => {
                        const a = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, n.G)(a + '_' + e) : (0, n.G)(a);
                    },
                    r = (e, t, a, s) => {
                        t > a ||
                            t < s ||
                            (t > e ? (0, n.G)('cons_ammo_roll_plus') : t < e && (0, n.G)('cons_ammo_roll_minus'));
                    };
            },
            3977: (e, t, a) => {
                'use strict';
                a.d(t, { qm: () => n });
                const n = 'equipmentModernized';
            },
            4888: (e, t, a) => {
                'use strict';
                a.d(t, {
                    DA: () => r,
                    FR: () => s,
                    Fd: () => o,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => u,
                    _2: () => c,
                    dZ: () => i,
                    eC: () => n,
                    sH: () => l,
                });
                const n = 'select',
                    s = 'undo',
                    r = 'cancel',
                    u = 'swap',
                    i = 'demount',
                    o = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one';
            },
            7383: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $4: () => m,
                    G$: () => u,
                    S: () => p,
                    WI: () => o,
                    YN: () => i,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => r,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => l,
                    zn: () => n,
                });
                const n = 'optDevices',
                    s = 'shells',
                    r = 'consumables',
                    u = 'battleBoosters',
                    i = 'battleAbilities',
                    o = 'toggleShells',
                    l = 'toggleCamouflage',
                    c = 'apply',
                    _ = 'applyVehicle',
                    d = 'applyType',
                    m = 'equipCoinInfo',
                    p = 'simple',
                    b = 'modernized';
            },
            6880: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
                };
            },
            4382: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
            8460: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            7476: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
            8852: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
                };
            },
            1960: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = {
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
                a.d(t, { Z: () => n });
                const n = {
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
                a.d(t, { Z: () => n });
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
            2527: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                const n = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var s = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, n] = deferred[o], r = !0, u = 0; u < t.length; u++)
                        (!1 & n || s >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((r = !1), n < s && (s = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, a, n];
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
            var t = (t, a) => {
                    var n,
                        s,
                        [r, u, i] = a,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in u) __webpack_require__.o(u, n) && (__webpack_require__.m[n] = u[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); o < r.length; o++)
                        (s = r[o]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(9096));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
