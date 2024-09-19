(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                n.d(t, { L$: () => c.L, qE: () => c.q, u5: () => u });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7727),
                    o = n(6179),
                    s = n.n(o),
                    l = n(6880),
                    c = n(2106);
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: _,
                    mixClass: u,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: g,
                    onMouseMove: h,
                    onMouseDown: b,
                    onMouseUp: v,
                    onMouseLeave: p,
                    onClick: w,
                }) => {
                    const E = (0, o.useRef)(null),
                        f = (0, o.useState)(n),
                        y = f[0],
                        C = f[1],
                        x = (0, o.useState)(!1),
                        k = x[0],
                        O = x[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                y && null !== E.current && !E.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [y]),
                        (0, o.useEffect)(() => {
                            C(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: E,
                                className: r()(
                                    l.Z.base,
                                    l.Z[`base__${a}`],
                                    _ && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    y && l.Z.base__focus,
                                    k && l.Z.base__highlightActive,
                                    u,
                                ),
                                onMouseEnter: function (e) {
                                    _ || (null !== d && (0, i.G)(d), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    h && h(e);
                                },
                                onMouseUp: function (e) {
                                    _ || (v && v(e), O(!1));
                                },
                                onMouseDown: function (e) {
                                    _ ||
                                        (null !== m && (0, i.G)(m),
                                        b && b(e),
                                        n && (_ || (E.current && (E.current.focus(), C(!0)))),
                                        O(!0));
                                },
                                onMouseLeave: function (e) {
                                    _ || (p && p(e), O(!1));
                                },
                                onClick: function (e) {
                                    _ || (w && w(e));
                                },
                            },
                            a !== c.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.Z.back }),
                                    s().createElement('span', { className: l.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(l.Z.state, l.Z.state__default) },
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
                _.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const u = _;
            },
            2106: (e, t, n) => {
                let a, r;
                n.d(t, { L: () => a, q: () => r }),
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
                    })(r || (r = {}));
            },
            2262: (e, t, n) => {
                n.d(t, { XZ: () => m });
                var a = n(6179),
                    r = n.n(a),
                    i = n(6483),
                    o = n.n(i),
                    s = n(7727),
                    l = n(1641),
                    c = n(8844),
                    _ = n(4382);
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
                        i = void 0 !== n && n,
                        m = e.isDisabled,
                        g = void 0 !== m && m,
                        h = e.isAlert,
                        b = void 0 !== h && h,
                        v = e.size,
                        p = void 0 === v ? c.yB.medium : v,
                        w = e.type,
                        E = void 0 === w ? c.Rh.primary : w,
                        f = e.soundHover,
                        y = void 0 === f ? 'highlight' : f,
                        C = e.soundClick,
                        x = void 0 === C ? 'play' : C,
                        k = e.onMouseEnter,
                        O = e.onMouseLeave,
                        L = e.onMouseUp,
                        P = e.onMouseDown,
                        S = e.onClick,
                        T = e.onChange,
                        R = e.onFocus,
                        M = e.onBlur,
                        A = e.text,
                        N = e.contentStyles,
                        H = e.children,
                        Z = e.alignment,
                        D = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    const B = (0, a.useState)(!1),
                        I = B[0],
                        F = B[1],
                        W = (0, a.useState)(!1),
                        j = (W[0], W[1]),
                        q = (0, a.useCallback)(
                            (e) => {
                                g || (T && T(), S && S(e));
                            },
                            [g, T, S],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === l.t.LEFT;
                                g || (t && F(!0), t && P && P(e), x && (0, s.G)(x));
                            },
                            [g, P, x],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                g || (F(!1), L && L(e));
                            },
                            [g, L],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                g || (k && k(e), y && (0, s.G)(y));
                            },
                            [g, k, y],
                        ),
                        z = (0, a.useCallback)(
                            (e) => {
                                g || (F(!1), O && O(e));
                            },
                            [g, O],
                        ),
                        K = (0, a.useCallback)(
                            (e) => {
                                g || (j(!0), R && R(e));
                            },
                            [g, R],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                g || (j(!1), M && M(e));
                            },
                            [g, M],
                        ),
                        Y = r().createElement(
                            'div',
                            { className: _.Z.label },
                            r().createElement(
                                'div',
                                { className: o()(_.Z.labelContent, 's-labelContent'), style: N },
                                A || H,
                            ),
                        );
                    return r().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: o()(_.Z.base, _.Z[`base__${p}`], _.Z[`base__${E}`], {
                                    [_.Z.base__checked]: i,
                                    [_.Z.base__disabled]: g,
                                    [_.Z.base__mouseDown]: I,
                                    [_.Z.base__alert]: b,
                                    [_.Z.base__center]: Z === c.N3.Center,
                                    [_.Z.base__bottom]: Z === c.N3.Bottom,
                                }),
                                onClick: q,
                                onMouseEnter: U,
                                onMouseLeave: z,
                                onMouseDown: V,
                                onMouseUp: G,
                                onFocus: K,
                                onBlur: X,
                            },
                            D,
                        ),
                        r().createElement(
                            'div',
                            { className: _.Z.input },
                            r().createElement('div', { className: _.Z.alertOverlay }),
                            r().createElement('div', { className: _.Z.inputHoverOverlay }),
                            r().createElement('div', { className: _.Z.highlight }),
                        ),
                        r().createElement('div', { className: _.Z.checkmark }),
                        ((A || H) && Y) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                let a, r, i;
                n.d(t, { N3: () => i, Rh: () => r, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(i || (i = {}));
            },
            7405: (e, t, n) => {
                n.d(t, { F: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    i = n(2372),
                    o = n(6179),
                    s = n.n(o),
                    l = n(8460),
                    c = n(329);
                const _ = (0, o.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: a,
                        value: o,
                        discountValue: _,
                        showPlus: u,
                        isEnough: d = !0,
                        stockBackgroundName: m = c.we.Red,
                        className: g,
                        classNames: h,
                    }) =>
                        s().createElement(
                            'span',
                            { className: r()(l.Z.base, l.Z[`base__${n}`], g) },
                            s().createElement(
                                'span',
                                {
                                    className: r()(
                                        l.Z.value,
                                        l.Z[`value__${a}`],
                                        !d && l.Z.value__notEnough,
                                        null == h ? void 0 : h.value,
                                    ),
                                },
                                u && o > 0 && '+',
                                s().createElement(i.A, { value: o, format: a === c.V2.gold ? 'gold' : 'integral' }),
                            ),
                            s().createElement('span', {
                                className: r()(l.Z.icon, l.Z[`icon__${a}-${n}`], null == h ? void 0 : h.icon),
                            }),
                            e &&
                                s().createElement(
                                    'span',
                                    {
                                        className: r()(
                                            l.Z.stock,
                                            _ && l.Z.stock__indent,
                                            t && l.Z.stock__interactive,
                                            null == h ? void 0 : h.stock,
                                        ),
                                    },
                                    s().createElement('span', {
                                        className: l.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(_) && _,
                                ),
                        ),
                );
            },
            329: (e, t, n) => {
                let a, r, i;
                n.d(t, { V2: () => r, et: () => a, we: () => i }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(i || (i = {}));
            },
            2372: (e, t, n) => {
                n.d(t, { A: () => o });
                var a = n(6179),
                    r = n.n(a),
                    i = n(9916);
                const o = ({ format: e, value: t }) => {
                    const n = ((e, t = 'integral') => {
                        let n;
                        n = 'gold' === t ? i.B3.GOLD : i.B3.INTEGRAL;
                        return void 0 === e ? '' : i.Z5.getNumberFormat(e, n);
                    })(t, e);
                    return n ? r().createElement('span', null, n) : null;
                };
            },
            3495: (e, t, n) => {
                n.d(t, { Y: () => u });
                var a = n(3138),
                    r = n(6179),
                    i = n(1043),
                    o = n(5262);
                const s = a.O.client.getSize('rem'),
                    l = s.width,
                    c = s.height,
                    _ = Object.assign({ width: l, height: c }, (0, o.T)(l, c, i.j)),
                    u = (0, r.createContext)(_);
            },
            1039: (e, t, n) => {
                n(3138), n(6536), n(6179), n(3495), n(1043), n(5262);
            },
            6010: (e, t, n) => {
                var a = n(6179),
                    r = n(7382),
                    i = n(3495);
                const o = ['children'];
                const s = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    const s = (0, a.useContext)(i.Y),
                        l = s.extraLarge,
                        c = s.large,
                        _ = s.medium,
                        u = s.small,
                        d = s.extraSmall,
                        m = s.extraLargeWidth,
                        g = s.largeWidth,
                        h = s.mediumWidth,
                        b = s.smallWidth,
                        v = s.extraSmallWidth,
                        p = s.extraLargeHeight,
                        w = s.largeHeight,
                        E = s.mediumHeight,
                        f = s.smallHeight,
                        y = s.extraSmallHeight,
                        C = { extraLarge: p, large: w, medium: E, small: f, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && c) return t;
                        if (n.medium && _) return t;
                        if (n.small && u) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, C);
                        if (n.largeWidth && g) return (0, r.H)(t, n, C);
                        if (n.mediumWidth && h) return (0, r.H)(t, n, C);
                        if (n.smallWidth && b) return (0, r.H)(t, n, C);
                        if (n.extraSmallWidth && v) return (0, r.H)(t, n, C);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && w) return t;
                            if (n.mediumHeight && E) return t;
                            if (n.smallHeight && f) return t;
                            if (n.extraSmallHeight && y) return t;
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
                (0, a.memo)(s);
            },
            7382: (e, t, n) => {
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
                n(6010), n(1039), n(3495);
            },
            1043: (e, t, n) => {
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
                var a;
                function r(e, t, n) {
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
                        r = (function (e, t) {
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => r }),
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
            6373: (e, t, n) => {
                n.d(t, { i: () => c });
                var a = n(2056),
                    r = n(6179),
                    i = n.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let t = e.children,
                            n = e.body,
                            c = e.header,
                            _ = e.note,
                            u = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, o);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: c, note: _, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, n, c, _, d]);
                        return i().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((h = null == d ? void 0 : d.hasHtmlContent),
                                        h ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                m,
                            ),
                            t,
                        );
                        var h;
                    };
            },
            2056: (e, t, n) => {
                n.d(t, { u: () => c });
                var a = n(7902),
                    r = n(9916),
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
                const l = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    c = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            c = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            g = void 0 !== m && m,
                            h = e.ignoreMouseClick,
                            b = void 0 !== h && h,
                            v = e.decoratorId,
                            p = void 0 === v ? 0 : v,
                            w = e.isEnabled,
                            E = void 0 === w || w,
                            f = e.targetId,
                            y = void 0 === f ? 0 : f,
                            C = e.onShow,
                            x = e.onHide,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, o);
                        const O = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, i.useMemo)(() => y || (0, a.F)().resId, [y]),
                            P = (0, i.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (l(n, p, { isMouseEvent: !0, on: !0, arguments: s(r) }, L),
                                    C && C(),
                                    (O.current.isVisible = !0));
                            }, [n, p, r, L, C]),
                            S = (0, i.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        l(n, p, { on: !1 }, L),
                                        O.current.isVisible && x && x(),
                                        (O.current.isVisible = !1);
                                }
                            }, [n, p, L, x]),
                            T = (0, i.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = O.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === E && S();
                            }, [E, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return E
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((O.current.timeoutId = window.setTimeout(P, g ? 100 : 400)),
                                                      c && c(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && S(), null == u || u(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      k,
                                  ),
                              )
                            : t;
                        var R;
                    };
            },
            8246: (e, t, n) => {
                n.d(t, { U: () => s });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
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
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: n = o, context: i = 'model' } = {}) {
                    const s = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = s.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const a = n(t),
                            r = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const o = 'string' == typeof r ? `${i}.${r}` : i,
                                l = a.O.view.addModelObserver(o, t, !0);
                            return s.set(l, n), e && n(c(r)), l;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const n = c(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(s.keys()); !(e = n()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, n) => {
                n.d(t, { q: () => l });
                var a = n(4598),
                    r = n(9174),
                    i = n(6179),
                    o = n.n(i),
                    s = n(8246);
                const l = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: _, mocks: u }) {
                            const d = (0, i.useRef)([]),
                                m = (n, i, o) => {
                                    var l;
                                    const c = s.U(i),
                                        _ =
                                            'real' === n
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == o ? void 0 : o.getter) ? l : () => {},
                                                  }),
                                        u = (e) =>
                                            'mocks' === n ? (null == o ? void 0 : o.getter(e)) : _.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: u,
                                            externalModel: _,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            _.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            _.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = u(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                _.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            o = Object.entries(i),
                                                            s = o.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                _.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([t, n]) => {
                                                                            s[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        h = { mode: n, model: g, externalModel: _, cleanup: m };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && o ? o.controls(h) : t(h),
                                        externalModel: _,
                                        mode: n,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                h = (0, i.useState)(l),
                                b = h[0],
                                v = h[1],
                                p = (0, i.useState)(() => m(l, c, u)),
                                w = p[0],
                                E = p[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? E(m(b, c, u)) : (g.current = !0);
                                }, [u, b, c]),
                                (0, i.useEffect)(() => {
                                    v(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        w.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [w],
                                ),
                                o().createElement(n.Provider, { value: w }, _)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => _, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
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
                n.d(t, { O: () => i });
                var a = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => o });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
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
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => k,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => C,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => x,
                        getScale: () => b,
                        getSize: () => d,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => y,
                        isFocused: () => E,
                        pxToRem: () => v,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => L,
                    });
                var a = n(3722),
                    r = n(6112),
                    i = n(6538),
                    o = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function _(e, t, n) {
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
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function E() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function C() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const k = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
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
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                n.d(t, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
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
                n(6179);
            },
            5521: (e, t, n) => {
                let a, r;
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
                    })(r || (r = {}));
            },
            1641: (e, t, n) => {
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
            7727: (e, t, n) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { G: () => a });
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, r);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                n.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => v, Eu: () => p });
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
                const r = a;
                var i = n(1358);
                var o = n(8613);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = n(5521),
                    m = n(3138);
                const g = ['args'];
                function h(e, t, n, a, r, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (a, r) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            h(i, a, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, a, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
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
                    w = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    E = () => w(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var y = n(7572);
                const C = r.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: u,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => w(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                _ = l.y,
                                u = l.width,
                                d = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(_) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(d),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: b(g),
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
                            f(e, E);
                        },
                        handleViewEvent: w,
                        onBindingsReady: v,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < r.length; t++) n[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            1922: (e, t, n) => {
                n.d(t, { cJ: () => a });
                n(6483), n(7739), n(6179), n(1960);
                let a;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(a || (a = {}));
            },
            5310: (e, t, n) => {
                n.d(t, { f: () => u });
                var a = n(6483),
                    r = n.n(a),
                    i = n(9916),
                    o = n(6179),
                    s = n.n(o),
                    l = n(2558),
                    c = n(8934),
                    _ = n(8529);
                const u = ({ children: e, when: t, canAccept: n }) => {
                    const a = (0, o.useCallback)((e, t) => {
                            (0, i.Eu)().then(() => {
                                (e.className = ''), e.classList.add(_.Z.base), e.classList.add(t);
                            });
                        }, []),
                        u = (0, o.useCallback)(
                            (e) => {
                                a(e, _.Z.base__enter);
                            },
                            [a],
                        ),
                        d = (0, o.useCallback)(
                            (e) => {
                                a(e, _.Z.base__exit);
                            },
                            [a],
                        );
                    return t
                        ? s().createElement(
                              l.Z,
                              null,
                              s().createElement(
                                  c.Z,
                                  { in: n, timeout: 500, onEnter: u, onExit: d, key: `index-${n}` },
                                  s().createElement('div', { className: r()(_.Z.base, _.Z.base__withAnimation) }, e),
                              ),
                          )
                        : s().createElement('div', { className: _.Z.base }, e);
                };
            },
            8175: (e, t, n) => {
                n.d(t, { my: () => v, sF: () => E });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3403),
                    o = n(6179),
                    s = n.n(o),
                    l = n(1922),
                    c = n(3934),
                    _ = n(5310),
                    u = n(5851),
                    d = n(2306),
                    m = n(7198),
                    g = n(5178),
                    h = n(6826),
                    b = n(628);
                let v, p;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(v || (v = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(p || (p = {}));
                const w = R.strings.tank_setup.dealPanel,
                    E = (0, i.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: n = l.cJ.Medium,
                            panelType: a = p.Row,
                            priceLabel: i = w.toBePaid(),
                            autoRenewalLabel: v,
                            onAutoRenewalChanged: E,
                            onDealConfirmed: f,
                            onDealCancelled: y,
                        }) => {
                            const C = (0, g.t)(),
                                x = C.model,
                                k = (0, o.useRef)(null),
                                O = n === l.cJ.Tiny || n === l.cJ.Small,
                                L = a === p.Row,
                                P = Boolean(x.totalItemsInStorage.get()),
                                S = Boolean(x.price.get().length),
                                T = O && P && S;
                            return s().createElement(
                                d.h.Provider,
                                { value: C },
                                s().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            b.Z.base,
                                            n && b.Z[`base__${n}`],
                                            e && b.Z.base__renewal,
                                            !L && b.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        s().createElement(
                                            'div',
                                            { className: r()(b.Z.renewal, !L && b.Z.renewal__dialog) },
                                            s().createElement(u.Y, { renewType: e, onValueChanged: E, label: v }),
                                        ),
                                    s().createElement(
                                        _.f,
                                        { when: L, canAccept: x.canAccept.get() },
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            P &&
                                                s().createElement(
                                                    'div',
                                                    { className: r()(b.Z.storage, n && b.Z[`storage__${n}`]) },
                                                    !O &&
                                                        s().createElement(
                                                            'div',
                                                            { className: b.Z.from },
                                                            w.fromStorage(),
                                                        ),
                                                    s().createElement(c.K, {
                                                        valueFirst: !0,
                                                        itemsInStorage: x.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            T && s().createElement('div', { className: b.Z.plus }),
                                            S &&
                                                s().createElement(
                                                    'div',
                                                    { className: r()(b.Z.totalPrice, T && b.Z.totalPrice__mixed) },
                                                    s().createElement(h.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: i,
                                                        isHideMessage: O && L,
                                                    }),
                                                ),
                                            t &&
                                                x.canAccept.get() &&
                                                s().createElement(
                                                    'div',
                                                    { className: b.Z.control },
                                                    s().createElement(m.Z, {
                                                        isDisabled: x.isDisabled.get(),
                                                        canCancel: x.canCancel.get(),
                                                        onCancel: () => y && y(),
                                                        onConfirm: () => f && f(),
                                                        confirmButtonRef: k,
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
                n.d(t, { Y: () => _ });
                var a = n(2262),
                    r = n(6373),
                    i = n(3403),
                    o = n(6179),
                    s = n.n(o),
                    l = n(8175),
                    c = n(2306);
                const _ = (0, i.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: n = l.my.General,
                    }) => {
                        const i = (0, c.o)(),
                            _ = i.model,
                            u = i.controls,
                            d = _.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, o.useCallback)(() => {
                                u.changeAutoRenewal(!d), t && t(!d);
                            }, [u, d, t]),
                            g = (0, o.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(n),
                                    a = n === l.my.General ? '' : e.body.$dyn(n);
                                return { header: String(t || e.header.general()), body: a ? String(a) : void 0 };
                            }, [n]);
                        return s().createElement(
                            r.i,
                            g,
                            s().createElement(a.XZ, {
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
                n.d(t, { p: () => s });
                var a = n(3457),
                    r = n(6179),
                    i = n.n(r),
                    o = n(2527);
                const s = i().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: r }) =>
                    i().createElement(
                        'div',
                        { ref: r, className: o.Z.base, id: 'deal-panel-confirm' },
                        i().createElement(
                            a.u5,
                            { size: a.qE.medium, disabled: t, onClick: () => n && n() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, n) => {
                n.d(t, { Z: () => _ });
                var a = n(3457),
                    r = n(6373),
                    i = n(7383),
                    o = n(6179),
                    s = n.n(o),
                    l = n(1957),
                    c = n(8099);
                const _ = s().memo(
                    ({
                        applyBtnString: e = i.YR,
                        isDisabled: t,
                        canCancel: n,
                        onCancel: o,
                        onConfirm: _,
                        confirmButtonRef: u,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = s().createElement(l.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: _,
                                confirmButtonRef: u,
                            });
                        return s().createElement(
                            'div',
                            { className: c.Z.base },
                            t
                                ? s().createElement(
                                      r.i,
                                      { body: d.tooltip.notEnough() },
                                      s().createElement('div', null, m),
                                  )
                                : m,
                            s().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                s().createElement(
                                    a.u5,
                                    {
                                        size: a.qE.medium,
                                        type: a.L$.secondary,
                                        mixClass: c.Z.button,
                                        disabled: !n,
                                        onClick: o,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, n) => {
                var a = n(3403),
                    r = n(6179),
                    i = n.n(r),
                    o = n(8175),
                    s = n(5178);
                const l = ['parentModelPath'];
                (0, a.Pi)((e) => {
                    let t = e.parentModelPath,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    const a = `${t}.dealPanel`;
                    return i().createElement(s.k, { options: { context: a } }, i().createElement(o.sF, n));
                });
            },
            6826: (e, t, n) => {
                n.d(t, { M: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    i = n(6179),
                    o = n.n(i),
                    s = n(8401),
                    l = n(5178),
                    c = n(1523);
                const _ = ({ parentId: e, isHideMessage: t, priceLabel: n }) => {
                    const a = (0, l.t)().model;
                    return o().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        o().createElement('div', { className: r()(c.Z.message, t && c.Z.message__hidden) }, n),
                        o().createElement(s.t, {
                            ignoreDiscount: !0,
                            bigSize: !0,
                            price: a.price.get(),
                            defPrice: a.defPrice.get(),
                            discount: a.discount.get(),
                            priceSeparator: o().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, n) => {
                n.d(t, { h: () => r, o: () => i });
                var a = n(6179);
                const r = (0, a.createContext)(null),
                    i = () => {
                        const e = (0, a.useContext)(r);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, n) => {
                n.d(t, { k: () => r, t: () => i });
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
                    r = a[0],
                    i = a[1];
            },
            8401: (e, t, n) => {
                n.d(t, { t: () => d });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7405),
                    o = n(329),
                    s = n(6179),
                    l = n.n(s);
                const c = 'Price_base_61',
                    _ = 'Price_price_1b',
                    u = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: a = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const g = !m && Boolean(t.length);
                        return l().createElement(
                            'div',
                            { className: c },
                            e.map(
                                ({ value: e }, t) =>
                                    (a || Boolean(e.value)) &&
                                    l().createElement(
                                        s.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        l().createElement(
                                            'div',
                                            { className: r()(_, g && u) },
                                            l().createElement(i.F, {
                                                key: t,
                                                isDiscount: g,
                                                size: d ? o.et.big : o.et.small,
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
            3934: (e, t, n) => {
                n.d(t, { K: () => d });
                var a = n(6179),
                    r = n.n(a),
                    i = n(6483),
                    o = n.n(i);
                const s = 'Storage_base_53',
                    l = 'Storage_base__reversed_8f',
                    c = 'Storage_icon_6a',
                    _ = 'Storage_count_7a',
                    u = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = o()(s, e && l),
                            a = o()(_, 0 === t && u);
                        return r().createElement(
                            'div',
                            { className: n },
                            r().createElement('div', { className: c }),
                            r().createElement('div', { className: a }, t),
                        );
                    };
            },
            7383: (e, t, n) => {
                n.d(t, { YR: () => a });
                const a = 'apply';
            },
            6880: (e, t, n) => {
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
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
            },
            4382: (e, t, n) => {
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
            1960: () => {},
            8529: (e, t, n) => {
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
                n.d(t, { Z: () => a });
                const a = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, n) => {
                n.d(t, { Z: () => a });
                const a = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, n) => {
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
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
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
                    var a,
                        r,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (r = i[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(3755));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
