(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var a = n(6483),
                    u = n.n(a),
                    r = n(7727),
                    o = n(6179),
                    s = n.n(o),
                    i = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: E,
                    onMouseDown: b,
                    onMouseUp: h,
                    onMouseLeave: g,
                    onClick: v,
                }) => {
                    const f = (0, o.useRef)(null),
                        A = (0, o.useState)(n),
                        C = A[0],
                        F = A[1],
                        D = (0, o.useState)(!1),
                        B = D[0],
                        y = D[1],
                        w = (0, o.useState)(!1),
                        S = w[0],
                        k = w[1],
                        T = (0, o.useCallback)(() => {
                            c || (f.current && (f.current.focus(), F(!0)));
                        }, [c]),
                        N = (0, o.useCallback)(
                            (e) => {
                                C && null !== f.current && !f.current.contains(e.target) && F(!1);
                            },
                            [C],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                c || (v && v(e));
                            },
                            [c, v],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), p && p(e), k(!0));
                            },
                            [c, _, p],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (h && h(e), y(!1));
                            },
                            [c, h],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), b && b(e), n && T(), y(!0));
                            },
                            [c, m, b, T, n],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (g && g(e), y(!1));
                            },
                            [c, g],
                        ),
                        H = u()(
                            i.Z.base,
                            i.Z[`base__${a}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: C,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: S,
                            },
                            d,
                        ),
                        W = u()(i.Z.state, i.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, o.useEffect)(() => {
                            F(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: f,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: M,
                                onMouseUp: P,
                                onMouseDown: I,
                                onMouseLeave: O,
                                onClick: x,
                            },
                            a !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = (0, o.memo)(c);
            },
            2106: (e, t, n) => {
                let a, u;
                n.d(t, { L: () => a, q: () => u }),
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
                    })(u || (u = {}));
            },
            2262: (e, t, n) => {
                n.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(7727),
                    i = n(1641),
                    l = n(8844),
                    c = n(4382);
                const d = [
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
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        n = e.isChecked,
                        r = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        E = e.isAlert,
                        b = void 0 !== E && E,
                        h = e.size,
                        g = void 0 === h ? l.yB.medium : h,
                        v = e.type,
                        f = void 0 === v ? l.Rh.primary : v,
                        A = e.soundHover,
                        C = void 0 === A ? 'highlight' : A,
                        F = e.soundClick,
                        D = void 0 === F ? 'play' : F,
                        B = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        S = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        N = e.onFocus,
                        x = e.onBlur,
                        L = e.text,
                        M = e.contentStyles,
                        R = e.children,
                        P = e.alignment,
                        I = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, d);
                    const O = (0, a.useState)(!1),
                        H = O[0],
                        W = O[1],
                        $ = (0, a.useState)(!1),
                        z = ($[0], $[1]),
                        Y = (0, a.useCallback)(
                            (e) => {
                                p || (T && T(), k && k(e));
                            },
                            [p, T, k],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === i.t.LEFT;
                                p || (t && W(!0), t && S && S(e), D && (0, s.G)(D));
                            },
                            [p, S, D],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                p || (W(!1), w && w(e));
                            },
                            [p, w],
                        ),
                        j = (0, a.useCallback)(
                            (e) => {
                                p || (B && B(e), C && (0, s.G)(C));
                            },
                            [p, B, C],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                p || (W(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                p || (z(!0), N && N(e));
                            },
                            [p, N],
                        ),
                        Z = (0, a.useCallback)(
                            (e) => {
                                p || (z(!1), x && x(e));
                            },
                            [p, x],
                        ),
                        q = u().createElement(
                            'div',
                            { className: c.Z.label },
                            u().createElement(
                                'div',
                                { className: o()(c.Z.labelContent, 's-labelContent'), style: M },
                                L || R,
                            ),
                        );
                    return u().createElement(
                        'div',
                        _(
                            {
                                id: t,
                                className: o()(c.Z.base, c.Z[`base__${g}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: H,
                                    [c.Z.base__alert]: b,
                                    [c.Z.base__center]: P === l.N3.Center,
                                    [c.Z.base__bottom]: P === l.N3.Bottom,
                                }),
                                onClick: Y,
                                onMouseEnter: j,
                                onMouseLeave: U,
                                onMouseDown: X,
                                onMouseUp: V,
                                onFocus: G,
                                onBlur: Z,
                            },
                            I,
                        ),
                        u().createElement(
                            'div',
                            { className: c.Z.input },
                            u().createElement('div', { className: c.Z.alertOverlay }),
                            u().createElement('div', { className: c.Z.inputHoverOverlay }),
                            u().createElement('div', { className: c.Z.highlight }),
                        ),
                        u().createElement('div', { className: c.Z.checkmark }),
                        ((L || R) && q) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                let a, u, r;
                n.d(t, { N3: () => r, Rh: () => u, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(u || (u = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, t, n) => {
                n.d(t, { F: () => d });
                var a = n(6483),
                    u = n.n(a),
                    r = n(6179),
                    o = n.n(r),
                    s = n(329),
                    i = n(2372),
                    l = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: a,
                    isEnough: r,
                    value: c,
                    discountValue: d,
                    showPlus: _,
                    stockBackgroundName: m = s.we.Red,
                }) => {
                    const p = u()(l.Z.value, l.Z[`value__${a}`], !r && l.Z.value__notEnough),
                        E = u()(l.Z.icon, l.Z[`icon__${a}-${n}`]),
                        b = u()(l.Z.stock, d && l.Z.stock__indent, t && l.Z.stock__interactive),
                        h = _ && c > 0 && '+',
                        g = u()(l.Z.base, l.Z[`base__${n}`]);
                    return o().createElement(
                        'span',
                        { className: g },
                        o().createElement(
                            'span',
                            { className: p },
                            h,
                            o().createElement(i.A, { value: c, format: a === s.V2.gold ? 'gold' : 'integral' }),
                        ),
                        o().createElement('span', { className: E }),
                        e &&
                            o().createElement(
                                'span',
                                { className: b },
                                o().createElement('span', {
                                    className: l.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                }),
                                Boolean(d) && d,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const d = o().memo(c);
            },
            329: (e, t, n) => {
                let a, u, r;
                n.d(t, { V2: () => u, et: () => a, we: () => r }),
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
                    })(u || (u = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(r || (r = {}));
            },
            2372: (e, t, n) => {
                n.d(t, { A: () => o });
                var a = n(6179),
                    u = n.n(a),
                    r = n(4179);
                class o extends u().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            3495: (e, t, n) => {
                n.d(t, { Y: () => d });
                var a = n(3138),
                    u = n(6179),
                    r = n(1043),
                    o = n(5262);
                const s = a.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, r.j)),
                    d = (0, u.createContext)(c);
            },
            1039: (e, t, n) => {
                var a = n(6179),
                    u = n.n(a),
                    r = n(6536),
                    o = n(3495),
                    s = n(1043),
                    i = n(5262),
                    l = n(3138);
                (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(o.Y),
                        n = (0, a.useState)(t),
                        c = n[0],
                        d = n[1],
                        _ = (0, a.useCallback)((e, t) => {
                            const n = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: a }, (0, i.T)(n, a, s.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', _);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', _), [_]);
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return u().createElement(o.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                var a = n(6179),
                    u = n(7382),
                    r = n(3495);
                const o = ['children'];
                const s = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, o);
                    const s = (0, a.useContext)(r.Y),
                        i = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        _ = s.extraSmall,
                        m = s.extraLargeWidth,
                        p = s.largeWidth,
                        E = s.mediumWidth,
                        b = s.smallWidth,
                        h = s.extraSmallWidth,
                        g = s.extraLargeHeight,
                        v = s.largeHeight,
                        f = s.mediumHeight,
                        A = s.smallHeight,
                        C = s.extraSmallHeight,
                        F = { extraLarge: g, large: v, medium: f, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && _) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, u.H)(t, n, F);
                        if (n.largeWidth && p) return (0, u.H)(t, n, F);
                        if (n.mediumWidth && E) return (0, u.H)(t, n, F);
                        if (n.smallWidth && b) return (0, u.H)(t, n, F);
                        if (n.extraSmallWidth && h) return (0, u.H)(t, n, F);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && g) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && A) return t;
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
                n.d(t, { YN: () => a.Y });
                n(6010), n(1039);
                var a = n(3495);
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
                function u(e, t, n) {
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
                        u = (function (e, t) {
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
                        r = Math.min(a, u);
                    return {
                        extraLarge: r === n.extraLarge.weight,
                        large: r === n.large.weight,
                        medium: r === n.medium.weight,
                        small: r === n.small.weight,
                        extraSmall: r === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: u === n.extraLarge.weight,
                        largeHeight: u === n.large.weight,
                        mediumHeight: u === n.medium.weight,
                        smallHeight: u === n.small.weight,
                        extraSmallHeight: u === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => u, u: () => a }),
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
                var u =
                    'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                function r(e, t) {
                    if (!u) throw new Error('No element matching method supported');
                    return u.call(e, t);
                }
                function o(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function s(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return r(e, t);
                    });
                }
                var i = 'ps',
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
                    d = { x: null, y: null },
                    _ = { immediately: !1 };
                function m(e, t, n) {
                    void 0 === n && (n = {});
                    var a = e.element.classList,
                        u = c.scrolling(t);
                    a.contains(u) ? clearTimeout(d[t]) : a.add(u);
                }
                function p(e, t, n) {
                    void 0 === n && (n = {});
                    Object.assign(_, n).immediately
                        ? e.isAlive && e.element.classList.remove(c.scrolling(t))
                        : (d[t] = setTimeout(function () {
                              return e.isAlive && e.element.classList.remove(c.scrolling(t));
                          }, e.settings.scrollingThreshold));
                }
                var E = function (e) {
                        (this.element = e), (this.handlers = {});
                    },
                    b = { isEmpty: { configurable: !0 } };
                (E.prototype.bind = function (e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []),
                        this.handlers[e].push(t),
                        this.element.addEventListener(e, t, !1);
                }),
                    (E.prototype.unbind = function (e, t) {
                        var n = this;
                        this.handlers[e] = this.handlers[e].filter(function (a) {
                            return !(!t || a === t) || (n.element.removeEventListener(e, a, !1), !1);
                        });
                    }),
                    (E.prototype.unbindAll = function () {
                        for (var e in this.handlers) this.unbind(e);
                    }),
                    (b.isEmpty.get = function () {
                        var e = this;
                        return Object.keys(this.handlers).every(function (t) {
                            return 0 === e.handlers[t].length;
                        });
                    }),
                    Object.defineProperties(E.prototype, b);
                var h = function () {
                    this.eventElements = [];
                };
                function g(e) {
                    return parseInt(e, 10) || 0;
                }
                (h.prototype.eventElement = function (e) {
                    var t = this.eventElements.filter(function (t) {
                        return t.element === e;
                    })[0];
                    return t || ((t = new E(e)), this.eventElements.push(t)), t;
                }),
                    (h.prototype.bind = function (e, t, n) {
                        this.eventElement(e).bind(t, n);
                    }),
                    (h.prototype.unbind = function (e, t, n) {
                        var a = this.eventElement(e);
                        a.unbind(t, n), a.isEmpty && this.eventElements.splice(this.eventElements.indexOf(a), 1);
                    }),
                    (h.prototype.unbindAll = function () {
                        this.eventElements.forEach(function (e) {
                            return e.unbindAll();
                        }),
                            (this.eventElements = []);
                    }),
                    (h.prototype.once = function (e, t, n) {
                        var a = this.eventElement(e);
                        a.bind(t, function e(u) {
                            a.unbind(t, e), n(u);
                        });
                    });
                var v = {
                    isWebKit: 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style,
                    supportsTouch:
                        'undefined' != typeof window &&
                        ('ontouchstart' in window ||
                            (window.DocumentTouch && document instanceof window.DocumentTouch)),
                    supportsIePointer: 'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    isChrome: 'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
                };
                function f() {
                    return new Promise(function (e) {
                        requestAnimationFrame(function () {
                            requestAnimationFrame(function () {
                                e();
                            });
                        });
                    });
                }
                function A(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var C = function (e, t, n, a, u, r) {
                    var o;
                    if ((void 0 === a && (a = !0), void 0 === u && (u = !1), void 0 === r && (r = !1), 'top' === t))
                        o = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        o = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, a, u, r) {
                        var o = n[0],
                            s = n[1],
                            i = n[2],
                            l = n[3],
                            c = n[4],
                            d = n[5];
                        void 0 === a && (a = !0);
                        void 0 === u && (u = !1);
                        void 0 === r && (r = !1);
                        var _ = e.element;
                        if (!e.reach) return;
                        (e.reach[l] = null), _[i] < 1 && (e.reach[l] = 'start');
                        _[i] > e[o] - e[s] - 1 && (e.reach[l] = 'end');
                        t &&
                            !u &&
                            (_.dispatchEvent(A('ps-scroll-' + l)),
                            t < 0
                                ? _.dispatchEvent(A('ps-scroll-' + c))
                                : t > 0 && _.dispatchEvent(A('ps-scroll-' + d)),
                            a &&
                                (function (e, t) {
                                    m(e, t), p(e, t);
                                })(e, l));
                        e.reach[l] && (t || r) && _.dispatchEvent(A('ps-' + l + '-reach-' + e.reach[l]));
                    })(e, n, o, a, u, r);
                };
                var F = function (e, t, a, u) {
                    void 0 === t && (t = !1), void 0 === a && (a = 0), void 0 === u && (u = !1);
                    var r = e.element;
                    if (r) {
                        if (
                            ((e.containerWidth = Math.round(r.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(r.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(r.scrollWidth) - 2 * a),
                            (e.contentHeight = Math.round(r.scrollHeight)),
                            !u)
                        ) {
                            e.contentWidth = Math.round(r.scrollWidth) - 2 * a;
                            var i = e.contentWidth - e.containerWidth + a;
                            r.scrollLeft < a ? (r.scrollLeft = a) : r.scrollLeft > i && (r.scrollLeft = i);
                        }
                        var d = Math.floor(r.scrollTop),
                            _ = Math.floor(r.scrollLeft) - a,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        r.contains(e.scrollbarXRail) ||
                            (s(r, l.rail('x')).forEach(function (e) {
                                return o(e);
                            }),
                            r.appendChild(e.scrollbarXRail)),
                            r.contains(e.scrollbarYRail) ||
                                (s(r, l.rail('y')).forEach(function (e) {
                                    return o(e);
                                }),
                                r.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = D(e, g((e.railXWidth * e.containerWidth) / e.contentWidth))),
                                  (e.scrollbarXLeft = g(
                                      ((e.negativeScrollAdjustment + _) * (e.railXWidth - e.scrollbarXWidth)) /
                                          (e.contentWidth - e.containerWidth),
                                  )),
                                  e.scrollbarXLeft < 0 && (e.scrollbarXLeft = 0))
                                : (e.scrollbarXActive = !1),
                            !e.settings.suppressScrollY &&
                            e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight
                                ? ((e.scrollbarYActive = !0),
                                  (e.railYHeight = e.containerHeight - e.railYMarginHeight * m - 15 * m),
                                  (e.railYRatio = e.containerHeight / e.railYHeight),
                                  (e.scrollbarYHeight = D(e, g((e.railYHeight * e.containerHeight) / e.contentHeight))),
                                  (e.scrollbarYTop = g(
                                      (d * (e.railYHeight - e.scrollbarYHeight)) /
                                          (e.contentHeight - e.containerHeight),
                                  )))
                                : (e.scrollbarYActive = !1),
                            e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth &&
                                (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth),
                            e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight &&
                                (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                            (function (e, t, a) {
                                var u = { width: t.railXWidth },
                                    r = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (u.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (u.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (u.bottom = t.scrollbarXBottom - r)
                                    : (u.top = t.scrollbarXTop + r);
                                n(t.scrollbarXRail, u);
                                var o = { top: r, height: t.railYHeight };
                                t.isScrollbarYUsingRight
                                    ? t.isRtl
                                        ? (o.right =
                                              t.contentWidth -
                                              (t.negativeScrollAdjustment + e.scrollLeft) -
                                              t.scrollbarYRight -
                                              t.scrollbarYOuterWidth)
                                        : (o.right = t.scrollbarYRight - e.scrollLeft)
                                    : t.isRtl
                                      ? (o.left =
                                            t.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * t.containerWidth -
                                            t.contentWidth -
                                            t.scrollbarYLeft -
                                            t.scrollbarYOuterWidth)
                                      : (o.left = t.scrollbarYLeft + e.scrollLeft);
                                n(t.scrollbarYRail, o),
                                    n(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * a,
                                    }),
                                    n(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * a,
                                    });
                            })(r, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', _ < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', _ + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', r.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                r.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (r.classList.add(c.active('x')), C(e, 'left', _ - e.lastScrollLeft, !0, t))
                                : (r.classList.remove(c.active('x')),
                                  (e.scrollbarXWidth = 0),
                                  (e.scrollbarXLeft = 0),
                                  (r.scrollLeft = 0)),
                            e.scrollbarYActive
                                ? (r.classList.add(c.active('y')), C(e, 'top', r.scrollTop - e.lastScrollTop, !0, t))
                                : (r.classList.remove(c.active('y')),
                                  (e.scrollbarYHeight = 0),
                                  (e.scrollbarYTop = 0),
                                  (r.scrollTop = 0)),
                            (e.lastScrollTop = d),
                            (e.lastScrollLeft = _),
                            (e.scrollTopPercent = r.scrollTop / r.scrollHeight),
                            (e.scrollLeftPercent = r.scrollLeft / r.scrollWidth);
                    }
                };
                function D(e, t) {
                    return (
                        e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
                        e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
                        t
                    );
                }
                var B = {
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
                    y = function (e) {
                        var t,
                            n = e.percentTimeElapsed,
                            a = e.x1,
                            u = e.y1,
                            r = e.x2,
                            o = e.y2;
                        return (
                            1 -
                            (a * ((t = n), Math.pow(t, 3)) +
                                u *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                r *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                o *
                                    (function (e) {
                                        return Math.pow(1 - e, 3);
                                    })(n))
                        );
                    },
                    w = { breakBounds: !1, startBound: 0, endBound: 0 },
                    S = function (e) {
                        var t = e.scrollableDomEle,
                            n = e.onAnimationCompleteCallback,
                            a = e.direction,
                            u = e.onRefUpdateCallback,
                            r = e.duration,
                            o = e.cubicBezierPoints,
                            s = e.easingPreset,
                            i = e.scrollAmount,
                            l = e.onCheckForBreakCallback,
                            c = e.boundsInfo;
                        void 0 === c && (c = w);
                        var d = null,
                            _ = null,
                            m = null,
                            p = null,
                            E = t === window,
                            b = ['left', 'right'].indexOf(a) > -1,
                            h = ['right', 'bottom'].indexOf(a) > -1;
                        b
                            ? ((_ = E ? 'scrollX' : 'scrollLeft'),
                              (p = E ? 'innerWidth' : 'width'),
                              (m = 'scrollWidth'))
                            : ((_ = E ? 'scrollY' : 'scrollTop'),
                              (p = E ? 'innerHeight' : 'height'),
                              (m = 'scrollHeight'));
                        var g = t[_],
                            v = (function (e) {
                                var t,
                                    n = e.isWindow,
                                    a = e.scrollableDomEle,
                                    u = e.elementLengthProp,
                                    r = e.initialScrollPosition,
                                    o = e.isHorizontalDirection,
                                    s = e.scrollLengthProp,
                                    i = e.direction;
                                if (n) {
                                    var l = document.documentElement;
                                    t = o ? l.offsetWidth : l.offsetHeight;
                                } else t = (a[s] - a.getBoundingClientRect()[u]) | 0;
                                return ['left', 'top'].includes(i) ? r : t - r;
                            })({
                                isWindow: E,
                                scrollableDomEle: t,
                                elementLengthProp: p,
                                initialScrollPosition: g,
                                isHorizontalDirection: b,
                                scrollLengthProp: m,
                                direction: a,
                            });
                        !isNaN(i) && i < v && (v = i);
                        var f = function e(a) {
                            if (!l || !l()) {
                                var i = a - d,
                                    m = (function (e) {
                                        var t = e.easingPreset,
                                            n = e.cubicBezierPoints,
                                            a = e.duration,
                                            u = e.runTime / a;
                                        if (B.hasOwnProperty(t)) return B[t](u);
                                        if (
                                            n &&
                                            !isNaN(n.x1) &&
                                            !isNaN(n.y1) &&
                                            !isNaN(n.x2) &&
                                            !isNaN(n.y2) &&
                                            n.x1 >= 0 &&
                                            n.x2 >= 0
                                        )
                                            return y({ percentTimeElapsed: u, x1: n.x1, x2: n.x2, y1: n.y1, y2: n.y2 });
                                        throw new Error('Please enter a valid easing value');
                                    })({ easingPreset: s, cubicBezierPoints: o, runTime: i, duration: r });
                                if (!isNaN(m)) {
                                    var p = Math.round(m * v),
                                        f = h ? p + g : v - p;
                                    if (
                                        (c.breakBounds &&
                                            (f < c.startBound
                                                ? (f = c.startBound)
                                                : f > c.endBound && (f = c.endBound)),
                                        i < r)
                                    ) {
                                        if (E) {
                                            var A = b ? f : 0,
                                                C = b ? 0 : f;
                                            window.scrollTo(A, C);
                                        } else t[_] = f;
                                        u && u(f), requestAnimationFrame(e);
                                    } else n && n();
                                }
                            }
                        };
                        requestAnimationFrame(function (e) {
                            (d = e), f(e);
                        });
                    },
                    k = function (e) {
                        var t = e.axis,
                            n = e.cursorPositionOnRail,
                            a = e.direction,
                            u = e.i,
                            r = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    a = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var u = n.scrollbarY.offsetTop,
                                        r = u + n.scrollbarYHeight;
                                    return a >= u && a <= r;
                                }
                                var o = n.scrollbarX.offsetLeft,
                                    s = o + n.scrollbarXWidth;
                                return a >= o && a <= s;
                            })({ axis: t, i: u, cursorPositionOnRail: n });
                        return r
                            ? ((function (e) {
                                  var t = e.axis,
                                      n = e.i,
                                      a = e.cursorPositionOnRail,
                                      u = (function (e, t) {
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
                                      r = (a - u.scrollbar / 2) / u.rail,
                                      o = Math.round(Math.min(u.maxScroll, Math.max(0, u.content * r)));
                                  'y' === t ? (n.element.scrollTop = o) : (n.element.scrollLeft = o);
                              })({ axis: t, i: u, cursorPositionOnRail: n }),
                              !0)
                            : ('y' === t
                                  ? (u.element.scrollTop += a * u.containerHeight)
                                  : (u.element.scrollLeft += a * u.containerWidth),
                              !1);
                    },
                    T = function (e, t, n) {
                        return function (a) {
                            t = t.toLowerCase();
                            var u = null,
                                r = function () {
                                    if (1 === a.buttons) {
                                        if (
                                            !a.target.closest('.ps__rail-' + t) ||
                                            !a.target.closest('.ps__track_' + t)
                                        ) {
                                            var r = (function (e) {
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
                                                o = r.cursorPosition - r.windowScrolled - r.elementPosition,
                                                s = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        a = e.i;
                                                    return n > ('y' === t ? a.scrollbarYTop : a.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: o, i: e });
                                            k({ axis: t, cursorPositionOnRail: o, direction: s, i: e }) &&
                                                clearTimeout(u),
                                                F(e, !1, n);
                                        }
                                        a.stopPropagation();
                                    }
                                };
                            r(),
                                (u = setInterval(r, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(u);
                                });
                        };
                    };
                function N(e, t, n) {
                    var a = n[0],
                        u = n[1],
                        r = n[2],
                        o = n[3],
                        s = n[4],
                        i = n[5],
                        l = n[6],
                        d = n[7],
                        _ = n[8],
                        E = e.element,
                        b = null,
                        h = null,
                        v = null;
                    function f(n) {
                        (E[l] = g(b + v * (n[r] - h))), m(e, d), F(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function A() {
                        p(e, d), e[_].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', f);
                    }
                    e.event.bind(e[s], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((b = E[l]),
                            (h = t[r]),
                            (v = (e[u] - e[a]) / (e[o] - e[i])),
                            e.event.bind(e.ownerDocument, 'mousemove', f),
                            e.event.once(e.ownerDocument, 'mouseup', A),
                            e[_].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var x = 1e3,
                    L = {
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
                            N(e, t, [
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
                                N(e, t, [
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
                                    r(n, ':hover')
                                ) {
                                    var u,
                                        o = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (o) {
                                        if ('IFRAME' === o.tagName) o = o.contentDocument.activeElement;
                                        else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
                                        if (
                                            r((u = o), 'input,[contenteditable]') ||
                                            r(u, 'select,[contenteditable]') ||
                                            r(u, 'textarea,[contenteditable]') ||
                                            r(u, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var s = 0,
                                        i = 0;
                                    switch (a.which) {
                                        case 37:
                                            s = a.metaKey ? -e.contentWidth : a.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            i = a.metaKey ? e.contentHeight : a.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            s = a.metaKey ? e.contentWidth : a.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            i = a.metaKey ? -e.contentHeight : a.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            i = a.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            i = e.containerHeight;
                                            break;
                                        case 34:
                                            i = -e.containerHeight;
                                            break;
                                        case 36:
                                            i = e.contentHeight;
                                            break;
                                        case 35:
                                            i = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== s) ||
                                        (e.settings.suppressScrollY && 0 !== i) ||
                                        ((n.scrollTop -= i),
                                        (n.scrollLeft += s),
                                        F(e, !1, t),
                                        (function (t, a) {
                                            var u = Math.floor(n.scrollTop);
                                            if (0 === t) {
                                                if (!e.scrollbarYActive) return !1;
                                                if (
                                                    (0 === u && a > 0) ||
                                                    (u >= e.contentHeight - e.containerHeight && a < 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            var r = n.scrollLeft;
                                            if (0 === a) {
                                                if (!e.scrollbarXActive) return !1;
                                                if (
                                                    (0 === r && t < 0) ||
                                                    (r >= e.contentWidth - e.containerWidth && t > 0)
                                                )
                                                    return !e.settings.wheelPropagation;
                                            }
                                            return !0;
                                        })(s, i) && a.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var a = e.element;
                            function u(u) {
                                var r = (function (e) {
                                        var t = -1 * e.deltaX,
                                            n = e.deltaY;
                                        return (
                                            (void 0 !== t && void 0 !== n) ||
                                                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                            e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                                            t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                                            e.shiftKey ? [-n, -t] : [t, n]
                                        );
                                    })(u),
                                    o = r[0],
                                    s = r[1];
                                if (
                                    !(function (e, n, u) {
                                        if (!v.isWebKit && a.querySelector('select')) return !0;
                                        if (!a.contains(e)) return !1;
                                        for (var r = e; r && r !== a; ) {
                                            if (r.classList.contains(l.consuming)) return !0;
                                            var o = t(r);
                                            if (
                                                [o.overflow, o.overflowX, o.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var s = r.scrollHeight - r.clientHeight;
                                                if (
                                                    s > 0 &&
                                                    !((0 === r.scrollTop && u > 0) || (r.scrollTop === s && u < 0))
                                                )
                                                    return !0;
                                                var i = r.scrollWidth - r.clientWidth;
                                                if (
                                                    i > 0 &&
                                                    !((0 === r.scrollLeft && n < 0) || (r.scrollLeft === i && n > 0))
                                                )
                                                    return !0;
                                            }
                                            r = r.parentNode;
                                        }
                                        return !1;
                                    })(u.target, o, s)
                                ) {
                                    var i = !1,
                                        c = (o * e.settings.wheelSpeed) | 0,
                                        d = (s * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (s ? (a.scrollTop -= d) : (a.scrollTop += c), (i = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (o ? (a.scrollLeft += c) : (a.scrollLeft -= d), (i = !0))
                                        : ((a.scrollTop -= d), (a.scrollLeft += c)),
                                        F(e, !1, n),
                                        (i =
                                            i ||
                                            (function (t, n) {
                                                var u = Math.floor(a.scrollTop),
                                                    r = 0 === a.scrollTop,
                                                    o = u + a.offsetHeight === a.scrollHeight,
                                                    s = 0 === a.scrollLeft,
                                                    i = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? r || o : s || i) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(o, s)),
                                        i && !u.ctrlKey && (u.stopPropagation(), u.preventDefault());
                                }
                            }
                            e.event.bind(a, 'wheel', u),
                                void 0 !== window.onmousewheel && e.event.bind(a, 'mousewheel', u);
                        },
                        touch: function (e, n) {
                            if (v.supportsTouch || v.supportsIePointer) {
                                var a = e.element,
                                    u = {},
                                    r = 0,
                                    o = {},
                                    s = null;
                                v.supportsTouch
                                    ? (e.event.bind(a, 'touchstart', _),
                                      e.event.bind(a, 'touchmove', m),
                                      e.event.bind(a, 'touchend', p))
                                    : v.supportsIePointer &&
                                      (window.PointerEvent
                                          ? (e.event.bind(a, 'pointerdown', _),
                                            e.event.bind(a, 'pointermove', m),
                                            e.event.bind(a, 'pointerup', p))
                                          : window.MSPointerEvent &&
                                            (e.event.bind(a, 'MSPointerDown', _),
                                            e.event.bind(a, 'MSPointerMove', m),
                                            e.event.bind(a, 'MSPointerUp', p)));
                            }
                            function i(t, u) {
                                (a.scrollTop -= u), (a.scrollLeft -= t), F(e, !1, n);
                            }
                            function c(e) {
                                return e.targetTouches ? e.targetTouches[0] : e;
                            }
                            function d(e) {
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
                            function _(e) {
                                if (d(e)) {
                                    var t = c(e);
                                    (u.pageX = t.pageX),
                                        (u.pageY = t.pageY),
                                        (r = new Date().getTime()),
                                        null !== s && clearInterval(s);
                                }
                            }
                            function m(n) {
                                if (d(n)) {
                                    var s = c(n),
                                        _ = { pageX: s.pageX, pageY: s.pageY },
                                        m = _.pageX - u.pageX,
                                        p = _.pageY - u.pageY;
                                    if (
                                        (function (e, n, u) {
                                            if (!a.contains(e)) return !1;
                                            for (var r = e; r && r !== a; ) {
                                                if (r.classList.contains(l.consuming)) return !0;
                                                var o = t(r);
                                                if (
                                                    [o.overflow, o.overflowX, o.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var s = r.scrollHeight - r.clientHeight;
                                                    if (
                                                        s > 0 &&
                                                        !((0 === r.scrollTop && u > 0) || (r.scrollTop === s && u < 0))
                                                    )
                                                        return !0;
                                                    var i = r.scrollLeft - r.clientWidth;
                                                    if (
                                                        i > 0 &&
                                                        !(
                                                            (0 === r.scrollLeft && n < 0) ||
                                                            (r.scrollLeft === i && n > 0)
                                                        )
                                                    )
                                                        return !0;
                                                }
                                                r = r.parentNode;
                                            }
                                            return !1;
                                        })(n.target, m, p)
                                    )
                                        return;
                                    i(m, p), (u = _);
                                    var E = new Date().getTime(),
                                        b = E - r;
                                    b > 0 && ((o.x = m / b), (o.y = p / b), (r = E)),
                                        (function (t, n) {
                                            var u = Math.floor(a.scrollTop),
                                                r = a.scrollLeft,
                                                o = Math.abs(t),
                                                s = Math.abs(n);
                                            if (s > o) {
                                                if (
                                                    (n < 0 && u === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === u)
                                                )
                                                    return 0 === window.scrollY && n > 0 && v.isChrome;
                                            } else if (
                                                o > s &&
                                                ((t < 0 && r === e.contentWidth - e.containerWidth) ||
                                                    (t > 0 && 0 === r))
                                            )
                                                return !0;
                                            return !0;
                                        })(m, p) && n.preventDefault();
                                }
                            }
                            function p() {
                                e.settings.swipeEasing &&
                                    (clearInterval(s),
                                    (s = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(s)
                                            : o.x || o.y
                                              ? Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01
                                                  ? clearInterval(s)
                                                  : (i(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                                              : clearInterval(s);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                a = null,
                                u = !1,
                                r = 0,
                                o = 0,
                                s = 0;
                            function i() {
                                e.onScroll();
                            }
                            function l(a, u, r, o) {
                                void 0 === r && (r = null),
                                    void 0 === o && (o = !1),
                                    S({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: i,
                                        duration: u,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: a,
                                        onCheckForBreakCallback: r,
                                        boundsInfo: {
                                            breakBounds: o,
                                            startBound: t,
                                            endBound: e.contentWidth - e.containerWidth + t,
                                        },
                                    });
                            }
                            function d() {
                                if (u) return u;
                            }
                            function _() {
                                s = 0;
                            }
                            function E(u) {
                                if (e.scrollbarXActive) {
                                    var i = a - u.screenX;
                                    (n.scrollLeft += i), (a = u.screenX);
                                    var l = new Date().getTime();
                                    if (((r = (i / (l - o)) * 1e3), (o = l), e.onScroll(), t > 0)) {
                                        var c = e.contentWidth - e.containerWidth + 2 * t;
                                        0 === n.scrollLeft || n.scrollLeft === c
                                            ? 0 === s && (s = window.setTimeout(_, 250))
                                            : 0 !== s && (window.clearTimeout(s), (s = 0));
                                    }
                                    m(e, 'x'),
                                        m(e, 'dragging', { immediately: !0 }),
                                        u.stopPropagation(),
                                        u.preventDefault();
                                }
                            }
                            function b(e) {
                                (a = e.screenX),
                                    (u = !0),
                                    requestAnimationFrame(function () {
                                        u = !1;
                                    }),
                                    (o = new Date().getTime());
                            }
                            function h(a) {
                                var u = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) l(t - n.scrollLeft, x, d);
                                else if (n.scrollLeft > u) l(u - n.scrollLeft, x, d);
                                else {
                                    new Date().getTime() - o < 100 && l(r / 4, x, d, !0);
                                }
                                p(e, 'x'),
                                    p(e, 'dragging', { immediately: !0 }),
                                    e.scrollbarXRail.classList.remove(c.clicking),
                                    e.event.unbind(e.ownerDocument, 'mousemove', E);
                            }
                            function g() {
                                u = !0;
                            }
                            n.addEventListener(
                                'mousedown',
                                function (t) {
                                    1 === t.buttons &&
                                        ((a = t.screenX),
                                        e.event.bind(e.ownerDocument, 'mousemove', E),
                                        e.event.once(e.ownerDocument, 'mouseup', h),
                                        e.event.once(e.ownerDocument, 'mousedown', b),
                                        e.event.once(n, 'wheel', g),
                                        e.scrollbarXRail.classList.add(c.clicking),
                                        t.preventDefault());
                                },
                                !1,
                            );
                        },
                    },
                    M = function (e, u) {
                        var r = this;
                        if (
                            (void 0 === u && (u = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var o in ((this.element = e),
                        e.classList.add(i),
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
                        u))
                            r.settings[o] = u[o];
                        (this.containerWidth = null),
                            (this.containerHeight = null),
                            (this.contentWidth = null),
                            (this.contentHeight = null);
                        var s,
                            d,
                            _ = function () {
                                return e.classList.add(c.focus);
                            },
                            m = function () {
                                return e.classList.remove(c.focus);
                            };
                        (this.isRtl = 'rtl' === t(e).direction),
                            (this.isNegativeScroll =
                                ((d = e.scrollLeft),
                                (e.scrollLeft = -1),
                                (s = e.scrollLeft < 0),
                                (e.scrollLeft = d),
                                s)),
                            (this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
                            (this.event = new h()),
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
                            this.event.bind(this.scrollbarX, 'focus', _),
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
                            this.event.bind(this.scrollbarY, 'focus', _),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            f().then(function () {
                                var a = t(r.scrollbarXRail);
                                (r.scrollbarXBottom = parseInt(a.bottom, 10)),
                                    isNaN(r.scrollbarXBottom)
                                        ? ((r.isScrollbarXUsingBottom = !1), (r.scrollbarXTop = g(a.top)))
                                        : (r.isScrollbarXUsingBottom = !0),
                                    (r.railBorderXWidth = g(a.borderLeftWidth) + g(a.borderRightWidth)),
                                    n(r.scrollbarXRail, { display: 'block' }),
                                    (r.railXMarginWidth = g(a.marginLeft) + g(a.marginRight)),
                                    n(r.scrollbarXRail, { display: '' }),
                                    (r.railXWidth = null),
                                    (r.railXRatio = null);
                                var u = t(r.scrollbarYRail);
                                (r.scrollbarYRight = parseInt(u.right, 10)),
                                    isNaN(r.scrollbarYRight)
                                        ? ((r.isScrollbarYUsingRight = !1), (r.scrollbarYLeft = g(u.left)))
                                        : (r.isScrollbarYUsingRight = !0),
                                    (r.scrollbarYOuterWidth = r.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  g(n.width) +
                                                  g(n.paddingLeft) +
                                                  g(n.paddingRight) +
                                                  g(n.borderLeftWidth) +
                                                  g(n.borderRightWidth)
                                              );
                                          })(r.scrollbarY)
                                        : null),
                                    (r.railBorderYWidth = g(u.borderTopWidth) + g(u.borderBottomWidth)),
                                    n(r.scrollbarYRail, { display: 'block' }),
                                    (r.railYMarginHeight = g(u.marginTop) + g(u.marginBottom)),
                                    n(r.scrollbarXRail, { display: '' }),
                                    n(r.scrollbarYRail, { display: '' }),
                                    (r.railYHeight = null),
                                    (r.railYRatio = null),
                                    (r.reach = {
                                        x:
                                            e.scrollLeft <= 0
                                                ? 'start'
                                                : e.scrollLeft >= r.contentWidth - r.containerWidth
                                                  ? 'end'
                                                  : null,
                                        y:
                                            e.scrollTop <= 0
                                                ? 'start'
                                                : e.scrollTop >= r.contentHeight - r.containerHeight
                                                  ? 'end'
                                                  : null,
                                    }),
                                    (r.isAlive = !0),
                                    r.settings.handlers.forEach(function (e) {
                                        return L[e](r, r.settings.overScrollWidth);
                                    }),
                                    (r.boundHandleButtonEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundHandleMouseLeave = r.handleMouseLeave.bind(r)),
                                    (r.boundHandleMouseEnter = r.handleMouseEnter.bind(r)),
                                    (r.boundPlayClickSound = r.playClickSound.bind(r)),
                                    r.scrollbarYButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarYButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonEnd.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarXButtonStart.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarXButtonEnd.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonEnd.addEventListener('mouseenter', r.boundHandleButtonEnter),
                                    r.scrollbarYButtonStart.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarYButtonEnd.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarX.addEventListener('mouseenter', r.boundHandleMouseEnter),
                                    r.scrollbarY.addEventListener('mouseleave', r.boundHandleMouseLeave),
                                    r.scrollbarY.addEventListener('mousedown', r.boundPlayClickSound),
                                    r.scrollbarX.addEventListener('mousedown', r.boundPlayClickSound),
                                    (r.lastScrollTop = Math.floor(e.scrollTop)),
                                    (r.lastScrollLeft = e.scrollLeft),
                                    (r.scrollTopPercent = e.scrollTop / e.scrollHeight),
                                    (r.scrollLeftPercent = e.scrollLeft / e.scrollWidth),
                                    r.event.bind(r.element, 'scroll', function (e) {
                                        return r.onScroll(e);
                                    }),
                                    r.settings.enableHorizontalScroll &&
                                        r.event.bind(r.element, 'wheel', function (e) {
                                            return r.onWheel(e);
                                        }),
                                    F(r, !1, r.settings.overScrollWidth, !1);
                            });
                    };
                (M.prototype._getAnimationSettings = function (e, t, n, a) {
                    var u = this,
                        r = 0;
                    return (
                        null !== this.element &&
                            (r = ['bottom', 'top'].includes(t) ? this.element.scrollTop : this.element.scrollLeft),
                        {
                            scrollableDomEle: this.element,
                            duration: this.settings.animationDuration,
                            easingPreset: this.settings.animationEasingPreset,
                            scrollAmount: e - r,
                            direction: t,
                            onRefUpdateCallback: function (e) {
                                F(u, !0, u.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                a && a();
                            },
                        }
                    );
                }),
                    (M.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (M.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (M.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (M.prototype.handleMouseLeave = function () {}),
                    (M.prototype.update = function () {
                        var e = this;
                        this.isAlive &&
                            ((this.negativeScrollAdjustment = this.isNegativeScroll
                                ? this.element.scrollWidth - this.element.clientWidth
                                : 0),
                            n(this.scrollbarXRail, { display: 'block' }),
                            n(this.scrollbarYRail, { display: 'block' }),
                            (this.railXMarginWidth =
                                g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight)),
                            (this.railYMarginHeight =
                                g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom)),
                            n(this.scrollbarXRail, { display: 'none' }),
                            n(this.scrollbarYRail, { display: 'none' }),
                            f().then(function () {
                                e.settings.isDisableScrollToLastPositionOnResize ||
                                    ((e.element.scrollTop = e.element.scrollHeight * e.scrollTopPercent),
                                    (e.element.scrollLeft = e.element.scrollWidth * e.scrollLeftPercent)),
                                    F(e, !1, e.settings.overScrollWidth, !1),
                                    C(e, 'top', 0, !1, !1, !0),
                                    C(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (M.prototype.setScrollLeft = function (e, t, n) {
                        S(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (M.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (M.prototype.setScrollTop = function (e, t, n) {
                        S(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (M.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (M.prototype.onScroll = function (e) {
                        this.isAlive && F(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (M.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (F(this, !1, this.settings.overScrollWidth, !1),
                            C(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (M.prototype.destroy = function () {
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
                            o(this.scrollbarX),
                            o(this.scrollbarY),
                            o(this.scrollbarXRail),
                            o(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (M.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = M);
            },
            8089: (e, t, n) => {
                n.d(t, { A: () => d });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(7727),
                    i = n(7476);
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
                class d extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, s.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, s.G)(this.props.soundClick);
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
                            r = e.side,
                            s = e.type,
                            d = e.classNames,
                            _ = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            E = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                    return u;
                                })(e, l)),
                            h = o()(i.Z.base, i.Z[`base__${s}`], i.Z[`base__${r}`], null == d ? void 0 : d.base),
                            g = o()(i.Z.icon, i.Z[`icon__${s}`], i.Z[`icon__${r}`], null == d ? void 0 : d.icon),
                            v = o()(i.Z.glow, null == d ? void 0 : d.glow),
                            f = o()(i.Z.caption, i.Z[`caption__${s}`], null == d ? void 0 : d.caption),
                            A = o()(i.Z.goto, null == d ? void 0 : d.goto);
                        return u().createElement(
                            'div',
                            c(
                                {
                                    className: h,
                                    onMouseEnter: this._onMouseEnter(_),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                b,
                            ),
                            'info' !== s && u().createElement('div', { className: i.Z.shine }),
                            u().createElement('div', { className: g }, u().createElement('div', { className: v })),
                            u().createElement('div', { className: f }, t),
                            a && u().createElement('div', { className: A }, a),
                        );
                    }
                }
                d.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                n.d(t, { t: () => i });
                var a = n(6179),
                    u = n.n(a),
                    r = n(2056);
                const o = ['children'];
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
                const i = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, o);
                    return u().createElement(
                        r.u,
                        s(
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
                n.d(t, { i: () => l });
                var a = n(2056),
                    u = n(6179),
                    r = n.n(u);
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
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, o);
                        const p = (0, u.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, _]);
                        return r().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
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
            2056: (e, t, n) => {
                n.d(t, { u: () => l });
                var a = n(7902),
                    u = n(4179),
                    r = n(6179);
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
                const i = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: u.B0.TOOLTIP,
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
                            u = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            h = e.decoratorId,
                            g = void 0 === h ? 0 : h,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, o);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => C || (0, a.F)().resId, [C]),
                            S = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (i(n, g, { isMouseEvent: !0, on: !0, arguments: s(u) }, w),
                                    F && F(),
                                    (y.current.isVisible = !0));
                            }, [n, g, u, w, F]),
                            k = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        i(n, g, { on: !1 }, w),
                                        y.current.isVisible && D && D(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, g, w, D]),
                            T = (0, r.useCallback)((e) => {
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
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
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
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
                                                      l && l(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var N;
                    };
            },
            1856: (e, t, n) => {
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
                n.r(t), n.d(t, { mouse: () => s, onResize: () => r });
                var a = n(2472),
                    u = n(1176);
                const r = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, u.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, u.R)(!0);
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
                            : (0, u.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let u = !0;
                                    const r = `mouse${t}`,
                                        s = o[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            u &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (u = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, u.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, u.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => u,
                        graphicsQuality: () => o,
                    });
                var a = n(527);
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                n.d(t, { O: () => u });
                var a = n(5959);
                const u = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function u(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => u, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => u });
                var a = n(2472);
                const u = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => u.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => b,
                        getSize: () => _,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var a = n(3722),
                    u = n(6112),
                    r = n(6538),
                    o = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
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
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const a = ['args'];
                const u = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    i = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                    return u;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                        var u;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? u : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(r, { isMouseEvent: !0, on: e });
                        },
                    };
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
            8071: (e, t, n) => {
                n.d(t, { M: () => a });
                const a = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
            },
            6536: (e, t, n) => {
                n.d(t, { Z: () => u });
                var a = n(6179);
                const u = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            8526: (e, t, n) => {
                n.d(t, { gd: () => s });
                var a = n(3138),
                    u = n(5521),
                    r = (n(4179), n(6179));
                const o = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(e = u.n.NONE, t = o, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== u.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(u) {
                            if (u.keyCode === e) {
                                if (a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(u), n && u.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
            },
            9056: (e, t, n) => {
                n.d(t, { m: () => i });
                var a = n(7902),
                    u = n(8071),
                    r = n(4179),
                    o = n(6179);
                const s = r.Sw.instance,
                    i = (e = 'model', t = !0) => {
                        const n = (0, o.useState)(0),
                            r = (n[0], n[1]),
                            i = (0, o.useMemo)(() => (0, a.F)(), []),
                            l = i.caller,
                            c = i.resId,
                            d = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            _ = (0, o.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, u.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(d),
                                [d],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            r((e) => e + 1);
                                        },
                                        n = s.addCallback(e, t, c);
                                    return () => s.removeCallback(n, c);
                                }
                            }, [e, t, c]),
                            _
                        );
                    };
            },
            5521: (e, t, n) => {
                let a, u;
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
                    })(u || (u = {}));
            },
            9480: (e, t, n) => {
                n.d(t, { UI: () => a });
                function a(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
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
                    engine.call('PlaySound', e);
                }
                n.d(t, { $: () => u, G: () => a });
                const u = {
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
                let a;
                function u(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                n.d(t, {
                    BN: () => o,
                    Eg: () => l,
                    Uw: () => b,
                    WU: () => u,
                    e: () => s,
                    uF: () => r,
                    v2: () => a,
                    z4: () => i,
                }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    c = (e, t, n) => {
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
                    _ = (e, t, n = a.left) => e.split(t).reduce(n === a.left ? c : d, []),
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
                    E = (e, t = a.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return p.includes(n)
                            ? m(e)
                            : ((e, t = a.left) => {
                                  let n = [];
                                  const u =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = i(e);
                                  return _(r, /( )/, t).forEach((e) => (n = n.concat(_(e, u, a.left)))), n;
                              })(e, t);
                    },
                    b = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : E(e, t)));
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var a = n(3138);
                class u {
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
                        return window.__dataTracker || (window.__dataTracker = new u()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, u = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, n, u);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                u.__instance = void 0;
                const r = u;
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
                n.d(t, {
                    Sw: () => r.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => o,
                    B0: () => i,
                    c9: () => f,
                    ry: () => g,
                    Eu: () => v,
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
                const u = a;
                var r = n(1358);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const E = ['args'];
                function b(e, t, n, a, u, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(a, u);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, u) {
                                        var r = e.apply(t, n);
                                        function o(e) {
                                            b(r, a, u, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(r, a, u, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const u = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                    return u;
                                })(t, E);
                            void 0 !== u
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((a = u),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    A = () => f(i.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var F = n(7572);
                const D = u.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: F.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => f(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: A,
                        sendClosePopOverEvent: () => f(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, u = R.invalid('resId'), r) => {
                            const o = p.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                _ = s.height,
                                m = {
                                    x: p.O.view.pxToRem(l) + o.x,
                                    y: p.O.view.pxToRem(c) + o.y,
                                    width: p.O.view.pxToRem(d),
                                    height: p.O.view.pxToRem(_),
                                };
                            f(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: u,
                                direction: t,
                                bbox: h(m),
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
                            C(e, A);
                        },
                        handleViewEvent: f,
                        onBindingsReady: g,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const u = Object.prototype.toString.call(t[a]);
                                    if (u.startsWith('[object CoherentArrayProxy]')) {
                                        const u = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < u.length; t++) n[a].push({ value: e(u[t].value) });
                                    } else
                                        u.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = B;
            },
            1922: (e, t, n) => {
                n.d(t, { Ar: () => d, GS: () => c, cJ: () => l });
                var a = n(6483),
                    u = n.n(a),
                    r = n(7739),
                    o = n(6179),
                    s = n.n(o),
                    i = n(1960);
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
                        const e = (0, o.useContext)(r.YN);
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
                    d = ({ header: e, content: t, aside: n, footer: a, compare: r = !1 }) => {
                        const o = c(),
                            l = u()(i.Z.base, o && i.Z[`base__${o}`], r && i.Z.base__compare),
                            d = u()(i.Z.header, o && i.Z[`header__${o}`]),
                            _ = u()(i.Z.main),
                            m = u()(i.Z.content);
                        return s().createElement(
                            'div',
                            { className: l },
                            e && s().createElement('div', { className: d }, e),
                            s().createElement(
                                'div',
                                { className: m },
                                s().createElement(
                                    'div',
                                    { className: _ },
                                    s().createElement('div', { className: i.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && s().createElement('div', { className: i.Z.footer }, a),
                        );
                    };
            },
            5562: (e, t, n) => {
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => ze,
                        Bar: () => He,
                        DefaultScroll: () => $e,
                        Direction: () => Fe,
                        defaultSettings: () => De,
                        useHorizontalScrollApi: () => ye,
                    });
                var u = {};
                n.r(u), n.d(u, { Area: () => ot, Bar: () => at, Default: () => rt, useVerticalScrollApi: () => Ye });
                var r = n(6179),
                    o = n.n(r),
                    s = n(493),
                    i = n.n(s),
                    l = n(9056),
                    c = n(1856),
                    d = n(7383),
                    _ = n(7902),
                    m = n(8071),
                    p = n(6536),
                    E = n(4179);
                const b = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    h = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    g = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = (0, m.M)(`${e}.${n}`, window);
                                return b(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    v = (e) => {
                        const t = ((e) => {
                                const t = (0, _.F)(),
                                    n = t.caller,
                                    a = t.resId,
                                    u = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: u, modelPath: h(u, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const u = (0, m.M)(h(n, `${t}.${a}`), window);
                                    return b(u) ? (e.push(u.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    f = E.Sw.instance;
                let A;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(A || (A = {}));
                const C = (e = 'model', t = A.Deep) => {
                    const n = (0, r.useState)(0),
                        a = (n[0], n[1]),
                        u = (0, r.useMemo)(() => (0, _.F)(), []),
                        o = u.caller,
                        s = u.resId,
                        i = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const t = (0, m.M)(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return b(t) ? t.value : t;
                            })(g(i)),
                        ),
                        c = l[0],
                        d = l[1],
                        E = (0, r.useRef)(-1);
                    return (
                        (0, p.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? A.Deep : A.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== A.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === A.Deep
                                            ? (e === c && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    u = v(e);
                                E.current = f.addCallback(u, n, s, t === A.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== A.None)
                                return () => {
                                    f.removeCallback(E.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                var F = n(1922),
                    D = n(6483),
                    B = n.n(D),
                    y = n(2262),
                    w = n(3649);
                const S = 'FormatText_base_d0',
                    k = ({ binding: e, text: t = '', classMix: n, alignment: a = w.v2.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  r.Fragment,
                                  null,
                                  t.split('\n').map((t, u) =>
                                      o().createElement(
                                          'div',
                                          { className: B()(S, n), key: `${t}-${u}` },
                                          (0, w.Uw)(t, a, e).map((e, t) =>
                                              o().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var T = n(6373);
                const N = 'visible_change',
                    x = N,
                    L = N,
                    M = (e, t) => {
                        const n = C('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                u = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && u.length > 0;
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
                    P = 'epic_battle';
                let I, O, H, W;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(I || (I = {})),
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
                    })(O || (O = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(H || (H = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(W || (W = {}));
                const $ = 'tooltip_watched';
                let z;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(z || (z = {}));
                const Y = ['action', 'timeLimit'];
                const X = 'metrics',
                    V = () => Date.now(),
                    j = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: u }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: u || null,
                    }),
                    U = (e, t) => {
                        const n = (0, r.useCallback)(
                            (n, a = W.Info, u) => {
                                u || (u = {}),
                                    Object.keys(u).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(u),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    G = (e, t) => {
                        const n = U(e, t),
                            a = (0, r.useRef)(new Map()),
                            u = (0, r.useRef)(new Map()),
                            o = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, V());
                                },
                                [a],
                            ),
                            s = (0, r.useCallback)(() => {
                                a.current.clear(), u.current.clear();
                            }, [a, u]),
                            i = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === u.current.get(e) &&
                                        u.current.set(e, V());
                                },
                                [a, u],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = u.current.get(e);
                                    if (void 0 === n) return;
                                    u.current.delete(e);
                                    const r = V() - n;
                                    a.current.set(e, t + r);
                                },
                                [a, u],
                            ),
                            c = (0, r.useCallback)(
                                (e, t = 0, r, o) => {
                                    const s = a.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== u.current.get(e) && l(e), a.current.delete(e);
                                    const i = (V() - s) / 1e3;
                                    i <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, i)),
                                        n(e, r, o));
                                },
                                [a, u, n, l],
                            );
                        return [(e) => o(e), (e, t, n, a) => c(e, t, n, a), () => s(), (e) => i(e), (e) => l(e)];
                    },
                    Z = (e) => {
                        const t = G(e, X),
                            n = t[0],
                            a = t[1],
                            u = t[2],
                            o = t[3],
                            s = t[4],
                            i = (0, r.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        u = e.logLevel;
                                    a(t, n, u, j(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => i(e), () => u(), (e) => o(e), (e) => s(e)];
                    },
                    q = (e, t) => {
                        const n = Z(e),
                            a = n[0],
                            u = n[1],
                            o = t.action,
                            s = t.timeLimit,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(t, Y);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => a(o || $),
                                onHide: () => u(Object.assign({ action: o || $, timeLimit: s || 2 }, i)),
                            }),
                            [o, s, i, a, u],
                        );
                    },
                    K = (e, t) => {
                        const n = G(e, t),
                            a = n[0],
                            u = n[1],
                            r = n[2],
                            o = n[3],
                            s = n[4];
                        return [(e) => a(e), (e, t, n, a) => u(e, t, n, a), () => r(), (e) => o(e), (e) => s(e)];
                    };
                var J = n(7208),
                    Q = n(8982);
                const ee = 'model.tankSetup.frontlineSetup',
                    te = {
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
                var ne = n(3457);
                const ae = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let ue, re;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(ue || (ue = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(re || (re = {}));
                const oe = o().memo(function ({ value: e, className: t, theme: n, size: a }) {
                    return o().createElement(
                        'div',
                        { className: B()(ae.base, ae[`base__${n}`], ae[`base__${a}`], t) },
                        o().createElement('div', { className: ae.label }, e),
                        o().createElement('div', { className: ae.icon }),
                    );
                });
                var se = n(2056);
                const ie = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return o().createElement(
                            se.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, n),
                        );
                    }),
                    le = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    ce = o().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const u = { pointsNeeded: e - (0, r.useContext)(_u), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: B()(le.base, t && le.base__isAvailable) },
                            o().createElement(
                                ie,
                                u,
                                o().createElement(
                                    'div',
                                    { className: le.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: le.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(oe, { value: e, theme: t ? re.Brown : re.Red, size: ue.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: le.actions },
                                o().createElement(
                                    ie,
                                    u,
                                    o().createElement(
                                        ne.u5,
                                        {
                                            size: ne.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: B()(le.purchaseButton, le.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    ne.u5,
                                    { size: ne.qE.medium, type: ne.L$.secondary, mixClass: le.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const _e = () => {
                        const e = (0, F.GS)(),
                            t = (0, r.useContext)(_u),
                            n = C(ee),
                            a = n.isTypeSelected,
                            u = n.vehicleType,
                            s = n.onChangeApplyAbilitiesToTypeSettings,
                            i = n.onDealConfirmed,
                            l = n.onDealCancelled,
                            c = n.totalPurchasePrice,
                            _ = n.purchaseSelectedAbilities,
                            m = C(`${ee}.dealPanel`),
                            p = m.isDisabled,
                            E = m.canAccept,
                            b = m.canCancel,
                            h = (0, w.BN)(u),
                            g = (0, r.useCallback)(() => s(), [s]),
                            v = (0, r.useCallback)(() => i(), [i]),
                            f = (0, r.useCallback)(() => l(), [l]),
                            A = (0, r.useCallback)(() => _(), [_]),
                            D = B()(te.base, e && te[`base__${e}`]),
                            S = B()(te.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            N = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: h
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(h)})`
                                        : '',
                                }),
                                [h],
                            ),
                            x = (0, r.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: te.vehicleIcon, style: N }),
                                    vehicle: R.strings.menu.classes.short.$dyn(h),
                                }),
                                [N, h],
                            ),
                            H = M('ShowAbilitiesButton', L);
                        (0, r.useEffect)(() => {
                            H && H.runTrigger(!0);
                        }, [H]);
                        const W = M('ApplyAbilitiesToTypeCheckbox', L);
                        (0, r.useEffect)(() => {
                            W && W.runTrigger(!0);
                        }, [W]);
                        const $ = q(P, { item: O.AbilitiesCheckboxTooltip, parentScreen: I.SetupView }),
                            z = c > 0,
                            Y = !z && E;
                        return o().createElement(
                            'div',
                            { className: D },
                            Y &&
                                o().createElement(
                                    'div',
                                    { className: S },
                                    o().createElement(
                                        T.i,
                                        de(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(h) },
                                            $,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: te.checkBoxZone },
                                            o().createElement(
                                                y.XZ,
                                                { isChecked: a, onChange: g, type: y.Rh.main, size: y.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: te.checkBoxLabel },
                                                    o().createElement(k, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: x,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                J.f,
                                { when: !0, canAccept: z || Y },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    z &&
                                        o().createElement(ce, {
                                            price: c,
                                            isAvailable: t >= c,
                                            onPurchase: A,
                                            onCancel: f,
                                        }),
                                    Y &&
                                        o().createElement(Q.Z, {
                                            applyBtnString: a ? d.qZ : d.k4,
                                            isDisabled: p,
                                            canCancel: b,
                                            onCancel: f,
                                            onConfirm: v,
                                        }),
                                ),
                            ),
                        );
                    },
                    me = (e, t, n) => (n < e ? e : n > t ? t : n),
                    pe = [];
                function Ee(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), pe)
                    );
                }
                function be(e, t, n = []) {
                    const a = (0, r.useRef)(0),
                        u = (0, r.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, r.useEffect)(() => u, [u]);
                    const o = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, o),
                        u,
                    ];
                }
                var he = n(7727),
                    ge = n(3138);
                function ve(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return fe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return fe(e, t);
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
                function fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ae(e, t, n) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let u,
                                    r = !1,
                                    o = 0;
                                function s() {
                                    u && clearTimeout(u);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        (o = Date.now()), n.apply(l, i);
                                    }
                                    r ||
                                        (a && !u && d(),
                                        s(),
                                        void 0 === a && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (u = setTimeout(
                                                  a
                                                      ? function () {
                                                            u = void 0;
                                                        }
                                                      : d,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (i.cancel = function () {
                                        s(), (r = !0);
                                    }),
                                    i
                                );
                            })(n, e),
                        t,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                var Ce = n(7030);
                let Fe;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Fe || (Fe = {}));
                const De = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Be = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: u,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, n) => {
                            const a = t(e),
                                u = a[0],
                                r = a[1];
                            return me(u, r, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                d = void 0 === l ? De : l,
                                _ = (0, r.useRef)(null),
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
                                        u = (e, ...n) => {
                                            for (var a, u = ve(t(e).values()); !(a = u()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, r.useMemo)(() => ({ on: n, off: a, trigger: u }), []);
                                })(),
                                E = Ae(
                                    () => {
                                        ge.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, Ce.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), p.trigger('change', e), o && E());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                h = b[0],
                                g = b[1],
                                v = (0, r.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const u = h.scrollPosition.get(),
                                            r = (null != (a = h.scrollPosition.goal) ? a : 0) - u;
                                        return s(e, t * n + r + u);
                                    },
                                    [h.scrollPosition],
                                ),
                                f = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            g.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(a, h.scrollPosition.get()) },
                                            });
                                    },
                                    [g, d.animationConfig, h.scrollPosition],
                                ),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return u(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, d.step),
                                            r = v(t, e, a);
                                        f(r);
                                    },
                                    [f, v, d.step],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            _.current && p.trigger('mouseWheel', e, h.scrollPosition, t(_.current));
                                    },
                                    [h.scrollPosition, A, p],
                                ),
                                F = ((e, t = []) => {
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
                                })(
                                    () =>
                                        (0, c.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(s(e, h.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [f, h.scrollPosition.goal],
                                ),
                                D = Ee(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = s(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? u(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: A,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: g,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: p.on, off: p.off },
                                }),
                                [h.scrollPosition, f, A, p.off, p.on, D, C, g, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ye = Be({
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
                        getDirection: (e) => (e.deltaY > 1 ? Fe.Next : Fe.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    we = 'HorizontalBar_base_49',
                    Se = 'HorizontalBar_base__nonActive_82',
                    ke = 'HorizontalBar_leftButton_5f',
                    Te = 'HorizontalBar_rightButton_03',
                    Ne = 'HorizontalBar_track_0d',
                    xe = 'HorizontalBar_thumb_fd',
                    Le = 'HorizontalBar_rail_32',
                    Me = 'disable',
                    Re = { pending: !1, offset: 0 },
                    Pe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ie = () => {},
                    Oe = (e, t) => Math.max(20, e.offsetWidth * t),
                    He = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Pe, onDrag: a = Ie }) => {
                        const u = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(Re),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = l.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / u),
                                    c = me(0, 1, r / (u - a)),
                                    _ = (t.offsetWidth - Oe(t, o)) * c;
                                (n.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Me), void i.current.classList.remove(Me);
                                            if (
                                                ((t = l.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Me), void i.current.classList.add(Me);
                                            var t, n;
                                            s.current.classList.remove(Me), i.current.classList.remove(Me);
                                        }
                                    })(_);
                            },
                            g = Ee(() => {
                                (() => {
                                    const t = d.current,
                                        n = l.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && n)) return;
                                    const o = Math.min(1, a / r);
                                    (t.style.width = `${Oe(n, o)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === o ? u.current.classList.add(Se) : u.current.classList.remove(Se));
                                })(),
                                    h();
                            });
                        (0, r.useEffect)(() => (0, c.v)(g)),
                            (0, r.useEffect)(
                                () =>
                                    (0, c.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Ie;
                                        const a = () => {
                                            n(), (n = (0, c.v)(g));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        var n;
                                        const u = e.contentRef.current;
                                        if (!u) return;
                                        const r = l.current,
                                            o = d.current;
                                        if (!u || !r || !o) return;
                                        const s = t.screenX - p.offset - r.getBoundingClientRect().x,
                                            i = (s / r.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(u, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), b(Re);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, p.offset, p.pending, a, b]);
                        const v = be((t) => e.applyStepTo(t), _, [e]),
                            f = v[0],
                            A = v[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Me) || (0, he.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()(we, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()(ke, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) ||
                                        0 !== e.button ||
                                        ((0, he.G)('play'), f(Fe.Next));
                                },
                                onMouseUp: A,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()(Ne, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, he.G)('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        u = e.contentRef.current;
                                                    if (!a || !u) return;
                                                    const r = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Fe.Prev : Fe.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                o().createElement('div', { ref: d, className: B()(xe, t.thumb) }),
                                o().createElement('div', { className: B()(Le, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()(Te, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) ||
                                        0 !== e.button ||
                                        ((0, he.G)('play'), f(Fe.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    We = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    $e = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: u,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: B()(We.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: B()(We.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(We.defaultScrollArea, u) },
                                o().createElement(ze, { className: i, api: _, classNames: s }, e),
                            ),
                            o().createElement(He, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    ze = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, r.useEffect)(() => (0, c.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(We.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: B()(We.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: B()(We.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (ze.Bar = He),
                    (ze.Default = $e),
                    (ze.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, r.useEffect)(() => (0, c.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(We.base, t) },
                            o().createElement(
                                'div',
                                { className: B()(We.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: B()(We.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    ));
                const Ye = Be({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Fe.Next : Fe.Prev),
                    }),
                    Xe = 'VerticalBar_base_f3',
                    Ve = 'VerticalBar_base__nonActive_42',
                    je = 'VerticalBar_topButton_d7',
                    Ue = 'VerticalBar_bottomButton_06',
                    Ge = 'VerticalBar_track_df',
                    Ze = 'VerticalBar_thumb_32',
                    qe = 'VerticalBar_rail_43',
                    Ke = 'disable',
                    Je = () => {},
                    Qe = { pending: !1, offset: 0 },
                    et = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    tt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    nt = (e, t) => Math.max(20, e.offsetHeight * t),
                    at = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = et, onDrag: a = Je }) => {
                        const u = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            d = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, r.useState)(Qe),
                            p = m[0],
                            E = m[1],
                            b = (0, r.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = Ee(() => {
                                const t = d.current,
                                    n = l.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && n)) return;
                                const o = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${nt(n, o)}px`),
                                    t.classList.add(Ze),
                                    u.current &&
                                        (1 === o ? u.current.classList.add(Ve) : u.current.classList.remove(Ve)),
                                    o
                                );
                            }),
                            g = Ee(() => {
                                const t = l.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / u),
                                    c = me(0, 1, r / (u - a)),
                                    _ = (t.offsetHeight - nt(t, o)) * c;
                                (n.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Ke), void i.current.classList.remove(Ke);
                                            if (
                                                ((t = l.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ke), void i.current.classList.add(Ke);
                                            var t, n;
                                            s.current.classList.remove(Ke), i.current.classList.remove(Ke);
                                        }
                                    })(_);
                            }),
                            v = Ee(() => {
                                tt(e, () => {
                                    h(), g();
                                });
                            });
                        (0, r.useEffect)(() => (0, c.v)(v)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    tt(e, () => {
                                        g();
                                    });
                                };
                                let n = Je;
                                const a = () => {
                                    n(), (n = (0, c.v)(v));
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
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        tt(e, (n) => {
                                            const u = l.current,
                                                r = d.current,
                                                o = e.getContainerSize();
                                            if (!u || !r || !o) return;
                                            const s = t.screenY - p.offset - u.getBoundingClientRect().y,
                                                i = (s / u.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), b(Qe);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, p.offset, p.pending, a, b]);
                        const f = be((t) => e.applyStepTo(t), _, [e]),
                            A = f[0],
                            C = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Ke) || (0, he.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: B()(Xe, t.base), ref: u, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: B()(je, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ke) ||
                                        0 !== e.button ||
                                        ((0, he.G)('play'), A(Fe.Next));
                                },
                                ref: s,
                                onMouseEnter: F,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: B()(Ge, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, he.G)('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        tt(e, (a) => {
                                                            if (!a) return;
                                                            const u = n(e),
                                                                r = e.clampPosition(a, a.scrollTop + u * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Fe.Prev : Fe.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: F,
                                },
                                o().createElement('div', { ref: d, className: t.thumb }),
                                o().createElement('div', { className: B()(qe, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: B()(Ue, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ke) ||
                                        0 !== e.button ||
                                        ((0, he.G)('play'), A(Fe.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ut = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    rt = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: u,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: B()(ut.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: B()(ut.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(ut.area, u) },
                                o().createElement(ot, { className: s, classNames: i, api: _ }, e),
                            ),
                            o().createElement(at, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    ot = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, r.useEffect)(() => (0, c.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: B()(ut.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: B()(ut.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                ot.Default = rt;
                const st = { Vertical: u, Horizontal: a };
                var it = n(9480);
                const lt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ct = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const dt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    _t = (e) =>
                        dt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = ct.length - 1; n >= 0; n--)
                                      for (; e >= ct[n]; ) (t += lt[n]), (e -= ct[n]);
                                  return t;
                              })(e),
                    mt = {
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
                let pt, Et;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(pt || (pt = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Et || (Et = {}));
                const bt = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: u,
                        tags: r,
                        isPremiumIGR: s,
                        size: i = pt.extraSmall,
                        type: l = Et.colored,
                        className: c,
                        classNames: d,
                        isShortName: _ = !1,
                    }) => {
                        const m = `${(0, w.BN)(a)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: B()(
                                    mt.base,
                                    mt[`base__size${(0, w.e)(i)}`],
                                    mt[`base__type${(0, w.e)(l)}`],
                                    r && it.UI(r, (e) => mt[`base__tag${(0, w.e)(e)}`]),
                                    c,
                                ),
                            },
                            o().createElement('div', { className: B()(mt.level, null == d ? void 0 : d.level) }, _t(u)),
                            o().createElement('div', {
                                className: B()(mt.type, e && mt.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${p})` },
                            }),
                            s && o().createElement('div', { className: mt.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: B()(mt.name, null == d ? void 0 : d.name) },
                                _ ? n : t,
                            ),
                        );
                    },
                    ht = 'Aside_base_a5',
                    gt = 'Aside_content_24',
                    vt = 'Aside_tankDetails_35',
                    ft = 'Aside_description_f0',
                    At = 'Aside_title_6f',
                    Ct = 'Aside_category_c0',
                    Ft = 'Aside_text_ca',
                    Dt = 'Aside_status_91',
                    Bt = 'Aside_status__activated_4e',
                    yt = 'CategoryTitle_base_f3',
                    wt = 'CategoryTitle_title_9d',
                    St = 'CategoryTitle_icon_48';
                let kt;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(kt || (kt = {}));
                const Tt = (0, r.memo)(({ category: e, iconTheme: t = kt.Small, className: n }) => {
                        const a = (0, r.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: B()(yt, n) },
                            o().createElement('div', { className: St, style: a }),
                            o().createElement('div', { className: wt }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Nt = (e, t, n, a) => {
                        const u = Z(P),
                            o = u[0],
                            s = u[1];
                        return [
                            (0, r.useCallback)(() => o($), [o]),
                            (0, r.useCallback)(
                                () => s({ action: $, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [s, e, t, n, a],
                            ),
                        ];
                    },
                    xt = 'InfoIcon_base_83',
                    Lt = 'InfoIcon_icon_47',
                    Mt = (0, r.memo)(({ item: e, className: t }) => {
                        const n = Nt(e, I.SetupView),
                            a = n[0],
                            u = n[1];
                        return o().createElement(
                            'div',
                            { className: B()(xt, t) },
                            o().createElement(
                                se.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: u,
                                },
                                o().createElement('div', { className: Lt }),
                            ),
                        );
                    }),
                    Rt = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Pt;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Pt || (Pt = {}));
                const It = (0, r.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: u }) => {
                    const s = t + 1,
                        i = (0, r.useMemo)(() => _t(s), [s]),
                        l = ((e) => {
                            const t = U(e, X),
                                n = (0, r.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, j(e));
                                    },
                                    [t],
                                );
                            return (e) => n(e);
                        })(P),
                        c = (0, r.useCallback)(() => {
                            a(t),
                                he.$.playClick(),
                                l({
                                    item: O.SkillLevelTab,
                                    action: H.Click,
                                    parentScreen: I.SetupView,
                                    info: String(s),
                                });
                        }, [t, s, a, l]),
                        d = (0, r.useCallback)(() => he.$.playHighlight(), []);
                    return o().createElement(
                        'div',
                        { className: B()(Rt.base, e && Rt.base__active, u), onClick: c, onMouseEnter: d },
                        o().createElement('div', { className: Rt.label }, i),
                        n !== Pt.None && o().createElement('div', { className: B()(Rt.arrow, Rt[`arrow__${n}`]) }),
                    );
                });
                var Ot = n(7078);
                function Ht() {
                    return (
                        (Ht =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ht.apply(this, arguments)
                    );
                }
                const Wt = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = o().createElement('div', { className: n }, e);
                    if (t.header || t.body) return o().createElement(T.i, t, a);
                    const u = t.contentId,
                        r = t.args,
                        s = null == r ? void 0 : r.contentId;
                    return u || s
                        ? o().createElement(se.u, Ht({}, t, { contentId: u || s }), a)
                        : o().createElement(Ot.t, t, a);
                };
                var $t = n(8045);
                const zt = 'ExtendedText_base_71',
                    Yt = 'ExtendedText_base__zeroPadding_25',
                    Xt = 'ExtendedText_base__isTruncationAvailable_5b',
                    Vt = 'ExtendedText_truncated_97',
                    jt = 'ExtendedText_truncated__hide_31',
                    Ut = 'ExtendedText_unTruncated_b8';
                let Gt, Zt, qt;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Gt || (Gt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Zt || (Zt = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(qt || (qt = {}));
                const Kt = { [qt.NBSP]: Gt.NoBreakSymbol, [qt.ZWNBSP]: Gt.NoBreakSymbol, [qt.NEW_LINE]: Gt.LineBreak },
                    Jt = {
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
                    Qt = 'renderers_noBreakWrapper_10',
                    en = 'renderers_lineBreak_b5',
                    tn = 'renderers_newLine_bd',
                    nn = (e) => ({ color: `#${e}` }),
                    an = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Jt[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: Jt[a] },
                                      e,
                                  )
                                : o().createElement('span', { key: n, 'data-block-type': t.blockType, style: nn(a) }, e)
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    un = {
                        [Gt.Word]: an,
                        [Gt.NoBreakSymbol]: an,
                        [Gt.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [Gt.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': Gt.LineBreak, className: en }),
                        [Gt.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': Gt.NewLine, className: tn }, e),
                        [Gt.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': Gt.NoBreakWrapper, className: Qt },
                                e,
                            ),
                    },
                    rn = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((u, r) => {
                                const o = `${n}_${r}`;
                                if (((e) => void 0 !== e.childList)(u)) {
                                    const e = u,
                                        t = e.blockType,
                                        n = rn(e, un[t], o);
                                    a.push(...n);
                                } else a.push(t({ elementList: [u], textBlock: e, key: o }));
                            }),
                            a
                        );
                    },
                    on = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            u = un[a],
                                            r = rn(e, u, t);
                                        return (
                                            a === Gt.NoBreakWrapper
                                                ? n.push(u({ elementList: r, textBlock: e, key: `${t}` }))
                                                : n.push(...r),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    sn = (e, t, n, a) => {
                        let u = t.exec(e),
                            r = 0;
                        for (; u; ) r !== u.index && n(e.slice(r, u.index)), a(u), (r = t.lastIndex), (u = t.exec(e));
                        r !== e.length && n(e.slice(r));
                    },
                    ln = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const a = [];
                        let u = 0;
                        for (; n; ) a.push(e.slice(u, t.lastIndex)), (u = t.lastIndex), (n = t.exec(e));
                        return u !== e.length && a.push(e.slice(u)), a;
                    },
                    cn = (e, t = '') => {
                        const n = [];
                        return (
                            sn(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Gt.Word, colorTag: t, childList: ln(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        u = Kt[a.charAt(0)];
                                    u === Gt.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Gt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Gt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(a),
                                          )
                                        : n.push({ blockType: u, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    dn = (e, t, n = '') => {
                        const a = [];
                        return (
                            sn(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...cn(e, n));
                                },
                                (e) => {
                                    const u = e[1],
                                        r = void 0 === t[u] ? e[0] : t[u];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...cn(String(r), n))
                                        : a.push({ blockType: Gt.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    _n = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Gt.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Gt.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    mn = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Gt.NoBreakSymbol
                                        ? ((n = !0), t.push(..._n(t.pop(), e)))
                                        : (n ? t.push(..._n(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    sn(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...dn(e, t));
                                        },
                                        (e) => {
                                            n.push(...dn(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, w.Eg)((0, w.z4)(e)), t),
                        );
                        return on(n);
                    },
                    pn = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    En = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    bn = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = En(e, t),
                            u = e.textContent.length,
                            r = e.offsetWidth / u,
                            o = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / r);
                            return a >= n ? [!0, n + o] : [!1, a];
                        }
                        const s = Math.max(n + o, 0);
                        return u < s ? [!1, 0] : [!0, s];
                    },
                    hn = (e, t, n, a, u, r) => {
                        let s = -1,
                            i = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Gt.LineBreak || c === Gt.NewLine || c === Gt.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = bn(n, a, u),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (u -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + r,
                                    p = t[l];
                                (i = o().cloneElement(p, p.props, m)), (s = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    _ = c.props.children,
                                    m = hn(e, _, e.length - 1, a, u, r),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = _.slice(0, p);
                                    (i = o().cloneElement(c, c.props, e, E)), (s = l);
                                    break;
                                }
                                u -= d.length;
                            }
                        }
                        return [s, i];
                    },
                    gn = (e, t, n, a = '...') => {
                        const u = [...t],
                            r = e.current;
                        if (!r) return [u, !1];
                        const o = n.height,
                            s = n.width,
                            i = r.lastElementChild;
                        if (!pn(i, o) && En(i, s) <= 0) return [u, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const u = n + Math.ceil(0.5 * (a - n));
                                    pn(e[u], t) ? (a = u - 1) : (n = u + 1);
                                }
                                return n - 1;
                            })(l, o);
                        if (c < 0) return [u, !1];
                        const d = hn(l, u, c, s, a.length, a),
                            _ = d[0],
                            m = d[1];
                        return m && (u.splice(_, 1, m), u.splice(_ + 1)), [u, !0];
                    },
                    vn = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: u = !1,
                            isTruncationAvailable: s = !1,
                            targetId: i,
                            justifyContent: l = Zt.FlexStart,
                            alignContent: c = Zt.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const _ = (0, r.useRef)(null),
                                m = (0, r.useRef)({ height: 0, width: 0 }),
                                p = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = p[0],
                                b = p[1],
                                h = (0, r.useMemo)(() => mn(e, a), [a, e]),
                                g = (0, r.useMemo)(() => {
                                    if (u && E.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, u, i, e, E.isTruncated]),
                                v = (0, r.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const t = gn(_, h, m.current, d),
                                            a = t[0],
                                            u = t[1];
                                        b({ elementList: a, isTruncated: u, isTruncateFinished: !0 }), n && n(u);
                                    },
                                    [n, d, h],
                                ),
                                f = (0, r.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
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
                                        const t = new $t.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(_, v, s),
                                o().createElement(
                                    'div',
                                    { className: B()(zt, t, Yt, s && Xt), style: f },
                                    o().createElement('div', { className: Ut, ref: _ }, h),
                                    o().createElement(
                                        Wt,
                                        { tooltipArgs: g },
                                        o().createElement(
                                            'div',
                                            { className: B()(Vt, !E.isTruncateFinished && s && jt), style: f },
                                            E.isTruncateFinished && s ? E.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    fn = {
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
                    An = (0, r.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            u = Number(t.value),
                            s = Number(n.value),
                            i = (0, r.useMemo)(() => u < s, [u, s]),
                            l = (0, r.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(u)) {
                                    const e = a - u;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [u, a]),
                            c = (0, r.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, w.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: E.Z5.getRealFormat(Math.abs(l), E.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: fn.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, r.useMemo)(
                                () => ({
                                    sign: t.sign,
                                    value: isNaN(u) ? t.value : E.Z5.getNumberFormat(u, E.B3.GOLD),
                                }),
                                [t, u],
                            ),
                            _ = (0, r.useMemo)(() => (i ? { width: ((100 * u) / s).toString() + '%' } : {}), [i, u, s]),
                            m = (0, r.useMemo)(
                                () => (i ? { width: ((100 * (a - u)) / s).toString() + '%' } : {}),
                                [i, u, a, s],
                            );
                        return o().createElement(
                            'div',
                            { className: fn.base },
                            o().createElement(
                                'div',
                                { className: fn.valueWrapper },
                                l &&
                                    o().createElement(vn, {
                                        binding: c,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: fn.diff,
                                        alignContent: Zt.FlexEnd,
                                    }),
                                o().createElement(vn, { text: e.valueTemplate, binding: d, classMix: fn.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: fn.labelWrapper },
                                o().createElement('div', { className: fn.label }, t.name),
                            ),
                            i &&
                                o().createElement(
                                    'div',
                                    { className: fn.progress },
                                    o().createElement('div', { className: fn.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: fn.progressValue, style: _ },
                                        o().createElement('div', { className: fn.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: fn.progressDelta, style: m }),
                                    o().createElement('div', { className: B()(fn.progressDot, fn.progressDot__end) }),
                                ),
                        );
                    }),
                    Cn = 'Levels_base_a9',
                    Fn = 'Levels_tabsWrapper_a0',
                    Dn = 'Levels_tabsBorder_cf',
                    Bn = 'Levels_tabsBorder__top_8f',
                    yn = 'Levels_tabsBorder__bottom_82',
                    wn = 'Levels_tabsLabel_60',
                    Sn = 'Levels_tabs_8f',
                    kn = 'Levels_tab_c3',
                    Tn = 'Levels_caret_7e',
                    Nn = 'Levels_params_d6',
                    xn = 'Levels_infoIcon_68',
                    Ln = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            u = n[0].value.params,
                            s = n[n.length - 1].value.params,
                            i = n[t].value,
                            l = (0, r.useMemo)(() => ({ left: 80 * t + 'rem' }), [t]),
                            c = (0, r.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: Cn },
                            o().createElement(
                                'div',
                                { className: Fn },
                                o().createElement('div', { className: B()(Dn, Bn) }),
                                o().createElement('div', { className: B()(Dn, yn) }),
                                o().createElement(Mt, { item: O.AbilityLevelsTooltip, className: xn }),
                                o().createElement(
                                    'div',
                                    { className: wn },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Sn },
                                    n.map(({ value: e }, n) => {
                                        const u = n < t ? Pt.Active : Pt.Default;
                                        return o().createElement(It, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? u : Pt.None,
                                            onClick: c,
                                            classMix: kn,
                                        });
                                    }),
                                    o().createElement('div', { className: Tn, style: l }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Nn },
                                i.params.map(({ value: e }, t) =>
                                    o().createElement(An, {
                                        key: e.id,
                                        firstParam: u[t].value,
                                        lastParam: s[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Mn = (0, r.memo)(function ({ className: e }) {
                        const t = Ye(),
                            n = C('model.vehicleInfo'),
                            a = C(`${ee}`).setCurrentSlotDetailsLevel,
                            u = C(`${ee}.details`),
                            s = u.name,
                            i = u.category,
                            l = u.selectedLevel,
                            c = u.description,
                            d = u.levelInfos,
                            _ = u.isActivated,
                            m = (0, r.useCallback)((e) => a({ level: e }), [a]);
                        return o().createElement(
                            'div',
                            { className: B()(ht, e) },
                            o().createElement(
                                st.Vertical.Area.Default,
                                { api: t },
                                o().createElement(
                                    'div',
                                    { className: gt },
                                    o().createElement('div', { className: vt }, o().createElement(bt, n)),
                                    o().createElement(
                                        'div',
                                        { className: ft },
                                        o().createElement('div', { className: At }, s),
                                        o().createElement(Tt, { category: i, className: Ct }),
                                        o().createElement('div', { className: Ft }, c),
                                    ),
                                    o().createElement(Ln, { onLevelChanged: m, selectedLevel: l, levelInfos: d }),
                                    o().createElement(
                                        'div',
                                        { className: B()(Dt, _ && Bt) },
                                        _
                                            ? R.strings.tank_setup.abilities.details.status.unlocked()
                                            : R.strings.tank_setup.abilities.details.status.locked(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Rn = 'BattleAbilitiesSetup_aside_bd';
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
                function Pn() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                const In = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    On = (e) => {
                        const t = (0, r.useState)(In(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, r.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        In(e ? e.current : null) ? a(!0) : n();
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
                    };
                var Hn = n(8380),
                    Wn = n.n(Hn);
                const $n = 'ScrollArea_base_47',
                    zn = 'ScrollArea_base__scrollIndent_1d',
                    Yn = 'ScrollArea_base__verticalScrollbarMargin_50',
                    Xn = 'ScrollArea_base__multiple_44',
                    Vn = 'ScrollArea_base__hidden_ec',
                    jn = o().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            a = void 0 === n ? 0 : n,
                            u = e.offsetTop,
                            s = void 0 === u ? 0 : u,
                            i = e.scrollSettings,
                            l = e.onUpdateActiveAxis,
                            d = e.onHorizontalScroll,
                            _ = e.onVerticalScroll,
                            m = e.onOverScrollAtBeginning,
                            p = e.onOverScrollAtEnd,
                            E = e.wrapperIndent,
                            b = e.verticalScrollbarMargin,
                            h = e.isMultipleScroll,
                            g = e.scrollAreaContainer,
                            v = e.children,
                            f = e.classMix,
                            A = e.onScrollLeftHandled,
                            C = (0, r.useState)(!1),
                            F = C[0],
                            D = C[1],
                            y = (0, r.useState)(),
                            w = y[0],
                            S = y[1],
                            k = (0, r.useState)(),
                            T = k[0],
                            N = k[1],
                            x = (0, r.useRef)(null),
                            L = (0, r.useCallback)(() => {
                                w &&
                                    l &&
                                    l({ x: w.scrollbarXActive, y: w.scrollbarYActive }, { x: w.reach.x, y: w.reach.y });
                            }, [l, w]),
                            M = (0, r.useCallback)(() => w, [w]),
                            R = (0, r.useCallback)(() => {
                                w && w.update();
                            }, [w]),
                            P = (0, r.useCallback)(
                                (e, t, n) => {
                                    w && (w.setScrollLeft(e, t, n), A && A(e, w.contentWidth - w.containerWidth));
                                },
                                [w, A],
                            ),
                            I = (0, r.useCallback)(
                                (e) => {
                                    w && (w.setScrollLeftImmediately(e), A && A(e, w.contentWidth - w.containerWidth));
                                },
                                [w, A],
                            ),
                            O = (0, r.useCallback)(
                                (e, t, n) => {
                                    w && w.setScrollTop(e, t, n);
                                },
                                [w],
                            ),
                            H = (0, r.useCallback)(
                                (e) => {
                                    w && w.setScrollTopImmediately(e);
                                },
                                [w],
                            ),
                            W = (0, r.useCallback)(() => {
                                if (T && d && w) {
                                    const e = { scrollPosition: T.scrollLeft < 0 ? 0 : T.scrollLeft, reach: w.reach.x };
                                    d(e);
                                }
                            }, [d, T, w]),
                            $ = (0, r.useCallback)(() => {
                                if (T && _ && w) {
                                    const e = { scrollPosition: T.scrollTop, reach: w.reach.y };
                                    _(e);
                                }
                            }, [_, T, w]),
                            z = (0, r.useCallback)(() => {
                                m && m();
                            }, [m]),
                            Y = (0, r.useCallback)(() => {
                                p && p();
                            }, [p]),
                            X = (0, r.useCallback)(
                                (e) => {
                                    'function' == typeof t ? t(e) : null !== t && (t.current = e), N(e);
                                },
                                [t],
                            ),
                            V = (0, r.useCallback)(() => {
                                w &&
                                    (w.update(),
                                    (x.current = (0, c.v)(() => {
                                        L();
                                    })));
                            }, [w, L]),
                            j = (0, r.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, r.useEffect)(() => {
                            if (w && T)
                                return (
                                    document.addEventListener('mousemove', j),
                                    window.addEventListener('resize', V),
                                    T.addEventListener('ps-scroll-x', W),
                                    T.addEventListener('ps-scroll-y', $),
                                    T.addEventListener('over-scroll-beginning', z),
                                    T.addEventListener('over-scroll-ending', Y),
                                    D(!0),
                                    () => {
                                        window.removeEventListener('resize', V),
                                            document.removeEventListener('mousemove', j),
                                            T &&
                                                (T.removeEventListener('ps-scroll-x', W),
                                                T.removeEventListener('ps-scroll-y', $),
                                                T.removeEventListener('over-scroll-beginning', z),
                                                T.removeEventListener('over-scroll-ending', Y));
                                    }
                                );
                        }, [j, W, z, Y, V, T, w, $]);
                        const U = (0, r.useRef)(T || null);
                        U.current = T || null;
                        const G = On(U);
                        (0, r.useEffect)(
                            () => (
                                !w && T && G && S(new (Wn())(T, Object.assign({}, i))),
                                () => {
                                    w && (w.destroy(), S(void 0));
                                }
                            ),
                            [T, G, i, w],
                        ),
                            (0, r.useEffect)(
                                () => () => {
                                    null == x.current || x.current();
                                },
                                [],
                            ),
                            (0, r.useEffect)(
                                () =>
                                    (0, c.v)(() => {
                                        w && L();
                                    }),
                                [L, w],
                            ),
                            (0, r.useEffect)(() => {
                                a > 0 && I(a);
                            }, [a, I]),
                            (0, r.useEffect)(() => {
                                s > 0 && H(s);
                            }, [s, H]),
                            (0, r.useEffect)(() => {
                                g &&
                                    ((g.setScrollLeft = P),
                                    (g.setScrollTop = O),
                                    (g.setScrollLeftImmediately = I),
                                    (g.setScrollTopImmediately = H),
                                    (g.updateScrollArea = R),
                                    (g.getScrollbar = M));
                            }, [g, P, I, O, H, R, M]);
                        const Z = B()($n, { [zn]: E, [Vn]: !F, [Yn]: b, [Xn]: h }, f);
                        return o().createElement('div', { className: Z, ref: X }, v);
                    }),
                    Un = 'ScrollableCards_base_e0',
                    Gn = 'ScrollableCards_scroll_4b',
                    Zn = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const u = (0, r.useState)(!1),
                            s = u[0],
                            i = u[1],
                            l = (0, r.useRef)({}),
                            d = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            m = (0, r.useRef)(!1),
                            p = (0, r.useRef)(''),
                            E = On(d);
                        (0, r.useEffect)(
                            () => () => {
                                m.current = !1;
                            },
                            [],
                        );
                        const b = (0, r.useCallback)(() => {
                                m.current && i(!0);
                            }, []),
                            h = (0, r.useCallback)(() => {
                                m.current && i(!1);
                            }, []),
                            g = (0, r.useCallback)(() => {
                                const e = _.current,
                                    t = d.current,
                                    n = l.current;
                                if (e && n && t) {
                                    const a = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    n.setScrollTop(a, void 0, b);
                                }
                            }, [b]);
                        (0, r.useEffect)(() => {
                            (0, c.v)(() => {
                                E &&
                                    (p.current === n
                                        ? g()
                                        : ((p.current = n),
                                          Pn().then(() => {
                                              g(), m.current || (m.current = !0);
                                          })));
                            });
                        }, [E, n, g, t]),
                            (0, r.useEffect)(() => {
                                m.current && l.current.setScrollTopImmediately(0);
                            }, [a]);
                        const v = {
                                currentCardRef: _,
                                scrollWrapperRef: d,
                                isFinalAnimationRunning: s,
                                onFinalAnimationDone: h,
                            },
                            f = (0, r.cloneElement)(e, v);
                        return o().createElement(
                            'div',
                            { className: Un },
                            o().createElement(
                                'div',
                                { className: Gn, ref: d },
                                o().createElement(jn, { key: n, scrollAreaContainer: l.current }, f),
                            ),
                        );
                    };
                let qn;
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
                })(qn || (qn = {}));
                Date.now();
                const Kn = 'select',
                    Jn = 'undo',
                    Qn = 'cancel',
                    ea = 'swap',
                    ta = 'demount',
                    na = 'demount_from_setup',
                    aa = 'demount_from_setups',
                    ua = 'destroy',
                    ra = 'upgrade',
                    oa = 'add_one';
                var sa = n(1363),
                    ia = n(1641);
                const la = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: u,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const i = (0, r.useCallback)(() => {
                                (0, E.c9)(E.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: u,
                                }),
                                    he.$.playYes();
                            }, [u, t, n, a]),
                            l = (0, r.useCallback)(() => {
                                (0, E.c9)(E.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    s && s(e), ((e) => e.button === ia.t.RIGHT)(e) && i();
                                },
                                [s, i],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    ca = ['children'];
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
                const _a = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, ca);
                        return o().createElement(
                            la,
                            da({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    ma = [
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
                function pa(e) {
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
                const Ea = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: E.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    ba = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            u = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            p = e.decoratorId,
                            E = void 0 === p ? 0 : p,
                            b = e.isEnabled,
                            h = void 0 === b || b,
                            g = e.onShow,
                            v = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, ma);
                        const A = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => (0, _.F)(), []).resId,
                            F = (0, r.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (Ea(n, E, { isMouseEvent: !0, on: !0, arguments: pa(a) }, C),
                                    g && g(),
                                    (A.current.isVisible = !0));
                            }, [n, E, a, C, g]),
                            D = (0, r.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        Ea(n, E, { on: !1 }, C),
                                        A.current.isVisible && v && v(),
                                        (A.current.isVisible = !1);
                                }
                            }, [n, E, C, v]),
                            B = (0, r.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = A.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', B, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', B, { capture: !0 }),
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
                        return h
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((A.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                      u && u(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), o && o(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !m && D(), i && i(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !m && D(), s && s(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    ha = ['children'];
                function ga() {
                    return (
                        (ga =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ga.apply(this, arguments)
                    );
                }
                const va = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, ha);
                    return o().createElement(
                        ba,
                        ga(
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
                var fa = n(5282);
                const Aa = {
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
                    Ca = 'Warning_base_4c',
                    Fa = 'Warning_glow_79',
                    Da = 'Warning_line_df',
                    Ba = 'Warning_icon_24',
                    ya = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, r.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return o().createElement(
                            'div',
                            { id: e, className: Ca },
                            o().createElement('div', { className: Fa }),
                            o().createElement('div', { className: Da }),
                            o().createElement(
                                se.u,
                                { contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'), args: a },
                                o().createElement('div', { className: Ba }),
                            ),
                        );
                    },
                    wa = ({
                        parentId: e,
                        mediaSize: t,
                        name: n,
                        tooltipArgs: a,
                        contextMenuArgs: u,
                        imageSource: s,
                        overlayType: i,
                        highlightType: l,
                        isModernized: c,
                        level: d,
                        isDisabled: _,
                        isCurrent: m,
                        isActive: p,
                        isLocked: E,
                        isClickable: b = !0,
                        details: h,
                        options: g,
                        actions: v,
                        specializations: f,
                        extraImages: A,
                        onSlotClick: C,
                        shouldHandleMouseOver: D,
                        category: y,
                        onTooltipShow: w,
                        onTooltipHide: S,
                        lockReason: k,
                    }) => {
                        const T = (0, r.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            N = T[0],
                            x = T[1],
                            L = (0, r.useState)(!1),
                            M = L[0],
                            P = L[1],
                            I = (0, r.useCallback)(() => {
                                !N.isActionsHovered && he.$.playHighlight(),
                                    x({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    D && P(!0);
                            }, [N.isActionsHovered, D]),
                            O = (0, r.useCallback)(() => {
                                D && P(!1);
                            }, [D]),
                            H = (0, r.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            W = (0, r.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            $ = b && !_,
                            z = (0, r.useCallback)(() => {
                                $ && C && (he.$.playClick(), C());
                            }, [C, $]),
                            Y = N.isBaseHovered || N.isActionsHovered,
                            X = B()(
                                Aa.content,
                                Aa[`content__${t}`],
                                Y && b && !_ && Aa.content__hovered,
                                !Y && Aa.content__out,
                                p && Aa.content__installed,
                                m && Aa.content__current,
                                _ && Aa.content__disabled,
                                !$ && Aa.content__nonclickable,
                            ),
                            V = (0, r.useMemo)(() => {
                                let e = o().createElement('div', {
                                    onMouseEnter: I,
                                    onMouseLeave: W,
                                    className: Aa.hover,
                                    onClick: z,
                                });
                                return (
                                    a && (e = o().createElement(va, { args: a, onShow: w, onHide: S }, e)),
                                    u && (e = o().createElement(_a, { args: u }, e)),
                                    e
                                );
                            }, [I, W, z, a, u, w, S]),
                            j = (0, r.useMemo)(() => {
                                if (!n) return null;
                                const e = B()(Aa.name, _ && Aa.name__disabled);
                                return o().createElement(
                                    'div',
                                    { className: e },
                                    o().createElement(fa.n, {
                                        mediaSize: t,
                                        linesCount: 3,
                                        blocks: (0, fa.D)(systemLocale.toUpperCase(n)),
                                    }),
                                );
                            }, [t, n, _]),
                            U = (0, r.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            G =
                                t === F.cJ.Large || t === F.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            Z = (0, r.useMemo)(() => {
                                let e;
                                return (
                                    i && (e = c ? G.$dyn(`${i}_${d}_overlay`) : G.$dyn(`${i}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [G, i, c, d]),
                            q = (0, r.useMemo)(() => {
                                let e;
                                return l && (e = G.$dyn(`${l}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [G, l]),
                            K = B()(Aa.options, _ && Aa.options__disabled),
                            J = B()(Aa.overlay, Aa[`overlay__${i}`]),
                            Q = B()(Aa.highlight, Aa[`highlight__${l}`]),
                            ee = (0, r.useMemo)(() => {
                                const e = (t === F.cJ.Large || t === F.cJ.Huge ? F.cJ.Large : F.cJ.Medium) + '_' + y,
                                    n = R.images.gui.maps.icons.specialization.$dyn(e);
                                return n && { backgroundImage: `url(${n})` };
                            }, [y, t]),
                            te = B()(Aa.category, Aa[`category__${t}`]);
                        return o().createElement(
                            'div',
                            { className: Aa.base },
                            o().createElement(
                                'div',
                                { id: e, className: X, onMouseLeave: O },
                                q &&
                                    o().createElement(
                                        'div',
                                        { className: Aa.types },
                                        o().createElement('div', { className: Q, style: q }),
                                    ),
                                o().createElement('div', { className: Aa.image, style: U }, A),
                                _ && o().createElement('div', { className: Aa.disabled }),
                                ee && o().createElement('span', { className: te, style: ee }),
                                Z &&
                                    o().createElement(
                                        'div',
                                        { className: Aa.types },
                                        o().createElement('div', { className: J, style: Z }),
                                    ),
                                f && o().createElement('div', { className: Aa.specialization }, f),
                                j,
                                h && o().createElement('div', { className: Aa.details }, h),
                                o().createElement('div', { className: K }, g),
                                V,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: H, onMouseLeave: W, className: Aa.actions },
                                    D && v
                                        ? (0, r.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: M }))
                                        : v,
                                ),
                            ),
                            E &&
                                o().createElement(
                                    'div',
                                    { className: Aa.locked },
                                    o().createElement(ya, { reason: k, isCritical: _, parentId: e }),
                                ),
                        );
                    };
                var Sa = n(3934),
                    ka = n(8401);
                const Ta = 'Availability_base_51',
                    Na = () => o().createElement('div', { className: Ta }),
                    xa = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    La = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: u = !0 }) => {
                            const r = B()(
                                xa.base,
                                xa['base__' + (u ? 'shown' : 'hidden')],
                                (n || e || (a && 0 === e)) && xa.base__visually,
                            );
                            let s = null;
                            return (
                                (s = n
                                    ? o().createElement(Na, null)
                                    : e || (a && 0 === e)
                                      ? o().createElement(Sa.K, { itemsInStorage: e })
                                      : t && o().createElement(ka.t, t)),
                                o().createElement('div', { className: r }, s)
                            );
                        },
                    ),
                    Ma = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Ra = n(8750);
                const Pa = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Ia = ({ level: e }) => {
                        const t = (0, F.GS)();
                        if (!e) return null;
                        const n = B()(Pa.base, t && Pa[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: n },
                            o().createElement(Ra.a, {
                                type: Ra.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Oa = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: u,
                            onSlotAction: s,
                            intCD: i,
                            level: l,
                            description: c,
                            overlayType: _,
                            isDisabled: m,
                            category: p,
                            isMounted: E,
                            cost: b,
                        }) => {
                            const h = (0, F.GS)(),
                                g = t > -1,
                                v = `${i}-ability`,
                                f = (0, r.useMemo)(() => ({ intCD: i, slotType: d.YN, fieldType: 0 }), [i]),
                                A = (0, r.useCallback)(
                                    (e) => {
                                        s({ actionType: e, intCD: i, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [s, i, n],
                                ),
                                C = (0, r.useCallback)(() => {
                                    A(Kn);
                                }, [A]),
                                D = (0, r.useContext)(_u),
                                y = (0, r.useMemo)(() => {
                                    const e = B()(Ma.bonuses, h && Ma[`base__${h}`]),
                                        t = D >= b ? re.Brown : re.Red;
                                    return o().createElement(
                                        'div',
                                        { className: Ma.base },
                                        o().createElement(sa._, {
                                            parentId: v,
                                            mediaSize: h,
                                            classMix: e,
                                            classColorMix: Ma.unit,
                                            text: c,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(oe, {
                                                value: b,
                                                theme: t,
                                                size: ue.Small,
                                                className: Ma.points,
                                            }),
                                    );
                                }, [h, c, v, m, b, D]),
                                w =
                                    ((0, r.useMemo)(() => o().createElement(Ia, { level: l }), [l]),
                                    (0, r.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(u),
                                        [u],
                                    ));
                            return o().createElement(wa, {
                                parentId: v,
                                mediaSize: h,
                                name: e,
                                tooltipArgs: f,
                                imageSource: w,
                                isCurrent: a,
                                isActive: g,
                                details: y,
                                isDisabled: m && D < b,
                                category: p,
                                extraImages: !1,
                                overlayType: _,
                                onSlotClick: C,
                                options: o().createElement(La, { show: E, isMounted: E }),
                            });
                        },
                    ),
                    Ha = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
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
                const $a = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = C(ee),
                            u = a.categoriesOrder,
                            s = a.onSlotAction,
                            i = a.slots,
                            l = C('model.ammunitionPanel'),
                            c = l.onSectionSelect,
                            d = l.selectedSection,
                            _ = (0, F.GS)(),
                            m = u.map(({ value: e }) => e),
                            p = i.map(({ value: e }) => e),
                            E = (0, r.useMemo)(() => {
                                if (_ === F.cJ.Tiny)
                                    return p.sort(
                                        (e, t) => m.indexOf(e.category) - m.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                p.map((t) => {
                                    t.category in e || (e[t.category] = []), e[t.category].push(t);
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    });
                                const t = [];
                                do {
                                    m.map((n) => {
                                        const a = e[n].shift();
                                        a && t.push(a);
                                    });
                                } while (t.length < p.length);
                                return t;
                            }, [p, m, _]),
                            b = (0, r.useCallback)(
                                (e) => {
                                    c({ selectedSlot: e.currentSlotId, selectedSection: d }), s(e);
                                },
                                [c, s, d],
                            ),
                            h = E.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    u = a > -1 && t === a;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: u ? e : null, className: B()(Ha.card, _ && Ha[`card__${_}`]) },
                                    o().createElement(Oa, Wa({}, n, { isCurrent: u, onSlotAction: b })),
                                );
                            }),
                            g = B()(Ha.base, _ && Ha[`base__${_}`], n && Ha.base__disabled);
                        return o().createElement('div', { className: g }, h);
                    },
                    za = 'BattleAbilitiesNoSelected_base_06',
                    Ya = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Xa = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    Va = 'BattleAbilitiesNoSelected_title_20',
                    ja = 'BattleAbilitiesNoSelected_title__small_65',
                    Ua = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Ga = 'BattleAbilitiesNoSelected_button_bf',
                    Za = R.strings.tank_setup.abilities.noSelected,
                    qa = () => {
                        const e = (0, F.GS)(),
                            t = C(ee, A.None).showInfoPage,
                            n = (0, r.useMemo)(() => e === F.cJ.Small || e === F.cJ.Tiny, [e]),
                            a = (0, r.useMemo)(() => (e === F.cJ.Tiny ? ne.qE.small : ne.qE.medium), [e]),
                            u = (0, r.useCallback)(() => t(), [t]),
                            s = B()(Ya, n && Xa),
                            i = B()(Va, n && ja);
                        return o().createElement(
                            'div',
                            { className: za, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: s }),
                            o().createElement('div', { className: i }, Za.title()),
                            o().createElement('div', { className: Ua }, Za.subTitle()),
                            o().createElement(ne.u5, { size: a, mixClass: Ga, onClick: u }, Za.toReserves()),
                        );
                    },
                    Ka = 'Content_base_d8',
                    Ja = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: Ka },
                            e
                                ? o().createElement(
                                      Zn,
                                      { selectedSlotId: t },
                                      o().createElement($a, { selectedSlot: t }),
                                  )
                                : o().createElement(qa, null),
                        );
                    }),
                    Qa = {
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
                    eu = ({ title: e, content: t, tabs: n }) => {
                        const a = (0, F.GS)(),
                            u = B()(Qa.base, a && Qa[`base__${a}`]),
                            r = B()(Qa.tabs, a && Qa[`tabs__${a}`]),
                            s = B()(Qa.title, a && Qa[`title__${a}`]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: s }, e),
                                n && o().createElement('div', { className: r }, n),
                            ),
                            t && t,
                        );
                    };
                var tu = n(8089);
                const nu = {
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let au;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(au || (au = {}));
                const uu = o().memo(function ({ theme: e, className: t }) {
                        const n = C(ee).showInfoPage,
                            a = (0, r.useCallback)(() => n(), [n]),
                            u = (0, r.useMemo)(() => ({ caption: B()(e === au.OnlyIcon && nu.hidden) }), [e]);
                        return o().createElement(
                            'div',
                            { className: B()(nu.base, nu[`base__${e}`], t) },
                            o().createElement(tu.A, {
                                caption: e === au.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                                type: 'info',
                                side: 'left',
                                onClick: a,
                                classNames: u,
                            }),
                        );
                    }),
                    ru = 'Header_base_aa',
                    ou = 'Header_points_d5',
                    su = 'Header_content_2c',
                    iu = 'Header_textWrapper_63',
                    lu = 'Header_text_dc',
                    cu = 'Header_infoButton_5e',
                    du = o().memo(function () {
                        const e = (0, r.useContext)(_u),
                            t = (0, r.useMemo)(
                                () => ({
                                    points: o().createElement(oe, {
                                        theme: re.Brown,
                                        size: ue.Normal,
                                        value: e,
                                        className: ou,
                                    }),
                                }),
                                [e],
                            ),
                            n = Nt(O.SkillPointsTooltip, I.SetupView),
                            a = n[0],
                            u = n[1];
                        return o().createElement(
                            'div',
                            { className: ru },
                            o().createElement(eu, {
                                title: R.strings.tank_setup.section.battleAbilities(),
                                content: o().createElement(
                                    'div',
                                    { className: su },
                                    o().createElement(uu, { theme: au.OnlyIcon, className: cu }),
                                    o().createElement(
                                        T.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: a,
                                            onMouseLeave: u,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: iu },
                                            o().createElement(vn, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: t,
                                                classMix: lu,
                                            }),
                                        ),
                                    ),
                                ),
                            }),
                        );
                    }),
                    _u = o().createContext(0),
                    mu = () => {
                        const e = C(ee),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = C('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            _u.Provider,
                            { value: n },
                            o().createElement(F.Ar, {
                                header: o().createElement(du, null),
                                content: o().createElement(Ja, { isLocked: t, selectedSlot: a }),
                                aside: o().createElement(Mn, { className: Rn }),
                                footer: o().createElement(_e, null),
                            }),
                        );
                    },
                    pu = 'Tabs_base_d9',
                    Eu = 'Tabs_base__vertical_c0',
                    bu = 'Tabs_list_0a',
                    hu = 'Tabs_list__centered_dc',
                    gu = 'Tabs_wrapper_2d',
                    vu = 'Tabs_wrapper__centered_d8',
                    fu = 'Tabs_wrapper__vertical_a5';
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const Cu = 'tabs-role';
                var Fu;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(Fu || (Fu = {}));
                class Du extends r.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Fu.TAB]);
                                return t && t.props[Fu.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Cu] === Fu.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        (e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[Fu.TAB] })),
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
                            u =
                                ((r = this.tabsProps),
                                (s = a),
                                !(
                                    Object.keys(r).length === Object.keys(s).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(s, e) && r[e] === s[e],
                                    )
                                ));
                        var r, s;
                        const i = B()(
                                gu,
                                n.props.className,
                                this.props.isTabsCentered && vu,
                                this.props.isVerticalTabs && fu,
                            ),
                            l = B()(bu, this.props.isTabsCentered && hu);
                        if (t.activeKey !== this.state.activeKey || u) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Cu] === Fu.CONTENT)
                                        return e.props[Fu.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                u = t[0].props.children,
                                r = u.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Fu.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === u.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][Fu.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, he.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, he.G)(this.props.onMouseEnterSound);
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
                                            { className: l, key: Fu.LIST },
                                            o().createElement('div', Au({}, n.props, { className: i }), r),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = B()(pu, this.props.isVerticalTabs && Eu);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                Du.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Bu = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
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
                const wu = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            u = e.onClickSound,
                            r = e.onMouseEnterSound,
                            s = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, Bu);
                        return o().createElement(
                            'div',
                            yu({ className: n }, i),
                            o().createElement(
                                Du,
                                { activeKey: a, onClickSound: u, onMouseEnterSound: r, isTabsCentered: s },
                                t,
                            ),
                        );
                    },
                    Su = {
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
                    ku = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        u = e.fadeInAnimation,
                        r = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, ku);
                    const c = a ? null : n,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const _ = c && !d && c > s,
                        m = B()(
                            Su.base,
                            Su[`base__${t}`],
                            u && Su.base__animated,
                            r && Su.base__hidden,
                            !c && Su.base__pattern,
                            a && Su.base__empty,
                            i,
                        );
                    return o().createElement(
                        'div',
                        Tu({ className: m }, l),
                        o().createElement('div', { className: Su.bg }),
                        o().createElement('div', { className: Su.pattern }),
                        o().createElement(
                            'div',
                            { className: B()(Su.value, d && Su.value__text) },
                            _ ? s : c,
                            _ && o().createElement('span', { className: Su.plus }, '+'),
                        ),
                    );
                };
                Nu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const xu = ({ children: e, component: t, props: n = {} }) =>
                        t ? o().createElement(t, n, e) : e || null,
                    Lu = 'Tab_base_dd',
                    Mu = 'Tab_base__first_4a',
                    Ru = 'Tab_base__last_96',
                    Pu = 'Tab_base__medium_ec',
                    Iu = 'Tab_base__active_5d',
                    Ou = 'Tab_divider_ca',
                    Hu = 'Tab_divider__show_62',
                    Wu = 'Tab_state_6c',
                    $u = 'Tab_stateHighlight_1e',
                    zu = 'Tab_stateBorder_64',
                    Yu = 'Tab_stateBorder__positionLeft_e7',
                    Xu = 'Tab_stateBorder__positionRight_db',
                    Vu = 'Tab_counter_e1',
                    ju = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Uu() {
                    return (
                        (Uu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Uu.apply(this, arguments)
                    );
                }
                const Gu = (0, r.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            u = void 0 !== a && a,
                            r = e.isLast,
                            s = void 0 !== r && r,
                            i = e.isMedium,
                            l = void 0 !== i && i,
                            c = e.isNotified,
                            d = void 0 !== c && c,
                            _ = e.children,
                            m = void 0 === _ ? 'Tab' : _,
                            p = e.wrapper,
                            E = void 0 === p ? {} : p,
                            b = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, ju);
                        return o().createElement(
                            xu,
                            E,
                            o().createElement(
                                'div',
                                Uu({ className: B()(Lu, { [Iu]: n }, { [Mu]: u }, { [Ru]: s }, { [Pu]: l }) }, h),
                                o().createElement(
                                    'span',
                                    { className: Wu },
                                    o().createElement('span', { className: $u }),
                                    o().createElement('span', { className: B()(zu, Yu) }),
                                    o().createElement('span', { className: B()(zu, Xu) }),
                                ),
                                m,
                                !s && !n && o().createElement('span', { className: B()(Ou, Hu) }),
                                (Boolean(b) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: Vu },
                                        o().createElement(Nu, { value: b, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Zu = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' };
                var qu = n(7739),
                    Ku = n(5262);
                function Ju(e, t, n) {
                    const a = (0, r.useContext)(qu.YN);
                    let u = Object.entries(a).filter(([e, t]) => !0 === t && e in Ku.u);
                    return (
                        n && (u = u.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = u.map((e) =>
                                B()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, w.e)(t))(n, e[0])]),
                            );
                            return (e[n] = B()(t[n], ...a)), e;
                        }, {})
                    );
                }
                const Qu = ['name', 'newItemsCount', 'onTabChanged', 'isTooltipEnabled'];
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const tr = (0, r.memo)((e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.onTabChanged,
                        u = e.isTooltipEnabled,
                        s = void 0 === u || u,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, Qu);
                    const l = (0, r.useMemo)(() => R.strings.tank_setup.tabs.$dyn(t), [t]),
                        c = (0, r.useCallback)(() => {
                            he.$.playClick(), a({ name: t });
                        }, [a, t]),
                        d = (0, r.useMemo)(() => ({ name: t }), [t]),
                        _ = Ju(['tab'], Zu);
                    return o().createElement(
                        se.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: d,
                            isEnabled: s,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Gu,
                                er({}, i, { isNotified: Boolean(n), onClick: c }),
                                o().createElement('div', { className: _.tab }, l),
                            ),
                        ),
                    );
                });
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                const ar = ({ tabs: e, selectedTabName: t, onTabChanged: n, isTooltipEnabled: a = !0 }) => {
                    const u = M('ModernizedSetupTabHintZone', x);
                    return (
                        (0, r.useEffect)(() => {
                            u && u.runTrigger(!0);
                        }, [u]),
                        o().createElement(
                            wu,
                            { key: t, activeKey: t },
                            o().createElement(
                                'div',
                                { 'tabs-role': Fu.LIST },
                                e.map(({ value: e }) =>
                                    o().createElement(
                                        tr,
                                        nr(
                                            {
                                                key: e.name,
                                                onTabChanged: n,
                                                'tabs-role': Fu.TAB,
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
                var ur = n(8772),
                    rr = n(5851);
                const or = (e) => {
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
                var sr = n(8774);
                const ir = {
                        base: 'BoosterActions_base_95',
                        base__hidden: 'BoosterActions_base__hidden_3e',
                        base__shown: 'BoosterActions_base__shown_6a',
                    },
                    lr = (0, r.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const u = B()(ir.base, ir['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(sr.a, {
                                parentId: `${e}-add_one`,
                                actionType: oa,
                                onClick: n,
                                show: t.includes(oa),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(sr.a, {
                                parentId: `${e}-cancel`,
                                actionType: Qn,
                                onClick: n,
                                show: t.includes(Qn),
                            }),
                            o().createElement(sr.a, {
                                parentId: `${e}-undo`,
                                actionType: Jn,
                                onClick: n,
                                show: t.includes(Jn),
                            }),
                        );
                    }),
                    cr = 'Booster_base_e5',
                    dr = 'Booster_unit_5e',
                    _r = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: s,
                            itemsInStorage: i,
                            price: l,
                            isCurrent: c,
                            onSlotAction: _,
                            intCD: m,
                            isDisabled: p,
                            overlayType: E,
                            isLocked: b,
                            isMounted: h,
                            isMountedInOtherSetup: g,
                            description: v,
                            isBuyMoreVisible: f,
                            isBuyMoreDisabled: A,
                            highlightType: C,
                            compare: D,
                            lockReason: B,
                        }) => {
                            const y = (0, F.GS)(),
                                w = y === F.cJ.Large || y === F.cJ.Huge,
                                S = t > -1,
                                k = `${m}-booster`,
                                T = (0, r.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            S &&
                                            (!D && f && e.push(oa), (!Boolean(i) && !h) || g ? e.push(Jn) : e.push(Qn)),
                                        e
                                    );
                                }, [p, S, D, f, i, h, g]),
                                N = (0, r.useCallback)(
                                    (e) => (_({ actionType: e, intCD: m, installedSlotId: t }), e === oa ? 1e3 : 120),
                                    [_, m, t],
                                ),
                                x = or(N),
                                L = (0, r.useCallback)(() => {
                                    T.includes(Jn) ? x(Jn) : T.includes(Qn) ? x(Qn) : x(Kn);
                                }, [T, x]),
                                M = (0, r.useMemo)(() => {
                                    const e = { intCD: m, slotType: d.G$, fieldType: 0 };
                                    return [
                                        e,
                                        Object.assign({}, e, {
                                            installedSlotId: t,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: a,
                                            isMountedMoreThanOne: u,
                                            isMounted: h,
                                            isDisabled: p,
                                        }),
                                    ];
                                }, [m, t, n, a, h, u, p]),
                                P = M[0],
                                I = M[1],
                                O = (0, r.useMemo)(
                                    () =>
                                        w
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(s)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(s),
                                    [w, s],
                                ),
                                H = (0, r.useMemo)(
                                    () =>
                                        o().createElement(sa._, {
                                            parentId: k,
                                            classMix: cr,
                                            mediaSize: y,
                                            classColorMix: dr,
                                            linesShown: w ? 4 : 3,
                                            text: v,
                                        }),
                                    [y, k, w, v],
                                );
                            return o().createElement(wa, {
                                parentId: k,
                                mediaSize: y,
                                name: e,
                                tooltipArgs: P,
                                contextMenuArgs: I,
                                imageSource: O,
                                isClickable: !0,
                                isCurrent: c,
                                isActive: S,
                                isDisabled: p,
                                isLocked: b,
                                options: o().createElement(La, {
                                    isMounted: h || g,
                                    itemsInStorage: i,
                                    show: !T.length,
                                    price: l,
                                }),
                                actions: o().createElement(lr, {
                                    parentId: k,
                                    availableActions: T,
                                    onActionClick: x,
                                    isBuyMoreDisabled: A,
                                }),
                                details: H,
                                overlayType: E,
                                highlightType: C,
                                onSlotClick: L,
                                lockReason: B,
                            });
                        },
                    ),
                    mr = {
                        base: 'Cards_base_0a',
                        base__large: 'Cards_base__large_47',
                        base__huge: 'Cards_base__huge_d2',
                        base__disabled: 'Cards_base__disabled_a9',
                        card: 'Cards_card_ab',
                        card__large: 'Cards_card__large_b2',
                        card__huge: 'Cards_card__huge_78',
                    };
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
                const Er = ({ currentCardRef: e, selectedSlot: t, isDisabled: n = !1, modelPath: a, compare: u }) => {
                        const r = (0, F.GS)(),
                            s = (0, l.m)(a, !1).onSlotAction,
                            i = (0, l.m)(`${a}.slots`).map(({ value: n }) => {
                                if (!n) return null;
                                const a = t === n.installedSlotId;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: a ? e : null, className: B()(mr.card, r && mr[`card__${r}`]) },
                                    o().createElement(_r, pr({}, n, { isCurrent: a, onSlotAction: s, compare: u })),
                                );
                            }),
                            c = B()(mr.base, r && mr[`base__${r}`], n && mr.base__disabled);
                        return o().createElement('div', { className: c }, i);
                    },
                    br = {
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
                    hr = ({ type: e, tabs: t, content: n }) => {
                        const a = (0, l.m)('model', !1).vehicleInfo,
                            u = (0, F.GS)(),
                            r = B()(br.base, br[`base__${u}`]);
                        return o().createElement(
                            'div',
                            { className: r },
                            o().createElement(
                                'div',
                                { className: br.title },
                                (0, w.WU)(R.strings.tank_setup.compare.section.title.$dyn(e), { name: a.vehicleName }),
                            ),
                            o().createElement(
                                'div',
                                { className: br.description },
                                R.strings.tank_setup.compare.section.description.$dyn(e),
                            ),
                            o().createElement(
                                'div',
                                { className: br.controlsContainer },
                                o().createElement('div', { className: br.tabs }, t),
                                o().createElement('div', { className: br.filters }, n),
                            ),
                        );
                    };
                function gr() {
                    return (
                        (gr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        gr.apply(this, arguments)
                    );
                }
                const vr = 'model.tankSetup.battleBoostersSetup',
                    fr = ({ compare: e = !1 }) => {
                        const t = (0, F.GS)(),
                            n = (0, l.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, l.m)(vr, !1),
                            u = a.onDealConfirmed,
                            r = a.onDealCancelled,
                            s = a.onAutoRenewalChanged,
                            i = a.onTabChanged,
                            c = (0, l.m)(`${vr}.tabs`),
                            _ = o().createElement(ar, gr({}, c, { onTabChanged: i, isTooltipEnabled: !1 }));
                        return o().createElement(F.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(hr, { type: d.G$, tabs: _ })
                                : o().createElement(eu, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabs: _,
                                  }),
                            content: o().createElement(
                                Zn,
                                { selectedSlotId: n, scrollAreaKey: c.selectedTabName },
                                o().createElement(Er, { selectedSlot: n, modelPath: vr, compare: e }),
                            ),
                            footer:
                                !e &&
                                o().createElement(ur.w, {
                                    withConfirmation: !0,
                                    renewalType: rr.m.Boosters,
                                    parentModelPath: vr,
                                    onDealConfirmed: u,
                                    onDealCancelled: r,
                                    onAutoRenewalChanged: s,
                                    mediaSize: t,
                                }),
                        });
                    },
                    Ar = 'tooltip';
                let Cr, Fr, Dr;
                !(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(Cr || (Cr = {})),
                    (function (e) {
                        (e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen');
                    })(Fr || (Fr = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(Dr || (Dr = {}));
                const Br = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    yr = {
                        base: 'ConsumableActions_base_fc',
                        base__hidden: 'ConsumableActions_base__hidden_c1',
                        base__shown: 'ConsumableActions_base__shown_17',
                    },
                    wr = (0, r.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const u = B()(yr.base, yr['base__' + (t.length ? 'shown' : 'hidden')]);
                        return o().createElement(
                            'div',
                            { className: u },
                            o().createElement(sr.a, {
                                parentId: `${e}-add_one`,
                                actionType: oa,
                                onClick: n,
                                show: t.includes(oa),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(sr.a, {
                                parentId: `${e}-cancel`,
                                actionType: Qn,
                                onClick: n,
                                show: t.includes(Qn),
                            }),
                            o().createElement(sr.a, {
                                parentId: `${e}-undo`,
                                actionType: Jn,
                                onClick: n,
                                show: t.includes(Jn),
                            }),
                        );
                    }),
                    Sr = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: s,
                            itemsInStorage: i,
                            price: l,
                            isCurrent: c,
                            onSlotAction: _,
                            intCD: m,
                            isDisabled: p,
                            overlayType: E,
                            isLocked: b,
                            isMounted: h,
                            isMountedInOtherSetup: g,
                            isBuiltIn: v,
                            description: f,
                            isBuyMoreDisabled: A,
                            isBootCamp: C = !1,
                            compare: D,
                            lockReason: y,
                        }) => {
                            const w = (0, F.GS)(),
                                S = w === F.cJ.Large || w === F.cJ.Huge,
                                k = t > -1,
                                T = `${m}-consumable`,
                                N = (0, r.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            k &&
                                            (!c && e.push(ea),
                                            v ||
                                                C ||
                                                (!D && e.push(oa), (!Boolean(i) && !h) || g ? e.push(Jn) : e.push(Qn))),
                                        e
                                    );
                                }, [p, C, k, c, v, D, i, h, g]),
                                x = (0, r.useCallback)(
                                    (e) => (_({ actionType: e, intCD: m, installedSlotId: t }), e === oa ? 1e3 : 300),
                                    [_, m, t],
                                ),
                                L = or(x),
                                M = (0, r.useCallback)(() => {
                                    N.includes(ea) ? L(ea) : N.includes(Jn) ? L(Jn) : N.includes(Qn) ? L(Qn) : L(Kn);
                                }, [N, L]),
                                P = (0, r.useMemo)(() => {
                                    const e = { intCD: m, slotType: d.mH, fieldType: 0 };
                                    return [
                                        e,
                                        C
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: u,
                                                  isMounted: h,
                                                  isDisabled: p,
                                              }),
                                    ];
                                }, [m, t, n, a, u, h, p, C]),
                                I = P[0],
                                O = P[1],
                                H = (0, r.useMemo)(
                                    () =>
                                        S
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(s)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(s),
                                    [S, s],
                                ),
                                $ = (0, r.useMemo)(() => {
                                    const e = B()(Br.base, w && Br[`base__${w}`]);
                                    return o().createElement(sa._, {
                                        parentId: T,
                                        mediaSize: w,
                                        classMix: e,
                                        classColorMix: Br.unit,
                                        linesShown: S ? 4 : 3,
                                        text: f,
                                    });
                                }, [w, S, f, T]),
                                z = K(Cr.Bootcamp, Fr.BC_CONSUMABLE_SETUP_SUB_VIEW),
                                Y = z[0],
                                X = z[1],
                                V = (0, r.useCallback)(() => {
                                    Y(Dr.TooltipOpened);
                                }, [Y]),
                                j = (0, r.useCallback)(() => {
                                    X(Dr.TooltipOpened, 2, W.Info, { [Ar]: m.toString() });
                                }, [X, m]);
                            return o().createElement(wa, {
                                parentId: T,
                                mediaSize: w,
                                name: e,
                                tooltipArgs: I,
                                contextMenuArgs: O,
                                imageSource: H,
                                isCurrent: c,
                                isActive: k,
                                isDisabled: p,
                                isLocked: b,
                                isClickable: !v,
                                options: o().createElement(La, {
                                    price: l,
                                    isMounted: h || g,
                                    itemsInStorage: i,
                                    show: !N.length,
                                }),
                                actions: o().createElement(wr, {
                                    parentId: T,
                                    availableActions: N,
                                    onActionClick: L,
                                    isBuyMoreDisabled: A,
                                }),
                                details: $,
                                overlayType: E,
                                onSlotClick: M,
                                onTooltipShow: C ? V : void 0,
                                onTooltipHide: C ? j : void 0,
                                lockReason: y,
                            });
                        },
                    ),
                    kr = {
                        base: 'Cards_base_57',
                        base__large: 'Cards_base__large_db',
                        base__huge: 'Cards_base__huge_ac',
                        base__disabled: 'Cards_base__disabled_4f',
                        card: 'Cards_card_4e',
                        card__large: 'Cards_card__large_87',
                        card__huge: 'Cards_card__huge_dd',
                    },
                    Tr = [
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
                    Nr = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...Tr,
                    ],
                    xr = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...Tr,
                    ];
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Mr = ({
                        currentCardRef: e,
                        isDisabled: t,
                        modelPath: n,
                        selectedSlot: a,
                        compare: u,
                        isBootCamp: r = !1,
                    }) => {
                        const s = (0, F.GS)(),
                            i = (0, l.m)(n, !1).onSlotAction,
                            c = ((e) =>
                                ((e, t, n) => {
                                    const a = n !== F.cJ.Tiny || t ? Nr : xr;
                                    return e
                                        .reduce((e, t) => {
                                            const n = a.indexOf(t.value.itemName);
                                            return (e[-1 === n ? Math.max(e.length, xr.length) : n] = t), e;
                                        }, [])
                                        .filter((e) => Boolean(e));
                                })(e, u, s))((0, l.m)(`${n}.slots`)).map(({ value: t }) => {
                                if (!t) return null;
                                const n = t.installedSlotId > -1 && a === t.installedSlotId;
                                return o().createElement(
                                    'div',
                                    { key: t.intCD, ref: n ? e : null, className: B()(kr.card, s && kr[`card__${s}`]) },
                                    o().createElement(
                                        Sr,
                                        Lr({}, t, { isCurrent: n, onSlotAction: i, isBootCamp: r, compare: u }),
                                    ),
                                );
                            }),
                            d = B()(kr.base, s && kr[`base__${s}`], t && kr.base__disabled);
                        return o().createElement('div', { id: 'consumables', className: d }, c);
                    },
                    Rr = 'model.tankSetup.consumablesSetup',
                    Pr = ({ compare: e = !1 }) => {
                        const t = (0, F.GS)(),
                            n = (0, l.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, l.m)('model').isBootcamp,
                            u = (0, l.m)(Rr),
                            r = u.onDealConfirmed,
                            s = u.onDealCancelled,
                            i = u.onAutoRenewalChanged;
                        return o().createElement(F.Ar, {
                            header: e
                                ? o().createElement(hr, { type: d.mH })
                                : o().createElement(eu, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                Zn,
                                { selectedSlotId: n },
                                o().createElement(Mr, { selectedSlot: n, modelPath: Rr, compare: e, isBootCamp: a }),
                            ),
                            footer:
                                !e &&
                                o().createElement(ur.w, {
                                    withConfirmation: !0,
                                    renewalType: rr.m.Consumables,
                                    mediaSize: t,
                                    parentModelPath: Rr,
                                    onDealConfirmed: r,
                                    onDealCancelled: s,
                                    onAutoRenewalChanged: i,
                                }),
                            compare: e,
                        });
                    };
                var Ir = n(2106),
                    Or = n(8586),
                    Hr = n(3978);
                const Wr = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    $r = 'FilterItem_base_2e',
                    zr = ({ name: e }) => {
                        const t = (0, r.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            }),
                            [e],
                        );
                        return o().createElement('div', { className: $r, style: t });
                    };
                R.strings.common.percentValue();
                let Yr;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Yr || (Yr = {}));
                const Xr = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let Vr;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(Vr || (Vr = {}));
                const jr = 'ClearBtn_base_a6',
                    Ur = 'ClearBtn_stroke_09',
                    Gr = 'ClearBtn_background_61',
                    Zr = 'ClearBtn_base__hover_3b',
                    qr = 'ClearBtn_base__down_60',
                    Kr = 'ClearBtn_cross_1d',
                    Jr = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const u = (0, r.useState)(!1),
                            s = u[0],
                            i = u[1],
                            l = (0, r.useState)(!1),
                            c = l[0],
                            d = l[1],
                            _ = (0, r.useCallback)(() => {
                                (0, he.G)(a), d(!1), i(!0);
                            }, [a]),
                            m = (0, r.useCallback)(() => {
                                (0, he.G)(n), d(!0);
                            }, [n]),
                            p = (0, r.useCallback)(() => {
                                d(!1), i(!1);
                            }, []),
                            E = B()(jr, c && Zr, s && qr);
                        return o().createElement(
                            T.i,
                            Xr,
                            o().createElement(
                                'div',
                                { id: e, className: E, onMouseDown: _, onMouseOver: m, onMouseLeave: p, onClick: t },
                                o().createElement('div', { className: Gr }),
                                o().createElement('div', { className: Ur }),
                                o().createElement('div', { className: Kr }),
                            ),
                        );
                    },
                    Qr = 'MatchDetails_base_a8',
                    eo = 'MatchDetails_count_d2',
                    to = 'MatchDetails_clear_21',
                    no = 'MatchDetails_clear__shown_49',
                    ao = 'MatchDetails_separator_bc',
                    uo = 'MatchDetails_arrow_b0',
                    ro = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const u = (0, r.useCallback)(() => t(), [t]),
                            s = B()(to, e && no);
                        return o().createElement(
                            'div',
                            { className: Qr },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: eo }, n),
                                    o().createElement(
                                        'span',
                                        { className: ao },
                                        '/',
                                        o().createElement('span', { className: uo }),
                                    ),
                                ),
                            o().createElement('span', { className: eo }, a),
                            o().createElement(
                                'span',
                                { className: s },
                                o().createElement(Jr, { parentId: 'match-details-clear-btn', onClick: u }),
                            ),
                        );
                    },
                    oo = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: u = !1,
                        onFilterChanged: s,
                        onFilterReset: i,
                        selectedSlotSpecialization: l,
                    }) => {
                        const c = (0, F.GS)(),
                            d = M('FilterTutorialHintZone', x);
                        (0, r.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const _ = (0, it.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(zr, { name: e }),
                            callback: (e, t) => {
                                s({ name: e }), (0, Hr.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: Ir.L.ghost,
                                mixClass: B()(Wr.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: R.strings.tank_setup.categories.$dyn(e),
                                body: R.strings.tank_setup.categories.body.$dyn(e),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: B()(Wr.base, c && Wr[`base__${c}`], u && Wr.base__detailed) },
                            u &&
                                o().createElement(ro, {
                                    isFilterActive: a,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Wr.buttons },
                                o().createElement(Or.h, { ctaConfigs: _ }),
                            ),
                        );
                    };
                var so = n(2372);
                const io = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    lo = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    co = (e) => (e ? lo.disabled.text() : lo.notDisabled.text()),
                    _o = ({ disabled: e }) => {
                        const t = (0, F.GS)(),
                            n = (0, l.m)('model.tankSetup.optDevicesSetup.specialCurrency', !0),
                            a = n.value,
                            u = n.onGetMoreCurrency,
                            s = (0, r.useCallback)(() => u(), [u]),
                            i = (0, r.useMemo)(() => ({ tooltipId: d.$4 }), []);
                        return o().createElement(
                            'div',
                            { className: B()(io.base, t && io[`base__${t}`]) },
                            o().createElement(
                                Ot.t,
                                { args: i },
                                o().createElement(
                                    'div',
                                    { className: io.currency },
                                    o().createElement(so.A, { value: a }),
                                    o().createElement('div', { className: io.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                T.i,
                                { body: co(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        ne.u5,
                                        { onClick: s, mixClass: io.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    };
                function mo() {
                    return (
                        (mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        mo.apply(this, arguments)
                    );
                }
                const po = (e, t) => e && o().createElement(_o, { disabled: t }),
                    Eo = (e) =>
                        !e.isComparisonHeader &&
                        ((e) => {
                            const t = e.haveSuitableEquipments,
                                n = e.hasUnfitItems;
                            return e.isIntroduction ? po(!t, !n) : po(t, !t);
                        })(e),
                    bo = ({
                        tabs: e,
                        onTabChanged: t,
                        filter: n,
                        onFilterChanged: a,
                        onFilterReset: u,
                        propsForDisplayHeaderContent: s,
                        selectedSlotSpecialization: i,
                    }) => {
                        const l = s.isComparisonHeader,
                            c = e.tabs.length > 1 && o().createElement(ar, mo({}, e, { onTabChanged: t })),
                            _ = (0, r.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case d.S:
                                            return o().createElement(
                                                oo,
                                                mo({}, n, {
                                                    onFilterChanged: a,
                                                    onFilterReset: u,
                                                    selectedSlotSpecialization: i,
                                                }),
                                            );
                                        case d.pi:
                                            return Eo(s);
                                        default:
                                            return null;
                                    }
                                },
                                [n, a, u, s, i],
                            );
                        return l
                            ? o().createElement(hr, { type: d.zn, tabs: c, content: _(e.selectedTabName) })
                            : o().createElement(eu, {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  content: _(e.selectedTabName),
                                  tabs: c,
                              });
                    };
                var ho = n(4814);
                const go = 'Unit_base_15',
                    vo = 'Unit_base__special_37',
                    fo = 'Unit_glow_38',
                    Ao = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Co = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Fo = ({ value: e, valueType: t, valueKey: n, isSpecial: a }) => {
                        const u = 'mul' === t ? 100 * (e - 1) : e,
                            r = u > 0 ? '+' : '',
                            s = E.Z5.getRealFormat(u, E.Gr.WO_ZERO_DIGITS),
                            i = Ao.$dyn(n),
                            l = `${s}${i ? ` ${i}` : Co}`;
                        return o().createElement(
                            'div',
                            { className: B()(go, a && vo) },
                            o().createElement('span', null, o().createElement('span', { className: fo }), r + l),
                        );
                    },
                    Do = 'Bonus_base_aa',
                    Bo = 'Bonus_text_48',
                    yo = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    wo = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return yo;
                        const a = n.value,
                            u = a.value,
                            r = 'mul' === a.valueType ? 100 * (u - 1) : u;
                        return { calcValue: r, isPositive: r > 0, valueKey: a.valueKey };
                    };
                function So() {
                    return (
                        (So =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        So.apply(this, arguments)
                    );
                }
                const ko = ({ bonus: e, mediaSize: t, isSpecial: n, visibleLinesCount: a }) => {
                        const u = ((e, t = !1) =>
                                t || wo(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(e),
                            s = (0, r.useMemo)(() => {
                                let t = null;
                                return (
                                    e.values.forEach(({ value: a }) => {
                                        a &&
                                            a.valueKey === e.localeName &&
                                            (t = o().createElement(Fo, So({ isSpecial: n }, a)));
                                    }),
                                    t
                                );
                            }, [e, n]);
                        return (
                            u &&
                            o().createElement(
                                'span',
                                { className: Do },
                                s,
                                ' ',
                                a &&
                                    u &&
                                    o().createElement(
                                        'span',
                                        { className: Bo },
                                        o().createElement(fa.n, { linesCount: a, blocks: (0, fa.D)(u), mediaSize: t }),
                                    ),
                            )
                        );
                    },
                    To = 'Bonuses_base_af',
                    No = 'Bonuses_bonus_d1',
                    xo = 'Bonuses_text_37',
                    Lo = 'Bonuses_effect_f8',
                    Mo = 'Bonuses_icon_40',
                    Ro = (0, r.memo)(
                        ({ parentId: e, items: t, effect: n, mediaSize: a, maxLines: u, isSpecial: s }) => {
                            const i = (0, r.useMemo)(() => {
                                    if (!n) return [null, 0];
                                    const e = 1 === t.length ? 2 : 1;
                                    return [
                                        o().createElement(
                                            'div',
                                            { className: No },
                                            o().createElement(
                                                'span',
                                                { className: Lo },
                                                o().createElement('span', { className: Mo }),
                                                R.strings.tank_setup.effects.name(),
                                            ),
                                            ' ',
                                            o().createElement(
                                                'span',
                                                { className: xo },
                                                o().createElement(fa.n, {
                                                    mediaSize: a,
                                                    linesCount: e,
                                                    blocks: (0, fa.D)(n),
                                                }),
                                            ),
                                        ),
                                        e,
                                    ];
                                }, [a, n, t.length]),
                                l = i[0],
                                c = i[1];
                            return (
                                c && (u -= c),
                                o().createElement(
                                    'div',
                                    { id: `${e}-bonuses`, className: To },
                                    l,
                                    t.map(({ value: e }, n) => {
                                        let r;
                                        return u && e
                                            ? ((r = t.length > 2 ? 1 : 2 === t.length ? (u > 2 ? 2 : 1) : u),
                                              (u -= r),
                                              o().createElement(
                                                  'div',
                                                  { key: n, className: No },
                                                  o().createElement(ko, {
                                                      bonus: e,
                                                      mediaSize: a,
                                                      isSpecial: s,
                                                      visibleLinesCount: r,
                                                  }),
                                              ))
                                            : null;
                                    }),
                                )
                            );
                        },
                    ),
                    Po = 'DeviceActions_base_c0',
                    Io = 'DeviceActions_base__hidden_a6',
                    Oo = 'DeviceActions_base__shown_b0',
                    Ho = (0, r.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: u,
                            isModernized: r,
                            isFreeToDemount: s,
                            destroyTooltipBodyPath: i,
                            level: l,
                        }) => {
                            const c = (u || a) && t.includes(ra),
                                d = t.length && (t[0] !== ra || c),
                                _ = B()(Po, d ? Oo : Io);
                            return o().createElement(
                                'div',
                                { className: _ },
                                o().createElement(sr.a, {
                                    parentId: `${e}-cancel`,
                                    actionType: Qn,
                                    onClick: n,
                                    show: t.includes(Qn),
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-undo`,
                                    actionType: Jn,
                                    onClick: n,
                                    show: t.includes(Jn),
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-upgrade`,
                                    actionType: ra,
                                    onClick: n,
                                    show: c,
                                    isModernized: r,
                                    level: l,
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-demount`,
                                    actionType: ta,
                                    onClick: n,
                                    show: t.includes(ta),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-demount_from_setup`,
                                    actionType: na,
                                    onClick: n,
                                    show: t.includes(na),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: s,
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-demount_from_setups`,
                                    actionType: aa,
                                    onClick: n,
                                    show: t.includes(aa),
                                }),
                                o().createElement(sr.a, {
                                    parentId: `${e}-destroy`,
                                    actionType: ua,
                                    buttonType: Ir.L.secondary,
                                    onClick: n,
                                    show: (r || !s) && t.includes(ua),
                                    isModernized: r,
                                    tooltipBodyPath: i,
                                }),
                            );
                        },
                    );
                function Wo() {
                    return (
                        (Wo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wo.apply(this, arguments)
                    );
                }
                const $o = (0, r.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: u,
                            imageName: s,
                            itemsInStorage: i,
                            price: l,
                            specializations: c,
                            intCD: _,
                            isMounted: m,
                            isMountedInOtherSetup: p,
                            isDisabled: E,
                            isFreeToDemount: b,
                            overlayType: h,
                            isLocked: g,
                            bonuses: v,
                            effect: f,
                            isUpgradable: A,
                            isTrophy: C,
                            activeSpecsMask: D,
                            onSlotAction: B,
                            isCurrent: y,
                            compare: w,
                            isModernized: S,
                            level: k,
                            lockReason: T,
                            destroyTooltipBodyPath: N,
                            isBootCamp: x = !1,
                        }) => {
                            const L = (0, F.GS)(),
                                M = L === F.cJ.Large || L === F.cJ.Huge,
                                P = t > -1,
                                I = `${_}-device`,
                                O = K(Cr.Bootcamp, Fr.BC_DEVICE_SETUP_SUB_VIEW),
                                H = O[0],
                                $ = O[1],
                                z = (0, r.useCallback)(() => {
                                    H(Dr.TooltipOpened);
                                }, [H]),
                                Y = (0, r.useCallback)(() => {
                                    $(Dr.TooltipOpened, 2, W.Info, { [Ar]: _.toString() });
                                }, [$, _]),
                                X = (0, r.useMemo)(() => {
                                    const e = [];
                                    let t = !0;
                                    return (
                                        P &&
                                            !E &&
                                            (y || e.push(ea),
                                            x ||
                                                (m && !w
                                                    ? ((t = !y),
                                                      e.push(...((e) => (e ? [na, aa] : [ta]))(u)),
                                                      e.push(ua))
                                                    : e.push(
                                                          ((e, t, n) => ((!Boolean(e) && !t) || n ? Jn : Qn))(i, m, p),
                                                      ))),
                                        !A || w || E || x || e.push(ra),
                                        { availableActions: e, isDeviceClickable: t }
                                    );
                                }, [P, E, A, w, x, y, m, u, i, p]),
                                V = X.availableActions,
                                j = X.isDeviceClickable,
                                U = (0, r.useCallback)(
                                    (e) => {
                                        B({ actionType: e, intCD: _, installedSlotId: t });
                                    },
                                    [B, _, t],
                                ),
                                G = (0, r.useCallback)(() => {
                                    V.length && V[0] !== ra ? U(V[0]) : U(Kn);
                                }, [V, U]),
                                Z = (0, r.useMemo)(() => {
                                    const e = { intCD: _, slotType: d.zn, fieldType: 0 };
                                    return [
                                        e,
                                        x
                                            ? void 0
                                            : Object.assign({}, e, {
                                                  installedSlotId: t,
                                                  itemInstalledSetupIdx: n,
                                                  itemInstalledSetupSlotIdx: a,
                                                  isMountedMoreThanOne: u,
                                                  isMounted: m,
                                                  isDisabled: E,
                                              }),
                                    ];
                                }, [_, t, n, a, u, m, E, x]),
                                q = Z[0],
                                J = Z[1],
                                Q = (0, r.useMemo)(
                                    () =>
                                        M
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(s)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(s),
                                    [M, s],
                                ),
                                ee =
                                    c && c.specializations.length
                                        ? o().createElement(ho.G, Wo({}, c, { activeSpecsMask: D, mediaSize: L }))
                                        : null,
                                te = w
                                    ? null
                                    : o().createElement(La, {
                                          isMounted: m || p,
                                          itemsInStorage: i,
                                          price: l,
                                          possibleZeroCount: C || S,
                                          show: !V.length || Boolean(i || m || p),
                                      });
                            return o().createElement(wa, {
                                parentId: I,
                                mediaSize: L,
                                name: e,
                                tooltipArgs: q,
                                contextMenuArgs: J,
                                imageSource: Q,
                                isCurrent: y,
                                isActive: P,
                                isDisabled: E,
                                isLocked: g,
                                isClickable: j,
                                isModernized: S,
                                level: k,
                                specializations: ee,
                                details: o().createElement(
                                    Ro,
                                    Wo(
                                        {
                                            parentId: I,
                                            isSpecial: Boolean(D),
                                            effect: f,
                                            mediaSize: L,
                                            maxLines: M ? 4 : 3,
                                        },
                                        v,
                                    ),
                                ),
                                options: te,
                                actions: o().createElement(Ho, {
                                    parentId: I,
                                    availableActions: V,
                                    onActionClick: U,
                                    isInstalled: P,
                                    isModernized: S,
                                    level: k,
                                    isFreeToDemount: b,
                                    destroyTooltipBodyPath: N,
                                }),
                                overlayType: h,
                                onSlotClick: G,
                                shouldHandleMouseOver: !0,
                                onTooltipShow: x ? z : void 0,
                                onTooltipHide: x ? Y : void 0,
                                lockReason: T,
                            });
                        },
                    ),
                    zo = {
                        base: 'Cards_base_f1',
                        base__large: 'Cards_base__large_a2',
                        base__huge: 'Cards_base__huge_32',
                        base__disabled: 'Cards_base__disabled_20',
                        card: 'Cards_card_5e',
                        card__large: 'Cards_card__large_0e',
                        card__huge: 'Cards_card__huge_84',
                    };
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
                const Xo = (0, r.memo)(
                    ({
                        currentCardRef: e,
                        selectedSlot: t,
                        modelPath: n,
                        isDisabled: a,
                        isBootCamp: u = !1,
                        compare: r = !1,
                    }) => {
                        const s = (0, F.GS)(),
                            i = (0, l.m)(n, !1).onSlotAction,
                            c = (0, l.m)(`${n}.slots`).map(({ value: n }) => {
                                if (!n || !n.isVisible) return null;
                                const a = n.installedSlotId,
                                    l = a > -1 && t === a,
                                    c = B()(zo.card, s && zo[`card__${s}`]);
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: l ? e : null, className: c },
                                    o().createElement(
                                        $o,
                                        Yo({}, n, { isCurrent: l, onSlotAction: i, compare: r, isBootCamp: u }),
                                    ),
                                );
                            }),
                            d = B()(zo.base, s && zo[`base__${s}`], a && zo.base__disabled);
                        return o().createElement('div', { className: d, id: 'optDevices' }, c);
                    },
                );
                var Vo = n(8934);
                const jo = {
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
                    Uo = ({ introType: e }) => {
                        const t = B()(jo.icon, jo[`icon__currency-${e}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: jo.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? o().createElement(k, { binding: n, text: a, classMix: jo.message }) : null;
                    },
                    Go = ({ slotsType: e, haveSuitableEquipments: t = !0 }) => {
                        const n = (0, F.GS)(),
                            a = n === F.cJ.Large || n === F.cJ.Huge,
                            u = (0, r.useState)(!0),
                            s = u[0],
                            i = u[1],
                            c = (0, l.m)(qo, !1).onIntroPassed,
                            d = (0, r.useCallback)(() => {
                                i(!1);
                            }, []),
                            _ = (0, r.useCallback)(() => {
                                c(), i(!0);
                            }, [c]),
                            m = B()(jo.base, n && jo[`base__${n}`]),
                            p = (0, r.useMemo)(
                                () => ({
                                    enter: jo.base__enter,
                                    enterActive: jo.base__enterActive,
                                    exit: jo.base__exit,
                                    exitActive: jo.base__exitActive,
                                }),
                                [],
                            ),
                            E = B()(jo.image, a ? jo[`image__${e}Large`] : jo[`image__${e}`]),
                            b = t
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(e)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(e);
                        return o().createElement(
                            Vo.Z,
                            { in: s, classNames: p, timeout: 300, onExited: _ },
                            o().createElement(
                                'div',
                                { className: m, id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: jo.introduction },
                                    o().createElement('div', { className: E }),
                                    o().createElement(
                                        'div',
                                        { className: jo.description },
                                        o().createElement('div', { className: jo.title }, b),
                                        o().createElement(Uo, { introType: e }),
                                    ),
                                    t &&
                                        o().createElement(
                                            ne.u5,
                                            { type: ne.L$.secondary, size: ne.qE.medium, onClick: d },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    },
                    Zo = 'OptDevicesSetup_intro_ae',
                    qo = 'model.tankSetup.optDevicesSetup',
                    Ko = ({ compare: e }) => {
                        var t, n, a, u;
                        const s = (0, F.GS)(),
                            i = (0, l.m)(e ? 'model' : 'model.ammunitionPanel'),
                            c = i.selectedSlot,
                            d = i.sectionGroups,
                            _ = (0, l.m)('model').isBootcamp,
                            m = (0, l.m)(qo),
                            p = m.slots,
                            E = m.withIntroduction,
                            b = m.introductionType,
                            h = (0, l.m)(qo, !1),
                            g = h.onDealConfirmed,
                            v = h.onDealCancelled,
                            f = h.onTabChanged,
                            A = h.onAutoRenewalChanged,
                            C = h.onFilterChanged,
                            D = h.onFilterReset,
                            B = h.hasUnfitItems,
                            y = (0, l.m)(`${qo}.filter`),
                            w = (0, l.m)(`${qo}.tabs`),
                            S =
                                d &&
                                (null == (t = d[0]) ||
                                null == (n = t.value.sections[0]) ||
                                null == (a = n.value.slots[c])
                                    ? void 0
                                    : a.value),
                            k = w.selectedTabName,
                            T = (0, l.m)(`${qo}.slots`).length,
                            N = (0, r.useMemo)(
                                () =>
                                    !e &&
                                    E &&
                                    o().createElement(
                                        'div',
                                        { className: Zo },
                                        o().createElement(Xo, { selectedSlot: c, modelPath: qo, isDisabled: E }),
                                        o().createElement(Go, { slotsType: b, haveSuitableEquipments: p.length > 0 }),
                                    ),
                                [e, E, b, p.length, c],
                            ),
                            x = {
                                tabs: w,
                                filter: y,
                                onFilterChanged: C,
                                onFilterReset: D,
                                onTabChanged: f,
                                propsForDisplayHeaderContent: {
                                    isComparisonHeader: e,
                                    isIntroduction: E,
                                    haveSuitableEquipments: p.length > 0,
                                    hasUnfitItems: B,
                                },
                                selectedSlotSpecialization:
                                    null == S || null == (u = S.specializations.specializations[0])
                                        ? void 0
                                        : u.value.name,
                            };
                        return o().createElement(F.Ar, {
                            compare: e,
                            header: o().createElement(bo, x),
                            content:
                                N ||
                                o().createElement(
                                    Zn,
                                    { selectedSlotId: c, scrollAreaKey: k, updateKey: `${y.selectedFilterCount}:${T}` },
                                    o().createElement(Xo, {
                                        compare: e,
                                        selectedSlot: c,
                                        modelPath: qo,
                                        isDisabled: E,
                                        isBootCamp: _,
                                    }),
                                ),
                            footer:
                                !e &&
                                o().createElement(ur.w, {
                                    withConfirmation: !0,
                                    parentModelPath: qo,
                                    mediaSize: s,
                                    onDealConfirmed: g,
                                    onDealCancelled: v,
                                    onAutoRenewalChanged: A,
                                }),
                        });
                    };
                var Jo = n(2558);
                const Qo = 200;
                let es;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(es || (es = {}));
                const ts = {
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
                    ns = o().memo(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: u,
                            actionType: s,
                            uniqueKey: i,
                            onTransitionEnd: l,
                        }) => {
                            const c = (0, r.useMemo)(() => n === F.cJ.Tiny, [n]),
                                d = (0, r.useMemo)(() => a === t, [a, t]),
                                _ = (0, r.useMemo)(() => s === ea || 'drag_drop' === s, [s]),
                                m = (0, r.useMemo)(
                                    () => (_ ? (c ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, c, _],
                                ),
                                p = (0, r.useMemo)(() => ((u - a > 1 && c) || !_ ? 'Fade' : ''), [_, a, u, c]),
                                E = (0, r.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: ts.base__enter,
                                                enterDone: ts[`base__enter${m}${p}`],
                                                exit: ts[`base__exit${m}${p}`],
                                                exitActive: ts.base__exitActive,
                                            },
                                        }),
                                    [m, p],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), l && l();
                                        }, Qo);
                                    },
                                    [l],
                                ),
                                h = (0, r.useMemo)(() => ({ animationDuration: '200ms' }), []),
                                g = B()(ts.base, ts[`base__${n}`]);
                            return o().createElement(
                                Jo.Z,
                                { component: null, childFactory: E },
                                o().createElement(
                                    Vo.Z,
                                    { key: i, timeout: Qo, onEntered: b },
                                    o().createElement('div', { className: g, style: h }, e),
                                ),
                            );
                        },
                    ),
                    as = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    us = ({ paramName: e, value: t, metricValue: n, media: a, isSuperficial: u }) => {
                        const s = B()(as.base, a && as[`base__${a}`]),
                            i = B()(as.separator, a && as[`separator__${a}`]),
                            l = o().createElement(
                                'div',
                                { className: as.value },
                                t || o().createElement('span', null, '—'),
                            ),
                            c = (0, r.useMemo)(() => {
                                if ('avgPiercingPower' === e) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [e]);
                        return o().createElement(
                            'div',
                            { className: s },
                            u
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.shortened.$dyn(e),
                                      ' ',
                                      l,
                                      o().createElement('div', { className: as.units }, c),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      R.strings.menu.tank_params.$dyn(e),
                                      o().createElement('div', { className: as.units }, n),
                                      o().createElement('div', { className: i }),
                                      l,
                                  ),
                        );
                    };
                var rs = n(7405),
                    os = n(329);
                const ss = {
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
                function is() {
                    return (
                        (is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        is.apply(this, arguments)
                    );
                }
                const ls = (0, r.memo)(
                        ({
                            buyCount: e,
                            inStorageCount: t,
                            inVehicleCount: n,
                            isSuperficial: a,
                            price: u,
                            totalPrice: s,
                            mediaSize: i,
                        }) => {
                            const l = (0, r.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inStorage(),
                                    [a],
                                ),
                                c = (0, r.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[
                                            a ? 'shortSpecification' : 'specification'
                                        ].inVehicle(),
                                    [a],
                                ),
                                d = (0, r.useMemo)(
                                    () =>
                                        R.strings.tank_setup.shells[a ? 'shortSpecification' : 'specification'].price(),
                                    [a],
                                ),
                                _ = n >= 0,
                                m = u.defPrice.length > 0,
                                p = (0, r.useMemo)(
                                    () =>
                                        m
                                            ? {
                                                  tooltip: 'priceDiscount',
                                                  price: u.price[0].value.value,
                                                  defPrice: u.defPrice[0].value.value,
                                                  currencyType: u.price[0].value.name,
                                              }
                                            : void 0,
                                    [m, u.defPrice, u.price],
                                ),
                                E = B()(ss.base, i && ss[`base__${i}`]),
                                b = B()(ss.separator, i && ss[`separator__${i}`]),
                                h = B()(ss.row, i && ss[`row__${i}`]),
                                g = B()(ss.total, i && ss[`total__${i}`]),
                                v = B()(ss.price, ss.price__final),
                                f = B()(ss.lowResolutionValue, i && ss[`lowResolutionValue__${i}`]),
                                A = B()(ss.hiResolutionValue, i && ss[`hiResolutionValue__${i}`]),
                                C = B()(ss.colored, i && ss[`colored__${i}`]),
                                F = o().createElement('span', { className: ss.indent }),
                                D = o().createElement('span', { className: ss.divider }, '/');
                            return o().createElement(
                                'div',
                                { className: E },
                                o().createElement(
                                    'div',
                                    { className: h },
                                    o().createElement(
                                        'div',
                                        { className: ss.rowItem },
                                        o().createElement('div', { className: g }, l),
                                        o().createElement('div', { className: f }, F, t),
                                    ),
                                    _ &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            D,
                                            o().createElement(
                                                'div',
                                                { className: ss.rowItem },
                                                o().createElement(
                                                    'div',
                                                    { className: g },
                                                    o().createElement('div', { className: C }, c),
                                                ),
                                                o().createElement('div', { className: f }, F, n),
                                            ),
                                        ),
                                    o().createElement('div', { className: b }),
                                    o().createElement(
                                        'div',
                                        { className: A },
                                        t,
                                        _ &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                D,
                                                o().createElement('div', { className: C }, n),
                                            ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: h },
                                    o().createElement('div', { className: g }, d),
                                    o().createElement('div', { className: b }),
                                    o().createElement(
                                        'div',
                                        { className: ss.value },
                                        o().createElement(
                                            'div',
                                            { className: ss.overall },
                                            '(',
                                            o().createElement('span', null, e),
                                            ' ',
                                            '×',
                                            o().createElement(
                                                Ot.t,
                                                { args: p, isEnabled: m },
                                                o().createElement(
                                                    'span',
                                                    { className: ss.price },
                                                    o().createElement(ka.t, is({ showZero: !0 }, u)),
                                                ),
                                            ),
                                            ')',
                                            o().createElement(
                                                'span',
                                                { className: v },
                                                e
                                                    ? o().createElement(
                                                          ka.t,
                                                          is({ showZero: !0, ignoreDiscount: !0 }, s),
                                                      )
                                                    : o().createElement(rs.F, {
                                                          size: os.et.small,
                                                          type: os.V2.credits,
                                                          value: 0,
                                                      }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    cs = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                function ds() {
                    return (
                        (ds =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ds.apply(this, arguments)
                    );
                }
                const _s = ({
                    buyCount: e,
                    itemsInStorage: t,
                    itemsInVehicle: n,
                    price: a,
                    totalPrice: u,
                    specifications: s,
                    media: i,
                }) => {
                    const l = i === F.cJ.Tiny,
                        c = s.map(({ value: e }, t) =>
                            e && ('avgPiercingPower' === e.paramName || (!l && e.value))
                                ? o().createElement(
                                      r.Fragment,
                                      { key: t },
                                      o().createElement(us, ds({}, e, { media: i, isSuperficial: l })),
                                  )
                                : null,
                        ),
                        d = B()(cs.base, i && cs[`base__${i}`]);
                    return o().createElement(
                        'div',
                        { className: d },
                        o().createElement('div', { className: cs.overall }, c),
                        o().createElement(
                            'div',
                            { className: cs.total },
                            o().createElement(ls, {
                                buyCount: e,
                                inStorageCount: t,
                                inVehicleCount: n,
                                price: a,
                                totalPrice: u,
                                isSuperficial: l,
                                mediaSize: i,
                            }),
                        ),
                    );
                };
                var ms = n(2094);
                const ps = {
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
                    Es = ({
                        type: e,
                        intCD: t,
                        imageName: n,
                        count: a,
                        buyCount: u,
                        price: s,
                        totalPrice: i,
                        itemsInStorage: l,
                        itemsInVehicle: c,
                        specifications: _,
                        availableCount: m,
                        clipCount: p,
                        onShellUpdate: E,
                        maxCount: b,
                        installedSlotId: h,
                        itemInstalledSetupIdx: g,
                        itemInstalledSetupSlotIdx: v,
                        isMountedMoreThanOne: f,
                        mediaSize: A,
                    }) => {
                        const C = (0, r.useCallback)(
                                (e) => {
                                    E && E({ intCD: t, newCount: e });
                                },
                                [E, t],
                            ),
                            D = (0, r.useMemo)(() => {
                                const e = { slotType: d.g9, fieldType: 0, intCD: t };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: h,
                                        itemInstalledSetupIdx: g,
                                        itemInstalledSetupSlotIdx: v,
                                        isMountedMoreThanOne: f,
                                    }),
                                ];
                            }, [t, h, g, v, f]),
                            y = D[0],
                            w = D[1],
                            S = (0, r.useMemo)(() => {
                                const e = ((e) => {
                                    const t = R.images.gui.maps.icons.shell;
                                    switch (e) {
                                        case F.cJ.Huge:
                                        case F.cJ.Large:
                                            return t.large;
                                        default:
                                            return t.big;
                                    }
                                })(A);
                                return { backgroundImage: `url(${e ? e.$dyn(n) : ''})` };
                            }, [n, A]),
                            k = (0, r.useMemo)(() => {
                                const t = R.strings.item_types.shell.kinds.$dyn(e);
                                return (
                                    t && o().createElement('div', { className: ps.name }, systemLocale.toUpperCase(t))
                                );
                            }, [e]),
                            T = B()(ps.count, !a && ps.count__zero),
                            N = B()(ps.base, A && ps[`base__${A}`]);
                        return o().createElement(
                            'div',
                            { className: N },
                            o().createElement(
                                'div',
                                { className: ps.shell },
                                o().createElement(
                                    _a,
                                    { args: w },
                                    o().createElement(
                                        Ot.t,
                                        { args: y },
                                        o().createElement(
                                            'div',
                                            { className: ps.icon, style: S },
                                            o().createElement('div', { className: T }, a),
                                        ),
                                    ),
                                ),
                                k,
                            ),
                            o().createElement(
                                'div',
                                { className: ps.ammunition },
                                o().createElement(ms.i, {
                                    parentId: `${t}-slider`,
                                    currentValue: a,
                                    maximum: b,
                                    sliderMaximum: m,
                                    onUpdates: C,
                                    stepCount: p,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: ps.specifications },
                                o().createElement(_s, {
                                    specifications: _,
                                    itemsInStorage: l,
                                    itemsInVehicle: c,
                                    price: s,
                                    buyCount: u,
                                    media: A,
                                    totalPrice: i,
                                }),
                            ),
                        );
                    },
                    bs = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    hs = o().memo(
                        ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: u = 'play' }) => {
                            const s = (0, r.useCallback)(() => {
                                    u && (0, he.G)(u), t(e);
                                }, [e, t, u]),
                                i = (0, r.useCallback)(() => {
                                    a && (0, he.G)(a);
                                }, [a]),
                                l = B()(bs.base, bs[`base__${n}`]);
                            return o().createElement('div', {
                                id: `swap-${e}`,
                                onClick: s,
                                onMouseEnter: i,
                                className: l,
                            });
                        },
                    ),
                    gs = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        shell: 'Sections_shell_a2',
                        base__large: 'Sections_base__large_d0',
                        base__huge: 'Sections_base__huge_b0',
                        swap: 'Sections_swap_be',
                        swap__noEvents: 'Sections_swap__noEvents_2d',
                    };
                function vs() {
                    return (
                        (vs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        vs.apply(this, arguments)
                    );
                }
                const fs = () => {
                    const e = (0, l.m)(Cs),
                        t = e.installedCount,
                        n = e.maxCount,
                        a = e.clipCount,
                        u = e.onShellUpdate,
                        s = e.onSlotAction,
                        i = (0, l.m)(`${Cs}.slots`),
                        c = (0, l.m)('model.lastSlotAction'),
                        d = c.leftID,
                        _ = c.rightID,
                        m = c.actionType,
                        p = (0, r.useState)(!1),
                        E = p[0],
                        b = p[1],
                        h = (0, F.GS)(),
                        g = n - t,
                        v = (0, r.useCallback)(
                            (e) => {
                                E || s({ actionType: ea, leftID: e, rightID: e + 1 }), b(!0);
                            },
                            [s, E],
                        ),
                        f = (0, r.useCallback)(() => {
                            b(!1);
                        }, [b]),
                        A = B()(gs.base, gs[`base__${h}`]);
                    return o().createElement(
                        'div',
                        { className: A },
                        i.map(
                            ({ value: e }, t) =>
                                Boolean(e) &&
                                o().createElement(
                                    r.Fragment,
                                    { key: t },
                                    o().createElement(
                                        ns,
                                        {
                                            index: t,
                                            uniqueKey: e.intCD,
                                            leftID: d,
                                            rightID: _,
                                            actionType: m,
                                            mediaSize: h,
                                            onTransitionEnd: f,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: gs.shell },
                                            o().createElement(
                                                Es,
                                                vs({}, e, {
                                                    clipCount: a,
                                                    maxCount: n,
                                                    availableCount: g + e.count,
                                                    mediaSize: h,
                                                    onShellUpdate: u,
                                                }),
                                            ),
                                        ),
                                    ),
                                    t !== i.length - 1 &&
                                        o().createElement(
                                            'div',
                                            { className: gs.swap },
                                            o().createElement(hs, { id: t, mediaSize: h, onSwap: v }),
                                        ),
                                ),
                        ),
                    );
                };
                var As = n(5096);
                const Cs = 'model.tankSetup.shellsSetup',
                    Fs = () => {
                        const e = (0, F.GS)(),
                            t = (0, l.m)(Cs),
                            n = t.onDealConfirmed,
                            a = t.onDealCancelled,
                            u = t.onAutoRenewalChanged;
                        return o().createElement(F.Ar, {
                            header: o().createElement(eu, {
                                title: R.strings.tank_setup.section.shells(),
                                content: o().createElement(As.k, { isShortened: !0, trackChanges: !0, modelPath: Cs }),
                            }),
                            content: o().createElement(fs, null),
                            footer: o().createElement(ur.w, {
                                withConfirmation: !0,
                                renewalType: rr.m.Shells,
                                parentModelPath: Cs,
                                mediaSize: e,
                                onDealConfirmed: n,
                                onDealCancelled: a,
                                onAutoRenewalChanged: u,
                            }),
                        });
                    },
                    Ds = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    };
                function Bs(e, t, n, a, u, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(a, u);
                }
                function ys(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (a, u) {
                            var r = e.apply(t, n);
                            function o(e) {
                                Bs(r, a, u, o, s, 'next', e);
                            }
                            function s(e) {
                                Bs(r, a, u, o, s, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const ws = ({ isHidden: e = !1 }) => {
                        const t = (0, r.useState)(!1),
                            n = t[0],
                            a = t[1],
                            u = (0, r.useRef)(null),
                            s = (0, l.m)('model', !1).onResized,
                            i = (0, l.m)('model.vehicleInfo', !0),
                            d = (0, F.GS)();
                        (0, r.useEffect)(() => {
                            const e = (0, c.v)(() => a(!0));
                            return () => e();
                        }, []);
                        const _ = (0, r.useCallback)(
                            ys(function* () {
                                yield (0, E.Eu)(), yield Pn();
                                const e = u.current;
                                e &&
                                    s({
                                        x: ge.O.view.pxToRem(e.getBoundingClientRect().x),
                                        width: ge.O.view.pxToRem(e.offsetWidth),
                                    });
                            }),
                            [s],
                        );
                        (0, r.useEffect)(() => {
                            if (!n) return (0, c.v)(_);
                        }, [_, n]),
                            (0, r.useEffect)(
                                () => (
                                    engine.on('clientResized', _),
                                    () => {
                                        engine.off('clientResized', _);
                                    }
                                ),
                                [_, s],
                            );
                        const m = B()(Ds.base, d && Ds[`base__${d}`], e && Ds.base__hidden);
                        return o().createElement('div', { className: m, ref: u }, o().createElement(bt, i));
                    },
                    Ss = {
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
                    ks = [d.zn, d.g9, d.mH, d.G$, d.YN],
                    Ts = (e, t) => (t === e ? '' : ks.indexOf(t) > ks.indexOf(e) ? 'right' : 'left'),
                    Ns = ({ children: e, selectedSetup: t }) => {
                        const n = o().createRef(),
                            a = (0, r.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            u = (0, r.useMemo)(() => {
                                const e = Ts(a.current.selectedSetup, t);
                                return { enter: Ss[`base__${e}Enter`] };
                            }, [t]),
                            s = (0, r.useCallback)(
                                (e) => {
                                    const u = Ts(a.current.selectedSetup, t);
                                    (e.className = B()(Ss.base, Ss.base__exit)),
                                        e.classList.add(Ss[`base__${u}Exit`]),
                                        (a.current.animatedElements[t] = n);
                                    Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(Ss.base__previous);
                                    }),
                                        n.current && n.current.classList.add(Ss.base__previous);
                                },
                                [n, t],
                            ),
                            i = (0, r.useCallback)(
                                (e) => {
                                    const n = Ts(a.current.previousSelectedSetup, t);
                                    (e.className = Ss.base), e.classList.add(Ss[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    const n = Ts(a.current.previousSelectedSetup, t);
                                    e.classList.add(Ss[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            c = (0, r.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            o().createElement(
                                Jo.Z,
                                null,
                                o().createElement(
                                    Vo.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: u,
                                        onExit: s,
                                        onEnter: i,
                                        onEntering: l,
                                    },
                                    o().createElement('div', { className: Ss.base, ref: n }, c),
                                ),
                            )
                        );
                    },
                    xs = ({ compare: e = !1 }) => {
                        const t = (0, l.m)('model.tankSetup').selectedSetup;
                        return o().createElement(
                            r.Fragment,
                            null,
                            o().createElement(
                                Ns,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case d.zn:
                                            return o().createElement(Ko, { compare: e });
                                        case d.g9:
                                            return o().createElement(Fs, null);
                                        case d.mH:
                                            return o().createElement(Pr, { compare: e });
                                        case d.G$:
                                            return o().createElement(fr, { compare: e });
                                        case d.YN:
                                            return o().createElement(mu, null);
                                        default:
                                            return o().createElement(Ko, { compare: e });
                                    }
                                })(),
                            ),
                            !e && o().createElement(ws, { isHidden: t === d.YN }),
                        );
                    };
                var Ls = n(9152);
                const Ms = () => {
                    const e = (0, l.m)('model', !1),
                        t = e.onClose,
                        n = e.onViewRendered,
                        a = e.onAnimationEnd,
                        u = (0, l.m)('model').show;
                    (0, r.useEffect)(() => (0, c.v)(n), [n]);
                    const s = (0, r.useCallback)(() => a(), [a]),
                        i = (0, r.useCallback)(() => t(), [t]);
                    return o().createElement(Ls.S, {
                        onClose: i,
                        content: o().createElement(xs, { compare: !0 }),
                        show: u,
                        onAnimationDone: s,
                    });
                };
                engine.whenReady.then(() => {
                    i().render(o().createElement(Ms, null), document.getElementById('root'));
                });
            },
            8774: (e, t, n) => {
                n.d(t, { a: () => A });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3457),
                    o = n(2106),
                    s = n(6373),
                    i = n(6179),
                    l = n.n(i);
                const c = 'Action_base_bf',
                    d = 'Action_base__hidden_4b',
                    _ = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    E = 'Action_image_e9',
                    b = 'Action_button_74',
                    h = R.strings.tank_setup.tooltips.action,
                    g = ['cancel', 'undo'],
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
                    tooltipBodyPath: F,
                    buttonType: D = o.L.primary,
                    isModernized: B,
                    isFreeToDemount: y,
                    level: w,
                    onClick: S,
                }) => {
                    const k = (0, i.useRef)(null),
                        T = (0, i.useRef)(f.Hidden),
                        N = (0, i.useRef)(!1),
                        x = (0, i.useState)(!a),
                        L = x[0],
                        M = x[1],
                        P = (0, i.useState)(!1),
                        I = P[0],
                        O = P[1],
                        H = (0, i.useState)(),
                        W = H[0],
                        $ = H[1],
                        z = (0, i.useCallback)(() => {
                            const e = T.current;
                            e === f.FadeIn
                                ? ((T.current = f.Hidden), M(!0))
                                : e === f.FadeOut && (T.current = f.Visible);
                        }, []);
                    (0, i.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', z),
                                () => {
                                    e.removeEventListener('animationend', z);
                                }
                            );
                    }, [z]),
                        (0, i.useEffect)(() => {
                            a !== N.current &&
                                (a ? ((T.current = f.FadeOut), M(!1)) : (T.current = f.FadeIn), (N.current = a));
                        }, [a]),
                        (0, i.useEffect)(() => {
                            if (I) {
                                const e = setTimeout(() => O(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [I]),
                        (0, i.useEffect)(() => () => W && clearTimeout(W), [W]);
                    const Y = (0, i.useCallback)(() => {
                            I || (O(!0), T.current === f.Visible && $(setTimeout(() => S(t), 200)));
                        }, [t, S, I]),
                        X = B ? v(t, w) : t,
                        V = (0, i.useMemo)(() => {
                            if (A) return { body: C, isEnabled: Boolean(C) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? v(e, t) : e))(t, w, y, B);
                            return {
                                header: h.title.$dyn(e),
                                body: g.includes(e) ? void 0 : h.description.$dyn(F || e),
                            };
                        }, [t, A, C, y, B, w, F]),
                        j = (0, i.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(X)})`,
                            }),
                            [X, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: u()(c, a ? _ : d, L && m) },
                        l().createElement(
                            s.i,
                            V,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    r.u5,
                                    { onClick: Y, type: D, mixClass: b, disabled: A },
                                    l().createElement('div', { className: E, style: j }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, n) => {
                n.d(t, { h: () => g });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(3457),
                    i = n(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    d = 'CtaButtons_substrate_2d',
                    _ = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
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
                const b = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: r,
                    withToggle: l = !1,
                    toggle: b,
                    buttonProps: h,
                }) => {
                    const g = (0, a.useCallback)(() => {
                            r(t, b);
                        }, [t, r, b]),
                        v = (0, a.useMemo)(() => {
                            if (l) {
                                const t = o()(m, b && p);
                                return u().createElement(
                                    'div',
                                    { className: c },
                                    u().createElement('div', { className: d }),
                                    b && u().createElement('div', { className: _ }),
                                    u().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, b]);
                    return u().createElement(i.i, n, u().createElement(s.u5, E({}, h, { onClick: g }), v));
                };
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const g = ({ ctaConfigs: e }) =>
                    u().createElement(
                        'div',
                        { className: l },
                        e.map((e) => u().createElement(b, h({ key: e.ctaType }, e))),
                    );
            },
            7208: (e, t, n) => {
                n.d(t, { f: () => p });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(2558),
                    i = n(8934),
                    l = n(4179);
                const c = 'Animation_base_ab',
                    d = 'Animation_base__withAnimation_41',
                    _ = 'Animation_base__enter_1e',
                    m = 'Animation_base__exit_88',
                    p = ({ children: e, when: t, canAccept: n }) => {
                        const r = o()(c, d),
                            p = (0, a.useCallback)((e, t) => {
                                (0, l.Eu)().then(() => {
                                    (e.className = ''), e.classList.add(c), e.classList.add(t);
                                });
                            }, []),
                            E = (0, a.useCallback)(
                                (e) => {
                                    p(e, _);
                                },
                                [p],
                            ),
                            b = (0, a.useCallback)(
                                (e) => {
                                    p(e, m);
                                },
                                [p],
                            );
                        return t
                            ? u().createElement(
                                  s.Z,
                                  null,
                                  u().createElement(
                                      i.Z,
                                      { in: n, timeout: 500, onEnter: E, onExit: b, key: `index-${n}` },
                                      u().createElement('div', { className: r }, e),
                                  ),
                              )
                            : u().createElement('div', { className: c }, e);
                    };
            },
            5851: (e, t, n) => {
                n.d(t, { Y: () => l, m: () => i });
                var a = n(6179),
                    u = n.n(a),
                    r = n(9056),
                    o = n(6373),
                    s = n(2262);
                let i;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(i || (i = {}));
                const l = (0, a.memo)(
                    ({
                        modelPath: e,
                        label: t = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: n,
                        renewType: l = i.General,
                    }) => {
                        const c = (0, r.m)(e),
                            d = c.isAutoRenewalEnabled,
                            _ = c.onAutoRenewalChanged,
                            m = (0, a.useCallback)(() => {
                                const e = { value: !d };
                                _ && _(e), n && n(e);
                            }, [n, _, d]),
                            p = (0, a.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal;
                                return {
                                    header: e.header.$dyn(l) || e.header.general(),
                                    body: l === i.General ? '' : e.body.$dyn(l),
                                };
                            }, [l]);
                        return u().createElement(
                            o.i,
                            p,
                            u().createElement(s.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: t,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            8982: (e, t, n) => {
                n.d(t, { Z: () => _ });
                var a = n(6179),
                    u = n.n(a),
                    r = n(3457),
                    o = n(6373),
                    s = n(7383);
                const i = 'ConfirmButton_base_75',
                    l = u().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: o }) => {
                        const s = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            l = (0, a.useCallback)(() => n && n(), [n]);
                        return u().createElement(
                            'div',
                            { ref: o, className: i, id: 'deal-panel-confirm' },
                            u().createElement(r.u5, { size: r.qE.medium, disabled: t, onClick: l }, s),
                        );
                    }),
                    c = 'Controls_base_d3',
                    d = 'Controls_button_f8',
                    _ = u().memo(
                        ({
                            applyBtnString: e = s.YR,
                            isDisabled: t,
                            canCancel: n,
                            onCancel: a,
                            onConfirm: i,
                            confirmButtonRef: _,
                        }) => {
                            const m = R.strings.tank_setup.dealPanel,
                                p = u().createElement(l, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: i,
                                    confirmButtonRef: _,
                                });
                            return u().createElement(
                                'div',
                                { id: 'deal-panel-controls', className: c },
                                t
                                    ? u().createElement(
                                          o.i,
                                          { body: m.tooltip.notEnough() },
                                          u().createElement('div', null, p),
                                      )
                                    : p,
                                u().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    u().createElement(
                                        r.u5,
                                        {
                                            size: r.qE.medium,
                                            type: r.L$.secondary,
                                            mixClass: d,
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
                n.d(t, { w: () => C });
                var a = n(6483),
                    u = n.n(a),
                    r = n(9056),
                    o = n(6179),
                    s = n.n(o),
                    i = n(1922),
                    l = n(3934),
                    c = n(7208),
                    d = n(5851),
                    _ = n(8982);
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
                const E = 'TotalPrice_base_d9',
                    b = 'TotalPrice_message_66',
                    h = 'TotalPrice_message__hidden_29',
                    g = 'TotalPrice_plus_f0',
                    v = ({ parentId: e, isHideMessage: t, priceLabel: n, price: a, defPrice: r, discount: o }) => {
                        const i = u()(b, t && h);
                        return s().createElement(
                            'div',
                            { id: `${e}-total-price`, className: E },
                            s().createElement('div', { className: i }, n),
                            s().createElement(p.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a,
                                defPrice: r,
                                discount: o,
                                priceSeparator: s().createElement('div', { className: g }),
                            }),
                        );
                    };
                let f;
                !(function (e) {
                    (e.Column = 'column'), (e.Row = 'row');
                })(f || (f = {}));
                const A = R.strings.tank_setup.dealPanel,
                    C = ({
                        renewalType: e,
                        withConfirmation: t = !1,
                        mediaSize: n = i.cJ.Medium,
                        parentModelPath: a,
                        panelType: p = f.Row,
                        priceLabel: E = A.toBePaid(),
                        autoRenewalLabel: b,
                        onAutoRenewalChanged: h,
                        onDealConfirmed: g,
                        onDealCancelled: C,
                    }) => {
                        const F = `${a}.dealPanel`,
                            D = (0, r.m)(F),
                            B = D.totalItemsInStorage,
                            y = D.isDisabled,
                            w = D.canAccept,
                            S = D.canCancel,
                            k = D.price,
                            T = D.defPrice,
                            N = D.discount,
                            x = (0, o.useRef)(null),
                            L = n === i.cJ.Tiny || n === i.cJ.Small,
                            M = (0, o.useCallback)(() => g && g(), [g]),
                            R = (0, o.useCallback)(() => C && C(), [C]),
                            P = p === f.Row,
                            I = Boolean(B),
                            O = Boolean(k.length),
                            H = L && I && O,
                            W = u()(m.base, n && m[`base__${n}`], e && m.base__renewal, !P && m.base__dialog),
                            $ = u()(m.storage, n && m[`storage__${n}`]),
                            z = u()(m.renewal, !P && m.renewal__dialog),
                            Y = u()(m.totalPrice, H && m.totalPrice__mixed);
                        return s().createElement(
                            'div',
                            { className: W },
                            e &&
                                s().createElement(
                                    'div',
                                    { className: z },
                                    s().createElement(d.Y, { modelPath: F, renewType: e, onValueChanged: h, label: b }),
                                ),
                            s().createElement(
                                c.f,
                                { when: P, canAccept: w },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    I &&
                                        s().createElement(
                                            'div',
                                            { className: $ },
                                            !L && s().createElement('div', { className: m.from }, A.fromStorage()),
                                            s().createElement(l.K, { valueFirst: !0, itemsInStorage: B }),
                                        ),
                                    H && s().createElement('div', { className: m.plus }),
                                    O &&
                                        s().createElement(
                                            'div',
                                            { className: Y },
                                            s().createElement(v, {
                                                parentId: 'deal-panel',
                                                priceLabel: E,
                                                price: k,
                                                defPrice: T,
                                                discount: N,
                                                isHideMessage: L && P,
                                            }),
                                        ),
                                    t &&
                                        w &&
                                        s().createElement(
                                            'div',
                                            { className: m.control },
                                            s().createElement(_.Z, {
                                                isDisabled: y,
                                                canCancel: S,
                                                onCancel: R,
                                                onConfirm: M,
                                                confirmButtonRef: x,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
            },
            8750: (e, t, n) => {
                n.d(t, { a: () => l, F: () => i });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r);
                const s = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let i;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(i || (i = {}));
                const l = ({ type: e = i.SMALL, imageSource: t }) => {
                    const n = o()(s.base, e !== i.SMALL && s[`base__${e}`]),
                        r = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return u().createElement('div', { className: n, style: r });
                };
            },
            1363: (e, t, n) => {
                n.d(t, { _: () => d });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(5282),
                    i = n(3649);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    d = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: r,
                        classColorMix: d,
                        linesShown: _,
                        withOffset: m = !0,
                    }) => {
                        const p = o()(l, d),
                            E = (0, i.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? u().createElement(
                                              'span',
                                              { key: t, className: p },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          u().createElement(
                                              'span',
                                              { key: t, className: c },
                                              u().createElement(s.n, {
                                                  mediaSize: n,
                                                  blocks: (0, s.D)(e),
                                                  linesCount: _,
                                              }),
                                          ),
                                ),
                            b = (0, a.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? u().createElement(
                                                      'span',
                                                      { key: t, className: p },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : u().createElement('span', { key: t }, `${e} `),
                                        ),
                                [p, t],
                            ),
                            h = o()(l, r);
                        return u().createElement(
                            'div',
                            { id: `${e}-details`, className: h },
                            m ? E : u().createElement(s.n, { mediaSize: n, blocks: b, linesCount: _ }),
                        );
                    };
            },
            8401: (e, t, n) => {
                n.d(t, { t: () => _ });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(7405),
                    i = n(329);
                const l = 'Price_base_61',
                    c = 'Price_price_1b',
                    d = 'Price_price__discount_29',
                    _ = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: r = !1,
                        bigSize: _ = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length),
                            E = o()(c, p && d);
                        return u().createElement(
                            'div',
                            { className: l },
                            e.map(
                                ({ value: e }, t) =>
                                    (r || Boolean(e.value)) &&
                                    u().createElement(
                                        a.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        u().createElement(
                                            'div',
                                            { className: E },
                                            u().createElement(s.F, {
                                                key: t,
                                                isDiscount: p,
                                                size: _ ? i.et.big : i.et.small,
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
                n.d(t, { S: () => m });
                var a = n(6483),
                    u = n.n(a),
                    r = n(8089),
                    o = n(8526),
                    s = n(5521),
                    i = n(7727),
                    l = n(6179),
                    c = n.n(l),
                    d = n(1922);
                const _ = {
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
                    m = ({ content: e, panel: t, button: n, show: a = !0, onAnimationDone: m, onClose: p }) => {
                        const E = (0, d.GS)(),
                            b = (0, l.useRef)(null),
                            h = (0, l.useRef)(!1);
                        (0, o.gd)(s.n.ESCAPE, p);
                        const g = !t,
                            v = (0, l.useCallback)(
                                (e) => {
                                    m && e.target === b.current && m();
                                },
                                [m],
                            );
                        (0, l.useEffect)(() => {
                            a && (h.current = !0), h.current && (0, i.G)('cons_select_view');
                        }, [a]),
                            (0, l.useEffect)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', v),
                                        () => {
                                            e.removeEventListener('animationend', v);
                                        }
                                    );
                            }, [v]);
                        const f = u()(_.base, a && _.base__shown, g ? _.base__compare : _.base__setup),
                            A = u()(_.content, g && _.content__compare, _['content__' + (a ? 'shown' : 'hidden')]),
                            C = !a && !h.current,
                            F = u()(_.close, E && _[`close__${E}`]);
                        return c().createElement(
                            'div',
                            { className: f },
                            g && c().createElement('div', { className: _.back }),
                            n,
                            a &&
                                c().createElement(
                                    'div',
                                    { id: 'setup-app-close-btn', className: F },
                                    c().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: p,
                                    }),
                                ),
                            !C && c().createElement('div', { id: 'setup-content', ref: b, className: A }, e),
                            t && c().createElement('div', { className: _.panel }, t),
                        );
                    };
            },
            5282: (e, t, n) => {
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    u = n.n(a),
                    r = n(1856),
                    o = n(4179),
                    s = n(6179),
                    i = n.n(s),
                    l = n(6605);
                const c = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var _ = n(3138);
                const m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => i().createElement('span', { key: t }, `${e} `)),
                    p = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, s.useState)(e),
                            m = a[0],
                            p = a[1],
                            E = (0, s.useState)({ width: 0, height: 0 }),
                            b = E[0],
                            h = E[1],
                            g = (0, s.useRef)(null),
                            v = (0, s.useRef)({ shortened: !1 }),
                            f = (0, s.useCallback)(() => {
                                (0, o.Eu)().then(() => {
                                    const e = (0, l.D)(g);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = g.current;
                                        if (a && isFinite(n)) {
                                            const e = _.O.view.remToPx(t * n);
                                            h({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, s.useEffect)(() => {
                            if (e.length) return v.current.shortened && (v.current.shortened = !1), (0, r.v)(f);
                        }, [e, n, f]),
                            (0, s.useEffect)(() => {
                                if (b.height && !v.current.shortened) {
                                    const t = (0, l.M)(g, b.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        n.push(i().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (v.current.shortened = !0);
                                    }
                                }
                            }, [e, b, n]);
                        const A = (0, s.useMemo)(() => (b.height ? { maxHeight: `${b.height}rem` } : {}), [b.height]);
                        return i().createElement('div', { ref: g, className: u()(c, b.height && d), style: A }, m);
                    };
            },
            6605: (e, t, n) => {
                n.d(t, { D: () => a, M: () => r });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    u = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                r = Array.from(n.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!u(e[n], t)) return -1;
                                    let a = 0,
                                        r = n - 1,
                                        o = !1;
                                    for (; r - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (r - a + 1));
                                        (o = u(e[n], t)), o ? (r = n) : (a = n);
                                    }
                                    return o || u(e[r], t) ? a : r;
                                })(r, a);
                                if (t > 0) {
                                    const n = r[t].getBoundingClientRect();
                                    return e.right - n.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, n) => {
                n.d(t, { i: () => y });
                var a = n(6483),
                    u = n.n(a),
                    r = n(8526),
                    o = n(5521),
                    s = n(7727),
                    i = n(6179),
                    l = n.n(i),
                    c = n(3978);
                const d = {
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
                    _ = {
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
                        picker: r,
                        allowSlide: o,
                        theme: s = _,
                    }) => {
                        const i = {
                            '--progress-base': s.bgImageBase,
                            '--progress-line-base': s.line.bgColorBase,
                            '--progress-line-disabled': s.line.bgColorDisabled,
                            '--progress-line-finished': s.line.bgColorFinished,
                            '--progress-pattern-base': s.pattern.bgImageBase,
                            '--progress-pattern-disabled': s.pattern.bgImageDisabled,
                            '--progress-pattern-finished': s.pattern.bgImageFinished,
                            '--progress-glow': `url('${s.glow}')`,
                            '--progress-glow-small': `url('${s.glowSmall}')`,
                            '--progress-delta-color': s.delta.color,
                            '--progress-delta-shadow': s.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: u()(d.progressBar, d.base, d[`base__${e}`]), style: i },
                            l().createElement(
                                'div',
                                { className: d.delta, style: { width: (n / a) * 100 + '%' } },
                                !o && l().createElement('div', { className: u()(d.glow, d.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: d.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: d.pattern }),
                                l().createElement('div', { className: d.gradient }),
                                r && l().createElement('div', { className: d.picker }, r),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    E = 'SlideControl_image_61',
                    b = 'SlideControl_image__hover_eb',
                    h = 'SlideControl_image__active_70',
                    g = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = u()(E, n && b, t && h);
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
                    F = 'Slider_editor__plus_b5',
                    D = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    B = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const r = u()(D.base, n && D.base__enabled, D[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: a });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: n,
                        sliderMaximum: a,
                        sliderMinimum: d = 0,
                        isDisabled: _ = !1,
                        onUpdates: p,
                        withStepEditors: E = !0,
                        stepCount: b = 1,
                    }) => {
                        const h = (0, i.useRef)(null),
                            D = (0, i.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, i.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: d }),
                            w = (0, i.useState)(t),
                            S = w[0],
                            k = w[1],
                            T = (0, i.useState)(!1),
                            N = T[0],
                            x = T[1],
                            L = (0, i.useState)(!1),
                            M = L[0],
                            R = L[1],
                            P = (0, i.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = y.current.currentValue;
                                    if (b > 1) {
                                        t *= b;
                                        const e = n % b;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [b],
                            ),
                            I = (0, i.useCallback)(
                                (e, t) => {
                                    if (!h.current) return 0;
                                    const n = h.current.getBoundingClientRect(),
                                        a = y.current.maximum,
                                        u = n.width / a,
                                        r = e - n.left,
                                        o = Math.floor(u > 0 ? r / u : r);
                                    if (o > a) return a;
                                    if (o <= 0) return 0;
                                    if (b > 1) {
                                        let e = o - (o % b);
                                        const n = o - e;
                                        return (
                                            n > 0 && ((t && o > y.current.currentValue) || n > 0.5 * b) && (e += b), e
                                        );
                                    }
                                    return o;
                                },
                                [b],
                            ),
                            O = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum;
                                    e < a ? (e = a) : e > n && (e = n),
                                        y.current.currentValue !== e && (k(e), (y.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            H = t < a,
                            W = t > 0,
                            $ = (0, i.useCallback)(() => {
                                if (H && D.current.over) {
                                    const e = P(!0);
                                    O(e);
                                }
                            }, [H, P, O]),
                            z = (0, i.useCallback)(() => {
                                if (W && D.current.over) {
                                    const e = P(!1);
                                    O(e);
                                }
                            }, [W, P, O]),
                            Y = (0, i.useCallback)(() => {
                                (D.current.down = !1), R(!1);
                            }, []),
                            X = (0, i.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && D.current.down) {
                                        D.current.move = !0;
                                        const t = I(e.clientX);
                                        O(t);
                                    } else Y();
                                },
                                [Y, I, O],
                            );
                        (0, r.gd)(o.n.ARROW_UP, $),
                            (0, r.gd)(o.n.ARROW_DOWN, z),
                            (0, i.useEffect)(() => {
                                y.current.maximum = n;
                            }, [n]),
                            (0, i.useEffect)(() => {
                                if (M)
                                    return (
                                        document.addEventListener('mouseup', Y),
                                        document.addEventListener('mousemove', X),
                                        () => {
                                            document.removeEventListener('mouseup', Y),
                                                document.removeEventListener('mousemove', X);
                                        }
                                    );
                            }, [M, X, Y]),
                            (0, i.useEffect)(() => {
                                (y.current.sliderMaximum = a), (y.current.sliderMinimum = d);
                            }, [a, d]),
                            (0, i.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]);
                        const V = (0, i.useCallback)(
                                (e) => {
                                    _ || 0 !== e.button || ((D.current.down = !0), R(!0));
                                },
                                [_],
                            ),
                            j = (0, i.useCallback)(
                                (e) => {
                                    if (_ || 0 !== e.button) return;
                                    const t = I(e.clientX, !D.current.move),
                                        n = y.current,
                                        a = n.currentValue,
                                        u = n.sliderMaximum,
                                        r = n.sliderMinimum;
                                    O(t), (0, c.u)(a, t, u, r), (D.current.move = !1);
                                },
                                [I, _, O],
                            ),
                            U = (0, i.useCallback)(() => {
                                (D.current.over = !0), x(!0), (0, s.G)('highlight');
                            }, []),
                            G = (0, i.useCallback)(() => {
                                (D.current.over = !1), x(!1);
                            }, []),
                            Z = (0, i.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        u = t.sliderMinimum,
                                        r = P(e.deltaY > 0);
                                    O(r), (0, c.u)(n, r, a, u);
                                },
                                [P, O],
                            );
                        return l().createElement(
                            'div',
                            { ref: h, onMouseEnter: U, onMouseLeave: G, onWheel: Z, className: v },
                            E &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: u()(A, C) },
                                        l().createElement(B, { parentId: e, type: 'minus', isEnabled: W, onClick: z }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: u()(A, F) },
                                        l().createElement(B, { parentId: e, type: 'plus', isEnabled: H, onClick: $ }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: j, onMouseDown: V, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: S,
                                    availableMaximum: a,
                                    picker: l().createElement(g, { parentId: e, isActive: M, isHovered: N }),
                                }),
                            ),
                        );
                    };
            },
            4814: (e, t, n) => {
                n.d(t, { G: () => E });
                var a = n(9480),
                    u = n(6179),
                    r = n.n(u),
                    o = n(1922),
                    s = n(6483),
                    i = n.n(s),
                    l = n(3457),
                    c = n(7078);
                const d = {
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
                    _ = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: n = !0,
                        isDynamic: a,
                        mediaSize: s,
                        isClickable: _,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const E = s !== o.cJ.None,
                            b = (0, u.useCallback)(() => {
                                _ && n && m && m(p);
                            }, [p, _, n, m]),
                            h = (0, u.useMemo)(() => {
                                let n = '';
                                E && (n = (s === o.cJ.Large || s === o.cJ.Huge ? o.cJ.Large : o.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    u = R.images.gui.maps.icons.specialization.$dyn(a);
                                return u && { backgroundImage: `url(${u})` };
                            }, [e, t, s, E]),
                            g = (0, u.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: _, tooltip: 'hangarSlotSpec' }),
                                [e, a, _],
                            );
                        if (!h) return null;
                        const v = i()(
                                `specialization-${e}`,
                                d.base,
                                E && d[`base__${s}`],
                                n && d.base__setup,
                                t && d.base__correct,
                            ),
                            f = i()(d.icon, E && d[`icon__${s}`]),
                            A = E ? '' : d.specializationWrapper,
                            C = r().createElement(
                                'div',
                                { key: e, className: v },
                                r().createElement('div', { className: d.glow }),
                                r().createElement('div', { className: f, style: h }),
                            );
                        return r().createElement(
                            c.t,
                            { args: g },
                            _ && n
                                ? r().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: d.specializationButton,
                                          onClick: b,
                                      },
                                      C,
                                  )
                                : r().createElement('div', { className: A }, C),
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
                const E = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: u = o.cJ.None,
                    activeSpecsMask: s,
                    onSpecializationClick: i,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: s },
                              a.UI(e, (e, a) =>
                                  r().createElement(
                                      _,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: u,
                                          onSpecializationClick: i,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            3934: (e, t, n) => {
                n.d(t, { K: () => _ });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r);
                const s = 'Storage_base_53',
                    i = 'Storage_base__reversed_8f',
                    l = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    d = 'Storage_count__zero_54',
                    _ = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = o()(s, e && i),
                            a = o()(c, 0 === t && d);
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement('div', { className: l }),
                            u().createElement('div', { className: a }, t),
                        );
                    };
            },
            5096: (e, t, n) => {
                n.d(t, { k: () => c });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(9056),
                    i = n(1922);
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
                        const r = (0, i.GS)(),
                            c = (0, s.m)(e, n),
                            d = c.installedCount,
                            _ = c.maxCount,
                            m = d === _,
                            p = R.strings.tank_setup.shells,
                            E = m ? p.ammunitionFull() : p.ammunitionIncomplete(),
                            b = o()(l.base, !m && l.base__incomplete),
                            h = o()(l.occupancy, !m && l.occupancy__incomplete, l[`occupancy__${r}`]);
                        return u().createElement(
                            'div',
                            { className: b },
                            !a && u().createElement('div', { className: l.tip }, E),
                            t ? `${d}/${_}` : u().createElement('div', { className: h }, `${d}/${_}`),
                        );
                    };
            },
            3978: (e, t, n) => {
                n.d(t, { d: () => u, u: () => r });
                var a = n(7727);
                const u = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    r = (e, t, n, u) => {
                        t > n ||
                            t < u ||
                            (t > e ? (0, a.G)('cons_ammo_roll_plus') : t < e && (0, a.G)('cons_ammo_roll_minus'));
                    };
            },
            7383: (e, t, n) => {
                n.d(t, {
                    $4: () => d,
                    G$: () => o,
                    S: () => _,
                    YN: () => s,
                    YR: () => i,
                    g9: () => u,
                    k4: () => l,
                    mH: () => r,
                    pi: () => m,
                    qZ: () => c,
                    zn: () => a,
                });
                const a = 'optDevices',
                    u = 'shells',
                    r = 'consumables',
                    o = 'battleBoosters',
                    s = 'battleAbilities',
                    i = 'apply',
                    l = 'applyVehicle',
                    c = 'applyType',
                    d = 'equipCoinInfo',
                    _ = 'simple',
                    m = 'modernized';
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
                var u = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, n, a] = deferred[i], r = !0, o = 0; o < t.length; o++)
                        (!1 & a || u >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), a < u && (u = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, n, a];
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
            var t = (t, n) => {
                    var a,
                        u,
                        [r, o, s] = n,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); i < r.length; i++)
                        (u = r[i]), __webpack_require__.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(5562));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
