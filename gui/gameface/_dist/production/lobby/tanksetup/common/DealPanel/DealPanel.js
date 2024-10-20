(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                n.d(t, { L$: () => _.L, qE: () => _.q, u5: () => u });
                var r = n(6483),
                    a = n.n(r),
                    i = n(7727),
                    o = n(6179),
                    s = n.n(o),
                    l = n(6880),
                    _ = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: c,
                    mixClass: u,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: h,
                    onMouseMove: g,
                    onMouseDown: b,
                    onMouseUp: v,
                    onMouseLeave: w,
                    onClick: E,
                }) => {
                    const p = (0, o.useRef)(null),
                        f = (0, o.useState)(n),
                        C = f[0],
                        y = f[1],
                        k = (0, o.useState)(!1),
                        x = k[0],
                        O = k[1],
                        L = (0, o.useState)(!1),
                        M = L[0],
                        T = L[1],
                        S = (0, o.useCallback)(() => {
                            c || (p.current && (p.current.focus(), y(!0)));
                        }, [c]),
                        P = (0, o.useCallback)(
                            (e) => {
                                C && null !== p.current && !p.current.contains(e.target) && y(!1);
                            },
                            [C],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                c || (E && E(e));
                            },
                            [c, E],
                        ),
                        N = (0, o.useCallback)(
                            (e) => {
                                c || (null !== d && (0, i.G)(d), h && h(e), T(!0));
                            },
                            [c, d, h],
                        ),
                        D = (0, o.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        H = (0, o.useCallback)(
                            (e) => {
                                c || (v && v(e), O(!1));
                            },
                            [c, v],
                        ),
                        F = (0, o.useCallback)(
                            (e) => {
                                c || (null !== m && (0, i.G)(m), b && b(e), n && S(), O(!0));
                            },
                            [c, m, b, S, n],
                        ),
                        B = (0, o.useCallback)(
                            (e) => {
                                c || (w && w(e), O(!1));
                            },
                            [c, w],
                        ),
                        I = a()(
                            l.Z.base,
                            l.Z[`base__${r}`],
                            {
                                [l.Z.base__disabled]: c,
                                [l.Z[`base__${t}`]]: t,
                                [l.Z.base__focus]: C,
                                [l.Z.base__highlightActive]: x,
                                [l.Z.base__firstHover]: M,
                            },
                            u,
                        ),
                        W = a()(l.Z.state, l.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, o.useEffect)(() => {
                            y(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: p,
                                className: I,
                                onMouseEnter: N,
                                onMouseMove: D,
                                onMouseUp: H,
                                onMouseDown: F,
                                onMouseLeave: B,
                                onClick: A,
                            },
                            r !== _.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.Z.back }),
                                    s().createElement('span', { className: l.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: l.Z.stateDisabled }),
                                s().createElement('span', { className: l.Z.stateHighlightHover }),
                                s().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: _.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const u = (0, o.memo)(c);
            },
            2106: (e, t, n) => {
                let r, a;
                n.d(t, { L: () => r, q: () => a }),
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
                    })(a || (a = {}));
            },
            2262: (e, t, n) => {
                n.d(t, { XZ: () => m });
                var r = n(6179),
                    a = n.n(r),
                    i = n(6483),
                    o = n.n(i),
                    s = n(7727),
                    l = n(1641),
                    _ = n(8844),
                    c = n(4382);
                const u = [
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
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        n = e.isChecked,
                        i = void 0 !== n && n,
                        m = e.isDisabled,
                        h = void 0 !== m && m,
                        g = e.isAlert,
                        b = void 0 !== g && g,
                        v = e.size,
                        w = void 0 === v ? _.yB.medium : v,
                        E = e.type,
                        p = void 0 === E ? _.Rh.primary : E,
                        f = e.soundHover,
                        C = void 0 === f ? 'highlight' : f,
                        y = e.soundClick,
                        k = void 0 === y ? 'play' : y,
                        x = e.onMouseEnter,
                        O = e.onMouseLeave,
                        L = e.onMouseUp,
                        M = e.onMouseDown,
                        T = e.onClick,
                        S = e.onChange,
                        P = e.onFocus,
                        R = e.onBlur,
                        A = e.text,
                        N = e.contentStyles,
                        D = e.children,
                        H = e.alignment,
                        F = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, u);
                    const B = (0, r.useState)(!1),
                        I = B[0],
                        W = B[1],
                        U = (0, r.useState)(!1),
                        Z = (U[0], U[1]),
                        V = (0, r.useCallback)(
                            (e) => {
                                h || (S && S(), T && T(e));
                            },
                            [h, S, T],
                        ),
                        q = (0, r.useCallback)(
                            (e) => {
                                const t = e.button === l.t.LEFT;
                                h || (t && W(!0), t && M && M(e), k && (0, s.G)(k));
                            },
                            [h, M, k],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                h || (W(!1), L && L(e));
                            },
                            [h, L],
                        ),
                        j = (0, r.useCallback)(
                            (e) => {
                                h || (x && x(e), C && (0, s.G)(C));
                            },
                            [h, x, C],
                        ),
                        z = (0, r.useCallback)(
                            (e) => {
                                h || (W(!1), O && O(e));
                            },
                            [h, O],
                        ),
                        K = (0, r.useCallback)(
                            (e) => {
                                h || (Z(!0), P && P(e));
                            },
                            [h, P],
                        ),
                        Y = (0, r.useCallback)(
                            (e) => {
                                h || (Z(!1), R && R(e));
                            },
                            [h, R],
                        ),
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: o()(c.Z.labelContent, 's-labelContent'), style: N },
                                A || D,
                            ),
                        );
                    return a().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: o()(c.Z.base, c.Z[`base__${w}`], c.Z[`base__${p}`], {
                                    [c.Z.base__checked]: i,
                                    [c.Z.base__disabled]: h,
                                    [c.Z.base__mouseDown]: I,
                                    [c.Z.base__alert]: b,
                                    [c.Z.base__center]: H === _.N3.Center,
                                    [c.Z.base__bottom]: H === _.N3.Bottom,
                                }),
                                onClick: V,
                                onMouseEnter: j,
                                onMouseLeave: z,
                                onMouseDown: q,
                                onMouseUp: G,
                                onFocus: K,
                                onBlur: Y,
                            },
                            F,
                        ),
                        a().createElement(
                            'div',
                            { className: c.Z.input },
                            a().createElement('div', { className: c.Z.alertOverlay }),
                            a().createElement('div', { className: c.Z.inputHoverOverlay }),
                            a().createElement('div', { className: c.Z.highlight }),
                        ),
                        a().createElement('div', { className: c.Z.checkmark }),
                        ((A || D) && X) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                let r, a, i;
                n.d(t, { N3: () => i, Rh: () => a, yB: () => r }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(i || (i = {}));
            },
            7405: (e, t, n) => {
                var r = n(6483),
                    a = n.n(r),
                    i = n(6179),
                    o = n.n(i),
                    s = n(329),
                    l = n(2372),
                    _ = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: r,
                    isEnough: i,
                    value: c,
                    discountValue: u,
                    showPlus: d,
                    stockBackgroundName: m = s.we.Red,
                }) => {
                    const h = a()(_.Z.value, _.Z[`value__${r}`], !i && _.Z.value__notEnough),
                        g = a()(_.Z.icon, _.Z[`icon__${r}-${n}`]),
                        b = a()(_.Z.stock, u && _.Z.stock__indent, t && _.Z.stock__interactive),
                        v = d && c > 0 && '+',
                        w = a()(_.Z.base, _.Z[`base__${n}`]);
                    return o().createElement(
                        'span',
                        { className: w },
                        o().createElement(
                            'span',
                            { className: h },
                            v,
                            o().createElement(l.A, { value: c, format: r === s.V2.gold ? 'gold' : 'integral' }),
                        ),
                        o().createElement('span', { className: g }),
                        e &&
                            o().createElement(
                                'span',
                                { className: b },
                                o().createElement('span', {
                                    className: _.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                }),
                                Boolean(u) && u,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                o().memo(c);
            },
            329: (e, t, n) => {
                let r, a, i;
                n.d(t, { V2: () => a, we: () => i }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(r || (r = {})),
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
                    })(i || (i = {}));
            },
            2372: (e, t, n) => {
                n.d(t, { A: () => o });
                var r = n(6179),
                    a = n.n(r),
                    i = n(4179);
                const o = ({ format: e, value: t }) => {
                    const n = ((e, t = 'integral') => {
                        let n;
                        n = 'gold' === t ? i.B3.GOLD : i.B3.INTEGRAL;
                        return void 0 === e ? '' : i.Z5.getNumberFormat(e, n);
                    })(t, e);
                    return n ? a().createElement('span', null, n) : null;
                };
            },
            3495: (e, t, n) => {
                n.d(t, { Y: () => u });
                var r = n(3138),
                    a = n(6179),
                    i = n(1043),
                    o = n(5262);
                const s = r.O.client.getSize('rem'),
                    l = s.width,
                    _ = s.height,
                    c = Object.assign({ width: l, height: _ }, (0, o.T)(l, _, i.j)),
                    u = (0, a.createContext)(c);
            },
            1039: (e, t, n) => {
                var r = n(6179),
                    a = n.n(r),
                    i = n(6536),
                    o = n(3495),
                    s = n(1043),
                    l = n(5262),
                    _ = n(3138);
                (0, r.memo)(({ children: e }) => {
                    const t = (0, r.useContext)(o.Y),
                        n = (0, r.useState)(t),
                        c = n[0],
                        u = n[1],
                        d = (0, r.useCallback)((e, t) => {
                            const n = _.O.view.pxToRem(e),
                                r = _.O.view.pxToRem(t);
                            u(Object.assign({ width: n, height: r }, (0, l.T)(n, r, s.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const m = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(o.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                var r = n(6179),
                    a = n(7382),
                    i = n(3495);
                const o = ['children'];
                const s = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, o);
                    const s = (0, r.useContext)(i.Y),
                        l = s.extraLarge,
                        _ = s.large,
                        c = s.medium,
                        u = s.small,
                        d = s.extraSmall,
                        m = s.extraLargeWidth,
                        h = s.largeWidth,
                        g = s.mediumWidth,
                        b = s.smallWidth,
                        v = s.extraSmallWidth,
                        w = s.extraLargeHeight,
                        E = s.largeHeight,
                        p = s.mediumHeight,
                        f = s.smallHeight,
                        C = s.extraSmallHeight,
                        y = { extraLarge: w, large: E, medium: p, small: f, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && _) return t;
                        if (n.medium && c) return t;
                        if (n.small && u) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, a.H)(t, n, y);
                        if (n.largeWidth && h) return (0, a.H)(t, n, y);
                        if (n.mediumWidth && g) return (0, a.H)(t, n, y);
                        if (n.smallWidth && b) return (0, a.H)(t, n, y);
                        if (n.extraSmallWidth && v) return (0, a.H)(t, n, y);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && w) return t;
                            if (n.largeHeight && E) return t;
                            if (n.mediumHeight && p) return t;
                            if (n.smallHeight && f) return t;
                            if (n.extraSmallHeight && C) return t;
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
            7382: (e, t, n) => {
                n.d(t, { H: () => r });
                const r = (e, t, n) =>
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
                n(6010), n(1039), n(3495);
            },
            1043: (e, t, n) => {
                n.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                var r;
                function a(e, t, n) {
                    const r = (function (e, t) {
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
                        a = (function (e, t) {
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
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => a }),
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
                    })(r || (r = {}));
            },
            6373: (e, t, n) => {
                n.d(t, { i: () => _ });
                var r = n(2056),
                    a = n(6179),
                    i = n.n(a);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    _ = (e) => {
                        let t = e.children,
                            n = e.body,
                            _ = e.header,
                            c = e.note,
                            u = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, o);
                        const h = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: _, note: c, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, n, _, c, d]);
                        return i().createElement(
                            r.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: h,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, n) => {
                n.d(t, { u: () => _ });
                var r = n(7902),
                    a = n(4179),
                    i = n(6179);
                const o = [
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
                const l = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    _ = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            _ = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            h = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            b = void 0 !== g && g,
                            v = e.decoratorId,
                            w = void 0 === v ? 0 : v,
                            E = e.isEnabled,
                            p = void 0 === E || E,
                            f = e.targetId,
                            C = void 0 === f ? 0 : f,
                            y = e.onShow,
                            k = e.onHide,
                            x = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, o);
                        const O = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, i.useMemo)(() => C || (0, r.F)().resId, [C]),
                            M = (0, i.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (l(n, w, { isMouseEvent: !0, on: !0, arguments: s(a) }, L),
                                    y && y(),
                                    (O.current.isVisible = !0));
                            }, [n, w, a, L, y]),
                            T = (0, i.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        l(n, w, { on: !1 }, L),
                                        O.current.isVisible && k && k(),
                                        (O.current.isVisible = !1);
                                }
                            }, [n, w, L, k]),
                            S = (0, i.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = O.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === p && T();
                            }, [p, T]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return p
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((O.current.timeoutId = window.setTimeout(M, h ? 100 : 400)),
                                                      _ && _(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              T(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && T(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && T(), null == u || u(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      x,
                                  ),
                              )
                            : t;
                        var P;
                    };
            },
            527: (e, t, n) => {
                n.r(t), n.d(t, { mouse: () => s, onResize: () => i });
                var r = n(2472),
                    a = n(1176);
                const i = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        s = o[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        r(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var r = n(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                n.d(t, { O: () => a });
                var r = n(5959);
                const a = { view: n(7641), client: r };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => y,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => k,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => C,
                        isFocused: () => p,
                        pxToRem: () => v,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => L,
                    });
                var r = n(3722),
                    a = n(6112),
                    i = n(6538),
                    o = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const x = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => _ });
                const r = ['args'];
                const a = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    _ = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, n) => {
                n.d(t, { F: () => r });
                const r = (e = 1) => {
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
                };
            },
            8071: (e, t, n) => {
                n.d(t, { M: () => r });
                const r = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
            },
            6536: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(6179);
                const a = (e) => {
                    const t = (0, r.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            9056: (e, t, n) => {
                n.d(t, { m: () => l });
                var r = n(7902),
                    a = n(8071),
                    i = n(4179),
                    o = n(6179);
                const s = i.Sw.instance,
                    l = (e = 'model', t = !0) => {
                        const n = (0, o.useState)(0),
                            i = (n[0], n[1]),
                            l = (0, o.useMemo)(() => (0, r.F)(), []),
                            _ = l.caller,
                            c = l.resId,
                            u = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== _ ? `children.${_}.${e}` : e),
                                [_, e],
                            ),
                            d = (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, a.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(u),
                                [u],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            i((e) => e + 1);
                                        },
                                        n = s.addCallback(e, t, c);
                                    return () => s.removeCallback(n, c);
                                }
                            }, [e, t, c]),
                            d
                        );
                    };
            },
            5521: (e, t, n) => {
                let r, a;
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
                    })(a || (a = {}));
            },
            1641: (e, t, n) => {
                let r;
                n.d(t, { t: () => r }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(r || (r = {}));
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { G: () => r });
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(3138);
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
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                a.__instance = void 0;
                const i = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, t, n) => {
                n.d(t, { Sw: () => i.Z, B3: () => _, Z5: () => o, B0: () => l, ry: () => w });
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
                const a = r;
                var i = n(1358);
                const o = {
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
                    };
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const _ = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    h = n(3138);
                const g = ['args'];
                function b(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            b(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(i, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    p = () => E(l.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = n(7572);
                const y = a.instance,
                    k = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: l,
                        NumberFormatType: _,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => E(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                _ = s.x,
                                c = s.y,
                                u = s.width,
                                d = s.height,
                                m = {
                                    x: h.O.view.pxToRem(_) + o.x,
                                    y: h.O.view.pxToRem(c) + o.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(d),
                                };
                            E(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: E,
                        onBindingsReady: w,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
            1922: (e, t, n) => {
                n(6483), n(7739), n(6179), n(1960);
                let r;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(r || (r = {}));
            },
            7208: (e, t, n) => {
                n(6179), n(6483), n(4179);
            },
            5851: (e, t, n) => {
                var r = n(6179),
                    a = n.n(r),
                    i = n(9056),
                    o = n(6373),
                    s = n(2262);
                let l;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(l || (l = {}));
                (0, r.memo)(
                    ({
                        modelPath: e,
                        label: t = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: n,
                        renewType: _ = l.General,
                    }) => {
                        const c = (0, i.m)(e),
                            u = c.isAutoRenewalEnabled,
                            d = c.onAutoRenewalChanged,
                            m = (0, r.useCallback)(() => {
                                const e = { value: !u };
                                d && d(e), n && n(e);
                            }, [n, d, u]),
                            h = (0, r.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal;
                                return {
                                    header: e.header.$dyn(_) || e.header.general(),
                                    body: _ === l.General ? '' : e.body.$dyn(_),
                                };
                            }, [_]);
                        return a().createElement(
                            o.i,
                            h,
                            a().createElement(s.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: u,
                                text: t,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            8982: (e, t, n) => {
                var r = n(6179),
                    a = n.n(r),
                    i = n(3457),
                    o = n(6373),
                    s = n(7383);
                const l = 'ConfirmButton_base_75',
                    _ = a().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: o }) => {
                        const s = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            _ = (0, r.useCallback)(() => n && n(), [n]);
                        return a().createElement(
                            'div',
                            { ref: o, className: l, id: 'deal-panel-confirm' },
                            a().createElement(i.u5, { size: i.qE.medium, disabled: t, onClick: _ }, s),
                        );
                    }),
                    c = 'Controls_base_d3',
                    u = 'Controls_button_f8';
                a().memo(
                    ({
                        applyBtnString: e = s.YR,
                        isDisabled: t,
                        canCancel: n,
                        onCancel: r,
                        onConfirm: l,
                        confirmButtonRef: d,
                    }) => {
                        const m = R.strings.tank_setup.dealPanel,
                            h = a().createElement(_, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: l,
                                confirmButtonRef: d,
                            });
                        return a().createElement(
                            'div',
                            { id: 'deal-panel-controls', className: c },
                            t
                                ? a().createElement(
                                      o.i,
                                      { body: m.tooltip.notEnough() },
                                      a().createElement('div', null, h),
                                  )
                                : h,
                            a().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                a().createElement(
                                    i.u5,
                                    { size: i.qE.medium, type: i.L$.secondary, mixClass: u, disabled: !n, onClick: r },
                                    m.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            8772: (e, t, n) => {
                n(6483), n(9056), n(6179), n(1922), n(3934), n(7208), n(5851), n(8982);
                n(8401);
                let r;
                !(function (e) {
                    (e.Column = 'column'), (e.Row = 'row');
                })(r || (r = {}));
                R.strings.tank_setup.dealPanel;
            },
            8401: (e, t, n) => {
                n(6179), n(6483), n(7405), n(329);
            },
            3934: (e, t, n) => {
                n(6179), n(6483);
            },
            7383: (e, t, n) => {
                n.d(t, { YR: () => r });
                const r = 'apply';
            },
            6880: (e, t, n) => {
                n.d(t, { Z: () => r });
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
            4382: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
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
                n.d(t, { Z: () => r });
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
            1960: () => {},
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
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
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
        (__webpack_require__.j = 826),
        (() => {
            var e = { 826: 0, 745: 0, 653: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var _ = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(_);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(8772));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
