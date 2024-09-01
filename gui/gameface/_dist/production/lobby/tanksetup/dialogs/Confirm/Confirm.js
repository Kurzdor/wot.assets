(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7727),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6880),
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
                    onMouseDown: p,
                    onMouseUp: g,
                    onMouseLeave: F,
                    onClick: D,
                }) => {
                    const h = (0, i.useRef)(null),
                        C = (0, i.useState)(t),
                        b = C[0],
                        B = C[1],
                        v = (0, i.useState)(!1),
                        f = v[0],
                        y = v[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                b && null !== h.current && !h.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [b]),
                        (0, i.useEffect)(() => {
                            B(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: a()(
                                    s.Z.base,
                                    s.Z[`base__${n}`],
                                    c && s.Z.base__disabled,
                                    u && s.Z[`base__${u}`],
                                    b && s.Z.base__focus,
                                    f && s.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== m && (0, r.G)(m), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (g && g(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== d && (0, r.G)(d),
                                        p && p(e),
                                        t && (c || (h.current && (h.current.focus(), B(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (F && F(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (D && D(e));
                                },
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.Z.back }),
                                    o().createElement('span', { className: s.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: a()(s.Z.state, s.Z.state__default) },
                                o().createElement('span', { className: s.Z.stateDisabled }),
                                o().createElement('span', { className: s.Z.stateHighlightHover }),
                                o().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(a || (a = {}));
            },
            2262: (e, u, t) => {
                'use strict';
                t.d(u, { XZ: () => d });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    o = t(7727),
                    s = t(1641),
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
                        p = void 0 !== A && A,
                        g = e.size,
                        F = void 0 === g ? l.yB.medium : g,
                        D = e.type,
                        h = void 0 === D ? l.Rh.primary : D,
                        C = e.soundHover,
                        b = void 0 === C ? 'highlight' : C,
                        B = e.soundClick,
                        v = void 0 === B ? 'play' : B,
                        f = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        x = e.onMouseDown,
                        S = e.onClick,
                        k = e.onChange,
                        P = e.onFocus,
                        T = e.onBlur,
                        I = e.text,
                        N = e.contentStyles,
                        R = e.children,
                        M = e.alignment,
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
                        W = L[0],
                        H = L[1],
                        $ = (0, n.useState)(!1),
                        V = ($[0], $[1]),
                        j = (0, n.useCallback)(
                            (e) => {
                                E || (k && k(), S && S(e));
                            },
                            [E, k, S],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                const u = e.button === s.t.LEFT;
                                E || (u && H(!0), u && x && x(e), v && (0, o.G)(v));
                            },
                            [E, x, v],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                E || (H(!1), w && w(e));
                            },
                            [E, w],
                        ),
                        z = (0, n.useCallback)(
                            (e) => {
                                E || (f && f(e), b && (0, o.G)(b));
                            },
                            [E, f, b],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                E || (H(!1), y && y(e));
                            },
                            [E, y],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                E || (V(!0), P && P(e));
                            },
                            [E, P],
                        ),
                        K = (0, n.useCallback)(
                            (e) => {
                                E || (V(!1), T && T(e));
                            },
                            [E, T],
                        ),
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: N },
                                I || R,
                            ),
                        );
                    return a().createElement(
                        'div',
                        m(
                            {
                                id: u,
                                className: i()(c.Z.base, c.Z[`base__${F}`], c.Z[`base__${h}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: E,
                                    [c.Z.base__mouseDown]: W,
                                    [c.Z.base__alert]: p,
                                    [c.Z.base__center]: M === l.N3.Center,
                                    [c.Z.base__bottom]: M === l.N3.Bottom,
                                }),
                                onClick: j,
                                onMouseEnter: z,
                                onMouseLeave: q,
                                onMouseDown: U,
                                onMouseUp: Z,
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
                        ((I || R) && X) || null,
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
                    o = t.n(i),
                    s = t(8460),
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
                        o().createElement(
                            'span',
                            { className: a()(s.Z.base, s.Z[`base__${t}`], E) },
                            o().createElement(
                                'span',
                                {
                                    className: a()(
                                        s.Z.value,
                                        s.Z[`value__${n}`],
                                        !m && s.Z.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                _ && i > 0 && '+',
                                o().createElement(r.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: a()(s.Z.icon, s.Z[`icon__${n}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            u && s.Z.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
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
                            (e.eliteXP = 'eliteXP'),
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
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, r.j)),
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
                const o = (e) => {
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
                    const o = (0, n.useContext)(r.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        m = o.extraSmall,
                        d = o.extraLargeWidth,
                        E = o.largeWidth,
                        A = o.mediumWidth,
                        p = o.smallWidth,
                        g = o.extraSmallWidth,
                        F = o.extraLargeHeight,
                        D = o.largeHeight,
                        h = o.mediumHeight,
                        C = o.smallHeight,
                        b = o.extraSmallHeight,
                        B = { extraLarge: F, large: D, medium: h, small: C, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, a.H)(u, t, B);
                        if (t.largeWidth && E) return (0, a.H)(u, t, B);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, B);
                        if (t.smallWidth && p) return (0, a.H)(u, t, B);
                        if (t.extraSmallWidth && g) return (0, a.H)(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, n.memo)(o);
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
                const s = R.views.common.tooltip_window.simple_tooltip_content,
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
                            o(
                                {
                                    contentId:
                                        ((A = null == m ? void 0 : m.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
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
                const s = (e, u, t = {}, n = 0) => {
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
                            p = void 0 !== A && A,
                            g = e.decoratorId,
                            F = void 0 === g ? 0 : g,
                            D = e.isEnabled,
                            h = void 0 === D || D,
                            C = e.targetId,
                            b = void 0 === C ? 0 : C,
                            B = e.onShow,
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
                            w = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            x = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (s(t, F, { isMouseEvent: !0, on: !0, arguments: o(a) }, w),
                                    B && B(),
                                    (y.current.isVisible = !0));
                            }, [t, F, a, w, B]),
                            S = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        s(t, F, { on: !1 }, w),
                                        y.current.isVisible && v && v(),
                                        (y.current.isVisible = !1);
                                }
                            }, [t, F, w, v]),
                            k = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                      l && l(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === p && S(), null == m || m(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === p && S(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var P;
                    };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => o });
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
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const o = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
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
                                s = n.O.view.addModelObserver(i, u, !0);
                            return o.set(s, t), e && t(l(a)), s;
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
                            for (var e, t = a(o.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => s });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: _ }) {
                            const m = (0, r.useRef)([]),
                                d = (t, r, i) => {
                                    var s;
                                    const l = o.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
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
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
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
                                A = (0, r.useState)(s),
                                p = A[0],
                                g = A[1],
                                F = (0, r.useState)(() => d(s, l, _)),
                                D = F[0],
                                h = F[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? h(d(p, l, _)) : (E.current = !0);
                                }, [_, p, l]),
                                (0, r.useEffect)(() => {
                                    g(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        D.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [D],
                                ),
                                i().createElement(t.Provider, { value: D }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
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
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
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
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => b,
                        isFocused: () => h,
                        pxToRem: () => g,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
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
                    return 'rem' === e ? u : { x: F(u.x), y: F(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function B() {
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
                    o = 64,
                    s = (e, u) => {
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
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
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
                        o = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === e && (o = e.selectionStart), o > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    a = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const i = e.selectionEnd;
                                i > o ? e.setSelectionRange(o, i, 'forward') : e.setSelectionRange(i, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (o = -1);
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
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
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
                t.d(u, { Sw: () => r.Z, B3: () => s, Z5: () => i.Z5, B0: () => o, ry: () => g, Eu: () => F });
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const E = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                            A(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    D = (e, u) => {
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
                    h = () => D(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var b = t(7572);
                const B = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                _ = s.width,
                                m = s.height,
                                E = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(m),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: p(E),
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
                        handleViewEvent: D,
                        onBindingsReady: g,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: B,
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
                    o = t.n(i),
                    s = t(2558),
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
                        ? o().createElement(
                              s.Z,
                              null,
                              o().createElement(
                                  l.Z,
                                  { in: t, timeout: 500, onEnter: _, onExit: m, key: `index-${t}` },
                                  o().createElement('div', { className: a()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, u, t) => {
                'use strict';
                t.d(u, { D0: () => F, my: () => g, sF: () => h });
                var n = t(6483),
                    a = t.n(n),
                    r = t(3403),
                    i = t(6179),
                    o = t.n(i),
                    s = t(1922),
                    l = t(3934),
                    c = t(5310),
                    _ = t(5851),
                    m = t(2306),
                    d = t(7198),
                    E = t(5178),
                    A = t(6826),
                    p = t(628);
                let g, F;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(g || (g = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(F || (F = {}));
                const D = R.strings.tank_setup.dealPanel,
                    h = (0, r.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: u = !1,
                            mediaSize: t = s.cJ.Medium,
                            panelType: n = F.Row,
                            priceLabel: r = D.toBePaid(),
                            autoRenewalLabel: g,
                            onAutoRenewalChanged: h,
                            onDealConfirmed: C,
                            onDealCancelled: b,
                        }) => {
                            const B = (0, E.t)(),
                                v = B.model,
                                f = (0, i.useRef)(null),
                                y = t === s.cJ.Tiny || t === s.cJ.Small,
                                w = n === F.Row,
                                x = Boolean(v.totalItemsInStorage.get()),
                                S = Boolean(v.price.get().length),
                                k = y && x && S;
                            return o().createElement(
                                m.h.Provider,
                                { value: B },
                                o().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            p.Z.base,
                                            t && p.Z[`base__${t}`],
                                            e && p.Z.base__renewal,
                                            !w && p.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        o().createElement(
                                            'div',
                                            { className: a()(p.Z.renewal, !w && p.Z.renewal__dialog) },
                                            o().createElement(_.Y, { renewType: e, onValueChanged: h, label: g }),
                                        ),
                                    o().createElement(
                                        c.f,
                                        { when: w, canAccept: v.canAccept.get() },
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            x &&
                                                o().createElement(
                                                    'div',
                                                    { className: a()(p.Z.storage, t && p.Z[`storage__${t}`]) },
                                                    !y &&
                                                        o().createElement(
                                                            'div',
                                                            { className: p.Z.from },
                                                            D.fromStorage(),
                                                        ),
                                                    o().createElement(l.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: v.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            k && o().createElement('div', { className: p.Z.plus }),
                                            S &&
                                                o().createElement(
                                                    'div',
                                                    { className: a()(p.Z.totalPrice, k && p.Z.totalPrice__mixed) },
                                                    o().createElement(A.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: r,
                                                        isHideMessage: y && w,
                                                    }),
                                                ),
                                            u &&
                                                v.canAccept.get() &&
                                                o().createElement(
                                                    'div',
                                                    { className: p.Z.control },
                                                    o().createElement(d.Z, {
                                                        isDisabled: v.isDisabled.get(),
                                                        canCancel: v.canCancel.get(),
                                                        onCancel: () => b && b(),
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
                    o = t.n(i),
                    s = t(8175),
                    l = t(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: u,
                        renewType: t = s.my.General,
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
                                    n = t === s.my.General ? '' : e.body.$dyn(t);
                                return { header: String(u || e.header.general()), body: n ? String(n) : void 0 };
                            }, [t]);
                        return o().createElement(
                            a.i,
                            E,
                            o().createElement(n.XZ, {
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
                t.d(u, { p: () => o });
                var n = t(3457),
                    a = t(6179),
                    r = t.n(a),
                    i = t(2527);
                const o = r().memo(({ applyBtnString: e, isDisabled: u, onConfirm: t, confirmButtonRef: a }) =>
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
                    o = t.n(i),
                    s = t(1957),
                    l = t(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: u,
                        canCancel: t,
                        onCancel: i,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const m = R.strings.tank_setup.dealPanel,
                            d = o().createElement(s.p, {
                                applyBtnString: e,
                                isDisabled: u,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return o().createElement(
                            'div',
                            { className: l.Z.base },
                            u
                                ? o().createElement(
                                      a.i,
                                      { body: m.tooltip.notEnough() },
                                      o().createElement('div', null, d),
                                  )
                                : d,
                            o().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                o().createElement(
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
                    o = t(5178);
                const s = ['parentModelPath'];
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
                        })(e, s);
                    const n = `${u}.dealPanel`;
                    return r().createElement(o.k, { options: { context: n } }, r().createElement(i.sF, t));
                });
            },
            6826: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    o = t(8401),
                    s = t(5178),
                    l = t(1523);
                const c = ({ parentId: e, isHideMessage: u, priceLabel: t }) => {
                    const n = (0, s.t)().model;
                    return i().createElement(
                        'div',
                        { id: `${e}-total-price`, className: l.Z.base },
                        i().createElement('div', { className: a()(l.Z.message, u && l.Z.message__hidden) }, t),
                        i().createElement(o.t, {
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
                    o = t(6179),
                    s = t.n(o);
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
                        return s().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, u) =>
                                    (n || Boolean(e.value)) &&
                                    s().createElement(
                                        o.Fragment,
                                        { key: u },
                                        u > 0 && t,
                                        s().createElement(
                                            'div',
                                            { className: a()(c, E && _) },
                                            s().createElement(r.F, {
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
                const o = 'Storage_base_53',
                    s = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    m = ({ valueFirst: e = !1, itemsInStorage: u }) => {
                        const t = i()(o, e && s),
                            n = i()(c, 0 === u && _);
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement('div', { className: l }),
                            a().createElement('div', { className: n }, u),
                        );
                    };
            },
            4397: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r);
                const o = 'postProgressionPairModification',
                    s = 'dealPanel';
                var l = t(3138);
                let c;
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
                })(c || (c = {}));
                const _ = (e = {}) => {
                    (0, n.useEffect)(() => {
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
                var m = t(5521),
                    d = t(3403),
                    E = t(6483),
                    A = t.n(E),
                    p = t(3457),
                    g = t(7727);
                const F = {
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
                    D = [
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
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                class C extends a().PureComponent {
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
                            o = e.classNames,
                            s = e.onMouseEnter,
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
                                })(e, D)),
                            d = A()(F.base, F[`base__${i}`], F[`base__${r}`], null == o ? void 0 : o.base),
                            E = A()(F.icon, F[`icon__${i}`], F[`icon__${r}`], null == o ? void 0 : o.icon),
                            p = A()(F.glow, null == o ? void 0 : o.glow),
                            g = A()(F.caption, F[`caption__${i}`], null == o ? void 0 : o.caption),
                            C = A()(F.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            h(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== i && a().createElement('div', { className: F.shine }),
                            a().createElement('div', { className: E }, a().createElement('div', { className: p })),
                            a().createElement('div', { className: g }, u),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                C.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var b = t(6373);
                const B = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                var v = t(1281);
                let f;
                function y(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(f || (f = {}));
                const w = (e) => e.replace(/&nbsp;/g, ' '),
                    x = (e, u, t) => {
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
                    k = (e, u, t = f.left) => e.split(u).reduce(t === f.left ? x : S, []),
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
                    T = ['zh_cn', 'zh_sg', 'zh_tw'],
                    I = (e, u = f.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (T.includes(t)) return P(e);
                        if ('ja' === t) {
                            return (0, v.D4)()
                                .parse(e)
                                .map((e) => w(e));
                        }
                        return ((e, u = f.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = w(e);
                            return k(a, /( )/, u).forEach((e) => (t = t.concat(k(e, n, f.left)))), t;
                        })(e, u);
                    };
                var N = t(9916),
                    M = t(8613);
                Date.now(), M.Ew.getRegionalDateTime, M.Ew.getFormattedDateTime;
                var O = t(7902);
                const L = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var W = t(6536);
                const H = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    V = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = L(`${e}.${t}`, window);
                                return H(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    j = (e) => {
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
                                    return H(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    U = N.Sw.instance;
                let Z;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Z || (Z = {}));
                const z = (e = 'model', u = Z.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => (0, O.F)(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = L(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return H(u) ? u.value : u;
                                })(V(s)),
                            ),
                            c = l[0],
                            _ = l[1],
                            m = (0, n.useRef)(-1);
                        return (
                            (0, W.Z)(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Z.Deep : Z.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Z.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Z.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = j(e);
                                    m.current = U.addCallback(n, t, o, u === Z.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== Z.None)
                                    return () => {
                                        U.removeCallback(m.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    q = (N.Sw.instance, B);
                var G = t(329),
                    K = t(2056),
                    X = t(2372);
                let Y;
                !(function (e) {
                    (e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent');
                })(Y || (Y = {}));
                const J = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    Q = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const r = u === G.V2.gold ? 'gold' : 'integral',
                            i = (0, n.useMemo)(() => {
                                return (
                                    (e = Y.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== Y.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === Y.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === Y.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return a().createElement(
                            K.u,
                            i,
                            a().createElement(
                                'span',
                                { className: A()(J.currency, J[`currency__${u}`]) },
                                t ? a().createElement(X.A, { value: e, format: r }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    ee = 'CurrencyBalance_base_97',
                    ue = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: ee },
                            a().createElement(Q, { value: t, currencyType: G.V2.crystal, isWalletAvailable: r }),
                            a().createElement(Q, { value: u, currencyType: G.V2.gold, isWalletAvailable: r }),
                            a().createElement(Q, { value: e, currencyType: G.V2.credits, isWalletAvailable: r }),
                            a().createElement(Q, { value: n, currencyType: G.V2.freeXP, isWalletAvailable: r }),
                        ),
                    te = 'DialogTemplate_base_bb',
                    ne = 'DialogTemplate_control_3e',
                    ae = 'DialogTemplate_closeButton_2c',
                    re = 'DialogTemplate_view_78',
                    ie = 'DialogTemplate_view__show_51',
                    oe = 'DialogTemplate_content_dc',
                    se = 'DialogTemplate_line_af',
                    le = 'DialogTemplate_divider_cb',
                    ce = 'DialogTemplate_footer_2b',
                    _e = 'DialogTemplate_buttons_f5',
                    me = 'DialogTemplate_buttonWrapper_d9',
                    de = 'DialogTemplate_button_f0';
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Ae = ({
                    parentId: e,
                    content: u,
                    footer: t,
                    type: r = 'simple',
                    buttonAccept: i,
                    buttonAcceptText: o,
                    buttonCancel: s,
                    buttonCancelText: c,
                    disabledAcceptTooltipText: d = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                    showPayInfo: E = !1,
                    isShowTooltip: g = !0,
                }) => {
                    const F = z('model'),
                        D = F.credits,
                        h = F.golds,
                        B = F.crystals,
                        v = F.freexp,
                        f = F.onAcceptClicked,
                        y = F.onCancelClicked,
                        w = F.onExit,
                        x = F.isWalletAvailable,
                        S = (0, n.useCallback)(() => {
                            f();
                        }, [f]),
                        k = (0, n.useCallback)(() => {
                            y();
                        }, [y]),
                        P = (0, n.useCallback)(() => {
                            w();
                        }, [w]);
                    _({ [m.n.ESCAPE]: P });
                    const T = (0, n.useCallback)(
                        (e) => {
                            e.keyCode in m.n &&
                                e.keyCode !== m.n.BACKSPACE &&
                                e.keyCode !== m.n.DELETE &&
                                (e.preventDefault(), l.O.view.setEventHandled()),
                                e.keyCode !== m.n.ENTER ||
                                    e.altKey ||
                                    window.model.isAcceptDisabled ||
                                    i.disabled ||
                                    S();
                        },
                        [i.disabled, S],
                    );
                    (0, n.useEffect)(
                        () => (
                            document.addEventListener('keydown', T), () => document.removeEventListener('keydown', T)
                        ),
                        [T],
                    );
                    const I = A()(se, le),
                        N =
                            E &&
                            'simple' === r &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(ue, {
                                    credits: D,
                                    golds: h,
                                    crystals: B,
                                    freexp: v,
                                    isWalletAvailable: x,
                                }),
                                a().createElement('div', { className: se }),
                            ),
                        M =
                            i &&
                            a().createElement(
                                b.i,
                                { body: d || '', isEnabled: Boolean(d) && g && i.disabled },
                                a().createElement(
                                    'div',
                                    { id: `${e}-accept`, className: me },
                                    a().createElement(p.u5, Ee({ onClick: S, mixClass: de }, i), o),
                                ),
                            ),
                        O =
                            s &&
                            a().createElement(
                                'div',
                                { id: `${e}-cancel`, className: me },
                                a().createElement(p.u5, Ee({ onClick: k, mixClass: de }, s), c),
                            );
                    return a().createElement(
                        'div',
                        { className: te },
                        a().createElement(
                            'div',
                            { className: ne },
                            N,
                            a().createElement(
                                'div',
                                { id: `${e}-close-button`, className: ae },
                                a().createElement(C, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: P,
                                }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: A()(re, ie) },
                            a().createElement('div', { className: oe }, u),
                            a().createElement('div', { className: I }),
                            t && a().createElement('div', { className: ce }, t),
                            a().createElement('div', { className: _e }, M, O),
                            a().createElement('div', { id: 'dialog-template-footer' }),
                        ),
                    );
                };
                var pe = t(2106);
                const ge = 'confirm-app',
                    Fe = { size: pe.q.medium },
                    De = { size: pe.q.medium, type: pe.L.secondary };
                let he;
                !(function (e) {
                    (e.Payment = 'payment'), (e.Setup = 'setup'), (e.Modification = 'modification');
                })(he || (he = {}));
                const Ce = (0, n.createContext)(null),
                    be = () => {
                        const e = (0, n.useContext)(Ce);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var Be = t(3215),
                    ve = t(4598);
                function fe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                var ye = t(3946);
                const we = (0, Be.q)()(({ observableModel: e }) => {
                        const u = ((e) => {
                                const u = {
                                        root: e.object(),
                                        exchangePanel: e.object('exchangePanel'),
                                        fromItem: e.object('exchangePanel.fromItem'),
                                        toItem: e.object('exchangePanel.toItem'),
                                        exchangeRate: e.object('exchangePanel.exchangeRate'),
                                        discount: e.object('exchangePanel.exchangeRate.discount'),
                                        discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                                        lacksMoney: e.object('lacksMoney'),
                                        mainContent: e.object('mainContent'),
                                        confirmedItems: e.array('mainContent.confirmedItems'),
                                        lacksItem: e.array('mainContent.lacksItem'),
                                        needRepairContent: e.object('needRepairContent'),
                                    },
                                    t = (0, ye.Om)(
                                        (e) => {
                                            const t = fe(u.confirmedItems.get(), e);
                                            if (!t) throw Error(`No confirmed item found with index: ${e}`);
                                            return Object.assign({}, t);
                                        },
                                        { equals: ve.jv },
                                    ),
                                    n = (0, ye.Om)(() => u.confirmedItems.get().length),
                                    a = (0, ye.Om)(() => u.lacksItem.get().length),
                                    r = (0, ye.Om)(
                                        () => {
                                            const e = t(0);
                                            return (e && fe(e.demountPrice.price, 0)) || null;
                                        },
                                        { equals: ve.jv },
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
                    }, ve.ZT),
                    xe = we[0],
                    Se = we[1],
                    ke = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    },
                    Pe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Te = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Ie = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Ne = (e) =>
                        Ie
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = Te.length - 1; t >= 0; t--)
                                      for (; e >= Te[t]; ) (u += Pe[t]), (e -= Te[t]);
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
                    Me = (0, d.Pi)(({ index: e, itemsType: u }) => {
                        const t = be().model;
                        if (!('computes' in t)) return null;
                        const n = t.computes.confirmedItem(e);
                        if (!n || !n.imageSource) return null;
                        const r = n.highlightType,
                            i = n.level,
                            s = n.overlayType,
                            l = n.imageSource,
                            c = u === o;
                        return a().createElement(
                            'div',
                            { className: Re.base },
                            a().createElement('div', { className: A()(Re.highlight, Re[`highlight__${r}`]) }),
                            a().createElement('div', {
                                className: A()(Re.image, c && Re.image__postProgression),
                                style: { backgroundImage: `url(${l})` },
                            }),
                            i && c
                                ? a().createElement('div', { className: Re.postProgressionLevel }, Ne(i))
                                : Boolean(i) &&
                                      a().createElement('div', {
                                          style: {
                                              backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${i}`)})`,
                                          },
                                          className: Re.level,
                                      }),
                            a().createElement('div', { className: A()(Re.overlay, Re[`overlay__${s}`]) }),
                        );
                    }),
                    Oe = 'Items_base_b1',
                    Le = (0, d.Pi)(({ itemsType: e }) => {
                        const u = be().model;
                        return 'computes' in u
                            ? a().createElement(
                                  'div',
                                  { className: Oe },
                                  ke(u.computes.confirmedItemsLength(), (u) =>
                                      a().createElement(Me, { key: u, index: u, itemsType: e }),
                                  ),
                              )
                            : null;
                    });
                var We = t(7405);
                const He = 'FormatText_base_d0',
                    $e = ({ binding: e, text: u = '', classMix: t, alignment: r = f.left, formatWithBrackets: i }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && e ? y(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, i) =>
                                a().createElement(
                                    'div',
                                    { className: A()(He, t), key: `${u}-${i}` },
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
                    je = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Ue = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ze = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ze = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let o = je.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                n = Ue.exec(t),
                                c = Ze.exec(t),
                                _ = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                (s = s.replace(t, `%(${o})`)),
                                    (i[o] = Ve[e]
                                        ? a().createElement(
                                              'span',
                                              { className: Ve[e] },
                                              a().createElement($e, { text: _, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement($e, { text: _, binding: u }),
                                          ));
                            }
                            o = je.exec(e);
                        }
                        return a().createElement($e, { text: s, classMix: t, binding: i });
                    }),
                    qe = 'Names_base_96',
                    Ge = (0, d.Pi)(() => {
                        const e = be().model;
                        if (!('computes' in e)) return null;
                        const u = e.computes.confirmedItemsLength();
                        return u <= 1
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: qe },
                                  ke(u, (t) => {
                                      const r = u - 2,
                                          i = e.computes.confirmedItem(t);
                                      if (!i) return null;
                                      let o;
                                      return (
                                          (o =
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
                                                  w(i.name),
                                                  R.strings.common.common.close_quotes(),
                                              ),
                                              o,
                                          )
                                      );
                                  }),
                              );
                    }),
                    Ke = 'DemountKit_base_af',
                    Xe = 'DemountKit_icon_c4',
                    Ye = 'DemountKit_value_79',
                    Je = ({ value: e }) =>
                        a().createElement(
                            'span',
                            { className: Ke },
                            a().createElement('span', { className: Ye }, e),
                            a().createElement('span', { className: Xe }),
                        ),
                    Qe = 'Description_base_08',
                    eu = 'Description_warning_cf',
                    uu = 'Description_doesNotWork_99',
                    tu = 'Description_demountPairModification_6f',
                    nu = 'Description_warningIcon_98',
                    au = R.strings.tank_setup.dialogs.confirm,
                    ru = (0, d.Pi)(() => {
                        const e = Se().model,
                            u = e.lacksItem.get(),
                            t = e.computes.lacksItemsLength(),
                            r = e.mainContent.get(),
                            i = r.demountPairModification,
                            o = r.itemsType,
                            s = e.computes.confirmedItem(0),
                            l = e.computes.confirmedItemsLength() > 1,
                            c = 'optionalDevice' === o,
                            _ = 'battleBooster' === o && t > 0,
                            m = e.computes.confirmedPrice(),
                            d = t - 1;
                        if (!(l || c || _ || i)) return null;
                        if (!s) return null;
                        const E = au.warning().replace(`%(devices)s${R.strings.common.common.dot()}`, '%(devices)s'),
                            A = l ? 'items' : s.optItemDescKey;
                        return a().createElement(
                            'div',
                            { className: Qe },
                            a().createElement(Ge, null),
                            c &&
                                a().createElement(ze, {
                                    text: String(au.demount.$dyn(A)),
                                    binding:
                                        c && m
                                            ? {
                                                  demountKit: a().createElement(Je, { value: 1 }),
                                                  price: a().createElement(We.F, {
                                                      size: G.et.small,
                                                      type: m.name,
                                                      value: m.value,
                                                  }),
                                              }
                                            : {},
                                }),
                            _ &&
                                a().createElement($e, {
                                    text: E,
                                    binding: _
                                        ? {
                                              devices:
                                                  ((p = u),
                                                  (g = (e, u) =>
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
                                                  Array.isArray(p)
                                                      ? p.map(g)
                                                      : p.map((e, u, t) => g(null == e ? void 0 : e.value, u, t))),
                                              doesNotWork: a().createElement(
                                                  'span',
                                                  { className: uu },
                                                  au.doesNotWork(),
                                              ),
                                          }
                                        : {},
                                    classMix: eu,
                                }),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: tu },
                                    a().createElement('div', { className: nu }),
                                    au.item.demountPairModification(),
                                ),
                        );
                        var p, g;
                    }),
                    iu = 'DialogContent_base_09',
                    ou = 'DialogContent_list_8e',
                    su = 'DialogContent_description_c2',
                    lu = 'DialogContent_title_8f',
                    cu = 'DialogContent_vehicleContainer_1c',
                    _u = 'DialogContent_vehicleIcon_e8',
                    mu = R.strings.common.common,
                    du = (0, d.Pi)(({ name: e, title: u, items: t, description: n }) => {
                        const r = Se().model.root.get().vehicleType,
                            i = r && r.replace(/-/g, '_');
                        return a().createElement(
                            'div',
                            { className: iu },
                            t && a().createElement('div', { className: ou }, t),
                            a().createElement($e, {
                                text: u,
                                binding: {
                                    vehicle:
                                        i &&
                                        a().createElement(
                                            'div',
                                            { className: cu },
                                            a().createElement('div', {
                                                className: _u,
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
                                    name: `${mu.open_quotes()}${w(e || '')}${mu.close_quotes()}`,
                                },
                                classMix: lu,
                                formatWithBrackets: !0,
                            }),
                            n && a().createElement('div', { className: su }, n),
                        );
                    });
                var Eu = t(8175),
                    Au = t(3755);
                const pu = 'DialogFooter_base_52',
                    gu = () =>
                        a().createElement(
                            'div',
                            { className: pu },
                            a().createElement(Au.w, { panelType: Eu.D0.Column, parentModelPath: 'model' }),
                        ),
                    Fu = R.strings.tank_setup.dialogs.confirm,
                    Du = (0, d.Pi)(({ isPaymentDeal: e, actionType: u }) => {
                        var t;
                        const n = Se().model,
                            r = n.computes.confirmedItemsLength() > 1,
                            i = n.mainContent.get().itemsType,
                            o = n.root.get(),
                            s = o.withRollback,
                            l = o.applyForAllVehiclesByType,
                            c = r ? Fu.title.itemsForAllVehiclesByType : Fu.title.itemForAllVehiclesByType,
                            _ = r ? Fu.title.items : Fu.title.item,
                            m = r ? Fu.items : Fu.item,
                            d = l ? c : _,
                            E = n.dealPanel.get().isDisabled;
                        return a().createElement(Ae, {
                            parentId: ge,
                            buttonAccept: Object.assign({}, Fe, { disabled: E }),
                            buttonAcceptText: String(Fu.confirm.$dyn(u)),
                            buttonCancel: De,
                            buttonCancelText: s && e ? Fu.cancel.withRollback() : String(Fu.cancel.$dyn(u)),
                            content: a().createElement(du, {
                                name: null == (t = n.computes.confirmedItem(0)) ? void 0 : t.name,
                                title: y(String(d.$dyn(u)), { type: m.$dyn(i) }),
                                items: a().createElement(Le, { itemsType: i }),
                                description: a().createElement(ru, null),
                            }),
                            footer: 'battleAbility' !== i && a().createElement(gu, null),
                            showPayInfo: e,
                        });
                    }),
                    hu = 'default',
                    Cu = 'notRequired';
                var bu = t(9174);
                const Bu = ['children'];
                function vu() {
                    return (
                        (vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        vu.apply(this, arguments)
                    );
                }
                const fu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Bu);
                    return a().createElement(
                        K.u,
                        vu(
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
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const wu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(b.i, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(K.u, yu({}, u, { contentId: r }), n) : a().createElement(fu, u, n);
                };
                let xu, Su;
                !(function (e) {
                    (e.Limited = 'limited'), (e.Unlimited = 'unlimited');
                })(xu || (xu = {})),
                    (function (e) {
                        (e.Coefficient = 'coefficient'),
                            (e.Integer = 'integer'),
                            (e.Temporary = 'temporary'),
                            (e.Limited = 'limited');
                    })(Su || (Su = {}));
                const ku = 'ExchangeRate_base_76',
                    Pu = 'ExchangeRate_baseHidden_12',
                    Tu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    Iu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Nu = ({
                        fromItem: e,
                        toItem: u,
                        defaultRate: t,
                        discount: r,
                        amountOfPersonalDiscounts: i,
                        discountRate: o,
                    }) => {
                        const s = r.isDiscountAvailable && 'limited' === r.discountType && r.amountOfDiscount < e.value;
                        let l;
                        r && r.isDiscountAvailable && (l = r.discountType === xu.Limited ? (i <= 5 ? Iu : void 0) : Tu);
                        const c = (0, n.useMemo)(
                            () => ({
                                gold: a().createElement(We.F, {
                                    key: e.name,
                                    size: G.et.small,
                                    type: G.V2.gold,
                                    value: 1,
                                }),
                                credits: a().createElement(We.F, {
                                    key: u.name,
                                    size: G.et.small,
                                    type: G.V2.credits,
                                    value: r.isDiscountAvailable ? o.resourceRateValue : t,
                                    isDiscount: r.isDiscountAvailable,
                                }),
                            }),
                            [t, o.resourceRateValue, r.isDiscountAvailable, e.name, u.name],
                        );
                        return a().createElement(
                            'div',
                            { className: A()(ku, s && Pu) },
                            a().createElement(
                                wu,
                                { tooltipArgs: l },
                                a().createElement($e, {
                                    text: R.strings.tank_setup.dialogs.goldExchange.default.status(),
                                    binding: c,
                                }),
                            ),
                        );
                    },
                    Ru = (0, Be.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                        }),
                        ve.ZT,
                    ),
                    Mu = Ru[0],
                    Ou = Ru[1],
                    Lu = 'Alert_base_42',
                    Wu = 'Alert_highlight_f2',
                    Hu = 'Alert_highlight__warning_13',
                    $u = ({ warning: e }) => {
                        const u = A()(Wu, e && Hu);
                        return a().createElement('div', { className: Lu }, a().createElement('div', { className: u }));
                    },
                    Vu = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ju, Uu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(ju || (ju = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Uu || (Uu = {}));
                const Zu = ({ size: e = ju.Default }) => {
                        const u = A()(Vu.background, Vu[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    zu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    qu = ({ size: e }) => {
                        const u = A()(zu.base, zu[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Gu = {
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
                    Ku = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = A()(
                                    Gu.base,
                                    Gu[`base__${e}`],
                                    t && Gu.base__disabled,
                                    r && Gu.base__finished,
                                    i && Gu.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                a().createElement('div', { className: Gu.pattern }),
                                a().createElement('div', { className: Gu.gradient }),
                                s && a().createElement(qu, { size: e }),
                            );
                        },
                    ),
                    Xu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(Ku, { size: e, disabled: r, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    Yu = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Ju, Qu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Ju || (Ju = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Qu || (Qu = {}));
                const et = 'ProgressBarDeltaSimple_base_6c',
                    ut = 'ProgressBarDeltaSimple_delta_99',
                    tt = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                _ = (0, n.useState)(Qu.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === Qu.In,
                                A = m === Qu.End,
                                p = m === Qu.Idle,
                                g = (0, n.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (p && !t) {
                                    return Yu(() => {
                                        g(Qu.In);
                                    }, u);
                                }
                            }, [g, t, p, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Yu(() => {
                                            s && s(), g(Qu.End);
                                        }, e + u);
                                    }
                                }, [g, E, s, u, e]);
                            const F = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: et, style: h },
                                      a().createElement(
                                          'div',
                                          { style: p ? F : D, className: ut },
                                          a().createElement(qu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    nt = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Ku, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    a().createElement(tt, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    at = 'ProgressBarDeltaGrow_base_7e',
                    rt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    it = 'ProgressBarDeltaGrow_glow_68',
                    ot = (e) => (e ? { left: 0 } : { right: 0 }),
                    st = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    lt = (e) => ({ transitionDuration: `${e}ms` }),
                    ct = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < r,
                                m = (0, n.useState)(Ju.Idle),
                                d = m[0],
                                E = m[1],
                                p = d === Ju.End,
                                g = d === Ju.Idle,
                                F = d === Ju.Grow,
                                D = d === Ju.Shrink,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        Yu(() => {
                                            h(e);
                                        }, u),
                                    [h],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? C(Ju.Grow, u)
                                        : F
                                          ? C(Ju.Shrink, e)
                                          : D
                                            ? C(Ju.End, e)
                                            : void (p && s && s());
                            }, [C, t, p, F, g, D, s, u, e]);
                            const b = (0, n.useMemo)(() => Object.assign({ width: '100%' }, lt(e), ot(_)), [_, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, lt(e), ot(_)), [_, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, st(_, r), lt(e)), [r, _, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, st(_, r), lt(e)),
                                    [r, _, o, e],
                                );
                            if (p) return null;
                            const y = A()(at, c, _ && 0 === o && rt);
                            return a().createElement(
                                'div',
                                { style: g ? v : f, className: y },
                                a().createElement(
                                    'div',
                                    { style: D ? B : b, className: it },
                                    a().createElement(qu, { size: i }),
                                ),
                            );
                        },
                    ),
                    _t = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                m = (0, n.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === Ju.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Ku, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? g : p,
                                }),
                                t >= 0 &&
                                    a().createElement(ct, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    mt = ['onComplete', 'onEndAnimation'];
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const Et = (0, n.memo)((e) => {
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
                            })(e, mt);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            s = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && s(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Uu.Simple:
                                return a().createElement(nt, dt({}, r, { onEndAnimation: l, isComplete: o }));
                            case Uu.Growing:
                                return a().createElement(_t, dt({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    At = ['onEndAnimation'];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const gt = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, At);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(Et, pt({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Dt = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(Xu, {
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
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? a().createElement(gt, c)
                                : a().createElement(Et, Ft({ key: `${r}-${u}` }, c));
                        },
                    ),
                    ht = (e) => ({
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
                    Ct = (e, u, t) => (t < e ? e : t > u ? u : t),
                    bt = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Ct(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Bt = {
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
                    vt = {
                        freezed: !1,
                        withStack: !1,
                        type: Uu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ft = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Bt,
                            size: t = ju.Default,
                            animationSettings: r = vt,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Ct(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: bt(n, u, t) };
                                }, [t, u, e]))(s, e, l);
                            return a().createElement(
                                'div',
                                { className: A()(Vu.base, Vu[`base__${t}`]), style: ht(u) },
                                !o && a().createElement(Zu, { size: t }),
                                a().createElement(Dt, {
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
                    yt = 'Durability_base_8c',
                    wt = 'Durability_label_02',
                    xt = 'Durability_bar_73',
                    St = 'Durability_percentage_a7',
                    kt = R.strings.tank_setup.dialogs.needRepair,
                    Pt = ({ value: e }) =>
                        a().createElement(
                            'div',
                            { className: yt },
                            a().createElement('div', { className: wt }, kt.durability()),
                            a().createElement(
                                'div',
                                { className: xt },
                                a().createElement(ft, { size: ju.Medium, value: e }),
                            ),
                            a().createElement($e, {
                                text: kt.durabilityPercentage(),
                                binding: { value: e },
                                classMix: St,
                            }),
                        ),
                    Tt = 'RepairHeaderApp_base_b0',
                    It = 'RepairHeaderApp_durability_69',
                    Nt = (0, d.Pi)(() => {
                        const e = Ou().model,
                            u = e.needRepairContent.get().repairPercentage,
                            t = e.root.get().bottomContentType;
                        return a().createElement(
                            'div',
                            { className: Tt },
                            a().createElement($u, { warning: t === s }),
                            t === s && a().createElement('div', { className: It }, a().createElement(Pt, { value: u })),
                        );
                    }),
                    Rt = () => a().createElement(Mu, null, a().createElement(Nt, null)),
                    Mt = {
                        base: 'ExchangeDialogContent_base_ef',
                        description: 'ExchangeDialogContent_description_6e',
                        status: 'ExchangeDialogContent_status_33',
                        status__notPossible: 'ExchangeDialogContent_status__notPossible_e1',
                        status__notRequired: 'ExchangeDialogContent_status__notRequired_8a',
                        items: 'ExchangeDialogContent_items_72',
                        title: 'ExchangeDialogContent_title_9f',
                        titleCurrency: 'ExchangeDialogContent_titleCurrency_88',
                    },
                    Ot = R.strings.tank_setup.dialogs.goldExchange.notRequired.action,
                    Lt = R.strings.common.common,
                    Wt = (e) => (e === he.Modification ? Ot.modification() : Ot.buy()),
                    Ht = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            exchangeState: n,
                            items: r,
                            actionType: i,
                            description: o,
                            exchangeType: s = qn.Basic,
                        }) => {
                            const l = be().model,
                                c = l.fromItem.get(),
                                _ = l.lacksMoney.get(),
                                m = l.toItem.get(),
                                d = l.exchangeRate.get(),
                                E =
                                    s === qn.Upgrade
                                        ? R.strings.tank_setup.dialogs.exchangeToUpgrade
                                        : R.strings.tank_setup.dialogs.goldExchange,
                                p = y(E.notRequired.title(), { action: Wt(i) });
                            return a().createElement(
                                'div',
                                { className: Mt.base },
                                s === qn.Repair && a().createElement(Rt, null),
                                r && a().createElement('div', { className: Mt.items }, r),
                                a().createElement($e, {
                                    text: n === Cu ? p : e,
                                    binding: Object.assign(
                                        {
                                            name: t && `${Lt.open_quotes()}${w(t)}${Lt.close_quotes()}`,
                                            credits: a().createElement(
                                                'div',
                                                { className: Mt.titleCurrency },
                                                a().createElement(We.F, {
                                                    key: _.name,
                                                    size: G.et.large,
                                                    type: G.V2.credits,
                                                    value: _.value,
                                                }),
                                            ),
                                        },
                                        u,
                                    ),
                                    formatWithBrackets: Boolean(Object.keys(u || {}).length),
                                    classMix: Mt.title,
                                }),
                                o && a().createElement('div', { className: Mt.description }, o),
                                a().createElement(
                                    'div',
                                    { className: A()(Mt.status, Mt[`status__${n}`]) },
                                    n === hu &&
                                        a().createElement(Nu, {
                                            fromItem: c,
                                            toItem: m,
                                            defaultRate: d.default,
                                            discount: l.discount.get(),
                                            discountRate: l.discountRate.get(),
                                            amountOfPersonalDiscounts: d.amountOfPersonalDiscounts,
                                        }),
                                    'notPossible' === n &&
                                        a().createElement($e, {
                                            text: E.notPossible.status(),
                                            binding: {
                                                gold: a().createElement(We.F, {
                                                    type: G.V2.gold,
                                                    size: G.et.small,
                                                    value: c.value,
                                                }),
                                            },
                                        }),
                                    n === Cu && E.notRequired.status(),
                                ),
                            );
                        },
                    ),
                    $t = (e) => {
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
                    Vt = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    jt = (e) => e instanceof HTMLElement,
                    Ut = (e) => {
                        e.focus();
                    },
                    Zt = (e) => {
                        if (e.keyCode === m.n.TAB) {
                            const u = Array.from(document.body.querySelectorAll('input')).filter(jt);
                            if (!u.length) return;
                            e.preventDefault(), l.O.view.setEventHandled();
                            const t = document.activeElement,
                                n = u[0],
                                a = u[u.length - 1];
                            if (e.shiftKey && t === n) Ut(a);
                            else if (e.shiftKey || t !== a) {
                                const n = u.findIndex((e) => e === t),
                                    a = u[n + (e.shiftKey ? -1 : 1)];
                                a && Ut(a);
                            } else Ut(n);
                        }
                    };
                function zt(e) {
                    const u = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: m.n.TAB,
                        keyCode: m.n.TAB,
                        shiftKey: e,
                    });
                    document.body.dispatchEvent(u);
                }
                function qt(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function _() {
                            (i = Date.now()), t.apply(l, s);
                        }
                        r ||
                            (n && !a && _(),
                            o(),
                            void 0 === n && c > e
                                ? _()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : _,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            o(), (r = !0);
                        }),
                        s
                    );
                }
                function Gt(e, u, t, a = !1) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? qt(e, u, !1) : qt(e, t, !1 !== u);
                            })(t, a, e),
                        u,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var Kt = t(2558),
                    Xt = t(8934);
                const Yt = (e, u = N.B3.INTEGRAL) => N.Z5.getNumberFormat(e, u);
                t(3368);
                let Jt;
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
                })(Jt || (Jt = {}));
                const Qt = {
                    base: 'NumericStepper_base_98',
                    base__small: 'NumericStepper_base__small_e3',
                    base__medium: 'NumericStepper_base__medium_7f',
                    base__large: 'NumericStepper_base__large_87',
                    base__isFocus: 'NumericStepper_base__isFocus_d0',
                    base__isDisabled: 'NumericStepper_base__isDisabled_06',
                    inputContainer: 'NumericStepper_inputContainer_87',
                    input: 'NumericStepper_input_ef',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_a3',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_28',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_2b',
                    input__disabled: 'NumericStepper_input__disabled_83',
                    input__credits: 'NumericStepper_input__credits_d6',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_57',
                    input__gold: 'NumericStepper_input__gold_21',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_1c',
                    input__xp: 'NumericStepper_input__xp_df',
                    input__freeXP: 'NumericStepper_input__freeXP_53',
                    input__crystal: 'NumericStepper_input__crystal_64',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_4a',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_29',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_52',
                    input__withCurrency: 'NumericStepper_input__withCurrency_81',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_4c',
                    'input__xp-large': 'NumericStepper_input__xp-large_5e',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_ee',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_05',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_ef',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_28',
                    input__error: 'NumericStepper_input__error_d8',
                    currency: 'NumericStepper_currency_31',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_1d',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_e1',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_fa',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_6d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_15',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_02',
                    currencyIcon: 'NumericStepper_currencyIcon_5a',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_05',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_ec',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_d4',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_52',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_77',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_c1',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_69',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_20',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_fa',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_5c',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_27',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_27',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_e9',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_20',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_8e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_b0',
                    buttonIncrement: 'NumericStepper_buttonIncrement_48',
                    buttonDecrement: 'NumericStepper_buttonDecrement_e6',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_a8',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_25',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_2e',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_b0',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_37',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_f9',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_6b',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a3',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_6e',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_cd',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_8b',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_a0',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_df',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_ac',
                };
                class en extends a().PureComponent {
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
                                        (this.input.current.focus(),
                                        this.setState({ isFocused: !0 }),
                                        this.setCursorPosition(
                                            this.formattedValue.length,
                                            this.formattedValue.length,
                                        )));
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
                                this.props.currencyType ? N.Z5.getNumberFormat(e, N.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e));
                                return this.props.onValidValue
                                    ? this.props.onValidValue(u)
                                    : Math.round(u / this.props.stepSize) * this.props.stepSize;
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
                                const u = e === m.n.BACKSPACE,
                                    t = e === m.n.DELETE,
                                    n = this.input.current,
                                    a = n.selectionStart || 0,
                                    r = n.selectionEnd || 0;
                                let i = n.value;
                                const o = Math.max(a, r),
                                    s = o;
                                t && (i = i.substring(0, o) + i.substring(o + 1, i.length)),
                                    u && 1 === a && 1 === i.length && (i = '0');
                                const l = Number(i.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    _ = this.props.currencyType ? N.Z5.getNumberFormat(c, N.B3.GOLD) : c.toString(),
                                    d = !isNaN(Number(i.replace(' ', '')));
                                n.value = _;
                                const E = new RegExp(/\d/g);
                                let A = 0;
                                for (let e = 0; e < s; e++) {
                                    const u = i[e] || '',
                                        t = _[A] || '';
                                    if (u.match(E) || u === t) {
                                        for (; u !== _[A] && A < _.length; ) A++;
                                        A++;
                                    }
                                }
                                '' === i ? (A = 1) : d || (A = i.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(A, A),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === m.n.BACKSPACE,
                                    t = e.keyCode === m.n.DELETE,
                                    n = e.target,
                                    a = n.selectionStart,
                                    r = n.selectionEnd,
                                    i = n.value,
                                    o = a !== r,
                                    s = new RegExp(/\D/),
                                    l = u && a ? a - 1 : a || 0;
                                if (o) return;
                                let c = l;
                                const _ = s.test(i[l]);
                                if (t && _) for (; s.test(i[c]) && c < i.length; ) c++;
                                if (u && _) for (; s.test(i[c]) && c > 0; ) c--;
                                if (c !== l || (u && _))
                                    return e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c);
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
                                        (e.keyCode in m.n &&
                                            e.keyCode !== m.n.BACKSPACE &&
                                            e.keyCode !== m.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case m.n.ARROW_UP:
                                        case m.n.NUM_PLUS:
                                        case m.n.PLUS:
                                            this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment();
                                            break;
                                        case m.n.ARROW_DOWN:
                                        case m.n.NUM_MINUS:
                                        case m.n.MINUS:
                                            this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement();
                                            break;
                                        case m.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case m.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case m.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                this.changeValue(this.props.maximum), this.setCursorPosition(0, e);
                                            }
                                            break;
                                        case m.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case m.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case m.n.BACKSPACE:
                                        case m.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case m.n.ARROW_UP:
                                        case m.n.NUM_PLUS:
                                        case m.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case m.n.ARROW_DOWN:
                                        case m.n.NUM_MINUS:
                                        case m.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Jt || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = this.props.onIncrement ? this.props.onIncrement() : this.props.stepSize,
                                    u = Math.min(this.getValidValue(this.state.value) + e, this.props.maximum);
                                this.changeValue(u);
                            }),
                            (this.decrement = () => {
                                const e = this.props.onDecrement ? this.props.onDecrement() : this.props.stepSize,
                                    u = Math.max(this.getValidValue(this.state.value) - e, this.props.minimum);
                                this.changeValue(u);
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
                                this.props.isDisabled || (0, g.G)('yes');
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
                        this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput());
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? N.Z5.getNumberFormat(this.state.value, N.B3.GOLD)
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
                            r = A()(
                                Qt.base,
                                Qt[`base__${t}`],
                                n && Qt[`base__withCurrency-${t}`],
                                u && Qt.base__isDisabled,
                                this.state.isFocused && Qt.base__isFocus,
                            ),
                            i = A()(
                                Qt.buttonIncrement,
                                Qt[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && Qt.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    Qt[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            o = A()(
                                Qt.buttonDecrement,
                                Qt[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && Qt.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    Qt[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            s = A()(
                                Qt.input,
                                u && Qt.input__disabled,
                                n && Qt.input__withCurrency,
                                n && Qt[`input__${n}-${t}`],
                                n && Qt[`input__${n}`],
                                !1 === this.props.isValid && Qt.input__error,
                                n && u && Qt[`input__${n}-disabled`],
                            ),
                            l = A()(Qt.currencyIcon, n && Qt[`currencyIcon__${n}-${t}`]),
                            c = A()(Qt.currency, n && Qt[`currency__${n}`], n && Qt[`currency__${n}-${t}`]);
                        return a().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((_ = this.props.width), _ ? { width: `${_}rem` } : {}),
                            },
                            a().createElement(
                                'div',
                                { className: Qt.inputContainer },
                                n &&
                                    a().createElement(
                                        'div',
                                        { className: c },
                                        a().createElement('span', { className: Qt.dummyValue }, this.formattedValue),
                                        a().createElement('span', { className: l }),
                                    ),
                                a().createElement('input', {
                                    ref: this.input,
                                    className: s,
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
                                { className: Qt.control },
                                a().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                a().createElement('div', {
                                    className: o,
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
                en.defaultProps = {
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
                const un = 'CurrencyStepper_base_8f',
                    tn = 'CurrencyStepper_label_9b',
                    nn = 'CurrencyStepper_limit_7c',
                    an = 'CurrencyStepper_limitIcon_bf',
                    rn = 'CurrencyStepper_limit__exceeded_5d',
                    on = 'CurrencyStepper_limit__right_08',
                    sn = 'CurrencyStepper_limitWrapper__enter_90',
                    ln = 'CurrencyStepper_limitWrapper__exit_15',
                    cn = 'CurrencyStepper_restriction_67',
                    _n = 'CurrencyStepper_restrictionIcon_6f',
                    mn = 'CurrencyStepper_restrictionIconGlow_02',
                    dn = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function En() {
                    return (
                        (En =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        En.apply(this, arguments)
                    );
                }
                const An = R.strings.personal_exchange_rates.common,
                    pn = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    gn = { enter: sn, exit: ln },
                    Fn = (e) => {
                        let u = e.label,
                            t = e.limit,
                            r = e.limitPosition,
                            i = e.onLimitClick,
                            o = e.onChange,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, dn);
                        const l = t && s.value > t,
                            c = (0, n.useState)(!1)[1],
                            _ = Gt(
                                (e) => {
                                    o(e), $t(() => c((e) => !e));
                                },
                                [o],
                                1e3,
                            );
                        return a().createElement(
                            'div',
                            { className: un },
                            u && a().createElement('div', { className: tn }, u),
                            a().createElement(en, En({ size: 'large', width: 210, onChange: _ }, s)),
                            t &&
                                !i &&
                                a().createElement(
                                    Kt.Z,
                                    { component: a().Fragment },
                                    a().createElement(
                                        Xt.Z,
                                        { key: String(l), timeout: 250, classNames: gn },
                                        a().createElement(
                                            wu,
                                            { tooltipArgs: pn, className: A()(nn, 'right' === r && on, l && rn) },
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                l
                                                    ? a().createElement($e, { text: An.limitExceeded() })
                                                    : a().createElement($e, {
                                                          text: An.limit(),
                                                          binding: { value: Yt(t) },
                                                      }),
                                                a().createElement('div', { className: an }),
                                            ),
                                        ),
                                    ),
                                ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: A()(nn, 'right' === r && on) },
                                    a().createElement(C, {
                                        caption: An.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: i,
                                        classNames: { base: cn, icon: _n, glow: mn },
                                    }),
                                ),
                        );
                    },
                    Dn = 'ExceededMessage_wrapper_0d',
                    hn = 'ExceededMessage_base_1b',
                    Cn = 'ExceededMessage_limitIcon_46',
                    bn = 'ExceededMessage_hidden_4b',
                    Bn = 'ExceededMessage_limitWrapper__enter_0a',
                    vn = 'ExceededMessage_limitWrapper__exit_bc',
                    fn = 'ExceededMessage_restriction_33',
                    yn = 'ExceededMessage_restrictionIcon_f1',
                    wn = 'ExceededMessage_restrictionIconGlow_04',
                    xn = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Sn = { enter: Bn, exit: vn },
                    kn = ({ className: e, exceeded: u, amountOfPersonalDiscounts: t, onClick: n }) =>
                        a().createElement(
                            Kt.Z,
                            { className: A()(e, Dn) },
                            a().createElement(
                                Xt.Z,
                                { key: String(`${u}${t > 5}`), timeout: 350, classNames: Sn },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    u
                                        ? t > 5
                                            ? a().createElement(
                                                  'div',
                                                  { className: A()(hn) },
                                                  a().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  a().createElement(C, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: fn, icon: yn, glow: wn },
                                                  }),
                                              )
                                            : a().createElement(
                                                  wu,
                                                  { tooltipArgs: xn, className: A()(hn) },
                                                  a().createElement(
                                                      a().Fragment,
                                                      null,
                                                      a().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      a().createElement('div', { className: Cn }),
                                                  ),
                                              )
                                        : a().createElement(
                                              'div',
                                              { className: A()(hn, bn) },
                                              a().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        ),
                    Pn = 'ExchangePanel_base_bd',
                    Tn = 'ExchangePanel_arrow_62',
                    In = 'ExchangePanel_arrow__small_30',
                    Nn = 'ExchangePanel_excluded_02',
                    Rn = (0, Be.q)()(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            function n() {
                                return ((e) => {
                                    if (e.isDiscountAvailable)
                                        return {
                                            format: e.showFormat,
                                            exchangeRate: e.exchangeRate,
                                            type: e.discountType,
                                            availableAmount: {
                                                gold: e.amountOfDiscount,
                                                resource:
                                                    (e.amountOfDiscount / e.exchangeRate.goldRateValue) *
                                                    e.exchangeRate.resourceRateValue,
                                            },
                                            endDate: new Date(1e3 * e.discountLifetime),
                                            percent: e.discountPercent,
                                        };
                                })(t('exchangePanel.exchangeRate.discount'));
                            }
                            const a = Object.assign(
                                {
                                    discount: bu.LO.box(n()),
                                    exchangeRate: e.object('exchangePanel.exchangeRate'),
                                    fromItem: e.object('exchangePanel.fromItem'),
                                    toItem: e.object('exchangePanel.toItem'),
                                },
                                e.primitives({ golds: 'goldBalance', credits: 'creditBalance' }),
                            );
                            u.subscribe(
                                (0, bu.aD)(() => a.discount.set(n())),
                                'exchangePanel.exchangeRate.discount',
                            );
                            const r = (0, ye.Om)(() => a.exchangeRate.get().maxGoldAmountForExchange),
                                i = (0, ye.Om)(() => {
                                    const e = a.discount.get();
                                    return (
                                        !(!e || 'limited' !== e.type) && e.availableAmount.gold < a.fromItem.get().value
                                    );
                                });
                            return Object.assign({}, a, { computes: { maximumGold: r, exceeded: i } });
                        },
                        ({ externalModel: e, model: u }) => ({
                            openAllDiscounts: e.createCallbackNoArgs(
                                'exchangePanel.exchangeRate.onOpenAllDiscountsWindow',
                            ),
                            setGold: e.createCallback(
                                (e) => ({ gold: Math.min(e, u.computes.maximumGold()) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                            setCredits: e.createCallback(
                                (e) => ({ currency: Math.min(e, u.exchangeRate.get().maxResourceAmountForExchange) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                        }),
                    ),
                    Mn = Rn[0],
                    On = Rn[1],
                    Ln = (0, d.Pi)(({ setGoldToChange: e, isSmall: u = !1 }) => {
                        Vt(
                            () => (
                                $t(() => {
                                    zt(!1),
                                        $t(() => {
                                            zt(!0);
                                        });
                                }),
                                document.body.addEventListener('keydown', Zt),
                                () => {
                                    document.body.removeEventListener('keydown', Zt);
                                }
                            ),
                        );
                        const t = (0, n.useState)(null),
                            i = t[0],
                            o = t[1],
                            s = On(),
                            l = s.model,
                            c = s.controls,
                            _ = l.fromItem.get().value,
                            m = l.computes.maximumGold(),
                            d = q(m),
                            E = 0 === m,
                            p = u ? 'small' : 'medium';
                        return (
                            a().useEffect(() => {
                                d && d !== m && c.setGold(_);
                            }, [m, _]),
                            a().useEffect(() => {
                                e(_);
                            }, [e, _]),
                            Vt(() => {
                                o(document.querySelector('#dialog-template-footer'));
                            }),
                            a().createElement(
                                'div',
                                { className: Pn },
                                a().createElement(Fn, {
                                    value: l.fromItem.get().value,
                                    maximum: m,
                                    currencyType: G.V2.gold,
                                    onChange: c.setGold,
                                    width: 170,
                                    size: p,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !1,
                                }),
                                a().createElement('div', { className: A()(Tn, u && In) }),
                                a().createElement(Fn, {
                                    value: l.toItem.get().value,
                                    maximum: l.exchangeRate.get().maxResourceAmountForExchange,
                                    currencyType: G.V2.credits,
                                    onChange: c.setCredits,
                                    width: 170,
                                    limitPosition: 'right',
                                    size: p,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !0,
                                }),
                                i &&
                                    (0, r.createPortal)(
                                        a().createElement(kn, {
                                            className: Nn,
                                            exceeded: l.computes.exceeded(),
                                            amountOfPersonalDiscounts: l.exchangeRate.get().amountOfPersonalDiscounts,
                                            onClick: c.openAllDiscounts,
                                        }),
                                        i,
                                    ),
                            )
                        );
                    });
                var Wn = t(5851),
                    Hn = t(2306);
                const $n = (0, Be.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                            dealPanel: e.object('dealPanel'),
                            exchangePanel: e.object('exchangePanel'),
                            lacksMoney: e.object('lacksMoney'),
                            fromItem: e.object('exchangePanel.fromItem'),
                            toItem: e.object('exchangePanel.toItem'),
                            exchangeRate: e.object('exchangePanel.exchangeRate'),
                            discount: e.object('exchangePanel.exchangeRate.discount'),
                            discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                        }),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback(
                                (e) => ({ value: e }),
                                'dealPanel.onAutoRenewalChanged',
                            ),
                        }),
                    ),
                    Vn = ($n[0], $n[1]),
                    jn = 'ExchangeDialogFooter_base_45',
                    Un = 'ExchangeDialogFooter_exchange_11',
                    Zn = 'ExchangeDialogFooter_renewal_e2',
                    zn = (0, d.Pi)(({ goldToChange: e, setGoldToChange: u, exchangeType: t = qn.Basic }) => {
                        const n = Vn();
                        return a().createElement(
                            'div',
                            { className: jn },
                            a().createElement(
                                'div',
                                { className: Un },
                                a().createElement(
                                    Mn,
                                    null,
                                    a().createElement(Ln, { goldToChange: e, setGoldToChange: u }),
                                ),
                            ),
                            t === qn.Repair &&
                                a().createElement(
                                    Hn.h.Provider,
                                    { value: n },
                                    a().createElement(
                                        'div',
                                        { className: Zn },
                                        a().createElement(Wn.Y, {
                                            renewType: Eu.my.Repair,
                                            label: R.strings.tank_setup.dialogs.needRepair.autoRepair(),
                                        }),
                                    ),
                                ),
                        );
                    });
                let qn;
                !(function (e) {
                    (e.Basic = 'basic'), (e.Repair = 'repair'), (e.Upgrade = 'upgrade');
                })(qn || (qn = {}));
                const Gn = R.strings.tank_setup.dialogs,
                    Kn = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            actionType: r,
                            withInfo: i = !0,
                            type: o = qn.Basic,
                            withRollback: s = !1,
                            disabledAcceptTooltipText: l = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        }) => {
                            const c = (0, n.useState)(0),
                                _ = c[0],
                                m = c[1],
                                d = be().model,
                                E = d.root.get().exchangeState,
                                A = d.lacksMoney.get(),
                                p = d.toItem.get(),
                                g = E === hu;
                            return (
                                (0, n.useLayoutEffect)(
                                    () =>
                                        (0, bu.EH)(() => {
                                            m(d.fromItem.get().value);
                                        }),
                                    [d],
                                ),
                                a().createElement(Ae, {
                                    parentId: 'exchange-dialog',
                                    content: a().createElement(Ht, {
                                        title: e,
                                        titleBinding: u,
                                        name: t,
                                        exchangeState: E,
                                        items: i && a().createElement(Le, null),
                                        actionType: r,
                                        description: i && a().createElement(Ge, null),
                                        exchangeType: o,
                                    }),
                                    footer:
                                        g &&
                                        a().createElement(zn, { goldToChange: _, setGoldToChange: m, exchangeType: o }),
                                    showPayInfo: !0,
                                    buttonAccept: Object.assign({}, Fe, {
                                        type: pe.L.main,
                                        disabled: !g || A.value > p.value,
                                    }),
                                    buttonCancel: De,
                                    buttonAcceptText:
                                        o === qn.Upgrade ? Gn.exchangeToUpgrade.confirm() : Gn.goldExchange.confirm(),
                                    buttonCancelText: s
                                        ? Gn.confirm.cancel.withRollback()
                                        : R.strings.dialogs.common.cancel(),
                                    disabledAcceptTooltipText: l,
                                    isShowTooltip: E !== Cu,
                                })
                            );
                        },
                    ),
                    Xn = R.strings.tank_setup.dialogs.goldExchange,
                    Yn = (0, d.Pi)(({ actionType: e, itemsType: u }) => {
                        const t = Se(),
                            n = t.model,
                            r = n.root.get().withRollback,
                            i = n.computes.confirmedItemsLength() > 1,
                            o = i ? Xn.items : Xn.item,
                            s = e === he.Modification ? Xn.action.modification() : Xn.action.buy();
                        return a().createElement(
                            Ce.Provider,
                            { value: t },
                            a().createElement(Kn, {
                                title: i ? Xn.items.title() : Xn.item.title(),
                                name: n.computes.confirmedItem(0).name,
                                titleBinding: { action: s, type: o.$dyn(u) },
                                actionType: e,
                                withRollback: r,
                            }),
                        );
                    }),
                    Jn = R.strings.tank_setup.dialogs.confirm,
                    Qn = (0, d.Pi)(() => {
                        const e = Se(),
                            u = e.model,
                            t = u.mainContent.get().itemsType,
                            n = u.root.get().bottomContentType,
                            r = u.price.get(),
                            i = u.dealPanel.get().isDisabled,
                            s = Boolean(r.length),
                            c = ((e, u) => (e === o ? he.Modification : u ? he.Payment : he.Setup))(t, s);
                        switch (
                            (_({
                                [m.n.ESCAPE]: () => {
                                    l.O.view.sendEvent.close();
                                },
                            }),
                            n)
                        ) {
                            case 'exchangePanel':
                                return a().createElement(Yn, { actionType: c, itemsType: t });
                            case 'saveSlotsContent':
                                return a().createElement(
                                    Ce.Provider,
                                    { value: e },
                                    a().createElement(Ae, {
                                        parentId: ge,
                                        buttonAccept: Object.assign({}, Fe, { disabled: i }),
                                        buttonAcceptText: Jn.confirm.changeSlots(),
                                        buttonCancel: De,
                                        buttonCancelText: Jn.cancel.changeSlots(),
                                        content: a().createElement(du, { title: String(Jn.title.changeSlots.$dyn(t)) }),
                                        showPayInfo: s,
                                    }),
                                );
                            default:
                                return a().createElement(
                                    Ce.Provider,
                                    { value: e },
                                    a().createElement(Du, { isPaymentDeal: s, actionType: c }),
                                );
                        }
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(xe, null, a().createElement(Qn, null)),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(4397));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
