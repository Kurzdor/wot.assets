(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => u.L, qE: () => u.q, u5: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    r = n(7727),
                    i = n(6179),
                    o = n.n(i),
                    l = n(6880),
                    u = n(2106);
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
                    const v = (0, i.useRef)(null),
                        A = (0, i.useState)(n),
                        C = A[0],
                        S = A[1],
                        D = (0, i.useState)(!1),
                        F = D[0],
                        B = D[1],
                        y = (0, i.useState)(!1),
                        w = y[0],
                        k = y[1],
                        T = (0, i.useCallback)(() => {
                            c || (v.current && (v.current.focus(), S(!0)));
                        }, [c]),
                        x = (0, i.useCallback)(
                            (e) => {
                                C && null !== v.current && !v.current.contains(e.target) && S(!1);
                            },
                            [C],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), p && p(e), k(!0));
                            },
                            [c, d, p],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                b && b(e);
                            },
                            [b],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                c || (g && g(e), B(!1));
                            },
                            [c, g],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), E && E(e), n && T(), B(!0));
                            },
                            [c, m, E, T, n],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                c || (h && h(e), B(!1));
                            },
                            [c, h],
                        ),
                        H = s()(
                            l.Z.base,
                            l.Z[`base__${a}`],
                            {
                                [l.Z.base__disabled]: c,
                                [l.Z[`base__${t}`]]: t,
                                [l.Z.base__focus]: C,
                                [l.Z.base__highlightActive]: F,
                                [l.Z.base__firstHover]: w,
                            },
                            _,
                        ),
                        $ = s()(l.Z.state, l.Z.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, i.useEffect)(() => {
                            S(n);
                        }, [n]),
                        o().createElement(
                            'div',
                            {
                                ref: v,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: I,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: P,
                                onClick: L,
                            },
                            a !== u.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: l.Z.back }),
                                    o().createElement('span', { className: l.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: $ },
                                o().createElement('span', { className: l.Z.stateDisabled }),
                                o().createElement('span', { className: l.Z.stateHighlightHover }),
                                o().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: u.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(s || (s = {}));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => u.Rh, XZ: () => m, yB: () => u.yB });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(7727),
                    l = n(1641),
                    u = n(8844),
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
                        r = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        E = void 0 !== b && b,
                        g = e.size,
                        h = void 0 === g ? u.yB.medium : g,
                        f = e.type,
                        v = void 0 === f ? u.Rh.primary : f,
                        A = e.soundHover,
                        C = void 0 === A ? 'highlight' : A,
                        S = e.soundClick,
                        D = void 0 === S ? 'play' : S,
                        F = e.onMouseEnter,
                        B = e.onMouseLeave,
                        y = e.onMouseUp,
                        w = e.onMouseDown,
                        k = e.onClick,
                        T = e.onChange,
                        x = e.onFocus,
                        L = e.onBlur,
                        N = e.text,
                        I = e.contentStyles,
                        R = e.children,
                        M = e.alignment,
                        O = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
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
                                const t = e.button === l.t.LEFT;
                                p || (t && $(!0), t && w && w(e), D && (0, o.G)(D));
                            },
                            [p, w, D],
                        ),
                        j = (0, a.useCallback)(
                            (e) => {
                                p || ($(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        Y = (0, a.useCallback)(
                            (e) => {
                                p || (F && F(e), C && (0, o.G)(C));
                            },
                            [p, F, C],
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
                                p || (z(!1), L && L(e));
                            },
                            [p, L],
                        ),
                        q = s().createElement(
                            'div',
                            { className: c.Z.label },
                            s().createElement(
                                'div',
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: I },
                                N || R,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: i()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${v}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: H,
                                    [c.Z.base__alert]: E,
                                    [c.Z.base__center]: M === u.N3.Center,
                                    [c.Z.base__bottom]: M === u.N3.Bottom,
                                }),
                                onClick: G,
                                onMouseEnter: Y,
                                onMouseLeave: U,
                                onMouseDown: X,
                                onMouseUp: j,
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
                let a, s, r;
                n.d(t, { N3: () => r, Rh: () => s, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(r || (r = {}));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    r = n(6179),
                    i = n.n(r),
                    o = n(329),
                    l = n(2372),
                    u = n(8460);
                const c = ({
                    isDiscount: e,
                    isInteractiveDiscount: t,
                    size: n,
                    type: a,
                    isEnough: r,
                    value: c,
                    discountValue: _,
                    showPlus: d,
                    stockBackgroundName: m = o.we.Red,
                }) => {
                    const p = s()(u.Z.value, u.Z[`value__${a}`], !r && u.Z.value__notEnough),
                        b = s()(u.Z.icon, u.Z[`icon__${a}-${n}`]),
                        E = s()(u.Z.stock, _ && u.Z.stock__indent, t && u.Z.stock__interactive),
                        g = d && c > 0 && '+',
                        h = s()(u.Z.base, u.Z[`base__${n}`]);
                    return i().createElement(
                        'span',
                        { className: h },
                        i().createElement(
                            'span',
                            { className: p },
                            g,
                            i().createElement(l.A, { value: c, format: a === o.V2.gold ? 'gold' : 'integral' }),
                        ),
                        i().createElement('span', { className: b }),
                        e &&
                            i().createElement(
                                'span',
                                { className: E },
                                i().createElement('span', {
                                    className: u.Z.stockBackground,
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                }),
                                Boolean(_) && _,
                            ),
                    );
                };
                c.defaultProps = { isEnough: !0 };
                const _ = i().memo(c);
            },
            329: (e, t, n) => {
                'use strict';
                let a, s, r;
                n.d(t, { V2: () => s, et: () => a, we: () => r }),
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
                    })(r || (r = {}));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => i });
                var a = n(6179),
                    s = n.n(a),
                    r = n(4179);
                const i = ({ format: e, value: t }) => {
                    const n = ((e, t = 'integral') => {
                        let n;
                        n = 'gold' === t ? r.B3.GOLD : r.B3.INTEGRAL;
                        return void 0 === e ? '' : r.Z5.getNumberFormat(e, n);
                    })(t, e);
                    return n ? s().createElement('span', null, n) : null;
                };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    s = n(6179),
                    r = n(1043),
                    i = n(5262);
                const o = a.O.client.getSize('rem'),
                    l = o.width,
                    u = o.height,
                    c = Object.assign({ width: l, height: u }, (0, i.T)(l, u, r.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6536),
                    i = n(3495),
                    o = n(1043),
                    l = n(5262),
                    u = n(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(i.Y),
                        n = (0, a.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, a.useCallback)((e, t) => {
                            const n = u.O.view.pxToRem(e),
                                a = u.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: a }, (0, l.T)(n, a, o.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    s = n(7382),
                    r = n(3495);
                const i = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, i);
                    const o = (0, a.useContext)(r.Y),
                        l = o.extraLarge,
                        u = o.large,
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
                        A = o.smallHeight,
                        C = o.extraSmallHeight,
                        S = { extraLarge: h, large: f, medium: v, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && u) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, s.H)(t, n, S);
                        if (n.largeWidth && p) return (0, s.H)(t, n, S);
                        if (n.mediumWidth && b) return (0, s.H)(t, n, S);
                        if (n.smallWidth && E) return (0, s.H)(t, n, S);
                        if (n.extraSmallWidth && g) return (0, s.H)(t, n, S);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && C) return t;
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
                        r = Math.min(a, s);
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
                function r(e, t) {
                    if (!s) throw new Error('No element matching method supported');
                    return s.call(e, t);
                }
                function i(e) {
                    e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
                }
                function o(e, t) {
                    return Array.prototype.filter.call(e.children, function (e) {
                        return r(e, t);
                    });
                }
                var l = 'ps',
                    u = {
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
                function A(e) {
                    if ('function' == typeof window.CustomEvent) return new CustomEvent(e);
                    var t = document.createEvent('CustomEvent');
                    return t.initCustomEvent(e, !1, !1, void 0), t;
                }
                var C = function (e, t, n, a, s, r) {
                    var i;
                    if ((void 0 === a && (a = !0), void 0 === s && (s = !1), void 0 === r && (r = !1), 'top' === t))
                        i = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
                    else {
                        if ('left' !== t) throw new Error('A proper axis should be provided');
                        i = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
                    }
                    !(function (e, t, n, a, s, r) {
                        var i = n[0],
                            o = n[1],
                            l = n[2],
                            u = n[3],
                            c = n[4],
                            _ = n[5];
                        void 0 === a && (a = !0);
                        void 0 === s && (s = !1);
                        void 0 === r && (r = !1);
                        var d = e.element;
                        if (!e.reach) return;
                        (e.reach[u] = null), d[l] < 1 && (e.reach[u] = 'start');
                        d[l] > e[i] - e[o] - 1 && (e.reach[u] = 'end');
                        t &&
                            !s &&
                            (d.dispatchEvent(A('ps-scroll-' + u)),
                            t < 0
                                ? d.dispatchEvent(A('ps-scroll-' + c))
                                : t > 0 && d.dispatchEvent(A('ps-scroll-' + _)),
                            a &&
                                (function (e, t) {
                                    m(e, t), p(e, t);
                                })(e, u));
                        e.reach[u] && (t || r) && d.dispatchEvent(A('ps-' + u + '-reach-' + e.reach[u]));
                    })(e, n, i, a, s, r);
                };
                var S = function (e, t, a, s) {
                    void 0 === t && (t = !1), void 0 === a && (a = 0), void 0 === s && (s = !1);
                    var r = e.element;
                    if (r) {
                        if (
                            ((e.containerWidth = Math.round(r.getBoundingClientRect().width)),
                            (e.containerHeight = Math.round(r.getBoundingClientRect().height)),
                            (e.contentWidth = Math.round(r.scrollWidth) - 2 * a),
                            (e.contentHeight = Math.round(r.scrollHeight)),
                            !s)
                        ) {
                            e.contentWidth = Math.round(r.scrollWidth) - 2 * a;
                            var l = e.contentWidth - e.containerWidth + a;
                            r.scrollLeft < a ? (r.scrollLeft = a) : r.scrollLeft > l && (r.scrollLeft = l);
                        }
                        var _ = Math.floor(r.scrollTop),
                            d = Math.floor(r.scrollLeft) - a,
                            m = parseFloat(getComputedStyle(document.documentElement).fontSize);
                        r.contains(e.scrollbarXRail) ||
                            (o(r, u.rail('x')).forEach(function (e) {
                                return i(e);
                            }),
                            r.appendChild(e.scrollbarXRail)),
                            r.contains(e.scrollbarYRail) ||
                                (o(r, u.rail('y')).forEach(function (e) {
                                    return i(e);
                                }),
                                r.appendChild(e.scrollbarYRail)),
                            !e.settings.suppressScrollX &&
                            e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth
                                ? ((e.scrollbarXActive = !0),
                                  (e.railXWidth = e.containerWidth - e.railXMarginWidth * m - 15 * m),
                                  (e.railXRatio = e.containerWidth / e.railXWidth),
                                  (e.scrollbarXWidth = D(e, h((e.railXWidth * e.containerWidth) / e.contentWidth))),
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
                                  (e.scrollbarYHeight = D(e, h((e.railYHeight * e.containerHeight) / e.contentHeight))),
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
                                    r = Math.floor(e.scrollTop);
                                t.isRtl
                                    ? (s.left =
                                          t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth)
                                    : (s.left = e.scrollLeft);
                                t.isScrollbarXUsingBottom
                                    ? (s.bottom = t.scrollbarXBottom - r)
                                    : (s.top = t.scrollbarXTop + r);
                                n(t.scrollbarXRail, s);
                                var i = { top: r, height: t.railYHeight };
                                t.isScrollbarYUsingRight
                                    ? t.isRtl
                                        ? (i.right =
                                              t.contentWidth -
                                              (t.negativeScrollAdjustment + e.scrollLeft) -
                                              t.scrollbarYRight -
                                              t.scrollbarYOuterWidth)
                                        : (i.right = t.scrollbarYRight - e.scrollLeft)
                                    : t.isRtl
                                      ? (i.left =
                                            t.negativeScrollAdjustment +
                                            e.scrollLeft +
                                            2 * t.containerWidth -
                                            t.contentWidth -
                                            t.scrollbarYLeft -
                                            t.scrollbarYOuterWidth)
                                      : (i.left = t.scrollbarYLeft + e.scrollLeft);
                                n(t.scrollbarYRail, i),
                                    n(t.scrollbarX, {
                                        left: t.scrollbarXLeft,
                                        width: t.scrollbarXWidth - t.railBorderXWidth * a,
                                    }),
                                    n(t.scrollbarY, {
                                        top: t.scrollbarYTop,
                                        height: t.scrollbarYHeight - t.railBorderYWidth * a,
                                    });
                            })(r, e, m),
                            e.scrollbarXButtonStart.classList.toggle('disabled', d < 1),
                            e.scrollbarXButtonEnd.classList.toggle('disabled', d + e.containerWidth >= e.contentWidth),
                            e.scrollbarYButtonStart.classList.toggle('disabled', r.scrollTop < 1),
                            e.scrollbarYButtonEnd.classList.toggle(
                                'disabled',
                                r.scrollTop + e.containerHeight >= e.contentHeight,
                            ),
                            e.scrollbarXActive
                                ? (r.classList.add(c.active('x')), C(e, 'left', d - e.lastScrollLeft, !0, t))
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
                            (e.lastScrollTop = _),
                            (e.lastScrollLeft = d),
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
                            r = e.x2,
                            i = e.y2;
                        return (
                            1 -
                            (a * ((t = n), Math.pow(t, 3)) +
                                s *
                                    (function (e) {
                                        return 3 * e * e * (1 - e);
                                    })(n) +
                                r *
                                    (function (e) {
                                        return 3 * e * Math.pow(1 - e, 2);
                                    })(n) +
                                i *
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
                            r = e.duration,
                            i = e.cubicBezierPoints,
                            o = e.easingPreset,
                            l = e.scrollAmount,
                            u = e.onCheckForBreakCallback,
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
                                    r = e.initialScrollPosition,
                                    i = e.isHorizontalDirection,
                                    o = e.scrollLengthProp,
                                    l = e.direction;
                                if (n) {
                                    var u = document.documentElement;
                                    t = i ? u.offsetWidth : u.offsetHeight;
                                } else t = (a[o] - a.getBoundingClientRect()[s]) | 0;
                                return ['left', 'top'].includes(l) ? r : t - r;
                            })({
                                isWindow: b,
                                scrollableDomEle: t,
                                elementLengthProp: p,
                                initialScrollPosition: h,
                                isHorizontalDirection: E,
                                scrollLengthProp: m,
                                direction: a,
                            });
                        !isNaN(l) && l < f && (f = l);
                        var v = function e(a) {
                            if (!u || !u()) {
                                var l = a - _,
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
                                    })({ easingPreset: o, cubicBezierPoints: i, runTime: l, duration: r });
                                if (!isNaN(m)) {
                                    var p = Math.round(m * f),
                                        v = g ? p + h : f - p;
                                    if (
                                        (c.breakBounds &&
                                            (v < c.startBound
                                                ? (v = c.startBound)
                                                : v > c.endBound && (v = c.endBound)),
                                        l < r)
                                    ) {
                                        if (b) {
                                            var A = E ? v : 0,
                                                C = E ? 0 : v;
                                            window.scrollTo(A, C);
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
                            r = (function (e) {
                                var t = e.axis,
                                    n = e.i,
                                    a = e.cursorPositionOnRail;
                                if ('y' === t) {
                                    var s = n.scrollbarY.offsetTop,
                                        r = s + n.scrollbarYHeight;
                                    return a >= s && a <= r;
                                }
                                var i = n.scrollbarX.offsetLeft,
                                    o = i + n.scrollbarXWidth;
                                return a >= i && a <= o;
                            })({ axis: t, i: s, cursorPositionOnRail: n });
                        return r
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
                                      r = (a - s.scrollbar / 2) / s.rail,
                                      i = Math.round(Math.min(s.maxScroll, Math.max(0, s.content * r)));
                                  'y' === t ? (n.element.scrollTop = i) : (n.element.scrollLeft = i);
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
                                                i = r.cursorPosition - r.windowScrolled - r.elementPosition,
                                                o = (function (e) {
                                                    var t = e.axis,
                                                        n = e.cursorPositionOnRail,
                                                        a = e.i;
                                                    return n > ('y' === t ? a.scrollbarYTop : a.scrollbarXLeft)
                                                        ? 1
                                                        : -1;
                                                })({ axis: t, cursorPositionOnRail: i, i: e });
                                            k({ axis: t, cursorPositionOnRail: i, direction: o, i: e }) &&
                                                clearTimeout(s),
                                                S(e, !1, n);
                                        }
                                        a.stopPropagation();
                                    }
                                };
                            r(),
                                (s = setInterval(r, 100)),
                                e.event.once(e.ownerDocument, 'mouseup', function () {
                                    clearTimeout(s);
                                });
                        };
                    };
                function x(e, t, n) {
                    var a = n[0],
                        s = n[1],
                        r = n[2],
                        i = n[3],
                        o = n[4],
                        l = n[5],
                        u = n[6],
                        _ = n[7],
                        d = n[8],
                        b = e.element,
                        E = null,
                        g = null,
                        f = null;
                    function v(n) {
                        (b[u] = h(E + f * (n[r] - g))), m(e, _), S(e, !1, t), n.stopPropagation(), n.preventDefault();
                    }
                    function A() {
                        p(e, _), e[d].classList.remove(c.clicking), e.event.unbind(e.ownerDocument, 'mousemove', v);
                    }
                    e.event.bind(e[o], 'mousedown', function (t) {
                        1 === t.buttons &&
                            ((E = b[u]),
                            (g = t[r]),
                            (f = (e[s] - e[a]) / (e[i] - e[l])),
                            e.event.bind(e.ownerDocument, 'mousemove', v),
                            e.event.once(e.ownerDocument, 'mouseup', A),
                            e[d].classList.add(c.clicking),
                            t.stopPropagation(),
                            t.preventDefault());
                    });
                }
                var L = 1e3,
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
                                    r(n, ':hover')
                                ) {
                                    var s,
                                        i = document.activeElement
                                            ? document.activeElement
                                            : e.ownerDocument.activeElement;
                                    if (i) {
                                        if ('IFRAME' === i.tagName) i = i.contentDocument.activeElement;
                                        else for (; i.shadowRoot; ) i = i.shadowRoot.activeElement;
                                        if (
                                            r((s = i), 'input,[contenteditable]') ||
                                            r(s, 'select,[contenteditable]') ||
                                            r(s, 'textarea,[contenteditable]') ||
                                            r(s, 'button,[contenteditable]')
                                        )
                                            return;
                                    }
                                    var o = 0,
                                        l = 0;
                                    switch (a.which) {
                                        case 37:
                                            o = a.metaKey ? -e.contentWidth : a.altKey ? -e.containerWidth : -30;
                                            break;
                                        case 38:
                                            l = a.metaKey ? e.contentHeight : a.altKey ? e.containerHeight : 30;
                                            break;
                                        case 39:
                                            o = a.metaKey ? e.contentWidth : a.altKey ? e.containerWidth : 30;
                                            break;
                                        case 40:
                                            l = a.metaKey ? -e.contentHeight : a.altKey ? -e.containerHeight : -30;
                                            break;
                                        case 32:
                                            l = a.shiftKey ? e.containerHeight : -e.containerHeight;
                                            break;
                                        case 33:
                                            l = e.containerHeight;
                                            break;
                                        case 34:
                                            l = -e.containerHeight;
                                            break;
                                        case 36:
                                            l = e.contentHeight;
                                            break;
                                        case 35:
                                            l = -e.contentHeight;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.settings.suppressScrollX && 0 !== o) ||
                                        (e.settings.suppressScrollY && 0 !== l) ||
                                        ((n.scrollTop -= l),
                                        (n.scrollLeft += o),
                                        S(e, !1, t),
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
                                        })(o, l) && a.preventDefault());
                                }
                            });
                        },
                        wheel: function (e, n) {
                            var a = e.element;
                            function s(s) {
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
                                    })(s),
                                    i = r[0],
                                    o = r[1];
                                if (
                                    !(function (e, n, s) {
                                        if (!f.isWebKit && a.querySelector('select')) return !0;
                                        if (!a.contains(e)) return !1;
                                        for (var r = e; r && r !== a; ) {
                                            if (r.classList.contains(u.consuming)) return !0;
                                            var i = t(r);
                                            if (
                                                [i.overflow, i.overflowX, i.overflowY].join('').match(/(scroll|auto)/)
                                            ) {
                                                var o = r.scrollHeight - r.clientHeight;
                                                if (
                                                    o > 0 &&
                                                    !((0 === r.scrollTop && s > 0) || (r.scrollTop === o && s < 0))
                                                )
                                                    return !0;
                                                var l = r.scrollWidth - r.clientWidth;
                                                if (
                                                    l > 0 &&
                                                    !((0 === r.scrollLeft && n < 0) || (r.scrollLeft === l && n > 0))
                                                )
                                                    return !0;
                                            }
                                            r = r.parentNode;
                                        }
                                        return !1;
                                    })(s.target, i, o)
                                ) {
                                    var l = !1,
                                        c = (i * e.settings.wheelSpeed) | 0,
                                        _ = (o * e.settings.wheelSpeed) | 0;
                                    e.settings.useBothWheelAxes
                                        ? e.scrollbarYActive && !e.scrollbarXActive
                                            ? (o ? (a.scrollTop -= _) : (a.scrollTop += c), (l = !0))
                                            : e.scrollbarXActive &&
                                              !e.scrollbarYActive &&
                                              (i ? (a.scrollLeft += c) : (a.scrollLeft -= _), (l = !0))
                                        : ((a.scrollTop -= _), (a.scrollLeft += c)),
                                        S(e, !1, n),
                                        (l =
                                            l ||
                                            (function (t, n) {
                                                var s = Math.floor(a.scrollTop),
                                                    r = 0 === a.scrollTop,
                                                    i = s + a.offsetHeight === a.scrollHeight,
                                                    o = 0 === a.scrollLeft,
                                                    l = a.scrollLeft + a.offsetWidth === a.scrollWidth;
                                                return (
                                                    !(Math.abs(n) > Math.abs(t) ? r || i : o || l) ||
                                                    !e.settings.wheelPropagation
                                                );
                                            })(i, o)),
                                        l && !s.ctrlKey && (s.stopPropagation(), s.preventDefault());
                                }
                            }
                            e.event.bind(a, 'wheel', s),
                                void 0 !== window.onmousewheel && e.event.bind(a, 'mousewheel', s);
                        },
                        touch: function (e, n) {
                            if (f.supportsTouch || f.supportsIePointer) {
                                var a = e.element,
                                    s = {},
                                    r = 0,
                                    i = {},
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
                            function l(t, s) {
                                (a.scrollTop -= s), (a.scrollLeft -= t), S(e, !1, n);
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
                                        (r = new Date().getTime()),
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
                                            for (var r = e; r && r !== a; ) {
                                                if (r.classList.contains(u.consuming)) return !0;
                                                var i = t(r);
                                                if (
                                                    [i.overflow, i.overflowX, i.overflowY]
                                                        .join('')
                                                        .match(/(scroll|auto)/)
                                                ) {
                                                    var o = r.scrollHeight - r.clientHeight;
                                                    if (
                                                        o > 0 &&
                                                        !((0 === r.scrollTop && s > 0) || (r.scrollTop === o && s < 0))
                                                    )
                                                        return !0;
                                                    var l = r.scrollLeft - r.clientWidth;
                                                    if (
                                                        l > 0 &&
                                                        !(
                                                            (0 === r.scrollLeft && n < 0) ||
                                                            (r.scrollLeft === l && n > 0)
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
                                    l(m, p), (s = d);
                                    var b = new Date().getTime(),
                                        E = b - r;
                                    E > 0 && ((i.x = m / E), (i.y = p / E), (r = b)),
                                        (function (t, n) {
                                            var s = Math.floor(a.scrollTop),
                                                r = a.scrollLeft,
                                                i = Math.abs(t),
                                                o = Math.abs(n);
                                            if (o > i) {
                                                if (
                                                    (n < 0 && s === e.contentHeight - e.containerHeight) ||
                                                    (n > 0 && 0 === s)
                                                )
                                                    return 0 === window.scrollY && n > 0 && f.isChrome;
                                            } else if (
                                                i > o &&
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
                                    (clearInterval(o),
                                    (o = setInterval(function () {
                                        e.isInitialized
                                            ? clearInterval(o)
                                            : i.x || i.y
                                              ? Math.abs(i.x) < 0.01 && Math.abs(i.y) < 0.01
                                                  ? clearInterval(o)
                                                  : (l(30 * i.x, 30 * i.y), (i.x *= 0.8), (i.y *= 0.8))
                                              : clearInterval(o);
                                    }, 10)));
                            }
                        },
                        'drag-move': function (e, t) {
                            void 0 === t && (t = 0);
                            var n = e.element,
                                a = null,
                                s = !1,
                                r = 0,
                                i = 0,
                                o = 0;
                            function l() {
                                e.onScroll();
                            }
                            function u(a, s, r, i) {
                                void 0 === r && (r = null),
                                    void 0 === i && (i = !1),
                                    w({
                                        scrollableDomEle: n,
                                        direction: 'right',
                                        onRefUpdateCallback: l,
                                        duration: s,
                                        easingPreset: 'easeOutCubic',
                                        scrollAmount: a,
                                        onCheckForBreakCallback: r,
                                        boundsInfo: {
                                            breakBounds: i,
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
                                    var l = a - s.screenX;
                                    (n.scrollLeft += l), (a = s.screenX);
                                    var u = new Date().getTime();
                                    if (((r = (l / (u - i)) * 1e3), (i = u), e.onScroll(), t > 0)) {
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
                                    (i = new Date().getTime());
                            }
                            function g(a) {
                                var s = e.contentWidth - e.containerWidth + t;
                                if (n.scrollLeft < t) u(t - n.scrollLeft, L, _);
                                else if (n.scrollLeft > s) u(s - n.scrollLeft, L, _);
                                else {
                                    new Date().getTime() - i < 100 && u(r / 4, L, _, !0);
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
                    I = function (e, s) {
                        var r = this;
                        if (
                            (void 0 === s && (s = {}),
                            'string' == typeof e && (e = document.querySelector(e)),
                            !e || !e.nodeName)
                        )
                            throw new Error('no element is specified to initialize PerfectScrollbar');
                        for (var i in ((this.element = e),
                        e.classList.add(l),
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
                            r.settings[i] = s[i];
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
                            (this.scrollbarXRail = a(u.rail('x'))),
                            (this.scrollbarXButtonStart = a(u.buttonStart('x'))),
                            (this.scrollbarXButtonEnd = a(u.buttonEnd('x'))),
                            (this.scrollbarXTrack = a(u.track('x'))),
                            e.appendChild(this.scrollbarXRail),
                            this.scrollbarXRail.appendChild(this.scrollbarXTrack),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonStart),
                            this.scrollbarXRail.appendChild(this.scrollbarXButtonEnd),
                            (this.scrollbarX = a(u.thumb('x'))),
                            this.scrollbarXRail.appendChild(this.scrollbarX),
                            this.scrollbarX.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarX, 'focus', d),
                            this.event.bind(this.scrollbarX, 'blur', m),
                            (this.scrollbarXActive = null),
                            (this.scrollbarXWidth = null),
                            (this.scrollbarXLeft = null),
                            (this.scrollbarYRail = a(u.rail('y'))),
                            (this.scrollbarYButtonStart = a(u.buttonStart('y'))),
                            (this.scrollbarYButtonEnd = a(u.buttonEnd('y'))),
                            (this.scrollbarYTrack = a(u.track('y'))),
                            e.appendChild(this.scrollbarYRail),
                            this.scrollbarYRail.appendChild(this.scrollbarYTrack),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonStart),
                            this.scrollbarYRail.appendChild(this.scrollbarYButtonEnd),
                            (this.scrollbarY = a(u.thumb('y'))),
                            this.scrollbarYRail.appendChild(this.scrollbarY),
                            this.scrollbarY.setAttribute('tabindex', 0),
                            this.event.bind(this.scrollbarY, 'focus', d),
                            this.event.bind(this.scrollbarY, 'blur', m),
                            (this.scrollbarYActive = null),
                            (this.scrollbarYHeight = null),
                            (this.scrollbarYTop = null),
                            v().then(function () {
                                var a = t(r.scrollbarXRail);
                                (r.scrollbarXBottom = parseInt(a.bottom, 10)),
                                    isNaN(r.scrollbarXBottom)
                                        ? ((r.isScrollbarXUsingBottom = !1), (r.scrollbarXTop = h(a.top)))
                                        : (r.isScrollbarXUsingBottom = !0),
                                    (r.railBorderXWidth = h(a.borderLeftWidth) + h(a.borderRightWidth)),
                                    n(r.scrollbarXRail, { display: 'block' }),
                                    (r.railXMarginWidth = h(a.marginLeft) + h(a.marginRight)),
                                    n(r.scrollbarXRail, { display: '' }),
                                    (r.railXWidth = null),
                                    (r.railXRatio = null);
                                var s = t(r.scrollbarYRail);
                                (r.scrollbarYRight = parseInt(s.right, 10)),
                                    isNaN(r.scrollbarYRight)
                                        ? ((r.isScrollbarYUsingRight = !1), (r.scrollbarYLeft = h(s.left)))
                                        : (r.isScrollbarYUsingRight = !0),
                                    (r.scrollbarYOuterWidth = r.isRtl
                                        ? (function (e) {
                                              var n = t(e);
                                              return (
                                                  h(n.width) +
                                                  h(n.paddingLeft) +
                                                  h(n.paddingRight) +
                                                  h(n.borderLeftWidth) +
                                                  h(n.borderRightWidth)
                                              );
                                          })(r.scrollbarY)
                                        : null),
                                    (r.railBorderYWidth = h(s.borderTopWidth) + h(s.borderBottomWidth)),
                                    n(r.scrollbarYRail, { display: 'block' }),
                                    (r.railYMarginHeight = h(s.marginTop) + h(s.marginBottom)),
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
                                        return N[e](r, r.settings.overScrollWidth);
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
                                    S(r, !1, r.settings.overScrollWidth, !1);
                            });
                    };
                (I.prototype._getAnimationSettings = function (e, t, n, a) {
                    var s = this,
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
                                S(s, !0, s.settings.overScrollWidth, !1), n && n(e);
                            },
                            onAnimationCompleteCallback: function () {
                                a && a();
                            },
                        }
                    );
                }),
                    (I.prototype.playHoverSound = function () {
                        window.engine && engine.call('PlaySound', 'highlight');
                    }),
                    (I.prototype.playClickSound = function () {
                        window.engine && engine.call('PlaySound', 'play');
                    }),
                    (I.prototype.handleMouseEnter = function () {
                        this.playHoverSound();
                    }),
                    (I.prototype.handleMouseLeave = function () {}),
                    (I.prototype.update = function () {
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
                                    S(e, !1, e.settings.overScrollWidth, !1),
                                    C(e, 'top', 0, !1, !1, !0),
                                    C(e, 'left', 0, !1, !1, !0),
                                    n(e.scrollbarXRail, { display: '' }),
                                    n(e.scrollbarYRail, { display: '' });
                            }));
                    }),
                    (I.prototype.setScrollLeft = function (e, t, n) {
                        w(this._getAnimationSettings(e, 'right', t, n));
                    }),
                    (I.prototype.setScrollLeftImmediately = function (e) {
                        (this.element.scrollLeft = 0 | e), this.update();
                    }),
                    (I.prototype.setScrollTop = function (e, t, n) {
                        w(this._getAnimationSettings(e, 'bottom', t, n));
                    }),
                    (I.prototype.setScrollTopImmediately = function (e) {
                        (this.element.scrollTop = 0 | e), this.update();
                    }),
                    (I.prototype.onScroll = function (e) {
                        this.isAlive && S(this, !1, this.settings.overScrollWidth, !0);
                    }),
                    (I.prototype.onWheel = function (e) {
                        this.isAlive &&
                            (S(this, !1, this.settings.overScrollWidth, !1),
                            C(this, 'left', this.element.scrollLeft - this.lastScrollLeft),
                            (this.lastScrollLeft = this.element.scrollLeft));
                    }),
                    (I.prototype.destroy = function () {
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
                            i(this.scrollbarX),
                            i(this.scrollbarY),
                            i(this.scrollbarXRail),
                            i(this.scrollbarYRail),
                            this.removePsClasses(),
                            (this.element = null),
                            (this.scrollbarX = null),
                            (this.scrollbarY = null),
                            (this.scrollbarXRail = null),
                            (this.scrollbarYRail = null),
                            (this.isAlive = !1));
                    }),
                    (I.prototype.removePsClasses = function () {
                        this.element.className = this.element.className
                            .split(' ')
                            .filter(function (e) {
                                return !e.match(/^ps([-_].+|)$/);
                            })
                            .join(' ');
                    }),
                    (e.exports = I);
            },
            8089: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(7727),
                    l = n(7476);
                const u = [
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
                            r = e.side,
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
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(e, u)),
                            g = i()(l.Z.base, l.Z[`base__${o}`], l.Z[`base__${r}`], null == _ ? void 0 : _.base),
                            h = i()(l.Z.icon, l.Z[`icon__${o}`], l.Z[`icon__${r}`], null == _ ? void 0 : _.icon),
                            f = i()(l.Z.glow, null == _ ? void 0 : _.glow),
                            v = i()(l.Z.caption, l.Z[`caption__${o}`], null == _ ? void 0 : _.caption),
                            A = i()(l.Z.goto, null == _ ? void 0 : _.goto);
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
                            'info' !== o && s().createElement('div', { className: l.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: f })),
                            s().createElement('div', { className: v }, t),
                            a && s().createElement('div', { className: A }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(2056);
                const i = ['children'];
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
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, i);
                    return s().createElement(
                        r.u,
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
                n.d(t, { i: () => u });
                var a = n(2056),
                    s = n(6179),
                    r = n.n(s);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    u = (e) => {
                        let t = e.children,
                            n = e.body,
                            u = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, i);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: u, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, u, c, d]);
                        return r().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
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
                n.d(t, { u: () => u });
                var a = n(7902),
                    s = n(4179),
                    r = n(6179);
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
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    u = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            s = e.args,
                            u = e.onMouseEnter,
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
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            S = e.onShow,
                            D = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, i);
                        const B = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => C || (0, a.F)().resId, [C]),
                            w = (0, r.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (l(n, h, { isMouseEvent: !0, on: !0, arguments: o(s) }, y),
                                    S && S(),
                                    (B.current.isVisible = !0));
                            }, [n, h, s, y, S]),
                            k = (0, r.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        l(n, h, { on: !1 }, y),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, h, y, D]),
                            T = (0, r.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && k();
                            }, [v, k]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(w, p ? 100 : 400)),
                                                      u && u(e),
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
            3532: (e) => {
                e.exports = {
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
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
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
                n.r(t), n.d(t, { mouse: () => o, onResize: () => r });
                var a = n(2472),
                    s = n(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const r = `mouse${t}`,
                                        o = i[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, l),
                                        a(),
                                        () => {
                                            s &&
                                                (o(),
                                                window.removeEventListener(r, l),
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
                    return Object.assign({}, r, {
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
                        getMouseGlobalPosition: () => r,
                        getSize: () => s,
                        graphicsQuality: () => i,
                    });
                var a = n(527);
                function s(e = 'px') {
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
                        events: () => r.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => D,
                        getScale: () => E,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => C,
                        isFocused: () => v,
                        pxToRem: () => g,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var a = n(3722),
                    s = n(6112),
                    r = n(6538),
                    i = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, a = 1) {
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
                function A() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => u });
                const a = ['args'];
                const s = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((s = r),
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
                    u = {
                        close(e) {
                            l('popover' === e ? s : i);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
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
                    r = (n(4179), n(6179));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = s.n.NONE, t = i, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(s) {
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
                n.d(t, { m: () => l });
                var a = n(7902),
                    s = n(8071),
                    r = n(4179),
                    i = n(6179);
                const o = r.Sw.instance,
                    l = (e = 'model', t = !0) => {
                        const n = (0, i.useState)(0),
                            r = (n[0], n[1]),
                            l = (0, i.useMemo)(() => (0, a.F)(), []),
                            u = l.caller,
                            c = l.resId,
                            _ = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== u ? `children.${u}.${e}` : e),
                                [u, e],
                            ),
                            d = (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, s.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            r((e) => e + 1);
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
                    G: () => l,
                    MH: () => r,
                    UI: () => i,
                    hX: () => u,
                    u4: () => d,
                    v: () => _,
                    yW: () => o,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const r = s;
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let n = 0; n < e.length; n++) {
                        if (!t(r(e, n), n, e)) return !1;
                    }
                    return !0;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) {
                        if (t(r(e, n), n, e)) return !0;
                    }
                    return !1;
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const r = null == (a = e[s]) ? void 0 : a.value;
                        t(r, s, e) && n.push(r);
                    }
                    return n;
                }
                function c(e, t, n) {
                    const a = [];
                    for (let s = 0; s < e.length; s++) {
                        const i = r(e, s);
                        t(i, s, e) && a.push(n(i, s, e));
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
                        a = t(a, r(e, n), n, e);
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
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                n.d(t, {
                    BN: () => i,
                    Eg: () => u,
                    Uw: () => E,
                    WU: () => s,
                    e: () => o,
                    uF: () => r,
                    v2: () => a,
                    z4: () => l,
                }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(a || (a = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    u = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
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
                                      r = l(e);
                                  return d(r, /( )/, t).forEach((e) => (n = n.concat(d(e, s, a.left)))), n;
                              })(e, t);
                    },
                    E = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : b(e, t)));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
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
                        const r = a.O.view.addModelObserver(e, n, s);
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
                s.__instance = void 0;
                const r = s;
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
                    Sw: () => r.Z,
                    B3: () => u,
                    Gr: () => c,
                    Z5: () => i,
                    B0: () => l,
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
                var r = n(1358);
                const i = {
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
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const b = ['args'];
                function E(e, t, n, a, s, r, i) {
                    try {
                        var o = e[r](i),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, s);
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
                                        var r = e.apply(t, n);
                                        function i(e) {
                                            E(r, a, s, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(r, a, s, i, o, 'throw', e);
                                        }
                                        i(void 0);
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
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        s = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                    return s;
                                })(t, b);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    A = () => v(l.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var S = n(7572);
                const D = s.instance,
                    F = {
                        DataTracker: r.Z,
                        ViewModel: S.Z,
                        ViewEventType: l,
                        NumberFormatType: u,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: A,
                        sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), r) => {
                            const i = p.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                u = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: p.O.view.pxToRem(u) + i.x,
                                    y: p.O.view.pxToRem(c) + i.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(d),
                                };
                            v(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(m),
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
                        handleViewEvent: v,
                        onBindingsReady: h,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = F;
            },
            1719: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => js,
                        Bar: () => zs,
                        DefaultScroll: () => Xs,
                        Direction: () => Bs,
                        defaultSettings: () => ys,
                        useHorizontalScrollApi: () => ks,
                    });
                var s = {};
                n.r(s), n.d(s, { Area: () => ur, Bar: () => ir, Default: () => lr, useVerticalScrollApi: () => Ys });
                var r = n(3138),
                    i = n(7739),
                    o = n(6179),
                    l = n.n(o),
                    u = n(6483),
                    c = n.n(u),
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
                        const e = (0, o.useContext)(i.YN),
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
                            r = ((e) => {
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
                        return { mediaSize: a, mediaWidth: s, mediaHeight: r, remScreenWidth: t, remScreenHeight: n };
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
                    A = {
                        [E.ExtraSmall]: '',
                        [E.Small]: d().SMALL_HEIGHT,
                        [E.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [E.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [E.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [p.ExtraSmall]: '',
                        [p.Small]: d().SMALL,
                        [p.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [p.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [p.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, h);
                        const s = g(),
                            r = s.mediaWidth,
                            i = s.mediaHeight,
                            o = s.mediaSize;
                        return l().createElement('div', f({ className: c()(n, v[r], A[i], C[o]) }, a), t);
                    },
                    D = ['children'];
                const F = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, D);
                    return l().createElement(i.ZN, null, l().createElement(S, n, t));
                };
                var B = n(493),
                    y = n.n(B),
                    w = n(1856),
                    k = n(7902),
                    T = n(8071),
                    x = n(6536),
                    L = n(4179);
                const N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    I = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
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
                                return { modelPrefix: s, modelPath: I(s, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const s = (0, T.M)(I(n, `${t}.${a}`), window);
                                    return N(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    P = L.Sw.instance;
                let H;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(H || (H = {}));
                const $ = (e = 'model', t = H.Deep) => {
                        const n = (0, o.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, o.useMemo)(() => (0, k.F)(), []),
                            r = s.caller,
                            i = s.resId,
                            l = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                                [r, e],
                            ),
                            u = (0, o.useState)(() =>
                                ((e) => {
                                    const t = (0, T.M)(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return N(t) ? t.value : t;
                                })(M(l)),
                            ),
                            c = u[0],
                            _ = u[1],
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
                                    d.current = P.addCallback(s, n, i, t === H.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== H.None)
                                    return () => {
                                        P.removeCallback(d.current, i);
                                    };
                            }, [i, t]),
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
                var j = n(5262),
                    Y = n(3649);
                function U(e, t, n) {
                    const a = (0, o.useContext)(i.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in j.u);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, Y.e)(t))(n, e[0])]),
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
                };
                var q = n(9887),
                    K = n.n(q);
                const J = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Q = (e) => e.includes('_') && ((e) => J.includes(e))(e.split('_').at(-1)),
                    ee = [p.ExtraLarge, p.Large, p.Medium, p.Small, p.ExtraSmall],
                    te = (e, t) =>
                        Object.keys(e).reduce((n, a) => {
                            if (a in n) return n;
                            if (Q(a)) {
                                const s = a.split('_').slice(0, -1).join('_');
                                if (s in n) return n;
                                const r = ee.indexOf(t),
                                    i = (-1 !== r ? J.slice(r) : [])
                                        .map((e) => s + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = i ? e[i] : void 0;
                                return (n[s] = void 0 !== o ? o : e[s]), n;
                            }
                            const s = e[a];
                            return (
                                void 0 === s ||
                                    ((e, t) => J.some((n) => void 0 !== t[`${e}_${n}`]))(a, e) ||
                                    (n[a] = s),
                                n
                            );
                        }, {}),
                    ne = (e, t = te) => {
                        const n = (
                            (e, t = te) =>
                            (n) => {
                                const a = g().mediaSize,
                                    s = (0, o.useMemo)(() => t(n, a), [n, a]);
                                return l().createElement(e, s);
                            }
                        )(e, t);
                        return l().memo((t) =>
                            Object.keys(t).some((e) => Q(e) && void 0 !== t[e])
                                ? l().createElement(n, t)
                                : l().createElement(e, t),
                        );
                    },
                    ae = {
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
                    se = [
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
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const ie = {
                        XL: { mt: ae.mt__XL, mr: ae.mr__XL, mb: ae.mb__XL, ml: ae.ml__XL },
                        LG: { mt: ae.mt__LG, mr: ae.mr__LG, mb: ae.mb__LG, ml: ae.ml__LG },
                        MDp: { mt: ae.mt__MDp, mr: ae.mr__MDp, mb: ae.mb__MDp, ml: ae.ml__MDp },
                        MD: { mt: ae.mt__MD, mr: ae.mr__MD, mb: ae.mb__MD, ml: ae.ml__MD },
                        SMp: { mt: ae.mt__SMp, mr: ae.mr__SMp, mb: ae.mb__SMp, ml: ae.ml__SMp },
                        SM: { mt: ae.mt__SM, mr: ae.mr__SM, mb: ae.mb__SM, ml: ae.ml__SM },
                        XS: { mt: ae.mt__XS, mr: ae.mr__XS, mb: ae.mb__XS, ml: ae.ml__XS },
                    },
                    oe = (Object.keys(ie), ['mt', 'mr', 'mb', 'ml']),
                    le = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ue = ne((e) => {
                        let t = e.className,
                            n = e.width,
                            a = e.height,
                            s = e.m,
                            r = e.mt,
                            i = void 0 === r ? s : r,
                            u = e.mr,
                            _ = void 0 === u ? s : u,
                            d = e.mb,
                            m = void 0 === d ? s : d,
                            p = e.ml,
                            b = void 0 === p ? s : p,
                            E = e.column,
                            g = e.row,
                            h = e.flexDirection,
                            f = void 0 === h ? (E ? 'column' : g && 'row') || void 0 : h,
                            v = e.flexStart,
                            A = e.center,
                            C = e.flexEnd,
                            S = e.spaceBetween,
                            D = e.spaceAround,
                            F = e.justifyContent,
                            B =
                                void 0 === F
                                    ? (v ? 'flex-start' : A && 'center') ||
                                      (C && 'flex-end') ||
                                      (S && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : F,
                            y = e.alignItems,
                            w = void 0 === y ? (v ? 'flex-start' : A && 'center') || (C && 'flex-end') || void 0 : y,
                            k = e.alignSelf,
                            T = e.wrap,
                            x = e.flexWrap,
                            L = void 0 === x ? (T ? 'wrap' : void 0) : x,
                            N = e.grow,
                            I = e.shrink,
                            R = e.flex,
                            M = void 0 === R ? (N || I ? `${N ? 1 : 0} ${I ? 1 : 0} auto` : void 0) : R,
                            O = e.style,
                            P = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, se);
                        const $ = (0, o.useMemo)(() => {
                                const e = { mt: i, mr: _, mb: m, ml: b },
                                    t = ((e) =>
                                        oe.reduce((t, n) => {
                                            const a = e[n];
                                            return a && 'number' != typeof a ? t.concat(ie[!0 === a ? 'MD' : a][n]) : t;
                                        }, []))(e),
                                    s = ((e) =>
                                        oe.reduce((t, n) => {
                                            const a = e[n];
                                            return 'number' == typeof a && (t[le[n]] = a + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, s, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: M,
                                        alignSelf: k,
                                        display: f || w ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: L,
                                        justifyContent: B,
                                        alignItems: w,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, a, i, _, m, b, O, M, k, f, L, B, w]),
                            W = $.computedStyle,
                            z = $.computedClassNames;
                        return l().createElement('div', re({ className: c()(ae.base, ...z, t), style: W }, H), P);
                    }),
                    ce = 'FormatText_base_d0',
                    _e = ({ binding: e, text: t = '', classMix: n, alignment: a = Y.v2.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : l().createElement(
                                  o.Fragment,
                                  null,
                                  t.split('\n').map((t, s) =>
                                      l().createElement(
                                          'div',
                                          { className: c()(ce, n), key: `${t}-${s}` },
                                          (0, Y.Uw)(t, a, e).map((e, t) =>
                                              l().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var de = n(3532),
                    me = n.n(de);
                const pe = {
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
                    be = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const ge = Object.keys(me()),
                    he = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    fe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ve = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ae = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Ce =
                        (Object.keys(Ae),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': he,
                            'heading-H36': he,
                            'heading-H28': fe,
                            'heading-H24': fe,
                            'heading-H24R': fe,
                            'heading-H22': fe,
                            'heading-H20R': fe,
                            'heading-H18': fe,
                            'heading-H15': ve,
                            'heading-H14': ve,
                            'paragraph-P24': fe,
                            'paragraph-P18': fe,
                            'paragraph-P16': fe,
                            'paragraph-P14': ve,
                            'paragraph-P12': ve,
                            'paragraph-P10': ve,
                        }),
                    Se =
                        (Object.keys(Ce),
                        (e) =>
                            e
                                ? ((e) => ge.includes(e))(e)
                                    ? { colorClassName: pe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    De = ne((e) => {
                        let t = e.text,
                            n = e.variant,
                            a = e.className,
                            s = e.color,
                            r = e.m,
                            i = e.mt,
                            u = void 0 === i ? r : i,
                            _ = e.mr,
                            d = void 0 === _ ? r : _,
                            m = e.mb,
                            p = void 0 === m ? r : m,
                            b = e.ml,
                            E = void 0 === b ? r : b,
                            g = e.style,
                            h = e.format,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, be);
                        const v = (0, o.useMemo)(() => {
                                const e = Se(s),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    a = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, g, a), colorClassName: t };
                            }, [g, s]),
                            A = v.computedStyle,
                            C = v.colorClassName;
                        return l().createElement(
                            ue,
                            Ee(
                                {
                                    className: c()(pe.base, n && pe[n], C, a),
                                    style: A,
                                    mt: !0 === u ? Ce[n || 'paragraph-P16'].mt : u,
                                    mr: !0 === d ? Ce[n || 'paragraph-P16'].mr : d,
                                    mb: !0 === p ? Ce[n || 'paragraph-P16'].mb : p,
                                    ml: !0 === E ? Ce[n || 'paragraph-P16'].ml : E,
                                },
                                f,
                            ),
                            void 0 !== h ? l().createElement(_e, Ee({}, h, { text: t })) : t,
                        );
                    });
                var Fe = n(7078),
                    Be = n(6373),
                    ye = n(2056);
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ke = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = l().createElement('div', { className: n }, e);
                        if (t.header || t.body) return l().createElement(Be.i, t, a);
                        const s = t.contentId,
                            r = t.args,
                            i = null == r ? void 0 : r.contentId;
                        return s || i
                            ? l().createElement(ye.u, we({}, t, { contentId: s || i }), a)
                            : l().createElement(Fe.t, t, a);
                    },
                    Te = 'AbilitySkillSlot_base_d7',
                    xe = 'AbilitySkillSlot_slotText_1e',
                    Le = 'AbilitySkillSlot_icon_d2',
                    Ne = ({ skillName: e, tooltipId: t, tooltipHeader: n, tooltipBody: a, className: s }) => {
                        const r = (0, o.useMemo)(
                            () => ({
                                args: { tooltipId: t, skillName: e, header: n, body: a, hasHtmlContent: !0 },
                                header: n,
                                body: a,
                                ignoreShowDelay: !0,
                            }),
                            [e, n, a, t],
                        );
                        return l().createElement(
                            ke,
                            { tooltipArgs: r, className: c()(Te, s) },
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement(De, {
                                    className: xe,
                                    text: R.strings.tank_setup.tooltips.abilitySlot.title(),
                                }),
                                l().createElement('div', {
                                    className: Le,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                    },
                                }),
                            ),
                        );
                    },
                    Ie = {
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
                        abilitySkillSlot: 'AmmunitionPanel_abilitySkillSlot_50',
                        abilitySkillSlot__battle: 'AmmunitionPanel_abilitySkillSlot__battle_ac',
                        abilitySkillSlot__small: 'AmmunitionPanel_abilitySkillSlot__small_c1',
                        abilitySkillSlot__extraSmall: 'AmmunitionPanel_abilitySkillSlot__extraSmall_bd',
                        abilitySkillSlot__prebattle: 'AmmunitionPanel_abilitySkillSlot__prebattle_f0',
                    },
                    Re = 'Border_base_f9',
                    Me = 'Border_border_83',
                    Oe = 'Border_wrapper_17',
                    Pe = 'Border_active_e8',
                    He = (0, o.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, o.useRef)(null),
                            s = (0, o.useRef)(!1);
                        (0, o.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const r = (0, o.useCallback)(() => {
                            s.current && n(), (s.current = !1);
                        }, [n]);
                        (0, o.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const i = (0, o.useMemo)(() => ({ left: e }), [e]),
                            u = (0, o.useMemo)(() => ({ width: t }), [t]);
                        return l().createElement(
                            'div',
                            { className: Re },
                            l().createElement(
                                'div',
                                { ref: a, className: Me, style: i },
                                l().createElement(
                                    'div',
                                    { className: Oe },
                                    l().createElement('div', { className: Pe, style: u }),
                                ),
                            ),
                        );
                    });
                let $e;
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
                })($e || ($e = {}));
                Date.now();
                var We = n(9056);
                var ze = n(9344),
                    Ge = n(2558),
                    Xe = n(8934);
                const je = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Ye = 'up',
                    Ue = 'down',
                    Ve = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, o.useRef)(1 - t),
                            r = (0, o.useMemo)(() => {
                                const e = ((n = t), (r = s.current), n === r ? '' : n > r ? Ue : Ye);
                                var n, r;
                                const i = e && (0, Y.e)(e);
                                return a ? {} : { enter: je[`base__enter${i}`], exit: je[`base__exit${i}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            l().createElement(
                                Ge.Z,
                                { className: je.base },
                                l().createElement(
                                    Xe.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let Ze;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Ze || (Ze = {}));
                const qe = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    Ke = (e) => e === Ze.Battle || e === Ze.Prebattle,
                    Je = (e) => !Ke(e),
                    Qe = (e) => Ke(e) || e === Ze.Respawn;
                var et = n(7383),
                    tt = n(9152),
                    nt = n(7727);
                function at(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return st(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return st(e, t);
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
                function st(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const rt = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, s = at(t); !(a = s()).done; ) {
                            const t = a.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    it = (e, t, n) => {
                        let a = '',
                            s = 8e3;
                        for (var r, i = at(n); !(r = i()).done; ) {
                            const e = r.value,
                                n = Math.abs(e.centerX - t);
                            n < s && ((a = e.id), (s = n));
                        }
                        return a;
                    },
                    ot = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
                let lt, ut;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(lt || (lt = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(ut || (ut = {}));
                const ct = (e) => `panel-${e}-section`,
                    _t = (e, t) => {
                        const n = ct(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: [tt.y, ...a] };
                    },
                    dt = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: a, syncInitiator: s }) => {
                        const r = ((e, t, n) => {
                                const a = (0, o.useRef)([]),
                                    s = (0, o.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    r = (0, o.useState)({ activeDragId: '', potentialDropId: '' }),
                                    i = r[0],
                                    l = r[1],
                                    u = (0, o.useCallback)((e) => {
                                        s.current.dropId ||
                                            s.current.prevPotentialDropId ||
                                            ((s.current.prevPotentialDropId = e),
                                            l({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, o.useCallback)((e, t) => {
                                        if (a.current) {
                                            const n = it(0, t, a.current);
                                            n !== s.current.prevPotentialDropId &&
                                                ((s.current.prevPotentialDropId = n),
                                                l({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    _ = (0, o.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const n = s.current,
                                                r = it(0, t, a.current);
                                            (n.dropId = r),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                l({ activeDragId: e, potentialDropId: '' }),
                                                r !== e && (0, nt.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, o.useCallback)(() => {
                                        const e = s.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((s.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            l({ activeDragId: '', potentialDropId: '' }));
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
                                                case ut.Ready:
                                                    return p(n, a);
                                                case ut.DragStart:
                                                    return u(n);
                                                case ut.Drag:
                                                    return c(n, a);
                                                case ut.Drop:
                                                    return _(n, a);
                                                case ut.DropExit:
                                                    return m(n);
                                                default:
                                                    return;
                                            }
                                        },
                                        [u, c, _, m, p],
                                    );
                                return (
                                    (0, o.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const n = new Array(e).fill(null);
                                            a.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: i,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, o.useCallback)((e) => {
                                            const t = s.current,
                                                n = t.dragId,
                                                r = t.dropId;
                                            return e === n ? ot(r, a.current) : e === r ? ot(n, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, n),
                            i = r.dragState,
                            l = r.handleGrabberAction,
                            u = r.getForceCenterX,
                            c = r.resetDragResults,
                            _ = (0, o.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case ut.DragStart:
                                            case ut.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    l(e, t);
                                },
                                [l, a],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, o.useEffect)(() => {
                                c();
                            }, [s, c]),
                            { handleGrabberAction: _, dragState: i, getForceCenterX: u }
                        );
                    },
                    mt = {
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
                    pt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                const Et = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, pt);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > i,
                        p = c()(
                            mt.base,
                            mt[`base__${t}`],
                            s && mt.base__animated,
                            r && mt.base__hidden,
                            !_ && mt.base__pattern,
                            a && mt.base__empty,
                            o,
                        );
                    return l().createElement(
                        'div',
                        bt({ className: p }, u),
                        l().createElement('div', { className: mt.bg }),
                        l().createElement('div', { className: mt.pattern }),
                        l().createElement(
                            'div',
                            { className: c()(mt.value, d && mt.value__text) },
                            m ? i : _,
                            m && l().createElement('span', { className: mt.plus }, '+'),
                        ),
                    );
                };
                Et.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const gt = 'display',
                    ht = 'visible_change',
                    ft = ht,
                    vt = ht,
                    At = (e, t) => {
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
                    Ct = 'TopLabel_base_7f',
                    St = 'TopLabel_base__ready_00',
                    Dt = 'TopLabel_text_d0',
                    Ft = 'TopLabel_text__hangar_36',
                    Bt = 'TopLabel_text__shown_25',
                    yt = 'TopLabel_text__hidden_79',
                    wt = 'TopLabel_text__truncated_29',
                    kt = (0, o.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const r = (0, o.useRef)(!1),
                            i = (0, o.useState)(!1),
                            u = i[0],
                            _ = i[1];
                        (0, o.useEffect)(() => {
                            n || (s && !r.current && (r.current = !0), _(s));
                        }, [s, n]);
                        const d = (0, o.useCallback)(() => {
                                (r.current = !0), _(!0);
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
                        const p = c()(Ct, r.current && St),
                            b = c()(Dt, e !== Ze.Setup && Ft, a && wt, s && u ? Bt : yt);
                        return l().createElement(
                            'div',
                            { className: p },
                            l().createElement('div', { className: b }, t),
                        );
                    }),
                    Tt = 'notUsableSection',
                    xt = 'Section_base_8a',
                    Lt = 'Section_base__hidden_f0',
                    Nt = 'Section_label_73',
                    It = 'Section_counter_8a',
                    Rt = 'Section_configLabel_c9',
                    Mt = 'Section_configText_eb',
                    Ot = 'Section_configVehicleIcon_20';
                let Pt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Pt || (Pt = {}));
                const Ht = 'tooltip_watched';
                let $t;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })($t || ($t = {}));
                const Wt = 'epic_battle';
                let zt, Gt, Xt;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(zt || (zt = {})),
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
                    })(Gt || (Gt = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Xt || (Xt = {}));
                const jt = ['action', 'timeLimit'];
                const Yt = 'metrics',
                    Ut = () => Date.now(),
                    Vt = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: s || null,
                    }),
                    Zt = (e, t) => {
                        const n = (0, o.useCallback)(
                            (n, a = Pt.Info, s) => {
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
                    qt = (e, t) => {
                        const n = Zt(e, t),
                            a = (0, o.useRef)(new Map()),
                            s = (0, o.useRef)(new Map()),
                            r = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, Ut());
                                },
                                [a],
                            ),
                            i = (0, o.useCallback)(() => {
                                a.current.clear(), s.current.clear();
                            }, [a, s]),
                            l = (0, o.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Ut());
                                },
                                [a, s],
                            ),
                            u = (0, o.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const r = Ut() - n;
                                    a.current.set(e, t + r);
                                },
                                [a, s],
                            ),
                            c = (0, o.useCallback)(
                                (e, t = 0, r, i) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== s.current.get(e) && u(e), a.current.delete(e);
                                    const l = (Ut() - o) / 1e3;
                                    l <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, l)),
                                        n(e, r, i));
                                },
                                [a, s, n, u],
                            );
                        return [(e) => r(e), (e, t, n, a) => c(e, t, n, a), () => i(), (e) => l(e), (e) => u(e)];
                    },
                    Kt = (e) => {
                        const t = qt(e, Yt),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            r = t[3],
                            i = t[4],
                            l = (0, o.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        s = e.logLevel;
                                    a(t, n, s, Vt(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => l(e), () => s(), (e) => r(e), (e) => i(e)];
                    },
                    Jt = (e, t) => {
                        const n = Kt(e),
                            a = n[0],
                            s = n[1],
                            r = t.action,
                            i = t.timeLimit,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(t, jt);
                        return (0, o.useMemo)(
                            () => ({
                                onShow: () => a(r || Ht),
                                onHide: () => s(Object.assign({ action: r || Ht, timeLimit: i || 2 }, l)),
                            }),
                            [r, i, l, a, s],
                        );
                    },
                    Qt = (e, t) => {
                        const n = qt(e, t),
                            a = n[0],
                            s = n[1],
                            r = n[2],
                            i = n[3],
                            o = n[4];
                        return [(e) => a(e), (e, t, n, a) => s(e, t, n, a), () => r(), (e) => i(e), (e) => o(e)];
                    },
                    en = (e, t, n, a) => {
                        const s = Kt(Wt),
                            r = s[0],
                            i = s[1];
                        return [
                            (0, o.useCallback)(() => r(Ht), [r]),
                            (0, o.useCallback)(
                                () => i({ action: Ht, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [i, e, t, n, a],
                            ),
                        ];
                    },
                    tn = l().memo(function ({ className: e, children: t }) {
                        const n = en(Gt.SkillOrderTooltip, zt.SetupView),
                            a = n[0],
                            s = n[1];
                        return l().createElement(
                            ye.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: a,
                                onMouseLeave: s,
                            },
                            l().createElement('div', { className: e }, t),
                        );
                    }),
                    nn = 'SlotDivider_base_60',
                    an = () => l().createElement('div', { className: nn });
                var sn = n(3267),
                    rn = n(8253),
                    on = n(3141);
                const ln = (e) => {
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
                var un = n(8526),
                    cn = n(5521);
                const _n = 'Grabber_base_cf',
                    dn = 'Grabber_base__enabled_b0',
                    mn = 'Grabber_base__waitingUpdate_1d',
                    pn = 'Grabber_base__updating_f1',
                    bn = 'Grabber_base__active_71',
                    En = 'Grabber_base__exit_1f',
                    gn = 'Grabber_base__showAnimation_d9',
                    hn = l().memo(
                        ({
                            children: e,
                            id: t,
                            containerRef: n,
                            isEnabled: a = !0,
                            onClick: s,
                            forceCenterX: i,
                            isUpdateAvailable: u,
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
                                A = (0, o.useState)(0),
                                C = A[0],
                                S = A[1],
                                D = 0 !== i && a;
                            (0, o.useEffect)(() => {
                                if (((b.current.isValid = !1), t))
                                    return (0, w.v)(() => {
                                        const e = E.current,
                                            a = n.current;
                                        if (a && e) {
                                            const n = e.getBoundingClientRect(),
                                                s = a.getBoundingClientRect(),
                                                r = n.left + 0.5 * n.width;
                                            (b.current = {
                                                isValid: !0,
                                                minXRestriction: s.left,
                                                maxXRestriction: s.left + s.width,
                                                startX: n.left,
                                                startCenterX: r,
                                            }),
                                                _(ut.Ready, { dragId: t, currentCenterX: r });
                                        }
                                    });
                            }, [m]);
                            const F = (0, o.useCallback)(
                                    (e) => {
                                        (p.current.isDragActive = e),
                                            v(e),
                                            p.current.grabActivationPassed && !e && rt(!1, d);
                                    },
                                    [d],
                                ),
                                B = (0, o.useCallback)(() => {
                                    _(ut.DragStart, { dragId: p.current.id }),
                                        (p.current.grabActivationPassed = !0),
                                        rt(!0, d);
                                }, [_, d]),
                                y = (0, o.useCallback)((e) => {
                                    const t = p.current,
                                        n = b.current,
                                        a = n.startX,
                                        s = n.startCenterX,
                                        r = n.minXRestriction,
                                        i = n.maxXRestriction,
                                        o = s - a,
                                        l = e - t.clickCenterOffset;
                                    t.dropCenterX = ((e, t, n, a) => {
                                        const s = n + t,
                                            r = a - t;
                                        return e < s ? s : e > r ? r : e;
                                    })(l, o, r, i);
                                }, []),
                                k = (0, o.useCallback)(
                                    (e) => {
                                        const t = p.current,
                                            n = b.current;
                                        0 === e.button &&
                                            !t.isDragActive &&
                                            n.isValid &&
                                            a &&
                                            !u &&
                                            E.current &&
                                            ((t.actualX = e.clientX),
                                            (t.clickCenterOffset = t.actualX - n.startCenterX),
                                            F(!0));
                                    },
                                    [a, u, F],
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
                                            setTimeout(() => _(ut.DropExit, { dragId: t.id })));
                                    },
                                    [_],
                                );
                            (0, un.gd)(cn.n.ESCAPE, () => F(!1)),
                                (0, o.useEffect)(() => {
                                    a && i && S(0);
                                }, [i, a]);
                            const L = !f && p.current.grabActivationPassed;
                            (0, o.useEffect)(() => {
                                p.current.id = t;
                            }, [t]),
                                (0, o.useEffect)(() => {
                                    L && _(ut.Drop, { dragId: p.current.id, currentCenterX: p.current.dropCenterX });
                                }, [L, _]),
                                (0, o.useEffect)(() => {
                                    const e = E.current;
                                    if (D && e)
                                        return (
                                            e.addEventListener('transitionend', x),
                                            () => {
                                                e.removeEventListener('transitionend', x);
                                            }
                                        );
                                }, [D, x]),
                                (0, o.useEffect)(() => {
                                    if (a && f && p.current.id) {
                                        const e = r.O.client.events.mouse.up(([e, t]) => {
                                                if ('outside' === t) return F(!1);
                                                const n = p.current,
                                                    a = e.clientX;
                                                a === n.actualX && 0 === e.button && !p.current.grabActivationPassed
                                                    ? s && s()
                                                    : p.current.grabActivationPassed && y(a),
                                                    p.current.isDragActive && F(!1);
                                            }),
                                            t = r.O.client.events.mouse.move(([e]) => {
                                                const t = p.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                                const n = e.clientX,
                                                    a = t.grabActivationPassed;
                                                !a && B(),
                                                    n !== t.actualX &&
                                                        ((t.actualX = n),
                                                        y(n),
                                                        a &&
                                                            _(ut.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                        S(t.dropCenterX - b.current.startCenterX));
                                            });
                                        return () => {
                                            t(), e();
                                        };
                                    }
                                }, [B, _, f, a, s, F, y]);
                            const N = (0, o.useMemo)(
                                    () => (i ? { left: i - b.current.startCenterX } : { left: C }),
                                    [C, i],
                                ),
                                I = a ? c()(_n, dn, f && bn, L && En, D && mn, i && pn) : c()(_n, i && gn);
                            return l().createElement(
                                'div',
                                { id: t, ref: E, onClick: T, onMouseDown: k, className: I, style: N },
                                e,
                            );
                        },
                    );
                let fn;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(fn || (fn = {}));
                const vn = 'KeyLabel_base_ec',
                    An = 'KeyLabel_base__current_c2',
                    Cn = 'KeyLabel_base__next_fa',
                    Sn = ({ text: e, show: t, panelType: n, shellState: a }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const s = c()(vn, a === fn.Current && An, a === fn.Next && Cn);
                        return l().createElement(
                            'div',
                            { className: s },
                            l().createElement(kt, { isTruncated: !0, text: e, show: t, panelType: n }),
                        );
                    },
                    Dn = ({ children: e, slotType: t, slotId: n, isEnabled: a = !0 }) => {
                        const s = (0, o.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return l().createElement(Fe.t, { isEnabled: a, args: s }, l().createElement('div', null, e));
                    },
                    Fn = 'Close_base_f3',
                    Bn = 'Close_base__invisible_0e',
                    yn = 'Close_base__shown_a2',
                    wn = 'Close_base__hover_6d',
                    kn = 'Close_base__down_2b',
                    Tn = (0, o.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, o.useState)(!1),
                                i = r[0],
                                u = r[1],
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
                                    m(!0), a && (0, nt.G)(a);
                                }, [a]),
                                f = (0, o.useCallback)(() => {
                                    u(!1), m(!1);
                                }, []),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (u(!0), s && (0, nt.G)(s));
                                    },
                                    [t, s],
                                ),
                                A = (0, o.useCallback)(
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
                            const C = c()(Fn, !b && Bn, b && t && yn, i && kn, d && wn);
                            return l().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: f,
                                onMouseDown: v,
                                onMouseUp: A,
                                className: C,
                                onClick: g,
                            });
                        },
                    ),
                    xn = 'Slot_base_3a',
                    Ln = 'Slot_label_e6',
                    Nn = 'Slot_close_bb',
                    In = 'Slot_disabled_5d',
                    Rn = 'Slot_shadow_a7',
                    Mn = 'Slot_category_2c';
                var On = n(1641);
                const Pn = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: r = !0,
                        onMouseDown: i,
                    }) => {
                        const l = (0, o.useCallback)(() => {
                                (0, L.c9)(L.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    nt.$.playYes();
                            }, [s, t, n, a]),
                            u = (0, o.useCallback)(() => {
                                (0, L.c9)(L.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, o.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === On.t.RIGHT)(e) && l();
                                },
                                [i, l],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                !1 === r && u();
                            }, [r, u]),
                            r ? (0, o.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Hn = ['children'];
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const Wn = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Hn);
                    return l().createElement(
                        Pn,
                        $n({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var zn = n(5918);
                const Gn = l().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: i,
                            isEmpty: u,
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
                            return l().createElement(
                                zn.y,
                                {
                                    uniqueKey: e,
                                    isEmpty: u,
                                    slotIndex: c,
                                    slotType: _,
                                    imageSource: i,
                                    itemInstalledSetupIdx: n,
                                },
                                l().createElement(
                                    Wn,
                                    { isEnabled: !(p || m || r || u || d), args: E },
                                    l().createElement('div', null, b),
                                ),
                            );
                        },
                    ),
                    Xn = ({
                        id: e,
                        intCD: t,
                        slotType: n,
                        imageSource: a,
                        isInstalled: s,
                        itemInstalledSetupIdx: r,
                        isMountedMoreThanOne: i,
                        overlayType: u,
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
                        onSlotClear: A,
                        panelType: C,
                        isDisabled: S = !1,
                        isBorderActive: D,
                        isIncompatible: F = !1,
                        grabberId: B,
                        containerRef: y,
                        activeDragId: k,
                        handleGrabberAction: T,
                        forceLeftUpdate: x,
                        potentialDropId: L,
                        blockOnGrabIds: N,
                        categoryImgSource: I,
                        contextMenuDisabled: R,
                    }) => {
                        const M = C === Ze.Setup,
                            O = !Qe(C),
                            P = C === Ze.Compare,
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
                            X = ln(G),
                            j = (0, o.useCallback)(() => {
                                S || X('');
                            }, [X, S]),
                            Y = (0, o.useCallback)(() => {
                                !p && !k && !S && nt.$.playHighlight();
                            }, [p, k, S]);
                        (0, o.useEffect)(() => {
                            L && nt.$.playHighlight();
                        }, [L]);
                        const U = (0, o.useCallback)(() => {
                                null == A || A(e, n);
                            }, [e, A, n]),
                            V = M && !s,
                            Z = Boolean(B && L === B),
                            q = B && (H || P),
                            K = `${n}-slot-${e}`,
                            J = I && I.length > 0,
                            Q = J ? { backgroundImage: `url(${I})` } : {},
                            ee = {
                                id: B,
                                containerRef: y,
                                isEnabled: !z,
                                onClick: j,
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
                                isDisabled: S,
                                isInstalled: s,
                                id: e,
                                itemInstalledSetupIdx: r,
                                isMountedMoreThanOne: i,
                                contextMenuDisabled: R,
                                isSetupSwitching: b,
                            };
                        return l().createElement(
                            'div',
                            { className: xn, onMouseEnter: Y, id: K },
                            (E || P) &&
                                !s &&
                                l().createElement(
                                    'div',
                                    { className: Nn },
                                    l().createElement(Tn, { id: `close-${K}`, show: !k, onClick: U }),
                                ),
                            l().createElement(
                                Dn,
                                { slotType: n, slotId: e, isEnabled: !k && Je(C) },
                                l().createElement(
                                    'div',
                                    { ref: W },
                                    l().createElement(
                                        rn.W,
                                        {
                                            activeDragId: k,
                                            slotType: n,
                                            isSelected: p,
                                            isBorderActive: Boolean(D),
                                            panelType: C,
                                            isDisabled: S,
                                            isPotentialDrop: Z,
                                            onClick: q ? void 0 : j,
                                        },
                                        O &&
                                            l().createElement(
                                                'div',
                                                { className: Ln },
                                                l().createElement(Sn, { text: c, show: Boolean(E), panelType: C }),
                                            ),
                                        l().createElement(
                                            sn.J,
                                            { when: Boolean(q), wrapper: hn, withProps: ee },
                                            l().createElement(
                                                sn.J,
                                                { when: O, wrapper: Gn, withProps: te },
                                                l().createElement(on.c, {
                                                    imageSource: a,
                                                    isIncompatible: F,
                                                    overlayType: u,
                                                    level: d,
                                                    isTemporary: V,
                                                    withAttention: g,
                                                }),
                                            ),
                                        ),
                                        J &&
                                            l().createElement(
                                                l().Fragment,
                                                null,
                                                l().createElement('span', { className: Rn }),
                                                l().createElement('span', { className: Mn, style: Q }),
                                            ),
                                        S && l().createElement('div', { className: In }),
                                    ),
                                ),
                            ),
                        );
                    },
                    jn = 'BattleAbilitySlot_base_74',
                    Yn = 'BattleAbilitySlot_rank_01',
                    Un = ['rank'];
                const Vn = (0, o.memo)((e) => {
                    let t = e.rank,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Un);
                    const a = (0, o.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                        s = c()(jn);
                    return l().createElement(
                        'div',
                        { className: s },
                        l().createElement(Xn, n),
                        t && l().createElement('div', { className: Yn, style: a }),
                    );
                });
                var Zn = n(4814);
                const qn = 'OptDeviceSlot_base_14',
                    Kn = 'OptDeviceSlot_specializations_c3',
                    Jn = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const Qn = (e) => {
                        let t = e.specializations,
                            n = e.activeSpecsMask,
                            a = e.isChangeSetupIndex,
                            s = e.isDynamic,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, Jn);
                        const i = $('model.ammunitionPanel', H.None).onSpecializationSelect,
                            o = r.panelType === Ze.Setup || r.panelType === Ze.Compare,
                            u = !Qe(r.panelType);
                        return l().createElement(
                            'div',
                            { className: c()(qn, t.length && !s && !a && 'specializationsSlot') },
                            u &&
                                l().createElement(
                                    'div',
                                    { className: Kn },
                                    l().createElement(Zn.G, {
                                        specializations: t,
                                        isDynamic: s,
                                        activeSpecsMask: n,
                                        isSpecializationActive: o,
                                        onSpecializationClick: (e) => {
                                            i({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            l().createElement(Xn, r),
                        );
                    },
                    ea = {
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
                    ta = ({ id: e, isSelected: t, isLocked: n, onSlotSelected: a, panelType: s }) => {
                        const r = et.yZ,
                            i = (0, o.useCallback)(() => {
                                a(r, e);
                            }, [e, a, r]),
                            u = c()(ea.base, ea[`base__${s}`], n && ea.base__disabled, t && ea.base__toggle),
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
                        return l().createElement(
                            Dn,
                            { slotType: r, slotId: e },
                            l().createElement(
                                'div',
                                { id: m, className: u, onClick: i, onMouseEnter: nt.$.playHighlight },
                                t && l().createElement('div', { className: ea.glow }),
                                l().createElement('div', { className: ea.image, style: _ }),
                                l().createElement('div', { className: ea.toggle, style: d }),
                            ),
                        );
                    },
                    na = ['value', 'sectionType'];
                function aa() {
                    return (
                        (aa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        aa.apply(this, arguments)
                    );
                }
                const sa = (e) => {
                        let t = e.value,
                            n = e.sectionType,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, na);
                        switch (n) {
                            case et.zn: {
                                const e = t;
                                return l().createElement(
                                    Qn,
                                    aa({}, e, a, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case et.yZ: {
                                const e = t;
                                return l().createElement(ta, aa({}, a, e));
                            }
                            case et.YN: {
                                const e = t;
                                return l().createElement(Vn, aa({}, a, e));
                            }
                            default:
                                return l().createElement(Xn, aa({}, a, t));
                        }
                    },
                    ra = 'Slots_base_27',
                    ia = ({
                        slots: e,
                        sectionType: t,
                        panelType: n,
                        isBorderActive: a,
                        onActiveSlotChanged: s,
                        isDisabled: r,
                        isBootCamp: i,
                        selectedSection: u,
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
                            A = h.onSlotClear,
                            C = (0, o.useCallback)(
                                (e, n) => {
                                    v({
                                        sectionType: t,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(n[n.length - 1]),
                                    });
                                },
                                [v, t],
                            ),
                            S = u === t,
                            D = S ? _ : -1,
                            F = `${t}-${e.length}slots`,
                            B = dt({
                                baseId: F,
                                slotsLength: e.length,
                                handleSwap: C,
                                setIsExitBlocked: b,
                                syncInitiator: d,
                            }),
                            y = B.handleGrabberAction,
                            w = B.dragState,
                            k = B.getForceCenterX;
                        (0, o.useEffect)(() => {
                            S && -1 !== D && E.current && s(E, u, D);
                        }, [s, S, u, D]);
                        const T = (e, t) => {
                                if ((r || nt.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                f({ selectedSlot: t, selectedSection: e });
                            },
                            x = (e) => {
                                E.current = e ? e.current : null;
                            },
                            L = (e, t) => {
                                A({ slotId: e, sectionType: t });
                            };
                        return l().createElement(
                            'div',
                            { id: F, ref: g, className: c()(ra, t) },
                            V.v(e, (u, c) => {
                                const _ = t === et.YN,
                                    d = !_ && e.length > 1 ? `${F}-${c}` : '';
                                return l().createElement(
                                    o.Fragment,
                                    { key: `${u.id}-${c}` },
                                    c > 0 && l().createElement(an, null),
                                    l().createElement(sa, {
                                        value: u,
                                        sectionType: t,
                                        panelType: n,
                                        isSelected: D === u.id,
                                        isSectionSelected: S,
                                        isDisabled: r,
                                        isBootCamp: i,
                                        isBorderActive: a,
                                        contextMenuDisabled: _,
                                        slotType: t,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: x,
                                        onSlotClear: L,
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
                    oa = ({
                        type: e,
                        slots: t,
                        newItemsCount: n,
                        isDisabled: a,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isBorderActive: i,
                        isBootCamp: u = !0,
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
                        setIsExitBlocked: A,
                    }) => {
                        const C = (0, o.useRef)(null),
                            S = (0, o.useState)(u),
                            D = S[0],
                            F = S[1],
                            B = (0, o.useMemo)(
                                () =>
                                    s === Ze.Setup
                                        ? e === et.mH
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === et.mH
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
                                            t === gt && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(B, gt);
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
                        }, [t.length, k, B, D]);
                        const T = At('AmmunitionPanelBattleAbilities', ft);
                        (0, o.useEffect)(() => {
                            null == T || T.runTrigger(!0);
                        }, [T]);
                        const x = _ === e,
                            L = _t(e, p),
                            N = L.selfId,
                            I = L.blockOnGrabIds;
                        (0, o.useEffect)(() => {
                            s === Ze.Hangar && F(u);
                        }, [s, u]),
                            (0, o.useEffect)(() => {
                                if (u && !D && b)
                                    return (0, w.v)(() => {
                                        b(), k && k.resize();
                                    });
                            }, [D, u, b, k]);
                        const M = m >= 0 && V.G(t, (e) => e.intCD > 0),
                            O = c()(
                                xt,
                                v,
                                D && Lt,
                                x && 'sectionSelected',
                                t.length > 1 && 'multiSlot',
                                M && 'existFilledSlots',
                            ),
                            P = ((E && E.length > 0) || (g && g.length > 0)) && s !== Ze.Battle && s !== Ze.Respawn,
                            H = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            W = (0, o.useMemo)(
                                () => ({ icon: l().createElement('span', { className: Ot, style: H }), vehicle: E }),
                                [H, E],
                            ),
                            z = t.length > 0 && s !== Ze.Compare && s !== Ze.Battle && s !== Ze.Respawn && t.length > 0,
                            G = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof G)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return l().createElement(
                            'div',
                            { id: h ? Tt : N, ref: C, className: O },
                            P &&
                                l().createElement(
                                    tn,
                                    { className: Rt },
                                    l().createElement(_e, {
                                        classMix: Mt,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: W,
                                    }),
                                ),
                            z &&
                                l().createElement(
                                    'div',
                                    { className: Nt },
                                    l().createElement(kt, { text: G, parentRef: C, show: !x, panelType: s }),
                                ),
                            l().createElement(ia, {
                                slots: t,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: i,
                                onActiveSlotChanged: r,
                                isDisabled: a,
                                isBootCamp: u,
                                syncInitiator: m,
                                selectedSection: _,
                                selectedSlot: d,
                                blockOnGrabIds: I,
                                isChangeSetupIndex: f,
                                setIsExitBlocked: A,
                            }),
                            Boolean(n) &&
                                l().createElement(
                                    'div',
                                    { className: It },
                                    l().createElement(Et, { value: n, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    };
                var la = n(8598);
                const ua = 'ShellsSlot_base_05',
                    ca = 'ShellsSlot_shell_ab',
                    _a = 'ShellsSlot_shell__grabbing_98',
                    da = 'ShellsSlot_shell__active_7e',
                    ma = 'ShellsSlot_shell__potential_30',
                    pa = 'ShellsSlot_label_da',
                    ba = 'ShellsSlot_image_3f',
                    Ea = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isSelected: r,
                        keyName: i,
                        panelType: u,
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
                        shellState: A,
                        isDisabled: C,
                    }) => {
                        const S = !Qe(u),
                            D = (0, o.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            F = m && m === f,
                            B = m && m === E,
                            y = (0, o.useMemo)(() => {
                                const a = { slotType: et.g9, slotId: e, fieldType: 1, intCD: _ };
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
                            T = c()(ca, !E && S && !C && da, B && _a, !B && F && ma),
                            x = (0, o.useMemo)(
                                () => ({
                                    id: m,
                                    containerRef: b,
                                    isEnabled: Boolean(m) && r,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: g,
                                    forceCenterX: h,
                                    blockOnGrabIds: v,
                                }),
                                [E, v, b, h, m, g, r],
                            ),
                            L = (0, o.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: et.g9, imageSource: null }),
                                [_, d],
                            );
                        return l().createElement(
                            Wn,
                            { isEnabled: S && !p && !C, args: k },
                            l().createElement(
                                Fe.t,
                                { args: w, isEnabled: !E && Je(u) },
                                l().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: ua },
                                    i &&
                                        l().createElement(
                                            'div',
                                            { className: pa },
                                            l().createElement(Sn, {
                                                text: i,
                                                show: r || u === Ze.Battle || u === Ze.Respawn,
                                                shellState: A,
                                                panelType: u,
                                            }),
                                        ),
                                    l().createElement(
                                        'div',
                                        { className: T },
                                        l().createElement(
                                            sn.J,
                                            { when: S, wrapper: hn, withProps: x },
                                            l().createElement(
                                                sn.J,
                                                { when: S, wrapper: zn.y, withProps: L },
                                                l().createElement('div', { className: ba, style: D }),
                                                l().createElement(la.X, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    ga = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    ha = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a }) => {
                        const s = (0, o.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            r = c()(ga.slot, !t && ga.slot__active, ga.slot__compare),
                            i = (0, o.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            u = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return l().createElement(
                            Dn,
                            { slotType: et.WI, slotId: e },
                            l().createElement(
                                'div',
                                { className: ga.base },
                                l().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    t && l().createElement('div', { className: ga.glow }),
                                    l().createElement('div', { className: ga.image, style: i }),
                                    l().createElement('div', { className: ga.toggle, style: u }),
                                ),
                            ),
                        );
                    },
                    fa = 'Shells_base_f9',
                    va = 'Shells_shell_3f',
                    Aa = 'Shells_shell__compressed_2e';
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                const Sa = ({
                        shells: e,
                        panelType: t,
                        onSelected: n,
                        isCompare: a,
                        isSelected: s,
                        syncInitiator: r,
                        blockOnGrabIds: i,
                        isDisabled: u,
                        isSetupSwitching: _,
                        setIsExitBlocked: d,
                    }) => {
                        const m = $('model.ammunitionPanel', H.None),
                            p = m.onSectionSelect,
                            b = m.onDragDropSwap,
                            E = (0, o.useRef)(!1),
                            g = (0, o.useRef)(null),
                            h = a ? et.WI : et.g9,
                            f = `${h}-${e.length}shells`,
                            v = (0, o.useCallback)(
                                (e) => {
                                    p({ selectedSlot: e, selectedSection: h }), nt.$.playClick();
                                },
                                [p, h],
                            ),
                            A = (0, o.useCallback)(() => {
                                s || a || u || _ || v(0);
                            }, [s, a, _, u, v]),
                            C = (0, o.useCallback)(
                                (e, t) => {
                                    b({
                                        sectionType: h,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [b, h],
                            ),
                            S = dt({
                                baseId: f,
                                slotsLength: e.length,
                                handleSwap: C,
                                setIsExitBlocked: d,
                                syncInitiator: r,
                            }),
                            D = S.handleGrabberAction,
                            F = S.dragState,
                            B = S.getForceCenterX;
                        return (
                            (0, o.useEffect)(
                                () =>
                                    (0, w.v)(() => {
                                        E.current = !0;
                                    }),
                                [],
                            ),
                            (0, o.useEffect)(() => {
                                if (s && t === Ze.Setup) {
                                    if (!E.current)
                                        return (0, w.v)(() => {
                                            n();
                                        });
                                    n();
                                }
                            }, [s, t, n]),
                            l().createElement(
                                'div',
                                {
                                    id: f,
                                    ref: g,
                                    className: fa,
                                    onClick: A,
                                    onMouseEnter: () => {
                                        u || nt.$.playHighlight();
                                    },
                                },
                                V.v(e, (n, r) => {
                                    if (qe(n)) return null;
                                    const o = !a && e.length > 1 ? `${f}-${n.id}` : '';
                                    return l().createElement(
                                        'div',
                                        { key: n.id, className: c()(va, !a && 0 !== r && Aa) },
                                        a
                                            ? l().createElement(ha, Ca({}, n, { onSlotSelected: v }))
                                            : l().createElement(
                                                  Ea,
                                                  Ca({}, n, {
                                                      slotIndex: r,
                                                      isSetupSwitching: _,
                                                      isSelected: s,
                                                      panelType: t,
                                                      grabberId: o,
                                                      containerRef: g,
                                                      forceLeftUpdate: B(o),
                                                      activeDragId: F.activeDragId,
                                                      handleGrabberAction: D,
                                                      potentialDropId: F.potentialDropId,
                                                      blockOnGrabIds: i,
                                                      isDisabled: u,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    Da = {
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
                    Fa = [Ze.Hangar, Ze.Battle, Ze.Prebattle, Ze.Respawn],
                    Ba = ({
                        slots: e,
                        ammoNotFull: t,
                        type: n,
                        sectionsIds: a,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isDisabled: i,
                        isBorderActive: u,
                        selectedSection: _,
                        syncInitiator: d,
                        classMix: m,
                        isSetupSwitching: p,
                        setIsExitBlocked: b,
                        newItemsCount: E,
                    }) => {
                        const g = (0, o.useRef)(null),
                            h = s === Ze.Compare,
                            f = _ === n,
                            v = (0, o.useCallback)(() => {
                                r(g, _, 0);
                            }, [r, _]),
                            A = _t(n, a),
                            C = A.selfId,
                            S = A.blockOnGrabIds,
                            D = ((e) => Fa.includes(e))(s) && !i && t,
                            F = V.hX(e, (e) => Boolean(e) && !qe(e)).length,
                            B = (0, o.useMemo)(() => {
                                if (!D) return null;
                                const e = c()(Da.border, 2 === F && Da.border__double, 3 === F && Da.border__triple);
                                return l().createElement('div', { className: e });
                            }, [D, F]),
                            y = c()(
                                Da.base,
                                m,
                                Da[`base__${s}`],
                                !u && f && Da.base__selected,
                                h && Da.base__compare,
                                i && Da.base__disabled,
                            ),
                            w = !h && s !== Ze.Battle && s !== Ze.Respawn;
                        return l().createElement(
                            'div',
                            { id: p ? Tt : C, className: y, ref: g },
                            D && l().createElement('div', { className: Da.attention }),
                            w &&
                                l().createElement(
                                    'div',
                                    { className: Da.label },
                                    l().createElement(kt, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: g,
                                        show: !f,
                                        panelType: s,
                                    }),
                                ),
                            B,
                            l().createElement(Sa, {
                                shells: e,
                                panelType: s,
                                onSelected: v,
                                isSelected: f,
                                isCompare: h,
                                syncInitiator: d,
                                blockOnGrabIds: S,
                                isDisabled: i,
                                isSetupSwitching: p,
                                setIsExitBlocked: b,
                            }),
                            Boolean(E) &&
                                l().createElement(
                                    'div',
                                    { className: Da.counter },
                                    l().createElement(Et, { value: E, size: 'small', fadeInAnimation: !0 }),
                                ),
                            i && l().createElement('div', { className: Da.disabled }),
                        );
                    },
                    ya = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function wa() {
                    return (
                        (wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        wa.apply(this, arguments)
                    );
                }
                const ka = ({
                        panelType: e,
                        isDisabled: t = !1,
                        onActiveSlotChanged: n,
                        isBorderActive: a,
                        isBootCamp: s = !1,
                        sections: r,
                        selectedSection: i,
                        selectedSlot: o,
                        syncInitiator: u,
                        ammoNotFull: _,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: m,
                        setIsExitBlocked: p,
                    }) => {
                        const b = U(['section'], ya),
                            E = V.v(r, (e) => ct(e.type)),
                            g = {
                                panelType: e,
                                isDisabled: t,
                                onActiveSlotChanged: n,
                                isBorderActive: a,
                                selectedSection: i,
                                selectedSlot: o,
                                syncInitiator: u,
                                sectionsIds: E,
                                isChangeSetupIndex: m,
                                setIsExitBlocked: p,
                            };
                        return l().createElement(
                            'div',
                            { className: ya.base },
                            V.v(r, (t, n) => {
                                if (!t.slots || !t.slots.length) return null;
                                const a = c()(
                                        b.section,
                                        0 !== n && Qe(e) && ya.section__battle,
                                        0 === n && ya.section__first,
                                    ),
                                    r = V.UI(t.slots, (e) => Object.assign({}, e));
                                if (t.type === et.g9 || t.type === et.WI) {
                                    const e = t;
                                    return l().createElement(
                                        Ba,
                                        wa({}, e, g, {
                                            isSetupSwitching: m,
                                            slots: r,
                                            key: `${t.name}${n}${t.slots.length}`,
                                            classMix: a,
                                            ammoNotFull: _,
                                        }),
                                    );
                                }
                                return l().createElement(
                                    oa,
                                    wa({}, t, g, {
                                        isSetupSwitching: m,
                                        slots: r,
                                        key: `${t.name}${n}${t.slots.length}`,
                                        classMix: a,
                                        isBootCamp: s,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    Ta = 'KeyboardKey_base_57',
                    xa = 'KeyboardKey_back_43',
                    La = l().memo(({ text: e }) =>
                        l().createElement('div', { className: Ta }, l().createElement('div', { className: xa }, e)),
                    ),
                    Na = 'SetupSwitchHotkey_base_4c',
                    Ia = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Ra = 'SetupSwitchHotkey_plusWrapper_f0',
                    Ma = 'SetupSwitchHotkey_plus_f0',
                    Oa = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Pa = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ha = l().memo(({ hotKeys: e }) =>
                        l().createElement(
                            'div',
                            { className: Na },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? l().createElement(La, { key: t, text: n })
                                    : l().createElement(
                                          'div',
                                          { key: t, className: Ia },
                                          l().createElement(
                                              'div',
                                              { className: Ra },
                                              l().createElement('div', { className: `${Ma} ${Oa}` }),
                                              l().createElement('div', { className: `${Ma} ${Pa}` }),
                                          ),
                                          l().createElement(La, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    $a = {
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
                const za = (e) => e.setupSelector.hotKeys,
                    Ga = (e) =>
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
                    Xa = ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                        const r = U(['switch'], $a),
                            i = $('model'),
                            u = i.isDisabled,
                            _ = i.vehicleInfo,
                            d = $('model.ammunitionPanel'),
                            m = d.sectionGroups,
                            p = d.onChangeSetupIndex,
                            b = d.selectedSection,
                            E = d.selectedSlot,
                            g = d.syncInitiator,
                            h = d.ammoNotFull,
                            f = null == _ ? void 0 : _.vehicleName,
                            v =
                                ((A = m),
                                V.DZ(
                                    A,
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
                                            sections: V.v(e.sections, Ga),
                                        }),
                                ));
                        var A;
                        (0, o.useEffect)(() => {
                            (e.panelType !== Ze.Hangar && e.panelType !== Ze.Setup) || !n || a(!1);
                        }, [n, e.panelType, a]),
                            (0, o.useEffect)(() => {
                                e.panelType === Ze.Respawn && a(!1);
                            }, [f, e.panelType, a]);
                        const C = (0, o.useCallback)(
                                (t) => {
                                    e.panelType === Ze.Respawn && a(!0), p(t);
                                },
                                [p, e.panelType, a],
                            ),
                            S = (e.panelType !== Ze.Respawn && n) || (e.panelType === Ze.Respawn && t);
                        return l().createElement(
                            'div',
                            { className: $a.base },
                            V.UI(v, (n) => {
                                const s = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${n.groupId}`,
                                );
                                return l().createElement(
                                    'div',
                                    { key: n.groupId, className: $a.group },
                                    l().createElement(
                                        'div',
                                        { className: $a.groupWrapper },
                                        l().createElement(
                                            Ve,
                                            Wa(
                                                { disabled: !S && Boolean(e.isBootCamp) },
                                                ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(n, a),
                                            ),
                                            l().createElement(
                                                ka,
                                                Wa({}, e, {
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
                                            l().createElement(
                                                'div',
                                                { className: c()(r.switch, Ke(e.panelType) && $a.switch__battle) },
                                                l().createElement(ze._, {
                                                    states: n.setupSelector.states,
                                                    onClick: C,
                                                    totalCount: n.totalCount,
                                                    currentIndex: n.currentIndex,
                                                    groupId: n.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                n.setupSelector.isPrebattleSwitchDisabled &&
                                                    l().createElement(
                                                        Be.i,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof s ? s : void 0,
                                                        },
                                                        l().createElement('div', {
                                                            className: $a.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((i = n),
                                    ((o = e.panelType) === Ze.Battle || o === Ze.Respawn) &&
                                        i.setupSelector.isSwitchEnabled &&
                                        za(i) &&
                                        l().createElement(
                                            'div',
                                            { className: c()($a.hint, u && $a.hint__disabled) },
                                            l().createElement(Ha, { hotKeys: za(n) }),
                                        )),
                                );
                                var i, o;
                            }),
                            s,
                        );
                    },
                    ja = 'RoleSkillSlot_base_c4',
                    Ya = 'RoleSkillSlot_icon_79',
                    Ua = ({
                        roleSkill: e,
                        roleName: t,
                        tooltipId: n,
                        tooltipHeader: a,
                        tooltipBody: s,
                        className: r,
                    }) => {
                        const i = (0, o.useMemo)(
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
                        return l().createElement(
                            ke,
                            { tooltipArgs: i, className: c()(ja, r) },
                            l().createElement('div', {
                                className: Ya,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Va = 'SlotGlow_base_40',
                    Za = 'SlotGlow_glow_a9',
                    qa = 'SlotGlow_glow__shown_f2',
                    Ka = 'SlotGlow_glow__hidden_94',
                    Ja = (0, o.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, o.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            i = a[1],
                            u = (0, o.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, o.useEffect)(() => {
                            let n = u.current.initialized;
                            !n && e && ((n = !0), i({ offset: e, slotWidth: t })),
                                (u.current = { initialized: n, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, o.useEffect)(() => {
                                n || i(u.current);
                            }, [n]);
                        const _ = (0, o.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${r.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !n && s.offset === u.current.offset,
                            m = c()(Za, d ? qa : Ka);
                        return l().createElement(
                            'div',
                            { className: Va },
                            u.current.initialized && l().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    Qa = ({
                        show: e = !0,
                        isReady: t = !0,
                        panelType: n,
                        isBootCamp: a = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: i,
                        onResize: u,
                        setIsExitBlocked: _,
                    }) => {
                        const d = $('model.ammunitionPanel'),
                            m = d.isSetupSwitchInProgress,
                            p = d.syncInitiator,
                            b = d.sectionGroups,
                            E = d.onSectionResized,
                            g = V.u4(b, (e, t) => e + t.sections.length, 0),
                            h = $('model.roleSkillSlot'),
                            f = $('model.abilitySlot'),
                            v = (0, o.useState)(!1),
                            A = v[0],
                            C = v[1],
                            S = (0, o.useRef)(!1),
                            D = (0, o.useState)({ slotWidth: 0, slotOffset: 0 }),
                            F = D[0],
                            B = D[1],
                            y = (0, o.useState)(!1),
                            k = y[0],
                            T = y[1],
                            x = (0, o.useRef)(null),
                            L = X(),
                            N = (0, o.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            I = (0, o.useCallback)(
                                (e, t) => {
                                    if (A || m || a || n !== Ze.Hangar) return;
                                    const s = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    E(Object.assign({ sectionType: e }, s)), L && (L.freeze(), L.resize());
                                },
                                [A, m, a, n, E, L],
                            ),
                            R = (0, o.useCallback)(
                                (e) => {
                                    I('main', e);
                                },
                                [I],
                            );
                        ((e, t, n, a = []) => {
                            const s = Z(
                                () =>
                                    (0, w.v)(() =>
                                        (0, w.v)(() => {
                                            if (e.current) {
                                                const n = e.current.getBoundingClientRect(),
                                                    a = {
                                                        width: r.O.view.pxToRem(n.width),
                                                        height: r.O.view.pxToRem(n.height),
                                                        offsetX: r.O.view.pxToRem(n.left),
                                                        offsetY: r.O.view.pxToRem(n.top),
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
                        })(x, R, !0, [p]),
                            (0, o.useEffect)(() => () => R(), [R]);
                        const M = (0, o.useCallback)(() => {
                                T(!1);
                            }, []),
                            O = (0, o.useCallback)(() => {
                                if (N.current.element && x.current) {
                                    const e = N.current.element.getBoundingClientRect(),
                                        t = x.current.getBoundingClientRect();
                                    B({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, []),
                            P = (0, o.useCallback)(
                                (e, t, n) => {
                                    if (e.current && x.current) {
                                        const a = ((e, t, n) =>
                                            e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, N);
                                        (N.current.element = e.current),
                                            (N.current.slotIndex = n),
                                            (N.current.sectionIndex = t),
                                            S.current && a ? T(!0) : (S.current = !0),
                                            N.current.generation && O();
                                    }
                                },
                                [O],
                            ),
                            H = (0, o.useCallback)(
                                () =>
                                    (0, w.v)(() => {
                                        (N.current.generation += 1), O();
                                    }),
                                [N, O],
                            );
                        (0, o.useEffect)(() => (0, w.v)(H), [H]),
                            (0, o.useEffect)(
                                () => (
                                    engine.on('clientResized', H),
                                    () => {
                                        engine.off('clientResized', H);
                                    }
                                ),
                                [H],
                            );
                        const W = (0, o.useCallback)(() => {
                                (N.current.generation += 1),
                                    g >= N.current.generation && (null == i || i(), null == u || u()),
                                    O();
                            }, [i, u, g, O]),
                            z = F.slotWidth,
                            G = F.slotOffset,
                            j = c()(Ie.base, !t && Ie.base__locked, !e && Ie.base__hidden, s && Ie.base__disabled),
                            Y = c()(Ie.border, !k && Ie.border__hidden),
                            q = n === Ze.Setup || n === Ze.Compare,
                            K = {
                                panelType: n,
                                isDisabled: s,
                                onActiveSlotChanged: P,
                                isBorderActive: k,
                                isBootCamp: a,
                                onBootcampPanelAppear: W,
                                setIsExitBlocked: _,
                            };
                        (0, o.useEffect)(() => {
                            !1 === a && (null == u || u());
                        }, [u, h.roleSkill, f.ability, a]);
                        const J = U(['roleSkillSlot', 'abilitySkillSlot'], Ie);
                        return l().createElement(
                            'div',
                            { ref: x, className: j },
                            q &&
                                l().createElement(Ja, {
                                    key: N.current.generation,
                                    slotOffset: G,
                                    slotWidth: z,
                                    isAnimationRunning: k,
                                }),
                            l().createElement(
                                Xa,
                                { isSetupSwitching: m || A, sectionProps: K, isReady: t, setSetupSwitching: C },
                                h.roleSkill &&
                                    l().createElement(Ua, {
                                        roleSkill: h.roleSkill,
                                        roleName: h.roleName,
                                        tooltipId: h.tooltipId,
                                        tooltipHeader: h.tooltipHeader,
                                        tooltipBody: h.tooltipBody,
                                        className: c()(Ie.roleSkillSlot, Ie[`roleSkillSlot__${n}`], J.roleSkillSlot),
                                    }),
                                f.ability &&
                                    l().createElement(Ne, {
                                        skillName: f.ability,
                                        tooltipId: f.tooltipId,
                                        tooltipHeader: f.tooltipHeader,
                                        tooltipBody: f.tooltipBody,
                                        className: c()(
                                            Ie.abilitySkillSlot,
                                            Ie[`abilitySkillSlot__${n}`],
                                            J.abilitySkillSlot,
                                        ),
                                    }),
                            ),
                            q &&
                                l().createElement(
                                    'div',
                                    { className: Y },
                                    l().createElement(He, { slotWidth: z, slotOffset: G, onAnimationEnd: M }),
                                ),
                        );
                    };
                var es = n(8089);
                const ts = 'model.tankSetup.frontlineSetup',
                    ns = {
                        base__standalone: 'InfoButton_base__standalone_e2',
                        base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                        hidden: 'InfoButton_hidden_7e',
                    };
                let as;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })(as || (as = {}));
                const ss = l().memo(function ({ theme: e, className: t }) {
                    const n = $(ts).showInfoPage,
                        a = (0, o.useCallback)(() => n(), [n]),
                        s = (0, o.useMemo)(() => ({ caption: c()(e === as.OnlyIcon && ns.hidden) }), [e]);
                    return l().createElement(
                        'div',
                        { className: c()(ns.base, ns[`base__${e}`], t) },
                        l().createElement(es.A, {
                            caption: e === as.Standalone ? R.strings.tank_setup.abilities.actions.toInfoPage() : '',
                            type: 'info',
                            side: 'left',
                            onClick: a,
                            classNames: s,
                        }),
                    );
                });
                var rs = n(1922),
                    is = n(2262),
                    os = n(7208),
                    ls = n(8982);
                const us = {
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
                var cs = n(3457);
                const _s = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let ds, ms;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(ds || (ds = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(ms || (ms = {}));
                const ps = l().memo(function ({ value: e, className: t, theme: n, size: a }) {
                        return l().createElement(
                            'div',
                            { className: c()(_s.base, _s[`base__${n}`], _s[`base__${a}`], t) },
                            l().createElement('div', { className: _s.label }, e),
                            l().createElement('div', { className: _s.icon }),
                        );
                    }),
                    bs = l().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return l().createElement(
                            ye.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            l().createElement('div', null, n),
                        );
                    }),
                    Es = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    gs = l().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const s = { pointsNeeded: e - (0, o.useContext)(Yo), isEnabled: !t };
                        return l().createElement(
                            'div',
                            { className: c()(Es.base, t && Es.base__isAvailable) },
                            l().createElement(
                                bs,
                                s,
                                l().createElement(
                                    'div',
                                    { className: Es.priceContainer },
                                    l().createElement(
                                        'div',
                                        { className: Es.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    l().createElement(ps, { value: e, theme: t ? ms.Brown : ms.Red, size: ds.Big }),
                                ),
                            ),
                            l().createElement(
                                'div',
                                { className: Es.actions },
                                l().createElement(
                                    bs,
                                    s,
                                    l().createElement(
                                        cs.u5,
                                        {
                                            size: cs.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: c()(Es.purchaseButton, Es.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                l().createElement(
                                    cs.u5,
                                    { size: cs.qE.medium, type: cs.L$.secondary, mixClass: Es.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function hs() {
                    return (
                        (hs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        hs.apply(this, arguments)
                    );
                }
                const fs = () => {
                        const e = (0, rs.GS)(),
                            t = (0, o.useContext)(Yo),
                            n = $(ts),
                            a = n.isTypeSelected,
                            s = n.vehicleType,
                            r = n.onChangeApplyAbilitiesToTypeSettings,
                            i = n.onDealConfirmed,
                            u = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = $(`${ts}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            E = m.canCancel,
                            g = (0, Y.BN)(s),
                            h = (0, o.useCallback)(() => r(), [r]),
                            f = (0, o.useCallback)(() => i(), [i]),
                            v = (0, o.useCallback)(() => u(), [u]),
                            A = (0, o.useCallback)(() => d(), [d]),
                            C = c()(us.base, e && us[`base__${e}`]),
                            S = c()(us.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            D = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: g
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(g)})`
                                        : '',
                                }),
                                [g],
                            ),
                            F = (0, o.useMemo)(
                                () => ({
                                    icon: l().createElement('span', { className: us.vehicleIcon, style: D }),
                                    vehicle: R.strings.menu.classes.short.$dyn(g),
                                }),
                                [D, g],
                            ),
                            B = At('ShowAbilitiesButton', vt);
                        (0, o.useEffect)(() => {
                            B && B.runTrigger(!0);
                        }, [B]);
                        const y = At('ApplyAbilitiesToTypeCheckbox', vt);
                        (0, o.useEffect)(() => {
                            y && y.runTrigger(!0);
                        }, [y]);
                        const w = Jt(Wt, { item: Gt.AbilitiesCheckboxTooltip, parentScreen: zt.SetupView }),
                            k = _ > 0,
                            T = !k && b;
                        return l().createElement(
                            'div',
                            { className: C },
                            T &&
                                l().createElement(
                                    'div',
                                    { className: S },
                                    l().createElement(
                                        Be.i,
                                        hs(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(g) },
                                            w,
                                        ),
                                        l().createElement(
                                            'div',
                                            { className: us.checkBoxZone },
                                            l().createElement(
                                                is.XZ,
                                                { isChecked: a, onChange: h, type: is.Rh.main, size: is.yB.medium },
                                                l().createElement(
                                                    'span',
                                                    { className: us.checkBoxLabel },
                                                    l().createElement(_e, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            l().createElement(
                                os.f,
                                { when: !0, canAccept: k || T },
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    k &&
                                        l().createElement(gs, {
                                            price: _,
                                            isAvailable: t >= _,
                                            onPurchase: A,
                                            onCancel: v,
                                        }),
                                    T &&
                                        l().createElement(ls.Z, {
                                            applyBtnString: a ? et.qZ : et.k4,
                                            isDisabled: p,
                                            canCancel: E,
                                            onCancel: v,
                                            onConfirm: f,
                                        }),
                                ),
                            ),
                        );
                    },
                    vs = (e, t, n) => (n < e ? e : n > t ? t : n);
                function As(e, t, n = []) {
                    const a = (0, o.useRef)(0),
                        s = (0, o.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, o.useEffect)(() => s, [s]);
                    const r = (null != n ? n : []).concat([t]);
                    return [
                        (0, o.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, r),
                        s,
                    ];
                }
                function Cs(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ss(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ss(e, t);
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
                function Ss(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ds(e, t, n) {
                    const a = (0, o.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let s,
                                    r = !1,
                                    i = 0;
                                function o() {
                                    s && clearTimeout(s);
                                }
                                function l(...l) {
                                    const u = this,
                                        c = Date.now() - i;
                                    function _() {
                                        (i = Date.now()), n.apply(u, l);
                                    }
                                    r ||
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
                                    (l.cancel = function () {
                                        o(), (r = !0);
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return (0, o.useEffect)(() => a.cancel, [a]), a;
                }
                var Fs = n(7030);
                let Bs;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Bs || (Bs = {}));
                const ys = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ws = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const l = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                r = a[1];
                            return vs(s, r, n);
                        };
                        return (u = {}) => {
                            const c = u.settings,
                                _ = void 0 === c ? ys : c,
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
                                            for (var a, s = Cs(t(e).values()); !(a = s()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, o.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = Ds(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, Fs.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), p.trigger('change', e), i && b());
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
                                            r = (null != (a = g.scrollPosition.goal) ? a : 0) - s;
                                        return l(e, t * n + r + s);
                                    },
                                    [g.scrollPosition],
                                ),
                                v = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: l(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: l(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, g.scrollPosition],
                                ),
                                A = (0, o.useCallback)(
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
                                            r = f(t, e, a);
                                        v(r);
                                    },
                                    [v, f, _.step],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            d.current && p.trigger('mouseWheel', e, g.scrollPosition, t(d.current));
                                    },
                                    [g.scrollPosition, A, p],
                                ),
                                S = Z(
                                    () =>
                                        (0, w.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (v(l(e, g.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [v, g.scrollPosition.goal],
                                ),
                                D = z(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = l(e, g.scrollPosition.goal);
                                    t !== g.scrollPosition.goal && v(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
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
                                    clampPosition: l,
                                    handleMouseWheel: C,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: g,
                                    recalculateContent: D,
                                    events: { on: p.on, off: p.off },
                                }),
                                [g.scrollPosition, v, A, p.off, p.on, D, C, h, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ks = ws({
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
                        getDirection: (e) => (e.deltaY > 1 ? Bs.Next : Bs.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ts = 'HorizontalBar_base_49',
                    xs = 'HorizontalBar_base__nonActive_82',
                    Ls = 'HorizontalBar_leftButton_5f',
                    Ns = 'HorizontalBar_rightButton_03',
                    Is = 'HorizontalBar_track_0d',
                    Rs = 'HorizontalBar_thumb_fd',
                    Ms = 'HorizontalBar_rail_32',
                    Os = 'disable',
                    Ps = { pending: !1, offset: 0 },
                    Hs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    $s = () => {},
                    Ws = (e, t) => Math.max(20, e.offsetWidth * t),
                    zs = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Hs, onDrag: a = $s }) => {
                        const s = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            u = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, o.useState)(Ps),
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
                                const t = u.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / s),
                                    c = vs(0, 1, o / (s - a)),
                                    d = (t.offsetWidth - Ws(t, l)) * c;
                                (n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && u.current && _.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Os), void i.current.classList.remove(Os);
                                            if (
                                                ((t = u.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(Os), void i.current.classList.add(Os);
                                            var t, n;
                                            r.current.classList.remove(Os), i.current.classList.remove(Os);
                                        }
                                    })(d);
                            },
                            h = z(() => {
                                (() => {
                                    const t = _.current,
                                        n = u.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && n)) return;
                                    const i = Math.min(1, a / r);
                                    (t.style.width = `${Ws(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === i ? s.current.classList.add(xs) : s.current.classList.remove(xs));
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
                                        let n = $s;
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
                                        const r = u.current,
                                            i = _.current;
                                        if (!s || !r || !i) return;
                                        const o = t.screenX - p.offset - r.getBoundingClientRect().x,
                                            l = (o / r.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: l });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), E(Ps);
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
                        const f = As((t) => e.applyStepTo(t), d, [e]),
                            v = f[0],
                            A = f[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Os) || (0, nt.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: c()(Ts, t.base), ref: s, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: c()(Ls, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Os) ||
                                        0 !== e.button ||
                                        ((0, nt.G)('play'), v(Bs.Next));
                                },
                                onMouseUp: A,
                                ref: r,
                                onMouseEnter: C,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: c()(Is, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, nt.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = _.current,
                                                        s = e.contentRef.current;
                                                    if (!a || !s) return;
                                                    const r = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Bs.Prev : Bs.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: C,
                                },
                                l().createElement('div', { ref: _, className: c()(Rs, t.thumb) }),
                                l().createElement('div', { className: c()(Ms, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: c()(Ns, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Os) ||
                                        0 !== e.button ||
                                        ((0, nt.G)('play'), v(Bs.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Gs = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Xs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: u,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(Gs.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: c()(Gs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: c()(Gs.defaultScrollArea, s) },
                                l().createElement(js, { className: i, api: m, classNames: r }, e),
                            ),
                            l().createElement(zs, { getStepByRailClick: u, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    js = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: c()(Gs.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: c()(Gs.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: c()(Gs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (js.Bar = zs),
                    (js.Default = Xs),
                    (js.SeniorityAwards = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: c()(Gs.base, t) },
                            l().createElement(
                                'div',
                                { className: c()(Gs.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                l().createElement(
                                    'div',
                                    { className: c()(Gs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    ));
                const Ys = ws({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Bs.Next : Bs.Prev),
                    }),
                    Us = 'VerticalBar_base_f3',
                    Vs = 'VerticalBar_base__nonActive_42',
                    Zs = 'VerticalBar_topButton_d7',
                    qs = 'VerticalBar_bottomButton_06',
                    Ks = 'VerticalBar_track_df',
                    Js = 'VerticalBar_thumb_32',
                    Qs = 'VerticalBar_rail_43',
                    er = 'disable',
                    tr = () => {},
                    nr = { pending: !1, offset: 0 },
                    ar = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    sr = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    rr = (e, t) => Math.max(20, e.offsetHeight * t),
                    ir = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ar, onDrag: a = tr }) => {
                        const s = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            u = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, o.useState)(nr),
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
                                    n = u.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && n)) return;
                                const i = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${rr(n, i)}px`),
                                    t.classList.add(Js),
                                    s.current &&
                                        (1 === i ? s.current.classList.add(Vs) : s.current.classList.remove(Vs)),
                                    i
                                );
                            }),
                            h = z(() => {
                                const t = u.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / s),
                                    c = vs(0, 1, o / (s - a)),
                                    d = (t.offsetHeight - rr(t, l)) * c;
                                (n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && u.current && _.current) {
                                            if (0 === e)
                                                return r.current.classList.add(er), void i.current.classList.remove(er);
                                            if (
                                                ((t = u.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(er), void i.current.classList.add(er);
                                            var t, n;
                                            r.current.classList.remove(er), i.current.classList.remove(er);
                                        }
                                    })(d);
                            }),
                            f = z(() => {
                                sr(e, () => {
                                    g(), h();
                                });
                            });
                        (0, o.useEffect)(() => (0, w.v)(f)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    sr(e, () => {
                                        h();
                                    });
                                };
                                let n = tr;
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
                                        sr(e, (n) => {
                                            const s = u.current,
                                                r = _.current,
                                                i = e.getContainerSize();
                                            if (!s || !r || !i) return;
                                            const o = t.screenY - p.offset - s.getBoundingClientRect().y,
                                                l = (o / s.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: l });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), E(nr);
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
                        const v = As((t) => e.applyStepTo(t), d, [e]),
                            A = v[0],
                            C = v[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const S = (e) => {
                            e.target.classList.contains(er) || (0, nt.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: c()(Us, t.base), ref: s, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: c()(Zs, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(er) ||
                                        0 !== e.button ||
                                        ((0, nt.G)('play'), A(Bs.Next));
                                },
                                ref: r,
                                onMouseEnter: S,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: c()(Ks, t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        if (a && 0 === t.button)
                                            if (((0, nt.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    _.current &&
                                                        sr(e, (a) => {
                                                            if (!a) return;
                                                            const s = n(e),
                                                                r = e.clampPosition(a, a.scrollTop + s * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Bs.Prev : Bs.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: S,
                                },
                                l().createElement('div', { ref: _, className: t.thumb }),
                                l().createElement('div', { className: c()(Qs, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: c()(qs, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(er) ||
                                        0 !== e.button ||
                                        ((0, nt.G)('play'), A(Bs.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    or = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    lr = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: u,
                        onDrag: _,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(or.base, e.base) });
                            }, [a]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: c()(or.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: c()(or.area, s) },
                                l().createElement(ur, { className: r, classNames: i, api: m }, e),
                            ),
                            l().createElement(ir, { getStepByRailClick: u, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ur = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, o.useEffect)(() => (0, w.v)(a.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: c()(or.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: c()(or.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                ur.Default = lr;
                const cr = { Vertical: s, Horizontal: a },
                    _r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    dr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const mr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    pr = (e) =>
                        mr
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = dr.length - 1; n >= 0; n--)
                                      for (; e >= dr[n]; ) (t += _r[n]), (e -= dr[n]);
                                  return t;
                              })(e),
                    br = {
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
                let Er, gr;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(Er || (Er = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(gr || (gr = {}));
                const hr = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: s,
                        tags: r,
                        isPremiumIGR: i,
                        size: o = Er.extraSmall,
                        type: u = gr.colored,
                        className: _,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const p = `${(0, Y.BN)(a)}${e ? '_elite' : ''}`,
                            b = R.images.gui.maps.icons.vehicleTypes.big.$dyn(p);
                        return l().createElement(
                            'div',
                            {
                                className: c()(
                                    br.base,
                                    br[`base__size${(0, Y.e)(o)}`],
                                    br[`base__type${(0, Y.e)(u)}`],
                                    r && V.UI(r, (e) => br[`base__tag${(0, Y.e)(e)}`]),
                                    _,
                                ),
                            },
                            l().createElement('div', { className: c()(br.level, null == d ? void 0 : d.level) }, pr(s)),
                            l().createElement('div', {
                                className: c()(br.type, e && br.type__elite, null == d ? void 0 : d.typeIcon),
                                style: { backgroundImage: `url(${b})` },
                            }),
                            i && l().createElement('div', { className: br.premiumIGR }),
                            l().createElement(
                                'div',
                                { className: c()(br.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    fr = 'Aside_base_a5',
                    vr = 'Aside_content_24',
                    Ar = 'Aside_tankDetails_35',
                    Cr = 'Aside_description_f0',
                    Sr = 'Aside_title_6f',
                    Dr = 'Aside_category_c0',
                    Fr = 'Aside_text_ca',
                    Br = 'Aside_status_91',
                    yr = 'Aside_status__activated_4e',
                    wr = 'CategoryTitle_base_f3',
                    kr = 'CategoryTitle_title_9d',
                    Tr = 'CategoryTitle_icon_48';
                let xr;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(xr || (xr = {}));
                const Lr = (0, o.memo)(({ category: e, iconTheme: t = xr.Small, className: n }) => {
                        const a = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return l().createElement(
                            'div',
                            { className: c()(wr, n) },
                            l().createElement('div', { className: Tr, style: a }),
                            l().createElement('div', { className: kr }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    Nr = 'InfoIcon_base_83',
                    Ir = 'InfoIcon_icon_47',
                    Rr = (0, o.memo)(({ item: e, className: t }) => {
                        const n = en(e, zt.SetupView),
                            a = n[0],
                            s = n[1];
                        return l().createElement(
                            'div',
                            { className: c()(Nr, t) },
                            l().createElement(
                                ye.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: s,
                                },
                                l().createElement('div', { className: Ir }),
                            ),
                        );
                    }),
                    Mr = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Or;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Or || (Or = {}));
                const Pr = (0, o.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: s }) => {
                    const r = t + 1,
                        i = (0, o.useMemo)(() => pr(r), [r]),
                        u = ((e) => {
                            const t = Zt(e, Yt),
                                n = (0, o.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, Vt(e));
                                    },
                                    [t],
                                );
                            return (e) => n(e);
                        })(Wt),
                        _ = (0, o.useCallback)(() => {
                            a(t),
                                nt.$.playClick(),
                                u({
                                    item: Gt.SkillLevelTab,
                                    action: Xt.Click,
                                    parentScreen: zt.SetupView,
                                    info: String(r),
                                });
                        }, [t, r, a, u]),
                        d = (0, o.useCallback)(() => nt.$.playHighlight(), []);
                    return l().createElement(
                        'div',
                        { className: c()(Mr.base, e && Mr.base__active, s), onClick: _, onMouseEnter: d },
                        l().createElement('div', { className: Mr.label }, i),
                        n !== Or.None && l().createElement('div', { className: c()(Mr.arrow, Mr[`arrow__${n}`]) }),
                    );
                });
                var Hr = n(8045);
                const $r = 'ExtendedText_base_71',
                    Wr = 'ExtendedText_base__zeroPadding_25',
                    zr = 'ExtendedText_base__isTruncationAvailable_5b',
                    Gr = 'ExtendedText_truncated_97',
                    Xr = 'ExtendedText_truncated__hide_31',
                    jr = 'ExtendedText_unTruncated_b8';
                let Yr, Ur, Vr;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Yr || (Yr = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ur || (Ur = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Vr || (Vr = {}));
                const Zr = { [Vr.NBSP]: Yr.NoBreakSymbol, [Vr.ZWNBSP]: Yr.NoBreakSymbol, [Vr.NEW_LINE]: Yr.LineBreak },
                    qr = {
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
                    Kr = 'renderers_noBreakWrapper_10',
                    Jr = 'renderers_lineBreak_b5',
                    Qr = 'renderers_newLine_bd',
                    ei = (e) => ({ color: `#${e}` }),
                    ti = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? qr[a]
                                ? l().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: qr[a] },
                                      e,
                                  )
                                : l().createElement('span', { key: n, 'data-block-type': t.blockType, style: ei(a) }, e)
                            : l().createElement('span', { key: n, 'data-block-type': t.blockType }, e);
                    },
                    ni = {
                        [Yr.Word]: ti,
                        [Yr.NoBreakSymbol]: ti,
                        [Yr.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            l().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => l().createElement(l().Fragment, { key: n }, e)),
                            ),
                        [Yr.LineBreak]: ({ key: e }) =>
                            l().createElement('span', { key: e, 'data-block-type': Yr.LineBreak, className: Jr }),
                        [Yr.NewLine]: ({ elementList: e, key: t }) =>
                            l().createElement('span', { key: t, 'data-block-type': Yr.NewLine, className: Qr }, e),
                        [Yr.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            l().createElement(
                                'span',
                                { key: t, 'data-block-type': Yr.NoBreakWrapper, className: Kr },
                                e,
                            ),
                    },
                    ai = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, r) => {
                                const i = `${n}_${r}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = ai(e, ni[t], i);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: i }));
                            }),
                            a
                        );
                    },
                    si = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            s = ni[a],
                                            r = ai(e, s, t);
                                        return (
                                            a === Yr.NoBreakWrapper
                                                ? n.push(s({ elementList: r, textBlock: e, key: `${t}` }))
                                                : n.push(...r),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    ri = (e, t, n, a) => {
                        let s = t.exec(e),
                            r = 0;
                        for (; s; ) r !== s.index && n(e.slice(r, s.index)), a(s), (r = t.lastIndex), (s = t.exec(e));
                        r !== e.length && n(e.slice(r));
                    },
                    ii = (e) => {
                        const t = /[\s\u002d]/g;
                        let n = t.exec(e);
                        if (!n) return [e];
                        const a = [];
                        let s = 0;
                        for (; n; ) a.push(e.slice(s, t.lastIndex)), (s = t.lastIndex), (n = t.exec(e));
                        return s !== e.length && a.push(e.slice(s)), a;
                    },
                    oi = (e, t = '') => {
                        const n = [];
                        return (
                            ri(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Yr.Word, colorTag: t, childList: ii(e) });
                                },
                                (e) => {
                                    const a = e[0],
                                        s = Zr[a.charAt(0)];
                                    s === Yr.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Yr.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Yr.NewLine,
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
                    li = (e, t, n = '') => {
                        const a = [];
                        return (
                            ri(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...oi(e, n));
                                },
                                (e) => {
                                    const s = e[1],
                                        r = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...oi(String(r), n))
                                        : a.push({ blockType: Yr.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    ui = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Yr.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Yr.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    ci = (e, t = {}) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Yr.NoBreakSymbol
                                        ? ((n = !0), t.push(...ui(t.pop(), e)))
                                        : (n ? t.push(...ui(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const n = [];
                                return (
                                    ri(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            n.push(...li(e, t));
                                        },
                                        (e) => {
                                            n.push(...li(e[2], t, e[1]));
                                        },
                                    ),
                                    n
                                );
                            })((0, Y.Eg)((0, Y.z4)(e)), t),
                        );
                        return si(n);
                    },
                    _i = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    di = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    mi = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = di(e, t),
                            s = e.textContent.length,
                            r = e.offsetWidth / s,
                            i = Math.ceil(a / r);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / r);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const o = Math.max(n + i, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    pi = (e, t, n, a, s, r) => {
                        let i = -1,
                            o = null;
                        for (let u = n; u >= 0; u--) {
                            const n = e[u],
                                c = Number(e[u].getAttribute('data-block-type'));
                            if (c === Yr.LineBreak || c === Yr.NewLine || c === Yr.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = mi(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + r,
                                    p = t[u];
                                (o = l().cloneElement(p, p.props, m)), (i = u);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[u],
                                    d = c.props.children,
                                    m = pi(e, d, e.length - 1, a, s, r),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (o = l().cloneElement(c, c.props, e, b)), (i = u);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [i, o];
                    },
                    bi = (e, t, n, a = '...') => {
                        const s = [...t],
                            r = e.current;
                        if (!r) return [s, !1];
                        const i = n.height,
                            o = n.width,
                            l = r.lastElementChild;
                        if (!_i(l, i) && di(l, o) <= 0) return [s, !1];
                        const u = r.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    _i(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(u, i);
                        if (c < 0) return [s, !1];
                        const _ = pi(u, s, c, o, a.length, a),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    Ei = l().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: r = !1,
                            targetId: i,
                            justifyContent: u = Ur.FlexStart,
                            alignContent: _ = Ur.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, o.useRef)(null),
                                p = (0, o.useRef)({ height: 0, width: 0 }),
                                b = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = b[0],
                                g = b[1],
                                h = (0, o.useMemo)(() => ci(e, a), [a, e]),
                                f = (0, o.useMemo)(() => {
                                    if (s && E.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: i,
                                        };
                                }, [a, s, i, e, E.isTruncated]),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = bi(m, h, p.current, d),
                                            a = t[0],
                                            s = t[1];
                                        g({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                    },
                                    [n, d, h],
                                ),
                                A = (0, o.useMemo)(() => ({ justifyContent: u, alignContent: _ }), [_, u]);
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
                                        const t = new Hr.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, v, r),
                                l().createElement(
                                    'div',
                                    { className: c()($r, t, Wr, r && zr), style: A },
                                    l().createElement('div', { className: jr, ref: m }, h),
                                    l().createElement(
                                        ke,
                                        { tooltipArgs: f },
                                        l().createElement(
                                            'div',
                                            { className: c()(Gr, !E.isTruncateFinished && r && Xr), style: A },
                                            E.isTruncateFinished && r ? E.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    gi = {
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
                    hi = (0, o.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            s = Number(t.value),
                            r = Number(n.value),
                            i = (0, o.useMemo)(() => s < r, [s, r]),
                            u = (0, o.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(s)) {
                                    const e = a - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, a]),
                            _ = (0, o.useMemo)(() => {
                                if (!u) return {};
                                const t = (0, Y.uF)(e.valueTemplate, {
                                    sign: u < 0 ? '-' : '+',
                                    value: L.Z5.getRealFormat(Math.abs(u), L.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: l().createElement('div', { className: gi.diffValue }, t) };
                            }, [u, e.valueTemplate]),
                            d = (0, o.useMemo)(
                                () => ({
                                    sign: t.sign,
                                    value: isNaN(s) ? t.value : L.Z5.getNumberFormat(s, L.B3.GOLD),
                                }),
                                [t, s],
                            ),
                            m = (0, o.useMemo)(() => (i ? { width: ((100 * s) / r).toString() + '%' } : {}), [i, s, r]),
                            p = (0, o.useMemo)(
                                () => (i ? { width: ((100 * (a - s)) / r).toString() + '%' } : {}),
                                [i, s, a, r],
                            );
                        return l().createElement(
                            'div',
                            { className: gi.base },
                            l().createElement(
                                'div',
                                { className: gi.valueWrapper },
                                u &&
                                    l().createElement(Ei, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: gi.diff,
                                        alignContent: Ur.FlexEnd,
                                    }),
                                l().createElement(Ei, { text: e.valueTemplate, binding: d, classMix: gi.value }),
                            ),
                            l().createElement(
                                'div',
                                { className: gi.labelWrapper },
                                l().createElement('div', { className: gi.label }, t.name),
                            ),
                            i &&
                                l().createElement(
                                    'div',
                                    { className: gi.progress },
                                    l().createElement('div', { className: gi.progressDot }),
                                    l().createElement(
                                        'div',
                                        { className: gi.progressValue, style: m },
                                        l().createElement('div', { className: gi.progressValueDot }),
                                    ),
                                    l().createElement('div', { className: gi.progressDelta, style: p }),
                                    l().createElement('div', { className: c()(gi.progressDot, gi.progressDot__end) }),
                                ),
                        );
                    }),
                    fi = 'Levels_base_a9',
                    vi = 'Levels_tabsWrapper_a0',
                    Ai = 'Levels_tabsBorder_cf',
                    Ci = 'Levels_tabsBorder__top_8f',
                    Si = 'Levels_tabsBorder__bottom_82',
                    Di = 'Levels_tabsLabel_60',
                    Fi = 'Levels_tabs_8f',
                    Bi = 'Levels_tab_c3',
                    yi = 'Levels_caret_7e',
                    wi = 'Levels_params_d6',
                    ki = 'Levels_infoIcon_68',
                    Ti = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            s = n[0].value.params,
                            r = n[n.length - 1].value.params,
                            i = n[t].value,
                            u = (0, o.useMemo)(() => ({ left: 80 * t + 'rem' }), [t]),
                            _ = (0, o.useCallback)((t) => e(t), [e]);
                        return l().createElement(
                            'div',
                            { className: fi },
                            l().createElement(
                                'div',
                                { className: vi },
                                l().createElement('div', { className: c()(Ai, Ci) }),
                                l().createElement('div', { className: c()(Ai, Si) }),
                                l().createElement(Rr, { item: Gt.AbilityLevelsTooltip, className: ki }),
                                l().createElement(
                                    'div',
                                    { className: Di },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                l().createElement(
                                    'div',
                                    { className: Fi },
                                    n.map(({ value: e }, n) => {
                                        const s = n < t ? Or.Active : Or.Default;
                                        return l().createElement(Pr, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? s : Or.None,
                                            onClick: _,
                                            classMix: Bi,
                                        });
                                    }),
                                    l().createElement('div', { className: yi, style: u }),
                                ),
                            ),
                            l().createElement(
                                'div',
                                { className: wi },
                                i.params.map(({ value: e }, t) =>
                                    l().createElement(hi, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: r[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    xi = (0, o.memo)(function ({ className: e }) {
                        const t = Ys(),
                            n = $('model.vehicleInfo'),
                            a = $(`${ts}`).setCurrentSlotDetailsLevel,
                            s = $(`${ts}.details`),
                            r = s.name,
                            i = s.category,
                            u = s.selectedLevel,
                            _ = s.description,
                            d = s.levelInfos,
                            m = s.isActivated,
                            p = (0, o.useCallback)((e) => a({ level: e }), [a]);
                        return l().createElement(
                            'div',
                            { className: c()(fr, e) },
                            l().createElement(
                                cr.Vertical.Area.Default,
                                { api: t },
                                l().createElement(
                                    'div',
                                    { className: vr },
                                    l().createElement('div', { className: Ar }, l().createElement(hr, n)),
                                    l().createElement(
                                        'div',
                                        { className: Cr },
                                        l().createElement('div', { className: Sr }, r),
                                        l().createElement(Lr, { category: i, className: Dr }),
                                        l().createElement('div', { className: Fr }, _),
                                    ),
                                    l().createElement(Ti, { onLevelChanged: p, selectedLevel: u, levelInfos: d }),
                                    l().createElement(
                                        'div',
                                        { className: c()(Br, m && yr) },
                                        m
                                            ? R.strings.tank_setup.abilities.details.status.unlocked()
                                            : R.strings.tank_setup.abilities.details.status.locked(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Li = 'BattleAbilitiesSetup_aside_bd';
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
                function Ni() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                const Ii = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    Ri = (e) => {
                        const t = (0, o.useState)(Ii(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, o.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        Ii(e ? e.current : null) ? a(!0) : n();
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
                var Mi = n(8380),
                    Oi = n.n(Mi);
                const Pi = 'ScrollArea_base_47',
                    Hi = 'ScrollArea_base__scrollIndent_1d',
                    $i = 'ScrollArea_base__verticalScrollbarMargin_50',
                    Wi = 'ScrollArea_base__multiple_44',
                    zi = 'ScrollArea_base__hidden_ec',
                    Gi = l().forwardRef((e, t) => {
                        const n = e.offsetLeft,
                            a = void 0 === n ? 0 : n,
                            s = e.offsetTop,
                            r = void 0 === s ? 0 : s,
                            i = e.scrollSettings,
                            u = e.onUpdateActiveAxis,
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
                            A = e.onScrollLeftHandled,
                            C = (0, o.useState)(!1),
                            S = C[0],
                            D = C[1],
                            F = (0, o.useState)(),
                            B = F[0],
                            y = F[1],
                            k = (0, o.useState)(),
                            T = k[0],
                            x = k[1],
                            L = (0, o.useRef)(null),
                            N = (0, o.useCallback)(() => {
                                B &&
                                    u &&
                                    u({ x: B.scrollbarXActive, y: B.scrollbarYActive }, { x: B.reach.x, y: B.reach.y });
                            }, [u, B]),
                            I = (0, o.useCallback)(() => B, [B]),
                            R = (0, o.useCallback)(() => {
                                B && B.update();
                            }, [B]),
                            M = (0, o.useCallback)(
                                (e, t, n) => {
                                    B && (B.setScrollLeft(e, t, n), A && A(e, B.contentWidth - B.containerWidth));
                                },
                                [B, A],
                            ),
                            O = (0, o.useCallback)(
                                (e) => {
                                    B && (B.setScrollLeftImmediately(e), A && A(e, B.contentWidth - B.containerWidth));
                                },
                                [B, A],
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
                            j = (0, o.useCallback)(() => {
                                B &&
                                    (B.update(),
                                    (L.current = (0, w.v)(() => {
                                        N();
                                    })));
                            }, [B, N]),
                            Y = (0, o.useCallback)((e) => {
                                0 === e.screenX &&
                                    0 === e.screenY &&
                                    (e.stopImmediatePropagation(), e.preventDefault());
                            }, []);
                        (0, o.useEffect)(() => {
                            if (B && T)
                                return (
                                    document.addEventListener('mousemove', Y),
                                    window.addEventListener('resize', j),
                                    T.addEventListener('ps-scroll-x', $),
                                    T.addEventListener('ps-scroll-y', W),
                                    T.addEventListener('over-scroll-beginning', z),
                                    T.addEventListener('over-scroll-ending', G),
                                    D(!0),
                                    () => {
                                        window.removeEventListener('resize', j),
                                            document.removeEventListener('mousemove', Y),
                                            T &&
                                                (T.removeEventListener('ps-scroll-x', $),
                                                T.removeEventListener('ps-scroll-y', W),
                                                T.removeEventListener('over-scroll-beginning', z),
                                                T.removeEventListener('over-scroll-ending', G));
                                    }
                                );
                        }, [Y, $, z, G, j, T, B, W]);
                        const U = (0, o.useRef)(T || null);
                        U.current = T || null;
                        const V = Ri(U);
                        (0, o.useEffect)(
                            () => (
                                !B && T && V && y(new (Oi())(T, Object.assign({}, i))),
                                () => {
                                    B && (B.destroy(), y(void 0));
                                }
                            ),
                            [T, V, i, B],
                        ),
                            (0, o.useEffect)(
                                () => () => {
                                    null == L.current || L.current();
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
                                r > 0 && H(r);
                            }, [r, H]),
                            (0, o.useEffect)(() => {
                                h &&
                                    ((h.setScrollLeft = M),
                                    (h.setScrollTop = P),
                                    (h.setScrollLeftImmediately = O),
                                    (h.setScrollTopImmediately = H),
                                    (h.updateScrollArea = R),
                                    (h.getScrollbar = I));
                            }, [h, M, O, P, H, R, I]);
                        const Z = c()(Pi, { [Hi]: b, [zi]: !S, [$i]: E, [Wi]: g }, v);
                        return l().createElement('div', { className: Z, ref: X }, f);
                    }),
                    Xi = 'ScrollableCards_base_e0',
                    ji = 'ScrollableCards_scroll_4b',
                    Yi = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, o.useState)(!1),
                            r = s[0],
                            i = s[1],
                            u = (0, o.useRef)({}),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(!1),
                            m = (0, o.useRef)(''),
                            p = Ri(c);
                        (0, o.useEffect)(
                            () => () => {
                                d.current = !1;
                            },
                            [],
                        );
                        const b = (0, o.useCallback)(() => {
                                d.current && i(!0);
                            }, []),
                            E = (0, o.useCallback)(() => {
                                d.current && i(!1);
                            }, []),
                            g = (0, o.useCallback)(() => {
                                const e = _.current,
                                    t = c.current,
                                    n = u.current;
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
                                          Ni().then(() => {
                                              g(), d.current || (d.current = !0);
                                          })));
                            });
                        }, [p, n, g, t]),
                            (0, o.useEffect)(() => {
                                d.current && u.current.setScrollTopImmediately(0);
                            }, [a]);
                        const h = {
                                currentCardRef: _,
                                scrollWrapperRef: c,
                                isFinalAnimationRunning: r,
                                onFinalAnimationDone: E,
                            },
                            f = (0, o.cloneElement)(e, h);
                        return l().createElement(
                            'div',
                            { className: Xi },
                            l().createElement(
                                'div',
                                { className: ji, ref: c },
                                l().createElement(Gi, { key: n, scrollAreaContainer: u.current }, f),
                            ),
                        );
                    };
                var Ui = n(4888),
                    Vi = n(1363);
                const Zi = [
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
                function qi(e) {
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
                const Ki = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: L.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    Ji = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            r = e.onMouseLeave,
                            i = e.onMouseDown,
                            l = e.onClick,
                            u = e.ignoreShowDelay,
                            c = void 0 !== u && u,
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
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, Zi);
                        const v = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            A = (0, o.useMemo)(() => (0, k.F)(), []).resId,
                            C = (0, o.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Ki(n, p, { isMouseEvent: !0, on: !0, arguments: qi(a) }, A),
                                    g && g(),
                                    (v.current.isVisible = !0));
                            }, [n, p, a, A, g]),
                            S = (0, o.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Ki(n, p, { on: !1 }, A),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1);
                                }
                            }, [n, p, A, h]),
                            D = (0, o.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(v.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const e = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
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
                                                      ((v.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), r && r(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && S(), l && l(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && S(), i && i(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    Qi = ['children'];
                function eo() {
                    return (
                        (eo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        eo.apply(this, arguments)
                    );
                }
                const to = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Qi);
                    return l().createElement(
                        Ji,
                        eo(
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
                var no = n(5282);
                const ao = {
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
                    so = 'Warning_base_4c',
                    ro = 'Warning_glow_79',
                    io = 'Warning_line_df',
                    oo = 'Warning_icon_24',
                    lo = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, o.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return l().createElement(
                            'div',
                            { id: e, className: so },
                            l().createElement('div', { className: ro }),
                            l().createElement('div', { className: io }),
                            l().createElement(
                                ye.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: a,
                                    isEnabled: a.reason !== uo,
                                },
                                l().createElement('div', { className: oo }),
                            ),
                        );
                    },
                    uo = '',
                    co = ({
                        parentId: e,
                        mediaSize: t,
                        name: n,
                        tooltipArgs: a,
                        contextMenuArgs: s,
                        imageSource: r,
                        overlayType: i,
                        highlightType: u,
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
                        specializations: A,
                        extraImages: C,
                        onSlotClick: S,
                        shouldHandleMouseOver: D,
                        category: F,
                        onTooltipShow: B,
                        onTooltipHide: y,
                        lockReason: w,
                    }) => {
                        const k = (0, o.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = k[0],
                            x = k[1],
                            L = (0, o.useState)(!1),
                            N = L[0],
                            I = L[1],
                            M = (0, o.useCallback)(() => {
                                !T.isActionsHovered && nt.$.playHighlight(),
                                    x({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    D && I(!0);
                            }, [T.isActionsHovered, D]),
                            O = (0, o.useCallback)(() => {
                                D && I(!1);
                            }, [D]),
                            P = (0, o.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, o.useCallback)(() => {
                                x({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            $ = g && !m,
                            W = (0, o.useCallback)(() => {
                                $ && S && (nt.$.playClick(), S());
                            }, [S, $]),
                            z = T.isBaseHovered || T.isActionsHovered,
                            G = c()(
                                ao.content,
                                ao[`content__${t}`],
                                z && g && !m && ao.content__hovered,
                                !z && ao.content__out,
                                b && ao.content__installed,
                                p && ao.content__current,
                                m && ao.content__disabled,
                                !$ && ao.content__nonclickable,
                            ),
                            X = (0, o.useMemo)(() => {
                                let e = l().createElement('div', {
                                    onMouseEnter: M,
                                    onMouseLeave: H,
                                    className: ao.hover,
                                    onClick: W,
                                });
                                return (
                                    a &&
                                        (e = l().createElement(
                                            to,
                                            { args: a, onShow: B, onHide: y, isEnabled: w !== uo },
                                            e,
                                        )),
                                    s && (e = l().createElement(Wn, { args: s }, e)),
                                    e
                                );
                            }, [M, H, W, a, s, B, y, w]),
                            j = (0, o.useMemo)(() => {
                                if (!n) return null;
                                const e = c()(ao.name, m && ao.name__disabled);
                                return l().createElement(
                                    'div',
                                    { className: e },
                                    l().createElement(no.n, {
                                        mediaSize: t,
                                        linesCount: 3,
                                        blocks: (0, no.D)(systemLocale.toUpperCase(n)),
                                    }),
                                );
                            }, [t, n, m]),
                            Y = (0, o.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]),
                            U =
                                t === rs.cJ.Large || t === rs.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            V = (0, o.useMemo)(() => {
                                let e;
                                return (
                                    i && (e = _ ? U.$dyn(`${i}_${d}_overlay`) : U.$dyn(`${i}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [U, i, _, d]),
                            Z = (0, o.useMemo)(() => {
                                let e;
                                return u && (e = U.$dyn(`${u}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [U, u]),
                            q = c()(ao.options, m && ao.options__disabled),
                            K = c()(ao.overlay, ao[`overlay__${i}`]),
                            J = c()(ao.highlight, ao[`highlight__${u}`]),
                            Q = (0, o.useMemo)(() => {
                                const e =
                                        (t === rs.cJ.Large || t === rs.cJ.Huge ? rs.cJ.Large : rs.cJ.Medium) + '_' + F,
                                    n = R.images.gui.maps.icons.specialization.$dyn(e);
                                return n && { backgroundImage: `url(${n})` };
                            }, [F, t]),
                            ee = c()(ao.category, ao[`category__${t}`]);
                        return l().createElement(
                            to,
                            { args: a, onShow: B, onHide: y, isEnabled: w === uo },
                            l().createElement(
                                'div',
                                { className: ao.base },
                                l().createElement(
                                    'div',
                                    { id: e, className: G, onMouseLeave: O },
                                    Z &&
                                        l().createElement(
                                            'div',
                                            { className: ao.types },
                                            l().createElement('div', { className: J, style: Z }),
                                        ),
                                    l().createElement('div', { className: ao.image, style: Y }, C),
                                    m && l().createElement('div', { className: ao.disabled }),
                                    Q && l().createElement('span', { className: ee, style: Q }),
                                    V &&
                                        l().createElement(
                                            'div',
                                            { className: ao.types },
                                            l().createElement('div', { className: K, style: V }),
                                        ),
                                    A && l().createElement('div', { className: ao.specialization }, A),
                                    j,
                                    h && l().createElement('div', { className: ao.details }, h),
                                    l().createElement('div', { className: q }, f),
                                    X,
                                    l().createElement(
                                        'div',
                                        { onMouseEnter: P, onMouseLeave: H, className: ao.actions },
                                        D && v
                                            ? (0, o.cloneElement)(v, Object.assign({}, v.props, { isMouseOverCard: N }))
                                            : v,
                                    ),
                                ),
                                E &&
                                    l().createElement(
                                        'div',
                                        { className: ao.locked },
                                        l().createElement(lo, { reason: w, isCritical: m, parentId: e }),
                                    ),
                            ),
                        );
                    };
                var _o = n(3934),
                    mo = n(8401);
                const po = 'Availability_base_51',
                    bo = () => l().createElement('div', { className: po }),
                    Eo = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    go = l().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            const r = c()(
                                Eo.base,
                                Eo['base__' + (s ? 'shown' : 'hidden')],
                                (n || e || (a && 0 === e)) && Eo.base__visually,
                            );
                            let i = null;
                            return (
                                (i = n
                                    ? l().createElement(bo, null)
                                    : e || (a && 0 === e)
                                      ? l().createElement(_o.K, { itemsInStorage: e })
                                      : t && l().createElement(mo.t, t)),
                                l().createElement('div', { className: r }, i)
                            );
                        },
                    ),
                    ho = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var fo = n(8750);
                const vo = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Ao = ({ level: e }) => {
                        const t = (0, rs.GS)();
                        if (!e) return null;
                        const n = c()(vo.base, t && vo[`base__${t}`]);
                        return l().createElement(
                            'div',
                            { className: n },
                            l().createElement(fo.a, {
                                type: fo.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Co = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: s,
                            onSlotAction: r,
                            intCD: i,
                            level: u,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: E,
                        }) => {
                            const g = (0, rs.GS)(),
                                h = t > -1,
                                f = `${i}-ability`,
                                v = (0, o.useMemo)(() => ({ intCD: i, slotType: et.YN, fieldType: 0 }), [i]),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        r({ actionType: e, intCD: i, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [r, i, n],
                                ),
                                C = (0, o.useCallback)(() => {
                                    A(Ui.eC);
                                }, [A]),
                                S = (0, o.useContext)(Yo),
                                D = (0, o.useMemo)(() => {
                                    const e = c()(ho.bonuses, g && ho[`base__${g}`]),
                                        t = S >= E ? ms.Brown : ms.Red;
                                    return l().createElement(
                                        'div',
                                        { className: ho.base },
                                        l().createElement(Vi._, {
                                            parentId: f,
                                            mediaSize: g,
                                            classMix: e,
                                            classColorMix: ho.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            l().createElement(ps, {
                                                value: E,
                                                theme: t,
                                                size: ds.Small,
                                                className: ho.points,
                                            }),
                                    );
                                }, [g, _, f, m, E, S]),
                                F =
                                    ((0, o.useMemo)(() => l().createElement(Ao, { level: u }), [u]),
                                    (0, o.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return l().createElement(co, {
                                parentId: f,
                                mediaSize: g,
                                name: e,
                                tooltipArgs: v,
                                imageSource: F,
                                isCurrent: a,
                                isActive: h,
                                details: D,
                                isDisabled: m && S < E,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: C,
                                options: l().createElement(go, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    So = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
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
                const Fo = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = $(ts),
                            s = a.categoriesOrder,
                            r = a.onSlotAction,
                            i = a.slots,
                            u = $('model.ammunitionPanel'),
                            _ = u.onSectionSelect,
                            d = u.selectedSection,
                            m = (0, rs.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = i.map(({ value: e }) => e),
                            E = (0, o.useMemo)(() => {
                                if (m === rs.cJ.Tiny)
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
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), r(e);
                                },
                                [_, r, d],
                            ),
                            h = E.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    s = a > -1 && t === a;
                                return l().createElement(
                                    'div',
                                    { key: n.intCD, ref: s ? e : null, className: c()(So.card, m && So[`card__${m}`]) },
                                    l().createElement(Co, Do({}, n, { isCurrent: s, onSlotAction: g })),
                                );
                            }),
                            f = c()(So.base, m && So[`base__${m}`], n && So.base__disabled);
                        return l().createElement('div', { className: f }, h);
                    },
                    Bo = 'BattleAbilitiesNoSelected_base_06',
                    yo = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    wo = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    ko = 'BattleAbilitiesNoSelected_title_20',
                    To = 'BattleAbilitiesNoSelected_title__small_65',
                    xo = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Lo = 'BattleAbilitiesNoSelected_button_bf',
                    No = R.strings.tank_setup.abilities.noSelected,
                    Io = () => {
                        const e = (0, rs.GS)(),
                            t = $(ts, H.None).showInfoPage,
                            n = (0, o.useMemo)(() => e === rs.cJ.Small || e === rs.cJ.Tiny, [e]),
                            a = (0, o.useMemo)(() => (e === rs.cJ.Tiny ? cs.qE.small : cs.qE.medium), [e]),
                            s = (0, o.useCallback)(() => t(), [t]),
                            r = c()(yo, n && wo),
                            i = c()(ko, n && To);
                        return l().createElement(
                            'div',
                            { className: Bo, id: 'no-abilities-show-button' },
                            l().createElement('div', { className: r }),
                            l().createElement('div', { className: i }, No.title()),
                            l().createElement('div', { className: xo }, No.subTitle()),
                            l().createElement(cs.u5, { size: a, mixClass: Lo, onClick: s }, No.toReserves()),
                        );
                    },
                    Ro = 'Content_base_d8',
                    Mo = l().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return l().createElement(
                            'div',
                            { className: Ro },
                            e
                                ? l().createElement(
                                      Yi,
                                      { selectedSlotId: t },
                                      l().createElement(Fo, { selectedSlot: t }),
                                  )
                                : l().createElement(Io, null),
                        );
                    }),
                    Oo = {
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
                    Po = ({ title: e, content: t, tabs: n }) => {
                        const a = (0, rs.GS)(),
                            s = c()(Oo.base, a && Oo[`base__${a}`]),
                            r = c()(Oo.tabs, a && Oo[`tabs__${a}`]),
                            i = c()(Oo.title, a && Oo[`title__${a}`]);
                        return l().createElement(
                            'div',
                            { className: s },
                            l().createElement(
                                'div',
                                null,
                                l().createElement('div', { className: i }, e),
                                n && l().createElement('div', { className: r }, n),
                            ),
                            t && t,
                        );
                    },
                    Ho = 'Header_base_aa',
                    $o = 'Header_points_d5',
                    Wo = 'Header_content_2c',
                    zo = 'Header_textWrapper_63',
                    Go = 'Header_text_dc',
                    Xo = 'Header_infoButton_5e',
                    jo = l().memo(function () {
                        const e = (0, o.useContext)(Yo),
                            t = (0, o.useMemo)(
                                () => ({
                                    points: l().createElement(ps, {
                                        theme: ms.Brown,
                                        size: ds.Normal,
                                        value: e,
                                        className: $o,
                                    }),
                                }),
                                [e],
                            ),
                            n = en(Gt.SkillPointsTooltip, zt.SetupView),
                            a = n[0],
                            s = n[1];
                        return l().createElement(
                            'div',
                            { className: Ho },
                            l().createElement(Po, {
                                title: R.strings.tank_setup.section.battleAbilities(),
                                content: l().createElement(
                                    'div',
                                    { className: Wo },
                                    l().createElement(ss, { theme: as.OnlyIcon, className: Xo }),
                                    l().createElement(
                                        Be.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: a,
                                            onMouseLeave: s,
                                        },
                                        l().createElement(
                                            'div',
                                            { className: zo },
                                            l().createElement(Ei, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: t,
                                                classMix: Go,
                                            }),
                                        ),
                                    ),
                                ),
                            }),
                        );
                    }),
                    Yo = l().createContext(0),
                    Uo = () => {
                        const e = $(ts),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = $('model.ammunitionPanel').selectedSlot;
                        return l().createElement(
                            Yo.Provider,
                            { value: n },
                            l().createElement(rs.Ar, {
                                header: l().createElement(jo, null),
                                content: l().createElement(Mo, { isLocked: t, selectedSlot: a }),
                                aside: l().createElement(xi, { className: Li }),
                                footer: l().createElement(fs, null),
                            }),
                        );
                    },
                    Vo = 'Tabs_base_d9',
                    Zo = 'Tabs_base__vertical_c0',
                    qo = 'Tabs_list_0a',
                    Ko = 'Tabs_list__centered_dc',
                    Jo = 'Tabs_wrapper_2d',
                    Qo = 'Tabs_wrapper__centered_d8',
                    el = 'Tabs_wrapper__vertical_a5';
                function tl() {
                    return (
                        (tl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        tl.apply(this, arguments)
                    );
                }
                const nl = 'tabs-role';
                var al;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(al || (al = {}));
                class sl extends o.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[al.TAB]);
                                return t && t.props[al.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = l().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[nl] === al.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(l().Children.toArray(e[t].props.children));
                        (e[t] = l().cloneElement(e[t], {
                            children: l()
                                .Children.toArray(e[t].props.children)
                                .map((e) => l().cloneElement(e, { key: e.props[al.TAB] })),
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
                        const n = l().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((r = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(r).length === Object.keys(i).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && r[e] === i[e],
                                    )
                                ));
                        var r, i;
                        const o = c()(
                                Jo,
                                n.props.className,
                                this.props.isTabsCentered && Qo,
                                this.props.isVerticalTabs && el,
                            ),
                            u = c()(qo, this.props.isTabsCentered && Ko);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[nl] === al.CONTENT)
                                        return e.props[al.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                r = s.map((e, t) =>
                                    l().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[al.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][al.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, nt.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, nt.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        l().createElement(
                                            'div',
                                            { className: u, key: al.LIST },
                                            l().createElement('div', tl({}, n.props, { className: o }), r),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Vo, this.props.isVerticalTabs && Zo);
                        return l().createElement('div', { className: t }, e);
                    }
                }
                sl.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const rl = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function il() {
                    return (
                        (il =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        il.apply(this, arguments)
                    );
                }
                const ol = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            s = e.onClickSound,
                            r = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    s = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, rl);
                        return l().createElement(
                            'div',
                            il({ className: n }, o),
                            l().createElement(
                                sl,
                                { activeKey: a, onClickSound: s, onMouseEnterSound: r, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    ll = ({ children: e, component: t, props: n = {} }) => (t ? l().createElement(t, n, e) : e || null),
                    ul = 'Tab_base_dd',
                    cl = 'Tab_base__first_4a',
                    _l = 'Tab_base__last_96',
                    dl = 'Tab_base__medium_ec',
                    ml = 'Tab_base__active_5d',
                    pl = 'Tab_divider_ca',
                    bl = 'Tab_divider__show_62',
                    El = 'Tab_state_6c',
                    gl = 'Tab_stateHighlight_1e',
                    hl = 'Tab_stateBorder_64',
                    fl = 'Tab_stateBorder__positionLeft_e7',
                    vl = 'Tab_stateBorder__positionRight_db',
                    Al = 'Tab_counter_e1',
                    Cl = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Sl() {
                    return (
                        (Sl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Sl.apply(this, arguments)
                    );
                }
                const Dl = (0, o.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            r = e.isLast,
                            i = void 0 !== r && r,
                            o = e.isMedium,
                            u = void 0 !== o && o,
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
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                                return s;
                            })(e, Cl);
                        return l().createElement(
                            ll,
                            E,
                            l().createElement(
                                'div',
                                Sl({ className: c()(ul, { [ml]: n }, { [cl]: s }, { [_l]: i }, { [dl]: u }) }, h),
                                l().createElement(
                                    'span',
                                    { className: El },
                                    l().createElement('span', { className: gl }),
                                    l().createElement('span', { className: c()(hl, fl) }),
                                    l().createElement('span', { className: c()(hl, vl) }),
                                ),
                                p,
                                !i && !n && l().createElement('span', { className: c()(pl, bl) }),
                                (Boolean(g) || d) &&
                                    l().createElement(
                                        'div',
                                        { className: Al },
                                        l().createElement(Et, { value: g, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    Fl = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Bl = ['name', 'newItemsCount', 'onTabChanged', 'isTooltipEnabled'];
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
                const wl = (0, o.memo)((e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.onTabChanged,
                        s = e.isTooltipEnabled,
                        r = void 0 === s || s,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                s = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (s[n] = e[n]);
                            return s;
                        })(e, Bl);
                    const u = (0, o.useMemo)(() => R.strings.tank_setup.tabs.$dyn(t), [t]),
                        c = (0, o.useCallback)(() => {
                            nt.$.playClick(), a({ name: t });
                        }, [a, t]),
                        _ = (0, o.useMemo)(() => ({ name: t }), [t]),
                        d = U(['tab'], Fl);
                    return l().createElement(
                        ye.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: r,
                        },
                        l().createElement(
                            'div',
                            null,
                            l().createElement(
                                Dl,
                                yl({}, i, { isNotified: Boolean(n), onClick: c }),
                                l().createElement('div', { className: d.tab }, u),
                            ),
                        ),
                    );
                });
                function kl() {
                    return (
                        (kl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        kl.apply(this, arguments)
                    );
                }
                const Tl = ({ tabs: e, selectedTabName: t, onTabChanged: n, isTooltipEnabled: a = !0 }) => {
                    const s = At('ModernizedSetupTabHintZone', ft);
                    return (
                        (0, o.useEffect)(() => {
                            s && s.runTrigger(!0);
                        }, [s]),
                        l().createElement(
                            ol,
                            { key: t, activeKey: t },
                            l().createElement(
                                'div',
                                { 'tabs-role': al.LIST },
                                e.map(({ value: e }) =>
                                    l().createElement(
                                        wl,
                                        kl(
                                            {
                                                key: e.name,
                                                onTabChanged: n,
                                                'tabs-role': al.TAB,
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
                var xl = n(8772),
                    Ll = n(5851),
                    Nl = n(8774);
                const Il = {
                        base: 'BoosterActions_base_95',
                        base__hidden: 'BoosterActions_base__hidden_3e',
                        base__shown: 'BoosterActions_base__shown_6a',
                    },
                    Rl = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const s = c()(Il.base, Il['base__' + (t.length ? 'shown' : 'hidden')]);
                        return l().createElement(
                            'div',
                            { className: s },
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.GV}`,
                                actionType: Ui.GV,
                                onClick: n,
                                show: t.includes(Ui.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.DA}`,
                                actionType: Ui.DA,
                                onClick: n,
                                show: t.includes(Ui.DA),
                            }),
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.FR}`,
                                actionType: Ui.FR,
                                onClick: n,
                                show: t.includes(Ui.FR),
                            }),
                        );
                    }),
                    Ml = 'Booster_base_e5',
                    Ol = 'Booster_unit_5e',
                    Pl = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: r,
                            itemsInStorage: i,
                            price: u,
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
                            highlightType: A,
                            compare: C,
                            lockReason: S,
                        }) => {
                            const D = (0, rs.GS)(),
                                F = D === rs.cJ.Large || D === rs.cJ.Huge,
                                B = t > -1,
                                y = `${d}-booster`,
                                w = (0, o.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !m &&
                                            B &&
                                            (!C && f && e.push(Ui.GV),
                                            (!Boolean(i) && !E) || g ? e.push(Ui.FR) : e.push(Ui.DA)),
                                        e
                                    );
                                }, [m, B, C, f, i, E, g]),
                                k = (0, o.useCallback)(
                                    (e) => (
                                        _({ actionType: e, intCD: d, installedSlotId: t }), e === Ui.GV ? 1e3 : 120
                                    ),
                                    [_, d, t],
                                ),
                                T = ln(k),
                                x = (0, o.useCallback)(() => {
                                    w.includes(Ui.FR) ? T(Ui.FR) : w.includes(Ui.DA) ? T(Ui.DA) : T(Ui.eC);
                                }, [w, T]),
                                L = (0, o.useMemo)(() => {
                                    const e = { intCD: d, slotType: et.G$, fieldType: 0 };
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
                                N = L[0],
                                I = L[1],
                                M = (0, o.useMemo)(
                                    () =>
                                        F
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [F, r],
                                ),
                                O = (0, o.useMemo)(
                                    () =>
                                        l().createElement(Vi._, {
                                            parentId: y,
                                            classMix: Ml,
                                            mediaSize: D,
                                            classColorMix: Ol,
                                            linesShown: F ? 4 : 3,
                                            text: h,
                                        }),
                                    [D, y, F, h],
                                );
                            return l().createElement(co, {
                                parentId: y,
                                mediaSize: D,
                                name: e,
                                tooltipArgs: N,
                                contextMenuArgs: I,
                                imageSource: M,
                                isClickable: !0,
                                isCurrent: c,
                                isActive: B,
                                isDisabled: m,
                                isLocked: b,
                                options: l().createElement(go, {
                                    isMounted: E || g,
                                    itemsInStorage: i,
                                    show: !w.length,
                                    price: u,
                                }),
                                actions: l().createElement(Rl, {
                                    parentId: y,
                                    availableActions: w,
                                    onActionClick: T,
                                    isBuyMoreDisabled: v,
                                }),
                                details: O,
                                overlayType: p,
                                highlightType: A,
                                onSlotClick: x,
                                lockReason: S,
                            });
                        },
                    ),
                    Hl = {
                        base: 'Cards_base_0a',
                        base__large: 'Cards_base__large_47',
                        base__huge: 'Cards_base__huge_d2',
                        base__disabled: 'Cards_base__disabled_a9',
                        card: 'Cards_card_ab',
                        card__large: 'Cards_card__large_b2',
                        card__huge: 'Cards_card__huge_78',
                    };
                function $l() {
                    return (
                        ($l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        $l.apply(this, arguments)
                    );
                }
                const Wl = ({ currentCardRef: e, selectedSlot: t, isDisabled: n = !1, modelPath: a, compare: s }) => {
                        const r = (0, rs.GS)(),
                            i = (0, We.m)(a, !1).onSlotAction,
                            o = (0, We.m)(`${a}.slots`).map(({ value: n }) => {
                                if (!n) return null;
                                const a = t === n.installedSlotId;
                                return l().createElement(
                                    'div',
                                    { key: n.intCD, ref: a ? e : null, className: c()(Hl.card, r && Hl[`card__${r}`]) },
                                    l().createElement(Pl, $l({}, n, { isCurrent: a, onSlotAction: i, compare: s })),
                                );
                            }),
                            u = c()(Hl.base, r && Hl[`base__${r}`], n && Hl.base__disabled);
                        return l().createElement('div', { className: u }, o);
                    },
                    zl = {
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
                    Gl = ({ type: e, tabs: t, content: n }) => {
                        const a = (0, We.m)('model', !1).vehicleInfo,
                            s = (0, rs.GS)(),
                            r = c()(zl.base, zl[`base__${s}`]);
                        return l().createElement(
                            'div',
                            { className: r },
                            l().createElement(
                                'div',
                                { className: zl.title },
                                (0, Y.WU)(R.strings.tank_setup.compare.section.title.$dyn(e), { name: a.vehicleName }),
                            ),
                            l().createElement(
                                'div',
                                { className: zl.description },
                                R.strings.tank_setup.compare.section.description.$dyn(e),
                            ),
                            l().createElement(
                                'div',
                                { className: zl.controlsContainer },
                                l().createElement('div', { className: zl.tabs }, t),
                                l().createElement('div', { className: zl.filters }, n),
                            ),
                        );
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
                const jl = 'model.tankSetup.battleBoostersSetup',
                    Yl = ({ compare: e = !1 }) => {
                        const t = (0, rs.GS)(),
                            n = (0, We.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, We.m)(jl, !1),
                            s = a.onDealConfirmed,
                            r = a.onDealCancelled,
                            i = a.onAutoRenewalChanged,
                            o = a.onTabChanged,
                            u = (0, We.m)(`${jl}.tabs`),
                            c = l().createElement(Tl, Xl({}, u, { onTabChanged: o, isTooltipEnabled: !1 }));
                        return l().createElement(rs.Ar, {
                            compare: e,
                            header: e
                                ? l().createElement(Gl, { type: et.G$, tabs: c })
                                : l().createElement(Po, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabs: c,
                                  }),
                            content: l().createElement(
                                Yi,
                                { selectedSlotId: n, scrollAreaKey: u.selectedTabName },
                                l().createElement(Wl, { selectedSlot: n, modelPath: jl, compare: e }),
                            ),
                            footer:
                                !e &&
                                l().createElement(xl.w, {
                                    withConfirmation: !0,
                                    renewalType: Ll.m.Boosters,
                                    parentModelPath: jl,
                                    onDealConfirmed: s,
                                    onDealCancelled: r,
                                    onAutoRenewalChanged: i,
                                    mediaSize: t,
                                }),
                        });
                    },
                    Ul = 'tooltip';
                let Vl, Zl, ql;
                !(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(Vl || (Vl = {})),
                    (function (e) {
                        (e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen');
                    })(Zl || (Zl = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(ql || (ql = {}));
                const Kl = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    Jl = {
                        base: 'ConsumableActions_base_fc',
                        base__hidden: 'ConsumableActions_base__hidden_c1',
                        base__shown: 'ConsumableActions_base__shown_17',
                    },
                    Ql = (0, o.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) => {
                        const s = c()(Jl.base, Jl['base__' + (t.length ? 'shown' : 'hidden')]);
                        return l().createElement(
                            'div',
                            { className: s },
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.GV}`,
                                actionType: Ui.GV,
                                onClick: n,
                                show: t.includes(Ui.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.DA}`,
                                actionType: Ui.DA,
                                onClick: n,
                                show: t.includes(Ui.DA),
                            }),
                            l().createElement(Nl.a, {
                                parentId: `${e}-${Ui.FR}`,
                                actionType: Ui.FR,
                                onClick: n,
                                show: t.includes(Ui.FR),
                            }),
                        );
                    }),
                    eu = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: r,
                            itemsInStorage: i,
                            price: u,
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
                            isBuyMoreDisabled: A,
                            isBootCamp: C = !1,
                            compare: S,
                            lockReason: D,
                        }) => {
                            const F = (0, rs.GS)(),
                                B = F === rs.cJ.Large || F === rs.cJ.Huge,
                                y = t > -1,
                                w = `${m}-consumable`,
                                k = (0, o.useMemo)(() => {
                                    const e = [];
                                    return (
                                        !p &&
                                            y &&
                                            (!_ && e.push(Ui.Xo),
                                            f ||
                                                C ||
                                                (!S && e.push(Ui.GV),
                                                (!Boolean(i) && !g) || h ? e.push(Ui.FR) : e.push(Ui.DA))),
                                        e
                                    );
                                }, [p, C, y, _, f, S, i, g, h]),
                                T = (0, o.useCallback)(
                                    (e) => (
                                        d({ actionType: e, intCD: m, installedSlotId: t }), e === Ui.GV ? 1e3 : 300
                                    ),
                                    [d, m, t],
                                ),
                                x = ln(T),
                                L = (0, o.useCallback)(() => {
                                    k.includes(Ui.Xo)
                                        ? x(Ui.Xo)
                                        : k.includes(Ui.FR)
                                          ? x(Ui.FR)
                                          : k.includes(Ui.DA)
                                            ? x(Ui.DA)
                                            : x(Ui.eC);
                                }, [k, x]),
                                N = (0, o.useMemo)(() => {
                                    const e = { intCD: m, slotType: et.mH, fieldType: 0 };
                                    return [
                                        e,
                                        C
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
                                }, [m, t, n, a, s, g, p, C]),
                                I = N[0],
                                M = N[1],
                                O = (0, o.useMemo)(
                                    () =>
                                        B
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [B, r],
                                ),
                                P = (0, o.useMemo)(() => {
                                    const e = c()(Kl.base, F && Kl[`base__${F}`]);
                                    return l().createElement(Vi._, {
                                        parentId: w,
                                        mediaSize: F,
                                        classMix: e,
                                        classColorMix: Kl.unit,
                                        linesShown: B ? 4 : 3,
                                        text: v,
                                    });
                                }, [F, B, v, w]),
                                H = Qt(Vl.Bootcamp, Zl.BC_CONSUMABLE_SETUP_SUB_VIEW),
                                $ = H[0],
                                W = H[1],
                                z = (0, o.useCallback)(() => {
                                    $(ql.TooltipOpened);
                                }, [$]),
                                G = (0, o.useCallback)(() => {
                                    W(ql.TooltipOpened, 2, Pt.Info, { [Ul]: m.toString() });
                                }, [W, m]);
                            return l().createElement(co, {
                                parentId: w,
                                mediaSize: F,
                                name: e,
                                tooltipArgs: I,
                                contextMenuArgs: M,
                                imageSource: O,
                                isCurrent: _,
                                isActive: y,
                                isDisabled: p,
                                isLocked: E,
                                isClickable: !f,
                                options: l().createElement(go, {
                                    price: u,
                                    isMounted: g || h,
                                    itemsInStorage: i,
                                    show: !k.length,
                                }),
                                actions: l().createElement(Ql, {
                                    parentId: w,
                                    availableActions: k,
                                    onActionClick: x,
                                    isBuyMoreDisabled: A,
                                }),
                                details: P,
                                overlayType: b,
                                onSlotClick: L,
                                onTooltipShow: C ? z : void 0,
                                onTooltipHide: C ? G : void 0,
                                lockReason: D,
                            });
                        },
                    ),
                    tu = {
                        base: 'Cards_base_57',
                        base__large: 'Cards_base__large_db',
                        base__huge: 'Cards_base__huge_ac',
                        base__disabled: 'Cards_base__disabled_4f',
                        card: 'Cards_card_4e',
                        card__large: 'Cards_card__large_87',
                        card__huge: 'Cards_card__huge_dd',
                    },
                    nu = [
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
                    au = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...nu,
                    ],
                    su = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...nu,
                    ];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const iu = ({
                        currentCardRef: e,
                        isDisabled: t,
                        modelPath: n,
                        selectedSlot: a,
                        compare: s,
                        isBootCamp: r = !1,
                    }) => {
                        const i = (0, rs.GS)(),
                            o = (0, We.m)(n, !1).onSlotAction,
                            u = ((e) =>
                                ((e, t, n) => {
                                    const a = n !== rs.cJ.Tiny || t ? au : su;
                                    return e
                                        .reduce((e, t) => {
                                            const n = a.indexOf(t.value.itemName);
                                            return (e[-1 === n ? Math.max(e.length, su.length) : n] = t), e;
                                        }, [])
                                        .filter((e) => Boolean(e));
                                })(e, s, i))((0, We.m)(`${n}.slots`)).map(({ value: t }) => {
                                if (!t) return null;
                                const n = t.installedSlotId > -1 && a === t.installedSlotId;
                                return l().createElement(
                                    'div',
                                    { key: t.intCD, ref: n ? e : null, className: c()(tu.card, i && tu[`card__${i}`]) },
                                    l().createElement(
                                        eu,
                                        ru({}, t, { isCurrent: n, onSlotAction: o, isBootCamp: r, compare: s }),
                                    ),
                                );
                            }),
                            _ = c()(tu.base, i && tu[`base__${i}`], t && tu.base__disabled);
                        return l().createElement('div', { id: 'consumables', className: _ }, u);
                    },
                    ou = 'model.tankSetup.consumablesSetup',
                    lu = ({ compare: e = !1 }) => {
                        const t = (0, rs.GS)(),
                            n = (0, We.m)(e ? 'model' : 'model.ammunitionPanel').selectedSlot,
                            a = (0, We.m)('model').isBootcamp,
                            s = (0, We.m)(ou),
                            r = s.onDealConfirmed,
                            i = s.onDealCancelled,
                            o = s.onAutoRenewalChanged;
                        return l().createElement(rs.Ar, {
                            header: e
                                ? l().createElement(Gl, { type: et.mH })
                                : l().createElement(Po, { title: R.strings.tank_setup.section.consumables() }),
                            content: l().createElement(
                                Yi,
                                { selectedSlotId: n },
                                l().createElement(iu, { selectedSlot: n, modelPath: ou, compare: e, isBootCamp: a }),
                            ),
                            footer:
                                !e &&
                                l().createElement(xl.w, {
                                    withConfirmation: !0,
                                    renewalType: Ll.m.Consumables,
                                    mediaSize: t,
                                    parentModelPath: ou,
                                    onDealConfirmed: r,
                                    onDealCancelled: i,
                                    onAutoRenewalChanged: o,
                                }),
                            compare: e,
                        });
                    };
                var uu = n(2106),
                    cu = n(8586),
                    _u = n(3978);
                const du = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    mu = 'FilterItem_base_2e',
                    pu = ({ name: e }) => {
                        const t = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            }),
                            [e],
                        );
                        return l().createElement('div', { className: mu, style: t });
                    };
                R.strings.common.percentValue();
                let bu;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(bu || (bu = {}));
                const Eu = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let gu;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(gu || (gu = {}));
                const hu = 'ClearBtn_base_a6',
                    fu = 'ClearBtn_stroke_09',
                    vu = 'ClearBtn_background_61',
                    Au = 'ClearBtn_base__hover_3b',
                    Cu = 'ClearBtn_base__down_60',
                    Su = 'ClearBtn_cross_1d',
                    Du = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, o.useState)(!1),
                            r = s[0],
                            i = s[1],
                            u = (0, o.useState)(!1),
                            _ = u[0],
                            d = u[1],
                            m = (0, o.useCallback)(() => {
                                (0, nt.G)(a), d(!1), i(!0);
                            }, [a]),
                            p = (0, o.useCallback)(() => {
                                (0, nt.G)(n), d(!0);
                            }, [n]),
                            b = (0, o.useCallback)(() => {
                                d(!1), i(!1);
                            }, []),
                            E = c()(hu, _ && Au, r && Cu);
                        return l().createElement(
                            Be.i,
                            Eu,
                            l().createElement(
                                'div',
                                { id: e, className: E, onMouseDown: m, onMouseOver: p, onMouseLeave: b, onClick: t },
                                l().createElement('div', { className: vu }),
                                l().createElement('div', { className: fu }),
                                l().createElement('div', { className: Su }),
                            ),
                        );
                    },
                    Fu = 'MatchDetails_base_a8',
                    Bu = 'MatchDetails_count_d2',
                    yu = 'MatchDetails_clear_21',
                    wu = 'MatchDetails_clear__shown_49',
                    ku = 'MatchDetails_separator_bc',
                    Tu = 'MatchDetails_arrow_b0',
                    xu = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, o.useCallback)(() => t(), [t]),
                            r = c()(yu, e && wu);
                        return l().createElement(
                            'div',
                            { className: Fu },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('span', { className: Bu }, n),
                                    l().createElement(
                                        'span',
                                        { className: ku },
                                        '/',
                                        l().createElement('span', { className: Tu }),
                                    ),
                                ),
                            l().createElement('span', { className: Bu }, a),
                            l().createElement(
                                'span',
                                { className: r },
                                l().createElement(Du, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    Lu = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: r,
                        onFilterReset: i,
                        selectedSlotSpecialization: u,
                    }) => {
                        const _ = (0, rs.GS)(),
                            d = At('FilterTutorialHintZone', ft);
                        (0, o.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, V.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: l().createElement(pu, { name: e }),
                            callback: (e, t) => {
                                r({ name: e }), (0, _u.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: uu.L.ghost,
                                mixClass: c()(du.button, u && e === u && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: R.strings.tank_setup.categories.$dyn(e),
                                body: R.strings.tank_setup.categories.body.$dyn(e),
                            },
                        }));
                        return l().createElement(
                            'div',
                            { className: c()(du.base, _ && du[`base__${_}`], s && du.base__detailed) },
                            s &&
                                l().createElement(xu, {
                                    isFilterActive: a,
                                    onFilterReset: i,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            l().createElement(
                                'div',
                                { className: du.buttons },
                                l().createElement(cu.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var Nu = n(2372);
                const Iu = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    Ru = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Mu = (e) => (e ? Ru.disabled.text() : Ru.notDisabled.text()),
                    Ou = ({ disabled: e }) => {
                        const t = (0, rs.GS)(),
                            n = (0, We.m)('model.tankSetup.optDevicesSetup.specialCurrency', !0),
                            a = n.value,
                            s = n.onGetMoreCurrency,
                            r = (0, o.useCallback)(() => s(), [s]),
                            i = (0, o.useMemo)(() => ({ tooltipId: et.$4 }), []);
                        return l().createElement(
                            'div',
                            { className: c()(Iu.base, t && Iu[`base__${t}`]) },
                            l().createElement(
                                Fe.t,
                                { args: i },
                                l().createElement(
                                    'div',
                                    { className: Iu.currency },
                                    l().createElement(Nu.A, { value: a }),
                                    l().createElement('div', { className: Iu.currencyIcon }),
                                ),
                            ),
                            l().createElement(
                                Be.i,
                                { body: Mu(e) },
                                l().createElement(
                                    'div',
                                    null,
                                    l().createElement(
                                        cs.u5,
                                        { onClick: r, mixClass: Iu.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    };
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Hu = (e, t) => e && l().createElement(Ou, { disabled: t }),
                    $u = (e) =>
                        !e.isComparisonHeader &&
                        ((e) => {
                            const t = e.haveSuitableEquipments,
                                n = e.hasUnfitItems;
                            return e.isIntroduction ? Hu(!t, !n) : Hu(t, !t);
                        })(e),
                    Wu = ({
                        tabs: e,
                        onTabChanged: t,
                        filter: n,
                        onFilterChanged: a,
                        onFilterReset: s,
                        propsForDisplayHeaderContent: r,
                        selectedSlotSpecialization: i,
                    }) => {
                        const u = r.isComparisonHeader,
                            c = e.tabs.length > 1 && l().createElement(Tl, Pu({}, e, { onTabChanged: t })),
                            _ = (0, o.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case et.S:
                                            return l().createElement(
                                                Lu,
                                                Pu({}, n, {
                                                    onFilterChanged: a,
                                                    onFilterReset: s,
                                                    selectedSlotSpecialization: i,
                                                }),
                                            );
                                        case et.pi:
                                            return $u(r);
                                        default:
                                            return null;
                                    }
                                },
                                [n, a, s, r, i],
                            );
                        return u
                            ? l().createElement(Gl, { type: et.zn, tabs: c, content: _(e.selectedTabName) })
                            : l().createElement(Po, {
                                  title: R.strings.tank_setup.section.optDevices(),
                                  content: _(e.selectedTabName),
                                  tabs: c,
                              });
                    },
                    zu = 'Unit_base_15',
                    Gu = 'Unit_base__special_37',
                    Xu = 'Unit_glow_38',
                    ju = R.strings.tank_setup.kpi.bonus.valueTypes,
                    Yu = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Uu = ({ value: e, valueType: t, valueKey: n, isSpecial: a }) => {
                        const s = 'mul' === t ? 100 * (e - 1) : e,
                            r = s > 0 ? '+' : '',
                            i = L.Z5.getRealFormat(s, L.Gr.WO_ZERO_DIGITS),
                            o = ju.$dyn(n),
                            u = `${i}${o ? ` ${o}` : Yu}`;
                        return l().createElement(
                            'div',
                            { className: c()(zu, a && Gu) },
                            l().createElement('span', null, l().createElement('span', { className: Xu }), r + u),
                        );
                    },
                    Vu = 'Bonus_base_aa',
                    Zu = 'Bonus_text_48',
                    qu = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Ku = ({ values: e, localeName: t }) => {
                        const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                        if (!n) return qu;
                        const a = n.value,
                            s = a.value,
                            r = 'mul' === a.valueType ? 100 * (s - 1) : s;
                        return { calcValue: r, isPositive: r > 0, valueKey: a.valueKey };
                    };
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Qu = ({ bonus: e, mediaSize: t, isSpecial: n, visibleLinesCount: a }) => {
                        const s = ((e, t = !1) =>
                                t || Ku(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(e),
                            r = (0, o.useMemo)(() => {
                                let t = null;
                                return (
                                    e.values.forEach(({ value: a }) => {
                                        a &&
                                            a.valueKey === e.localeName &&
                                            (t = l().createElement(Uu, Ju({ isSpecial: n }, a)));
                                    }),
                                    t
                                );
                            }, [e, n]);
                        return (
                            s &&
                            l().createElement(
                                'span',
                                { className: Vu },
                                r,
                                ' ',
                                a &&
                                    s &&
                                    l().createElement(
                                        'span',
                                        { className: Zu },
                                        l().createElement(no.n, { linesCount: a, blocks: (0, no.D)(s), mediaSize: t }),
                                    ),
                            )
                        );
                    },
                    ec = 'Bonuses_base_af',
                    tc = 'Bonuses_bonus_d1',
                    nc = 'Bonuses_text_37',
                    ac = 'Bonuses_effect_f8',
                    sc = 'Bonuses_icon_40',
                    rc = (0, o.memo)(
                        ({ parentId: e, items: t, effect: n, mediaSize: a, maxLines: s, isSpecial: r }) => {
                            const i = (0, o.useMemo)(() => {
                                    if (!n) return [null, 0];
                                    const e = 1 === t.length ? 2 : 1;
                                    return [
                                        l().createElement(
                                            'div',
                                            { className: tc },
                                            l().createElement(
                                                'span',
                                                { className: ac },
                                                l().createElement('span', { className: sc }),
                                                R.strings.tank_setup.effects.name(),
                                            ),
                                            ' ',
                                            l().createElement(
                                                'span',
                                                { className: nc },
                                                l().createElement(no.n, {
                                                    mediaSize: a,
                                                    linesCount: e,
                                                    blocks: (0, no.D)(n),
                                                }),
                                            ),
                                        ),
                                        e,
                                    ];
                                }, [a, n, t.length]),
                                u = i[0],
                                c = i[1];
                            return (
                                c && (s -= c),
                                l().createElement(
                                    'div',
                                    { id: `${e}-bonuses`, className: ec },
                                    u,
                                    t.map(({ value: e }, n) => {
                                        let i;
                                        return s && e
                                            ? ((i = t.length > 2 ? 1 : 2 === t.length ? (s > 2 ? 2 : 1) : s),
                                              (s -= i),
                                              l().createElement(
                                                  'div',
                                                  { key: n, className: tc },
                                                  l().createElement(Qu, {
                                                      bonus: e,
                                                      mediaSize: a,
                                                      isSpecial: r,
                                                      visibleLinesCount: i,
                                                  }),
                                              ))
                                            : null;
                                    }),
                                )
                            );
                        },
                    ),
                    ic = 'DeviceActions_base_c0',
                    oc = 'DeviceActions_base__hidden_a6',
                    lc = 'DeviceActions_base__shown_b0',
                    uc = (0, o.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: r,
                            isFreeToDemount: i,
                            destroyTooltipBodyPath: o,
                            level: u,
                        }) => {
                            const _ = (s || a) && t.includes(Ui.Rs),
                                d = t.length && (t[0] !== Ui.Rs || _),
                                m = c()(ic, d ? lc : oc);
                            return l().createElement(
                                'div',
                                { className: m },
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.DA}`,
                                    actionType: Ui.DA,
                                    onClick: n,
                                    show: t.includes(Ui.DA),
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.FR}`,
                                    actionType: Ui.FR,
                                    onClick: n,
                                    show: t.includes(Ui.FR),
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.Rs}`,
                                    actionType: Ui.Rs,
                                    onClick: n,
                                    show: _,
                                    isModernized: r,
                                    level: u,
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.dZ}`,
                                    actionType: Ui.dZ,
                                    onClick: n,
                                    show: t.includes(Ui.dZ),
                                    isFreeToDemount: i,
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.Fd}`,
                                    actionType: Ui.Fd,
                                    onClick: n,
                                    show: t.includes(Ui.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: i,
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui.sH}`,
                                    actionType: Ui.sH,
                                    onClick: n,
                                    show: t.includes(Ui.sH),
                                }),
                                l().createElement(Nl.a, {
                                    parentId: `${e}-${Ui._2}`,
                                    actionType: Ui._2,
                                    buttonType: uu.L.secondary,
                                    onClick: n,
                                    show: (r || !i) && t.includes(Ui._2),
                                    isModernized: r,
                                    tooltipBodyPath: o,
                                }),
                            );
                        },
                    );
                function cc() {
                    return (
                        (cc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cc.apply(this, arguments)
                    );
                }
                const _c = (0, o.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            itemInstalledSetupIdx: n,
                            itemInstalledSetupSlotIdx: a,
                            isMountedMoreThanOne: s,
                            imageName: r,
                            itemsInStorage: i,
                            price: u,
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
                            isTrophy: A,
                            activeSpecsMask: C,
                            onSlotAction: S,
                            isCurrent: D,
                            compare: F,
                            isModernized: B,
                            level: y,
                            lockReason: w,
                            destroyTooltipBodyPath: k,
                            isBootCamp: T = !1,
                        }) => {
                            const x = (0, rs.GS)(),
                                L = x === rs.cJ.Large || x === rs.cJ.Huge,
                                N = t > -1,
                                I = `${_}-device`,
                                M = Qt(Vl.Bootcamp, Zl.BC_DEVICE_SETUP_SUB_VIEW),
                                O = M[0],
                                P = M[1],
                                H = (0, o.useCallback)(() => {
                                    O(ql.TooltipOpened);
                                }, [O]),
                                $ = (0, o.useCallback)(() => {
                                    P(ql.TooltipOpened, 2, Pt.Info, { [Ul]: _.toString() });
                                }, [P, _]),
                                W = (0, o.useMemo)(() => {
                                    const e = [];
                                    let t = !0;
                                    return (
                                        N &&
                                            !p &&
                                            (D || e.push(Ui.Xo),
                                            T ||
                                                (d && !F
                                                    ? ((t = !D),
                                                      e.push(...((e) => (e ? [Ui.Fd, Ui.sH] : [Ui.dZ]))(s)),
                                                      e.push(Ui._2))
                                                    : e.push(
                                                          ((e, t, n) => ((!Boolean(e) && !t) || n ? Ui.FR : Ui.DA))(
                                                              i,
                                                              d,
                                                              m,
                                                          ),
                                                      ))),
                                        !v || F || p || T || e.push(Ui.Rs),
                                        { availableActions: e, isDeviceClickable: t }
                                    );
                                }, [N, p, v, F, T, D, d, s, i, m]),
                                z = W.availableActions,
                                G = W.isDeviceClickable,
                                X = (0, o.useCallback)(
                                    (e) => {
                                        S({ actionType: e, intCD: _, installedSlotId: t });
                                    },
                                    [S, _, t],
                                ),
                                j = (0, o.useCallback)(() => {
                                    z.length && z[0] !== Ui.Rs ? X(z[0]) : X(Ui.eC);
                                }, [z, X]),
                                Y = (0, o.useMemo)(() => {
                                    const e = { intCD: _, slotType: et.zn, fieldType: 0 };
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
                                U = Y[0],
                                V = Y[1],
                                Z = (0, o.useMemo)(
                                    () =>
                                        L
                                            ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(r)
                                            : R.images.gui.maps.icons.quests.bonuses.big.$dyn(r),
                                    [L, r],
                                ),
                                q =
                                    c && c.specializations.length
                                        ? l().createElement(Zn.G, cc({}, c, { activeSpecsMask: C, mediaSize: x }))
                                        : null,
                                K = F
                                    ? null
                                    : l().createElement(go, {
                                          isMounted: d || m,
                                          itemsInStorage: i,
                                          price: u,
                                          possibleZeroCount: A || B,
                                          show: !z.length || Boolean(i || d || m),
                                      });
                            return l().createElement(co, {
                                parentId: I,
                                mediaSize: x,
                                name: e,
                                tooltipArgs: U,
                                contextMenuArgs: V,
                                imageSource: Z,
                                isCurrent: D,
                                isActive: N,
                                isDisabled: p,
                                isLocked: g,
                                isClickable: G,
                                isModernized: B,
                                level: y,
                                specializations: q,
                                details: l().createElement(
                                    rc,
                                    cc(
                                        {
                                            parentId: I,
                                            isSpecial: Boolean(C),
                                            effect: f,
                                            mediaSize: x,
                                            maxLines: L ? 4 : 3,
                                        },
                                        h,
                                    ),
                                ),
                                options: K,
                                actions: l().createElement(uc, {
                                    parentId: I,
                                    availableActions: z,
                                    onActionClick: X,
                                    isInstalled: N,
                                    isModernized: B,
                                    level: y,
                                    isFreeToDemount: b,
                                    destroyTooltipBodyPath: k,
                                }),
                                overlayType: E,
                                onSlotClick: j,
                                shouldHandleMouseOver: !0,
                                onTooltipShow: T ? H : void 0,
                                onTooltipHide: T ? $ : void 0,
                                lockReason: w,
                            });
                        },
                    ),
                    dc = {
                        base: 'Cards_base_f1',
                        base__large: 'Cards_base__large_a2',
                        base__huge: 'Cards_base__huge_32',
                        base__disabled: 'Cards_base__disabled_20',
                        card: 'Cards_card_5e',
                        card__large: 'Cards_card__large_0e',
                        card__huge: 'Cards_card__huge_84',
                    };
                function mc() {
                    return (
                        (mc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        mc.apply(this, arguments)
                    );
                }
                const pc = (0, o.memo)(
                        ({
                            currentCardRef: e,
                            selectedSlot: t,
                            modelPath: n,
                            isDisabled: a,
                            isBootCamp: s = !1,
                            compare: r = !1,
                        }) => {
                            const i = (0, rs.GS)(),
                                o = (0, We.m)(n, !1).onSlotAction,
                                u = (0, We.m)(`${n}.slots`).map(({ value: n }) => {
                                    if (!n || !n.isVisible) return null;
                                    const a = n.installedSlotId,
                                        u = a > -1 && t === a,
                                        _ = c()(dc.card, i && dc[`card__${i}`]);
                                    return l().createElement(
                                        'div',
                                        { key: n.intCD, ref: u ? e : null, className: _ },
                                        l().createElement(
                                            _c,
                                            mc({}, n, { isCurrent: u, onSlotAction: o, compare: r, isBootCamp: s }),
                                        ),
                                    );
                                }),
                                _ = c()(dc.base, i && dc[`base__${i}`], a && dc.base__disabled);
                            return l().createElement('div', { className: _, id: 'optDevices' }, u);
                        },
                    ),
                    bc = {
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
                    Ec = ({ introType: e }) => {
                        const t = c()(bc.icon, bc[`icon__currency-${e}`]),
                            n = (0, o.useMemo)(
                                () => ({
                                    currencyName: l().createElement(
                                        'span',
                                        { className: bc.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: l().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? l().createElement(_e, { binding: n, text: a, classMix: bc.message }) : null;
                    },
                    gc = ({ slotsType: e, haveSuitableEquipments: t = !0 }) => {
                        const n = (0, rs.GS)(),
                            a = n === rs.cJ.Large || n === rs.cJ.Huge,
                            s = (0, o.useState)(!0),
                            r = s[0],
                            i = s[1],
                            u = (0, We.m)(fc, !1).onIntroPassed,
                            _ = (0, o.useCallback)(() => {
                                i(!1);
                            }, []),
                            d = (0, o.useCallback)(() => {
                                u(), i(!0);
                            }, [u]),
                            m = c()(bc.base, n && bc[`base__${n}`]),
                            p = (0, o.useMemo)(
                                () => ({
                                    enter: bc.base__enter,
                                    enterActive: bc.base__enterActive,
                                    exit: bc.base__exit,
                                    exitActive: bc.base__exitActive,
                                }),
                                [],
                            ),
                            b = c()(bc.image, a ? bc[`image__${e}Large`] : bc[`image__${e}`]),
                            E = t
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(e)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(e);
                        return l().createElement(
                            Xe.Z,
                            { in: r, classNames: p, timeout: 300, onExited: d },
                            l().createElement(
                                'div',
                                { className: m, id: 'introduction' },
                                l().createElement(
                                    'div',
                                    { className: bc.introduction },
                                    l().createElement('div', { className: b }),
                                    l().createElement(
                                        'div',
                                        { className: bc.description },
                                        l().createElement('div', { className: bc.title }, E),
                                        l().createElement(Ec, { introType: e }),
                                    ),
                                    t &&
                                        l().createElement(
                                            cs.u5,
                                            { type: cs.L$.secondary, size: cs.qE.medium, onClick: _ },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    },
                    hc = 'OptDevicesSetup_intro_ae',
                    fc = 'model.tankSetup.optDevicesSetup',
                    vc = ({ compare: e }) => {
                        var t, n, a, s;
                        const r = (0, rs.GS)(),
                            i = (0, We.m)(e ? 'model' : 'model.ammunitionPanel'),
                            u = i.selectedSlot,
                            c = i.sectionGroups,
                            _ = (0, We.m)('model').isBootcamp,
                            d = (0, We.m)(fc),
                            m = d.slots,
                            p = d.withIntroduction,
                            b = d.introductionType,
                            E = (0, We.m)(fc, !1),
                            g = E.onDealConfirmed,
                            h = E.onDealCancelled,
                            f = E.onTabChanged,
                            v = E.onAutoRenewalChanged,
                            A = E.onFilterChanged,
                            C = E.onFilterReset,
                            S = E.hasUnfitItems,
                            D = (0, We.m)(`${fc}.filter`),
                            F = (0, We.m)(`${fc}.tabs`),
                            B =
                                c &&
                                (null == (t = c[0]) ||
                                null == (n = t.value.sections[0]) ||
                                null == (a = n.value.slots[u])
                                    ? void 0
                                    : a.value),
                            y = F.selectedTabName,
                            w = (0, We.m)(`${fc}.slots`).length,
                            k = (0, o.useMemo)(
                                () =>
                                    !e &&
                                    p &&
                                    l().createElement(
                                        'div',
                                        { className: hc },
                                        l().createElement(pc, { selectedSlot: u, modelPath: fc, isDisabled: p }),
                                        l().createElement(gc, { slotsType: b, haveSuitableEquipments: m.length > 0 }),
                                    ),
                                [e, p, b, m.length, u],
                            ),
                            T = {
                                tabs: F,
                                filter: D,
                                onFilterChanged: A,
                                onFilterReset: C,
                                onTabChanged: f,
                                propsForDisplayHeaderContent: {
                                    isComparisonHeader: e,
                                    isIntroduction: p,
                                    haveSuitableEquipments: m.length > 0,
                                    hasUnfitItems: S,
                                },
                                selectedSlotSpecialization:
                                    null == B || null == (s = B.specializations.specializations[0])
                                        ? void 0
                                        : s.value.name,
                            };
                        return l().createElement(rs.Ar, {
                            compare: e,
                            header: l().createElement(Wu, T),
                            content:
                                k ||
                                l().createElement(
                                    Yi,
                                    { selectedSlotId: u, scrollAreaKey: y, updateKey: `${D.selectedFilterCount}:${w}` },
                                    l().createElement(pc, {
                                        compare: e,
                                        selectedSlot: u,
                                        modelPath: fc,
                                        isDisabled: p,
                                        isBootCamp: _,
                                    }),
                                ),
                            footer:
                                !e &&
                                l().createElement(xl.w, {
                                    withConfirmation: !0,
                                    parentModelPath: fc,
                                    mediaSize: r,
                                    onDealConfirmed: g,
                                    onDealCancelled: h,
                                    onAutoRenewalChanged: v,
                                }),
                        });
                    };
                var Ac = n(5958);
                const Cc = {
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
                    Sc = l().memo(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: s,
                            actionType: r,
                            uniqueKey: i,
                            onTransitionEnd: u,
                        }) => {
                            const _ = (0, o.useMemo)(() => n === rs.cJ.Tiny, [n]),
                                d = (0, o.useMemo)(() => a === t, [a, t]),
                                m = (0, o.useMemo)(() => r === Ui.Xo || r === Ui.zf, [r]),
                                p = (0, o.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, o.useMemo)(() => ((s - a > 1 && _) || !m ? 'Fade' : ''), [m, a, s, _]),
                                E = (0, o.useCallback)(
                                    (e) =>
                                        l().cloneElement(e, {
                                            classNames: {
                                                enterActive: Cc.base__enter,
                                                enterDone: Cc[`base__enter${p}${b}`],
                                                exit: Cc[`base__exit${p}${b}`],
                                                exitActive: Cc.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                g = (0, o.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), u && u();
                                        }, Ac.PD);
                                    },
                                    [u],
                                ),
                                h = (0, o.useMemo)(() => ({ animationDuration: `${Ac.PD}ms` }), []),
                                f = c()(Cc.base, Cc[`base__${n}`]);
                            return l().createElement(
                                Ge.Z,
                                { component: null, childFactory: E },
                                l().createElement(
                                    Xe.Z,
                                    { key: i, timeout: Ac.PD, onEntered: g },
                                    l().createElement('div', { className: f, style: h }, e),
                                ),
                            );
                        },
                    ),
                    Dc = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    Fc = ({ paramName: e, value: t, metricValue: n, media: a, isSuperficial: s }) => {
                        const r = c()(Dc.base, a && Dc[`base__${a}`]),
                            i = c()(Dc.separator, a && Dc[`separator__${a}`]),
                            u = l().createElement(
                                'div',
                                { className: Dc.value },
                                t || l().createElement('span', null, '—'),
                            ),
                            _ = (0, o.useMemo)(() => {
                                if ('avgPiercingPower' === e) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [e]);
                        return l().createElement(
                            'div',
                            { className: r },
                            s
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      R.strings.menu.tank_params.shortened.$dyn(e),
                                      ' ',
                                      u,
                                      l().createElement('div', { className: Dc.units }, _),
                                  )
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      R.strings.menu.tank_params.$dyn(e),
                                      l().createElement('div', { className: Dc.units }, n),
                                      l().createElement('div', { className: i }),
                                      u,
                                  ),
                        );
                    };
                var Bc = n(7405),
                    yc = n(329);
                const wc = {
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
                function kc() {
                    return (
                        (kc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        kc.apply(this, arguments)
                    );
                }
                const Tc = (0, o.memo)(
                        ({
                            buyCount: e,
                            inStorageCount: t,
                            inVehicleCount: n,
                            isSuperficial: a,
                            price: s,
                            totalPrice: r,
                            mediaSize: i,
                        }) => {
                            const u = (0, o.useMemo)(
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
                                E = c()(wc.base, i && wc[`base__${i}`]),
                                g = c()(wc.separator, i && wc[`separator__${i}`]),
                                h = c()(wc.row, i && wc[`row__${i}`]),
                                f = c()(wc.total, i && wc[`total__${i}`]),
                                v = c()(wc.price, wc.price__final),
                                A = c()(wc.lowResolutionValue, i && wc[`lowResolutionValue__${i}`]),
                                C = c()(wc.hiResolutionValue, i && wc[`hiResolutionValue__${i}`]),
                                S = c()(wc.colored, i && wc[`colored__${i}`]),
                                D = l().createElement('span', { className: wc.indent }),
                                F = l().createElement('span', { className: wc.divider }, '/');
                            return l().createElement(
                                'div',
                                { className: E },
                                l().createElement(
                                    'div',
                                    { className: h },
                                    l().createElement(
                                        'div',
                                        { className: wc.rowItem },
                                        l().createElement('div', { className: f }, u),
                                        l().createElement('div', { className: A }, D, t),
                                    ),
                                    m &&
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            F,
                                            l().createElement(
                                                'div',
                                                { className: wc.rowItem },
                                                l().createElement(
                                                    'div',
                                                    { className: f },
                                                    l().createElement('div', { className: S }, _),
                                                ),
                                                l().createElement('div', { className: A }, D, n),
                                            ),
                                        ),
                                    l().createElement('div', { className: g }),
                                    l().createElement(
                                        'div',
                                        { className: C },
                                        t,
                                        m &&
                                            l().createElement(
                                                l().Fragment,
                                                null,
                                                F,
                                                l().createElement('div', { className: S }, n),
                                            ),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    { className: h },
                                    l().createElement('div', { className: f }, d),
                                    l().createElement('div', { className: g }),
                                    l().createElement(
                                        'div',
                                        { className: wc.value },
                                        l().createElement(
                                            'div',
                                            { className: wc.overall },
                                            '(',
                                            l().createElement('span', null, e),
                                            ' ',
                                            '×',
                                            l().createElement(
                                                Fe.t,
                                                { args: b, isEnabled: p },
                                                l().createElement(
                                                    'span',
                                                    { className: wc.price },
                                                    l().createElement(mo.t, kc({ showZero: !0 }, s)),
                                                ),
                                            ),
                                            ')',
                                            l().createElement(
                                                'span',
                                                { className: v },
                                                e
                                                    ? l().createElement(
                                                          mo.t,
                                                          kc({ showZero: !0, ignoreDiscount: !0 }, r),
                                                      )
                                                    : l().createElement(Bc.F, {
                                                          size: yc.et.small,
                                                          type: yc.V2.credits,
                                                          value: 0,
                                                      }),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    xc = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                function Lc() {
                    return (
                        (Lc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Lc.apply(this, arguments)
                    );
                }
                const Nc = ({
                    buyCount: e,
                    itemsInStorage: t,
                    itemsInVehicle: n,
                    price: a,
                    totalPrice: s,
                    specifications: r,
                    media: i,
                }) => {
                    const u = i === rs.cJ.Tiny,
                        _ = r.map(({ value: e }, t) =>
                            e && ('avgPiercingPower' === e.paramName || (!u && e.value))
                                ? l().createElement(
                                      o.Fragment,
                                      { key: t },
                                      l().createElement(Fc, Lc({}, e, { media: i, isSuperficial: u })),
                                  )
                                : null,
                        ),
                        d = c()(xc.base, i && xc[`base__${i}`]);
                    return l().createElement(
                        'div',
                        { className: d },
                        l().createElement('div', { className: xc.overall }, _),
                        l().createElement(
                            'div',
                            { className: xc.total },
                            l().createElement(Tc, {
                                buyCount: e,
                                inStorageCount: t,
                                inVehicleCount: n,
                                price: a,
                                totalPrice: s,
                                isSuperficial: u,
                                mediaSize: i,
                            }),
                        ),
                    );
                };
                var Ic = n(2094);
                const Rc = {
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
                    Mc = R.strings.item_types.shell.kinds,
                    Oc = ({
                        type: e,
                        intCD: t,
                        imageName: n,
                        count: a,
                        buyCount: s,
                        price: r,
                        totalPrice: i,
                        itemsInStorage: u,
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
                        mediaSize: A,
                    }) => {
                        const C = (0, o.useCallback)(
                                (e) => {
                                    b && b({ intCD: t, newCount: e });
                                },
                                [b, t],
                            ),
                            S = (0, o.useMemo)(() => {
                                const e = { slotType: et.g9, fieldType: 0, intCD: t };
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
                            D = S[0],
                            F = S[1],
                            B = (0, o.useMemo)(() => {
                                const e = ((e) => {
                                    const t = R.images.gui.maps.icons.shell;
                                    switch (e) {
                                        case rs.cJ.Huge:
                                        case rs.cJ.Large:
                                            return t.large;
                                        default:
                                            return t.big;
                                    }
                                })(A);
                                return { backgroundImage: `url(${e ? e.$dyn(n) : ''})` };
                            }, [n, A]),
                            y = (0, o.useMemo)(() => {
                                const t = 'ARMOR_PIERCING_FSDS' !== e ? Mc.$dyn(e) : Mc.ARMOR_PIERCING_FSDS_SHORT();
                                return (
                                    t && l().createElement('div', { className: Rc.name }, systemLocale.toUpperCase(t))
                                );
                            }, [e]),
                            w = c()(Rc.count, !a && Rc.count__zero),
                            k = c()(Rc.base, A && Rc[`base__${A}`]);
                        return l().createElement(
                            'div',
                            { className: k },
                            l().createElement(
                                'div',
                                { className: Rc.shell },
                                l().createElement(
                                    Wn,
                                    { args: F },
                                    l().createElement(
                                        Fe.t,
                                        { args: D },
                                        l().createElement(
                                            'div',
                                            { className: Rc.icon, style: B },
                                            l().createElement('div', { className: w }, a),
                                        ),
                                    ),
                                ),
                                y,
                            ),
                            l().createElement(
                                'div',
                                { className: Rc.ammunition },
                                l().createElement(Ic.i, {
                                    parentId: `${t}-slider`,
                                    currentValue: a,
                                    maximum: E,
                                    sliderMaximum: m,
                                    onUpdates: C,
                                    stepCount: p,
                                }),
                            ),
                            l().createElement(
                                'div',
                                { className: Rc.specifications },
                                l().createElement(Nc, {
                                    specifications: d,
                                    itemsInStorage: u,
                                    itemsInVehicle: _,
                                    price: r,
                                    buyCount: s,
                                    media: A,
                                    totalPrice: i,
                                }),
                            ),
                        );
                    },
                    Pc = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    Hc = l().memo(
                        ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: s = 'play' }) => {
                            const r = (0, o.useCallback)(() => {
                                    s && (0, nt.G)(s), t(e);
                                }, [e, t, s]),
                                i = (0, o.useCallback)(() => {
                                    a && (0, nt.G)(a);
                                }, [a]),
                                u = c()(Pc.base, Pc[`base__${n}`]);
                            return l().createElement('div', {
                                id: `swap-${e}`,
                                onClick: r,
                                onMouseEnter: i,
                                className: u,
                            });
                        },
                    ),
                    $c = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        shell: 'Sections_shell_a2',
                        base__large: 'Sections_base__large_d0',
                        base__huge: 'Sections_base__huge_b0',
                        swap: 'Sections_swap_be',
                        swap__noEvents: 'Sections_swap__noEvents_2d',
                    };
                function Wc() {
                    return (
                        (Wc =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Wc.apply(this, arguments)
                    );
                }
                const zc = () => {
                    const e = (0, We.m)(Xc),
                        t = e.installedCount,
                        n = e.maxCount,
                        a = e.clipCount,
                        s = e.onShellUpdate,
                        r = e.onSlotAction,
                        i = (0, We.m)(`${Xc}.slots`),
                        u = (0, We.m)('model.lastSlotAction'),
                        _ = u.leftID,
                        d = u.rightID,
                        m = u.actionType,
                        p = (0, o.useState)(!1),
                        b = p[0],
                        E = p[1],
                        g = (0, rs.GS)(),
                        h = n - t,
                        f = (0, o.useCallback)(
                            (e) => {
                                b || r({ actionType: Ui.Xo, leftID: e, rightID: e + 1 }), E(!0);
                            },
                            [r, b],
                        ),
                        v = (0, o.useCallback)(() => {
                            E(!1);
                        }, [E]),
                        A = c()($c.base, $c[`base__${g}`]);
                    return l().createElement(
                        'div',
                        { className: A },
                        i.map(
                            ({ value: e }, t) =>
                                Boolean(e) &&
                                l().createElement(
                                    o.Fragment,
                                    { key: t },
                                    l().createElement(
                                        Sc,
                                        {
                                            index: t,
                                            uniqueKey: e.intCD,
                                            leftID: _,
                                            rightID: d,
                                            actionType: m,
                                            mediaSize: g,
                                            onTransitionEnd: v,
                                        },
                                        l().createElement(
                                            'div',
                                            { className: $c.shell },
                                            l().createElement(
                                                Oc,
                                                Wc({}, e, {
                                                    clipCount: a,
                                                    maxCount: n,
                                                    availableCount: h + e.count,
                                                    mediaSize: g,
                                                    onShellUpdate: s,
                                                }),
                                            ),
                                        ),
                                    ),
                                    t !== i.length - 1 &&
                                        l().createElement(
                                            'div',
                                            { className: $c.swap },
                                            l().createElement(Hc, { id: t, mediaSize: g, onSwap: f }),
                                        ),
                                ),
                        ),
                    );
                };
                var Gc = n(5096);
                const Xc = 'model.tankSetup.shellsSetup',
                    jc = () => {
                        const e = (0, rs.GS)(),
                            t = (0, We.m)(Xc),
                            n = t.onDealConfirmed,
                            a = t.onDealCancelled,
                            s = t.onAutoRenewalChanged;
                        return l().createElement(rs.Ar, {
                            header: l().createElement(Po, {
                                title: R.strings.tank_setup.section.shells(),
                                content: l().createElement(Gc.k, { isShortened: !0, trackChanges: !0, modelPath: Xc }),
                            }),
                            content: l().createElement(zc, null),
                            footer: l().createElement(xl.w, {
                                withConfirmation: !0,
                                renewalType: Ll.m.Shells,
                                parentModelPath: Xc,
                                mediaSize: e,
                                onDealConfirmed: n,
                                onDealCancelled: a,
                                onAutoRenewalChanged: s,
                            }),
                        });
                    },
                    Yc = {
                        base: 'TankName_base_56',
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                        base__hidden: 'TankName_base__hidden_b0',
                    };
                function Uc(e, t, n, a, s, r, i) {
                    try {
                        var o = e[r](i),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, s);
                }
                function Vc(e) {
                    return function () {
                        var t = this,
                            n = arguments;
                        return new Promise(function (a, s) {
                            var r = e.apply(t, n);
                            function i(e) {
                                Uc(r, a, s, i, o, 'next', e);
                            }
                            function o(e) {
                                Uc(r, a, s, i, o, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const Zc = ({ isHidden: e = !1 }) => {
                        const t = (0, o.useState)(!1),
                            n = t[0],
                            a = t[1],
                            s = (0, o.useRef)(null),
                            i = (0, We.m)('model', !1).onResized,
                            u = (0, We.m)('model.vehicleInfo', !0),
                            _ = (0, rs.GS)();
                        (0, o.useEffect)(() => {
                            const e = (0, w.v)(() => a(!0));
                            return () => e();
                        }, []);
                        const d = (0, o.useCallback)(
                            Vc(function* () {
                                yield (0, L.Eu)(), yield Ni();
                                const e = s.current;
                                e &&
                                    i({
                                        x: r.O.view.pxToRem(e.getBoundingClientRect().x),
                                        width: r.O.view.pxToRem(e.offsetWidth),
                                    });
                            }),
                            [i],
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
                                [d, i],
                            );
                        const m = c()(Yc.base, _ && Yc[`base__${_}`], e && Yc.base__hidden);
                        return l().createElement('div', { className: m, ref: s }, l().createElement(hr, u));
                    },
                    qc = {
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
                    Kc = [et.zn, et.g9, et.mH, et.G$, et.YN],
                    Jc = (e, t) => (t === e ? '' : Kc.indexOf(t) > Kc.indexOf(e) ? 'right' : 'left'),
                    Qc = ({ children: e, selectedSetup: t }) => {
                        const n = l().createRef(),
                            a = (0, o.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, o.useMemo)(() => {
                                const e = Jc(a.current.selectedSetup, t);
                                return { enter: qc[`base__${e}Enter`] };
                            }, [t]),
                            r = (0, o.useCallback)(
                                (e) => {
                                    const s = Jc(a.current.selectedSetup, t);
                                    (e.className = c()(qc.base, qc.base__exit)),
                                        e.classList.add(qc[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n);
                                    Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(qc.base__previous);
                                    }),
                                        n.current && n.current.classList.add(qc.base__previous);
                                },
                                [n, t],
                            ),
                            i = (0, o.useCallback)(
                                (e) => {
                                    const n = Jc(a.current.previousSelectedSetup, t);
                                    (e.className = qc.base), e.classList.add(qc[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            u = (0, o.useCallback)(
                                (e) => {
                                    const n = Jc(a.current.previousSelectedSetup, t);
                                    e.classList.add(qc[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, o.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            l().createElement(
                                Ge.Z,
                                null,
                                l().createElement(
                                    Xe.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: r,
                                        onEnter: i,
                                        onEntering: u,
                                    },
                                    l().createElement('div', { className: qc.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    e_ = ({ compare: e = !1 }) => {
                        const t = (0, We.m)('model.tankSetup').selectedSetup;
                        return l().createElement(
                            o.Fragment,
                            null,
                            l().createElement(
                                Qc,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case et.zn:
                                            return l().createElement(vc, { compare: e });
                                        case et.g9:
                                            return l().createElement(jc, null);
                                        case et.mH:
                                            return l().createElement(lu, { compare: e });
                                        case et.G$:
                                            return l().createElement(Yl, { compare: e });
                                        case et.YN:
                                            return l().createElement(Uo, null);
                                        default:
                                            return l().createElement(vc, { compare: e });
                                    }
                                })(),
                            ),
                            !e && l().createElement(Zc, { isHidden: t === et.YN }),
                        );
                    },
                    t_ = () => {
                        const e = $('model'),
                            t = e.onClose,
                            n = e.onViewRendered,
                            a = e.onAnimationEnd,
                            s = e.show,
                            r = e.isReady,
                            i = e.isBootcamp,
                            u = $('model.tankSetup').selectedSetup,
                            c = (0, o.useState)(!1),
                            _ = c[0],
                            d = c[1];
                        (0, o.useEffect)(() => (0, w.v)(n), [n]);
                        const m = (0, o.useCallback)(() => a(), [a]),
                            p = (0, o.useCallback)(() => {
                                !_ && t();
                            }, [t, _]);
                        return l().createElement(tt.S, {
                            show: s,
                            content: l().createElement(e_, null),
                            panel: l().createElement(Qa, {
                                show: s,
                                isReady: r,
                                isBootCamp: i,
                                panelType: Ze.Setup,
                                setIsExitBlocked: d,
                            }),
                            button: u === et.YN && l().createElement(ss, { theme: as.Standalone }),
                            onAnimationDone: m,
                            onClose: p,
                        });
                    };
                r.O.view.whenTutorialReady.then(() => {
                    y().render(
                        l().createElement(F, null, l().createElement(t_, null)),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => u });
                var a = n(6483),
                    s = n.n(a),
                    r = n(7739),
                    i = n(6179),
                    o = n.n(i),
                    l = n(1960);
                let u;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(u || (u = {}));
                const c = () => {
                        const e = (0, i.useContext)(r.YN);
                        return e.extraSmall
                            ? u.Tiny
                            : e.small
                              ? u.Small
                              : e.medium || 1080 === e.height
                                ? u.Medium
                                : e.large
                                  ? u.Large
                                  : e.extraLarge
                                    ? u.Huge
                                    : u.None;
                    },
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: r = !1 }) => {
                        const i = c(),
                            u = s()(l.Z.base, i && l.Z[`base__${i}`], r && l.Z.base__compare),
                            _ = s()(l.Z.header, i && l.Z[`header__${i}`]),
                            d = s()(l.Z.main),
                            m = s()(l.Z.content);
                        return o().createElement(
                            'div',
                            { className: u },
                            e && o().createElement('div', { className: _ }, e),
                            o().createElement(
                                'div',
                                { className: m },
                                o().createElement(
                                    'div',
                                    { className: d },
                                    o().createElement('div', { className: l.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && o().createElement('div', { className: l.Z.footer }, a),
                        );
                    };
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => A });
                var a = n(6483),
                    s = n.n(a),
                    r = n(3457),
                    i = n(2106),
                    o = n(6373),
                    l = n(6179),
                    u = n.n(l);
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
                const A = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: A = !1,
                    disabledTooltipText: C,
                    tooltipBodyPath: S,
                    buttonType: D = i.L.primary,
                    isModernized: F,
                    isFreeToDemount: B,
                    level: y,
                    onClick: w,
                }) => {
                    const k = (0, l.useRef)(null),
                        T = (0, l.useRef)(v.Hidden),
                        x = (0, l.useRef)(!1),
                        L = (0, l.useState)(!a),
                        N = L[0],
                        I = L[1],
                        M = (0, l.useState)(!1),
                        O = M[0],
                        P = M[1],
                        H = (0, l.useState)(),
                        $ = H[0],
                        W = H[1],
                        z = (0, l.useCallback)(() => {
                            const e = T.current;
                            e === v.FadeIn
                                ? ((T.current = v.Hidden), I(!0))
                                : e === v.FadeOut && (T.current = v.Visible);
                        }, []);
                    (0, l.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', z),
                                () => {
                                    e.removeEventListener('animationend', z);
                                }
                            );
                    }, [z]),
                        (0, l.useEffect)(() => {
                            a !== x.current &&
                                (a ? ((T.current = v.FadeOut), I(!1)) : (T.current = v.FadeIn), (x.current = a));
                        }, [a]),
                        (0, l.useEffect)(() => {
                            if (O) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [O]),
                        (0, l.useEffect)(() => () => $ && clearTimeout($), [$]);
                    const G = (0, l.useCallback)(() => {
                            O || (P(!0), T.current === v.Visible && W(setTimeout(() => w(t), 200)));
                        }, [t, w, O]),
                        X = F ? f(t, y) : t,
                        j = (0, l.useMemo)(() => {
                            if (A) return { body: C, isEnabled: Boolean(C) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? f(e, t) : e))(t, y, B, F);
                            return {
                                header: g.title.$dyn(e),
                                body: h.includes(e) ? void 0 : g.description.$dyn(S || e),
                            };
                        }, [t, A, C, B, F, y, S]),
                        Y = (0, l.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(X)})`,
                            }),
                            [X, n],
                        );
                    return u().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, a ? d : _, N && m) },
                        u().createElement(
                            o.i,
                            j,
                            u().createElement(
                                'div',
                                { className: p },
                                u().createElement(
                                    r.u5,
                                    { onClick: G, type: D, mixClass: E, disabled: A },
                                    u().createElement('div', { className: b, style: Y }),
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
                    r = n(6483),
                    i = n.n(r),
                    o = n(3457),
                    l = n(6373);
                const u = 'CtaButtons_base_4c',
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
                    callback: r,
                    withToggle: u = !1,
                    toggle: E,
                    buttonProps: g,
                }) => {
                    const h = (0, a.useCallback)(() => {
                            r(t, E);
                        }, [t, r, E]),
                        f = (0, a.useMemo)(() => {
                            if (u) {
                                const t = i()(m, E && p);
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
                        }, [u, e, E]);
                    return s().createElement(l.i, n, s().createElement(o.u5, b({}, g, { onClick: h }), f));
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
                        { className: u },
                        e.map((e) => s().createElement(E, g({ key: e.ctaType }, e))),
                    );
            },
            7208: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => p });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(2558),
                    l = n(8934),
                    u = n(4179);
                const c = 'Animation_base_ab',
                    _ = 'Animation_base__withAnimation_41',
                    d = 'Animation_base__enter_1e',
                    m = 'Animation_base__exit_88',
                    p = ({ children: e, when: t, canAccept: n }) => {
                        const r = i()(c, _),
                            p = (0, a.useCallback)((e, t) => {
                                (0, u.Eu)().then(() => {
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
                                      l.Z,
                                      { in: n, timeout: 500, onEnter: b, onExit: E, key: `index-${n}` },
                                      s().createElement('div', { className: r }, e),
                                  ),
                              )
                            : s().createElement('div', { className: c }, e);
                    };
            },
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => u, m: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(9056),
                    i = n(6373),
                    o = n(2262);
                let l;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(l || (l = {}));
                const u = (0, a.memo)(
                    ({
                        modelPath: e,
                        label: t = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: n,
                        renewType: u = l.General,
                    }) => {
                        const c = (0, r.m)(e),
                            _ = c.isAutoRenewalEnabled,
                            d = c.onAutoRenewalChanged,
                            m = (0, a.useCallback)(() => {
                                const e = { value: !_ };
                                d && d(e), n && n(e);
                            }, [n, d, _]),
                            p = (0, a.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal;
                                return {
                                    header: e.header.$dyn(u) || e.header.general(),
                                    body: u === l.General ? '' : e.body.$dyn(u),
                                };
                            }, [u]);
                        return s().createElement(
                            i.i,
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
                    r = n(3457),
                    i = n(6373),
                    o = n(7383);
                const l = 'ConfirmButton_base_75',
                    u = s().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: i }) => {
                        const o = R.strings.tank_setup.dealPanel.button.$dyn(e),
                            u = (0, a.useCallback)(() => n && n(), [n]);
                        return s().createElement(
                            'div',
                            { ref: i, className: l, id: 'deal-panel-confirm' },
                            s().createElement(r.u5, { size: r.qE.medium, disabled: t, onClick: u }, o),
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
                            onConfirm: l,
                            confirmButtonRef: d,
                        }) => {
                            const m = R.strings.tank_setup.dealPanel,
                                p = s().createElement(u, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: l,
                                    confirmButtonRef: d,
                                });
                            return s().createElement(
                                'div',
                                { id: 'deal-panel-controls', className: c },
                                t
                                    ? s().createElement(
                                          i.i,
                                          { body: m.tooltip.notEnough() },
                                          s().createElement('div', null, p),
                                      )
                                    : p,
                                s().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    s().createElement(
                                        r.u5,
                                        {
                                            size: r.qE.medium,
                                            type: r.L$.secondary,
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
                n.d(t, { w: () => C });
                var a = n(6483),
                    s = n.n(a),
                    r = n(9056),
                    i = n(6179),
                    o = n.n(i),
                    l = n(1922),
                    u = n(3934),
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
                    f = ({ parentId: e, isHideMessage: t, priceLabel: n, price: a, defPrice: r, discount: i }) => {
                        const l = s()(E, t && g);
                        return o().createElement(
                            'div',
                            { id: `${e}-total-price`, className: b },
                            o().createElement('div', { className: l }, n),
                            o().createElement(p.t, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a,
                                defPrice: r,
                                discount: i,
                                priceSeparator: o().createElement('div', { className: h }),
                            }),
                        );
                    };
                let v;
                !(function (e) {
                    (e.Column = 'column'), (e.Row = 'row');
                })(v || (v = {}));
                const A = R.strings.tank_setup.dealPanel,
                    C = ({
                        renewalType: e,
                        withConfirmation: t = !1,
                        mediaSize: n = l.cJ.Medium,
                        parentModelPath: a,
                        panelType: p = v.Row,
                        priceLabel: b = A.toBePaid(),
                        autoRenewalLabel: E,
                        onAutoRenewalChanged: g,
                        onDealConfirmed: h,
                        onDealCancelled: C,
                    }) => {
                        const S = `${a}.dealPanel`,
                            D = (0, r.m)(S),
                            F = D.totalItemsInStorage,
                            B = D.isDisabled,
                            y = D.canAccept,
                            w = D.canCancel,
                            k = D.price,
                            T = D.defPrice,
                            x = D.discount,
                            L = (0, i.useRef)(null),
                            N = n === l.cJ.Tiny || n === l.cJ.Small,
                            I = (0, i.useCallback)(() => h && h(), [h]),
                            R = (0, i.useCallback)(() => C && C(), [C]),
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
                                    o().createElement(_.Y, { modelPath: S, renewType: e, onValueChanged: g, label: E }),
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
                                            !N && o().createElement('div', { className: m.from }, A.fromStorage()),
                                            o().createElement(u.K, { valueFirst: !0, itemsInStorage: F }),
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
                                                onConfirm: I,
                                                confirmButtonRef: L,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
            },
            8750: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => u, F: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
                const o = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let l;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(l || (l = {}));
                const u = ({ type: e = l.SMALL, imageSource: t }) => {
                    const n = i()(o.base, e !== l.SMALL && o[`base__${e}`]),
                        r = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: n, style: r });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(5282),
                    l = n(3649);
                const u = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: r,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = i()(u, _),
                            b = (0, l.z4)(t)
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
                            g = i()(u, r);
                        return s().createElement(
                            'div',
                            { id: `${e}-details`, className: g },
                            m ? b : s().createElement(o.n, { mediaSize: n, blocks: E, linesCount: d }),
                        );
                    };
            },
            3267: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => r });
                var a = n(6179),
                    s = n.n(a);
                const r = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                    n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => d });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(7405),
                    l = n(329);
                const u = 'Price_base_61',
                    c = 'Price_price_1b',
                    _ = 'Price_price__discount_29',
                    d = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: r = !1,
                        bigSize: d = !1,
                        ignoreDiscount: m = !1,
                    }) => {
                        const p = !m && Boolean(t.length),
                            b = i()(c, p && _);
                        return s().createElement(
                            'div',
                            { className: u },
                            e.map(
                                ({ value: e }, t) =>
                                    (r || Boolean(e.value)) &&
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
                                                size: d ? l.et.big : l.et.small,
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
                    r = n(8089),
                    i = n(8526),
                    o = n(5521),
                    l = n(7727),
                    u = n(6179),
                    c = n.n(u),
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
                            g = (0, u.useRef)(null),
                            h = (0, u.useRef)(!1);
                        (0, i.gd)(o.n.ESCAPE, b);
                        const f = !t,
                            v = (0, u.useCallback)(
                                (e) => {
                                    p && e.target === g.current && p();
                                },
                                [p],
                            );
                        (0, u.useEffect)(() => {
                            a && (h.current = !0), h.current && (0, l.G)('cons_select_view');
                        }, [a]),
                            (0, u.useEffect)(() => {
                                const e = g.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', v),
                                        () => {
                                            e.removeEventListener('animationend', v);
                                        }
                                    );
                            }, [v]);
                        const A = s()(d.base, a && d.base__shown, f ? d.base__compare : d.base__setup),
                            C = s()(d.content, f && d.content__compare, d['content__' + (a ? 'shown' : 'hidden')]),
                            S = !a && !h.current,
                            D = s()(d.close, E && d[`close__${E}`]);
                        return c().createElement(
                            'div',
                            { className: A },
                            f && c().createElement('div', { className: d.back }),
                            n,
                            a &&
                                c().createElement(
                                    'div',
                                    { id: 'setup-app-close-btn', className: D },
                                    c().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: b,
                                    }),
                                ),
                            !S && c().createElement('div', { id: m, ref: g, className: C }, e),
                            t && c().createElement('div', { className: d.panel }, t),
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => p, D: () => m });
                var a = n(6483),
                    s = n.n(a),
                    r = n(1856),
                    i = n(4179),
                    o = n(6179),
                    l = n.n(o),
                    u = n(6605);
                const c = 'ShortenedText_base_fe',
                    _ = 'ShortenedText_base__shown_af';
                var d = n(3138);
                const m = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement('span', { key: t }, `${e} `)),
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
                                (0, i.Eu)().then(() => {
                                    const e = (0, u.D)(h);
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
                            if (e.length) return f.current.shortened && (f.current.shortened = !1), (0, r.v)(v);
                        }, [e, n, v]),
                            (0, o.useEffect)(() => {
                                if (E.height && !f.current.shortened) {
                                    const t = (0, u.M)(h, E.height);
                                    if (-1 !== t) {
                                        const n = e.slice(0, t);
                                        n.push(l().createElement('span', { key: t }, '...')),
                                            p(n),
                                            (f.current.shortened = !0);
                                    }
                                }
                            }, [e, E, n]);
                        const A = (0, o.useMemo)(() => (E.height ? { maxHeight: `${E.height}rem` } : {}), [E.height]);
                        return l().createElement('div', { ref: h, className: s()(c, E.height && _), style: A }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => r });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    r = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                r = Array.from(n.children);
                            if (r.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!s(e[n], t)) return -1;
                                    let a = 0,
                                        r = n - 1,
                                        i = !1;
                                    for (; r - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (r - a + 1));
                                        (i = s(e[n], t)), i ? (r = n) : (a = n);
                                    }
                                    return i || s(e[r], t) ? a : r;
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
                'use strict';
                n.d(t, { i: () => B });
                var a = n(6483),
                    s = n.n(a),
                    r = n(8526),
                    i = n(5521),
                    o = n(7727),
                    l = n(6179),
                    u = n.n(l),
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
                        picker: r,
                        allowSlide: i,
                        theme: o = d,
                    }) => {
                        const l = {
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
                        return u().createElement(
                            'div',
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: l },
                            u().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !i && u().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            u().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                u().createElement('div', { className: _.pattern }),
                                u().createElement('div', { className: _.gradient }),
                                r && u().createElement('div', { className: _.picker }, r),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    E = 'SlideControl_image__hover_eb',
                    g = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = s()(b, n && E, t && g);
                        return u().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            u().createElement('div', { className: a }),
                        );
                    },
                    f = 'Slider_base_2c',
                    v = 'Slider_slideArea_dd',
                    A = 'Slider_editor_5c',
                    C = 'Slider_editor__minus_e1',
                    S = 'Slider_editor__plus_b5',
                    D = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    F = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const r = s()(D.base, n && D.base__enabled, D[`base__${t}${n ? 'On' : 'Off'}`]);
                        return u().createElement('div', { id: `${e}-step-editor-${t}`, className: r, onClick: a });
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
                        const g = (0, l.useRef)(null),
                            D = (0, l.useRef)({ down: !1, move: !1, over: !1 }),
                            B = (0, l.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            y = (0, l.useState)(t),
                            w = y[0],
                            k = y[1],
                            T = (0, l.useState)(!1),
                            x = T[0],
                            L = T[1],
                            N = (0, l.useState)(!1),
                            I = N[0],
                            R = N[1],
                            M = (0, l.useCallback)(
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
                            O = (0, l.useCallback)(
                                (e, t) => {
                                    if (!g.current) return 0;
                                    const n = g.current.getBoundingClientRect(),
                                        a = B.current.maximum,
                                        s = n.width / a,
                                        r = e - n.left,
                                        i = Math.floor(s > 0 ? r / s : r);
                                    if (i > a) return a;
                                    if (i <= 0) return 0;
                                    if (E > 1) {
                                        let e = i - (i % E);
                                        const n = i - e;
                                        return (
                                            n > 0 && ((t && i > B.current.currentValue) || n > 0.5 * E) && (e += E), e
                                        );
                                    }
                                    return i;
                                },
                                [E],
                            ),
                            P = (0, l.useCallback)(
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
                            W = (0, l.useCallback)(() => {
                                if (H && D.current.over) {
                                    const e = M(!0);
                                    P(e);
                                }
                            }, [H, M, P]),
                            z = (0, l.useCallback)(() => {
                                if ($ && D.current.over) {
                                    const e = M(!1);
                                    P(e);
                                }
                            }, [$, M, P]),
                            G = (0, l.useCallback)(() => {
                                (D.current.down = !1), R(!1);
                            }, []),
                            X = (0, l.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && D.current.down) {
                                        D.current.move = !0;
                                        const t = O(e.clientX);
                                        P(t);
                                    } else G();
                                },
                                [G, O, P],
                            );
                        (0, r.gd)(i.n.ARROW_UP, W),
                            (0, r.gd)(i.n.ARROW_DOWN, z),
                            (0, l.useEffect)(() => {
                                B.current.maximum = n;
                            }, [n]),
                            (0, l.useEffect)(() => {
                                if (I)
                                    return (
                                        document.addEventListener('mouseup', G),
                                        document.addEventListener('mousemove', X),
                                        () => {
                                            document.removeEventListener('mouseup', G),
                                                document.removeEventListener('mousemove', X);
                                        }
                                    );
                            }, [I, X, G]),
                            (0, l.useEffect)(() => {
                                (B.current.sliderMaximum = a), (B.current.sliderMinimum = _);
                            }, [a, _]),
                            (0, l.useEffect)(() => {
                                t !== B.current.currentValue && ((B.current.currentValue = t), k(t));
                            }, [t]);
                        const j = (0, l.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((D.current.down = !0), R(!0));
                                },
                                [d],
                            ),
                            Y = (0, l.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = O(e.clientX, !D.current.move),
                                        n = B.current,
                                        a = n.currentValue,
                                        s = n.sliderMaximum,
                                        r = n.sliderMinimum;
                                    P(t), (0, c.u)(a, t, s, r), (D.current.move = !1);
                                },
                                [O, d, P],
                            ),
                            U = (0, l.useCallback)(() => {
                                (D.current.over = !0), L(!0), (0, o.G)('highlight');
                            }, []),
                            V = (0, l.useCallback)(() => {
                                (D.current.over = !1), L(!1);
                            }, []),
                            Z = (0, l.useCallback)(
                                (e) => {
                                    const t = B.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        r = M(e.deltaY > 0);
                                    P(r), (0, c.u)(n, r, a, s);
                                },
                                [M, P],
                            );
                        return u().createElement(
                            'div',
                            { ref: g, onMouseEnter: U, onMouseLeave: V, onWheel: Z, className: f },
                            b &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement(
                                        'div',
                                        { className: s()(A, C) },
                                        u().createElement(F, { parentId: e, type: 'minus', isEnabled: $, onClick: z }),
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: s()(A, S) },
                                        u().createElement(F, { parentId: e, type: 'plus', isEnabled: H, onClick: W }),
                                    ),
                                ),
                            u().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: Y, onMouseDown: j, className: v },
                                u().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: w,
                                    availableMaximum: a,
                                    picker: u().createElement(h, { parentId: e, isActive: I, isHovered: x }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
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
                    l = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const r = i()(o.base, e && o.base__fitting),
                            l = i()(o.icon, o[`icon__${t}`]),
                            u = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: l, style: u }),
                        );
                    });
            },
            8253: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
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
                    l = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: r,
                        panelType: l,
                        isDisabled: u,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = i()(
                            o.base,
                            !e && o[`base__${l}`],
                            t && o[`base__${t}`],
                            n && !c && !a && o.base__selected,
                            c && o['base__dragIn' + (n ? 'Active' : '')],
                            u && o.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, r);
                    };
            },
            8598: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => u });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
                const o = 'Count_base_e4',
                    l = 'Count_base__zero_64',
                    u = ({ count: e }) => {
                        const t = i()(o, !e && l);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, n) => {
                'use strict';
                n.d(t, { c: () => p });
                var a = n(6483),
                    s = n.n(a),
                    r = n(3977),
                    i = n(6179),
                    o = n.n(i),
                    l = n(906),
                    u = n(4105);
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
                        const E = (0, i.useMemo)(() => {
                                const n = t === r.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            g = (0, i.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !E && Boolean(t) && e;
                        return o().createElement(
                            'div',
                            null,
                            h && o().createElement(u.a, { level: e }),
                            o().createElement('div', { className: s()(c, (n || a) && _), style: g }),
                            a && o().createElement('div', { className: d }),
                            b && o().createElement('div', { className: m }),
                            E && o().createElement(l.r, { isTemporary: n, overlaySource: E, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => l });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
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
                    l = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = i()(o.base, o[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    s = n(6179),
                    r = n.n(s),
                    i = n(1922),
                    o = n(6483),
                    l = n.n(o),
                    u = n(3457),
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
                        const b = o !== i.cJ.None,
                            E = (0, s.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            g = (0, s.useMemo)(() => {
                                let n = '';
                                b && (n = (o === i.cJ.Large || o === i.cJ.Huge ? i.cJ.Large : i.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, o, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!g) return null;
                        const f = l()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${o}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            v = l()(_.icon, b && _[`icon__${o}`]),
                            A = b ? '' : _.specializationWrapper,
                            C = r().createElement(
                                'div',
                                { key: e, className: f },
                                r().createElement('div', { className: _.glow }),
                                r().createElement('div', { className: v, style: g }),
                            );
                        return r().createElement(
                            c.t,
                            { args: h },
                            d && n
                                ? r().createElement(
                                      u.u5,
                                      {
                                          size: u.qE.small,
                                          type: u.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: E,
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
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: s = i.cJ.None,
                    activeSpecsMask: o,
                    onSpecializationClick: l,
                }) =>
                    e.length
                        ? r().createElement(
                              'div',
                              { className: m, key: o },
                              a.UI(e, (e, a) =>
                                  r().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: s,
                                          onSpecializationClick: l,
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
                    r = n(6483),
                    i = n.n(r);
                const o = 'Storage_base_53',
                    l = 'Storage_base__reversed_8f',
                    u = 'Storage_icon_6a',
                    c = 'Storage_count_7a',
                    _ = 'Storage_count__zero_54',
                    d = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = i()(o, e && l),
                            a = i()(c, 0 === t && _);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement('div', { className: u }),
                            s().createElement('div', { className: a }, t),
                        );
                    };
            },
            9605: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => h });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r);
                let o;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(o || (o = {}));
                const l = 'SwitchButton_base_23',
                    u = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    E = 'SwitchButton_buttonWarning_3f',
                    g = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: n, isHovered: r }) => {
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
                            { className: i()(l, { [u]: f, [c]: v, [m]: r }) },
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
                    r = n(9480),
                    i = n(7727),
                    o = n(6179),
                    l = n.n(o),
                    u = n(9605);
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
                            A = (0, o.useCallback)(() => {
                                m || (h(!0), i.$.playHighlight());
                            }, [m]),
                            C = (0, o.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            S = s()(c, m && _);
                        return l().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: S,
                                onClick: v,
                                onMouseEnter: A,
                                onMouseLeave: C,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                l().createElement(u.U, {
                                    key: t,
                                    id: t,
                                    state: r.MH(a, t),
                                    currentIndex: n,
                                    isHovered: g,
                                }),
                            ),
                            m && l().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => B });
                var a = n(4888),
                    s = n(7383),
                    r = n(9056),
                    i = n(6179),
                    o = n.n(i),
                    l = n(2558),
                    u = n(8934),
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
                                u.Z,
                                { in: e, timeout: c.Dp, classNames: b },
                                o().createElement('div', { className: _ }),
                            ),
                            o().createElement(
                                u.Z,
                                { in: e, timeout: c.IG, classNames: E },
                                o().createElement('div', { className: d }),
                            ),
                            f.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        u.Z,
                                        { in: e, timeout: c.wx, classNames: g },
                                        o().createElement('div', { className: m }),
                                    ),
                                    o().createElement(
                                        u.Z,
                                        { in: e, timeout: c.Kz, classNames: h },
                                        o().createElement('div', { className: p }),
                                    ),
                                ),
                        ),
                    ),
                    A = 'ColorMask_base_60',
                    C = 'ColorMask_base__enterActive_62',
                    S = ({ in: e, maskImage: t }) => {
                        const n = (0, i.useMemo)(() => ({ enterActive: C }), []),
                            a = (0, i.useMemo)(() => ({ maskImage: `url(${t})` }), [t]);
                        return o().createElement(
                            u.Z,
                            { in: e, timeout: c.Qj, classNames: n },
                            o().createElement('div', { className: A, style: a }),
                        );
                    },
                    D = {
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
                    F = { enter: D.base__enter, exit: D.base__enter },
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
                            const b = (0, r.m)('model.lastSlotAction'),
                                E = b.leftID,
                                g = b.rightID,
                                h = b.leftIntCD,
                                f = b.rightIntCD,
                                A = b.actionType,
                                C = b.intCD,
                                B = (0, i.useState)(!0),
                                y = B[0],
                                w = B[1],
                                k = (0, i.useState)(!0),
                                T = k[0],
                                x = k[1],
                                L = (0, i.useState)(m),
                                N = L[0],
                                I = L[1],
                                R = (0, i.useState)(n),
                                M = R[0],
                                O = R[1],
                                P = (0, i.useState)(p),
                                H = P[0],
                                $ = P[1],
                                W = (0, i.useRef)(),
                                z = (0, i.useRef)(),
                                G = [a._2, a.dZ, a.sH],
                                X = (C === n || C === M) && H !== p && G.includes(A),
                                j = -1 === h || -1 === f,
                                Y = _ ? `base${_[0].toUpperCase() + _.slice(1)}` : 'base',
                                U = c.Sr[A] || 0;
                            (0, i.useEffect)(
                                () => () => {
                                    W.current && clearTimeout(W.current), z.current && clearTimeout(z.current);
                                },
                                [],
                            ),
                                (0, i.useEffect)(() => {
                                    d || I(m);
                                }, [d, m]);
                            const V = (0, i.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, F);
                                        switch (A) {
                                            case a.Xo: {
                                                const e = E === t ? c.mI.RIGHT : c.mI.LEFT,
                                                    a = g - E != 1 ? c.mI.SWAP : '';
                                                (n.enterDone = D[`${Y}__enter${e}${a}`]),
                                                    (n.exit = D[`${Y}__exit${e}${a}`]),
                                                    j &&
                                                        (d
                                                            ? (n.enterDone = D[`${Y}__enter${c.mI.FADE}`])
                                                            : (n.exit = D[`${Y}__exit${c.mI.FADE}`]));
                                                break;
                                            }
                                            case a._2:
                                                (n.enterDone = D[`${Y}__enter${c.mI.DESTROY}`]),
                                                    (n.exit = D[`${Y}__exit${c.mI.DESTROY}`]),
                                                    (W.current = setTimeout(() => w(!0), c.YJ)),
                                                    x(!0);
                                                break;
                                            case a.sH:
                                            case a.dZ:
                                                (n.enter = D[`${Y}__enter${c.mI.DEMOUNT}${c.mI.FADE}`]),
                                                    (n.exit = D[`${Y}__exit${c.mI.DEMOUNT}`]),
                                                    (W.current = setTimeout(() => w(!0), c.Ij));
                                                break;
                                            case a.eC:
                                            case a.FR:
                                                if (_ !== s.g9) {
                                                    const e = A === a.eC ? c.mI.FITTING : c.mI.FITTING_REMOVE;
                                                    (n.enter = D[`${Y}__enter${e}`]),
                                                        (n.exit = D[`${Y}__exit${e}`]),
                                                        (n.exitActive = D[`${Y}__exitActive${c.mI.FITTING}`]);
                                                } else
                                                    (n.enterDone = D[`${Y}__enter${c.mI.FADE}`]),
                                                        (n.exit = D[`${Y}__exit${c.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: n, timeout: U });
                                    },
                                    [A, _, Y, U, E, t, g, d, j],
                                ),
                                Z = (0, i.useCallback)(
                                    (e) => {
                                        z.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(D.base), O(n), $(p);
                                        }, U);
                                    },
                                    [U, n, p],
                                ),
                                q = (0, i.useCallback)(() => {
                                    w(!1), x(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: V },
                                    o().createElement(
                                        u.Z,
                                        {
                                            key: n,
                                            timeout: U,
                                            classNames: F,
                                            onEntered: Z,
                                            onExiting: q,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: D.base }, e),
                                    ),
                                ),
                                X &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(v, { in: y, actionType: A }),
                                        o().createElement(S, { in: T, maskImage: N }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Dp: () => l,
                    IG: () => u,
                    Ij: () => i,
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
                    r = 1600,
                    i = 900,
                    o = 900,
                    l = 200,
                    u = 400,
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
                const p = { [a.Xo]: s, [a.FR]: 250, [a.eC]: 250, [a._2]: 1400, [a.dZ]: r, [a.sH]: r, [a.Fd]: r };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c });
                var a = n(6179),
                    s = n.n(a),
                    r = n(6483),
                    i = n.n(r),
                    o = n(9056),
                    l = n(1922);
                const u = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    c = ({ modelPath: e, isDetailed: t = !1, trackChanges: n = !1, isShortened: a = !1 }) => {
                        const r = (0, l.GS)(),
                            c = (0, o.m)(e, n),
                            _ = c.installedCount,
                            d = c.maxCount,
                            m = _ === d,
                            p = R.strings.tank_setup.shells,
                            b = m ? p.ammunitionFull() : p.ammunitionIncomplete(),
                            E = i()(u.base, !m && u.base__incomplete),
                            g = i()(u.occupancy, !m && u.occupancy__incomplete, u[`occupancy__${r}`]);
                        return s().createElement(
                            'div',
                            { className: E },
                            !a && s().createElement('div', { className: u.tip }, b),
                            t ? `${_}/${d}` : s().createElement('div', { className: g }, `${_}/${d}`),
                        );
                    };
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => s, u: () => r });
                var a = n(7727);
                const s = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    r = (e, t, n, s) => {
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
                    DA: () => r,
                    FR: () => s,
                    Fd: () => l,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => i,
                    _2: () => c,
                    dZ: () => o,
                    eC: () => a,
                    sH: () => u,
                    zf: () => m,
                });
                const a = 'select',
                    s = 'undo',
                    r = 'cancel',
                    i = 'swap',
                    o = 'demount',
                    l = 'demount_from_setup',
                    u = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one',
                    m = 'drag_drop';
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => m,
                    G$: () => i,
                    S: () => p,
                    WI: () => l,
                    YN: () => o,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => r,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => u,
                    zn: () => a,
                });
                const a = 'optDevices',
                    s = 'shells',
                    r = 'consumables',
                    i = 'battleBoosters',
                    o = 'battleAbilities',
                    l = 'toggleShells',
                    u = 'toggleCamouflage',
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], r = !0, i = 0; i < t.length; i++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), a < s && (s = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
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
                        [r, i, o] = n,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var u = o(__webpack_require__);
                    }
                    for (t && t(n); l < r.length; l++)
                        (s = r[l]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(1719));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
