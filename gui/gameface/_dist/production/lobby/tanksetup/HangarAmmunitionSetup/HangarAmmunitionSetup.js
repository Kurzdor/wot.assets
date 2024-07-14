(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7727),
                    r = n(6179),
                    o = n.n(r),
                    u = n(6880),
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
                    onMouseDown: E,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const v = (0, r.useRef)(null),
                        C = (0, r.useState)(n),
                        A = C[0],
                        D = C[1],
                        S = (0, r.useState)(!1),
                        F = S[0],
                        B = S[1],
                        y = (0, r.useState)(!1),
                        w = y[0],
                        k = y[1],
                        T = (0, r.useCallback)(() => {
                            c || (v.current && (v.current.focus(), D(!0)));
                        }, [c]),
                        x = (0, r.useCallback)(
                            (e) => {
                                A && null !== v.current && !v.current.contains(e.target) && D(!1);
                            },
                            [A],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                c || (null !== d && (0, i.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                c || (g && g(e), B(!1));
                            },
                            [c, g],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                c || (null !== m && (0, i.G)(m), E && E(e), n && T(), B(!0));
                            },
                            [c, m, E, T, n],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                c || (h && h(e), B(!1));
                            },
                            [c, h],
                        ),
                        H = s()(
                            u.Z.base,
                            u.Z[`base__${a}`],
                            {
                                [u.Z.base__disabled]: c,
                                [u.Z[`base__${t}`]]: t,
                                [u.Z.base__focus]: A,
                                [u.Z.base__highlightActive]: F,
                                [u.Z.base__firstHover]: w,
                            },
                            _,
                        ),
                        $ = s()(u.Z.state, u.Z.state__default);
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
                            D(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: I,
                            },
                            a !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: u.Z.back }),
                                    o().createElement('span', { className: u.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: $ },
                                o().createElement('span', { className: u.Z.stateDisabled }),
                                o().createElement('span', { className: u.Z.stateHighlightHover }),
                                o().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = (0, r.memo)(c);
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(s || (s = {}));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(7727),
                    u = n(1641),
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
                        i = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        E = void 0 !== b && b,
                        g = e.size,
                        h = void 0 === g ? l.yB.medium : g,
                        f = e.type,
                        v = void 0 === f ? l.Rh.primary : f,
                        C = e.soundHover,
                        A = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        S = void 0 === D ? 'play' : D,
                        F = e.onMouseEnter,
                        B = e.onMouseLeave,
                        y = e.onMouseUp,
                        w = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        x = e.onFocus,
                        I = e.onBlur,
                        N = e.text,
                        L = e.contentStyles,
                        R = e.children,
                        M = e.alignment,
                        O = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, _);
                    const P = (0, a.useState)(!1),
                        H = P[0],
                        $ = P[1],
                        W = (0, a.useState)(!1),
                        z = (W[0], W[1]),
                        G = (0, a.useCallback)(
                            (e) => {
                                p || (T && T(), k && k(e));
                            },
                            [p, T, k],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === u.t.LEFT;
                                p || (t && $(!0), t && w && w(e), S && (0, o.G)(S));
                            },
                            [p, w, S],
                        ),
                        Y = (0, a.useCallback)(
                            (e) => {
                                p || ($(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        j = (0, a.useCallback)(
                            (e) => {
                                p || (F && F(e), A && (0, o.G)(A));
                            },
                            [p, F, A],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                p || ($(!1), B && B(e));
                            },
                            [p, B],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                p || (z(!0), x && x(e));
                            },
                            [p, x],
                        ),
                        Z = (0, a.useCallback)(
                            (e) => {
                                p || (z(!1), I && I(e));
                            },
                            [p, I],
                        ),
                        q = s().createElement(
                            'div',
                            { className: c.Z.label },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.labelContent, 's-labelContent'), style: L },
                                N || R,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${v}`], {
                                    [c.Z.base__checked]: i,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: H,
                                    [c.Z.base__alert]: E,
                                    [c.Z.base__center]: M === l.N3.Center,
                                    [c.Z.base__bottom]: M === l.N3.Bottom,
                                }),
                                onClick: G,
                                onMouseEnter: j,
                                onMouseLeave: U,
                                onMouseDown: X,
                                onMouseUp: Y,
                                onFocus: V,
                                onBlur: Z,
                            },
                            O,
                        ),
                        s().createElement(
                            'div',
                            { className: c.Z.input },
                            s().createElement('div', { className: c.Z.alertOverlay }),
                            s().createElement('div', { className: c.Z.inputHoverOverlay }),
                            s().createElement('div', { className: c.Z.highlight }),
                        ),
                        s().createElement('div', { className: c.Z.checkmark }),
                        ((N || R) && q) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                'use strict';
                let a, s, i;
                n.d(t, { N3: () => i, Rh: () => s, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(i || (i = {}));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6179),
                    r = n.n(i),
                    o = n(329),
                    u = n(2372),
                    l = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: a,
                    isEnough: i,
                    value: c,
                    discountValue: _,
                    showPlus: d,
                    stockBackgroundName: m = o.we.Red,
                }) => {
                    const p = s()(l.Z.value, l.Z[`value__${a}`], !i && l.Z.value__notEnough),
                        b = s()(l.Z.icon, l.Z[`icon__${a}-${n}`]),
                        E = s()(l.Z.stock, _ && l.Z.stock__indent, t && l.Z.stock__interactive),
                        g = d && c > 0 && '+',
                        h = s()(l.Z.base, l.Z[`base__${n}`]);
                    return r().createElement(
                        'span',
                        { className: h },
                        r().createElement(
                            'span',
                            { className: p },
                            g,
                            r().createElement(u.A, { value: c, format: a === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        r().createElement('span', { className: b }),
                        e &&
                            r().createElement(
                                'span',
                                { className: E },
                                r().createElement('span', {
                                    className: l.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                }),
                                Boolean(_) && _,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const _ = r().memo(c);
            },
            329: (e, t, n) => {
                'use strict';
                let a, s, i;
                n.d(t, { V2: () => s, et: () => a, we: () => i }),
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
                    })(i || (i = {}));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => r });
                var a = n(6179),
                    s = n.n(a),
                    i = n(4179);
                class r extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = i.B3.GOLD;
                        else e = i.B3.INTEGRAL;
                        const t = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                r.defaultProps = { format: 'integral' };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    s = n(6179),
                    i = n(1043),
                    r = n(5262);
                const o = a.O.client.getSize('rem'),
                    u = o.width,
                    l = o.height,
                    c = Object.assign({ width: u, height: l }, (0, r.T)(u, l, i.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6536),
                    r = n(3495),
                    o = n(1043),
                    u = n(5262),
                    l = n(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(r.Y),
                        n = (0, a.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, a.useCallback)((e, t) => {
                            const n = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: a }, (0, u.T)(n, a, o.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(r.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    s = n(7382),
                    i = n(3495);
                const r = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, r);
                    const o = (0, a.useContext)(i.Y),
                        u = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        _ = o.small,
                        d = o.extraSmall,
                        m = o.extraLargeWidth,
                        p = o.largeWidth,
                        b = o.mediumWidth,
                        E = o.smallWidth,
                        g = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        f = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        D = { extraLarge: h, large: f, medium: v, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && u) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, s.H)(t, n, D);
                        if (n.largeWidth && p) return (0, s.H)(t, n, D);
                        if (n.mediumWidth && b) return (0, s.H)(t, n, D);
                        if (n.smallWidth && E) return (0, s.H)(t, n, D);
                        if (n.extraSmallWidth && g) return (0, s.H)(t, n, D);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
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
                (0, a.memo)(o);
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
                        i = Math.min(a, s);
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
            8380: (e) => {
                'use strict';
                function t(e) {
                    return getComputedStyle(e);
                }
                function n(e, t) {
                    for (var n in t) {
                        var a = t[n];
                        'number' == typeof a && (a += 'px'), (e.style[n] = a);
                    }
                    return e;
                }
                function a(e) {
                    var t = document.createElement('div');
                    return (t.className = e), t;
                }
                var s =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function i(e, t) {
                    if (!s) throw new Error('No element matching method supported');
                    return s.call(e, t);
                }
                function r(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function o(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return i(e, t);
                    });
                }
                var u = 'ps',
                    l = {
                        thumb: function (e) {
                            return 'ps__thumb-' + e;
                        },
                        rail: function (e) {
                            return 'ps__rail-' + e;
                        },
                        buttonStart: function (e) {
                            return 'ps__button-start-' + e;
                        },
                        track: function (e) {
                            return 'ps__track_' + e;
                        },
                        buttonEnd: function (e) {
                            return 'ps__button-end-' + e;
                        },
                        consuming: 'ps__child--consume',
                    },
                    c = {
                        focus: 'ps--focus',
                        clicking: 'ps--clicking',
                        active: function (e) {
                            return 'ps--active-' + e;
                        },
                        scrolling: function (e) {
                            return 'ps--scrolling-' + e;
                        },
                    },
                    _ = { x: null, y: null },
                    d = { immediately: !1 };
                function m(e, t, n) {
                    void 0 === n && (n = {});
                    var a = e.element.classList,
                        s = c.scrolling(t);
                    a.contains(s) ? clearTimeout(_[t]) : a.add(s);
                }
                function p(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(d, n).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (_[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var b = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    E = { isEmpty: { configurable: !0 } };
                (b.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (b.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (a) {
                            return !(!t || a === t) || (n.element.removeEventListener(e, a, !1), !1);
                        });
                    }),
                    (b.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (E.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(b.prototype, E);
                var g = function () {
                    this.eventElements = [];
                };
                function h(e) {
                    return parseInt(e, 10) || 0;
                }
                (g.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new b(e)), this.eventElements.push(t)), t;
                }),
                    (g.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (g.prototype.unbind = function (e, t, n) {
                        var a = this.eventElement(e);
                        a.unbind(t, n), a.isEmpty && this.eventElements.splice(this.eventElements.indexOf(a), 1);
                    }),
                    (g.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (g.prototype.once = function (e, t, n) {
                        var a = this.eventElement(e);
                        a.bind(t, function e(s) {
                            a.unbind(t, e), n(s);
                        });
                    });
                var f = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function v() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function C(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var A = function (e, t, n, a, s, i) {
                    var r;
                    if ((void 0 === a && (a = !0), void 0 === s && (s = !1), void 0 === i && (i = !1), 'top' === t))
                        r = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        r = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, a, s, i) {
                        var r = n[0],
                            o = n[1],
                            u = n[2],
                            l = n[3],
                            c = n[4],
                            _ = n[5];
                        void 0 === a && (a = !0);
                        void 0 === s && (s = !1);
                        void 0 === i && (i = !1);
                        var d = e.element;
                        if (!e.reach) return;
                        (e.reach[l] = null), d[u] < 1 && (e.reach[l] = 'start');
                        d[u] > e[r] - e[o] - 1 && (e.reach[l] = 'end');
                        t &&
                            !s &&
                            (d.dispatchEvent(C('ps-scroll-' + l)),
                            t < 0
                                ? d.dispatchEvent(C('ps-scroll-' + c))
                                : t > 0 && d.dispatchEvent(C('ps-scroll-' + _)),
                            a &&
                                (function (e, t) {
                                    m(e, t), p(e, t);
                                })(e, l));
                        e.reach[l] && (t || i) && d.dispatchEvent(C('ps-' + l + '-reach-' + e.reach[l]));
                    })(e, n, r, a, s, i);
                };
                var D = function (e, t, a, s) {
                    void 0 === t && (t = !1), void 0 === a && (a = 0), void 0 === s && (s = !1);
                    var i = e.element;
                    if (i) {
                        if (
                            ((e.containerWidth = Math.round(i.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(i.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(i.scrollWidth) - 2 * a),
                            (e.contentHeight = Math.round(i.scrollHeight)),
                            !s)
                        ) {
                            e.contentWidth = Math.round(i.scrollWidth) - 2 * a;
                            var u = e.contentWidth - e.containerWidth + a;
                            i.scrollLeft < a ? (i.scrollLeft = a) : i.scrollLeft > u && (i.scrollLeft = u);
                        }
                        var _ = Math.floor(i.scrollTop),
                            d = Math.floor(i.scrollLeft) - a,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        i.contains(e.scrollbarXRail) ||
                            (o(i, l.rail('x')).forEach(function (e) {
                                return r(e);
                            }),
                            i.appendChild(e.scrollbarXRail)),
                            i.contains(e.scrollbarYRail) ||
                                (o(i, l.rail('y')).forEach(function (e) {
                                    return r(e);
                                }),
                                i.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = S(e, h((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = h(
                                      ((e.negativeScrollAdjustment + d) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = S(e, h((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = h(
                                      (_ * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, t, a) {
                                var s = { width: t.railXWidth },
                                    i = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (s.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (s.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (s.bottom = t.scrollbarXBottom - i)
                                    : (s.top = t.scrollbarXTop + i);
                                n(t.scrollbarXRail, s);
                                var r = { top: i, height: t.railYHeight };
                                t.isScrollbarYUsingRight
                                    ? t.isRtl
                                        ? (r.right =
                                              t.contentWidth -
                                              (t.negativeScrollAdjustment + e.scrollLeft) -
                                              t.scrollbarYRight -
                                              t.scrollbarYOuterWidth)
                                        : (r.right = t.scrollbarYRight - e.scrollLeft)
                                    : t.isRtl
                                      ? (r.left =
                                            t.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * t.containerWidth -
                                            t.contentWidth -
                                            t.scrollbarYLeft -
                                            t.scrollbarYOuterWidth)
                                      : (r.left = t.scrollbarYLeft + e.scrollLeft);
                                n(t.scrollbarYRail, r),
                                    n(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * a,
                                    }),
                                    n(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * a,
                                    });
                            })(i, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', d + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', i.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                i.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (i.classList.add(c.active('x')), A(e, 'left', d - e.lastScrollLeft, !0, t))
                                : (i.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (i.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (i.classList.add(c.active('y')), A(e, 'top', i.scrollTop - e.lastScrollTop, !0, t))
                                : (i.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (i.scrollTop = 0)),
                            (e.lastScrollTop = _),
                            (e.lastScrollLeft = d),
                            (e.scrollTopPercent = i.scrollTop / i.scrollHeight),
                            (e.scrollLeftPercent = i.scrollLeft / i.scrollWidth);
                    }
                };
                function S(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var F = {
                        linear: function (e) {
                            return e;
                        },
                        easeInQuad: function (e) {
                            return e * e;
                        },
                        easeOutQuad: function (e) {
                            return e * (2 - e);
                        },
                        easeInOutQuad: function (e) {
                            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
                        },
                        easeInCubic: function (e) {
                            return e * e * e;
                        },
                        easeOutCubic: function (e) {
                            return --e * e * e + 1;
                        },
                        easeInOutCubic: function (e) {
                            return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                        },
                        easeInQuart: function (e) {
                            return e * e * e * e;
                        },
                        easeOutQuart: function (e) {
                            return 1 - --e * e * e * e;
                        },
                        easeInOutQuart: function (e) {
                            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
                        },
                        easeInQuint: function (e) {
                            return e * e * e * e * e;
                        },
                        easeOutQuint: function (e) {
                            return 1 + --e * e * e * e * e;
                        },
                        easeInOutQuint: function (e) {
                            return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
                        },
                    },
                    B = function (e) {
                        var t,
                            n = e.percentTimeElapsed,
                            a = e.x1,
                            s = e.y1,
                            i = e.x2,
                            r = e.y2;
                        return (
                            1 -
                            (a * ((t = n), Math.pow(t, 3)) +
                                s *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                i *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                r *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    y = { breakBounds: !1, startBound: 0, endBound: 0 },
                    w = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            a = e.direction,
                            s = e.onRefUpdateCallback,
                            i = e.duration,
                            r = e.cubicBezierPoints,
                            o = e.easingPreset,
                            u = e.scrollAmount,
                            l = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = y);
                        var _ = null,
                            d = null,
                            m = null,
                            p = null,
                            b = t === window,
                            E = ['left', 'right'].indexOf(a) > -1,
                            g = ['right', 'bottom'].indexOf(a) > -1;
                        E
                            ? ((d = b ? 'scrollX' : 'scrollLeft'),
                              (p = b ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((d = b ? 'scrollY' : 'scrollTop'),
                              (p = b ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var h = t[d],
                            f = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    a = e.scrollableDomEle,
                                    s = e.elementLengthProp,
                                    i = e.initialScrollPosition,
                                    r = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    u = e.direction;
                                if (n) {
                                    var l = document.documentElement;
                                    t = r ? l.offsetWidth : l.offsetHeight;
                                } else t = (a[o] - a.getBoundingClientRect()[s]) | 0;
                                return ['left', 'top'].includes(u) ? i : t - i;
                            })({
                                isWindow: b,
                                scrollableDomEle: t,
                                elementLengthProp: p,
                                initialScrollPosition: h,
                                isHorizontalDirection: E,
                                scrollLengthProp: m,
                                direction: a,
                            });
                        !isNaN(u) && u < f && (f = u);
                        var v = function e(a) {
                            if (!l || !l()) {
                                var u = a - _,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            a = e.duration,
                                            s = e.runTime / a;
                                        if (F.hasOwnProperty(t)) return F[t](s);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return B({ percentTimeElapsed: s, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: o, cubicBezierPoints: r, runTime: u, duration: i });
                                if (!isNaN(m)) {
                                    var p = Math.round(m * f),
                                        v = g ? p + h : f - p;
                                    if (
                                        (c.breakBounds &&
                                            (v < c.startBound
                                                ? (v = c.startBound)
                                                : v > c.endBound && (v = c.endBound)),
                                        u < i)
                                    ) {
                                        if (b) {
                                            var C = E ? v : 0,
                                                A = E ? 0 : v;
                                            window.scrollTo(C, A);
                                        } else t[d] = v;
                                        s && s(v), requestAnimationFrame(e);
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (_ = e), v(e);
                        });
                    },
                    k = function (e) {
                        var t = e.axis,
                            n = e.cursorPositionOnRail,
                            a = e.direction,
                            s = e.i,
                            i = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    a = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var s = n.scrollbarY.offsetTop,
                                        i = s + n.scrollbarYHeight;
                                    return a >= s && a <= i;
                                }
                                var r = n.scrollbarX.offsetLeft,
                                    o = r + n.scrollbarXWidth;
                                return a >= r && a <= o;
                            })({ axis: t, i: s, cursorPositionOnRail: n });
                        return i
                            ? ((function (e) {
                                  var t = e.axis,
                                      n = e.i,
                                      a = e.cursorPositionOnRail,
                                      s = (function (e, t) {
                                          if ('y' === e) {
                                              var n = t.contentHeight - t.containerHeight;
                                              return {
                                                  rail: t.railYHeight,
                                                  content: t.contentHeight,
                                                  scrollbar: t.scrollbarYHeight,
                                                  maxScroll: n,
                                              };
                                          }
                                          var a = t.contentWidth - t.containerWidth;
                                          return {
                                              rail: t.railXWidth,
                                              content: t.contentWidth,
                                              scrollbar: t.scrollbarXWidth,
                                              maxScroll: a,
                                          };
                                      })(t, n),
                                      i = (a - s.scrollbar / 2) / s.rail,
                                      r = Math.round(Math.min(s.maxScroll, Math.max(0, s.content * i)));
                                  'y' === t ? (n.element.scrollTop = r) : (n.element.scrollLeft = r);
                              })({ axis: t, i: s, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (s.element.scrollTop += a * s.containerHeight)
                                  : (s.element.scrollLeft += a * s.containerWidth),
                              !1);
                    },
                    T = function (e, t, n) {
                        return function (a) {
                            t = t.toLowerCase();
                            var s = null,
                                i = function () {
                                    if (1 === a.buttons) {
                                        if (
                                            !a.target.closest('.ps__rail-' + t) ||
                                            !a.target.closest('.ps__track_' + t)
                                        ) {
                                            var i = (function (e) {
                                                    var t = e.axis,
                                                        n = e.e,
                                                        a = e.i;
                                                    return 'y' === t
                                                        ? {
                                                              cursorPosition: n.screenY,
                                                              windowScrolled: window.pageYOffset,
                                                              elementPosition:
                                                                  a.scrollbarYRail.getBoundingClientRect().top,
                                                          }
                                                        : {
                                                              cursorPosition: n.screenX,
                                                              windowScrolled: window.pageXOffset,
                                                              elementPosition:
                                                                  a.scrollbarXRail.getBoundingClientRect().left,
                                                          };
                                                })({ axis: t, e: a, i: e }),
                                                r = i.cursorPosition - i.windowScrolled - i.elementPosition,
                                                o = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        a = e.i;
                                                    return n > ('y' === t ? a.scrollbarYTop : a.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: r, i: e });
                                            k({ axis: t, cursorPositionOnRail: r, direction: o, i: e }) &&
                                                clearTimeout(s),
                                                D(e, !1, n);
                                        }
                                        a.stopPropagation();
                                    }
                                };
                            i(),
                                (s = setInterval(i, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(s);
                                });
                        };
                    };
                function x(e, t, n) {
                    var a = n[0],
                        s = n[1],
                        i = n[2],
                        r = n[3],
                        o = n[4],
                        u = n[5],
                        l = n[6],
                        _ = n[7],
                        d = n[8],
                        b = e.element,
                        E = null,
                        g = null,
                        f = null;
                    function v(n) {
                        (b[l] = h(E + f * (n[i] - g))), m(e, _), D(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function C() {
                        p(e, _), e[d].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', v);
                    }
                    e.event.bind(e[o], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((E = b[l]),
                            (g = t[i]),
                            (f = (e[s] - e[a]) / (e[r] - e[u])),
                            e.event.bind(e.ownerDocument, 'mousemove', v),
                            e.event.once(e.ownerDocument, 'mouseup', C),
                            e[d].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var I = 1e3,
                    N = {
                        'click-rail': function (e, t) {
                            e.event.bind(e.scrollbarY, 'mousedown', function (e) {
                                return e.stopPropagation();
                            }),
                                e.event.bind(e.scrollbarYRail, 'mousedown', T(e, 'y', 0)),
                                e.event.bind(e.scrollbarX, 'mousedown', function (e) {
                                    return e.stopPropagation();
                                }),
                                e.event.bind(e.scrollbarXRail, 'mousedown', T(e, 'x', t));
                        },
                        'drag-thumb': function (e, t) {
                            x(e, t, [
                                'containerWidth',
                                'contentWidth',
                                'screenX',
                                'railXWidth',
                                'scrollbarX',
                                'scrollbarXWidth',
                                'scrollLeft',
                                'x',
                                'scrollbarXRail',
                            ]),
                                x(e, t, [
                                    'containerHeight',
                                    'contentHeight',
                                    'screenY',
                                    'railYHeight',
                                    'scrollbarY',
                                    'scrollbarYHeight',
                                    'scrollTop',
                                    'y',
                                    'scrollbarYRail',
                                ]);
                        },
                        keyboard: function (e, t) {
                            var n = e.element;
                            e.event.bind(e.ownerDocument, 'keydown', function (a) {
                                if (
                                    !((a.isDefaultPrevented && a.isDefaultPrevented()) || a.defaultPrevented) &&
                                    i(n, ':hover')
                                ) {
                                    var s,
                                        r = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (r) {
                                        if ('IFRAME' === r.tagName) r = r.contentDocument.activeElement;
                                        else for (; r.shadowRoot; ) r = r.shadowRoot.activeElement;
                                        if (
                                            i((s = r), 'input,[contenteditable]') ||
                                            i(s, 'select,[contenteditable]') ||
                                            i(s, 'textarea,[contenteditable]') ||
                                            i(s, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var o = 0,
                                        u = 0;
                                    switch (a.which) {
                                        case 37:
                                            o = a.metaKey ? -e.contentWidth : a.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            u = a.metaKey ? e.contentHeight : a.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            o = a.metaKey ? e.contentWidth : a.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            u = a.metaKey ? -e.contentHeight : a.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            u = a.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            u = e.containerHeight;
                                            break;
                                        case 34:
                                            u = -e.containerHeight;
                                            break;
                                        case 36:
                                            u = e.contentHeight;
                                            break;
                                        case 35:
                                            u = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== o) ||
                                        (e.settings.suppressScrollY && 0 !== u) ||
                                        ((n.scrollTop -= u),
                                        (n.scrollLeft += o),
                                        D(e, !1, t),
                                        (function (t, a) {
                                            var s = Math.floor(n.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === s && a > 0) ||
                                                    (s >= e.contentHeight - e.containerHeight && a < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var i = n.scrollLeft;
                                            if (0 === a) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === i && t < 0) ||
                                                    (i >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(o, u) && a.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var a = e.element;
                            function s(s) {
                                var i = (function (e) {
                                        var t = -1 * e.deltaX,
                                            n = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== n) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                            t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                            e.shiftKey ? [-n, -t] : [t, n]
                                        );
                                    })(s),
                                    r = i[0],
                                    o = i[1];
                                if (
                                    !(function (e, n, s) {
                                        if (!f.isWebKit && a.querySelector('select')) return !0;
                                        if (!a.contains(e)) return !1;
                                        for (var i = e; i && i !== a; ) {
                                            if (i.classList.contains(l.consuming)) return !0;
                                            var r = t(i);
                                            if (
                                                [r.overflow, r.overflowX, r.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var o = i.scrollHeight - i.clientHeight;
                                                if (
                                                    o > 0 &&
                                                    !((0 === i.scrollTop && s > 0) || (i.scrollTop === o && s < 0))
                                                )
                                                    return !0;
                                                var u = i.scrollWidth - i.clientWidth;
                                                if (
                                                    u > 0 &&
                                                    !((0 === i.scrollLeft && n < 0) || (i.scrollLeft === u && n > 0))
                                                )
                                                    return !0;
                                            }
                                            i = i.parentNode;
                                        }
                                        return !1;
                                    })(s.target, r, o)
                                ) {
                                    var u = !1,
                                        c = (r * e.settings.wheelSpeed) | 0,
                                        _ = (o * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (o ? (a.scrollTop -= _) : (a.scrollTop += c), (u = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (r ? (a.scrollLeft += c) : (a.scrollLeft -= _), (u = !0))
                                        : ((a.scrollTop -= _), (a.scrollLeft += c)),
                                        D(e, !1, n),
                                        (u =
                                            u ||
                                            (function (t, n) {
                                                var s = Math.floor(a.scrollTop),
                                                    i = 0 === a.scrollTop,
                                                    r = s + a.offsetHeight === a.scrollHeight,
                                                    o = 0 === a.scrollLeft,
                                                    u = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? i || r : o || u) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(r, o)),
                                        u && !s.ctrlKey && (s.stopPropagation(), s.preventDefault());
                                }
                            }
                            e.event.bind(a, 'wheel', s),
                                void 0 !== window.onmousewheel && e.event.bind(a, 'mousewheel', s);
                        },
                        touch: function (e, n) {
                            if (f.supportsTouch || f.supportsIePointer) {
                                var a = e.element,
                                    s = {},
                                    i = 0,
                                    r = {},
                                    o = null;
                                f.supportsTouch
                                    ? (e.event.bind(a, 'touchstart', d),
                                      e.event.bind(a, 'touchmove', m),
                                      e.event.bind(a, 'touchend', p))
                                    : f.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(a, 'pointerdown', d),
                                            e.event.bind(a, 'pointermove', m),
                                            e.event.bind(a, 'pointerup', p))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(a, 'MSPointerDown', d),
                                            e.event.bind(a, 'MSPointerMove', m),
                                            e.event.bind(a, 'MSPointerUp', p)));
                            }
                            function u(t, s) {
                                (a.scrollTop -= s), (a.scrollLeft -= t), D(e, !1, n);
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function _(e) {
                                return (
                                    (!e.pointerType || 'pen' !== e.pointerType || 0 !== e.buttons) &&
                                    (!(!e.targetTouches || 1 !== e.targetTouches.length) ||
                                        !(
                                            !e.pointerType ||
                                            'mouse' === e.pointerType ||
                                            e.pointerType === e.MSPOINTER_TYPE_MOUSE
                                        ))
                                );
                            }
                            function d(e) {
                                if (_(e)) {
                                    var t = c(e);
                                    (s.pageX = t.pageX),
                                        (s.pageY = t.pageY),
                                        (i = new Date().getTime()),
                                        null !== o && clearInterval(o);
                                }
                            }
                            function m(n) {
                                if (_(n)) {
                                    var o = c(n),
                                        d = { pageX: o.pageX, pageY: o.pageY },
                                        m = d.pageX - s.pageX,
                                        p = d.pageY - s.pageY;
                                    if (
                                        (function (e, n, s) {
                                            if (!a.contains(e)) return !1;
                                            for (var i = e; i && i !== a; ) {
                                                if (i.classList.contains(l.consuming)) return !0;
                                                var r = t(i);
                                                if (
                                                    [r.overflow, r.overflowX, r.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var o = i.scrollHeight - i.clientHeight;
                                                    if (
                                                        o > 0 &&
                                                        !((0 === i.scrollTop && s > 0) || (i.scrollTop === o && s < 0))
                                                    )
                                                        return !0;
                                                    var u = i.scrollLeft - i.clientWidth;
                                                    if (
                                                        u > 0 &&
                                                        !(
                                                            (0 === i.scrollLeft && n < 0) ||
                                                            (i.scrollLeft === u && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                i = i.parentNode;
                                            }
                                            return !1;
                                        })(n.target, m, p)
                                    )
                                        return;
                                    u(m, p), (s = d);
                                    var b = new Date().getTime(),
                                        E = b - i;
                                    E > 0 && ((r.x = m / E), (r.y = p / E), (i = b)),
                                        (function (t, n) {
                                            var s = Math.floor(a.scrollTop),
                                                i = a.scrollLeft,
                                                r = Math.abs(t),
                                                o = Math.abs(n);
                                            if (o > r) {
                                                if (
                                                    (n < 0 && s === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === s)
                                                )
                                                    return 0 === window.scrollY && n > 0 && f.isChrome;
                                            } else if (
                                                r > o &&
                                                ((t < 0 && i === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === i))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, p) && n.preventDefault();
                                }
                            }
                            function p() {
                                e.settings.swipeEasing &&
                                    (clearInterval(o),
                                    (o = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(o)
                                            : r.x || r.y
                                              ? Math.abs(r.x) < 0.01 && Math.abs(r.y) < 0.01
                                                  ? clearInterval(o)
                                                  : (u(30 * r.x, 30 * r.y), (r.x *= 0.8), (r.y *= 0.8))
                                              : clearInterval(o);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                a = null,
                                s = !1,
                                i = 0,
                                r = 0,
                                o = 0;
                            function u() {
                                e.onScroll();
                            }
                            function l(a, s, i, r) {
                                void 0 === i && (i = null),
                                    void 0 === r && (r = !1),
                                    w({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: u,
                                        duration: s,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: a,
                                        onCheckForBreakCallback: i,
                                        boundsInfo: {
                                            breakBounds: r,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function _() {
                                if (s) return s;
                            }
                            function d() {
                                o = 0;
                            }
                            function b(s) {
                                if (e.scrollbarXActive) {
                                    var u = a - s.screenX;
                                    (n.scrollLeft += u), (a = s.screenX);
                                    var l = new Date().getTime();
                                    if (((i = (u / (l - r)) * 1e3), (r = l), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === c
                                            ? 0 === o && (o = window.setTimeout(d, 250))
                                            : 0 !== o && (window.clearTimeout(o), (o = 0));
                                    }
                                    m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        s.stopPropagation(),
                                        s.preventDefault();
                                }
                            }
                            function E(e) {
                                (a = e.screenX),
                                    (s = !0),
                                    requestAnimationFrame(function () {
                                        s = !1;
                                    }),
                                    (r = new Date().getTime());
                            }
                            function g(a) {
                                var s = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) l(t - n.scrollLeft, I, _);
                                else if (n.scrollLeft > s) l(s - n.scrollLeft, I, _);
                                else {
                                    new Date().getTime() - r < 100 && l(i / 4, I, _, !0);
                                }
                                p(e, 'x'),
                                    p(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', b);
                            }
                            function h() {
                                s = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((a = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', b),
                                        e.event.once(e.ownerDocument, 'mouseup', g),
                                        e.event.once(e.ownerDocument, 'mousedown', E),
                                        e.event.once(n, 'wheel', h),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    L = function (e, s) {
                        var i = this;
                        if (
                            (void 0 === s && (s = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var r in ((this.element = e),
                        e.classList.add(u),
                        (this.settings = {
                            handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch', 'drag-move'],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 10,
                            enableHorizontalScroll: !1,
                            animationDuration: 1e3,
                            animationEasingPreset: 'easeInOutQuint',
                            isDisableScrollToLastPositionOnResize: !1,
                            overScrollWidth: 0,
                        }),
                        s))
                            i.settings[r] = s[r];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var o,
                            _,
                            d = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((_ = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (o = e.scrollLeft < 0),
                                (e.scrollLeft = _),
                                o)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new g()),
                            (this.ownerDocument = e.ownerDocument || document),
                            (this.scrollbarXRail = a(l.rail('x'))),
                            (this.scrollbarXButtonStart = a(l.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = a(l.buttonEnd('x'))),
                            (this.scrollbarXTrack = a(l.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = a(l.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', d),
                            this.event.bind(this.scrollbarX, 'blur', m),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = a(l.rail('y'))),
                            (this.scrollbarYButtonStart = a(l.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = a(l.buttonEnd('y'))),
                            (this.scrollbarYTrack = a(l.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = a(l.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', d),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            v().then(function () {
                                var a = t(i.scrollbarXRail);
                                (i.scrollbarXBottom = parseInt(a.bottom, 10)),
                                    isNaN(i.scrollbarXBottom)
                                        ? ((i.isScrollbarXUsingBottom = !1), (i.scrollbarXTop = h(a.top)))
                                        : (i.isScrollbarXUsingBottom = !0),
                                    (i.railBorderXWidth = h(a.borderLeftWidth) + h(a.borderRightWidth)),
                                    n(i.scrollbarXRail, { display: 'block' }),
                                    (i.railXMarginWidth = h(a.marginLeft) + h(a.marginRight)),
                                    n(i.scrollbarXRail, { display: '' }),
                                    (i.railXWidth = null),
                                    (i.railXRatio = null);
                                var s = t(i.scrollbarYRail);
                                (i.scrollbarYRight = parseInt(s.right, 10)),
                                    isNaN(i.scrollbarYRight)
                                        ? ((i.isScrollbarYUsingRight = !1), (i.scrollbarYLeft = h(s.left)))
                                        : (i.isScrollbarYUsingRight = !0),
                                    (i.scrollbarYOuterWidth = i.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  h(n.width) +
                                                  h(n.paddingLeft) +
                                                  h(n.paddingRight) +
                                                  h(n.borderLeftWidth) +
                                                  h(n.borderRightWidth)
                                              );
                                          })(i.scrollbarY)
                                        : null),
                                    (i.railBorderYWidth = h(s.borderTopWidth) + h(s.borderBottomWidth)),
                                    n(i.scrollbarYRail, { display: 'block' }),
                                    (i.railYMarginHeight = h(s.marginTop) + h(s.marginBottom)),
                                    n(i.scrollbarXRail, { display: '' }),
                                    n(i.scrollbarYRail, { display: '' }),
                                    (i.railYHeight = null),
                                    (i.railYRatio = null),
                                    (i.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= i.contentWidth - i.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= i.contentHeight - i.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (i.isAlive = !0),
                                    i.settings.handlers.forEach(function (e) {
                                        return N[e](i, i.settings.overScrollWidth);
                                    }),
                                    (i.boundHandleButtonEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundHandleMouseLeave = i.handleMouseLeave.bind(i)),
                                    (i.boundHandleMouseEnter = i.handleMouseEnter.bind(i)),
                                    (i.boundPlayClickSound = i.playClickSound.bind(i)),
                                    i.scrollbarYButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarYButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonEnd.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarXButtonStart.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarXButtonEnd.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonEnd.addEventListener('mouseenter', i.boundHandleButtonEnter),
                                    i.scrollbarYButtonStart.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarYButtonEnd.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarX.addEventListener('mouseenter', i.boundHandleMouseEnter),
                                    i.scrollbarY.addEventListener('mouseleave', i.boundHandleMouseLeave),
                                    i.scrollbarY.addEventListener('mousedown', i.boundPlayClickSound),
                                    i.scrollbarX.addEventListener('mousedown', i.boundPlayClickSound),
                                    (i.lastScrollTop = Math.floor(e.scrollTop)),
                                    (i.lastScrollLeft = e.scrollLeft),
                                    (i.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (i.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    i.event.bind(i.element, 'scroll', function (e) {
                                        return i.onScroll(e);
                                    }),
                                    i.settings.enableHorizontalScroll &&
                                        i.event.bind(i.element, 'wheel', function (e) {
                                            return i.onWheel(e);
                                        }),
                                    D(i, !1, i.settings.overScrollWidth, !1);
                            });
                    };
                (L.prototype._getAnimationSettings = function (e, t, n, a) {
                    var s = this,
                        i = 0;
                    return (
                        null !== this.element &&
                            (i = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - i,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                D(s, !0, s.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                a && a();
                            },
                        }
                    );
                }),
                    (L.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (L.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (L.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (L.prototype.handleMouseLeave = function () {}),
                    (L.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                h(t(this.scrollbarXRail).marginLeft) + h(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                h(t(this.scrollbarYRail).marginTop) + h(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            v().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    D(e, !1, e.settings.overScrollWidth, !1),
                                    A(e, 'top', 0, !1, !1, !0),
                                    A(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (L.prototype.setScrollLeft = function (e, t, n) {
                        w(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (L.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (L.prototype.setScrollTop = function (e, t, n) {
                        w(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (L.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (L.prototype.onScroll = function (e) {
                        this.isAlive && D(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (L.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (D(this, !1, this.settings.overScrollWidth, !1),
                            A(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (L.prototype.destroy = function () {
                        this.isAlive &&
                            (this.scrollbarYButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarYButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonEnd.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarXButtonStart.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarXButtonEnd.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonEnd.removeEventListener('mouseenter', this.boundHandleButtonEnter),
                            this.scrollbarYButtonStart.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarYButtonEnd.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarX.removeEventListener('mouseenter', this.boundHandleMouseEnter),
                            this.scrollbarY.removeEventListener('mouseleave', this.boundHandleMouseLeave),
                            this.scrollbarY.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.scrollbarX.removeEventListener('mousedown', this.boundPlayClickSound),
                            this.event.unbindAll(),
                            r(this.scrollbarX),
                            r(this.scrollbarY),
                            r(this.scrollbarXRail),
                            r(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (L.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = L);
            },
            8089: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(7727),
                    u = n(7476);
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
                                    this.props.soundHover && (0, o.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick);
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
                            i = e.side,
                            o = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            b = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(e, l)),
                            g = r()(u.Z.base, u.Z[`base__${o}`], u.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            h = r()(u.Z.icon, u.Z[`icon__${o}`], u.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            f = r()(u.Z.glow, null == _ ? void 0 : _.glow),
                            v = r()(u.Z.caption, u.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            C = r()(u.Z.goto, null == _ ? void 0 : _.goto);
                        return s().createElement(
                            'div',
                            c(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(b),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                E,
                            ),
                            'info' !== o && s().createElement('div', { className: u.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: f })),
                            s().createElement('div', { className: v }, t),
                            a && s().createElement('div', { className: C }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(2056);
                const r = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, r);
                    return s().createElement(
                        i.u,
                        o(
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
                    i = n.n(s);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const u = R.views.common.tooltip_window.simple_tooltip_content,
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
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, r);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return i().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
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
                    s = n(4179),
                    i = n(6179);
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
                function o(e) {
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
                const u = (e, t, n = {}, a = 0) => {
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
                            E = void 0 !== b && b,
                            g = e.decoratorId,
                            h = void 0 === g ? 0 : g,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            D = e.onShow,
                            S = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, r);
                        const B = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, i.useMemo)(() => A || (0, a.F)().resId, [A]),
                            w = (0, i.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: o(s) }, y),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [n, h, s, y, D]),
                            k = (0, i.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, y),
                                        B.current.isVisible && S && S(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, h, y, S]),
                            T = (0, i.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === v && k();
                            }, [v, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return v
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
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
            527: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { mouse: () => o, onResize: () => i });
                var a = n(2472),
                    s = n(1176);
                const i = (0, a.E)('clientResized'),
                    r = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const o = (function () {
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const i = `mouse${t}`,
                                        o = r[t]((e) => n([e, 'outside']));
                                    function u(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, u),
                                        a(),
                                        () => {
                                            s &&
                                                (o(),
                                                window.removeEventListener(i, u),
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
                    return Object.assign({}, i, {
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => r,
                    });
                var a = n(527);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
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
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => s.W,
                        displayStatusIs: () => F,
                        events: () => i.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => A,
                        isFocused: () => v,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var a = n(3722),
                    s = n(6112),
                    i = n(6538),
                    r = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
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
                function E() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
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
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const s = 2,
                    i = 16,
                    r = 32,
                    o = 64,
                    u = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((s = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? s : r);
                        },
                        minimize() {
                            u(o);
                        },
                        move(e) {
                            u(i, { isMouseEvent: !0, on: e });
                        },
                    };
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
            8071: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => a });
                const a = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
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
                n.d(t, { gd: () => o });
                var a = n(3138),
                    s = n(5521),
                    i = (n(4179), n(6179));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = s.n.NONE, t = r, n = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(s) {
                            if (s.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(s), n && s.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
            },
            9056: (e, t, n) => {
                'use strict';
                n.d(t, { m: () => u });
                var a = n(7902),
                    s = n(8071),
                    i = n(4179),
                    r = n(6179);
                const o = i.Sw.instance,
                    u = (e = 'model', t = !0) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            u = (0, r.useMemo)(() => (0, a.F)(), []),
                            l = u.caller,
                            c = u.resId,
                            _ = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            d = (0, r.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, s.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            i((e) => e + 1);
                                        },
                                        n = o.addCallback(e, t, c);
                                    return () => o.removeCallback(n, c);
                                }
                            }, [e, t, c]),
                            d
                        );
                    };
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
                    DZ: () => c,
                    G: () => u,
                    MH: () => i,
                    UI: () => r,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                    yW: () => o,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const i = s;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let n = 0; n < e.length; n++) {
                        if (!t(i(e, n), n, e)) return !1;
                    }
                    return !0;
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) {
                        if (t(i(e, n), n, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const i = null == (a = e[s]) ? void 0 : a.value;
                        t(i, s, e) && n.push(i);
                    }
                    return n;
                }
                function c(e, t, n) {
                    const a = [];
                    for (let s = 0; s < e.length; s++) {
                        const r = i(e, s);
                        t(r, s, e) && a.push(n(r, s, e));
                    }
                    return a;
                }
                function _(e, t) {
                    return c(e, a.C, t);
                }
                function d(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, i(e, n), n, e);
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
                let a;
                function s(e, t) {
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
                n.d(t, {
                    BN: () => r,
                    Eg: () => l,
                    Uw: () => E,
                    WU: () => s,
                    e: () => o,
                    uF: () => i,
                    v2: () => a,
                    z4: () => u,
                }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const u = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    _ = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    d = (e, t, n = a.left) => e.split(t).reduce(n === a.left ? c : _, []),
                    m = (() => {
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
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    b = (e, t = a.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return p.includes(n)
                            ? m(e)
                            : ((e, t = a.left) => {
                                  let n = [];
                                  const s =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = u(e);
                                  return d(i, /( )/, t).forEach((e) => (n = n.concat(d(e, s, a.left)))), n;
                              })(e, t);
                    },
                    E = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : b(e, t)));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
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
                        const i = a.O.view.addModelObserver(e, n, s);
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
                s.__instance = void 0;
                const i = s;
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => i.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => r,
                    B0: () => u,
                    c9: () => v,
                    ry: () => h,
                    Eu: () => f,
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
                var i = n(1358);
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let u;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(u || (u = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const b = ['args'];
                function E(e, t, n, a, s, i, r) {
                    try {
                        var o = e[i](r),
                            u = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(a, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        var i = e.apply(t, n);
                                        function r(e) {
                                            E(i, a, s, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(i, a, s, r, o, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
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
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, b);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    C = () => v(u.CLOSE),
                    A = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = n(7572);
                const S = s.instance,
                    F = {
                        DataTracker: i.Z,
                        ViewModel: D.Z,
                        ViewEventType: u,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => v(u.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), i) => {
                            const r = p.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: p.O.view.pxToRem(l) + r.x,
                                    y: p.O.view.pxToRem(c) + r.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(d),
                                };
                            v(u.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => A(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            A(e, C);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
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
                        ClickOutsideManager: S,
                        SystemLocale: r,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = F;
            },
            4360: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => ps,
                        Bar: () => _s,
                        DefaultScroll: () => ms,
                        Direction: () => Za,
                        defaultSettings: () => qa,
                        useHorizontalScrollApi: () => Ja,
                    });
                var s = {};
                n.r(s), n.d(s, { Area: () => Is, Bar: () => ks, Default: () => xs, useVerticalScrollApi: () => bs });
                var i = n(3138),
                    r = n(7739),
                    o = n(6179),
                    u = n.n(o),
                    l = n(6483),
                    c = n.n(l),
                    _ = n(926),
                    d = n.n(_),
                    m = n(1043);
                let p, b, E;
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
                    })(E || (E = {}));
                const g = () => {
                        const e = (0, o.useContext)(r.YN),
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
                        return { mediaSize: a, mediaWidth: s, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    h = ['children', 'className'];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const v = {
                        [b.ExtraSmall]: '',
                        [b.Small]: d().SMALL_WIDTH,
                        [b.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [b.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [E.ExtraSmall]: '',
                        [E.Small]: d().SMALL_HEIGHT,
                        [E.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [E.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
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
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, h);
                        const s = g(),
                            i = s.mediaWidth,
                            r = s.mediaHeight,
                            o = s.mediaSize;
                        return u().createElement('div', f({ className: c()(n, v[i], C[r], A[o]) }, a), t);
                    },
                    S = ['children'];
                const F = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, S);
                    return u().createElement(r.ZN, null, u().createElement(D, n, t));
                };
                var B = n(493),
                    y = n.n(B),
                    w = n(1856),
                    k = n(7902),
                    T = n(8071),
                    x = n(6536),
                    I = n(4179);
                const N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    L = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    M = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = (0, T.M)(`${e}.${n}`, window);
                                return N(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    O = (e) => {
                        const t = ((e) => {
                                const t = (0, k.F)(),
                                    n = t.caller,
                                    a = t.resId,
                                    s = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: s, modelPath: L(s, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const s = (0, T.M)(L(n, `${t}.${a}`), window);
                                    return N(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    P = I.Sw.instance;
                let H;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(H || (H = {}));
                const $ = (e = 'model', t = H.Deep) => {
                        const n = (0, o.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, o.useMemo)(() => (0, k.F)(), []),
                            i = s.caller,
                            r = s.resId,
                            u = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, o.useState)(() =>
                                ((e) => {
                                    const t = (0, T.M)(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return N(t) ? t.value : t;
                                })(M(u)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, o.useRef)(-1);
                        return (
                            (0, x.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? H.Deep : H.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== H.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === H.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        s = O(e);
                                    d.current = P.addCallback(s, n, r, t === H.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== H.None)
                                    return () => {
                                        P.removeCallback(d.current, r);
                                    };
                            }, [r, t]),
                            c
                        );
                    },
                    W = [];
                function z(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), W)
                    );
                }
                const G = (0, o.createContext)(null);
                function X() {
                    return (0, o.useContext)(G);
                }
                var Y = n(5262),
                    j = n(3649);
                function U(e, t, n) {
                    const a = (0, o.useContext)(r.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in Y.u);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, j.e)(t))(n, e[0])]),
                            );
                            return (e[n] = c()(t[n], ...a)), e;
                        }, {})
                    );
                }
                var V = n(9480);
                const Z = (e, t = []) => {
                        const n = (0, o.useRef)(),
                            a = (0, o.useCallback)((...t) => {
                                n.current && n.current(), (n.current = e(...t));
                            }, t);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    q = {
                        base: 'AmmunitionPanel_base_f8',
                        base__locked: 'AmmunitionPanel_base__locked_71',
                        base__disabled: 'AmmunitionPanel_base__disabled_41',
                        base__hidden: 'AmmunitionPanel_base__hidden_10',
                        border: 'AmmunitionPanel_border_38',
                        border__hidden: 'AmmunitionPanel_border__hidden_7d',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_21',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_e4',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_8b',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_7a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_00',
                    },
                    K = 'Border_base_f9',
                    J = 'Border_border_83',
                    Q = 'Border_wrapper_17',
                    ee = 'Border_active_e8',
                    te = (0, o.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, o.useRef)(null),
                            s = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const i = (0, o.useCallback)(() => {
                            s.current && n(), (s.current = !1);
                        }, [n]);
                        (0, o.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', i),
                                () => {
                                    e && e.removeEventListener('transitionend', i);
                                }
                            );
                        }, [i]);
                        const r = (0, o.useMemo)(() => ({ left: e }), [e]),
                            l = (0, o.useMemo)(() => ({ width: t }), [t]);
                        return u().createElement(
                            'div',
                            { className: K },
                            u().createElement(
                                'div',
                                { ref: a, className: J, style: r },
                                u().createElement(
                                    'div',
                                    { className: Q },
                                    u().createElement('div', { className: ee, style: l }),
                                ),
                            ),
                        );
                    });
                var ne = n(6373);
                let ae;
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
                })(ae || (ae = {}));
                Date.now();
                var se = n(9056);
                var ie = n(9344),
                    re = n(2558),
                    oe = n(8934);
                const ue = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    le = 'up',
                    ce = 'down',
                    _e = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, o.useRef)(1 - t),
                            i = (0, o.useMemo)(() => {
                                const e = ((n = t), (i = s.current), n === i ? '' : n > i ? ce : le);
                                var n, i;
                                const r = e && (0, j.e)(e);
                                return a ? {} : { enter: ue[`base__enter${r}`], exit: ue[`base__exit${r}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            u().createElement(
                                re.Z,
                                { className: ue.base },
                                u().createElement(
                                    oe.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: i,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let de;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(de || (de = {}));
                const me = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    pe = (e) => e === de.Battle || e === de.Prebattle,
                    be = (e) => !pe(e),
                    Ee = (e) => pe(e) || e === de.Respawn;
                var ge = n(7383),
                    he = n(9152),
                    fe = n(7727);
                function ve(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ce(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ce(e, t);
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
                function Ce(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Ae = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, s = ve(t); !(a = s()).done; ) {
                            const t = a.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    De = (e, t, n) => {
                        let a = '',
                            s = 8e3;
                        for (var i, r = ve(n); !(i = r()).done; ) {
                            const e = i.value,
                                n = Math.abs(e.centerX - t);
                            n < s && ((a = e.id), (s = n));
                        }
                        return a;
                    },
                    Se = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
                let Fe, Be;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(Fe || (Fe = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(Be || (Be = {}));
                const ye = (e) => `panel-${e}-section`,
                    we = (e, t) => {
                        const n = ye(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: [he.y, ...a] };
                    },
                    ke = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: a, syncInitiator: s }) => {
                        const i = ((e, t, n) => {
                                const a = (0, o.useRef)([]),
                                    s = (0, o.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    i = (0, o.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = i[0],
                                    u = i[1],
                                    l = (0, o.useCallback)((e) => {
                                        s.current.dropId ||
                                            s.current.prevPotentialDropId ||
                                            ((s.current.prevPotentialDropId = e),
                                            u({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, o.useCallback)((e, t) => {
                                        if (a.current) {
                                            const n = De(0, t, a.current);
                                            n !== s.current.prevPotentialDropId &&
                                                ((s.current.prevPotentialDropId = n),
                                                u({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    _ = (0, o.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const n = s.current,
                                                i = De(0, t, a.current);
                                            (n.dropId = i),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                u({ activeDragId: e, potentialDropId: '' }),
                                                i !== e && (0, fe.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, o.useCallback)(() => {
                                        const e = s.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((s.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            u({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    m = (0, o.useCallback)(
                                        (e) => {
                                            const t = s.current.dropId;
                                            t && t !== e ? n(e, t) : d();
                                        },
                                        [d, n],
                                    ),
                                    p = (0, o.useCallback)((e, t) => {
                                        const n = a.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    b = (0, o.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case Be.Ready:
                                                    return p(n, a);
                                                case Be.DragStart:
                                                    return l(n);
                                                case Be.Drag:
                                                    return c(n, a);
                                                case Be.Drop:
                                                    return _(n, a);
                                                case Be.DropExit:
                                                    return m(n);
                                                default:
                                                    return;
                                            }
                                        },
                                        [l, c, _, m, p],
                                    );
                                return (
                                    (0, o.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const n = new Array(e).fill(null);
                                            a.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, o.useCallback)((e) => {
                                            const t = s.current,
                                                n = t.dragId,
                                                i = t.dropId;
                                            return e === n ? Se(i, a.current) : e === i ? Se(n, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, n),
                            r = i.dragState,
                            u = i.handleGrabberAction,
                            l = i.getForceCenterX,
                            c = i.resetDragResults,
                            _ = (0, o.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case Be.DragStart:
                                            case Be.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    u(e, t);
                                },
                                [u, a],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, o.useEffect)(() => {
                                c();
                            }, [s, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    },
                    Te = {
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
                    xe = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        i = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, xe);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > r,
                        p = c()(
                            Te.base,
                            Te[`base__${t}`],
                            s && Te.base__animated,
                            i && Te.base__hidden,
                            !_ && Te.base__pattern,
                            a && Te.base__empty,
                            o,
                        );
                    return u().createElement(
                        'div',
                        Ie({ className: p }, l),
                        u().createElement('div', { className: Te.bg }),
                        u().createElement('div', { className: Te.pattern }),
                        u().createElement(
                            'div',
                            { className: c()(Te.value, d && Te.value__text) },
                            m ? r : _,
                            m && u().createElement('span', { className: Te.plus }, '+'),
                        ),
                    );
                };
                Ne.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Le = 'FormatText_base_d0',
                    Re = ({ binding: e, text: t = '', classMix: n, alignment: a = j.v2.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : u().createElement(
                                  o.Fragment,
                                  null,
                                  t.split('\n').map((t, s) =>
                                      u().createElement(
                                          'div',
                                          { className: c()(Le, n), key: `${t}-${s}` },
                                          (0, j.Uw)(t, a, e).map((e, t) =>
                                              u().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Me = 'display',
                    Oe = 'visible_change',
                    Pe = Oe,
                    He = Oe,
                    $e = (e, t) => {
                        const n = $('tutorialModel.triggers.items').filter((n) => {
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
                    },
                    We = 'TopLabel_base_7f',
                    ze = 'TopLabel_base__ready_00',
                    Ge = 'TopLabel_text_d0',
                    Xe = 'TopLabel_text__hangar_36',
                    Ye = 'TopLabel_text__shown_25',
                    je = 'TopLabel_text__hidden_79',
                    Ue = 'TopLabel_text__truncated_29',
                    Ve = (0, o.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const i = (0, o.useRef)(!1),
                            r = (0, o.useState)(!1),
                            l = r[0],
                            _ = r[1];
                        (0, o.useEffect)(() => {
                            n || (s && !i.current && (i.current = !0), _(s));
                        }, [s, n]);
                        const d = (0, o.useCallback)(() => {
                                (i.current = !0), _(!0);
                            }, []),
                            m = (0, o.useCallback)(() => {
                                _(!1);
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = n && n.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', d),
                                    e.addEventListener('mouseleave', m),
                                    () => {
                                        e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', m);
                                    }
                                );
                        }, [n, d, m]);
                        const p = c()(We, i.current && ze),
                            b = c()(Ge, e !== de.Setup && Xe, a && Ue, s && l ? Ye : je);
                        return u().createElement(
                            'div',
                            { className: p },
                            u().createElement('div', { className: b }, t),
                        );
                    }),
                    Ze = 'notUsableSection',
                    qe = 'Section_base_8a',
                    Ke = 'Section_base__hidden_f0',
                    Je = 'Section_label_73',
                    Qe = 'Section_counter_8a',
                    et = 'Section_configLabel_c9',
                    tt = 'Section_configText_eb',
                    nt = 'Section_configVehicleIcon_20';
                let at;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(at || (at = {}));
                const st = 'tooltip_watched';
                let it;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(it || (it = {}));
                const rt = 'epic_battle';
                let ot, ut, lt;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(ot || (ot = {})),
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
                    })(ut || (ut = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(lt || (lt = {}));
                const ct = ['action', 'timeLimit'];
                const _t = 'metrics',
                    dt = () => Date.now(),
                    mt = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: s || null,
                    }),
                    pt = (e, t) => {
                        const n = (0, o.useCallback)(
                            (n, a = at.Info, s) => {
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
                    bt = (e, t) => {
                        const n = pt(e, t),
                            a = (0, o.useRef)(new Map()),
                            s = (0, o.useRef)(new Map()),
                            i = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, dt());
                                },
                                [a],
                            ),
                            r = (0, o.useCallback)(() => {
                                a.current.clear(), s.current.clear();
                            }, [a, s]),
                            u = (0, o.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, dt());
                                },
                                [a, s],
                            ),
                            l = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const i = dt() - n;
                                    a.current.set(e, t + i);
                                },
                                [a, s],
                            ),
                            c = (0, o.useCallback)(
                                (e, t = 0, i, r) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== s.current.get(e) && l(e), a.current.delete(e);
                                    const u = (dt() - o) / 1e3;
                                    u <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, u)),
                                        n(e, i, r));
                                },
                                [a, s, n, l],
                            );
                        return [(e) => i(e), (e, t, n, a) => c(e, t, n, a), () => r(), (e) => u(e), (e) => l(e)];
                    },
                    Et = (e) => {
                        const t = bt(e, _t),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            i = t[3],
                            r = t[4],
                            u = (0, o.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        s = e.logLevel;
                                    a(t, n, s, mt(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => u(e), () => s(), (e) => i(e), (e) => r(e)];
                    },
                    gt = (e, t) => {
                        const n = Et(e),
                            a = n[0],
                            s = n[1],
                            i = t.action,
                            r = t.timeLimit,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(t, ct);
                        return (0, o.useMemo)(
                            () => ({
                                onShow: () => a(i || st),
                                onHide: () => s(Object.assign({ action: i || st, timeLimit: r || 2 }, u)),
                            }),
                            [i, r, u, a, s],
                        );
                    },
                    ht = (e, t) => {
                        const n = bt(e, t),
                            a = n[0],
                            s = n[1],
                            i = n[2],
                            r = n[3],
                            o = n[4];
                        return [(e) => a(e), (e, t, n, a) => s(e, t, n, a), () => i(), (e) => r(e), (e) => o(e)];
                    },
                    ft = (e, t, n, a) => {
                        const s = Et(rt),
                            i = s[0],
                            r = s[1];
                        return [
                            (0, o.useCallback)(() => i(st), [i]),
                            (0, o.useCallback)(
                                () => r({ action: st, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [r, e, t, n, a],
                            ),
                        ];
                    };
                var vt = n(2056);
                const Ct = u().memo(function ({ className: e, children: t }) {
                        const n = ft(ut.SkillOrderTooltip, ot.SetupView),
                            a = n[0],
                            s = n[1];
                        return u().createElement(
                            vt.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: a,
                                onMouseLeave: s,
                            },
                            u().createElement('div', { className: e }, t),
                        );
                    }),
                    At = 'SlotDivider_base_60',
                    Dt = () => u().createElement('div', { className: At });
                var St = n(3267),
                    Ft = n(8253),
                    Bt = n(3141);
                const yt = (e) => {
                    const t = (0, o.useRef)(-1),
                        n = (0, o.useCallback)(
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
                    return (0, o.useEffect)(() => () => clearTimeout(t.current), []), n;
                };
                var wt = n(8526),
                    kt = n(5521);
                const Tt = 'Grabber_base_cf',
                    xt = 'Grabber_base__enabled_b0',
                    It = 'Grabber_base__waitingUpdate_1d',
                    Nt = 'Grabber_base__updating_f1',
                    Lt = 'Grabber_base__active_71',
                    Rt = 'Grabber_base__exit_1f',
                    Mt = 'Grabber_base__showAnimation_d9',
                    Ot = u().memo(
                        ({
                            children: e,
                            id: t,
                            containerRef: n,
                            isEnabled: a = !0,
                            onClick: s,
                            forceCenterX: r,
                            isUpdateAvailable: l,
                            handleAction: _,
                            blockOnGrabIds: d = [],
                        }) => {
                            const m = g().mediaSize,
                                p = (0, o.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: t,
                                }),
                                b = (0, o.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                E = (0, o.useRef)(null),
                                h = (0, o.useState)(!1),
                                f = h[0],
                                v = h[1],
                                C = (0, o.useState)(0),
                                A = C[0],
                                D = C[1],
                                S = 0 !== r && a;
                            (0, o.useEffect)(() => {
                                if (((b.current.isValid = !1), t))
                                    return (0, w.v)(() => {
                                        const e = E.current,
                                            a = n.current;
                                        if (a && e) {
                                            const n = e.getBoundingClientRect(),
                                                s = a.getBoundingClientRect(),
                                                i = n.left + 0.5 * n.width;
                                            (b.current = {
                                                isValid: !0,
                                                minXRestriction: s.left,
                                                maxXRestriction: s.left + s.width,
                                                startX: n.left,
                                                startCenterX: i,
                                            }),
                                                _(Be.Ready, { dragId: t, currentCenterX: i });
                                        }
                                    });
                            }, [m]);
                            const F = (0, o.useCallback)(
                                    (e) => {
                                        (p.current.isDragActive = e),
                                            v(e),
                                            p.current.grabActivationPassed && !e && Ae(!1, d);
                                    },
                                    [d],
                                ),
                                B = (0, o.useCallback)(() => {
                                    _(Be.DragStart, { dragId: p.current.id }),
                                        (p.current.grabActivationPassed = !0),
                                        Ae(!0, d);
                                }, [_, d]),
                                y = (0, o.useCallback)((e) => {
                                    const t = p.current,
                                        n = b.current,
                                        a = n.startX,
                                        s = n.startCenterX,
                                        i = n.minXRestriction,
                                        r = n.maxXRestriction,
                                        o = s - a,
                                        u = e - t.clickCenterOffset;
                                    t.dropCenterX = ((e, t, n, a) => {
                                        const s = n + t,
                                            i = a - t;
                                        return e < s ? s : e > i ? i : e;
                                    })(u, o, i, r);
                                }, []),
                                k = (0, o.useCallback)(
                                    (e) => {
                                        const t = p.current,
                                            n = b.current;
                                        0 === e.button &&
                                            !t.isDragActive &&
                                            n.isValid &&
                                            a &&
                                            !l &&
                                            E.current &&
                                            ((t.actualX = e.clientX),
                                            (t.clickCenterOffset = t.actualX - n.startCenterX),
                                            F(!0));
                                    },
                                    [a, l, F],
                                ),
                                T = (0, o.useCallback)(() => {
                                    !s || (a && b.current.isValid) || s();
                                }, [a, s]),
                                x = (0, o.useCallback)(
                                    (e) => {
                                        const t = p.current;
                                        e.target === E.current &&
                                            t.grabActivationPassed &&
                                            ((t.grabActivationPassed = !1),
                                            setTimeout(() => _(Be.DropExit, { dragId: t.id })));
                                    },
                                    [_],
                                );
                            (0, wt.gd)(kt.n.ESCAPE, () => F(!1)),
                                (0, o.useEffect)(() => {
                                    a && r && D(0);
                                }, [r, a]);
                            const I = !f && p.current.grabActivationPassed;
                            (0, o.useEffect)(() => {
                                p.current.id = t;
                            }, [t]),
                                (0, o.useEffect)(() => {
                                    I && _(Be.Drop, { dragId: p.current.id, currentCenterX: p.current.dropCenterX });
                                }, [I, _]),
                                (0, o.useEffect)(() => {
                                    const e = E.current;
                                    if (S && e)
                                        return (
                                            e.addEventListener('transitionend', x),
                                            () => {
                                                e.removeEventListener('transitionend', x);
                                            }
                                        );
                                }, [S, x]),
                                (0, o.useEffect)(() => {
                                    if (a && f && p.current.id) {
                                        const e = i.O.client.events.mouse.up(([e, t]) => {
                                                if ('outside' === t) return F(!1);
                                                const n = p.current,
                                                    a = e.clientX;
                                                a === n.actualX && 0 === e.button && !p.current.grabActivationPassed
                                                    ? s && s()
                                                    : p.current.grabActivationPassed && y(a),
                                                    p.current.isDragActive && F(!1);
                                            }),
                                            t = i.O.client.events.mouse.move(([e]) => {
                                                const t = p.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                                const n = e.clientX,
                                                    a = t.grabActivationPassed;
                                                !a && B(),
                                                    n !== t.actualX &&
                                                        ((t.actualX = n),
                                                        y(n),
                                                        a &&
                                                            _(Be.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                        D(t.dropCenterX - b.current.startCenterX));
                                            });
                                        return () => {
                                            t(), e();
                                        };
                                    }
                                }, [B, _, f, a, s, F, y]);
                            const N = (0, o.useMemo)(
                                    () => (r ? { left: r - b.current.startCenterX } : { left: A }),
                                    [A, r],
                                ),
                                L = a ? c()(Tt, xt, f && Lt, I && Rt, S && It, r && Nt) : c()(Tt, r && Mt);
                            return u().createElement(
                                'div',
                                { id: t, ref: E, onClick: T, onMouseDown: k, className: L, style: N },
                                e,
                            );
                        },
                    );
                let Pt;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(Pt || (Pt = {}));
                const Ht = 'KeyLabel_base_ec',
                    $t = 'KeyLabel_base__current_c2',
                    Wt = 'KeyLabel_base__next_fa',
                    zt = ({ text: e, show: t, panelType: n, shellState: a }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const s = c()(Ht, a === Pt.Current && $t, a === Pt.Next && Wt);
                        return u().createElement(
                            'div',
                            { className: s },
                            u().createElement(Ve, { isTruncated: !0, text: e, show: t, panelType: n }),
                        );
                    };
                var Gt = n(7078);
                const Xt = ({ children: e, slotType: t, slotId: n, isEnabled: a = !0 }) => {
                        const s = (0, o.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return u().createElement(Gt.t, { isEnabled: a, args: s }, u().createElement('div', null, e));
                    },
                    Yt = 'Close_base_f3',
                    jt = 'Close_base__invisible_0e',
                    Ut = 'Close_base__shown_a2',
                    Vt = 'Close_base__hover_6d',
                    Zt = 'Close_base__down_2b',
                    qt = (0, o.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const i = (0, o.useState)(!1),
                                r = i[0],
                                l = i[1],
                                _ = (0, o.useState)(!1),
                                d = _[0],
                                m = _[1],
                                p = (0, o.useState)(!1),
                                b = p[0],
                                E = p[1],
                                g = (0, o.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                h = (0, o.useCallback)(() => {
                                    m(!0), a && (0, fe.G)(a);
                                }, [a]),
                                f = (0, o.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, fe.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        E(!0);
                                    }),
                                [],
                            );
                            const A = c()(Yt, !b && jt, b && t && Ut, r && Zt, d && Vt);
                            return u().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: f,
                                onMouseDown: v,
                                onMouseUp: C,
                                className: A,
                                onClick: g,
                            });
                        },
                    ),
                    Kt = 'Slot_base_3a',
                    Jt = 'Slot_label_e6',
                    Qt = 'Slot_close_bb',
                    en = 'Slot_disabled_5d',
                    tn = 'Slot_shadow_a7',
                    nn = 'Slot_category_2c';
                var an = n(1641);
                const sn = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: r,
                    }) => {
                        const u = (0, o.useCallback)(() => {
                                (0, I.c9)(I.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    fe.$.playYes();
                            }, [s, t, n, a]),
                            l = (0, o.useCallback)(() => {
                                (0, I.c9)(I.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, o.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === an.t.RIGHT)(e) && u();
                                },
                                [r, u],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, o.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    rn = ['children'];
                function on() {
                    return (
                        (on =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        on.apply(this, arguments)
                    );
                }
                const un = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, rn);
                    return u().createElement(
                        sn,
                        on({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var ln = n(5918);
                const cn = u().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: i,
                            imageSource: r,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            isBootCamp: d,
                            contextMenuDisabled: m,
                            isSetupSwitching: p,
                            children: b,
                        }) => {
                            const E = (0, o.useMemo)(
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
                            return u().createElement(
                                ln.y,
                                {
                                    uniqueKey: e,
                                    isEmpty: l,
                                    slotIndex: c,
                                    slotType: _,
                                    imageSource: r,
                                    itemInstalledSetupIdx: n,
                                },
                                u().createElement(
                                    un,
                                    { isEnabled: !(p || m || i || l || d), args: E },
                                    u().createElement('div', null, b),
                                ),
                            );
                        },
                    ),
                    _n = ({
                        id: e,
                        intCD: t,
                        slotType: n,
                        imageSource: a,
                        isInstalled: s,
                        itemInstalledSetupIdx: i,
                        isMountedMoreThanOne: r,
                        overlayType: l,
                        keyName: c,
                        slotIndex: _,
                        level: d,
                        isBootCamp: m,
                        isSelected: p,
                        isSetupSwitching: b,
                        isSectionSelected: E,
                        withAttention: g,
                        onActiveSlotChanged: h,
                        onSlotSelected: f,
                        onActiveSlotRefChanged: v,
                        onSlotClear: C,
                        panelType: A,
                        isDisabled: D = !1,
                        isBorderActive: S,
                        isIncompatible: F = !1,
                        grabberId: B,
                        containerRef: y,
                        activeDragId: k,
                        handleGrabberAction: T,
                        forceLeftUpdate: x,
                        potentialDropId: I,
                        blockOnGrabIds: N,
                        categoryImgSource: L,
                        contextMenuDisabled: R,
                    }) => {
                        const M = A === de.Setup,
                            O = !Ee(A),
                            P = A === de.Compare,
                            H = M && E && O,
                            $ = (0, o.useRef)(!1),
                            W = (0, o.useRef)(null),
                            z = -1 === t;
                        (0, o.useEffect)(() => {
                            if (!$.current && E && p)
                                return (0, w.v)(() => {
                                    h && h(W, n, e), ($.current = !0);
                                });
                            $.current = !0;
                        }, [e, E, p, h, n]),
                            (0, o.useEffect)(() => {
                                p && v(W);
                            }, [p, v]);
                        const G = (0, o.useCallback)(() => (!p && O && !b && f(n, e), 500), [e, O, p, b, f, n]),
                            X = yt(G),
                            Y = (0, o.useCallback)(() => {
                                D || X('');
                            }, [X, D]),
                            j = (0, o.useCallback)(() => {
                                !p && !k && !D && fe.$.playHighlight();
                            }, [p, k, D]);
                        (0, o.useEffect)(() => {
                            I && fe.$.playHighlight();
                        }, [I]);
                        const U = (0, o.useCallback)(() => {
                                null == C || C(e, n);
                            }, [e, C, n]),
                            V = M && !s,
                            Z = Boolean(B && I === B),
                            q = B && (H || P),
                            K = `${n}-slot-${e}`,
                            J = L && L.length > 0,
                            Q = J ? { backgroundImage: `url(${L})` } : {},
                            ee = {
                                id: B,
                                containerRef: y,
                                isEnabled: !z,
                                onClick: Y,
                                isUpdateAvailable: Boolean(k),
                                handleAction: T,
                                forceCenterX: x,
                                blockOnGrabIds: N,
                            },
                            te = {
                                isEmpty: z,
                                intCD: t,
                                slotType: n,
                                slotIndex: _,
                                imageSource: a,
                                isBootCamp: m,
                                isDisabled: D,
                                isInstalled: s,
                                id: e,
                                itemInstalledSetupIdx: i,
                                isMountedMoreThanOne: r,
                                contextMenuDisabled: R,
                                isSetupSwitching: b,
                            };
                        return u().createElement(
                            'div',
                            { className: Kt, onMouseEnter: j, id: K },
                            (E || P) &&
                                !s &&
                                u().createElement(
                                    'div',
                                    { className: Qt },
                                    u().createElement(qt, { id: `close-${K}`, show: !k, onClick: U }),
                                ),
                            u().createElement(
                                Xt,
                                { slotType: n, slotId: e, isEnabled: !k && be(A) },
                                u().createElement(
                                    'div',
                                    { ref: W },
                                    u().createElement(
                                        Ft.W,
                                        {
                                            activeDragId: k,
                                            slotType: n,
                                            isSelected: p,
                                            isBorderActive: Boolean(S),
                                            panelType: A,
                                            isDisabled: D,
                                            isPotentialDrop: Z,
                                            onClick: q ? void 0 : Y,
                                        },
                                        O &&
                                            u().createElement(
                                                'div',
                                                { className: Jt },
                                                u().createElement(zt, { text: c, show: Boolean(E), panelType: A }),
                                            ),
                                        u().createElement(
                                            St.J,
                                            { when: Boolean(q), wrapper: Ot, withProps: ee },
                                            u().createElement(
                                                St.J,
                                                { when: O, wrapper: cn, withProps: te },
                                                u().createElement(Bt.c, {
                                                    imageSource: a,
                                                    isIncompatible: F,
                                                    overlayType: l,
                                                    level: d,
                                                    isTemporary: V,
                                                    withAttention: g,
                                                }),
                                            ),
                                        ),
                                        J &&
                                            u().createElement(
                                                u().Fragment,
                                                null,
                                                u().createElement('span', { className: tn }),
                                                u().createElement('span', { className: nn, style: Q }),
                                            ),
                                        D && u().createElement('div', { className: en }),
                                    ),
                                ),
                            ),
                        );
                    },
                    dn = 'BattleAbilitySlot_base_74',
                    mn = 'BattleAbilitySlot_rank_01',
                    pn = ['rank'];
                const bn = (0, o.memo)((e) => {
                    let t = e.rank,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, pn);
                    const a = (0, o.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                        s = c()(dn);
                    return u().createElement(
                        'div',
                        { className: s },
                        u().createElement(_n, n),
                        t && u().createElement('div', { className: mn, style: a }),
                    );
                });
                var En = n(4814);
                const gn = 'OptDeviceSlot_base_14',
                    hn = 'OptDeviceSlot_specializations_c3',
                    fn = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const vn = (e) => {
                        let t = e.specializations,
                            n = e.activeSpecsMask,
                            a = e.isChangeSetupIndex,
                            s = e.isDynamic,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, fn);
                        const r = $('model.ammunitionPanel', H.None).onSpecializationSelect,
                            o = i.panelType === de.Setup || i.panelType === de.Compare,
                            l = !Ee(i.panelType);
                        return u().createElement(
                            'div',
                            { className: c()(gn, t.length && !s && !a && 'specializationsSlot') },
                            l &&
                                u().createElement(
                                    'div',
                                    { className: hn },
                                    u().createElement(En.G, {
                                        specializations: t,
                                        isDynamic: s,
                                        activeSpecsMask: n,
                                        isSpecializationActive: o,
                                        onSpecializationClick: (e) => {
                                            r({ slotId: i.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            u().createElement(_n, i),
                        );
                    },
                    Cn = {
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
                    An = ({ id: e, isSelected: t, isLocked: n, onSlotSelected: a, panelType: s }) => {
                        const i = ge.yZ,
                            r = (0, o.useCallback)(() => {
                                a(i, e);
                            }, [e, a, i]),
                            l = c()(Cn.base, Cn[`base__${s}`], n && Cn.base__disabled, t && Cn.base__toggle),
                            _ = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return u().createElement(
                            Xt,
                            { slotType: i, slotId: e },
                            u().createElement(
                                'div',
                                { id: m, className: l, onClick: r, onMouseEnter: fe.$.playHighlight },
                                t && u().createElement('div', { className: Cn.glow }),
                                u().createElement('div', { className: Cn.image, style: _ }),
                                u().createElement('div', { className: Cn.toggle, style: d }),
                            ),
                        );
                    },
                    Dn = ['value', 'sectionType'];
                function Sn() {
                    return (
                        (Sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Sn.apply(this, arguments)
                    );
                }
                const Fn = (e) => {
                        let t = e.value,
                            n = e.sectionType,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, Dn);
                        switch (n) {
                            case ge.zn: {
                                const e = t;
                                return u().createElement(
                                    vn,
                                    Sn({}, e, a, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case ge.yZ: {
                                const e = t;
                                return u().createElement(An, Sn({}, a, e));
                            }
                            case ge.YN: {
                                const e = t;
                                return u().createElement(bn, Sn({}, a, e));
                            }
                            default:
                                return u().createElement(_n, Sn({}, a, t));
                        }
                    },
                    Bn = 'Slots_base_27',
                    yn = ({
                        slots: e,
                        sectionType: t,
                        panelType: n,
                        isBorderActive: a,
                        onActiveSlotChanged: s,
                        isDisabled: i,
                        isBootCamp: r,
                        selectedSection: l,
                        selectedSlot: _,
                        syncInitiator: d,
                        blockOnGrabIds: m,
                        isChangeSetupIndex: p,
                        setIsExitBlocked: b,
                    }) => {
                        const E = (0, o.useRef)(null),
                            g = (0, o.useRef)(null),
                            h = $('model.ammunitionPanel', H.None),
                            f = h.onSectionSelect,
                            v = h.onDragDropSwap,
                            C = h.onSlotClear,
                            A = (0, o.useCallback)(
                                (e, n) => {
                                    v({
                                        sectionType: t,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(n[n.length - 1]),
                                    });
                                },
                                [v, t],
                            ),
                            D = l === t,
                            S = D ? _ : -1,
                            F = `${t}-${e.length}slots`,
                            B = ke({
                                baseId: F,
                                slotsLength: e.length,
                                handleSwap: A,
                                setIsExitBlocked: b,
                                syncInitiator: d,
                            }),
                            y = B.handleGrabberAction,
                            w = B.dragState,
                            k = B.getForceCenterX;
                        (0, o.useEffect)(() => {
                            D && -1 !== S && E.current && s(E, l, S);
                        }, [s, D, l, S]);
                        const T = (e, t) => {
                                if ((i || fe.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                f({ selectedSlot: t, selectedSection: e });
                            },
                            x = (e) => {
                                E.current = e ? e.current : null;
                            },
                            I = (e, t) => {
                                C({ slotId: e, sectionType: t });
                            };
                        return u().createElement(
                            'div',
                            { id: F, ref: g, className: c()(Bn, t) },
                            V.v(e, (l, c) => {
                                const _ = t === ge.YN,
                                    d = !_ && e.length > 1 ? `${F}-${c}` : '';
                                return u().createElement(
                                    o.Fragment,
                                    { key: `${l.id}-${c}` },
                                    c > 0 && u().createElement(Dt, null),
                                    u().createElement(Fn, {
                                        value: l,
                                        sectionType: t,
                                        panelType: n,
                                        isSelected: S === l.id,
                                        isSectionSelected: D,
                                        isDisabled: i,
                                        isBootCamp: r,
                                        isBorderActive: a,
                                        contextMenuDisabled: _,
                                        slotType: t,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: x,
                                        onSlotClear: I,
                                        slotIndex: c,
                                        grabberId: d,
                                        containerRef: g,
                                        forceLeftUpdate: k(d),
                                        activeDragId: w.activeDragId,
                                        handleGrabberAction: y,
                                        potentialDropId: w.potentialDropId,
                                        blockOnGrabIds: m,
                                        isSetupSwitching: p,
                                        isChangeSetupIndex: p,
                                    }),
                                );
                            }),
                        );
                    },
                    wn = ({
                        type: e,
                        slots: t,
                        newItemsCount: n,
                        isDisabled: a,
                        panelType: s,
                        onActiveSlotChanged: i,
                        isBorderActive: r,
                        isBootCamp: l = !0,
                        selectedSection: _,
                        selectedSlot: d,
                        syncInitiator: m,
                        sectionsIds: p,
                        onBootcampPanelAppear: b,
                        vehicle: E,
                        vehicleType: g,
                        isSetupSwitching: h,
                        isChangeSetupIndex: f,
                        classMix: v,
                        setIsExitBlocked: C,
                    }) => {
                        const A = (0, o.useRef)(null),
                            D = (0, o.useState)(l),
                            S = D[0],
                            F = D[1],
                            B = (0, o.useMemo)(
                                () =>
                                    s === de.Setup
                                        ? e === ge.mH
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === ge.mH
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [s, e],
                            ),
                            y = ((e, t) => {
                                const n = $('tutorialModel.effects.items').filter((n) => {
                                    if (!n) return !1;
                                    const a = n.value,
                                        s = window.__featureId.toString();
                                    return a.componentId === e && a.type === t && a.viewId === s;
                                });
                                if (0 === n.length) return null;
                                const a = Object.assign({}, n[0].value);
                                return {
                                    effect: a,
                                    completeEffect: () => {
                                        tutorialModel.onEffectCompleted({
                                            componentId: e,
                                            viewId: window.__featureId.toFixed(0),
                                            effectType: t,
                                            effectBuilder: a.builder,
                                        }),
                                            t === Me && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(B, Me);
                        (0, o.useEffect)(
                            () => (
                                null !== y && F(!y.effect.visible),
                                (0, w.v)(() => {
                                    null !== y && y.completeEffect();
                                })
                            ),
                            [y, e],
                        );
                        const k = X();
                        (0, o.useEffect)(() => {
                            k && (k.freeze(), k.resize());
                        }, [t.length, k, B, S]);
                        const T = $e('AmmunitionPanelBattleAbilities', Pe);
                        (0, o.useEffect)(() => {
                            null == T || T.runTrigger(!0);
                        }, [T]);
                        const x = _ === e,
                            I = we(e, p),
                            N = I.selfId,
                            L = I.blockOnGrabIds;
                        (0, o.useEffect)(() => {
                            s === de.Hangar && F(l);
                        }, [s, l]),
                            (0, o.useEffect)(() => {
                                if (l && !S && b)
                                    return (0, w.v)(() => {
                                        b(), k && k.resize();
                                    });
                            }, [S, l, b, k]);
                        const M = m >= 0 && V.G(t, (e) => e.intCD > 0),
                            O = c()(
                                qe,
                                v,
                                S && Ke,
                                x && 'sectionSelected',
                                t.length > 1 && 'multiSlot',
                                M && 'existFilledSlots',
                            ),
                            P = ((E && E.length > 0) || (g && g.length > 0)) && s !== de.Battle && s !== de.Respawn,
                            H = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            W = (0, o.useMemo)(
                                () => ({ icon: u().createElement('span', { className: nt, style: H }), vehicle: E }),
                                [H, E],
                            ),
                            z = t.length > 0 && s !== de.Compare && s !== de.Battle && s !== de.Respawn && t.length > 0,
                            G = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof G)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return u().createElement(
                            'div',
                            { id: h ? Ze : N, ref: A, className: O },
                            P &&
                                u().createElement(
                                    Ct,
                                    { className: et },
                                    u().createElement(Re, {
                                        classMix: tt,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: W,
                                    }),
                                ),
                            z &&
                                u().createElement(
                                    'div',
                                    { className: Je },
                                    u().createElement(Ve, { text: G, parentRef: A, show: !x, panelType: s }),
                                ),
                            u().createElement(yn, {
                                slots: t,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: r,
                                onActiveSlotChanged: i,
                                isDisabled: a,
                                isBootCamp: l,
                                syncInitiator: m,
                                selectedSection: _,
                                selectedSlot: d,
                                blockOnGrabIds: L,
                                isChangeSetupIndex: f,
                                setIsExitBlocked: C,
                            }),
                            Boolean(n) &&
                                u().createElement(
                                    'div',
                                    { className: Qe },
                                    u().createElement(Ne, { value: n, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    };
                var kn = n(8598);
                const Tn = 'ShellsSlot_base_05',
                    xn = 'ShellsSlot_shell_ab',
                    In = 'ShellsSlot_shell__grabbing_98',
                    Nn = 'ShellsSlot_shell__active_7e',
                    Ln = 'ShellsSlot_shell__potential_30',
                    Rn = 'ShellsSlot_label_da',
                    Mn = 'ShellsSlot_image_3f',
                    On = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isSelected: i,
                        keyName: r,
                        panelType: l,
                        intCD: _,
                        slotIndex: d,
                        grabberId: m,
                        isSetupSwitching: p,
                        containerRef: b,
                        activeDragId: E,
                        handleGrabberAction: g,
                        forceLeftUpdate: h,
                        potentialDropId: f,
                        blockOnGrabIds: v,
                        shellState: C,
                        isDisabled: A,
                    }) => {
                        const D = !Ee(l),
                            S = (0, o.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            F = m && m === f,
                            B = m && m === E,
                            y = (0, o.useMemo)(() => {
                                const a = { slotType: ge.g9, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [_, e, t, n]),
                            w = y[0],
                            k = y[1],
                            T = c()(xn, !E && D && !A && Nn, B && In, !B && F && Ln),
                            x = (0, o.useMemo)(
                                () => ({
                                    id: m,
                                    containerRef: b,
                                    isEnabled: Boolean(m) && i,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: g,
                                    forceCenterX: h,
                                    blockOnGrabIds: v,
                                }),
                                [E, v, b, h, m, g, i],
                            ),
                            I = (0, o.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: ge.g9, imageSource: null }),
                                [_, d],
                            );
                        return u().createElement(
                            un,
                            { isEnabled: D && !p && !A, args: k },
                            u().createElement(
                                Gt.t,
                                { args: w, isEnabled: !E && be(l) },
                                u().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: Tn },
                                    r &&
                                        u().createElement(
                                            'div',
                                            { className: Rn },
                                            u().createElement(zt, {
                                                text: r,
                                                show: i || l === de.Battle || l === de.Respawn,
                                                shellState: C,
                                                panelType: l,
                                            }),
                                        ),
                                    u().createElement(
                                        'div',
                                        { className: T },
                                        u().createElement(
                                            St.J,
                                            { when: D, wrapper: Ot, withProps: x },
                                            u().createElement(
                                                St.J,
                                                { when: D, wrapper: ln.y, withProps: I },
                                                u().createElement('div', { className: Mn, style: S }),
                                                u().createElement(kn.X, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Pn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Hn = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a }) => {
                        const s = (0, o.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            i = c()(Pn.slot, !t && Pn.slot__active, Pn.slot__compare),
                            r = (0, o.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            l = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return u().createElement(
                            Xt,
                            { slotType: ge.WI, slotId: e },
                            u().createElement(
                                'div',
                                { className: Pn.base },
                                u().createElement(
                                    'div',
                                    { className: i, onClick: s, id: `shell-slot-${e}` },
                                    t && u().createElement('div', { className: Pn.glow }),
                                    u().createElement('div', { className: Pn.image, style: r }),
                                    u().createElement('div', { className: Pn.toggle, style: l }),
                                ),
                            ),
                        );
                    },
                    $n = 'Shells_base_f9',
                    Wn = 'Shells_shell_3f',
                    zn = 'Shells_shell__compressed_2e';
                function Gn() {
                    return (
                        (Gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Gn.apply(this, arguments)
                    );
                }
                const Xn = ({
                        shells: e,
                        panelType: t,
                        onSelected: n,
                        isCompare: a,
                        isSelected: s,
                        syncInitiator: i,
                        blockOnGrabIds: r,
                        isDisabled: l,
                        isSetupSwitching: _,
                        setIsExitBlocked: d,
                    }) => {
                        const m = $('model.ammunitionPanel', H.None),
                            p = m.onSectionSelect,
                            b = m.onDragDropSwap,
                            E = (0, o.useRef)(!1),
                            g = (0, o.useRef)(null),
                            h = a ? ge.WI : ge.g9,
                            f = `${h}-${e.length}shells`,
                            v = (0, o.useCallback)(
                                (e) => {
                                    p({ selectedSlot: e, selectedSection: h }), fe.$.playClick();
                                },
                                [p, h],
                            ),
                            C = (0, o.useCallback)(() => {
                                s || a || l || _ || v(0);
                            }, [s, a, _, l, v]),
                            A = (0, o.useCallback)(
                                (e, t) => {
                                    b({
                                        sectionType: h,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [b, h],
                            ),
                            D = ke({
                                baseId: f,
                                slotsLength: e.length,
                                handleSwap: A,
                                setIsExitBlocked: d,
                                syncInitiator: i,
                            }),
                            S = D.handleGrabberAction,
                            F = D.dragState,
                            B = D.getForceCenterX;
                        return (
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        E.current = !0;
                                    }),
                                [],
                            ),
                            (0, o.useEffect)(() => {
                                if (s && t === de.Setup) {
                                    if (!E.current)
                                        return (0, w.v)(() => {
                                            n();
                                        });
                                    n();
                                }
                            }, [s, t, n]),
                            u().createElement(
                                'div',
                                {
                                    id: f,
                                    ref: g,
                                    className: $n,
                                    onClick: C,
                                    onMouseEnter: () => {
                                        l || fe.$.playHighlight();
                                    },
                                },
                                V.v(e, (n, i) => {
                                    if (me(n)) return null;
                                    const o = !a && e.length > 1 ? `${f}-${n.id}` : '';
                                    return u().createElement(
                                        'div',
                                        { key: n.id, className: c()(Wn, !a && 0 !== i && zn) },
                                        a
                                            ? u().createElement(Hn, Gn({}, n, { onSlotSelected: v }))
                                            : u().createElement(
                                                  On,
                                                  Gn({}, n, {
                                                      slotIndex: i,
                                                      isSetupSwitching: _,
                                                      isSelected: s,
                                                      panelType: t,
                                                      grabberId: o,
                                                      containerRef: g,
                                                      forceLeftUpdate: B(o),
                                                      activeDragId: F.activeDragId,
                                                      handleGrabberAction: S,
                                                      potentialDropId: F.potentialDropId,
                                                      blockOnGrabIds: r,
                                                      isDisabled: l,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    Yn = {
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
                    jn = [de.Hangar, de.Battle, de.Prebattle, de.Respawn],
                    Un = ({
                        slots: e,
                        ammoNotFull: t,
                        type: n,
                        sectionsIds: a,
                        panelType: s,
                        onActiveSlotChanged: i,
                        isDisabled: r,
                        isBorderActive: l,
                        selectedSection: _,
                        syncInitiator: d,
                        classMix: m,
                        isSetupSwitching: p,
                        setIsExitBlocked: b,
                        newItemsCount: E,
                    }) => {
                        const g = (0, o.useRef)(null),
                            h = s === de.Compare,
                            f = _ === n,
                            v = (0, o.useCallback)(() => {
                                i(g, _, 0);
                            }, [i, _]),
                            C = we(n, a),
                            A = C.selfId,
                            D = C.blockOnGrabIds,
                            S = ((e) => jn.includes(e))(s) && !r && t,
                            F = V.hX(e, (e) => Boolean(e) && !me(e)).length,
                            B = (0, o.useMemo)(() => {
                                if (!S) return null;
                                const e = c()(Yn.border, 2 === F && Yn.border__double, 3 === F && Yn.border__triple);
                                return u().createElement('div', { className: e });
                            }, [S, F]),
                            y = c()(
                                Yn.base,
                                m,
                                Yn[`base__${s}`],
                                !l && f && Yn.base__selected,
                                h && Yn.base__compare,
                                r && Yn.base__disabled,
                            ),
                            w = !h && s !== de.Battle && s !== de.Respawn;
                        return u().createElement(
                            'div',
                            { id: p ? Ze : A, className: y, ref: g },
                            S && u().createElement('div', { className: Yn.attention }),
                            w &&
                                u().createElement(
                                    'div',
                                    { className: Yn.label },
                                    u().createElement(Ve, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: g,
                                        show: !f,
                                        panelType: s,
                                    }),
                                ),
                            B,
                            u().createElement(Xn, {
                                shells: e,
                                panelType: s,
                                onSelected: v,
                                isSelected: f,
                                isCompare: h,
                                syncInitiator: d,
                                blockOnGrabIds: D,
                                isDisabled: r,
                                isSetupSwitching: p,
                                setIsExitBlocked: b,
                            }),
                            Boolean(E) &&
                                u().createElement(
                                    'div',
                                    { className: Yn.counter },
                                    u().createElement(Ne, { value: E, size: 'small', fadeInAnimation: !0 }),
                                ),
                            r && u().createElement('div', { className: Yn.disabled }),
                        );
                    },
                    Vn = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Zn() {
                    return (
                        (Zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Zn.apply(this, arguments)
                    );
                }
                const qn = ({
                        panelType: e,
                        isDisabled: t = !1,
                        onActiveSlotChanged: n,
                        isBorderActive: a,
                        isBootCamp: s = !1,
                        sections: i,
                        selectedSection: r,
                        selectedSlot: o,
                        syncInitiator: l,
                        ammoNotFull: _,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: m,
                        setIsExitBlocked: p,
                    }) => {
                        const b = U(['section'], Vn),
                            E = V.v(i, (e) => ye(e.type)),
                            g = {
                                panelType: e,
                                isDisabled: t,
                                onActiveSlotChanged: n,
                                isBorderActive: a,
                                selectedSection: r,
                                selectedSlot: o,
                                syncInitiator: l,
                                sectionsIds: E,
                                isChangeSetupIndex: m,
                                setIsExitBlocked: p,
                            };
                        return u().createElement(
                            'div',
                            { className: Vn.base },
                            V.v(i, (t, n) => {
                                if (!t.slots || !t.slots.length) return null;
                                const a = c()(
                                        b.section,
                                        0 !== n && Ee(e) && Vn.section__battle,
                                        0 === n && Vn.section__first,
                                    ),
                                    i = V.UI(t.slots, (e) => Object.assign({}, e));
                                if (t.type === ge.g9 || t.type === ge.WI) {
                                    const e = t;
                                    return u().createElement(
                                        Un,
                                        Zn({}, e, g, {
                                            isSetupSwitching: m,
                                            slots: i,
                                            key: `${t.name}${n}${t.slots.length}`,
                                            classMix: a,
                                            ammoNotFull: _,
                                        }),
                                    );
                                }
                                return u().createElement(
                                    wn,
                                    Zn({}, t, g, {
                                        isSetupSwitching: m,
                                        slots: i,
                                        key: `${t.name}${n}${t.slots.length}`,
                                        classMix: a,
                                        isBootCamp: s,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    Kn = 'KeyboardKey_base_57',
                    Jn = 'KeyboardKey_back_43',
                    Qn = u().memo(({ text: e }) =>
                        u().createElement('div', { className: Kn }, u().createElement('div', { className: Jn }, e)),
                    ),
                    ea = 'SetupSwitchHotkey_base_4c',
                    ta = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    na = 'SetupSwitchHotkey_plusWrapper_f0',
                    aa = 'SetupSwitchHotkey_plus_f0',
                    sa = 'SetupSwitchHotkey_plus__horizontal_e0',
                    ia = 'SetupSwitchHotkey_plus__vertical_5b',
                    ra = u().memo(({ hotKeys: e }) =>
                        u().createElement(
                            'div',
                            { className: ea },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? u().createElement(Qn, { key: t, text: n })
                                    : u().createElement(
                                          'div',
                                          { key: t, className: ta },
                                          u().createElement(
                                              'div',
                                              { className: na },
                                              u().createElement('div', { className: `${aa} ${sa}` }),
                                              u().createElement('div', { className: `${aa} ${ia}` }),
                                          ),
                                          u().createElement(Qn, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    oa = {
                        base: 'Groups_base_de',
                        group: 'Groups_group_1f',
                        groupWrapper: 'Groups_groupWrapper_70',
                        switch: 'Groups_switch_98',
                        switch__battle: 'Groups_switch__battle_0f',
                        switch__small: 'Groups_switch__small_45',
                        switch__extraSmall: 'Groups_switch__extraSmall_b5',
                        prebattleSwitchIndicator: 'Groups_prebattleSwitchIndicator_da',
                        hint: 'Groups_hint_49',
                        hint__disabled: 'Groups_hint__disabled_17',
                    };
                function ua() {
                    return (
                        (ua =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ua.apply(this, arguments)
                    );
                }
                const la = (e) => e.setupSelector.hotKeys,
                    ca = (e) =>
                        Object.assign({}, e, {
                            slots: V.v(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const t = e;
                                    return Object.assign({}, t, {
                                        specializations: Object.assign({}, t.specializations, {
                                            specializations: V.v(t.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    _a = ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                        const i = U(['switch'], oa),
                            r = $('model'),
                            l = r.isDisabled,
                            _ = r.vehicleInfo,
                            d = $('model.ammunitionPanel'),
                            m = d.sectionGroups,
                            p = d.onChangeSetupIndex,
                            b = d.selectedSection,
                            E = d.selectedSlot,
                            g = d.syncInitiator,
                            h = d.ammoNotFull,
                            f = null == _ ? void 0 : _.vehicleName,
                            v =
                                ((C = m),
                                V.DZ(
                                    C,
                                    (e) => {
                                        var t;
                                        const n = V.yW(null != (t = null == e ? void 0 : e.sections) ? t : [], (e) => {
                                            var t, n;
                                            return (
                                                0 === (null != (t = null == (n = e.slots) ? void 0 : n.length) ? t : 0)
                                            );
                                        });
                                        return !(!e || n);
                                    },
                                    (e) =>
                                        Object.assign({}, e, {
                                            setupSelector: Object.assign({}, e.setupSelector, {
                                                states: V.UI(e.setupSelector.states, (e) => e),
                                            }),
                                            sections: V.v(e.sections, ca),
                                        }),
                                ));
                        var C;
                        (0, o.useEffect)(() => {
                            (e.panelType !== de.Hangar && e.panelType !== de.Setup) || !n || a(!1);
                        }, [n, e.panelType, a]),
                            (0, o.useEffect)(() => {
                                e.panelType === de.Respawn && a(!1);
                            }, [f, e.panelType, a]);
                        const A = (0, o.useCallback)(
                                (t) => {
                                    e.panelType === de.Respawn && a(!0), p(t);
                                },
                                [p, e.panelType, a],
                            ),
                            D = (e.panelType !== de.Respawn && n) || (e.panelType === de.Respawn && t);
                        return u().createElement(
                            'div',
                            { className: oa.base },
                            V.UI(v, (n) => {
                                const s = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${n.groupId}`,
                                );
                                return u().createElement(
                                    'div',
                                    { key: n.groupId, className: oa.group },
                                    u().createElement(
                                        'div',
                                        { className: oa.groupWrapper },
                                        u().createElement(
                                            _e,
                                            ua(
                                                { disabled: !D && Boolean(e.isBootCamp) },
                                                ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(n, a),
                                            ),
                                            u().createElement(
                                                qn,
                                                ua({}, e, {
                                                    sections: n.sections,
                                                    selectedSection: b,
                                                    selectedSlot: E,
                                                    syncInitiator: g,
                                                    ammoNotFull: h,
                                                    isChangeSetupIndex: t,
                                                }),
                                            ),
                                        ),
                                        n.setupSelector.isSwitchEnabled &&
                                            u().createElement(
                                                'div',
                                                { className: c()(i.switch, pe(e.panelType) && oa.switch__battle) },
                                                u().createElement(ie._, {
                                                    states: n.setupSelector.states,
                                                    onClick: A,
                                                    totalCount: n.totalCount,
                                                    currentIndex: n.currentIndex,
                                                    groupId: n.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                n.setupSelector.isPrebattleSwitchDisabled &&
                                                    u().createElement(
                                                        ne.i,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof s ? s : void 0,
                                                        },
                                                        u().createElement('div', {
                                                            className: oa.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((r = n),
                                    ((o = e.panelType) === de.Battle || o === de.Respawn) &&
                                        r.setupSelector.isSwitchEnabled &&
                                        la(r) &&
                                        u().createElement(
                                            'div',
                                            { className: c()(oa.hint, l && oa.hint__disabled) },
                                            u().createElement(ra, { hotKeys: la(n) }),
                                        )),
                                );
                                var r, o;
                            }),
                            s,
                        );
                    };
                function da() {
                    return (
                        (da =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        da.apply(this, arguments)
                    );
                }
                const ma = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = u().createElement('div', { className: n }, e);
                        if (t.header || t.body) return u().createElement(ne.i, t, a);
                        const s = t.contentId,
                            i = t.args,
                            r = null == i ? void 0 : i.contentId;
                        return s || r
                            ? u().createElement(vt.u, da({}, t, { contentId: s || r }), a)
                            : u().createElement(Gt.t, t, a);
                    },
                    pa = 'RoleSkillSlot_base_c4',
                    ba = 'RoleSkillSlot_icon_79',
                    Ea = ({
                        roleSkill: e,
                        roleName: t,
                        tooltipId: n,
                        tooltipHeader: a,
                        tooltipBody: s,
                        className: i,
                    }) => {
                        const r = (0, o.useMemo)(
                            () => ({
                                args: {
                                    tooltipId: n,
                                    roleSkill: e,
                                    roleName: t,
                                    header: a,
                                    body: s,
                                    hasHtmlContent: !0,
                                },
                                header: a,
                                body: s,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, a, s, n],
                        );
                        return u().createElement(
                            ma,
                            { tooltipArgs: r, className: c()(pa, i) },
                            u().createElement('div', {
                                className: ba,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    ga = 'SlotGlow_base_40',
                    ha = 'SlotGlow_glow_a9',
                    fa = 'SlotGlow_glow__shown_f2',
                    va = 'SlotGlow_glow__hidden_94',
                    Ca = (0, o.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, o.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            r = a[1],
                            l = (0, o.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, o.useEffect)(() => {
                            let n = l.current.initialized;
                            !n && e && ((n = !0), r({ offset: e, slotWidth: t })),
                                (l.current = { initialized: n, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, o.useEffect)(() => {
                                n || r(l.current);
                            }, [n]);
                        const _ = (0, o.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${i.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !n && s.offset === l.current.offset,
                            m = c()(ha, d ? fa : va);
                        return u().createElement(
                            'div',
                            { className: ga },
                            l.current.initialized && u().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    Aa = ({
                        show: e = !0,
                        isReady: t = !0,
                        panelType: n,
                        isBootCamp: a = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: r,
                        onResize: l,
                        setIsExitBlocked: _,
                    }) => {
                        const d = $('model.ammunitionPanel'),
                            m = d.isSetupSwitchInProgress,
                            p = d.syncInitiator,
                            b = d.sectionGroups,
                            E = d.onSectionResized,
                            g = V.u4(b, (e, t) => e + t.sections.length, 0),
                            h = $('model.roleSkillSlot'),
                            f = (0, o.useState)(!1),
                            v = f[0],
                            C = f[1],
                            A = (0, o.useRef)(!1),
                            D = (0, o.useState)({ slotWidth: 0, slotOffset: 0 }),
                            S = D[0],
                            F = D[1],
                            B = (0, o.useState)(!1),
                            y = B[0],
                            k = B[1],
                            T = (0, o.useRef)(null),
                            x = X(),
                            I = (0, o.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            N = (0, o.useCallback)(
                                (e, t) => {
                                    if (v || m || a || n !== de.Hangar) return;
                                    const s = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    E(Object.assign({ sectionType: e }, s)), x && (x.freeze(), x.resize());
                                },
                                [v, m, a, n, E, x],
                            ),
                            L = (0, o.useCallback)(
                                (e) => {
                                    N('main', e);
                                },
                                [N],
                            );
                        ((e, t, n, a = []) => {
                            const s = Z(
                                () =>
                                    (0, w.v)(() =>
                                        (0, w.v)(() => {
                                            if (e.current) {
                                                const n = e.current.getBoundingClientRect(),
                                                    a = {
                                                        width: i.O.view.pxToRem(n.width),
                                                        height: i.O.view.pxToRem(n.height),
                                                        offsetX: i.O.view.pxToRem(n.left),
                                                        offsetY: i.O.view.pxToRem(n.top),
                                                    };
                                                window.tutorialApi.updateComponents(), t(a);
                                            }
                                        }),
                                    ),
                                [t, e],
                            );
                            (0, o.useEffect)(() => {
                                s();
                            }, [s, ...a]),
                                (0, o.useEffect)(() => {
                                    if (n)
                                        return (
                                            engine.on('clientResized', s),
                                            () => {
                                                engine.off('clientResized', s);
                                            }
                                        );
                                }, [n, s]);
                        })(T, L, !0, [p]),
                            (0, o.useEffect)(() => () => L(), [L]);
                        const R = (0, o.useCallback)(() => {
                                k(!1);
                            }, []),
                            M = (0, o.useCallback)(() => {
                                if (I.current.element && T.current) {
                                    const e = I.current.element.getBoundingClientRect(),
                                        t = T.current.getBoundingClientRect();
                                    F({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, []),
                            O = (0, o.useCallback)(
                                (e, t, n) => {
                                    if (e.current && T.current) {
                                        const a = ((e, t, n) =>
                                            e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, I);
                                        (I.current.element = e.current),
                                            (I.current.slotIndex = n),
                                            (I.current.sectionIndex = t),
                                            A.current && a ? k(!0) : (A.current = !0),
                                            I.current.generation && M();
                                    }
                                },
                                [M],
                            ),
                            P = (0, o.useCallback)(
                                () =>
                                    (0, w.v)(() => {
                                        (I.current.generation += 1), M();
                                    }),
                                [I, M],
                            );
                        (0, o.useEffect)(() => (0, w.v)(P), [P]),
                            (0, o.useEffect)(
                                () => (
                                    engine.on('clientResized', P),
                                    () => {
                                        engine.off('clientResized', P);
                                    }
                                ),
                                [P],
                            );
                        const H = (0, o.useCallback)(() => {
                                (I.current.generation += 1),
                                    g >= I.current.generation && (null == r || r(), null == l || l()),
                                    M();
                            }, [r, l, g, M]),
                            W = S.slotWidth,
                            z = S.slotOffset,
                            G = c()(q.base, !t && q.base__locked, !e && q.base__hidden, s && q.base__disabled),
                            Y = c()(q.border, !y && q.border__hidden),
                            j = n === de.Setup || n === de.Compare,
                            K = {
                                panelType: n,
                                isDisabled: s,
                                onActiveSlotChanged: O,
                                isBorderActive: y,
                                isBootCamp: a,
                                onBootcampPanelAppear: H,
                                setIsExitBlocked: _,
                            };
                        (0, o.useEffect)(() => {
                            !1 === a && (null == l || l());
                        }, [l, h.roleSkill, a]);
                        const J = U(['roleSkillSlot'], q);
                        return u().createElement(
                            'div',
                            { ref: T, className: G },
                            j &&
                                u().createElement(Ca, {
                                    key: I.current.generation,
                                    slotOffset: z,
                                    slotWidth: W,
                                    isAnimationRunning: y,
                                }),
                            u().createElement(
                                _a,
                                { isSetupSwitching: m || v, sectionProps: K, isReady: t, setSetupSwitching: C },
                                h.roleSkill &&
                                    u().createElement(Ea, {
                                        roleSkill: h.roleSkill,
                                        roleName: h.roleName,
                                        tooltipId: h.tooltipId,
                                        tooltipHeader: h.tooltipHeader,
                                        tooltipBody: h.tooltipBody,
                                        className: c()(q.roleSkillSlot, q[`roleSkillSlot__${n}`], J.roleSkillSlot),
                                    }),
                            ),
                            j &&
                                u().createElement(
                                    'div',
                                    { className: Y },
                                    u().createElement(te, { slotWidth: W, slotOffset: z, onAnimationEnd: R }),
                                ),
                        );
                    };
                var Da = n(8089);
                const Sa = 'model.tankSetup.frontlineSetup',
                    Fa = {
                        base__standalone: 'InfoButton_base__standalone_e2',
                        base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                        hidden: 'InfoButton_hidden_7e',
                    };
                let Ba;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(Ba || (Ba = {}));
                const ya = u().memo(function ({ theme: e, className: t }) {
                    const n = $(Sa).showInfoPage,
                        a = (0, o.useCallback)(() => n(), [n]),
                        s = (0, o.useMemo)(() => ({ caption: c()(e === Ba.OnlyIcon && Fa.hidden) }), [e]);
                    return u().createElement(
                        'div',
                        { className: c()(Fa.base, Fa[`base__${e}`], t) },
                        u().createElement(Da.A, {
                            caption: e === Ba.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                            type: 'info',
                            side: 'left',
                            onClick: a,
                            classNames: s,
                        }),
                    );
                });
                var wa = n(1922),
                    ka = n(2262),
                    Ta = n(7208),
                    xa = n(8982);
                const Ia = {
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
                var Na = n(3457);
                const La = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let Ra, Ma;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(Ra || (Ra = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(Ma || (Ma = {}));
                const Oa = u().memo(function ({ value: e, className: t, theme: n, size: a }) {
                        return u().createElement(
                            'div',
                            { className: c()(La.base, La[`base__${n}`], La[`base__${a}`], t) },
                            u().createElement('div', { className: La.label }, e),
                            u().createElement('div', { className: La.icon }),
                        );
                    }),
                    Pa = u().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return u().createElement(
                            vt.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            u().createElement('div', null, n),
                        );
                    }),
                    Ha = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    $a = u().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const s = { pointsNeeded: e - (0, o.useContext)(po), isEnabled: !t };
                        return u().createElement(
                            'div',
                            { className: c()(Ha.base, t && Ha.base__isAvailable) },
                            u().createElement(
                                Pa,
                                s,
                                u().createElement(
                                    'div',
                                    { className: Ha.priceContainer },
                                    u().createElement(
                                        'div',
                                        { className: Ha.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    u().createElement(Oa, { value: e, theme: t ? Ma.Brown : Ma.Red, size: Ra.Big }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Ha.actions },
                                u().createElement(
                                    Pa,
                                    s,
                                    u().createElement(
                                        Na.u5,
                                        {
                                            size: Na.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: c()(Ha.purchaseButton, Ha.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                u().createElement(
                                    Na.u5,
                                    { size: Na.qE.medium, type: Na.L$.secondary, mixClass: Ha.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function Wa() {
                    return (
                        (Wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wa.apply(this, arguments)
                    );
                }
                const za = () => {
                        const e = (0, wa.GS)(),
                            t = (0, o.useContext)(po),
                            n = $(Sa),
                            a = n.isTypeSelected,
                            s = n.vehicleType,
                            i = n.onChangeApplyAbilitiesToTypeSettings,
                            r = n.onDealConfirmed,
                            l = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = $(`${Sa}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            E = m.canCancel,
                            g = (0, j.BN)(s),
                            h = (0, o.useCallback)(() => i(), [i]),
                            f = (0, o.useCallback)(() => r(), [r]),
                            v = (0, o.useCallback)(() => l(), [l]),
                            C = (0, o.useCallback)(() => d(), [d]),
                            A = c()(Ia.base, e && Ia[`base__${e}`]),
                            D = c()(Ia.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            S = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            F = (0, o.useMemo)(
                                () => ({
                                    icon: u().createElement('span', { className: Ia.vehicleIcon, style: S }),
                                    vehicle: R.strings.menu.classes.short.$dyn(g),
                                }),
                                [S, g],
                            ),
                            B = $e('ShowAbilitiesButton', He);
                        (0, o.useEffect)(() => {
                            B && B.runTrigger(!0);
                        }, [B]);
                        const y = $e('ApplyAbilitiesToTypeCheckbox', He);
                        (0, o.useEffect)(() => {
                            y && y.runTrigger(!0);
                        }, [y]);
                        const w = gt(rt, { item: ut.AbilitiesCheckboxTooltip, parentScreen: ot.SetupView }),
                            k = _ > 0,
                            T = !k && b;
                        return u().createElement(
                            'div',
                            { className: A },
                            T &&
                                u().createElement(
                                    'div',
                                    { className: D },
                                    u().createElement(
                                        ne.i,
                                        Wa(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(g) },
                                            w,
                                        ),
                                        u().createElement(
                                            'div',
                                            { className: Ia.checkBoxZone },
                                            u().createElement(
                                                ka.XZ,
                                                { isChecked: a, onChange: h, type: ka.Rh.main, size: ka.yB.medium },
                                                u().createElement(
                                                    'span',
                                                    { className: Ia.checkBoxLabel },
                                                    u().createElement(Re, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            u().createElement(
                                Ta.f,
                                { when: !0, canAccept: k || T },
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    k &&
                                        u().createElement($a, {
                                            price: _,
                                            isAvailable: t >= _,
                                            onPurchase: C,
                                            onCancel: v,
                                        }),
                                    T &&
                                        u().createElement(xa.Z, {
                                            applyBtnString: a ? ge.qZ : ge.k4,
                                            isDisabled: p,
                                            canCancel: E,
                                            onCancel: v,
                                            onConfirm: f,
                                        }),
                                ),
                            ),
                        );
                    },
                    Ga = (e, t, n) => (n < e ? e : n > t ? t : n);
                function Xa(e, t, n = []) {
                    const a = (0, o.useRef)(0),
                        s = (0, o.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, o.useEffect)(() => s, [s]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, o.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        s,
                    ];
                }
                function Ya(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ja(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return ja(e, t);
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
                function ja(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ua(e, t, n) {
                    const a = (0, o.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let s,
                                    i = !1,
                                    r = 0;
                                function o() {
                                    s && clearTimeout(s);
                                }
                                function u(...u) {
                                    const l = this,
                                        c = Date.now() - r;
                                    function _() {
                                        (r = Date.now()), n.apply(l, u);
                                    }
                                    i ||
                                        (a && !s && _(),
                                        o(),
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
                                    (u.cancel = function () {
                                        o(), (i = !0);
                                    }),
                                    u
                                );
                            })(n, e),
                        t,
                    );
                    return (0, o.useEffect)(() => a.cancel, [a]), a;
                }
                var Va = n(7030);
                let Za;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Za || (Za = {}));
                const qa = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ka = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const u = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                i = a[1];
                            return Ga(s, i, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? qa : c,
                                d = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                p = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        s = (e, ...n) => {
                                            for (var a, s = Ya(t(e).values()); !(a = s()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, o.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = Ua(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, Va.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), p.trigger('change', e), r && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                g = E[0],
                                h = E[1],
                                f = (0, o.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = g.scrollPosition.get(),
                                            i = (null != (a = g.scrollPosition.goal) ? a : 0) - s;
                                        return u(e, t * n + i + s);
                                    },
                                    [g.scrollPosition],
                                ),
                                v = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: u(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: u(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, g.scrollPosition],
                                ),
                                C = (0, o.useCallback)(
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
                                            i = f(t, e, a);
                                        v(i);
                                    },
                                    [v, f, _.step],
                                ),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            d.current && p.trigger('mouseWheel', e, g.scrollPosition, t(d.current));
                                    },
                                    [g.scrollPosition, C, p],
                                ),
                                D = Z(
                                    () =>
                                        (0, w.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (v(u(e, g.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [v, g.scrollPosition.goal],
                                ),
                                S = z(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = u(e, g.scrollPosition.goal);
                                    t !== g.scrollPosition.goal && v(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: u,
                                    handleMouseWheel: A,
                                    applyScroll: v,
                                    applyStepTo: C,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: g,
                                    recalculateContent: S,
                                    events: { on: p.on, off: p.off },
                                }),
                                [g.scrollPosition, v, C, p.off, p.on, S, A, h, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Ja = Ka({
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
                        getDirection: (e) => (e.deltaY > 1 ? Za.Next : Za.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Qa = 'HorizontalBar_base_49',
                    es = 'HorizontalBar_base__nonActive_82',
                    ts = 'HorizontalBar_leftButton_5f',
                    ns = 'HorizontalBar_rightButton_03',
                    as = 'HorizontalBar_track_0d',
                    ss = 'HorizontalBar_thumb_fd',
                    is = 'HorizontalBar_rail_32',
                    rs = 'disable',
                    os = { pending: !1, offset: 0 },
                    us = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ls = () => {},
                    cs = (e, t) => Math.max(20, e.offsetWidth * t),
                    _s = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = us, onDrag: a = ls }) => {
                        const s = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, o.useState)(os),
                            p = m[0],
                            b = m[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    b(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            g = () => {
                                const t = l.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    c = Ga(0, 1, o / (s - a)),
                                    d = (t.offsetWidth - cs(t, u)) * c;
                                (n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && r.current && l.current && _.current) {
                                            if (0 === e)
                                                return i.current.classList.add(rs), void r.current.classList.remove(rs);
                                            if (
                                                ((t = l.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(rs), void r.current.classList.add(rs);
                                            var t, n;
                                            i.current.classList.remove(rs), r.current.classList.remove(rs);
                                        }
                                    })(d);
                            },
                            h = z(() => {
                                (() => {
                                    const t = _.current,
                                        n = l.current,
                                        a = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && a && n)) return;
                                    const r = Math.min(1, a / i);
                                    (t.style.width = `${cs(n, r)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === r ? s.current.classList.add(es) : s.current.classList.remove(es));
                                })(),
                                    g();
                            });
                        (0, o.useEffect)(() => (0, w.v)(h)),
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        const t = () => {
                                            g();
                                        };
                                        let n = ls;
                                        const a = () => {
                                            n(), (n = (0, w.v)(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        var n;
                                        const s = e.contentRef.current;
                                        if (!s) return;
                                        const i = l.current,
                                            r = _.current;
                                        if (!s || !i || !r) return;
                                        const o = t.screenX - p.offset - i.getBoundingClientRect().x,
                                            u = (o / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: u });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), E(os);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, p.offset, p.pending, a, E]);
                        const f = Xa((t) => e.applyStepTo(t), d, [e]),
                            v = f[0],
                            C = f[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const A = (e) => {
                            e.target.classList.contains(rs) || (0, fe.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: c()(Qa, t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: c()(ts, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rs) ||
                                        0 !== e.button ||
                                        ((0, fe.G)('play'), v(Za.Next));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: A,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: c()(as, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, fe.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = _.current,
                                                        s = e.contentRef.current;
                                                    if (!a || !s) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Za.Prev : Za.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: A,
                                },
                                u().createElement('div', { ref: _, className: c()(ss, t.thumb) }),
                                u().createElement('div', { className: c()(is, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: c()(ns, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(rs) ||
                                        0 !== e.button ||
                                        ((0, fe.G)('play'), v(Za.Prev));
                                },
                                onMouseUp: C,
                                ref: r,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    ds = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ms = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: i,
                        scrollClassName: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(ds.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: c()(ds.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(ds.defaultScrollArea, s) },
                                u().createElement(ps, { className: r, api: m, classNames: i }, e),
                            ),
                            u().createElement(_s, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ps = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: c()(ds.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: c()(ds.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: c()(ds.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (ps.Bar = _s),
                    (ps.Default = ms),
                    (ps.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: c()(ds.base, t) },
                            u().createElement(
                                'div',
                                { className: c()(ds.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                u().createElement(
                                    'div',
                                    { className: c()(ds.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    ));
                const bs = Ka({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Za.Next : Za.Prev),
                    }),
                    Es = 'VerticalBar_base_f3',
                    gs = 'VerticalBar_base__nonActive_42',
                    hs = 'VerticalBar_topButton_d7',
                    fs = 'VerticalBar_bottomButton_06',
                    vs = 'VerticalBar_track_df',
                    Cs = 'VerticalBar_thumb_32',
                    As = 'VerticalBar_rail_43',
                    Ds = 'disable',
                    Ss = () => {},
                    Fs = { pending: !1, offset: 0 },
                    Bs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ys = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ws = (e, t) => Math.max(20, e.offsetHeight * t),
                    ks = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Bs, onDrag: a = Ss }) => {
                        const s = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, o.useState)(Fs),
                            p = m[0],
                            b = m[1],
                            E = (0, o.useCallback)(
                                (e) => {
                                    b(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            g = z(() => {
                                const t = _.current,
                                    n = l.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && n)) return;
                                const r = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${ws(n, r)}px`),
                                    t.classList.add(Cs),
                                    s.current &&
                                        (1 === r ? s.current.classList.add(gs) : s.current.classList.remove(gs)),
                                    r
                                );
                            }),
                            h = z(() => {
                                const t = l.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    c = Ga(0, 1, o / (s - a)),
                                    d = (t.offsetHeight - ws(t, u)) * c;
                                (n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && r.current && l.current && _.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Ds), void r.current.classList.remove(Ds);
                                            if (
                                                ((t = l.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ds), void r.current.classList.add(Ds);
                                            var t, n;
                                            i.current.classList.remove(Ds), r.current.classList.remove(Ds);
                                        }
                                    })(d);
                            }),
                            f = z(() => {
                                ys(e, () => {
                                    g(), h();
                                });
                            });
                        (0, o.useEffect)(() => (0, w.v)(f)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    ys(e, () => {
                                        h();
                                    });
                                };
                                let n = Ss;
                                const a = () => {
                                    n(), (n = (0, w.v)(f));
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
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        ys(e, (n) => {
                                            const s = l.current,
                                                i = _.current,
                                                r = e.getContainerSize();
                                            if (!s || !i || !r) return;
                                            const o = t.screenY - p.offset - s.getBoundingClientRect().y,
                                                u = (o / s.offsetHeight) * r;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: u });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), E(Fs);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, p.offset, p.pending, a, E]);
                        const v = Xa((t) => e.applyStepTo(t), d, [e]),
                            C = v[0],
                            A = v[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ds) || (0, fe.G)('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: c()(Es, t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: c()(hs, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ds) ||
                                        0 !== e.button ||
                                        ((0, fe.G)('play'), C(Za.Next));
                                },
                                ref: i,
                                onMouseEnter: D,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: c()(vs, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, fe.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        ys(e, (a) => {
                                                            if (!a) return;
                                                            const s = n(e),
                                                                i = e.clampPosition(a, a.scrollTop + s * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Za.Prev : Za.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                u().createElement('div', { ref: _, className: t.thumb }),
                                u().createElement('div', { className: c()(As, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: c()(fs, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ds) ||
                                        0 !== e.button ||
                                        ((0, fe.G)('play'), C(Za.Prev));
                                },
                                onMouseUp: A,
                                ref: r,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Ts = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    xs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: i,
                        scrollClassNames: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(Ts.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: c()(Ts.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(Ts.area, s) },
                                u().createElement(Is, { className: i, classNames: r, api: m }, e),
                            ),
                            u().createElement(ks, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    Is = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: c()(Ts.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: c()(Ts.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Is.Default = xs;
                const Ns = { Vertical: s, Horizontal: a },
                    Ls = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Rs = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Ms = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Os = (e) =>
                        Ms
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = Rs.length - 1; n >= 0; n--)
                                      for (; e >= Rs[n]; ) (t += Ls[n]), (e -= Rs[n]);
                                  return t;
                              })(e),
                    Ps = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__elite: 'TankName_type__elite_cc',
                        base__sizeBig: 'TankName_base__sizeBig_2b',
                        name: 'TankName_name_56',
                        base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Hs, $s;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Hs || (Hs = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })($s || ($s = {}));
                const Ws = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: s,
                        tags: i,
                        isPremiumIGR: r,
                        size: o = Hs.extraSmall,
                        type: l = $s.colored,
                        className: _,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const p = `${(0, j.BN)(a)}${e ? '_elite' : ''}`,
                            b = R.images.gui.maps.icons.vehicleTypes.big.$dyn(p);
                        return u().createElement(
                            'div',
                            {
                                className: c()(
                                    Ps.base,
                                    Ps[`base__size${(0, j.e)(o)}`],
                                    Ps[`base__type${(0, j.e)(l)}`],
                                    i && V.UI(i, (e) => Ps[`base__tag${(0, j.e)(e)}`]),
                                    _,
                                ),
                            },
                            u().createElement('div', { className: c()(Ps.level, null == d ? void 0 : d.level) }, Os(s)),
                            u().createElement('div', {
                                className: c()(Ps.type, e && Ps.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${b})` },
                            }),
                            r && u().createElement('div', { className: Ps.premiumIGR }),
                            u().createElement(
                                'div',
                                { className: c()(Ps.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    zs = 'Aside_base_a5',
                    Gs = 'Aside_content_24',
                    Xs = 'Aside_tankDetails_35',
                    Ys = 'Aside_description_f0',
                    js = 'Aside_title_6f',
                    Us = 'Aside_category_c0',
                    Vs = 'Aside_text_ca',
                    Zs = 'Aside_status_91',
                    qs = 'Aside_status__activated_4e',
                    Ks = 'CategoryTitle_base_f3',
                    Js = 'CategoryTitle_title_9d',
                    Qs = 'CategoryTitle_icon_48';
                let ei;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(ei || (ei = {}));
                const ti = (0, o.memo)(({ category: e, iconTheme: t = ei.Small, className: n }) => {
                        const a = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return u().createElement(
                            'div',
                            { className: c()(Ks, n) },
                            u().createElement('div', { className: Qs, style: a }),
                            u().createElement('div', { className: Js }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    ni = 'InfoIcon_base_83',
                    ai = 'InfoIcon_icon_47',
                    si = (0, o.memo)(({ item: e, className: t }) => {
                        const n = ft(e, ot.SetupView),
                            a = n[0],
                            s = n[1];
                        return u().createElement(
                            'div',
                            { className: c()(ni, t) },
                            u().createElement(
                                vt.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: s,
                                },
                                u().createElement('div', { className: ai }),
                            ),
                        );
                    }),
                    ii = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let ri;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(ri || (ri = {}));
                const oi = (0, o.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: s }) => {
                    const i = t + 1,
                        r = (0, o.useMemo)(() => Os(i), [i]),
                        l = ((e) => {
                            const t = pt(e, _t),
                                n = (0, o.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, mt(e));
                                    },
                                    [t],
                                );
                            return (e) => n(e);
                        })(rt),
                        _ = (0, o.useCallback)(() => {
                            a(t),
                                fe.$.playClick(),
                                l({
                                    item: ut.SkillLevelTab,
                                    action: lt.Click,
                                    parentScreen: ot.SetupView,
                                    info: String(i),
                                });
                        }, [t, i, a, l]),
                        d = (0, o.useCallback)(() => fe.$.playHighlight(), []);
                    return u().createElement(
                        'div',
                        { className: c()(ii.base, e && ii.base__active, s), onClick: _, onMouseEnter: d },
                        u().createElement('div', { className: ii.label }, r),
                        n !== ri.None && u().createElement('div', { className: c()(ii.arrow, ii[`arrow__${n}`]) }),
                    );
                });
                var ui = n(8045);
                const li = 'ExtendedText_base_71',
                    ci = 'ExtendedText_base__zeroPadding_25',
                    _i = 'ExtendedText_base__isTruncationAvailable_5b',
                    di = 'ExtendedText_truncated_97',
                    mi = 'ExtendedText_truncated__hide_31',
                    pi = 'ExtendedText_unTruncated_b8';
                let bi, Ei, gi;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(bi || (bi = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ei || (Ei = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(gi || (gi = {}));
                const hi = { [gi.NBSP]: bi.NoBreakSymbol, [gi.ZWNBSP]: bi.NoBreakSymbol, [gi.NEW_LINE]: bi.LineBreak },
                    fi = {
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
                    vi = 'renderers_noBreakWrapper_10',
                    Ci = 'renderers_lineBreak_b5',
                    Ai = 'renderers_newLine_bd',
                    Di = (e) => ({ color: `#${e}` }),
                    Si = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? fi[a]
                                ? u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: fi[a] },
                                      e,
                                  )
                                : u().createElement('span', { key: n, 'data-block-type': t.blockType, style: Di(a) }, e)
                            : u().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    Fi = {
                        [bi.Word]: Si,
                        [bi.NoBreakSymbol]: Si,
                        [bi.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            u().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: n }, e)),
                            ),
                        [bi.LineBreak]: ({ key: e }) =>
                            u().createElement('span', { key: e, 'data-block-type': bi.LineBreak, className: Ci }),
                        [bi.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement('span', { key: t, 'data-block-type': bi.NewLine, className: Ai }, e),
                        [bi.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': bi.NoBreakWrapper, className: vi },
                                e,
                            ),
                    },
                    Bi = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, i) => {
                                const r = `${n}_${i}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = Bi(e, Fi[t], r);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: r }));
                            }),
                            a
                        );
                    },
                    yi = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            s = Fi[a],
                                            i = Bi(e, s, t);
                                        return (
                                            a === bi.NoBreakWrapper
                                                ? n.push(s({ elementList: i, textBlock: e, key: `${t}` }))
                                                : n.push(...i),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    wi = (e, t, n, a) => {
                        let s = t.exec(e),
                            i = 0;
                        for (; s; ) i !== s.index && n(e.slice(i, s.index)), a(s), (i = t.lastIndex), (s = t.exec(e));
                        i !== e.length && n(e.slice(i));
                    },
                    ki = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const a = [];
                        let s = 0;
                        for (; n; ) a.push(e.slice(s, t.lastIndex)), (s = t.lastIndex), (n = t.exec(e));
                        return s !== e.length && a.push(e.slice(s)), a;
                    },
                    Ti = (e, t = '') => {
                        const n = [];
                        return (
                            wi(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: bi.Word, colorTag: t, childList: ki(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        s = hi[a.charAt(0)];
                                    s === bi.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: bi.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: bi.NewLine,
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
                    xi = (e, t, n = '') => {
                        const a = [];
                        return (
                            wi(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...Ti(e, n));
                                },
                                (e) => {
                                    const s = e[1],
                                        i = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...Ti(String(i), n))
                                        : a.push({ blockType: bi.Binding, colorTag: n, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    Ii = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === bi.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: bi.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    Ni = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === bi.NoBreakSymbol
                                        ? ((n = !0), t.push(...Ii(t.pop(), e)))
                                        : (n ? t.push(...Ii(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    wi(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...xi(e, t));
                                        },
                                        (e) => {
                                            n.push(...xi(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, j.Eg)((0, j.z4)(e)), t),
                        );
                        return yi(n);
                    },
                    Li = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ri = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Mi = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = Ri(e, t),
                            s = e.textContent.length,
                            i = e.offsetWidth / s,
                            r = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + r] : [!1, a];
                        }
                        const o = Math.max(n + r, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    Oi = (e, t, n, a, s, i) => {
                        let r = -1,
                            o = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === bi.LineBreak || c === bi.NewLine || c === bi.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Mi(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + i,
                                    p = t[l];
                                (o = u().cloneElement(p, p.props, m)), (r = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = Oi(e, d, e.length - 1, a, s, i),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (o = u().cloneElement(c, c.props, e, b)), (r = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [r, o];
                    },
                    Pi = (e, t, n, a = '...') => {
                        const s = [...t],
                            i = e.current;
                        if (!i) return [s, !1];
                        const r = n.height,
                            o = n.width,
                            u = i.lastElementChild;
                        if (!Li(u, r) && Ri(u, o) <= 0) return [s, !1];
                        const l = i.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    Li(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(l, r);
                        if (c < 0) return [s, !1];
                        const _ = Oi(l, s, c, o, a.length, a),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    Hi = u().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: i = !1,
                            targetId: r,
                            justifyContent: l = Ei.FlexStart,
                            alignContent: _ = Ei.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, o.useRef)(null),
                                p = (0, o.useRef)({ height: 0, width: 0 }),
                                b = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = b[0],
                                g = b[1],
                                h = (0, o.useMemo)(() => Ni(e, a), [a, e]),
                                f = (0, o.useMemo)(() => {
                                    if (s && E.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: r,
                                        };
                                }, [a, s, r, e, E.isTruncated]),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = Pi(m, h, p.current, d),
                                            a = t[0],
                                            s = t[1];
                                        g({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                    },
                                    [n, d, h],
                                ),
                                C = (0, o.useMemo)(() => ({ justifyContent: l, alignContent: _ }), [_, l]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, o.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new ui.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, v, i),
                                u().createElement(
                                    'div',
                                    { className: c()(li, t, ci, i && _i), style: C },
                                    u().createElement('div', { className: pi, ref: m }, h),
                                    u().createElement(
                                        ma,
                                        { tooltipArgs: f },
                                        u().createElement(
                                            'div',
                                            { className: c()(di, !E.isTruncateFinished && i && mi), style: C },
                                            E.isTruncateFinished && i ? E.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    $i = {
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
                    Wi = (0, o.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            s = Number(t.value),
                            i = Number(n.value),
                            r = (0, o.useMemo)(() => s < i, [s, i]),
                            l = (0, o.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(s)) {
                                    const e = a - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, a]),
                            _ = (0, o.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, j.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: I.Z5.getRealFormat(Math.abs(l), I.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: u().createElement('div', { className: $i.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, o.useMemo)(
                                () => ({
                                    sign: t.sign,
                                    value: isNaN(s) ? t.value : I.Z5.getNumberFormat(s, I.B3.GOLD),
                                }),
                                [t, s],
                            ),
                            m = (0, o.useMemo)(() => (r ? { width: ((100 * s) / i).toString() + '%' } : {}), [r, s, i]),
                            p = (0, o.useMemo)(
                                () => (r ? { width: ((100 * (a - s)) / i).toString() + '%' } : {}),
                                [r, s, a, i],
                            );
                        return u().createElement(
                            'div',
                            { className: $i.base },
                            u().createElement(
                                'div',
                                { className: $i.valueWrapper },
                                l &&
                                    u().createElement(Hi, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: $i.diff,
                                        alignContent: Ei.FlexEnd,
                                    }),
                                u().createElement(Hi, { text: e.valueTemplate, binding: d, classMix: $i.value }),
                            ),
                            u().createElement(
                                'div',
                                { className: $i.labelWrapper },
                                u().createElement('div', { className: $i.label }, t.name),
                            ),
                            r &&
                                u().createElement(
                                    'div',
                                    { className: $i.progress },
                                    u().createElement('div', { className: $i.progressDot }),
                                    u().createElement(
                                        'div',
                                        { className: $i.progressValue, style: m },
                                        u().createElement('div', { className: $i.progressValueDot }),
                                    ),
                                    u().createElement('div', { className: $i.progressDelta, style: p }),
                                    u().createElement('div', { className: c()($i.progressDot, $i.progressDot__end) }),
                                ),
                        );
                    }),
                    zi = 'Levels_base_a9',
                    Gi = 'Levels_tabsWrapper_a0',
                    Xi = 'Levels_tabsBorder_cf',
                    Yi = 'Levels_tabsBorder__top_8f',
                    ji = 'Levels_tabsBorder__bottom_82',
                    Ui = 'Levels_tabsLabel_60',
                    Vi = 'Levels_tabs_8f',
                    Zi = 'Levels_tab_c3',
                    qi = 'Levels_caret_7e',
                    Ki = 'Levels_params_d6',
                    Ji = 'Levels_infoIcon_68',
                    Qi = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            s = n[0].value.params,
                            i = n[n.length - 1].value.params,
                            r = n[t].value,
                            l = (0, o.useMemo)(() => ({ left: 80 * t + 'rem' }), [t]),
                            _ = (0, o.useCallback)((t) => e(t), [e]);
                        return u().createElement(
                            'div',
                            { className: zi },
                            u().createElement(
                                'div',
                                { className: Gi },
                                u().createElement('div', { className: c()(Xi, Yi) }),
                                u().createElement('div', { className: c()(Xi, ji) }),
                                u().createElement(si, { item: ut.AbilityLevelsTooltip, className: Ji }),
                                u().createElement(
                                    'div',
                                    { className: Ui },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                u().createElement(
                                    'div',
                                    { className: Vi },
                                    n.map(({ value: e }, n) => {
                                        const s = n < t ? ri.Active : ri.Default;
                                        return u().createElement(oi, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? s : ri.None,
                                            onClick: _,
                                            classMix: Zi,
                                        });
                                    }),
                                    u().createElement('div', { className: qi, style: l }),
                                ),
                            ),
                            u().createElement(
                                'div',
                                { className: Ki },
                                r.params.map(({ value: e }, t) =>
                                    u().createElement(Wi, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: i[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    er = (0, o.memo)(function ({ className: e }) {
                        const t = bs(),
                            n = $('model.vehicleInfo'),
                            a = $(`${Sa}`).setCurrentSlotDetailsLevel,
                            s = $(`${Sa}.details`),
                            i = s.name,
                            r = s.category,
                            l = s.selectedLevel,
                            _ = s.description,
                            d = s.levelInfos,
                            m = s.isActivated,
                            p = (0, o.useCallback)((e) => a({ level: e }), [a]);
                        return u().createElement(
                            'div',
                            { className: c()(zs, e) },
                            u().createElement(
                                Ns.Vertical.Area.Default,
                                { api: t },
                                u().createElement(
                                    'div',
                                    { className: Gs },
                                    u().createElement('div', { className: Xs }, u().createElement(Ws, n)),
                                    u().createElement(
                                        'div',
                                        { className: Ys },
                                        u().createElement('div', { className: js }, i),
                                        u().createElement(ti, { category: r, className: Us }),
                                        u().createElement('div', { className: Vs }, _),
                                    ),
                                    u().createElement(Qi, { onLevelChanged: p, selectedLevel: l, levelInfos: d }),
                                    u().createElement(
                                        'div',
                                        { className: c()(Zs, m && qs) },
                                        m
                                            ? R.strings.tank_setup.abilities.details.status.unlocked()
                                            : R.strings.tank_setup.abilities.details.status.locked(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    tr = 'BattleAbilitiesSetup_aside_bd';
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
                function nr() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                const ar = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    sr = (e) => {
                        const t = (0, o.useState)(ar(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, o.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        ar(e ? e.current : null) ? a(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => () => a(!1), [e]),
                            n
                        );
                    };
                var ir = n(8380),
                    rr = n.n(ir);
                const or = 'ScrollArea_base_47',
                    ur = 'ScrollArea_base__scrollIndent_1d',
                    lr = 'ScrollArea_base__verticalScrollbarMargin_50',
                    cr = 'ScrollArea_base__multiple_44',
                    _r = 'ScrollArea_base__hidden_ec',
                    dr = u().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            a = void 0 === n ? 0 : n,
                            s = e.offsetTop,
                            i = void 0 === s ? 0 : s,
                            r = e.scrollSettings,
                            l = e.onUpdateActiveAxis,
                            _ = e.onHorizontalScroll,
                            d = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            p = e.onOverScrollAtEnd,
                            b = e.wrapperIndent,
                            E = e.verticalScrollbarMargin,
                            g = e.isMultipleScroll,
                            h = e.scrollAreaContainer,
                            f = e.children,
                            v = e.classMix,
                            C = e.onScrollLeftHandled,
                            A = (0, o.useState)(!1),
                            D = A[0],
                            S = A[1],
                            F = (0, o.useState)(),
                            B = F[0],
                            y = F[1],
                            k = (0, o.useState)(),
                            T = k[0],
                            x = k[1],
                            I = (0, o.useRef)(null),
                            N = (0, o.useCallback)(() => {
                                B &&
                                    l &&
                                    l({ x: B.scrollbarXActive, y: B.scrollbarYActive }, { x: B.reach.x, y: B.reach.y });
                            }, [l, B]),
                            L = (0, o.useCallback)(() => B, [B]),
                            R = (0, o.useCallback)(() => {
                                B && B.update();
                            }, [B]),
                            M = (0, o.useCallback)(
                                (e, t, n) => {
                                    B && (B.setScrollLeft(e, t, n), C && C(e, B.contentWidth - B.containerWidth));
                                },
                                [B, C],
                            ),
                            O = (0, o.useCallback)(
                                (e) => {
                                    B && (B.setScrollLeftImmediately(e), C && C(e, B.contentWidth - B.containerWidth));
                                },
                                [B, C],
                            ),
                            P = (0, o.useCallback)(
                                (e, t, n) => {
                                    B && B.setScrollTop(e, t, n);
                                },
                                [B],
                            ),
                            H = (0, o.useCallback)(
                                (e) => {
                                    B && B.setScrollTopImmediately(e);
                                },
                                [B],
                            ),
                            $ = (0, o.useCallback)(() => {
                                if (T && _ && B) {
                                    const e = { scrollPosition: T.scrollLeft < 0 ? 0 : T.scrollLeft, reach: B.reach.x };
                                    _(e);
                                }
                            }, [_, T, B]),
                            W = (0, o.useCallback)(() => {
                                if (T && d && B) {
                                    const e = { scrollPosition: T.scrollTop, reach: B.reach.y };
                                    d(e);
                                }
                            }, [d, T, B]),
                            z = (0, o.useCallback)(() => {
                                m && m();
                            }, [m]),
                            G = (0, o.useCallback)(() => {
                                p && p();
                            }, [p]),
                            X = (0, o.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), x(e);
                                },
                                [t],
                            ),
                            Y = (0, o.useCallback)(() => {
                                B &&
                                    (B.update(),
                                    (I.current = (0, w.v)(() => {
                                        N();
                                    })));
                            }, [B, N]),
                            j = (0, o.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, o.useEffect)(() => {
                            if (B && T)
                                return (
                                    document.addEventListener('mousemove', j),
                                    window.addEventListener('resize', Y),
                                    T.addEventListener('ps-scroll-x', $),
                                    T.addEventListener('ps-scroll-y', W),
                                    T.addEventListener('over-scroll-beginning', z),
                                    T.addEventListener('over-scroll-ending', G),
                                    S(!0),
                                    () => {
                                        window.removeEventListener('resize', Y),
                                            document.removeEventListener('mousemove', j),
                                            T &&
                                                (T.removeEventListener('ps-scroll-x', $),
                                                T.removeEventListener('ps-scroll-y', W),
                                                T.removeEventListener('over-scroll-beginning', z),
                                                T.removeEventListener('over-scroll-ending', G));
                                    }
                                );
                        }, [j, $, z, G, Y, T, B, W]);
                        const U = (0, o.useRef)(T || null);
                        U.current = T || null;
                        const V = sr(U);
                        (0, o.useEffect)(
                            () => (
                                !B && T && V && y(new (rr())(T, Object.assign({}, r))),
                                () => {
                                    B && (B.destroy(), y(void 0));
                                }
                            ),
                            [T, V, r, B],
                        ),
                            (0, o.useEffect)(
                                () => () => {
                                    null == I.current || I.current();
                                },
                                [],
                            ),
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        B && N();
                                    }),
                                [N, B],
                            ),
                            (0, o.useEffect)(() => {
                                a > 0 && O(a);
                            }, [a, O]),
                            (0, o.useEffect)(() => {
                                i > 0 && H(i);
                            }, [i, H]),
                            (0, o.useEffect)(() => {
                                h &&
                                    ((h.setScrollLeft = M),
                                    (h.setScrollTop = P),
                                    (h.setScrollLeftImmediately = O),
                                    (h.setScrollTopImmediately = H),
                                    (h.updateScrollArea = R),
                                    (h.getScrollbar = L));
                            }, [h, M, O, P, H, R, L]);
                        const Z = c()(or, { [ur]: b, [_r]: !D, [lr]: E, [cr]: g }, v);
                        return u().createElement('div', { className: Z, ref: X }, f);
                    }),
                    mr = 'ScrollableCards_base_e0',
                    pr = 'ScrollableCards_scroll_4b',
                    br = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, o.useState)(!1),
                            i = s[0],
                            r = s[1],
                            l = (0, o.useRef)({}),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(!1),
                            m = (0, o.useRef)(''),
                            p = sr(c);
                        (0, o.useEffect)(
                            () => () => {
                                d.current = !1;
                            },
                            [],
                        );
                        const b = (0, o.useCallback)(() => {
                                d.current && r(!0);
                            }, []),
                            E = (0, o.useCallback)(() => {
                                d.current && r(!1);
                            }, []),
                            g = (0, o.useCallback)(() => {
                                const e = _.current,
                                    t = c.current,
                                    n = l.current;
                                if (e && n && t) {
                                    const a = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n.setScrollTop(a, void 0, b);
                                }
                            }, [b]);
                        (0, o.useEffect)(() => {
                            (0, w.v)(() => {
                                p &&
                                    (m.current === n
                                        ? g()
                                        : ((m.current = n),
                                          nr().then(() => {
                                              g(), d.current || (d.current = !0);
                                          })));
                            });
                        }, [p, n, g, t]),
                            (0, o.useEffect)(() => {
                                d.current && l.current.setScrollTopImmediately(0);
                            }, [a]);
                        const h = {
                                currentCardRef: _,
                                scrollWrapperRef: c,
                                isFinalAnimationRunning: i,
                                onFinalAnimationDone: E,
                            },
                            f = (0, o.cloneElement)(e, h);
                        return u().createElement(
                            'div',
                            { className: mr },
                            u().createElement(
                                'div',
                                { className: pr, ref: c },
                                u().createElement(dr, { key: n, scrollAreaContainer: l.current }, f),
                            ),
                        );
                    };
                var Er = n(4888),
                    gr = n(1363);
                const hr = [
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
                function fr(e) {
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
                const vr = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: I.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    Cr = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            i = e.onMouseLeave,
                            r = e.onMouseDown,
                            u = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            E = void 0 === b || b,
                            g = e.onShow,
                            h = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, hr);
                        const v = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, o.useMemo)(() => (0, k.F)(), []).resId,
                            A = (0, o.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (vr(n, p, { isMouseEvent: !0, on: !0, arguments: fr(a) }, C),
                                    g && g(),
                                    (v.current.isVisible = !0));
                            }, [n, p, a, C, g]),
                            D = (0, o.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        vr(n, p, { on: !1 }, C),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1);
                                }
                            }, [n, p, C, h]),
                            S = (0, o.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            );
                        return E
                            ? (0, o.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((F = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), i && i(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), u && u(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), r && r(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    Ar = ['children'];
                function Dr() {
                    return (
                        (Dr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Dr.apply(this, arguments)
                    );
                }
                const Sr = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Ar);
                    return u().createElement(
                        Cr,
                        Dr(
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
                var Fr = n(5282);
                const Br = {
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
                    yr = 'Warning_base_4c',
                    wr = 'Warning_glow_79',
                    kr = 'Warning_line_df',
                    Tr = 'Warning_icon_24',
                    xr = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, o.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return u().createElement(
                            'div',
                            { id: e, className: yr },
                            u().createElement('div', { className: wr }),
                            u().createElement('div', { className: kr }),
                            u().createElement(
                                vt.u,
                                { contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'), args: a },
                                u().createElement('div', { className: Tr }),
                            ),
                        );
                    },
                    Ir = ({
                        parentId: e,
                        mediaSize: t,
                        name: n,
                        tooltipArgs: a,
                        contextMenuArgs: s,
                        imageSource: i,
                        overlayType: r,
                        highlightType: l,
                        isModernized: _,
                        level: d,
                        isDisabled: m,
                        isCurrent: p,
                        isActive: b,
                        isLocked: E,
                        isClickable: g = !0,
                        details: h,
                        options: f,
                        actions: v,
                        specializations: C,
                        extraImages: A,
                        onSlotClick: D,
                        shouldHandleMouseOver: S,
                        category: F,
                        onTooltipShow: B,
                        onTooltipHide: y,
                        lockReason: w,
                    }) => {
                        const k = (0, o.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = k[0],
                            x = k[1],
                            I = (0, o.useState)(!1),
                            N = I[0],
                            L = I[1],
                            M = (0, o.useCallback)(() => {
                                !T.isActionsHovered && fe.$.playHighlight(),
                                    x({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    S && L(!0);
                            }, [T.isActionsHovered, S]),
                            O = (0, o.useCallback)(() => {
                                S && L(!1);
                            }, [S]),
                            P = (0, o.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, o.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            $ = g && !m,
                            W = (0, o.useCallback)(() => {
                                $ && D && (fe.$.playClick(), D());
                            }, [D, $]),
                            z = T.isBaseHovered || T.isActionsHovered,
                            G = c()(
                                Br.content,
                                Br[`content__${t}`],
                                z && g && !m && Br.content__hovered,
                                !z && Br.content__out,
                                b && Br.content__installed,
                                p && Br.content__current,
                                m && Br.content__disabled,
                                !$ && Br.content__nonclickable,
                            ),
                            X = (0, o.useMemo)(() => {
                                let e = u().createElement('div', {
                                    onMouseEnter: M,
                                    onMouseLeave: H,
                                    className: Br.hover,
                                    onClick: W,
                                });
                                return (
                                    a && (e = u().createElement(Sr, { args: a, onShow: B, onHide: y }, e)),
                                    s && (e = u().createElement(un, { args: s }, e)),
                                    e
                                );
                            }, [M, H, W, a, s, B, y]),
                            Y = (0, o.useMemo)(() => {
                                if (!n) return null;
                                const e = c()(Br.name, m && Br.name__disabled);
                                return u().createElement(
                                    'div',
                                    { className: e },
                                    u().createElement(Fr.n, {
                                        mediaSize: t,
                                        linesCount: 3,
                                        blocks: (0, Fr.D)(systemLocale.toUpperCase(n)),
                                    }),
                                );
                            }, [t, n, m]),
                            j = (0, o.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            U =
                                t === wa.cJ.Large || t === wa.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            V = (0, o.useMemo)(() => {
                                let e;
                                return (
                                    r && (e = _ ? U.$dyn(`${r}_${d}_overlay`) : U.$dyn(`${r}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [U, r, _, d]),
                            Z = (0, o.useMemo)(() => {
                                let e;
                                return l && (e = U.$dyn(`${l}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [U, l]),
                            q = c()(Br.options, m && Br.options__disabled),
                            K = c()(Br.overlay, Br[`overlay__${r}`]),
                            J = c()(Br.highlight, Br[`highlight__${l}`]),
                            Q = (0, o.useMemo)(() => {
                                const e =
                                        (t === wa.cJ.Large || t === wa.cJ.Huge ? wa.cJ.Large : wa.cJ.Medium) + '_' + F,
                                    n = R.images.gui.maps.icons.specialization.$dyn(e);
                                return n && { backgroundImage: `url(${n})` };
                            }, [F, t]),
                            ee = c()(Br.category, Br[`category__${t}`]);
                        return u().createElement(
                            'div',
                            { className: Br.base },
                            u().createElement(
                                'div',
                                { id: e, className: G, onMouseLeave: O },
                                Z &&
                                    u().createElement(
                                        'div',
                                        { className: Br.types },
                                        u().createElement('div', { className: J, style: Z }),
                                    ),
                                u().createElement('div', { className: Br.image, style: j }, A),
                                m && u().createElement('div', { className: Br.disabled }),
                                Q && u().createElement('span', { className: ee, style: Q }),
                                V &&
                                    u().createElement(
                                        'div',
                                        { className: Br.types },
                                        u().createElement('div', { className: K, style: V }),
                                    ),
                                C && u().createElement('div', { className: Br.specialization }, C),
                                Y,
                                h && u().createElement('div', { className: Br.details }, h),
                                u().createElement('div', { className: q }, f),
                                X,
                                u().createElement(
                                    'div',
                                    { onMouseEnter: P, onMouseLeave: H, className: Br.actions },
                                    S && v
                                        ? (0, o.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: N }))
                                        : v,
                                ),
                            ),
                            E &&
                                u().createElement(
                                    'div',
                                    { className: Br.locked },
                                    u().createElement(xr, { reason: w, isCritical: m, parentId: e }),
                                ),
                        );
                    };
                var Nr = n(3934),
                    Lr = n(8401);
                const Rr = 'Availability_base_51',
                    Mr = () => u().createElement('div', { className: Rr }),
                    Or = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Pr = u().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            const i = c()(
                                Or.base,
                                Or['base__' + (s ? 'shown' : 'hidden')],
                                (n || e || (a && 0 === e)) && Or.base__visually,
                            );
                            let r = null;
                            return (
                                (r = n
                                    ? u().createElement(Mr, null)
                                    : e || (a && 0 === e)
                                      ? u().createElement(Nr.K, { itemsInStorage: e })
                                      : t && u().createElement(Lr.t, t)),
                                u().createElement('div', { className: i }, r)
                            );
                        },
                    ),
                    Hr = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var $r = n(8750);
                const Wr = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    zr = ({ level: e }) => {
                        const t = (0, wa.GS)();
                        if (!e) return null;
                        const n = c()(Wr.base, t && Wr[`base__${t}`]);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement($r.a, {
                                type: $r.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Gr = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: s,
                            onSlotAction: i,
                            intCD: r,
                            level: l,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: E,
                        }) => {
                            const g = (0, wa.GS)(),
                                h = t > -1,
                                f = `${r}-ability`,
                                v = (0, o.useMemo)(() => ({ intCD: r, slotType: ge.YN, fieldType: 0 }), [r]),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        i({ actionType: e, intCD: r, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [i, r, n],
                                ),
                                A = (0, o.useCallback)(() => {
                                    C(Er.eC);
                                }, [C]),
                                D = (0, o.useContext)(po),
                                S = (0, o.useMemo)(() => {
                                    const e = c()(Hr.bonuses, g && Hr[`base__${g}`]),
                                        t = D >= E ? Ma.Brown : Ma.Red;
                                    return u().createElement(
                                        'div',
                                        { className: Hr.base },
                                        u().createElement(gr._, {
                                            parentId: f,
                                            mediaSize: g,
                                            classMix: e,
                                            classColorMix: Hr.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            u().createElement(Oa, {
                                                value: E,
                                                theme: t,
                                                size: Ra.Small,
                                                className: Hr.points,
                                            }),
                                    );
                                }, [g, _, f, m, E, D]),
                                F =
                                    ((0, o.useMemo)(() => u().createElement(zr, { level: l }), [l]),
                                    (0, o.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return u().createElement(Ir, {
                                parentId: f,
                                mediaSize: g,
                                name: e,
                                tooltipArgs: v,
                                imageSource: F,
                                isCurrent: a,
                                isActive: h,
                                details: S,
                                isDisabled: m && D < E,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: u().createElement(Pr, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    Xr = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Yr() {
                    return (
                        (Yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yr.apply(this, arguments)
                    );
                }
                const jr = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = $(Sa),
                            s = a.categoriesOrder,
                            i = a.onSlotAction,
                            r = a.slots,
                            l = $('model.ammunitionPanel'),
                            _ = l.onSectionSelect,
                            d = l.selectedSection,
                            m = (0, wa.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = r.map(({ value: e }) => e),
                            E = (0, o.useMemo)(() => {
                                if (m === wa.cJ.Tiny)
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
                            g = (0, o.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), i(e);
                                },
                                [_, i, d],
                            ),
                            h = E.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    s = a > -1 && t === a;
                                return u().createElement(
                                    'div',
                                    { key: n.intCD, ref: s ? e : null, className: c()(Xr.card, m && Xr[`card__${m}`]) },
                                    u().createElement(Gr, Yr({}, n, { isCurrent: s, onSlotAction: g })),
                                );
                            }),
                            f = c()(Xr.base, m && Xr[`base__${m}`], n && Xr.base__disabled);
                        return u().createElement('div', { className: f }, h);
                    },
                    Ur = 'BattleAbilitiesNoSelected_base_06',
                    Vr = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Zr = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    qr = 'BattleAbilitiesNoSelected_title_20',
                    Kr = 'BattleAbilitiesNoSelected_title__small_65',
                    Jr = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Qr = 'BattleAbilitiesNoSelected_button_bf',
                    eo = R.strings.tank_setup.abilities.noSelected,
                    to = () => {
                        const e = (0, wa.GS)(),
                            t = $(Sa, H.None).showInfoPage,
                            n = (0, o.useMemo)(() => e === wa.cJ.Small || e === wa.cJ.Tiny, [e]),
                            a = (0, o.useMemo)(() => (e === wa.cJ.Tiny ? Na.qE.small : Na.qE.medium), [e]),
                            s = (0, o.useCallback)(() => t(), [t]),
                            i = c()(Vr, n && Zr),
                            r = c()(qr, n && Kr);
                        return u().createElement(
                            'div',
                            { className: Ur, id: 'no-abilities-show-button' },
                            u().createElement('div', { className: i }),
                            u().createElement('div', { className: r }, eo.title()),
                            u().createElement('div', { className: Jr }, eo.subTitle()),
                            u().createElement(Na.u5, { size: a, mixClass: Qr, onClick: s }, eo.toReserves()),
                        );
                    },
                    no = 'Content_base_d8',
                    ao = u().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return u().createElement(
                            'div',
                            { className: no },
                            e
                                ? u().createElement(
                                      br,
                                      { selectedSlotId: t },
                                      u().createElement(jr, { selectedSlot: t }),
                                  )
                                : u().createElement(to, null),
                        );
                    }),
                    so = {
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
                    io = ({ title: e, content: t, tabs: n }) => {
                        const a = (0, wa.GS)(),
                            s = c()(so.base, a && so[`base__${a}`]),
                            i = c()(so.tabs, a && so[`tabs__${a}`]),
                            r = c()(so.title, a && so[`title__${a}`]);
                        return u().createElement(
                            'div',
                            { className: s },
                            u().createElement(
                                'div',
                                null,
                                u().createElement('div', { className: r }, e),
                                n && u().createElement('div', { className: i }, n),
                            ),
                            t && t,
                        );
                    },
                    ro = 'Header_base_aa',
                    oo = 'Header_points_d5',
                    uo = 'Header_content_2c',
                    lo = 'Header_textWrapper_63',
                    co = 'Header_text_dc',
                    _o = 'Header_infoButton_5e',
                    mo = u().memo(function () {
                        const e = (0, o.useContext)(po),
                            t = (0, o.useMemo)(
                                () => ({
                                    points: u().createElement(Oa, {
                                        theme: Ma.Brown,
                                        size: Ra.Normal,
                                        value: e,
                                        className: oo,
                                    }),
                                }),
                                [e],
                            ),
                            n = ft(ut.SkillPointsTooltip, ot.SetupView),
                            a = n[0],
                            s = n[1];
                        return u().createElement(
                            'div',
                            { className: ro },
                            u().createElement(io, {
                                title: R.strings.tank_setup.section.battleAbilities(),
                                content: u().createElement(
                                    'div',
                                    { className: uo },
                                    u().createElement(ya, { theme: Ba.OnlyIcon, className: _o }),
                                    u().createElement(
                                        ne.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: a,
                                            onMouseLeave: s,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: lo },
                                            u().createElement(Hi, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: t,
                                                classMix: co,
                                            }),
                                        ),
                                    ),
                                ),
                            }),
                        );
                    }),
                    po = u().createContext(0),
                    bo = () => {
                        const e = $(Sa),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = $('model.ammunitionPanel').selectedSlot;
                        return u().createElement(
                            po.Provider,
                            { value: n },
                            u().createElement(wa.Ar, {
                                header: u().createElement(mo, null),
                                content: u().createElement(ao, { isLocked: t, selectedSlot: a }),
                                aside: u().createElement(er, { className: tr }),
                                footer: u().createElement(za, null),
                            }),
                        );
                    },
                    Eo = 'Tabs_base_d9',
                    go = 'Tabs_base__vertical_c0',
                    ho = 'Tabs_list_0a',
                    fo = 'Tabs_list__centered_dc',
                    vo = 'Tabs_wrapper_2d',
                    Co = 'Tabs_wrapper__centered_d8',
                    Ao = 'Tabs_wrapper__vertical_a5';
                function Do() {
                    return (
                        (Do =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Do.apply(this, arguments)
                    );
                }
                const So = 'tabs-role';
                var Fo;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(Fo || (Fo = {}));
                class Bo extends o.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Fo.TAB]);
                                return t && t.props[Fo.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[So] === Fo.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        (e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[Fo.TAB] })),
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
                        const n = u().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((i = this.tabsProps),
                                (r = a),
                                !(
                                    Object.keys(i).length === Object.keys(r).length &&
                                    Object.keys(i).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && i[e] === r[e],
                                    )
                                ));
                        var i, r;
                        const o = c()(
                                vo,
                                n.props.className,
                                this.props.isTabsCentered && Co,
                                this.props.isVerticalTabs && Ao,
                            ),
                            l = c()(ho, this.props.isTabsCentered && fo);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[So] === Fo.CONTENT)
                                        return e.props[Fo.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                i = s.map((e, t) =>
                                    u().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Fo.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][Fo.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, fe.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, fe.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: l, key: Fo.LIST },
                                            u().createElement('div', Do({}, n.props, { className: o }), i),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Eo, this.props.isVerticalTabs && go);
                        return u().createElement('div', { className: t }, e);
                    }
                }
                Bo.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const yo = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function wo() {
                    return (
                        (wo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wo.apply(this, arguments)
                    );
                }
                const ko = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            s = e.onClickSound,
                            i = e.onMouseEnterSound,
                            r = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, yo);
                        return u().createElement(
                            'div',
                            wo({ className: n }, o),
                            u().createElement(
                                Bo,
                                { activeKey: a, onClickSound: s, onMouseEnterSound: i, isTabsCentered: r },
                                t,
                            ),
                        );
                    },
                    To = ({ children: e, component: t, props: n = {} }) => (t ? u().createElement(t, n, e) : e || null),
                    xo = 'Tab_base_dd',
                    Io = 'Tab_base__first_4a',
                    No = 'Tab_base__last_96',
                    Lo = 'Tab_base__medium_ec',
                    Ro = 'Tab_base__active_5d',
                    Mo = 'Tab_divider_ca',
                    Oo = 'Tab_divider__show_62',
                    Po = 'Tab_state_6c',
                    Ho = 'Tab_stateHighlight_1e',
                    $o = 'Tab_stateBorder_64',
                    Wo = 'Tab_stateBorder__positionLeft_e7',
                    zo = 'Tab_stateBorder__positionRight_db',
                    Go = 'Tab_counter_e1',
                    Xo = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Yo() {
                    return (
                        (Yo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yo.apply(this, arguments)
                    );
                }
                const jo = (0, o.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            i = e.isLast,
                            r = void 0 !== i && i,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            E = void 0 === b ? {} : b,
                            g = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, Xo);
                        return u().createElement(
                            To,
                            E,
                            u().createElement(
                                'div',
                                Yo({ className: c()(xo, { [Ro]: n }, { [Io]: s }, { [No]: r }, { [Lo]: l }) }, h),
                                u().createElement(
                                    'span',
                                    { className: Po },
                                    u().createElement('span', { className: Ho }),
                                    u().createElement('span', { className: c()($o, Wo) }),
                                    u().createElement('span', { className: c()($o, zo) }),
                                ),
                                p,
                                !r && !n && u().createElement('span', { className: c()(Mo, Oo) }),
                                (Boolean(g) || d) &&
                                    u().createElement(
                                        'div',
                                        { className: Go },
                                        u().createElement(Ne, { value: g, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Uo = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Vo = ['name', 'newItemsCount', 'onTabChanged', 'isTooltipEnabled'];
                function Zo() {
                    return (
                        (Zo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Zo.apply(this, arguments)
                    );
                }
                const qo = (0, o.memo)((e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.onTabChanged,
                        s = e.isTooltipEnabled,
                        i = void 0 === s || s,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Vo);
                    const l = (0, o.useMemo)(() => R.strings.tank_setup.tabs.$dyn(t), [t]),
                        c = (0, o.useCallback)(() => {
                            fe.$.playClick(), a({ name: t });
                        }, [a, t]),
                        _ = (0, o.useMemo)(() => ({ name: t }), [t]),
                        d = U(['tab'], Uo);
                    return u().createElement(
                        vt.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: i,
                        },
                        u().createElement(
                            'div',
                            null,
                            u().createElement(
                                jo,
                                Zo({}, r, { isNotified: Boolean(n), onClick: c }),
                                u().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                });
                function Ko() {
                    return (
                        (Ko =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ko.apply(this, arguments)
                    );
                }
                const Jo = ({ tabs: e, selectedTabName: t, onTabChanged: n, isTooltipEnabled: a = !0 }) => {
                    const s = $e('ModernizedSetupTabHintZone', Pe);
                    return (
                        (0, o.useEffect)(() => {
                            s && s.runTrigger(!0);
                        }, [s]),
                        u().createElement(
                            ko,
                            { key: t, activeKey: t },
                            u().createElement(
                                'div',
                                { 'tabs-role': Fo.LIST },
                                e.map(({ value: e }) =>
                                    u().createElement(
                                        qo,
                                        Ko(
                                            {
                                                key: e.name,
                                                onTabChanged: n,
                                                'tabs-role': Fo.TAB,
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
                };
                var Qo = n(8772),
                    eu = n(5851),
                    tu = n(8774);
                const nu = {
                        base: 'BoosterActions_base_95',
                        base__hidden: 'BoosterActions_base__hidden_3e',
                        base__shown: 'BoosterActions_base__shown_6a',
                    },
                    au = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const s = c()(nu.base, nu['base__' + (t.length ? 'shown' : 'hidden')]);
                        return u().createElement(
                            'div',
                            { className: s },
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.GV}`,
                                actionType: Er.GV,
                                onClick: n,
                                show: t.includes(Er.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.DA}`,
                                actionType: Er.DA,
                                onClick: n,
                                show: t.includes(Er.DA),
                            }),
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.FR}`,
                                actionType: Er.FR,
                                onClick: n,
                                show: t.includes(Er.FR),
                            }),
                        );
                    }),
                    su = 'Booster_base_e5',
                    iu = 'Booster_unit_5e',
                    ru = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: i,
                            itemsInStorage: r,
                            price: l,
                            isCurrent: c,
                            onSlotAction: _,
                            intCD: d,
                            isDisabled: m,
                            overlayType: p,
                            isLocked: b,
                            isMounted: E,
                            isMountedInOtherSetup: g,
                            description: h,
                            isBuyMoreVisible: f,
                            isBuyMoreDisabled: v,
                            highlightType: C,
                            compare: A,
                            lockReason: D,
                        }) => {
                            const S = (0, wa.GS)(),
                                F = S === wa.cJ.Large || S === wa.cJ.Huge,
                                B = t > -1,
                                y = `${d}-booster`,
                                w = (0, o.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !m &&
                                            B &&
                                            (!A && f && e.push(Er.GV),
                                            (!Boolean(r) && !E) || g ? e.push(Er.FR) : e.push(Er.DA)),
                                        e
                                    );
                                }, [m, B, A, f, r, E, g]),
                                k = (0, o.useCallback)(
                                    (e) => (
                                        _({ actionType: e, intCD: d, installedSlotId: t }), e === Er.GV ? 1e3 : 120
                                    ),
                                    [_, d, t],
                                ),
                                T = yt(k),
                                x = (0, o.useCallback)(() => {
                                    w.includes(Er.FR) ? T(Er.FR) : w.includes(Er.DA) ? T(Er.DA) : T(Er.eC);
                                }, [w, T]),
                                I = (0, o.useMemo)(() => {
                                    const e = { intCD: d, slotType: ge.G$, fieldType: 0 };
                                    return [
                                        e,
                                        Object.assign({}, e, {
                                            installedSlotId: t,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: a,
                                            isMountedMoreThanOne: s,
                                            isMounted: E,
                                            isDisabled: m,
                                        }),
                                    ];
                                }, [d, t, n, a, E, s, m]),
                                N = I[0],
                                L = I[1],
                                M = (0, o.useMemo)(
                                    () =>
                                        F
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(i)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(i),
                                    [F, i],
                                ),
                                O = (0, o.useMemo)(
                                    () =>
                                        u().createElement(gr._, {
                                            parentId: y,
                                            classMix: su,
                                            mediaSize: S,
                                            classColorMix: iu,
                                            linesShown: F ? 4 : 3,
                                            text: h,
                                        }),
                                    [S, y, F, h],
                                );
                            return u().createElement(Ir, {
                                parentId: y,
                                mediaSize: S,
                                name: e,
                                tooltipArgs: N,
                                contextMenuArgs: L,
                                imageSource: M,
                                isClickable: !0,
                                isCurrent: c,
                                isActive: B,
                                isDisabled: m,
                                isLocked: b,
                                options: u().createElement(Pr, {
                                    isMounted: E || g,
                                    itemsInStorage: r,
                                    show: !w.length,
                                    price: l,
                                }),
                                actions: u().createElement(au, {
                                    parentId: y,
                                    availableActions: w,
                                    onActionClick: T,
                                    isBuyMoreDisabled: v,
                                }),
                                details: O,
                                overlayType: p,
                                highlightType: C,
                                onSlotClick: x,
                                lockReason: D,
                            });
                        },
                    ),
                    ou = {
                        base: 'Cards_base_0a',
                        base__large: 'Cards_base__large_47',
                        base__huge: 'Cards_base__huge_d2',
                        base__disabled: 'Cards_base__disabled_a9',
                        card: 'Cards_card_ab',
                        card__large: 'Cards_card__large_b2',
                        card__huge: 'Cards_card__huge_78',
                    };
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const lu = ({ currentCardRef: e, selectedSlot: t, isDisabled: n = !1, modelPath: a, compare: s }) => {
                        const i = (0, wa.GS)(),
                            r = (0, se.m)(a, !1).onSlotAction,
                            o = (0, se.m)(`${a}.slots`).map(({ value: n }) => {
                                if (!n) return null;
                                const a = t === n.installedSlotId;
                                return u().createElement(
                                    'div',
                                    { key: n.intCD, ref: a ? e : null, className: c()(ou.card, i && ou[`card__${i}`]) },
                                    u().createElement(ru, uu({}, n, { isCurrent: a, onSlotAction: r, compare: s })),
                                );
                            }),
                            l = c()(ou.base, i && ou[`base__${i}`], n && ou.base__disabled);
                        return u().createElement('div', { className: l }, o);
                    },
                    cu = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                        tabs: 'CompareHeader_tabs_15',
                        filters: 'CompareHeader_filters_80',
                    },
                    _u = ({ type: e, tabs: t, content: n }) => {
                        const a = (0, se.m)('model', !1).vehicleInfo,
                            s = (0, wa.GS)(),
                            i = c()(cu.base, cu[`base__${s}`]);
                        return u().createElement(
                            'div',
                            { className: i },
                            u().createElement(
                                'div',
                                { className: cu.title },
                                (0, j.WU)(R.strings.tank_setup.compare.section.title.$dyn(e), { name: a.vehicleName }),
                            ),
                            u().createElement(
                                'div',
                                { className: cu.description },
                                R.strings.tank_setup.compare.section.description.$dyn(e),
                            ),
                            u().createElement(
                                'div',
                                { className: cu.controlsContainer },
                                u().createElement('div', { className: cu.tabs }, t),
                                u().createElement('div', { className: cu.filters }, n),
                            ),
                        );
                    };
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const mu = 'model.tankSetup.battleBoostersSetup',
                    pu = ({ compare: e = !1 }) => {
                        const t = (0, wa.GS)(),
                            n = (0, se.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, se.m)(mu, !1),
                            s = a.onDealConfirmed,
                            i = a.onDealCancelled,
                            r = a.onAutoRenewalChanged,
                            o = a.onTabChanged,
                            l = (0, se.m)(`${mu}.tabs`),
                            c = u().createElement(Jo, du({}, l, { onTabChanged: o, isTooltipEnabled: !1 }));
                        return u().createElement(wa.Ar, {
                            compare: e,
                            header: e
                                ? u().createElement(_u, { type: ge.G$, tabs: c })
                                : u().createElement(io, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabs: c,
                                  }),
                            content: u().createElement(
                                br,
                                { selectedSlotId: n, scrollAreaKey: l.selectedTabName },
                                u().createElement(lu, { selectedSlot: n, modelPath: mu, compare: e }),
                            ),
                            footer:
                                !e &&
                                u().createElement(Qo.w, {
                                    withConfirmation: !0,
                                    renewalType: eu.m.Boosters,
                                    parentModelPath: mu,
                                    onDealConfirmed: s,
                                    onDealCancelled: i,
                                    onAutoRenewalChanged: r,
                                    mediaSize: t,
                                }),
                        });
                    },
                    bu = 'tooltip';
                let Eu, gu, hu;
                !(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(Eu || (Eu = {})),
                    (function (e) {
                        (e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen');
                    })(gu || (gu = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(hu || (hu = {}));
                const fu = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    vu = {
                        base: 'ConsumableActions_base_fc',
                        base__hidden: 'ConsumableActions_base__hidden_c1',
                        base__shown: 'ConsumableActions_base__shown_17',
                    },
                    Cu = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const s = c()(vu.base, vu['base__' + (t.length ? 'shown' : 'hidden')]);
                        return u().createElement(
                            'div',
                            { className: s },
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.GV}`,
                                actionType: Er.GV,
                                onClick: n,
                                show: t.includes(Er.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.DA}`,
                                actionType: Er.DA,
                                onClick: n,
                                show: t.includes(Er.DA),
                            }),
                            u().createElement(tu.a, {
                                parentId: `${e}-${Er.FR}`,
                                actionType: Er.FR,
                                onClick: n,
                                show: t.includes(Er.FR),
                            }),
                        );
                    }),
                    Au = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: i,
                            itemsInStorage: r,
                            price: l,
                            isCurrent: _,
                            onSlotAction: d,
                            intCD: m,
                            isDisabled: p,
                            overlayType: b,
                            isLocked: E,
                            isMounted: g,
                            isMountedInOtherSetup: h,
                            isBuiltIn: f,
                            description: v,
                            isBuyMoreDisabled: C,
                            isBootCamp: A = !1,
                            compare: D,
                            lockReason: S,
                        }) => {
                            const F = (0, wa.GS)(),
                                B = F === wa.cJ.Large || F === wa.cJ.Huge,
                                y = t > -1,
                                w = `${m}-consumable`,
                                k = (0, o.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            y &&
                                            (!_ && e.push(Er.Xo),
                                            f ||
                                                A ||
                                                (!D && e.push(Er.GV),
                                                (!Boolean(r) && !g) || h ? e.push(Er.FR) : e.push(Er.DA))),
                                        e
                                    );
                                }, [p, A, y, _, f, D, r, g, h]),
                                T = (0, o.useCallback)(
                                    (e) => (
                                        d({ actionType: e, intCD: m, installedSlotId: t }), e === Er.GV ? 1e3 : 300
                                    ),
                                    [d, m, t],
                                ),
                                x = yt(T),
                                I = (0, o.useCallback)(() => {
                                    k.includes(Er.Xo)
                                        ? x(Er.Xo)
                                        : k.includes(Er.FR)
                                          ? x(Er.FR)
                                          : k.includes(Er.DA)
                                            ? x(Er.DA)
                                            : x(Er.eC);
                                }, [k, x]),
                                N = (0, o.useMemo)(() => {
                                    const e = { intCD: m, slotType: ge.mH, fieldType: 0 };
                                    return [
                                        e,
                                        A
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: s,
                                                  isMounted: g,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [m, t, n, a, s, g, p, A]),
                                L = N[0],
                                M = N[1],
                                O = (0, o.useMemo)(
                                    () =>
                                        B
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(i)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(i),
                                    [B, i],
                                ),
                                P = (0, o.useMemo)(() => {
                                    const e = c()(fu.base, F && fu[`base__${F}`]);
                                    return u().createElement(gr._, {
                                        parentId: w,
                                        mediaSize: F,
                                        classMix: e,
                                        classColorMix: fu.unit,
                                        linesShown: B ? 4 : 3,
                                        text: v,
                                    });
                                }, [F, B, v, w]),
                                H = ht(Eu.Bootcamp, gu.BC_CONSUMABLE_SETUP_SUB_VIEW),
                                $ = H[0],
                                W = H[1],
                                z = (0, o.useCallback)(() => {
                                    $(hu.TooltipOpened);
                                }, [$]),
                                G = (0, o.useCallback)(() => {
                                    W(hu.TooltipOpened, 2, at.Info, { [bu]: m.toString() });
                                }, [W, m]);
                            return u().createElement(Ir, {
                                parentId: w,
                                mediaSize: F,
                                name: e,
                                tooltipArgs: L,
                                contextMenuArgs: M,
                                imageSource: O,
                                isCurrent: _,
                                isActive: y,
                                isDisabled: p,
                                isLocked: E,
                                isClickable: !f,
                                options: u().createElement(Pr, {
                                    price: l,
                                    isMounted: g || h,
                                    itemsInStorage: r,
                                    show: !k.length,
                                }),
                                actions: u().createElement(Cu, {
                                    parentId: w,
                                    availableActions: k,
                                    onActionClick: x,
                                    isBuyMoreDisabled: C,
                                }),
                                details: P,
                                overlayType: b,
                                onSlotClick: I,
                                onTooltipShow: A ? z : void 0,
                                onTooltipHide: A ? G : void 0,
                                lockReason: S,
                            });
                        },
                    ),
                    Du = {
                        base: 'Cards_base_57',
                        base__large: 'Cards_base__large_db',
                        base__huge: 'Cards_base__huge_ac',
                        base__disabled: 'Cards_base__disabled_4f',
                        card: 'Cards_card_4e',
                        card__large: 'Cards_card__large_87',
                        card__huge: 'Cards_card__huge_dd',
                    },
                    Su = [
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
                    Fu = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...Su,
                    ],
                    Bu = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...Su,
                    ];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const wu = ({
                        currentCardRef: e,
                        isDisabled: t,
                        modelPath: n,
                        selectedSlot: a,
                        compare: s,
                        isBootCamp: i = !1,
                    }) => {
                        const r = (0, wa.GS)(),
                            o = (0, se.m)(n, !1).onSlotAction,
                            l = ((e) =>
                                ((e, t, n) => {
                                    const a = n !== wa.cJ.Tiny || t ? Fu : Bu;
                                    return e
                                        .reduce((e, t) => {
                                            const n = a.indexOf(t.value.itemName);
                                            return (e[-1 === n ? Math.max(e.length, Bu.length) : n] = t), e;
                                        }, [])
                                        .filter((e) => Boolean(e));
                                })(e, s, r))((0, se.m)(`${n}.slots`)).map(({ value: t }) => {
                                if (!t) return null;
                                const n = t.installedSlotId > -1 && a === t.installedSlotId;
                                return u().createElement(
                                    'div',
                                    { key: t.intCD, ref: n ? e : null, className: c()(Du.card, r && Du[`card__${r}`]) },
                                    u().createElement(
                                        Au,
                                        yu({}, t, { isCurrent: n, onSlotAction: o, isBootCamp: i, compare: s }),
                                    ),
                                );
                            }),
                            _ = c()(Du.base, r && Du[`base__${r}`], t && Du.base__disabled);
                        return u().createElement('div', { id: 'consumables', className: _ }, l);
                    },
                    ku = 'model.tankSetup.consumablesSetup',
                    Tu = ({ compare: e = !1 }) => {
                        const t = (0, wa.GS)(),
                            n = (0, se.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, se.m)('model').isBootcamp,
                            s = (0, se.m)(ku),
                            i = s.onDealConfirmed,
                            r = s.onDealCancelled,
                            o = s.onAutoRenewalChanged;
                        return u().createElement(wa.Ar, {
                            header: e
                                ? u().createElement(_u, { type: ge.mH })
                                : u().createElement(io, { title: R.strings.tank_setup.section.consumables() }),
                            content: u().createElement(
                                br,
                                { selectedSlotId: n },
                                u().createElement(wu, { selectedSlot: n, modelPath: ku, compare: e, isBootCamp: a }),
                            ),
                            footer:
                                !e &&
                                u().createElement(Qo.w, {
                                    withConfirmation: !0,
                                    renewalType: eu.m.Consumables,
                                    mediaSize: t,
                                    parentModelPath: ku,
                                    onDealConfirmed: i,
                                    onDealCancelled: r,
                                    onAutoRenewalChanged: o,
                                }),
                            compare: e,
                        });
                    };
                var xu = n(2106),
                    Iu = n(8586),
                    Nu = n(3978);
                const Lu = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    Ru = 'FilterItem_base_2e',
                    Mu = ({ name: e }) => {
                        const t = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            }),
                            [e],
                        );
                        return u().createElement('div', { className: Ru, style: t });
                    };
                R.strings.common.percentValue();
                let Ou;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Ou || (Ou = {}));
                const Pu = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Hu;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(Hu || (Hu = {}));
                const $u = 'ClearBtn_base_a6',
                    Wu = 'ClearBtn_stroke_09',
                    zu = 'ClearBtn_background_61',
                    Gu = 'ClearBtn_base__hover_3b',
                    Xu = 'ClearBtn_base__down_60',
                    Yu = 'ClearBtn_cross_1d',
                    ju = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, o.useState)(!1),
                            i = s[0],
                            r = s[1],
                            l = (0, o.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, o.useCallback)(() => {
                                (0, fe.G)(a), d(!1), r(!0);
                            }, [a]),
                            p = (0, o.useCallback)(() => {
                                (0, fe.G)(n), d(!0);
                            }, [n]),
                            b = (0, o.useCallback)(() => {
                                d(!1), r(!1);
                            }, []),
                            E = c()($u, _ && Gu, i && Xu);
                        return u().createElement(
                            ne.i,
                            Pu,
                            u().createElement(
                                'div',
                                { id: e, className: E, onMouseDown: m, onMouseOver: p, onMouseLeave: b, onClick: t },
                                u().createElement('div', { className: zu }),
                                u().createElement('div', { className: Wu }),
                                u().createElement('div', { className: Yu }),
                            ),
                        );
                    },
                    Uu = 'MatchDetails_base_a8',
                    Vu = 'MatchDetails_count_d2',
                    Zu = 'MatchDetails_clear_21',
                    qu = 'MatchDetails_clear__shown_49',
                    Ku = 'MatchDetails_separator_bc',
                    Ju = 'MatchDetails_arrow_b0',
                    Qu = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, o.useCallback)(() => t(), [t]),
                            i = c()(Zu, e && qu);
                        return u().createElement(
                            'div',
                            { className: Uu },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('span', { className: Vu }, n),
                                    u().createElement(
                                        'span',
                                        { className: Ku },
                                        '/',
                                        u().createElement('span', { className: Ju }),
                                    ),
                                ),
                            u().createElement('span', { className: Vu }, a),
                            u().createElement(
                                'span',
                                { className: i },
                                u().createElement(ju, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    el = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: i,
                        onFilterReset: r,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, wa.GS)(),
                            d = $e('FilterTutorialHintZone', Pe);
                        (0, o.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, V.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: u().createElement(Mu, { name: e }),
                            callback: (e, t) => {
                                i({ name: e }), (0, Nu.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: xu.L.ghost,
                                mixClass: c()(Lu.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: R.strings.tank_setup.categories.$dyn(e),
                                body: R.strings.tank_setup.categories.body.$dyn(e),
                            },
                        }));
                        return u().createElement(
                            'div',
                            { className: c()(Lu.base, _ && Lu[`base__${_}`], s && Lu.base__detailed) },
                            s &&
                                u().createElement(Qu, {
                                    isFilterActive: a,
                                    onFilterReset: r,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            u().createElement(
                                'div',
                                { className: Lu.buttons },
                                u().createElement(Iu.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var tl = n(2372);
                const nl = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    al = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    sl = (e) => (e ? al.disabled.text() : al.notDisabled.text()),
                    il = ({ disabled: e }) => {
                        const t = (0, wa.GS)(),
                            n = (0, se.m)('model.tankSetup.optDevicesSetup.specialCurrency', !0),
                            a = n.value,
                            s = n.onGetMoreCurrency,
                            i = (0, o.useCallback)(() => s(), [s]),
                            r = (0, o.useMemo)(() => ({ tooltipId: ge.$4 }), []);
                        return u().createElement(
                            'div',
                            { className: c()(nl.base, t && nl[`base__${t}`]) },
                            u().createElement(
                                Gt.t,
                                { args: r },
                                u().createElement(
                                    'div',
                                    { className: nl.currency },
                                    u().createElement(tl.A, { value: a }),
                                    u().createElement('div', { className: nl.currencyIcon }),
                                ),
                            ),
                            u().createElement(
                                ne.i,
                                { body: sl(e) },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        Na.u5,
                                        { onClick: i, mixClass: nl.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    };
                function rl() {
                    return (
                        (rl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rl.apply(this, arguments)
                    );
                }
                const ol = (e, t) => e && u().createElement(il, { disabled: t }),
                    ul = (e) =>
                        !e.isComparisonHeader &&
                        ((e) => {
                            const t = e.haveSuitableEquipments,
                                n = e.hasUnfitItems;
                            return e.isIntroduction ? ol(!t, !n) : ol(t, !t);
                        })(e),
                    ll = ({
                        tabs: e,
                        onTabChanged: t,
                        filter: n,
                        onFilterChanged: a,
                        onFilterReset: s,
                        propsForDisplayHeaderContent: i,
                        selectedSlotSpecialization: r,
                    }) => {
                        const l = i.isComparisonHeader,
                            c = e.tabs.length > 1 && u().createElement(Jo, rl({}, e, { onTabChanged: t })),
                            _ = (0, o.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case ge.S:
                                            return u().createElement(
                                                el,
                                                rl({}, n, {
                                                    onFilterChanged: a,
                                                    onFilterReset: s,
                                                    selectedSlotSpecialization: r,
                                                }),
                                            );
                                        case ge.pi:
                                            return ul(i);
                                        default:
                                            return null;
                                    }
                                },
                                [n, a, s, i, r],
                            );
                        return l
                            ? u().createElement(_u, { type: ge.zn, tabs: c, content: _(e.selectedTabName) })
                            : u().createElement(io, {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  content: _(e.selectedTabName),
                                  tabs: c,
                              });
                    },
                    cl = 'Unit_base_15',
                    _l = 'Unit_base__special_37',
                    dl = 'Unit_glow_38',
                    ml = R.strings.tank_setup.kpi.bonus.valueTypes,
                    pl = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    bl = ({ value: e, valueType: t, valueKey: n, isSpecial: a }) => {
                        const s = 'mul' === t ? 100 * (e - 1) : e,
                            i = s > 0 ? '+' : '',
                            r = I.Z5.getRealFormat(s, I.Gr.WO_ZERO_DIGITS),
                            o = ml.$dyn(n),
                            l = `${r}${o ? ` ${o}` : pl}`;
                        return u().createElement(
                            'div',
                            { className: c()(cl, a && _l) },
                            u().createElement('span', null, u().createElement('span', { className: dl }), i + l),
                        );
                    },
                    El = 'Bonus_base_aa',
                    gl = 'Bonus_text_48',
                    hl = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    fl = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return hl;
                        const a = n.value,
                            s = a.value,
                            i = 'mul' === a.valueType ? 100 * (s - 1) : s;
                        return { calcValue: i, isPositive: i > 0, valueKey: a.valueKey };
                    };
                function vl() {
                    return (
                        (vl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        vl.apply(this, arguments)
                    );
                }
                const Cl = ({ bonus: e, mediaSize: t, isSpecial: n, visibleLinesCount: a }) => {
                        const s = ((e, t = !1) =>
                                t || fl(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(e),
                            i = (0, o.useMemo)(() => {
                                let t = null;
                                return (
                                    e.values.forEach(({ value: a }) => {
                                        a &&
                                            a.valueKey === e.localeName &&
                                            (t = u().createElement(bl, vl({ isSpecial: n }, a)));
                                    }),
                                    t
                                );
                            }, [e, n]);
                        return (
                            s &&
                            u().createElement(
                                'span',
                                { className: El },
                                i,
                                ' ',
                                a &&
                                    s &&
                                    u().createElement(
                                        'span',
                                        { className: gl },
                                        u().createElement(Fr.n, { linesCount: a, blocks: (0, Fr.D)(s), mediaSize: t }),
                                    ),
                            )
                        );
                    },
                    Al = 'Bonuses_base_af',
                    Dl = 'Bonuses_bonus_d1',
                    Sl = 'Bonuses_text_37',
                    Fl = 'Bonuses_effect_f8',
                    Bl = 'Bonuses_icon_40',
                    yl = (0, o.memo)(
                        ({ parentId: e, items: t, effect: n, mediaSize: a, maxLines: s, isSpecial: i }) => {
                            const r = (0, o.useMemo)(() => {
                                    if (!n) return [null, 0];
                                    const e = 1 === t.length ? 2 : 1;
                                    return [
                                        u().createElement(
                                            'div',
                                            { className: Dl },
                                            u().createElement(
                                                'span',
                                                { className: Fl },
                                                u().createElement('span', { className: Bl }),
                                                R.strings.tank_setup.effects.name(),
                                            ),
                                            ' ',
                                            u().createElement(
                                                'span',
                                                { className: Sl },
                                                u().createElement(Fr.n, {
                                                    mediaSize: a,
                                                    linesCount: e,
                                                    blocks: (0, Fr.D)(n),
                                                }),
                                            ),
                                        ),
                                        e,
                                    ];
                                }, [a, n, t.length]),
                                l = r[0],
                                c = r[1];
                            return (
                                c && (s -= c),
                                u().createElement(
                                    'div',
                                    { id: `${e}-bonuses`, className: Al },
                                    l,
                                    t.map(({ value: e }, n) => {
                                        let r;
                                        return s && e
                                            ? ((r = t.length > 2 ? 1 : 2 === t.length ? (s > 2 ? 2 : 1) : s),
                                              (s -= r),
                                              u().createElement(
                                                  'div',
                                                  { key: n, className: Dl },
                                                  u().createElement(Cl, {
                                                      bonus: e,
                                                      mediaSize: a,
                                                      isSpecial: i,
                                                      visibleLinesCount: r,
                                                  }),
                                              ))
                                            : null;
                                    }),
                                )
                            );
                        },
                    ),
                    wl = 'DeviceActions_base_c0',
                    kl = 'DeviceActions_base__hidden_a6',
                    Tl = 'DeviceActions_base__shown_b0',
                    xl = (0, o.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: i,
                            isFreeToDemount: r,
                            destroyTooltipBodyPath: o,
                            level: l,
                        }) => {
                            const _ = (s || a) && t.includes(Er.Rs),
                                d = t.length && (t[0] !== Er.Rs || _),
                                m = c()(wl, d ? Tl : kl);
                            return u().createElement(
                                'div',
                                { className: m },
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.DA}`,
                                    actionType: Er.DA,
                                    onClick: n,
                                    show: t.includes(Er.DA),
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.FR}`,
                                    actionType: Er.FR,
                                    onClick: n,
                                    show: t.includes(Er.FR),
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.Rs}`,
                                    actionType: Er.Rs,
                                    onClick: n,
                                    show: _,
                                    isModernized: i,
                                    level: l,
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.dZ}`,
                                    actionType: Er.dZ,
                                    onClick: n,
                                    show: t.includes(Er.dZ),
                                    isFreeToDemount: r,
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.Fd}`,
                                    actionType: Er.Fd,
                                    onClick: n,
                                    show: t.includes(Er.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: r,
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er.sH}`,
                                    actionType: Er.sH,
                                    onClick: n,
                                    show: t.includes(Er.sH),
                                }),
                                u().createElement(tu.a, {
                                    parentId: `${e}-${Er._2}`,
                                    actionType: Er._2,
                                    buttonType: xu.L.secondary,
                                    onClick: n,
                                    show: (i || !r) && t.includes(Er._2),
                                    isModernized: i,
                                    tooltipBodyPath: o,
                                }),
                            );
                        },
                    );
                function Il() {
                    return (
                        (Il =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Il.apply(this, arguments)
                    );
                }
                const Nl = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: i,
                            itemsInStorage: r,
                            price: l,
                            specializations: c,
                            intCD: _,
                            isMounted: d,
                            isMountedInOtherSetup: m,
                            isDisabled: p,
                            isFreeToDemount: b,
                            overlayType: E,
                            isLocked: g,
                            bonuses: h,
                            effect: f,
                            isUpgradable: v,
                            isTrophy: C,
                            activeSpecsMask: A,
                            onSlotAction: D,
                            isCurrent: S,
                            compare: F,
                            isModernized: B,
                            level: y,
                            lockReason: w,
                            destroyTooltipBodyPath: k,
                            isBootCamp: T = !1,
                        }) => {
                            const x = (0, wa.GS)(),
                                I = x === wa.cJ.Large || x === wa.cJ.Huge,
                                N = t > -1,
                                L = `${_}-device`,
                                M = ht(Eu.Bootcamp, gu.BC_DEVICE_SETUP_SUB_VIEW),
                                O = M[0],
                                P = M[1],
                                H = (0, o.useCallback)(() => {
                                    O(hu.TooltipOpened);
                                }, [O]),
                                $ = (0, o.useCallback)(() => {
                                    P(hu.TooltipOpened, 2, at.Info, { [bu]: _.toString() });
                                }, [P, _]),
                                W = (0, o.useMemo)(() => {
                                    const e = [];
                                    let t = !0;
                                    return (
                                        N &&
                                            !p &&
                                            (S || e.push(Er.Xo),
                                            T ||
                                                (d && !F
                                                    ? ((t = !S),
                                                      e.push(...((e) => (e ? [Er.Fd, Er.sH] : [Er.dZ]))(s)),
                                                      e.push(Er._2))
                                                    : e.push(
                                                          ((e, t, n) => ((!Boolean(e) && !t) || n ? Er.FR : Er.DA))(
                                                              r,
                                                              d,
                                                              m,
                                                          ),
                                                      ))),
                                        !v || F || p || T || e.push(Er.Rs),
                                        { availableActions: e, isDeviceClickable: t }
                                    );
                                }, [N, p, v, F, T, S, d, s, r, m]),
                                z = W.availableActions,
                                G = W.isDeviceClickable,
                                X = (0, o.useCallback)(
                                    (e) => {
                                        D({ actionType: e, intCD: _, installedSlotId: t });
                                    },
                                    [D, _, t],
                                ),
                                Y = (0, o.useCallback)(() => {
                                    z.length && z[0] !== Er.Rs ? X(z[0]) : X(Er.eC);
                                }, [z, X]),
                                j = (0, o.useMemo)(() => {
                                    const e = { intCD: _, slotType: ge.zn, fieldType: 0 };
                                    return [
                                        e,
                                        T
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: s,
                                                  isMounted: d,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [_, t, n, a, s, d, p, T]),
                                U = j[0],
                                V = j[1],
                                Z = (0, o.useMemo)(
                                    () =>
                                        I
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(i)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(i),
                                    [I, i],
                                ),
                                q =
                                    c && c.specializations.length
                                        ? u().createElement(En.G, Il({}, c, { activeSpecsMask: A, mediaSize: x }))
                                        : null,
                                K = F
                                    ? null
                                    : u().createElement(Pr, {
                                          isMounted: d || m,
                                          itemsInStorage: r,
                                          price: l,
                                          possibleZeroCount: C || B,
                                          show: !z.length || Boolean(r || d || m),
                                      });
                            return u().createElement(Ir, {
                                parentId: L,
                                mediaSize: x,
                                name: e,
                                tooltipArgs: U,
                                contextMenuArgs: V,
                                imageSource: Z,
                                isCurrent: S,
                                isActive: N,
                                isDisabled: p,
                                isLocked: g,
                                isClickable: G,
                                isModernized: B,
                                level: y,
                                specializations: q,
                                details: u().createElement(
                                    yl,
                                    Il(
                                        {
                                            parentId: L,
                                            isSpecial: Boolean(A),
                                            effect: f,
                                            mediaSize: x,
                                            maxLines: I ? 4 : 3,
                                        },
                                        h,
                                    ),
                                ),
                                options: K,
                                actions: u().createElement(xl, {
                                    parentId: L,
                                    availableActions: z,
                                    onActionClick: X,
                                    isInstalled: N,
                                    isModernized: B,
                                    level: y,
                                    isFreeToDemount: b,
                                    destroyTooltipBodyPath: k,
                                }),
                                overlayType: E,
                                onSlotClick: Y,
                                shouldHandleMouseOver: !0,
                                onTooltipShow: T ? H : void 0,
                                onTooltipHide: T ? $ : void 0,
                                lockReason: w,
                            });
                        },
                    ),
                    Ll = {
                        base: 'Cards_base_f1',
                        base__large: 'Cards_base__large_a2',
                        base__huge: 'Cards_base__huge_32',
                        base__disabled: 'Cards_base__disabled_20',
                        card: 'Cards_card_5e',
                        card__large: 'Cards_card__large_0e',
                        card__huge: 'Cards_card__huge_84',
                    };
                function Rl() {
                    return (
                        (Rl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Rl.apply(this, arguments)
                    );
                }
                const Ml = (0, o.memo)(
                        ({
                            currentCardRef: e,
                            selectedSlot: t,
                            modelPath: n,
                            isDisabled: a,
                            isBootCamp: s = !1,
                            compare: i = !1,
                        }) => {
                            const r = (0, wa.GS)(),
                                o = (0, se.m)(n, !1).onSlotAction,
                                l = (0, se.m)(`${n}.slots`).map(({ value: n }) => {
                                    if (!n || !n.isVisible) return null;
                                    const a = n.installedSlotId,
                                        l = a > -1 && t === a,
                                        _ = c()(Ll.card, r && Ll[`card__${r}`]);
                                    return u().createElement(
                                        'div',
                                        { key: n.intCD, ref: l ? e : null, className: _ },
                                        u().createElement(
                                            Nl,
                                            Rl({}, n, { isCurrent: l, onSlotAction: o, compare: i, isBootCamp: s }),
                                        ),
                                    );
                                }),
                                _ = c()(Ll.base, r && Ll[`base__${r}`], a && Ll.base__disabled);
                            return u().createElement('div', { className: _, id: 'optDevices' }, l);
                        },
                    ),
                    Ol = {
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
                    Pl = ({ introType: e }) => {
                        const t = c()(Ol.icon, Ol[`icon__currency-${e}`]),
                            n = (0, o.useMemo)(
                                () => ({
                                    currencyName: u().createElement(
                                        'span',
                                        { className: Ol.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: u().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? u().createElement(Re, { binding: n, text: a, classMix: Ol.message }) : null;
                    },
                    Hl = ({ slotsType: e, haveSuitableEquipments: t = !0 }) => {
                        const n = (0, wa.GS)(),
                            a = n === wa.cJ.Large || n === wa.cJ.Huge,
                            s = (0, o.useState)(!0),
                            i = s[0],
                            r = s[1],
                            l = (0, se.m)(Wl, !1).onIntroPassed,
                            _ = (0, o.useCallback)(() => {
                                r(!1);
                            }, []),
                            d = (0, o.useCallback)(() => {
                                l(), r(!0);
                            }, [l]),
                            m = c()(Ol.base, n && Ol[`base__${n}`]),
                            p = (0, o.useMemo)(
                                () => ({
                                    enter: Ol.base__enter,
                                    enterActive: Ol.base__enterActive,
                                    exit: Ol.base__exit,
                                    exitActive: Ol.base__exitActive,
                                }),
                                [],
                            ),
                            b = c()(Ol.image, a ? Ol[`image__${e}Large`] : Ol[`image__${e}`]),
                            E = t
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(e)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(e);
                        return u().createElement(
                            oe.Z,
                            { in: i, classNames: p, timeout: 300, onExited: d },
                            u().createElement(
                                'div',
                                { className: m, id: 'introduction' },
                                u().createElement(
                                    'div',
                                    { className: Ol.introduction },
                                    u().createElement('div', { className: b }),
                                    u().createElement(
                                        'div',
                                        { className: Ol.description },
                                        u().createElement('div', { className: Ol.title }, E),
                                        u().createElement(Pl, { introType: e }),
                                    ),
                                    t &&
                                        u().createElement(
                                            Na.u5,
                                            { type: Na.L$.secondary, size: Na.qE.medium, onClick: _ },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    },
                    $l = 'OptDevicesSetup_intro_ae',
                    Wl = 'model.tankSetup.optDevicesSetup',
                    zl = ({ compare: e }) => {
                        var t, n, a, s;
                        const i = (0, wa.GS)(),
                            r = (0, se.m)(e ? 'model' : 'model.ammunitionPanel'),
                            l = r.selectedSlot,
                            c = r.sectionGroups,
                            _ = (0, se.m)('model').isBootcamp,
                            d = (0, se.m)(Wl),
                            m = d.slots,
                            p = d.withIntroduction,
                            b = d.introductionType,
                            E = (0, se.m)(Wl, !1),
                            g = E.onDealConfirmed,
                            h = E.onDealCancelled,
                            f = E.onTabChanged,
                            v = E.onAutoRenewalChanged,
                            C = E.onFilterChanged,
                            A = E.onFilterReset,
                            D = E.hasUnfitItems,
                            S = (0, se.m)(`${Wl}.filter`),
                            F = (0, se.m)(`${Wl}.tabs`),
                            B =
                                c &&
                                (null == (t = c[0]) ||
                                null == (n = t.value.sections[0]) ||
                                null == (a = n.value.slots[l])
                                    ? void 0
                                    : a.value),
                            y = F.selectedTabName,
                            w = (0, se.m)(`${Wl}.slots`).length,
                            k = (0, o.useMemo)(
                                () =>
                                    !e &&
                                    p &&
                                    u().createElement(
                                        'div',
                                        { className: $l },
                                        u().createElement(Ml, { selectedSlot: l, modelPath: Wl, isDisabled: p }),
                                        u().createElement(Hl, { slotsType: b, haveSuitableEquipments: m.length > 0 }),
                                    ),
                                [e, p, b, m.length, l],
                            ),
                            T = {
                                tabs: F,
                                filter: S,
                                onFilterChanged: C,
                                onFilterReset: A,
                                onTabChanged: f,
                                propsForDisplayHeaderContent: {
                                    isComparisonHeader: e,
                                    isIntroduction: p,
                                    haveSuitableEquipments: m.length > 0,
                                    hasUnfitItems: D,
                                },
                                selectedSlotSpecialization:
                                    null == B || null == (s = B.specializations.specializations[0])
                                        ? void 0
                                        : s.value.name,
                            };
                        return u().createElement(wa.Ar, {
                            compare: e,
                            header: u().createElement(ll, T),
                            content:
                                k ||
                                u().createElement(
                                    br,
                                    { selectedSlotId: l, scrollAreaKey: y, updateKey: `${S.selectedFilterCount}:${w}` },
                                    u().createElement(Ml, {
                                        compare: e,
                                        selectedSlot: l,
                                        modelPath: Wl,
                                        isDisabled: p,
                                        isBootCamp: _,
                                    }),
                                ),
                            footer:
                                !e &&
                                u().createElement(Qo.w, {
                                    withConfirmation: !0,
                                    parentModelPath: Wl,
                                    mediaSize: i,
                                    onDealConfirmed: g,
                                    onDealCancelled: h,
                                    onAutoRenewalChanged: v,
                                }),
                        });
                    };
                var Gl = n(5958);
                const Xl = {
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
                    Yl = u().memo(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: s,
                            actionType: i,
                            uniqueKey: r,
                            onTransitionEnd: l,
                        }) => {
                            const _ = (0, o.useMemo)(() => n === wa.cJ.Tiny, [n]),
                                d = (0, o.useMemo)(() => a === t, [a, t]),
                                m = (0, o.useMemo)(() => i === Er.Xo || i === Er.zf, [i]),
                                p = (0, o.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, o.useMemo)(() => ((s - a > 1 && _) || !m ? 'Fade' : ''), [m, a, s, _]),
                                E = (0, o.useCallback)(
                                    (e) =>
                                        u().cloneElement(e, {
                                            classNames: {
                                                enterActive: Xl.base__enter,
                                                enterDone: Xl[`base__enter${p}${b}`],
                                                exit: Xl[`base__exit${p}${b}`],
                                                exitActive: Xl.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                g = (0, o.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), l && l();
                                        }, Gl.PD);
                                    },
                                    [l],
                                ),
                                h = (0, o.useMemo)(() => ({ animationDuration: `${Gl.PD}ms` }), []),
                                f = c()(Xl.base, Xl[`base__${n}`]);
                            return u().createElement(
                                re.Z,
                                { component: null, childFactory: E },
                                u().createElement(
                                    oe.Z,
                                    { key: r, timeout: Gl.PD, onEntered: g },
                                    u().createElement('div', { className: f, style: h }, e),
                                ),
                            );
                        },
                    ),
                    jl = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Ul = ({ paramName: e, value: t, metricValue: n, media: a, isSuperficial: s }) => {
                        const i = c()(jl.base, a && jl[`base__${a}`]),
                            r = c()(jl.separator, a && jl[`separator__${a}`]),
                            l = u().createElement(
                                'div',
                                { className: jl.value },
                                t || u().createElement('span', null, '—'),
                            ),
                            _ = (0, o.useMemo)(() => {
                                if ('avgPiercingPower' === e) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [e]);
                        return u().createElement(
                            'div',
                            { className: i },
                            s
                                ? u().createElement(
                                      u().Fragment,
                                      null,
                                      R.strings.menu.tank_params.shortened.$dyn(e),
                                      ' ',
                                      l,
                                      u().createElement('div', { className: jl.units }, _),
                                  )
                                : u().createElement(
                                      u().Fragment,
                                      null,
                                      R.strings.menu.tank_params.$dyn(e),
                                      u().createElement('div', { className: jl.units }, n),
                                      u().createElement('div', { className: r }),
                                      l,
                                  ),
                        );
                    };
                var Vl = n(7405),
                    Zl = n(329);
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
                function Kl() {
                    return (
                        (Kl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Kl.apply(this, arguments)
                    );
                }
                const Jl = (0, o.memo)(
                        ({
                            buyCount: e,
                            inStorageCount: t,
                            inVehicleCount: n,
                            isSuperficial: a,
                            price: s,
                            totalPrice: i,
                            mediaSize: r,
                        }) => {
                            const l = (0, o.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inStorage(),
                                    [a],
                                ),
                                _ = (0, o.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inVehicle(),
                                    [a],
                                ),
                                d = (0, o.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[a ? 'shortSpecification' : 'specification'].price(),
                                    [a],
                                ),
                                m = n >= 0,
                                p = s.defPrice.length > 0,
                                b = (0, o.useMemo)(
                                    () =>
                                        p
                                            ? {
                                                  tooltip: 'priceDiscount',
                                                  price: s.price[0].value.value,
                                                  defPrice: s.defPrice[0].value.value,
                                                  currencyType: s.price[0].value.name,
                                              }
                                            : void 0,
                                    [p, s.defPrice, s.price],
                                ),
                                E = c()(ql.base, r && ql[`base__${r}`]),
                                g = c()(ql.separator, r && ql[`separator__${r}`]),
                                h = c()(ql.row, r && ql[`row__${r}`]),
                                f = c()(ql.total, r && ql[`total__${r}`]),
                                v = c()(ql.price, ql.price__final),
                                C = c()(ql.lowResolutionValue, r && ql[`lowResolutionValue__${r}`]),
                                A = c()(ql.hiResolutionValue, r && ql[`hiResolutionValue__${r}`]),
                                D = c()(ql.colored, r && ql[`colored__${r}`]),
                                S = u().createElement('span', { className: ql.indent }),
                                F = u().createElement('span', { className: ql.divider }, '/');
                            return u().createElement(
                                'div',
                                { className: E },
                                u().createElement(
                                    'div',
                                    { className: h },
                                    u().createElement(
                                        'div',
                                        { className: ql.rowItem },
                                        u().createElement('div', { className: f }, l),
                                        u().createElement('div', { className: C }, S, t),
                                    ),
                                    m &&
                                        u().createElement(
                                            u().Fragment,
                                            null,
                                            F,
                                            u().createElement(
                                                'div',
                                                { className: ql.rowItem },
                                                u().createElement(
                                                    'div',
                                                    { className: f },
                                                    u().createElement('div', { className: D }, _),
                                                ),
                                                u().createElement('div', { className: C }, S, n),
                                            ),
                                        ),
                                    u().createElement('div', { className: g }),
                                    u().createElement(
                                        'div',
                                        { className: A },
                                        t,
                                        m &&
                                            u().createElement(
                                                u().Fragment,
                                                null,
                                                F,
                                                u().createElement('div', { className: D }, n),
                                            ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: h },
                                    u().createElement('div', { className: f }, d),
                                    u().createElement('div', { className: g }),
                                    u().createElement(
                                        'div',
                                        { className: ql.value },
                                        u().createElement(
                                            'div',
                                            { className: ql.overall },
                                            '(',
                                            u().createElement('span', null, e),
                                            ' ',
                                            '×',
                                            u().createElement(
                                                Gt.t,
                                                { args: b, isEnabled: p },
                                                u().createElement(
                                                    'span',
                                                    { className: ql.price },
                                                    u().createElement(Lr.t, Kl({ showZero: !0 }, s)),
                                                ),
                                            ),
                                            ')',
                                            u().createElement(
                                                'span',
                                                { className: v },
                                                e
                                                    ? u().createElement(
                                                          Lr.t,
                                                          Kl({ showZero: !0, ignoreDiscount: !0 }, i),
                                                      )
                                                    : u().createElement(Vl.F, {
                                                          size: Zl.et.small,
                                                          type: Zl.V2.credits,
                                                          value: 0,
                                                      }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ql = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                function ec() {
                    return (
                        (ec =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ec.apply(this, arguments)
                    );
                }
                const tc = ({
                    buyCount: e,
                    itemsInStorage: t,
                    itemsInVehicle: n,
                    price: a,
                    totalPrice: s,
                    specifications: i,
                    media: r,
                }) => {
                    const l = r === wa.cJ.Tiny,
                        _ = i.map(({ value: e }, t) =>
                            e && ('avgPiercingPower' === e.paramName || (!l && e.value))
                                ? u().createElement(
                                      o.Fragment,
                                      { key: t },
                                      u().createElement(Ul, ec({}, e, { media: r, isSuperficial: l })),
                                  )
                                : null,
                        ),
                        d = c()(Ql.base, r && Ql[`base__${r}`]);
                    return u().createElement(
                        'div',
                        { className: d },
                        u().createElement('div', { className: Ql.overall }, _),
                        u().createElement(
                            'div',
                            { className: Ql.total },
                            u().createElement(Jl, {
                                buyCount: e,
                                inStorageCount: t,
                                inVehicleCount: n,
                                price: a,
                                totalPrice: s,
                                isSuperficial: l,
                                mediaSize: r,
                            }),
                        ),
                    );
                };
                var nc = n(2094);
                const ac = {
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
                    sc = ({
                        type: e,
                        intCD: t,
                        imageName: n,
                        count: a,
                        buyCount: s,
                        price: i,
                        totalPrice: r,
                        itemsInStorage: l,
                        itemsInVehicle: _,
                        specifications: d,
                        availableCount: m,
                        clipCount: p,
                        onShellUpdate: b,
                        maxCount: E,
                        installedSlotId: g,
                        itemInstalledSetupIdx: h,
                        itemInstalledSetupSlotIdx: f,
                        isMountedMoreThanOne: v,
                        mediaSize: C,
                    }) => {
                        const A = (0, o.useCallback)(
                                (e) => {
                                    b && b({ intCD: t, newCount: e });
                                },
                                [b, t],
                            ),
                            D = (0, o.useMemo)(() => {
                                const e = { slotType: ge.g9, fieldType: 0, intCD: t };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: g,
                                        itemInstalledSetupIdx: h,
                                        itemInstalledSetupSlotIdx: f,
                                        isMountedMoreThanOne: v,
                                    }),
                                ];
                            }, [t, g, h, f, v]),
                            S = D[0],
                            F = D[1],
                            B = (0, o.useMemo)(() => {
                                const e = ((e) => {
                                    const t = R.images.gui.maps.icons.shell;
                                    switch (e) {
                                        case wa.cJ.Huge:
                                        case wa.cJ.Large:
                                            return t.large;
                                        default:
                                            return t.big;
                                    }
                                })(C);
                                return { backgroundImage: `url(${e ? e.$dyn(n) : ''})` };
                            }, [n, C]),
                            y = (0, o.useMemo)(() => {
                                const t = R.strings.item_types.shell.kinds.$dyn(e);
                                return (
                                    t && u().createElement('div', { className: ac.name }, systemLocale.toUpperCase(t))
                                );
                            }, [e]),
                            w = c()(ac.count, !a && ac.count__zero),
                            k = c()(ac.base, C && ac[`base__${C}`]);
                        return u().createElement(
                            'div',
                            { className: k },
                            u().createElement(
                                'div',
                                { className: ac.shell },
                                u().createElement(
                                    un,
                                    { args: F },
                                    u().createElement(
                                        Gt.t,
                                        { args: S },
                                        u().createElement(
                                            'div',
                                            { className: ac.icon, style: B },
                                            u().createElement('div', { className: w }, a),
                                        ),
                                    ),
                                ),
                                y,
                            ),
                            u().createElement(
                                'div',
                                { className: ac.ammunition },
                                u().createElement(nc.i, {
                                    parentId: `${t}-slider`,
                                    currentValue: a,
                                    maximum: E,
                                    sliderMaximum: m,
                                    onUpdates: A,
                                    stepCount: p,
                                }),
                            ),
                            u().createElement(
                                'div',
                                { className: ac.specifications },
                                u().createElement(tc, {
                                    specifications: d,
                                    itemsInStorage: l,
                                    itemsInVehicle: _,
                                    price: i,
                                    buyCount: s,
                                    media: C,
                                    totalPrice: r,
                                }),
                            ),
                        );
                    },
                    ic = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    rc = u().memo(
                        ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: s = 'play' }) => {
                            const i = (0, o.useCallback)(() => {
                                    s && (0, fe.G)(s), t(e);
                                }, [e, t, s]),
                                r = (0, o.useCallback)(() => {
                                    a && (0, fe.G)(a);
                                }, [a]),
                                l = c()(ic.base, ic[`base__${n}`]);
                            return u().createElement('div', {
                                id: `swap-${e}`,
                                onClick: i,
                                onMouseEnter: r,
                                className: l,
                            });
                        },
                    ),
                    oc = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        shell: 'Sections_shell_a2',
                        base__large: 'Sections_base__large_d0',
                        base__huge: 'Sections_base__huge_b0',
                        swap: 'Sections_swap_be',
                        swap__noEvents: 'Sections_swap__noEvents_2d',
                    };
                function uc() {
                    return (
                        (uc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        uc.apply(this, arguments)
                    );
                }
                const lc = () => {
                    const e = (0, se.m)(_c),
                        t = e.installedCount,
                        n = e.maxCount,
                        a = e.clipCount,
                        s = e.onShellUpdate,
                        i = e.onSlotAction,
                        r = (0, se.m)(`${_c}.slots`),
                        l = (0, se.m)('model.lastSlotAction'),
                        _ = l.leftID,
                        d = l.rightID,
                        m = l.actionType,
                        p = (0, o.useState)(!1),
                        b = p[0],
                        E = p[1],
                        g = (0, wa.GS)(),
                        h = n - t,
                        f = (0, o.useCallback)(
                            (e) => {
                                b || i({ actionType: Er.Xo, leftID: e, rightID: e + 1 }), E(!0);
                            },
                            [i, b],
                        ),
                        v = (0, o.useCallback)(() => {
                            E(!1);
                        }, [E]),
                        C = c()(oc.base, oc[`base__${g}`]);
                    return u().createElement(
                        'div',
                        { className: C },
                        r.map(
                            ({ value: e }, t) =>
                                Boolean(e) &&
                                u().createElement(
                                    o.Fragment,
                                    { key: t },
                                    u().createElement(
                                        Yl,
                                        {
                                            index: t,
                                            uniqueKey: e.intCD,
                                            leftID: _,
                                            rightID: d,
                                            actionType: m,
                                            mediaSize: g,
                                            onTransitionEnd: v,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: oc.shell },
                                            u().createElement(
                                                sc,
                                                uc({}, e, {
                                                    clipCount: a,
                                                    maxCount: n,
                                                    availableCount: h + e.count,
                                                    mediaSize: g,
                                                    onShellUpdate: s,
                                                }),
                                            ),
                                        ),
                                    ),
                                    t !== r.length - 1 &&
                                        u().createElement(
                                            'div',
                                            { className: oc.swap },
                                            u().createElement(rc, { id: t, mediaSize: g, onSwap: f }),
                                        ),
                                ),
                        ),
                    );
                };
                var cc = n(5096);
                const _c = 'model.tankSetup.shellsSetup',
                    dc = () => {
                        const e = (0, wa.GS)(),
                            t = (0, se.m)(_c),
                            n = t.onDealConfirmed,
                            a = t.onDealCancelled,
                            s = t.onAutoRenewalChanged;
                        return u().createElement(wa.Ar, {
                            header: u().createElement(io, {
                                title: R.strings.tank_setup.section.shells(),
                                content: u().createElement(cc.k, { isShortened: !0, trackChanges: !0, modelPath: _c }),
                            }),
                            content: u().createElement(lc, null),
                            footer: u().createElement(Qo.w, {
                                withConfirmation: !0,
                                renewalType: eu.m.Shells,
                                parentModelPath: _c,
                                mediaSize: e,
                                onDealConfirmed: n,
                                onDealCancelled: a,
                                onAutoRenewalChanged: s,
                            }),
                        });
                    },
                    mc = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    };
                function pc(e, t, n, a, s, i, r) {
                    try {
                        var o = e[i](r),
                            u = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(a, s);
                }
                function bc(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (a, s) {
                            var i = e.apply(t, n);
                            function r(e) {
                                pc(i, a, s, r, o, 'next', e);
                            }
                            function o(e) {
                                pc(i, a, s, r, o, 'throw', e);
                            }
                            r(void 0);
                        });
                    };
                }
                const Ec = ({ isHidden: e = !1 }) => {
                        const t = (0, o.useState)(!1),
                            n = t[0],
                            a = t[1],
                            s = (0, o.useRef)(null),
                            r = (0, se.m)('model', !1).onResized,
                            l = (0, se.m)('model.vehicleInfo', !0),
                            _ = (0, wa.GS)();
                        (0, o.useEffect)(() => {
                            const e = (0, w.v)(() => a(!0));
                            return () => e();
                        }, []);
                        const d = (0, o.useCallback)(
                            bc(function* () {
                                yield (0, I.Eu)(), yield nr();
                                const e = s.current;
                                e &&
                                    r({
                                        x: i.O.view.pxToRem(e.getBoundingClientRect().x),
                                        width: i.O.view.pxToRem(e.offsetWidth),
                                    });
                            }),
                            [r],
                        );
                        (0, o.useEffect)(() => {
                            if (!n) return (0, w.v)(d);
                        }, [d, n]),
                            (0, o.useEffect)(
                                () => (
                                    engine.on('clientResized', d),
                                    () => {
                                        engine.off('clientResized', d);
                                    }
                                ),
                                [d, r],
                            );
                        const m = c()(mc.base, _ && mc[`base__${_}`], e && mc.base__hidden);
                        return u().createElement('div', { className: m, ref: s }, u().createElement(Ws, l));
                    },
                    gc = {
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
                    hc = [ge.zn, ge.g9, ge.mH, ge.G$, ge.YN],
                    fc = (e, t) => (t === e ? '' : hc.indexOf(t) > hc.indexOf(e) ? 'right' : 'left'),
                    vc = ({ children: e, selectedSetup: t }) => {
                        const n = u().createRef(),
                            a = (0, o.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, o.useMemo)(() => {
                                const e = fc(a.current.selectedSetup, t);
                                return { enter: gc[`base__${e}Enter`] };
                            }, [t]),
                            i = (0, o.useCallback)(
                                (e) => {
                                    const s = fc(a.current.selectedSetup, t);
                                    (e.className = c()(gc.base, gc.base__exit)),
                                        e.classList.add(gc[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n);
                                    Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(gc.base__previous);
                                    }),
                                        n.current && n.current.classList.add(gc.base__previous);
                                },
                                [n, t],
                            ),
                            r = (0, o.useCallback)(
                                (e) => {
                                    const n = fc(a.current.previousSelectedSetup, t);
                                    (e.className = gc.base), e.classList.add(gc[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, o.useCallback)(
                                (e) => {
                                    const n = fc(a.current.previousSelectedSetup, t);
                                    e.classList.add(gc[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, o.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            u().createElement(
                                re.Z,
                                null,
                                u().createElement(
                                    oe.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: i,
                                        onEnter: r,
                                        onEntering: l,
                                    },
                                    u().createElement('div', { className: gc.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    Cc = ({ compare: e = !1 }) => {
                        const t = (0, se.m)('model.tankSetup').selectedSetup;
                        return u().createElement(
                            o.Fragment,
                            null,
                            u().createElement(
                                vc,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case ge.zn:
                                            return u().createElement(zl, { compare: e });
                                        case ge.g9:
                                            return u().createElement(dc, null);
                                        case ge.mH:
                                            return u().createElement(Tu, { compare: e });
                                        case ge.G$:
                                            return u().createElement(pu, { compare: e });
                                        case ge.YN:
                                            return u().createElement(bo, null);
                                        default:
                                            return u().createElement(zl, { compare: e });
                                    }
                                })(),
                            ),
                            !e && u().createElement(Ec, { isHidden: t === ge.YN }),
                        );
                    },
                    Ac = () => {
                        const e = $('model'),
                            t = e.onClose,
                            n = e.onViewRendered,
                            a = e.onAnimationEnd,
                            s = e.show,
                            i = e.isReady,
                            r = e.isBootcamp,
                            l = $('model.tankSetup').selectedSetup,
                            c = (0, o.useState)(!1),
                            _ = c[0],
                            d = c[1];
                        (0, o.useEffect)(() => (0, w.v)(n), [n]);
                        const m = (0, o.useCallback)(() => a(), [a]),
                            p = (0, o.useCallback)(() => {
                                !_ && t();
                            }, [t, _]);
                        return u().createElement(he.S, {
                            show: s,
                            content: u().createElement(Cc, null),
                            panel: u().createElement(Aa, {
                                show: s,
                                isReady: i,
                                isBootCamp: r,
                                panelType: de.Setup,
                                setIsExitBlocked: d,
                            }),
                            button: l === ge.YN && u().createElement(ya, { theme: Ba.Standalone }),
                            onAnimationDone: m,
                            onClose: p,
                        });
                    };
                i.O.view.whenTutorialReady.then(() => {
                    y().render(
                        u().createElement(F, null, u().createElement(Ac, null)),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7739),
                    r = n(6179),
                    o = n.n(r),
                    u = n(1960);
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
                        const e = (0, r.useContext)(i.YN);
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
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: i = !1 }) => {
                        const r = c(),
                            l = s()(u.Z.base, r && u.Z[`base__${r}`], i && u.Z.base__compare),
                            _ = s()(u.Z.header, r && u.Z[`header__${r}`]),
                            d = s()(u.Z.main),
                            m = s()(u.Z.content);
                        return o().createElement(
                            'div',
                            { className: l },
                            e && o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement(
                                    'div',
                                    { className: d },
                                    o().createElement('div', { className: u.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && o().createElement('div', { className: u.Z.footer }, a),
                        );
                    };
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => C });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3457),
                    r = n(2106),
                    o = n(6373),
                    u = n(6179),
                    l = n.n(u);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    b = 'Action_image_e9',
                    E = 'Action_button_74',
                    g = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    f = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var v;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(v || (v = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: S = r.L.primary,
                    isModernized: F,
                    isFreeToDemount: B,
                    level: y,
                    onClick: w,
                }) => {
                    const k = (0, u.useRef)(null),
                        T = (0, u.useRef)(v.Hidden),
                        x = (0, u.useRef)(!1),
                        I = (0, u.useState)(!a),
                        N = I[0],
                        L = I[1],
                        M = (0, u.useState)(!1),
                        O = M[0],
                        P = M[1],
                        H = (0, u.useState)(),
                        $ = H[0],
                        W = H[1],
                        z = (0, u.useCallback)(() => {
                            const e = T.current;
                            e === v.FadeIn
                                ? ((T.current = v.Hidden), L(!0))
                                : e === v.FadeOut && (T.current = v.Visible);
                        }, []);
                    (0, u.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', z),
                                () => {
                                    e.removeEventListener('animationend', z);
                                }
                            );
                    }, [z]),
                        (0, u.useEffect)(() => {
                            a !== x.current &&
                                (a ? ((T.current = v.FadeOut), L(!1)) : (T.current = v.FadeIn), (x.current = a));
                        }, [a]),
                        (0, u.useEffect)(() => {
                            if (O) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [O]),
                        (0, u.useEffect)(() => () => $ && clearTimeout($), [$]);
                    const G = (0, u.useCallback)(() => {
                            O || (P(!0), T.current === v.Visible && W(setTimeout(() => w(t), 200)));
                        }, [t, w, O]),
                        X = F ? f(t, y) : t,
                        Y = (0, u.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? f(e, t) : e))(t, y, B, F);
                            return {
                                header: g.title.$dyn(e),
                                body: h.includes(e) ? void 0 : g.description.$dyn(D || e),
                            };
                        }, [t, C, A, B, F, y, D]),
                        j = (0, u.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(X)})`,
                            }),
                            [X, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, a ? d : _, N && m) },
                        l().createElement(
                            o.i,
                            Y,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    i.u5,
                                    { onClick: G, type: S, mixClass: E, disabled: C },
                                    l().createElement('div', { className: b, style: j }),
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
                    i = n(6483),
                    r = n.n(i),
                    o = n(3457),
                    u = n(6373);
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
                const E = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: i,
                    withToggle: l = !1,
                    toggle: E,
                    buttonProps: g,
                }) => {
                    const h = (0, a.useCallback)(() => {
                            i(t, E);
                        }, [t, i, E]),
                        f = (0, a.useMemo)(() => {
                            if (l) {
                                const t = r()(m, E && p);
                                return s().createElement(
                                    'div',
                                    { className: c },
                                    s().createElement('div', { className: _ }),
                                    E && s().createElement('div', { className: d }),
                                    s().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, E]);
                    return s().createElement(u.i, n, s().createElement(o.u5, b({}, g, { onClick: h }), f));
                };
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    s().createElement(
                        'div',
                        { className: l },
                        e.map((e) => s().createElement(E, g({ key: e.ctaType }, e))),
                    );
            },
            7208: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => p });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(2558),
                    u = n(8934),
                    l = n(4179);
                const c = 'Animation_base_ab',
                    _ = 'Animation_base__withAnimation_41',
                    d = 'Animation_base__enter_1e',
                    m = 'Animation_base__exit_88',
                    p = ({ children: e, when: t, canAccept: n }) => {
                        const i = r()(c, _),
                            p = (0, a.useCallback)((e, t) => {
                                (0, l.Eu)().then(() => {
                                    (e.className = ''), e.classList.add(c), e.classList.add(t);
                                });
                            }, []),
                            b = (0, a.useCallback)(
                                (e) => {
                                    p(e, d);
                                },
                                [p],
                            ),
                            E = (0, a.useCallback)(
                                (e) => {
                                    p(e, m);
                                },
                                [p],
                            );
                        return t
                            ? s().createElement(
                                  o.Z,
                                  null,
                                  s().createElement(
                                      u.Z,
                                      { in: n, timeout: 500, onEnter: b, onExit: E, key: `index-${n}` },
                                      s().createElement('div', { className: i }, e),
                                  ),
                              )
                            : s().createElement('div', { className: c }, e);
                    };
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => l, m: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(9056),
                    r = n(6373),
                    o = n(2262);
                let u;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(u || (u = {}));
                const l = (0, a.memo)(
                    ({
                        modelPath: e,
                        label: t = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: n,
                        renewType: l = u.General,
                    }) => {
                        const c = (0, i.m)(e),
                            _ = c.isAutoRenewalEnabled,
                            d = c.onAutoRenewalChanged,
                            m = (0, a.useCallback)(() => {
                                const e = { value: !_ };
                                d && d(e), n && n(e);
                            }, [n, d, _]),
                            p = (0, a.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal;
                                return {
                                    header: e.header.$dyn(l) || e.header.general(),
                                    body: l === u.General ? '' : e.body.$dyn(l),
                                };
                            }, [l]);
                        return s().createElement(
                            r.i,
                            p,
                            s().createElement(o.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: _,
                                text: t,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            8982: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => d });
                var a = n(6179),
                    s = n.n(a),
                    i = n(3457),
                    r = n(6373),
                    o = n(7383);
                const u = 'ConfirmButton_base_75',
                    l = s().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: r }) => {
                        const o = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            l = (0, a.useCallback)(() => n && n(), [n]);
                        return s().createElement(
                            'div',
                            { ref: r, className: u, id: 'deal-panel-confirm' },
                            s().createElement(i.u5, { size: i.qE.medium, disabled: t, onClick: l }, o),
                        );
                    }),
                    c = 'Controls_base_d3',
                    _ = 'Controls_button_f8',
                    d = s().memo(
                        ({
                            applyBtnString: e = o.YR,
                            isDisabled: t,
                            canCancel: n,
                            onCancel: a,
                            onConfirm: u,
                            confirmButtonRef: d,
                        }) => {
                            const m = R.strings.tank_setup.dealPanel,
                                p = s().createElement(l, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: u,
                                    confirmButtonRef: d,
                                });
                            return s().createElement(
                                'div',
                                { id: 'deal-panel-controls', className: c },
                                t
                                    ? s().createElement(
                                          r.i,
                                          { body: m.tooltip.notEnough() },
                                          s().createElement('div', null, p),
                                      )
                                    : p,
                                s().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    s().createElement(
                                        i.u5,
                                        {
                                            size: i.qE.medium,
                                            type: i.L$.secondary,
                                            mixClass: _,
                                            disabled: !n,
                                            onClick: a,
                                        },
                                        m.button.cancel(),
                                    ),
                                ),
                            );
                        },
                    );
            },
            8772: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => A });
                var a = n(6483),
                    s = n.n(a),
                    i = n(9056),
                    r = n(6179),
                    o = n.n(r),
                    u = n(1922),
                    l = n(3934),
                    c = n(7208),
                    _ = n(5851),
                    d = n(8982);
                const m = {
                    base: 'DealPanel_base_10',
                    base__tiny: 'DealPanel_base__tiny_86',
                    base__small: 'DealPanel_base__small_f6',
                    base__medium: 'DealPanel_base__medium_8a',
                    base__large: 'DealPanel_base__large_7b',
                    base__huge: 'DealPanel_base__huge_b3',
                    base__dialog: 'DealPanel_base__dialog_b4',
                    storage: 'DealPanel_storage_40',
                    storage__medium: 'DealPanel_storage__medium_fe',
                    storage__large: 'DealPanel_storage__large_1e',
                    storage__huge: 'DealPanel_storage__huge_e3',
                    from: 'DealPanel_from_70',
                    plus: 'DealPanel_plus_b0',
                    renewal: 'DealPanel_renewal_a8',
                    renewal__dialog: 'DealPanel_renewal__dialog_aa',
                    control: 'DealPanel_control_39',
                    totalPrice: 'DealPanel_totalPrice_2d',
                    totalPrice__mixed: 'DealPanel_totalPrice__mixed_fd',
                };
                var p = n(8401);
                const b = 'TotalPrice_base_d9',
                    E = 'TotalPrice_message_66',
                    g = 'TotalPrice_message__hidden_29',
                    h = 'TotalPrice_plus_f0',
                    f = ({ parentId: e, isHideMessage: t, priceLabel: n, price: a, defPrice: i, discount: r }) => {
                        const u = s()(E, t && g);
                        return o().createElement(
                            'div',
                            { id: `${e}-total-price`, className: b },
                            o().createElement('div', { className: u }, n),
                            o().createElement(p.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a,
                                defPrice: i,
                                discount: r,
                                priceSeparator: o().createElement('div', { className: h }),
                            }),
                        );
                    };
                let v;
                !(function (e) {
                    (e.Column = 'column'), (e.Row = 'row');
                })(v || (v = {}));
                const C = R.strings.tank_setup.dealPanel,
                    A = ({
                        renewalType: e,
                        withConfirmation: t = !1,
                        mediaSize: n = u.cJ.Medium,
                        parentModelPath: a,
                        panelType: p = v.Row,
                        priceLabel: b = C.toBePaid(),
                        autoRenewalLabel: E,
                        onAutoRenewalChanged: g,
                        onDealConfirmed: h,
                        onDealCancelled: A,
                    }) => {
                        const D = `${a}.dealPanel`,
                            S = (0, i.m)(D),
                            F = S.totalItemsInStorage,
                            B = S.isDisabled,
                            y = S.canAccept,
                            w = S.canCancel,
                            k = S.price,
                            T = S.defPrice,
                            x = S.discount,
                            I = (0, r.useRef)(null),
                            N = n === u.cJ.Tiny || n === u.cJ.Small,
                            L = (0, r.useCallback)(() => h && h(), [h]),
                            R = (0, r.useCallback)(() => A && A(), [A]),
                            M = p === v.Row,
                            O = Boolean(F),
                            P = Boolean(k.length),
                            H = N && O && P,
                            $ = s()(m.base, n && m[`base__${n}`], e && m.base__renewal, !M && m.base__dialog),
                            W = s()(m.storage, n && m[`storage__${n}`]),
                            z = s()(m.renewal, !M && m.renewal__dialog),
                            G = s()(m.totalPrice, H && m.totalPrice__mixed);
                        return o().createElement(
                            'div',
                            { className: $ },
                            e &&
                                o().createElement(
                                    'div',
                                    { className: z },
                                    o().createElement(_.Y, { modelPath: D, renewType: e, onValueChanged: g, label: E }),
                                ),
                            o().createElement(
                                c.f,
                                { when: M, canAccept: y },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    O &&
                                        o().createElement(
                                            'div',
                                            { className: W },
                                            !N && o().createElement('div', { className: m.from }, C.fromStorage()),
                                            o().createElement(l.K, { valueFirst: !0, itemsInStorage: F }),
                                        ),
                                    H && o().createElement('div', { className: m.plus }),
                                    P &&
                                        o().createElement(
                                            'div',
                                            { className: G },
                                            o().createElement(f, {
                                                parentId: 'deal-panel',
                                                priceLabel: b,
                                                price: k,
                                                defPrice: T,
                                                discount: x,
                                                isHideMessage: N && M,
                                            }),
                                        ),
                                    t &&
                                        y &&
                                        o().createElement(
                                            'div',
                                            { className: m.control },
                                            o().createElement(d.Z, {
                                                isDisabled: B,
                                                canCancel: w,
                                                onCancel: R,
                                                onConfirm: L,
                                                confirmButtonRef: I,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
            },
            8750: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => l, F: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const o = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let u;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(u || (u = {}));
                const l = ({ type: e = u.SMALL, imageSource: t }) => {
                    const n = r()(o.base, e !== u.SMALL && o[`base__${e}`]),
                        i = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: n, style: i });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(5282),
                    u = n(3649);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: i,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = r()(l, _),
                            b = (0, u.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? s().createElement(
                                              'span',
                                              { key: t, className: p },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          s().createElement(
                                              'span',
                                              { key: t, className: c },
                                              s().createElement(o.n, {
                                                  mediaSize: n,
                                                  blocks: (0, o.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            E = (0, a.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? s().createElement(
                                                      'span',
                                                      { key: t, className: p },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : s().createElement('span', { key: t }, `${e} `),
                                        ),
                                [p, t],
                            ),
                            g = r()(l, i);
                        return s().createElement(
                            'div',
                            { id: `${e}-details`, className: g },
                            m ? b : s().createElement(o.n, { mediaSize: n, blocks: E, linesCount: d }),
                        );
                    };
            },
            3267: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => i });
                var a = n(6179),
                    s = n.n(a);
                const i = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                    n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => d });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(7405),
                    u = n(329);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: i = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length),
                            b = r()(c, p && _);
                        return s().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (i || Boolean(e.value)) &&
                                    s().createElement(
                                        a.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        s().createElement(
                                            'div',
                                            { className: b },
                                            s().createElement(o.F, {
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
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { S: () => p, y: () => m });
                var a = n(6483),
                    s = n.n(a),
                    i = n(8089),
                    r = n(8526),
                    o = n(5521),
                    u = n(7727),
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
                        content__shown: 'SetupApp_content__shown_dd',
                        'show-app': 'SetupApp_show-app_00',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_29',
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    m = 'setup-content',
                    p = ({ content: e, panel: t, button: n, show: a = !0, onAnimationDone: p, onClose: b }) => {
                        const E = (0, _.GS)(),
                            g = (0, l.useRef)(null),
                            h = (0, l.useRef)(!1);
                        (0, r.gd)(o.n.ESCAPE, b);
                        const f = !t,
                            v = (0, l.useCallback)(
                                (e) => {
                                    p && e.target === g.current && p();
                                },
                                [p],
                            );
                        (0, l.useEffect)(() => {
                            a && (h.current = !0), h.current && (0, u.G)('cons_select_view');
                        }, [a]),
                            (0, l.useEffect)(() => {
                                const e = g.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', v),
                                        () => {
                                            e.removeEventListener('animationend', v);
                                        }
                                    );
                            }, [v]);
                        const C = s()(d.base, a && d.base__shown, f ? d.base__compare : d.base__setup),
                            A = s()(d.content, f && d.content__compare, d['content__' + (a ? 'shown' : 'hidden')]),
                            D = !a && !h.current,
                            S = s()(d.close, E && d[`close__${E}`]);
                        return c().createElement(
                            'div',
                            { className: C },
                            f && c().createElement('div', { className: d.back }),
                            n,
                            a &&
                                c().createElement(
                                    'div',
                                    { id: 'setup-app-close-btn', className: S },
                                    c().createElement(i.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: b,
                                    }),
                                ),
                            !D && c().createElement('div', { id: m, ref: g, className: A }, e),
                            t && c().createElement('div', { className: d.panel }, t),
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    s = n.n(a),
                    i = n(1856),
                    r = n(4179),
                    o = n(6179),
                    u = n.n(o),
                    l = n(6605);
                const c = 'ShortenedText_base_fe',
                    _ = 'ShortenedText_base__shown_af';
                var d = n(3138);
                const m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => u().createElement('span', { key: t }, `${e} `)),
                    p = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, o.useState)(e),
                            m = a[0],
                            p = a[1],
                            b = (0, o.useState)({ width: 0, height: 0 }),
                            E = b[0],
                            g = b[1],
                            h = (0, o.useRef)(null),
                            f = (0, o.useRef)({ shortened: !1 }),
                            v = (0, o.useCallback)(() => {
                                (0, r.Eu)().then(() => {
                                    const e = (0, l.D)(h);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = h.current;
                                        if (a && isFinite(n)) {
                                            const e = d.O.view.remToPx(t * n);
                                            g({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, o.useEffect)(() => {
                            if (e.length) return f.current.shortened && (f.current.shortened = !1), (0, i.v)(v);
                        }, [e, n, v]),
                            (0, o.useEffect)(() => {
                                if (E.height && !f.current.shortened) {
                                    const t = (0, l.M)(h, E.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        n.push(u().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (f.current.shortened = !0);
                                    }
                                }
                            }, [e, E, n]);
                        const C = (0, o.useMemo)(() => (E.height ? { maxHeight: `${E.height}rem` } : {}), [E.height]);
                        return u().createElement('div', { ref: h, className: s()(c, E.height && _), style: C }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => i });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    i = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                i = Array.from(n.children);
                            if (i.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!s(e[n], t)) return -1;
                                    let a = 0,
                                        i = n - 1,
                                        r = !1;
                                    for (; i - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (i - a + 1));
                                        (r = s(e[n], t)), r ? (i = n) : (a = n);
                                    }
                                    return r || s(e[i], t) ? a : i;
                                })(i, a);
                                if (t > 0) {
                                    const n = i[t].getBoundingClientRect();
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
                    i = n(8526),
                    r = n(5521),
                    o = n(7727),
                    u = n(6179),
                    l = n.n(u),
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
                        picker: i,
                        allowSlide: r,
                        theme: o = d,
                    }) => {
                        const u = {
                            '--progress-base': o.bgImageBase,
                            '--progress-line-base': o.line.bgColorBase,
                            '--progress-line-disabled': o.line.bgColorDisabled,
                            '--progress-line-finished': o.line.bgColorFinished,
                            '--progress-pattern-base': o.pattern.bgImageBase,
                            '--progress-pattern-disabled': o.pattern.bgImageDisabled,
                            '--progress-pattern-finished': o.pattern.bgImageFinished,
                            '--progress-glow': `url('${o.glow}')`,
                            '--progress-glow-small': `url('${o.glowSmall}')`,
                            '--progress-delta-color': o.delta.color,
                            '--progress-delta-shadow': o.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: u },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !r && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                i && l().createElement('div', { className: _.picker }, i),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    E = 'SlideControl_image__hover_eb',
                    g = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = s()(b, n && E, t && g);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: a }),
                        );
                    },
                    f = 'Slider_base_2c',
                    v = 'Slider_slideArea_dd',
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
                    F = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const i = s()(S.base, n && S.base__enabled, S[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: i, onClick: a });
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
                        stepCount: E = 1,
                    }) => {
                        const g = (0, u.useRef)(null),
                            S = (0, u.useRef)({ down: !1, move: !1, over: !1 }),
                            B = (0, u.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            y = (0, u.useState)(t),
                            w = y[0],
                            k = y[1],
                            T = (0, u.useState)(!1),
                            x = T[0],
                            I = T[1],
                            N = (0, u.useState)(!1),
                            L = N[0],
                            R = N[1],
                            M = (0, u.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = B.current.currentValue;
                                    if (E > 1) {
                                        t *= E;
                                        const e = n % E;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [E],
                            ),
                            O = (0, u.useCallback)(
                                (e, t) => {
                                    if (!g.current) return 0;
                                    const n = g.current.getBoundingClientRect(),
                                        a = B.current.maximum,
                                        s = n.width / a,
                                        i = e - n.left,
                                        r = Math.floor(s > 0 ? i / s : i);
                                    if (r > a) return a;
                                    if (r <= 0) return 0;
                                    if (E > 1) {
                                        let e = r - (r % E);
                                        const n = r - e;
                                        return (
                                            n > 0 && ((t && r > B.current.currentValue) || n > 0.5 * E) && (e += E), e
                                        );
                                    }
                                    return r;
                                },
                                [E],
                            ),
                            P = (0, u.useCallback)(
                                (e) => {
                                    const t = B.current,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum;
                                    e < a ? (e = a) : e > n && (e = n),
                                        B.current.currentValue !== e && (k(e), (B.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            H = t < a,
                            $ = t > 0,
                            W = (0, u.useCallback)(() => {
                                if (H && S.current.over) {
                                    const e = M(!0);
                                    P(e);
                                }
                            }, [H, M, P]),
                            z = (0, u.useCallback)(() => {
                                if ($ && S.current.over) {
                                    const e = M(!1);
                                    P(e);
                                }
                            }, [$, M, P]),
                            G = (0, u.useCallback)(() => {
                                (S.current.down = !1), R(!1);
                            }, []),
                            X = (0, u.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && S.current.down) {
                                        S.current.move = !0;
                                        const t = O(e.clientX);
                                        P(t);
                                    } else G();
                                },
                                [G, O, P],
                            );
                        (0, i.gd)(r.n.ARROW_UP, W),
                            (0, i.gd)(r.n.ARROW_DOWN, z),
                            (0, u.useEffect)(() => {
                                B.current.maximum = n;
                            }, [n]),
                            (0, u.useEffect)(() => {
                                if (L)
                                    return (
                                        document.addEventListener('mouseup', G),
                                        document.addEventListener('mousemove', X),
                                        () => {
                                            document.removeEventListener('mouseup', G),
                                                document.removeEventListener('mousemove', X);
                                        }
                                    );
                            }, [L, X, G]),
                            (0, u.useEffect)(() => {
                                (B.current.sliderMaximum = a), (B.current.sliderMinimum = _);
                            }, [a, _]),
                            (0, u.useEffect)(() => {
                                t !== B.current.currentValue && ((B.current.currentValue = t), k(t));
                            }, [t]);
                        const Y = (0, u.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((S.current.down = !0), R(!0));
                                },
                                [d],
                            ),
                            j = (0, u.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = O(e.clientX, !S.current.move),
                                        n = B.current,
                                        a = n.currentValue,
                                        s = n.sliderMaximum,
                                        i = n.sliderMinimum;
                                    P(t), (0, c.u)(a, t, s, i), (S.current.move = !1);
                                },
                                [O, d, P],
                            ),
                            U = (0, u.useCallback)(() => {
                                (S.current.over = !0), I(!0), (0, o.G)('highlight');
                            }, []),
                            V = (0, u.useCallback)(() => {
                                (S.current.over = !1), I(!1);
                            }, []),
                            Z = (0, u.useCallback)(
                                (e) => {
                                    const t = B.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        i = M(e.deltaY > 0);
                                    P(i), (0, c.u)(n, i, a, s);
                                },
                                [M, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: g, onMouseEnter: U, onMouseLeave: V, onWheel: Z, className: f },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(C, A) },
                                        l().createElement(F, { parentId: e, type: 'minus', isEnabled: $, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(C, D) },
                                        l().createElement(F, { parentId: e, type: 'plus', isEnabled: H, onClick: W }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: j, onMouseDown: Y, className: v },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: w,
                                    availableMaximum: a,
                                    picker: l().createElement(h, { parentId: e, isActive: L, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const o = {
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
                    u = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const i = r()(o.base, e && o.base__fitting),
                            u = r()(o.icon, o[`icon__${t}`]),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: i },
                            s().createElement('div', { className: u, style: l }),
                        );
                    });
            },
            8253: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const o = {
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
                    u = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: i,
                        panelType: u,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = r()(
                            o.base,
                            !e && o[`base__${u}`],
                            t && o[`base__${t}`],
                            n && !c && !a && o.base__selected,
                            c && o['base__dragIn' + (n ? 'Active' : '')],
                            l && o.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => l });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const o = 'Count_base_e4',
                    u = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = r()(o, !e && u);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, n) => {
                'use strict';
                n.d(t, { c: () => p });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3977),
                    r = n(6179),
                    o = n.n(r),
                    u = n(906),
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
                        const E = (0, r.useMemo)(() => {
                                const n = t === i.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            g = (0, r.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !E && Boolean(t) && e;
                        return o().createElement(
                            'div',
                            null,
                            h && o().createElement(l.a, { level: e }),
                            o().createElement('div', { className: s()(c, (n || a) && _), style: g }),
                            a && o().createElement('div', { className: d }),
                            b && o().createElement('div', { className: m }),
                            E && o().createElement(u.r, { isTemporary: n, overlaySource: E, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => u });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const o = {
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
                    u = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = r()(o.base, o[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    s = n(6179),
                    i = n.n(s),
                    r = n(1922),
                    o = n(6483),
                    u = n.n(o),
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
                        mediaSize: o,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const b = o !== r.cJ.None,
                            E = (0, s.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            g = (0, s.useMemo)(() => {
                                let n = '';
                                b && (n = (o === r.cJ.Large || o === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, o, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!g) return null;
                        const f = u()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${o}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            v = u()(_.icon, b && _[`icon__${o}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = i().createElement(
                                'div',
                                { key: e, className: f },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: v, style: g }),
                            );
                        return i().createElement(
                            c.t,
                            { args: h },
                            d && n
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: E,
                                      },
                                      A,
                                  )
                                : i().createElement('div', { className: C }, A),
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
                    mediaSize: s = r.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: u,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: m, key: o },
                              a.UI(e, (e, a) =>
                                  i().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: s,
                                          onSpecializationClick: u,
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
                    i = n(6483),
                    r = n.n(i);
                const o = 'Storage_base_53',
                    u = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = r()(o, e && u),
                            a = r()(c, 0 === t && _);
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
                    i = n(6483),
                    r = n.n(i);
                let o;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(o || (o = {}));
                const u = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    E = 'SwitchButton_buttonWarning_3f',
                    g = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: n, isHovered: i }) => {
                        const h = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            f = e === n,
                            v = !f && t === o.WARNING;
                        return s().createElement(
                            'div',
                            { className: r()(u, { [l]: f, [c]: v, [m]: i }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: E }),
                            s().createElement('div', { style: h, className: g }),
                        );
                    };
            },
            9344: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    s = n.n(a),
                    i = n(9480),
                    r = n(7727),
                    o = n(6179),
                    u = n.n(o),
                    l = n(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: n, states: a, isDisabled: m, groupId: p }) => {
                        const b = (0, o.useRef)(null),
                            E = (0, o.useState)(!1),
                            g = E[0],
                            h = E[1],
                            f = (n + 1) % t,
                            v = (0, o.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: f });
                            }, [p, m, f, e]),
                            C = (0, o.useCallback)(() => {
                                m || (h(!0), r.$.playHighlight());
                            }, [m]),
                            A = (0, o.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return u().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: D,
                                onClick: v,
                                onMouseEnter: C,
                                onMouseLeave: A,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                u().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: i.MH(a, t),
                                    currentIndex: n,
                                    isHovered: g,
                                }),
                            ),
                            m && u().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => B });
                var a = n(4888),
                    s = n(7383),
                    i = n(9056),
                    r = n(6179),
                    o = n.n(r),
                    u = n(2558),
                    l = n(8934),
                    c = n(5958);
                const _ = 'BackEffects_shine_f6',
                    d = 'BackEffects_sparks_55',
                    m = 'BackEffects_nut_79',
                    p = 'BackEffects_wrench_5a',
                    b = { enterActive: 'BackEffects_shine__enterActive_54' },
                    E = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    g = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    h = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    f = [a.dZ, a.sH],
                    v = o().memo(({ in: e, actionType: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                l.Z,
                                { in: e, timeout: c.Dp, classNames: b },
                                o().createElement('div', { className: _ }),
                            ),
                            o().createElement(
                                l.Z,
                                { in: e, timeout: c.IG, classNames: E },
                                o().createElement('div', { className: d }),
                            ),
                            f.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        l.Z,
                                        { in: e, timeout: c.wx, classNames: g },
                                        o().createElement('div', { className: m }),
                                    ),
                                    o().createElement(
                                        l.Z,
                                        { in: e, timeout: c.Kz, classNames: h },
                                        o().createElement('div', { className: p }),
                                    ),
                                ),
                        ),
                    ),
                    C = 'ColorMask_base_60',
                    A = 'ColorMask_base__enterActive_62',
                    D = ({ in: e, maskImage: t }) => {
                        const n = (0, r.useMemo)(() => ({ enterActive: A }), []),
                            a = (0, r.useMemo)(() => ({ maskImage: `url(${t})` }), [t]);
                        return o().createElement(
                            l.Z,
                            { in: e, timeout: c.Qj, classNames: n },
                            o().createElement('div', { className: C, style: a }),
                        );
                    },
                    S = {
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
                    F = { enter: S.base__enter, exit: S.base__enter },
                    B = o().memo(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: _,
                            isEmpty: d = !1,
                            imageSource: m,
                            itemInstalledSetupIdx: p,
                        }) => {
                            const b = (0, i.m)('model.lastSlotAction'),
                                E = b.leftID,
                                g = b.rightID,
                                h = b.leftIntCD,
                                f = b.rightIntCD,
                                C = b.actionType,
                                A = b.intCD,
                                B = (0, r.useState)(!0),
                                y = B[0],
                                w = B[1],
                                k = (0, r.useState)(!0),
                                T = k[0],
                                x = k[1],
                                I = (0, r.useState)(m),
                                N = I[0],
                                L = I[1],
                                R = (0, r.useState)(n),
                                M = R[0],
                                O = R[1],
                                P = (0, r.useState)(p),
                                H = P[0],
                                $ = P[1],
                                W = (0, r.useRef)(),
                                z = (0, r.useRef)(),
                                G = [a._2, a.dZ, a.sH],
                                X = (A === n || A === M) && H !== p && G.includes(C),
                                Y = -1 === h || -1 === f,
                                j = _ ? `base${_[0].toUpperCase() + _.slice(1)}` : 'base',
                                U = c.Sr[C] || 0;
                            (0, r.useEffect)(
                                () => () => {
                                    W.current && clearTimeout(W.current), z.current && clearTimeout(z.current);
                                },
                                [],
                            ),
                                (0, r.useEffect)(() => {
                                    d || L(m);
                                }, [d, m]);
                            const V = (0, r.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, F);
                                        switch (C) {
                                            case a.Xo: {
                                                const e = E === t ? c.mI.RIGHT : c.mI.LEFT,
                                                    a = g - E != 1 ? c.mI.SWAP : '';
                                                (n.enterDone = S[`${j}__enter${e}${a}`]),
                                                    (n.exit = S[`${j}__exit${e}${a}`]),
                                                    Y &&
                                                        (d
                                                            ? (n.enterDone = S[`${j}__enter${c.mI.FADE}`])
                                                            : (n.exit = S[`${j}__exit${c.mI.FADE}`]));
                                                break;
                                            }
                                            case a._2:
                                                (n.enterDone = S[`${j}__enter${c.mI.DESTROY}`]),
                                                    (n.exit = S[`${j}__exit${c.mI.DESTROY}`]),
                                                    (W.current = setTimeout(() => w(!0), c.YJ)),
                                                    x(!0);
                                                break;
                                            case a.sH:
                                            case a.dZ:
                                                (n.enter = S[`${j}__enter${c.mI.DEMOUNT}${c.mI.FADE}`]),
                                                    (n.exit = S[`${j}__exit${c.mI.DEMOUNT}`]),
                                                    (W.current = setTimeout(() => w(!0), c.Ij));
                                                break;
                                            case a.eC:
                                            case a.FR:
                                                if (_ !== s.g9) {
                                                    const e = C === a.eC ? c.mI.FITTING : c.mI.FITTING_REMOVE;
                                                    (n.enter = S[`${j}__enter${e}`]),
                                                        (n.exit = S[`${j}__exit${e}`]),
                                                        (n.exitActive = S[`${j}__exitActive${c.mI.FITTING}`]);
                                                } else
                                                    (n.enterDone = S[`${j}__enter${c.mI.FADE}`]),
                                                        (n.exit = S[`${j}__exit${c.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: n, timeout: U });
                                    },
                                    [C, _, j, U, E, t, g, d, Y],
                                ),
                                Z = (0, r.useCallback)(
                                    (e) => {
                                        z.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(S.base), O(n), $(p);
                                        }, U);
                                    },
                                    [U, n, p],
                                ),
                                q = (0, r.useCallback)(() => {
                                    w(!1), x(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    u.Z,
                                    { component: null, childFactory: V },
                                    o().createElement(
                                        l.Z,
                                        {
                                            key: n,
                                            timeout: U,
                                            classNames: F,
                                            onEntered: Z,
                                            onExiting: q,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: S.base }, e),
                                    ),
                                ),
                                X &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(v, { in: y, actionType: C }),
                                        o().createElement(D, { in: T, maskImage: N }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Dp: () => u,
                    IG: () => l,
                    Ij: () => r,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => o,
                    mI: () => m,
                    wx: () => c,
                });
                var a = n(4888);
                const s = 200,
                    i = 1600,
                    r = 900,
                    o = 900,
                    u = 200,
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
                const p = { [a.Xo]: s, [a.FR]: 250, [a.eC]: 250, [a._2]: 1400, [a.dZ]: i, [a.sH]: i, [a.Fd]: i };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    o = n(9056),
                    u = n(1922);
                const l = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    c = ({ modelPath: e, isDetailed: t = !1, trackChanges: n = !1, isShortened: a = !1 }) => {
                        const i = (0, u.GS)(),
                            c = (0, o.m)(e, n),
                            _ = c.installedCount,
                            d = c.maxCount,
                            m = _ === d,
                            p = R.strings.tank_setup.shells,
                            b = m ? p.ammunitionFull() : p.ammunitionIncomplete(),
                            E = r()(l.base, !m && l.base__incomplete),
                            g = r()(l.occupancy, !m && l.occupancy__incomplete, l[`occupancy__${i}`]);
                        return s().createElement(
                            'div',
                            { className: E },
                            !a && s().createElement('div', { className: l.tip }, b),
                            t ? `${_}/${d}` : s().createElement('div', { className: g }, `${_}/${d}`),
                        );
                    };
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => s, u: () => i });
                var a = n(7727);
                const s = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    i = (e, t, n, s) => {
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
                    DA: () => i,
                    FR: () => s,
                    Fd: () => u,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => r,
                    _2: () => c,
                    dZ: () => o,
                    eC: () => a,
                    sH: () => l,
                    zf: () => m,
                });
                const a = 'select',
                    s = 'undo',
                    i = 'cancel',
                    r = 'swap',
                    o = 'demount',
                    u = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one',
                    m = 'drag_drop';
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => m,
                    G$: () => r,
                    S: () => p,
                    WI: () => u,
                    YN: () => o,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => i,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => l,
                    zn: () => a,
                });
                const a = 'optDevices',
                    s = 'shells',
                    i = 'consumables',
                    r = 'battleBoosters',
                    o = 'battleAbilities',
                    u = 'toggleShells',
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
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, n, a] = deferred[u], i = !0, r = 0; r < t.length; r++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), a < s && (s = a));
                    if (i) {
                        deferred.splice(u--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > a; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, n, a];
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
                        [i, r, o] = n,
                        u = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); u < i.length; u++)
                        (s = i[u]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(4360));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
