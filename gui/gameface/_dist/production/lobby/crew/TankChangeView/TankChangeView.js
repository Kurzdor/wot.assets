(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
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
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: E,
                    onMouseDown: p,
                    onMouseUp: h,
                    onMouseLeave: b,
                    onClick: v,
                }) => {
                    const f = (0, o.useRef)(null),
                        A = (0, o.useState)(n),
                        C = A[0],
                        F = A[1],
                        w = (0, o.useState)(!1),
                        B = w[0],
                        D = w[1],
                        y = (0, o.useState)(!1),
                        k = y[0],
                        S = y[1],
                        I = (0, o.useCallback)(() => {
                            c || (f.current && (f.current.focus(), F(!0)));
                        }, [c]),
                        T = (0, o.useCallback)(
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
                        N = (0, o.useCallback)(
                            (e) => {
                                c || (null !== m && (0, r.G)(m), g && g(e), S(!0));
                            },
                            [c, m, g],
                        ),
                        L = (0, o.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                c || (h && h(e), D(!1));
                            },
                            [c, h],
                        ),
                        O = (0, o.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), p && p(e), n && I(), D(!0));
                            },
                            [c, _, p, I, n],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                c || (b && b(e), D(!1));
                            },
                            [c, b],
                        ),
                        H = u()(
                            i.Z.base,
                            i.Z[`base__${a}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${t}`]]: t,
                                [i.Z.base__focus]: C,
                                [i.Z.base__highlightActive]: B,
                                [i.Z.base__firstHover]: k,
                            },
                            d,
                        ),
                        W = u()(i.Z.state, i.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, o.useEffect)(() => {
                            F(n);
                        }, [n]),
                        s().createElement(
                            'div',
                            {
                                ref: f,
                                className: H,
                                onMouseEnter: N,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: O,
                                onMouseLeave: P,
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
                'use strict';
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(u || (u = {}));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    u = n.n(a),
                    r = n(6179),
                    o = n.n(r),
                    s = n(8055);
                const i = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        m = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, i);
                    const g = a ? null : n,
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const p = g && !E && g > d,
                        h = u()(
                            s.Z.base,
                            s.Z[`base__${t}`],
                            r && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !g && s.Z.base__pattern,
                            a && s.Z.base__empty,
                            m,
                        );
                    return o().createElement(
                        'div',
                        l({ className: h }, _),
                        o().createElement('div', { className: s.Z.bg }),
                        o().createElement('div', { className: s.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: u()(s.Z.value, E && s.Z.value__text) },
                            p ? d : g,
                            p && o().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, n) => {
                'use strict';
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
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    u = n(6536),
                    r = n(6179),
                    o = n.n(r),
                    s = n(3495),
                    i = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(s.Y),
                        n = (0, r.useState)(t),
                        c = n[0],
                        d = n[1],
                        m = (0, r.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                u = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: u }, (0, l.T)(n, u, i.j)));
                        }, []),
                        _ = (0, r.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            m(e.width, e.height);
                        }, [m]);
                    (0, u.Z)(() => {
                        a.O.client.events.on('clientResized', m), a.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', m),
                                    a.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [m, _],
                        );
                    const g = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return o().createElement(s.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
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
                        m = s.extraSmall,
                        _ = s.extraLargeWidth,
                        g = s.largeWidth,
                        E = s.mediumWidth,
                        p = s.smallWidth,
                        h = s.extraSmallWidth,
                        b = s.extraLargeHeight,
                        v = s.largeHeight,
                        f = s.mediumHeight,
                        A = s.smallHeight,
                        C = s.extraSmallHeight,
                        F = { extraLarge: b, large: v, medium: f, small: A, extraSmall: C };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && i) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && m) return t;
                    } else {
                        if (n.extraLargeWidth && _) return (0, u.H)(t, n, F);
                        if (n.largeWidth && g) return (0, u.H)(t, n, F);
                        if (n.mediumWidth && E) return (0, u.H)(t, n, F);
                        if (n.smallWidth && p) return (0, u.H)(t, n, F);
                        if (n.extraSmallWidth && h) return (0, u.H)(t, n, F);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
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
                n.d(t, { YN: () => u.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    u = n(3495);
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
                n.d(t, { T: () => u }),
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
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    u = n(6483),
                    r = n.n(u),
                    o = n(6373),
                    s = n(1856),
                    i = n(3138),
                    l = n(2039),
                    c = n(5099),
                    d = n(7727),
                    m = n(9916),
                    _ = n(6179),
                    g = n.n(_),
                    E = n(4769);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const p = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, u) => {
                        const h = (0, _.useRef)(null),
                            b = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            f = (0, _.useState)(window.decorator && window.decorator.directionType),
                            A = f[0],
                            C = f[1],
                            F = (0, _.useCallback)(() => {
                                d.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            w = (0, _.useCallback)(() => {
                                d.$.playHighlight();
                            }, []),
                            B = r()(E.Z.arrow, E.Z[`arrow${p[A]}`]);
                        (0, l.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const D = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === v.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : i.O.view.sendEvent.close('popover');
                                },
                                [h, v, n],
                            ),
                            y = (0, _.useCallback)(
                                () => (
                                    i.O.view.freezeTextureBeforeResize(),
                                    (0, s.v)(() => {
                                        if (b.current) {
                                            const e = b.current.scrollWidth,
                                                t = b.current.scrollHeight;
                                            i.O.view.resize(e, t), C(window.decorator.directionType);
                                        }
                                    })
                                ),
                                [],
                            );
                        return (
                            (0, _.useImperativeHandle)(u, () => ({ updateSize: y })),
                            (0, l.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', D, { capture: !0 });
                                const e = (0, c.B)((0, m.Eu)());
                                return (
                                    !t && e.promise.then(() => y()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', D);
                                    }
                                );
                            }, [y, D, t]),
                            g().createElement(
                                'div',
                                { className: E.Z.base, ref: b },
                                g().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    g().createElement(
                                        'div',
                                        { className: E.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            g().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                g().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: F,
                                                    onMouseEnter: w,
                                                    ref: v,
                                                }),
                                            ),
                                    ),
                                    g().createElement('div', { className: B, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(1037),
                    u = n(9916),
                    r = n(6179),
                    o = n.n(r);
                const s = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? a.IC.Top : l,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        g = e.children,
                        E = e.isEnabled,
                        p = void 0 === E || E,
                        h = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, s);
                    const b = (0, r.useRef)(null),
                        v = (0, r.useCallback)(() => {
                            if ((0, u.wU)()) return (0, u.SW)();
                            b.current && (0, u.P3)(t, c, b.current, n, d, m);
                        }, [t, c, m, n, d]);
                    return o().createElement(
                        'div',
                        i(
                            {
                                ref: b,
                                onMouseDown:
                                    ((f = g.props.onClick),
                                    (e) => {
                                        p && (v(), _ && _(e), f && f(e));
                                    }),
                            },
                            h,
                        ),
                        g,
                    );
                    var f;
                };
            },
            7078: (e, t, n) => {
                'use strict';
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
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    u = n.n(a),
                    r = n(7078),
                    o = n(6373),
                    s = n(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = u().createElement('div', { className: n }, e);
                    if (t.header || t.body) return u().createElement(o.i, t, a);
                    const l = t.contentId;
                    return l ? u().createElement(s.u, i({}, t, { contentId: l }), a) : u().createElement(r.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
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
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, o);
                        const g = (0, u.useMemo)(() => {
                            const e = Object.assign({}, m, { body: n, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, l, c, m]);
                        return r().createElement(
                            a.u,
                            s(
                                {
                                    contentId:
                                        ((E = null == m ? void 0 : m.hasHtmlContent),
                                        E ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                _,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    u = n(9916),
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
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            g = void 0 !== _ && _,
                            E = e.ignoreMouseClick,
                            p = void 0 !== E && E,
                            h = e.decoratorId,
                            b = void 0 === h ? 0 : h,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            w = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, o);
                        const D = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => C || (0, a.F)().resId, [C]),
                            k = (0, r.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (i(n, b, { isMouseEvent: !0, on: !0, arguments: s(u) }, y),
                                    F && F(),
                                    (D.current.isVisible = !0));
                            }, [n, b, u, y, F]),
                            S = (0, r.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        i(n, b, { on: !1 }, y),
                                        D.current.isVisible && w && w(),
                                        (D.current.isVisible = !1);
                                }
                            }, [n, b, y, w]),
                            I = (0, r.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', I, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', I, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
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
                                                      ((D.current.timeoutId = window.setTimeout(k, g ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == m || m(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
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
                n.d(t, { U: () => s });
                var a = n(3138);
                function u(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: n = o, context: r = 'model' } = {}) {
                    const s = new Map();
                    function i(e, t = 0) {
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
                    const l = (e) => {
                        const a = n(t),
                            u = r.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? u
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, u);
                    };
                    return {
                        subscribe: (n, u) => {
                            const o = 'string' == typeof u ? `${r}.${u}` : r,
                                i = a.O.view.addModelObserver(o, t, !0);
                            return s.set(i, n), e && n(l(u)), i;
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
                            for (var e, n = u(s.keys()); !(e = n()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => i });
                var a = n(4598),
                    u = n(9174),
                    r = n(6179),
                    o = n.n(r),
                    s = n(8246);
                const i = () => (e, t) => {
                    const n = (0, r.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (n, r, o) => {
                                    var i;
                                    const l = s.U(r),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = u.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = u.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, u.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = u.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, u.aD)((t) => {
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
                                                            o = Object.entries(r),
                                                            s = o.reduce(
                                                                (e, [t, n]) => ((e[n] = u.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, u.aD)((e) => {
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
                                            cleanup: _,
                                        }),
                                        E = { mode: n, model: g, externalModel: c, cleanup: _ };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && o ? o.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, r.useRef)(!1),
                                E = (0, r.useState)(i),
                                p = E[0],
                                h = E[1],
                                b = (0, r.useState)(() => _(i, l, d)),
                                v = b[0],
                                f = b[1];
                            return (
                                (0, r.useEffect)(() => {
                                    g.current ? f(_(p, l, d)) : (g.current = !0);
                                }, [d, p, l]),
                                (0, r.useEffect)(() => {
                                    h(i);
                                }, [i]),
                                (0, r.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                o().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => i, on: () => s, onResize: () => r, onScaleUpdated: () => o });
                var a = n(2472),
                    u = n(1176);
                const r = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
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
                                        o = l[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            u &&
                                                (o(),
                                                window.removeEventListener(r, s),
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
                'use strict';
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
                n.d(t, { O: () => u });
                var a = n(5959);
                const u = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function u(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => u, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
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
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => u.W,
                        displayStatusIs: () => B,
                        events: () => r.U,
                        extraSize: () => D,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
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
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(u.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === u.W[t]), e),
                        {},
                    ),
                    D = {
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
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => u, yR: () => a });
                function a(e) {
                    return e;
                }
                function u() {
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
                n.d(t, { Z: () => u });
                var a = n(6179);
                const u = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => i, GS: () => l, cJ: () => o, fd: () => s });
                var a = n(6179),
                    u = n(7739),
                    r = n(1043);
                let o, s, i;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, a.useContext)(u.YN),
                        t = e.width,
                        n = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => u });
                var a = n(6179);
                const u = (e) => {
                    (0, a.useEffect)(e, []);
                };
            },
            4489: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => r });
                var a = n(5139),
                    u = n(6179);
                function r(e, t, n) {
                    const r = (0, u.useMemo)(() => (0, a.Z)(n, e), t);
                    return (0, u.useEffect)(() => r.cancel, [r]), r;
                }
            },
            5521: (e, t, n) => {
                'use strict';
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
                    })(u || (u = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => r, sE: () => o });
                function u(e) {
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
                    for (let n = 0; n < e.length; n++) {
                        const a = u(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
            },
            5099: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => a });
                const a = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((n, a) => {
                            e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => a });
                const a = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => o });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    u = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = u.length - 1; n >= 0; n--) for (; e >= u[n]; ) (t += a[n]), (e -= u[n]);
                                  return t;
                              })(e);
            },
            7727: (e, t, n) => {
                'use strict';
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
                'use strict';
                n.d(t, { BN: () => r, dL: () => s, e: () => o, uF: () => u });
                n(1281);
                let a;
                function u(e, t) {
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
                })(a || (a = {}));
                (() => {
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
                })();
                const s = (e) => {
                    return (
                        (t = R.strings.common.percentValue()),
                        (n = { value: e }),
                        t.replace(/\{\w+\}/g, (e) => String(n[e.slice(1, -1)]))
                    );
                    var t, n;
                };
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
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
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
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
                    B3: () => i,
                    Z5: () => o.Z5,
                    B0: () => s,
                    c9: () => v,
                    wU: () => F,
                    ry: () => h,
                    Eu: () => b,
                    SW: () => A,
                    P3: () => C,
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    _ = n(3138);
                const g = ['args'];
                function E(e, t, n, a, u, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(a, u);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, u) {
                                        var r = e.apply(t, n);
                                        function o(e) {
                                            E(r, a, u, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(r, a, u, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = () =>
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
                            const u = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                    return u;
                                })(t, g);
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
                    f = () => v(s.CLOSE),
                    A = () => v(s.POP_OVER, { on: !1 }),
                    C = (e, t, n, a, u = R.invalid('resId'), r) => {
                        const o = _.O.view.getViewGlobalPosition(),
                            i = n.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            m = i.height,
                            g = {
                                x: _.O.view.pxToRem(l) + o.x,
                                y: _.O.view.pxToRem(c) + o.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        v(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: u,
                            direction: t,
                            bbox: p(g),
                            on: !0,
                            args: r,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = n(7572);
                const D = u.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: C,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: h,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: F,
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
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => u });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    u = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            3458: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { Z0: () => u, in: () => a, sx: () => r }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(a || (a = {}));
                const u = 'tooltip_watched',
                    r = 2;
                let o;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(o || (o = {}));
            },
            4828: (e, t, n) => {
                'use strict';
                n.d(t, { AB: () => _, D9: () => a, eX: () => r, sC: () => o, tL: () => u, x3: () => l });
                const a = 'crew',
                    u = 2e3;
                let r, o, s, i, l, c, d, m;
                !(function (e) {
                    (e.Viewed = 'viewed'), (e.Click = 'click');
                })(r || (r = {})),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.PersonalFile = 'personal_file_view'),
                            (e.PersonalData = 'personal_data_view'),
                            (e.ServiceRecord = 'service_record_view'),
                            (e.Barracks = 'barracks_view'),
                            (e.MemberChange = 'member_change_view'),
                            (e.QuickTraining = 'quick_training_view'),
                            (e.TankChange = 'tank_change_view');
                    })(o || (o = {})),
                    (function (e) {
                        (e.DocumentChange = 'document_change_dialog'), (e.RetrainSingle = 'retrain_single_dialog');
                    })(s || (s = {})),
                    (function (e) {
                        e.PremiumTooltip = 'personal_file_view_premium_tooltip';
                    })(i || (i = {})),
                    (function (e) {
                        (e.ChangeButtonTooltip = 'crew_widget_change_button_tooltip'),
                            (e.SlotContextMenu = 'crew_widget_slot_context_menu'),
                            (e.CrewOperationsButton = 'crew_widget_crew_operations_button');
                    })(l || (l = {})),
                    (function (e) {
                        (e.FirstnameSelect = 'document_change_dialog_firstname_select'),
                            (e.Firstname = 'document_change_dialog_firstname'),
                            (e.LastnameSelect = 'document_change_dialog_lastname_select'),
                            (e.Lastname = 'document_change_dialog_lastname');
                    })(c || (c = {})),
                    (function (e) {
                        (e.Checkbox = 'retrain_single_dialog_checkbox'),
                            (e.RoleButton = 'retrain_single_dialog_role_button');
                    })(d || (d = {})),
                    (function (e) {
                        e.CardContextMenu = 'barracks_view_card_context_menu';
                    })(m || (m = {}));
                const _ = {
                    [R.views.lobby.crew.personal_case.PersonalFileView('resId')]: o.PersonalFile,
                    [R.views.lobby.crew.personal_case.PersonalDataView('resId')]: o.PersonalData,
                    [R.views.lobby.crew.personal_case.ServiceRecordView('resId')]: o.ServiceRecord,
                    [R.views.lobby.crew.BarracksView('resId')]: o.Barracks,
                    [R.views.lobby.crew.HangarCrewWidget('resId')]: o.Hangar,
                    [R.views.lobby.crew.MemberChangeView('resId')]: o.MemberChange,
                    [R.views.lobby.crew.TankChangeView('resId')]: o.TankChange,
                    [R.views.lobby.crew.QuickTrainingView('resId')]: o.QuickTraining,
                };
            },
            1943: (e, t, n) => {
                'use strict';
                n.d(t, { Jp: () => d, Sr: () => m });
                var a = n(6179),
                    u = n(3458);
                const r = ['action', 'timeLimit'];
                const o = 'metrics',
                    s = () => Date.now(),
                    i = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: u }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: u || null,
                    }),
                    l = (e, t) => {
                        const n = (0, a.useCallback)(
                            (n, a = u.in.Info, r) => {
                                r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(r),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    c = (e, t) => {
                        const n = l(e, t),
                            u = (0, a.useRef)(new Map()),
                            r = (0, a.useRef)(new Map()),
                            o = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    (void 0 !== t && t > 0) || u.current.set(e, s());
                                },
                                [u],
                            ),
                            i = (0, a.useCallback)(() => {
                                u.current.clear(), r.current.clear();
                            }, [u, r]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== u.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, s());
                                },
                                [u, r],
                            ),
                            d = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = u.current.get(e);
                                    if (void 0 === t) return;
                                    const n = r.current.get(e);
                                    if (void 0 === n) return;
                                    r.current.delete(e);
                                    const a = s() - n;
                                    u.current.set(e, t + a);
                                },
                                [u, r],
                            ),
                            m = (0, a.useCallback)(
                                (e, t = 0, a, o) => {
                                    const i = u.current.get(e);
                                    if (void 0 === i) return;
                                    void 0 !== r.current.get(e) && d(e), u.current.delete(e);
                                    const l = (s() - i) / 1e3;
                                    l <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, l)),
                                        n(e, a, o));
                                },
                                [u, r, n, d],
                            );
                        return [(e) => o(e), (e, t, n, a) => m(e, t, n, a), () => i(), (e) => c(e), (e) => d(e)];
                    },
                    d = (e) => {
                        const t = l(e, o),
                            n = (0, a.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, i(e));
                                },
                                [t],
                            );
                        return (e) => n(e);
                    },
                    m = (e, t) => {
                        const n = ((e) => {
                                const t = c(e, o),
                                    n = t[0],
                                    u = t[1],
                                    r = t[2],
                                    s = t[3],
                                    l = t[4],
                                    d = (0, a.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                n = e.timeLimit,
                                                a = e.logLevel;
                                            u(t, n, a, i(e));
                                        },
                                        [u],
                                    );
                                return [(e) => n(e), (e) => d(e), () => r(), (e) => s(e), (e) => l(e)];
                            })(e),
                            s = n[0],
                            l = n[1],
                            d = t.action,
                            m = t.timeLimit,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(t, r);
                        return (0, a.useMemo)(
                            () => ({
                                onShow: () => s(d || u.Z0),
                                onHide: () => l(Object.assign({ action: d || u.Z0, timeLimit: m || u.sx }, _)),
                            }),
                            [d, m, _, s, l],
                        );
                    };
            },
            5565: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => Ge,
                        Bar: () => We,
                        DefaultScroll: () => $e,
                        Direction: () => we,
                        defaultSettings: () => Be,
                        useHorizontalScrollApi: () => ye,
                    });
                var u = {};
                n.r(u), n.d(u, { Area: () => st, Bar: () => ut, Default: () => ot, useVerticalScrollApi: () => Ve });
                var r = n(7739),
                    o = n(6179),
                    s = n.n(o),
                    i = n(6483),
                    l = n.n(i),
                    c = n(926),
                    d = n.n(c),
                    m = n(5415);
                const _ = ['children', 'className'];
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
                const E = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: d().SMALL_WIDTH,
                        [m.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: d().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    h = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: d().SMALL,
                        [m.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [m.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [m.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    b = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, _);
                        const u = (0, m.GS)(),
                            r = u.mediaWidth,
                            o = u.mediaHeight,
                            i = u.mediaSize;
                        return s().createElement('div', g({ className: l()(n, E[r], p[o], h[i]) }, a), t);
                    },
                    v = ['children'];
                const f = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, v);
                    return s().createElement(r.ZN, null, s().createElement(b, n, t));
                };
                var A = n(493),
                    C = n.n(A),
                    F = n(1037),
                    w = n(3138),
                    B = n(5521);
                n(9916);
                const D = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function y(e = B.n.NONE, t = D, n = !1, a = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== B.n.NONE)
                            return (
                                window.addEventListener('keydown', u, n),
                                () => {
                                    window.removeEventListener('keydown', u, n);
                                }
                            );
                        function u(u) {
                            if (u.keyCode === e) {
                                if (!a && w.O.view.isEventHandled()) return;
                                w.O.view.setEventHandled(), t(u), n && u.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                const k = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                };
                let S;
                !(function (e) {
                    (e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118');
                })(S || (S = {}));
                const I = (e, t) => {
                        switch (t) {
                            case S.c1080x454:
                                return R.images.gui.maps.icons.crew.flags.$dyn(e);
                            case S.c240x118:
                                return R.images.gui.maps.icons.tankmen.card.nations.$dyn(e);
                        }
                    },
                    T = s().memo(function ({ nation: e, size: t, className: n }) {
                        return s().createElement('div', {
                            className: l()(k.base, k[`base__${t}`], n),
                            style: { backgroundImage: `url('${I(e, t)}')` },
                        });
                    }),
                    x = {
                        base: 'ListHeader_base_ad',
                        title: 'ListHeader_title_a8',
                        base__memberChange: 'ListHeader_base__memberChange_c2',
                        base__tankChange: 'ListHeader_base__tankChange_fb',
                        base__personalData: 'ListHeader_base__personalData_aa',
                    };
                let N;
                !(function (e) {
                    (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(N || (N = {}));
                const L = ({ title: e, theme: t = N.Barracks, className: n, children: a }) =>
                    s().createElement(
                        'div',
                        { className: l()(x.base, x[`base__${t}`], n) },
                        s().createElement('div', { className: x.title }, e),
                        a,
                    );
                var M = n(7727);
                const O = {
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
                    P = [
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
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                class W extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, M.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, M.G)(this.props.soundClick);
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
                            o = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
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
                                })(e, P)),
                            g = l()(O.base, O[`base__${r}`], O[`base__${u}`], null == o ? void 0 : o.base),
                            E = l()(O.icon, O[`icon__${r}`], O[`icon__${u}`], null == o ? void 0 : o.icon),
                            p = l()(O.glow, null == o ? void 0 : o.glow),
                            h = l()(O.caption, O[`caption__${r}`], null == o ? void 0 : o.caption),
                            b = l()(O.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            H(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: O.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: p })),
                            s().createElement('div', { className: h }, t),
                            a && s().createElement('div', { className: b }, a),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const j = ({ onClick: e }) =>
                        s().createElement(W, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    $ = 'common_close_0e',
                    G = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        s().createElement(W, {
                            onClick: e,
                            classNames: { base: $ },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    V = 'TopButtons_base_ef',
                    z = 'TopButtons_leftButtons_9e',
                    U = 'TopButtons_rightButtons_33',
                    Z = s().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: n,
                        onAboutClick: a,
                        onCloseClick: u,
                        className: r,
                        classNames: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()(V, r) },
                            e &&
                                n &&
                                s().createElement(
                                    'div',
                                    { className: l()(z, null == o ? void 0 : o.leftButtons) },
                                    s().createElement(W, { onClick: n, caption: e, type: 'back' }),
                                ),
                            s().createElement(
                                'div',
                                { className: l()(U, null == o ? void 0 : o.rightButtons) },
                                a && s().createElement(j, { onClick: a }),
                                u && s().createElement(G, { onClick: u, label: t }),
                            ),
                        );
                    });
                var q = n(7321),
                    Y = n(5801);
                const X = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                { vehicleList: e.array('vehicleList') },
                                e.primitives(['nation', 'backButtonLabel', 'isButtonBarVisible']),
                            ),
                        ({ externalModel: e }) => ({
                            back: e.createCallbackNoArgs('onBack'),
                            hangar: e.createCallbackNoArgs('onHangar'),
                            closeWithEsc: e.createCallback(() => ({ isFromEscape: !0 }), 'onClose'),
                            selectVehicle: e.createCallback((e) => ({ vehicleID: e }), 'onVehicleSelected'),
                            resetFilters: e.createCallbackNoArgs('onResetFilters'),
                        }),
                    ),
                    K = X[0],
                    Q = X[1];
                var J = n(2106),
                    ee = n(3403),
                    te = n(3457),
                    ne = n(6373),
                    ae = n(8018);
                const ue = 'WarningText_base_13',
                    re = 'WarningText_icon_5d',
                    oe = 'WarningText_label_c6',
                    se = s().memo(function ({ label: e }) {
                        return s().createElement(
                            'div',
                            { className: ue },
                            s().createElement('div', { className: re }),
                            s().createElement('div', { className: oe }, e),
                        );
                    }),
                    ie = 'ListEmptyState_base_ae',
                    le = 'ListEmptyState_content_1e',
                    ce = 'ListEmptyState_shadow_ae',
                    de = 'ListEmptyState_buttonWrapper_78',
                    me = 'ListEmptyState_button_f1',
                    _e = s().memo(function ({
                        warningText: e,
                        buttonType: t = te.L$.secondary,
                        tooltipArgs: n = ae.Xd,
                        isBtnDisabled: a = !1,
                        className: u,
                        onClick: r,
                        children: o,
                    }) {
                        return s().createElement(
                            'div',
                            { className: l()(ie, u) },
                            s().createElement(
                                'div',
                                { className: le },
                                s().createElement('div', { className: ce }),
                                s().createElement(se, { label: e }),
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: de },
                                        s().createElement(
                                            ne.i,
                                            n,
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(
                                                    te.u5,
                                                    {
                                                        size: te.qE.small,
                                                        type: t,
                                                        disabled: a,
                                                        onClick: r,
                                                        mixClass: me,
                                                    },
                                                    o,
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ge = n(1856);
                const Ee = (e, t, n) => (n < e ? e : n > t ? t : n),
                    pe = [];
                function he(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), pe)
                    );
                }
                function be(e, t, n = []) {
                    const a = (0, o.useRef)(0),
                        u = (0, o.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, o.useEffect)(() => u, [u]);
                    const r = (null != n ? n : []).concat([t]);
                    return [
                        (0, o.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, r),
                        u,
                    ];
                }
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
                const Ae = () => {
                    const e = (0, o.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        u = (e, ...n) => {
                            for (var a, u = ve(t(e).values()); !(a = u()).done; ) {
                                (0, a.value)(...n);
                            }
                        };
                    return (0, o.useMemo)(() => ({ on: n, off: a, trigger: u }), []);
                };
                var Ce = n(4489),
                    Fe = n(7030);
                let we;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(we || (we = {}));
                const Be = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    De = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: u,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const s = (e, n) => {
                            const a = t(e),
                                u = a[0],
                                r = a[1];
                            return r <= u ? 0 : Ee(u, r, n);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Be : l,
                                d = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                _ = Ae(),
                                g = (0, Ce.f)(
                                    () => {
                                        w.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, Fe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), _.trigger('change', e), r && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = E[0],
                                h = E[1],
                                b = (0, o.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const u = p.scrollPosition.get(),
                                            r = (null != (a = p.scrollPosition.goal) ? a : 0) - u;
                                        return s(e, t * n + r + u);
                                    },
                                    [p.scrollPosition],
                                ),
                                v = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, p.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return u(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            r = b(t, e, a);
                                        v(r);
                                    },
                                    [v, b, c.step],
                                ),
                                A = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && f(a(e)),
                                            d.current && _.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, f, _],
                                ),
                                C = ((e, t = []) => {
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
                                })(
                                    () =>
                                        (0, ge.v)(() => {
                                            const e = d.current;
                                            e &&
                                                (v(s(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [v, p.scrollPosition.goal],
                                ),
                                F = he(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = s(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && v(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? u(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: A,
                                    applyScroll: v,
                                    applyStepTo: f,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: h,
                                    animationScroll: p,
                                    recalculateContent: F,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, v, f, _.off, _.on, F, A, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ye = De({
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
                        getDirection: (e) => (e.deltaY > 1 ? we.Next : we.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ke = 'HorizontalBar_base_49',
                    Se = 'HorizontalBar_base__nonActive_82',
                    Ie = 'HorizontalBar_leftButton_5f',
                    Te = 'HorizontalBar_rightButton_03',
                    xe = 'HorizontalBar_track_0d',
                    Ne = 'HorizontalBar_thumb_fd',
                    Le = 'HorizontalBar_rail_32',
                    Me = 'disable',
                    Re = { pending: !1, offset: 0 },
                    Oe = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Pe = () => {},
                    He = (e, t) => Math.max(20, e.offsetWidth * t),
                    We = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Oe, onDrag: a = Pe }) => {
                        const u = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(Re),
                            g = _[0],
                            E = _[1],
                            p = (0, o.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / u),
                                    l = Ee(0, 1, o / (u - a)),
                                    m = (t.offsetWidth - He(t, s)) * l;
                                (n.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Me), void i.current.classList.remove(Me);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(Me), void i.current.classList.add(Me);
                                            var t, n;
                                            r.current.classList.remove(Me), i.current.classList.remove(Me);
                                        }
                                    })(m);
                            },
                            b = he(() => {
                                (() => {
                                    const t = d.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && n)) return;
                                    const o = Math.min(1, a / r);
                                    (t.style.width = `${He(n, o)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === o ? u.current.classList.add(Se) : u.current.classList.remove(Se));
                                })(),
                                    h();
                            });
                        (0, o.useEffect)(() => (0, ge.v)(b)),
                            (0, o.useEffect)(
                                () =>
                                    (0, ge.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Pe;
                                        const a = () => {
                                            n(), (n = (0, ge.v)(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = w.O.client.events.mouse.move(([t, n]) => {
                                        var u;
                                        const r = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!r || !o) return;
                                        const s = c.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - g.offset - s.getBoundingClientRect().x,
                                            m = (l / s.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, m),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: m });
                                    }),
                                    n = w.O.client.events.mouse.up(() => {
                                        t(), p(Re);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const v = be((t) => e.applyStepTo(t), m, [e]),
                            f = v[0],
                            A = v[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Me) || (0, M.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()(ke, t.base), ref: u, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()(Ie, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) || 0 !== e.button || ((0, M.G)('play'), f(we.Next));
                                },
                                onMouseUp: A,
                                ref: r,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()(xe, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, M.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        u = e.contentRef.current;
                                                    if (!a || !u) return;
                                                    const r = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? we.Prev : we.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: d, className: l()(Ne, t.thumb) }),
                                s().createElement('div', { className: l()(Le, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()(Te, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Me) || 0 !== e.button || ((0, M.G)('play'), f(we.Prev));
                                },
                                onMouseUp: A,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    je = {
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
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(je.base, e.base) });
                            }, [a]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: l()(je.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(je.defaultScrollArea, u) },
                                s().createElement(Ge, { className: i, api: _, classNames: r }, e),
                            ),
                            s().createElement(We, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Ge = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, o.useEffect)(() => (0, ge.v)(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(je.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: l()(je.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: l()(je.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Ge.Bar = We), (Ge.Default = $e);
                const Ve = De({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? we.Next : we.Prev),
                    }),
                    ze = 'VerticalBar_base_f3',
                    Ue = 'VerticalBar_base__nonActive_42',
                    Ze = 'VerticalBar_topButton_d7',
                    qe = 'VerticalBar_bottomButton_06',
                    Ye = 'VerticalBar_track_df',
                    Xe = 'VerticalBar_thumb_32',
                    Ke = 'VerticalBar_rail_43',
                    Qe = 'disable',
                    Je = () => {},
                    et = { pending: !1, offset: 0 },
                    tt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    nt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    at = (e, t) => Math.max(20, e.offsetHeight * t),
                    ut = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = tt, onDrag: a = Je }) => {
                        const u = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = (0, o.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, o.useState)(et),
                            g = _[0],
                            E = _[1],
                            p = (0, o.useCallback)(
                                (e) => {
                                    E(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = he(() => {
                                const t = d.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && n)) return;
                                const o = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${at(n, o)}px`),
                                    (t.style.display = 'flex'),
                                    u.current &&
                                        (1 === o ? u.current.classList.add(Ue) : u.current.classList.remove(Ue)),
                                    o
                                );
                            }),
                            b = he(() => {
                                const t = c.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    u = e.getContainerSize();
                                if (!(a && t && n && u)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / u),
                                    l = Ee(0, 1, o / (u - a)),
                                    m = (t.offsetHeight - at(t, s)) * l;
                                (n.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return r.current.classList.add(Qe), void i.current.classList.remove(Qe);
                                            if (
                                                ((t = c.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(Qe), void i.current.classList.add(Qe);
                                            var t, n;
                                            r.current.classList.remove(Qe), i.current.classList.remove(Qe);
                                        }
                                    })(m);
                            }),
                            v = he(() => {
                                nt(e, () => {
                                    h(), b();
                                });
                            });
                        (0, o.useEffect)(() => (0, ge.v)(v)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    nt(e, () => {
                                        b();
                                    });
                                };
                                let n = Je;
                                const a = () => {
                                    n(), (n = (0, ge.v)(v));
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
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = w.O.client.events.mouse.up(() => {
                                        p(et);
                                    }),
                                    n = w.O.client.events.mouse.move(([t]) => {
                                        nt(e, (n) => {
                                            const u = c.current,
                                                r = d.current,
                                                o = e.getContainerSize();
                                            if (!u || !r || !o) return;
                                            const s = t.screenY - g.offset - u.getBoundingClientRect().y,
                                                i = (s / u.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, g.offset, g.pending, a, p]);
                        const f = be((t) => e.applyStepTo(t), m, [e]),
                            A = f[0],
                            C = f[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Qe) || (0, M.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()(ze, t.base), ref: u, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()(Ze, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) || 0 !== e.button || ((0, M.G)('play'), A(we.Next));
                                },
                                ref: r,
                                onMouseEnter: F,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()(Ye, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, M.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        nt(e, (a) => {
                                                            if (!a) return;
                                                            const u = n(e),
                                                                r = e.clampPosition(a, a.scrollTop + u * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? we.Prev : we.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                s().createElement('div', { ref: d, className: l()(Xe, t.thumb) }),
                                s().createElement('div', { className: l()(Ke, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()(qe, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qe) || 0 !== e.button || ((0, M.G)('play'), A(we.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    rt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ot = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: u,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, o.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(rt.base, e.base) });
                            }, [a]),
                            _ = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: l()(rt.defaultScroll, n), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(rt.area, u) },
                                s().createElement(st, { className: r, classNames: i, api: _ }, e),
                            ),
                            s().createElement(ut, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    st = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, o.useEffect)(() => (0, ge.v)(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(rt.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(rt.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                st.Default = ot;
                const it = { Vertical: u, Horizontal: a };
                var lt = n(4385);
                const ct = ({
                        startRowIndex: e,
                        cellHeight: t,
                        paddingTop: n,
                        paddingBottom: a,
                        amount: u,
                        itemsAmountPerRow: r,
                        visibleRowsAmount: o,
                    }) => {
                        const s = Math.ceil(u / r) * t,
                            i = o * t,
                            l = e * t;
                        return { paddingTop: `${l + n}rem`, paddingBottom: `${Math.max(s - l - i, 0) + a}rem` };
                    },
                    dt = (e) => {
                        const t = e.className,
                            n = e.children,
                            a = e.itemsAmountPerRow,
                            u = e.visibleRowsAmount,
                            r = e.startRowIndex,
                            o = e.amount,
                            i = r * a,
                            l = Math.min(u * a, o - i);
                        return s().createElement(
                            'div',
                            { className: t, style: ct(e) },
                            (0, lt.K)(l, (e) => n(i + e)),
                        );
                    },
                    mt = 'VirtualGrid_base_52',
                    _t = ({
                        amount: e,
                        cellWidth: t,
                        cellHeight: n,
                        children: a,
                        api: u,
                        classNames: r,
                        preloadedRows: i = 1,
                        paddingTop: c = 0,
                        paddingBottom: d = 0,
                    }) => {
                        const m = u.scrollApi,
                            _ = (0, o.useRef)(0),
                            g = (0, o.useState)(0),
                            E = g[0],
                            p = g[1],
                            h = (0, o.useState)(null),
                            b = h[0],
                            v = h[1],
                            f = (0, o.useState)(null),
                            A = f[0],
                            C = f[1];
                        return (
                            (0, o.useEffect)(() => {
                                const t = (t) => {
                                    if (!b) return;
                                    const a = Math.floor((w.O.view.pxToRem(t.value.scrollPosition) - c) / n),
                                        r = Math.ceil(e / b),
                                        o = Math.max(0, Math.min(a - i, r));
                                    p(o), u.startRowIndexChanged(o);
                                };
                                return m.events.on('change', t), () => m.events.off('change', t);
                            }, [u, m, n, c, b, e, i]),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                        if (m.contentRef.current) {
                                            const e = getComputedStyle(m.contentRef.current),
                                                a = m.contentRef.current.getBoundingClientRect(),
                                                r =
                                                    w.O.view.pxToRem(a.width) -
                                                    (parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)),
                                                o = Math.floor(r / t),
                                                s = Math.ceil(w.O.view.pxToRem(a.height) / n) + 2 * i;
                                            (_.current = o), v(o), C(s), u.layoutCalculated(o, s);
                                        }
                                    },
                                    a = () => {
                                        const t = _.current;
                                        e(), u.scrollToIndex(E * t);
                                    };
                                return (
                                    m.events.on('recalculateContent', e),
                                    m.events.on('resizeHandled', a),
                                    () => {
                                        m.events.off('recalculateContent', e), m.events.off('resizeHandled', a);
                                    }
                                );
                            }, [u, m, n, t, i, E]),
                            (0, o.useEffect)(() => {
                                const e = (e, t = !0) => {
                                    b && m.applyScroll(Math.floor((e + 1) / b) * n + c, { immediate: t });
                                };
                                return u.events.on('scrollToIndex', e), () => u.events.off('scrollToIndex', e);
                            }, [u, n, b, c, m]),
                            s().createElement(
                                it.Vertical.Default,
                                {
                                    api: m,
                                    className: null == r ? void 0 : r.scroll,
                                    areaClassName: null == r ? void 0 : r.areaClassName,
                                    scrollClassName: null == r ? void 0 : r.scrollClassName,
                                    scrollClassNames: {
                                        content: null == r ? void 0 : r.content,
                                        wrapper: null == r ? void 0 : r.wrapper,
                                    },
                                },
                                null !== b &&
                                    null !== A &&
                                    s().createElement(
                                        dt,
                                        {
                                            className: l()(mt, null == r ? void 0 : r.inner),
                                            paddingBottom: d,
                                            paddingTop: c,
                                            amount: e,
                                            itemsAmountPerRow: b,
                                            visibleRowsAmount: A,
                                            startRowIndex: E,
                                            cellHeight: n,
                                        },
                                        a,
                                    ),
                            )
                        );
                    },
                    gt = 'VirtualGridWithFade_scrollAreaFade_94',
                    Et = ['api', 'children', 'classNames'];
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const ht = (e) => {
                    let t = e.api,
                        n = e.children,
                        a = e.classNames,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, Et);
                    const r = (0, o.useState)(!0),
                        i = r[0],
                        c = r[1],
                        d = t.scrollApi;
                    return (
                        (0, o.useEffect)(() => {
                            const e = () => {
                                const e = d.getBounds()[1];
                                c(Math.abs(e - d.animationScroll.scrollPosition.goal) > 0.1);
                            };
                            return (
                                d.events.on('change', e),
                                d.events.on('recalculateContent', e),
                                () => {
                                    d.events.off('change', e), d.events.off('recalculateContent', e);
                                }
                            );
                        }, [d]),
                        s().createElement(
                            _t,
                            pt(
                                {
                                    api: t,
                                    classNames: Object.assign({}, a, {
                                        scrollClassName: l()(null == a ? void 0 : a.scrollClassName, i && gt),
                                    }),
                                },
                                u,
                            ),
                            n,
                        )
                    );
                };
                var bt = n(9480),
                    vt = n(7078);
                var ft = n(9690),
                    At = n(3649);
                const Ct = (e, t) => e.split(',').includes(t),
                    Ft = {
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
                let wt, Bt;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(wt || (wt = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Bt || (Bt = {}));
                const Dt = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: u,
                        tags: r = '',
                        size: o = wt.extraSmall,
                        type: i = Bt.colored,
                        className: c,
                        classNames: d,
                        isShortName: m = !1,
                    }) => {
                        const _ = `${(0, At.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(_);
                        return s().createElement(
                            'div',
                            {
                                className: l()(
                                    Ft.base,
                                    Ft[`base__size${(0, At.e)(o)}`],
                                    Ft[`base__type${(0, At.e)(i)}`],
                                    c,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: l()(Ft.level, null == d ? void 0 : d.level) },
                                (0, ft.HG)(u),
                            ),
                            s().createElement('div', {
                                className: l()(
                                    Ft.type,
                                    e && Ft[`type__elite${(0, At.e)(o)}`],
                                    Ft[`type__${o}`],
                                    null == d ? void 0 : d.typeIcon,
                                ),
                                style: { backgroundImage: `url(${g})` },
                            }),
                            Ct(r, 'premiumIGR') && s().createElement('div', { className: Ft.premiumIGR }),
                            s().createElement(
                                'div',
                                { className: l()(Ft.name, null == d ? void 0 : d.name) },
                                m ? n : t,
                            ),
                        );
                    },
                    yt = 'ListCardAlert_base_52',
                    kt = 'ListCardAlert_glow_1c',
                    St = 'ListCardAlert_icon_d2',
                    It = ({ className: e, tooltipArgs: t }) =>
                        s().createElement(
                            'div',
                            { className: l()(yt, e) },
                            s().createElement('div', { className: kt }),
                            s().createElement(ne.i, t, s().createElement('div', { className: St })),
                        ),
                    Tt = 'VehicleIcon_base_80',
                    xt = 'VehicleIcon_icon_cc',
                    Nt = 'VehicleIcon_noImageLabel_dc',
                    Lt = s().memo(function ({ techName: e, className: t }) {
                        const n = R.images.gui.maps.shop.vehicles.c_180x135.$dyn(e);
                        return s().createElement(
                            'div',
                            { className: l()(Tt, t) },
                            s().createElement('div', {
                                className: xt,
                                style: {
                                    backgroundImage: `url(${null != n ? n : R.images.gui.maps.shop.vehicles.c_180x135.empty_tank()})`,
                                },
                            }),
                            !n &&
                                s().createElement('div', { className: Nt }, R.strings.crew.common.imageNotAvailable()),
                        );
                    }),
                    Mt = 'Content_base_23',
                    Rt = 'Content_base__default_f7',
                    Ot = 'Content_base__selected_0c',
                    Pt = 'Content_base__unclickable_b6',
                    Ht = 'Content_vehicleIcon_bd',
                    Wt = 'Content_tooltipLayer_e4',
                    jt = 'Content_selectedBackground_53',
                    $t = 'Content_isInInventory_7d',
                    Gt = 'Content_premiumIcon_43',
                    Vt = 'Content_vehicle_dd',
                    zt = 'Content_vehicleType_a4',
                    Ut = 'Content_premiumVehicleName_d3',
                    Zt = ({
                        isSelected: e,
                        isPremium: t,
                        isElite: n,
                        techName: a,
                        isInInventory: u,
                        isTrainingAvailable: r,
                        name: o,
                        type: i,
                        nation: c,
                        tier: d,
                        tags: m,
                        vehicleCD: _,
                        onClick: g,
                        className: E,
                    }) =>
                        s().createElement(
                            'div',
                            {
                                className: l()(Mt, e ? Ot : Rt, !r && Pt, E),
                                onMouseEnter: () => {
                                    r && M.$.playHighlight();
                                },
                                onClick: () => {
                                    r && g && (g(), M.$.playClick());
                                },
                            },
                            e && s().createElement('div', { className: jt }),
                            s().createElement(Lt, { techName: a, className: Ht }),
                            u && s().createElement('div', { className: $t }),
                            s().createElement(Dt, {
                                isElite: n,
                                vehicleName: o,
                                vehicleShortName: o,
                                vehicleType: i,
                                vehicleNation: c,
                                vehicleLvl: d,
                                tags: m,
                                className: Vt,
                                classNames: { typeIcon: zt, name: t ? Ut : void 0 },
                                type: Bt.whiteSpanish,
                            }),
                            s().createElement(
                                vt.t,
                                { args: { tooltipId: 'inventoryVehicle', vehicleCD: _ } },
                                s().createElement('div', { className: Wt }),
                            ),
                            t &&
                                s().createElement(It, {
                                    tooltipArgs: {
                                        header: R.strings.crew.tankChange.tooltip.premium.header(),
                                        body: R.strings.crew.tankChange.tooltip.premium.body(),
                                    },
                                    className: Gt,
                                }),
                        );
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Yt = (0, ee.Pi)(({ index: e, className: t }) => {
                        const n = Q(),
                            a = n.model,
                            u = n.controls,
                            r = bt.U2(a.vehicleList.get(), e);
                        if (!r) throw Error(`Index ${e} is out of vehicle list range`);
                        return s().createElement(
                            Zt,
                            qt({}, r, { className: t, onClick: () => u.selectVehicle(r.vehicleCD) }),
                        );
                    }),
                    Xt = 'VehicleList_base_20',
                    Kt = 'VehicleList_grid_f5',
                    Qt = 'VehicleList_gridWrapper_a7',
                    Jt = 'VehicleList_emptyState_33',
                    en = 'VehicleList_item_c8',
                    tn = (0, ee.Pi)(() => {
                        const e = (() => {
                                const e = it.Vertical.useVerticalScrollApi(),
                                    t = Ae(),
                                    n = (0, o.useCallback)((e, n = !0) => t.trigger('scrollToIndex', e, n), [t]),
                                    a = (0, o.useCallback)((e, n) => t.trigger('layoutCalculated', e, n), [t]),
                                    u = (0, o.useCallback)((e) => t.trigger('startRowIndexChanged', e), [t]);
                                return (0, o.useMemo)(
                                    () => ({
                                        scrollToIndex: n,
                                        layoutCalculated: a,
                                        startRowIndexChanged: u,
                                        scrollApi: e,
                                        events: { off: t.off, on: t.on },
                                    }),
                                    [n, a, u, e, t.off, t.on],
                                );
                            })(),
                            t = Q(),
                            n = t.model,
                            a = t.controls,
                            u = n.vehicleList.get().length;
                        return s().createElement(
                            'div',
                            { id: 'vehicles_list', className: Xt },
                            s().createElement(
                                'div',
                                { className: Qt },
                                u > 0
                                    ? s().createElement(
                                          ht,
                                          {
                                              amount: u,
                                              cellWidth: 318,
                                              cellHeight: 208,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              classNames: { content: Kt },
                                              api: e,
                                          },
                                          (e) => s().createElement(Yt, { key: e, index: e, className: en }),
                                      )
                                    : s().createElement(
                                          _e,
                                          {
                                              warningText: R.strings.crew.tankmanList.emptyState.noFilteredItems(),
                                              buttonType: J.L.primary,
                                              onClick: a.resetFilters,
                                              className: Jt,
                                          },
                                          R.strings.crew.tankmanList.emptyState.button.resetFilers(),
                                      ),
                            ),
                        );
                    }),
                    nn = 'TankChangeApp_base_2b',
                    an = 'TankChangeApp_widget_22',
                    un = 'TankChangeApp_flagIcon_6c',
                    rn = 'TankChangeApp_topButtons_98',
                    on = 'TankChangeApp_content_4f',
                    sn = s().memo(function () {
                        const e = Q(),
                            t = e.model,
                            n = e.controls,
                            a = (0, m.GS)().mediaHeight;
                        var u;
                        return (
                            (u = n.closeWithEsc),
                            y(B.n.ESCAPE, u),
                            s().createElement(
                                'div',
                                { className: nn },
                                s().createElement(T, { className: un, nation: t.nation.get(), size: S.c1080x454 }),
                                s().createElement(
                                    'div',
                                    { className: on },
                                    s().createElement(L, {
                                        title: R.strings.crew.tankChange.title(),
                                        theme: N.TankChange,
                                    }),
                                    s().createElement(Y.p, {
                                        popoverDirection: a < m.Aq.Medium ? F.IC.Left : F.IC.Bottom,
                                    }),
                                    s().createElement(tn, null),
                                ),
                                s().createElement('div', { className: an }, s().createElement(q.O, null)),
                                s().createElement(Z, {
                                    onBackClick: n.back,
                                    backButtonLabel: t.backButtonLabel.get(),
                                    onCloseClick: n.hangar,
                                    closeButtonLabel: R.strings.crew.common.navigation.toGarage(),
                                    className: t.isButtonBarVisible.get() && rn,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    C().render(
                        s().createElement(K, null, s().createElement(f, null, s().createElement(sn, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9367: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => d });
                var a = n(6483),
                    u = n.n(a),
                    r = n(9987),
                    o = n(6179),
                    s = n.n(o);
                const i = 'AlertCounter_base_f3',
                    l = 'AlertCounter_counter_da',
                    c = 'AlertCounter_label_18',
                    d = ({ value: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: u()(i, t) },
                            s().createElement(r.A, { value: e, className: l }),
                            !e && s().createElement('div', { className: c }, R.strings.crew.common.exclamationMark()),
                        );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(6483),
                    u = n.n(a),
                    r = n(7078),
                    o = n(2603),
                    s = n(771),
                    i = n(3649),
                    l = n(9916),
                    c = n(6179),
                    d = n.n(c),
                    m = n(130);
                const _ = (0, c.memo)(({ efficiencyValue: e, tankmanID: t = s.y$, className: n }) => {
                    const a = e === s.sU,
                        c = a ? { tooltipId: o.M4 } : { tooltipId: o.Br, tankmanID: t };
                    return d().createElement(
                        r.t,
                        { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), args: c, isEnabled: t !== s.y$ },
                        d().createElement(
                            'div',
                            { className: u()(m.Z.base, n) },
                            a
                                ? d().createElement('div', { className: m.Z.icon })
                                : d().createElement(
                                      'div',
                                      { className: u()(m.Z.percent, e === s.yb && m.Z.percent__full) },
                                      (0, i.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                  ),
                        ),
                    );
                });
            },
            9197: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => h });
                var a = n(6483),
                    u = n.n(a),
                    r = n(6179),
                    o = n.n(r);
                const s = 'NumberRange_base_5e',
                    i = 'NumberRange_base__animation_79',
                    l = 'NumberRange_from_70',
                    c = 'NumberRange_from__red_f8',
                    d = 'NumberRange_separator_c0',
                    m = o().memo(function ({ from: e, to: t, className: n }) {
                        return o().createElement(
                            'div',
                            { className: u()(s, e <= 0 && i, n) },
                            o().createElement('div', { className: u()(l, e <= 0 && t > 0 && c) }, e),
                            e !== t &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: d }, '/'),
                                    o().createElement('div', null, t),
                                ),
                        );
                    }),
                    _ = 'NumberRangeWithLabel_base_2b',
                    g = 'NumberRangeWithLabel_title_94',
                    E = 'NumberRangeWithLabel_counter_00',
                    p = 'NumberRangeWithLabel_counterGlow_1f',
                    h = ({ title: e, isGlowVisible: t = !1, className: n, classNames: a, from: s, to: i }) => {
                        const l = (0, r.useMemo)(
                            () => ({
                                left: s !== i ? 7 * String(s).length + 4 : Math.round((7 * String(s).length) / 2),
                            }),
                            [s, i],
                        );
                        return o().createElement(
                            'div',
                            { className: u()(_, n) },
                            o().createElement('div', { className: g }, e),
                            o().createElement(
                                'div',
                                { className: E },
                                o().createElement(m, { from: s, to: i }),
                                t &&
                                    o().createElement('div', {
                                        style: l,
                                        className: u()(p, null == a ? void 0 : a.counterGlow),
                                    }),
                            ),
                        );
                    };
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => i, y: () => l });
                var a = n(6483),
                    u = n.n(a),
                    r = n(6179),
                    o = n.n(r),
                    s = n(4458);
                let i;
                !(function (e) {
                    (e.c14x14 = 'small'),
                        (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c180x135 = 'dialogs');
                })(i || (i = {}));
                const l = o().memo(function ({ iconName: e, size: t = i.c24x24, className: n }) {
                    var a;
                    return o().createElement('div', {
                        style: {
                            backgroundImage: `url(${null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e)})`,
                        },
                        className: u()(s.Z.base, s.Z[`base__${t}`], n),
                    });
                });
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => l });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3649),
                    o = n(6179),
                    s = n.n(o),
                    i = n(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'small'),
                        (e.c100x60Barracks = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = ({ name: e, size: t = l.c100x60, classMix: n, isSkin: a = !1 }) => {
                    const c = (0, o.useMemo)(() => {
                        try {
                            let n = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                            a && (n = n.$dyn('crewSkins'));
                            const u = n.$dyn((0, r.BN)(e));
                            if (!u) throw Error;
                            return { backgroundImage: `url(${u})` };
                        } catch (t) {
                            console.error('Cant find resource in TankmanIcon: ', e);
                        }
                    }, [e, t, a]);
                    return s().createElement('div', { style: c, className: u()(i.Z.base, i.Z[`base__${t}`], n) });
                };
            },
            8485: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => d, d: () => E });
                var a = n(6483),
                    u = n.n(a),
                    r = n(8271),
                    o = n(771),
                    s = n(6179),
                    i = n.n(s),
                    l = n(2768),
                    c = n(9426);
                let d;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(d || (d = {}));
                const m = { [d.Big]: l.F.c22x22, [d.Small]: l.F.c14x14 };
                var _;
                !(function (e) {
                    (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                })(_ || (_ = {}));
                const g = (e, t, n) =>
                        e === r.W.Possible || e === r.W.New
                            ? _.LightYellow
                            : e === r.W.Irrelevant
                              ? _.Grey
                              : t === o.sU
                                ? e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey
                                : t < o.yb
                                  ? n
                                      ? _.Grey
                                      : _.Red
                                  : e === r.W.Learning
                                    ? _.Yellow
                                    : _.Grey,
                    E = i().memo(function ({
                        icon: e,
                        type: t,
                        size: n,
                        efficiency: a = o.yb,
                        hasInstruction: s = !1,
                    }) {
                        const d = (!s && a === o.sU) || t === r.W.Irrelevant;
                        return i().createElement(
                            'div',
                            { className: u()(c.Z.base, c.Z[`base__${n}`]) },
                            i().createElement('div', {
                                className: u()(c.Z.background, c.Z[`background__${g(t, a, s)}`]),
                            }),
                            e &&
                                i().createElement(
                                    'div',
                                    { className: c.Z.container },
                                    i().createElement(l.y, {
                                        iconName: e,
                                        size: m[n],
                                        className: u()(d && c.Z.disabledIcon),
                                    }),
                                    d && i().createElement('div', { className: c.Z.disabled }),
                                ),
                        );
                    });
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => _ });
                var a = n(6483),
                    u = n.n(a),
                    r = n(3457),
                    o = n(2106),
                    s = n(9987),
                    i = n(6179),
                    l = n.n(i),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const _ = l().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        i = e.children,
                        _ = e.type,
                        g = void 0 === _ ? o.L.secondary : _,
                        E = e.size,
                        p = void 0 === E ? o.q.small : E,
                        h = e.hasIndicator,
                        b = void 0 === h || h,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: u()(c.Z.base, a, t && c.Z.base__active) },
                        l().createElement(r.u5, m({ type: g, size: p, mixClass: c.Z.button }, v), i),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(s.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, n) => {
                'use strict';
                n.d(t, { BH: () => r, Fs: () => o, ei: () => a, qb: () => u });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    u = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    o = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Gc: () => s, H$: () => i, Xd: () => r, Y4: () => l, gO: () => o, wP: () => u });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let u;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(u || (u = {}));
                const r = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let o;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(o || (o = {}));
                const s = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
                const l = (e) => (e === a.sU ? i.Untrained : e < a.yb ? i.Low : i.Normal);
            },
            7321: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => jn });
                var a = n(6179),
                    u = n.n(a),
                    r = n(3403),
                    o = n(3215),
                    s = n(4598),
                    i = n(9480),
                    l = n(3946),
                    c = n(4828);
                const d = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    m = (0, o.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'selectedSlotIdx',
                                        'isDisabled',
                                        'hasDog',
                                        'vehicleName',
                                        'vehicleType',
                                        'currentLayoutID',
                                        'previousLayoutID',
                                        'isCrewLocked',
                                        'nation',
                                    ]),
                                    {
                                        slots: e.array('slots', []),
                                        buttonsBar: e.object('buttonsBar'),
                                        crewOperations: e.object('buttonsBar.crewOperations'),
                                        crewBooks: e.object('buttonsBar.crewBooks'),
                                        acceleratedTraining: e.object('buttonsBar.acceleratedTraining'),
                                        wotPlus: e.object('buttonsBar.wotPlus'),
                                    },
                                ),
                                n = (0, l.Om)(
                                    () =>
                                        i.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: i.UI(e.roles, s.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: i.UI(e.tankman.roles, s.yR),
                                                    skills: i.UI(e.tankman.skills, (e) => Object.assign({}, e)),
                                                }),
                                            }),
                                        ),
                                    { equals: s.jv },
                                ),
                                a = (0, l.Om)(() => Boolean(i.sE(n(), (e) => -1 === e.tankman.tankmanID))),
                                u = (0, l.Om)(() => 1 === t.slots.get().length),
                                r = (0, l.Om)((e) => t.selectedSlotIdx.get() === e),
                                o = (0, l.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                m = (0, l.Om)((e) => {
                                    var t;
                                    return null == (t = i.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                _ = (0, l.Om)((e) => {
                                    var t;
                                    const a = null == (t = i.U2(n(), e)) ? void 0 : t.tankman;
                                    return a ? a.skills.length + a.newSkillsAmount + a.possibleSkillsAmount : 0;
                                }),
                                g = (0, l.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: d.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: d.includes(n),
                                            isPreviousLayoutQuickTraining:
                                                n === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                n === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: n === R.views.lobby.crew.BarracksView('resId'),
                                        }
                                    );
                                    var e, n;
                                }),
                                E = (0, l.Om)(() => {
                                    const e = g(),
                                        t = e.isCurrentLayoutHangar,
                                        n = e.isCurrentLayoutQuickTraining;
                                    return !u() && !t && !n;
                                }),
                                p = (0, l.Om)(() => !u() && t.buttonsBar.get().isVisible),
                                h = (0, l.Om)(() => {
                                    return (e = t.currentLayoutID.get()), c.AB[e] || c.sC.Hangar;
                                    var e;
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: r,
                                    isAnySlotSelected: o,
                                    getSlotTankman: m,
                                    getAllSkillsAmount: _,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: u,
                                    isChangeCrewButtonVisible: E,
                                    isButtonBarVisible: p,
                                    getLayoutInfo: g,
                                    getUiLoggingParentScreen: h,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onSlotClick: e.createCallback((e, t) => ({ slotIdx: e, tankmanID: t }), 'onSlotClick'),
                            onChangeCrewClick: e.createCallback(
                                (e, t) => ({ slotIdx: e, tankmanID: t }),
                                'onChangeCrewClick',
                            ),
                            onCrewBooksClick: e.createCallbackNoArgs('buttonsBar.onCrewBooksClick'),
                            onAcceleratedTrainingClick: e.createCallbackNoArgs('buttonsBar.onAcceleratedTrainingClick'),
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    _ = m[0],
                    g = m[1];
                var E = n(6483),
                    p = n.n(E),
                    h = n(6373),
                    b = n(2056);
                let v;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(v || (v = {}));
                const f = 'ButtonsBar_base_9c',
                    A = 'ButtonsBar_button_d1',
                    C = 'ButtonsBar_button__crewOperaions_70',
                    F = 'ButtonsBar_button__crewBooks_b4',
                    w = 'ButtonsBar_button__toggle_64';
                var B = n(3457),
                    D = n(9987),
                    y = n(3649);
                const k = 'CrewBookButton_base_da',
                    S = 'CrewBookButton_button_ee',
                    I = 'CrewBookButton_icon_11',
                    T = 'CrewBookButton_discount_6b',
                    x = 'CrewBookButton_counter_5d',
                    N = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = g(),
                            a = n.model,
                            r = n.controls,
                            o = a.crewBooks.get(),
                            s = r.onCrewBooksClick,
                            i = o.isDisabled || t;
                        return u().createElement(
                            h.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, y.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: o.totalAmount,
                                }),
                            },
                            u().createElement(
                                'div',
                                { id: 'crew_book_button', className: p()(k, e) },
                                u().createElement(
                                    B.u5,
                                    { type: B.L$.primary, mixClass: S, disabled: i, onClick: s },
                                    u().createElement('div', { className: I }),
                                ),
                                !i &&
                                    '0' !== o.newAmount &&
                                    u().createElement(
                                        'div',
                                        { className: x },
                                        u().createElement(D.A, { value: o.newAmount }),
                                    ),
                                !i && o.hasDiscount && u().createElement('div', { className: T }),
                            ),
                        );
                    });
                var L = n(3616);
                const M = ['children'];
                function O() {
                    return (
                        (O =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        O.apply(this, arguments)
                    );
                }
                const P = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                u = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                            return u;
                        })(e, M);
                    return u().createElement(
                        L.Z,
                        O(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            n,
                        ),
                        t,
                    );
                };
                var H = n(4489);
                let W;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(W || (W = {}));
                var j = n(1943);
                const $ = 'CrewOperationsButton_base_e3',
                    G = 'CrewOperationsButton_button_8e',
                    V = 'CrewOperationsButton_icon_0c',
                    z = 'CrewOperationsButton_autoReturnIcon_f0',
                    U = (0, r.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = g().model,
                            a = ((e) => {
                                const t = (0, j.Jp)(c.D9);
                                return (n) => t({ action: c.eX.Click, parentScreen: e, item: n });
                            })(n.computes.getUiLoggingParentScreen()),
                            r = n.crewOperations.get();
                        return u().createElement(
                            'div',
                            { id: 'crew_operations_button', className: p()($, e) },
                            u().createElement(
                                P,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    onClick: () => a(c.x3.CrewOperationsButton),
                                },
                                u().createElement(
                                    h.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(
                                            B.u5,
                                            { type: B.L$.primary, mixClass: G, disabled: t },
                                            u().createElement('div', { className: V }),
                                        ),
                                        r.isAutoReturnOn && u().createElement('div', { className: z }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = n(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    X = 'CrewToggleButton_iconContainer_f9',
                    K = 'CrewToggleButton_icon_a7';
                let Q;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(Q || (Q = {}));
                const J = (0, a.memo)(({ type: e, state: t, isDisabled: n, onClick: r, classMix: o }) => {
                        const s = (0, a.useMemo)(() => {
                            const n = t === v.Disabled ? v.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return u().createElement(
                            'div',
                            { className: p()(q, o) },
                            u().createElement(
                                Z.C,
                                {
                                    type: B.L$.primary,
                                    isActive: t === v.On,
                                    disabled: n || t === v.Disabled,
                                    className: Y,
                                    onClick: r,
                                },
                                u().createElement(
                                    'div',
                                    { className: X },
                                    u().createElement('div', { className: K, style: s }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [v.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [v.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [v.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [v.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, r.Pi)(({ isWidgetDisabled: e }) => {
                        const t = g(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            o = n.wotPlus.get(),
                            s = a.onAcceleratedTrainingClick,
                            i = a.onWotPlusClick,
                            l = ee[r.state];
                        return u().createElement(
                            'div',
                            { className: f },
                            u().createElement(U, { classMix: p()(A, C), isWidgetDisabled: e }),
                            u().createElement(N, { classMix: p()(A, F), isWidgetDisabled: e }),
                            r.state !== v.Hidden &&
                                u().createElement(
                                    h.i,
                                    { header: l.header(), body: l.body() },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(J, {
                                            type: Q.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: s,
                                            classMix: p()(A, w),
                                        }),
                                    ),
                                ),
                            o.state !== v.Hidden &&
                                u().createElement(
                                    b.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    u().createElement(
                                        'div',
                                        null,
                                        u().createElement(J, {
                                            type: Q.WotPlus,
                                            state: o.state,
                                            isDisabled: e || o.isDisabled,
                                            onClick: i,
                                            classMix: p()(A, w),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ne = 'CrewWidgetApp_base_cc',
                    ae = 'CrewWidgetApp_buttonsBar_e5',
                    ue = 'CrewWidgetApp_slotsList_ee';
                var re = n(7727),
                    oe = n(7030),
                    se = n(8018),
                    ie = n(7160);
                const le = 'BaseSlot_base_97',
                    ce = 'BaseSlot_base__hovered_61',
                    de = 'BaseSlot_base__inactive_7e',
                    me = 'BaseSlot_hoverGlow_de',
                    _e = 'BaseSlot_hoverGlow__visible_f4',
                    ge = 'BaseSlot_selectedGlow_25',
                    Ee = 'BaseSlot_selectedGlow__visible_2f',
                    pe = 'BaseSlot_hover_e9',
                    he = 'BaseSlot_hover__visible_1f',
                    be = 'BaseSlot_disabled_67',
                    ve = ({
                        onClick: e,
                        children: t,
                        isSelected: n = !1,
                        isDisabled: r,
                        isEnabledForMouse: o,
                        isEmpty: s = !1,
                        layoutInfo: i,
                    }) => {
                        const l = (0, a.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = c && (!n || (!s && i.isCurrentLayoutMemberChange)),
                            _ = m && !s && !i.isCurrentLayoutHangar;
                        return u().createElement(
                            'div',
                            {
                                className: p()(le, (c || n) && !i.isCurrentLayoutHangar && ce, (n || !o) && de),
                                onClick: e,
                                onMouseEnter: () => {
                                    o && !n && (re.$.playHighlight(), d(!0));
                                },
                                onMouseLeave: () => {
                                    d(!1);
                                },
                            },
                            !i.isCurrentLayoutMemberChange && u().createElement('div', { className: p()(ge, n && Ee) }),
                            u().createElement('div', { className: p()(me, _ && _e) }),
                            u().createElement('div', { className: p()(pe, m && he) }),
                            r && u().createElement('div', { className: be }),
                            t,
                        );
                    },
                    fe = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: r,
                        children: o,
                        className: s,
                        isTankmanMode: i,
                    }) => {
                        const l = (0, oe.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: ie.qb }, pause: r }),
                                [r],
                            )[0],
                            c = (0, a.useMemo)(
                                () =>
                                    n.isCurrentLayoutHangar || n.isCurrentLayoutQuickTraining || i
                                        ? e
                                        : (!n.isPreviousLayoutHangar && !n.isPreviousLayoutBarrack) || r
                                          ? t
                                          : l,
                                [n, r, l, e, t, i],
                            );
                        return u().createElement(oe.animated.div, { className: s, style: c }, o);
                    },
                    Ae = 'DogSlot_base_8f',
                    Ce = 'DogSlot_icon_ba',
                    Fe = 'DogSlot_container_63',
                    we = 'DogSlot_roleAndName_c9',
                    Be = 'DogSlot_role_5c',
                    De = 'DogSlot_name_9c',
                    ye = 'DogSlot_btnDetails_b7',
                    ke = { transform: 'translateX(0rem)' },
                    Se = (0, r.Pi)(({ isDisabled: e, layoutInfo: t }) => {
                        const n = g(),
                            r = n.model,
                            o = n.controls,
                            s = r.nation.get(),
                            i = o.onDogMoreInfoClick,
                            l = (0, a.useCallback)(() => {
                                !e && (0, re.G)(se.gO.RUDY);
                            }, [e]),
                            c = (0, a.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && i();
                                },
                                [i, e],
                            ),
                            d = (0, oe.useSpring)(
                                () => ({
                                    from: ke,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ie.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(s);
                        return u().createElement(
                            h.i,
                            { header: m.header(), body: m.body() },
                            u().createElement(
                                'div',
                                null,
                                u().createElement(
                                    ve,
                                    { onClick: l, isDisabled: e, isEnabledForMouse: !1, layoutInfo: t },
                                    u().createElement(
                                        fe,
                                        {
                                            startState: ke,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            isPaused: !1,
                                            className: Ae,
                                            isTankmanMode: !1,
                                        },
                                        u().createElement(oe.animated.div, { className: Ce, style: d }),
                                        u().createElement(
                                            'div',
                                            { className: Fe },
                                            u().createElement(
                                                'div',
                                                { className: we },
                                                u().createElement('div', { className: Be }),
                                                u().createElement(
                                                    'div',
                                                    { className: De },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(s).name(),
                                                ),
                                            ),
                                            u().createElement(
                                                'div',
                                                { className: ye },
                                                u().createElement(
                                                    B.u5,
                                                    { onClick: c },
                                                    R.strings.crew_widget.btnDetails(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Ie = n(9916);
                const Te = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: u = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: s,
                    }) => {
                        const i = (0, a.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: u,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    re.$.playYes();
                            }, [r, t, n, u]),
                            l = (0, a.useCallback)(() => {
                                (0, Ie.c9)(Ie.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: u,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, u]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    s && s(e), ((e) => e.button === W.RIGHT)(e) && i();
                                },
                                [s, i],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    xe = ['children'];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Le = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, xe);
                        return u().createElement(
                            Te,
                            Ne({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Me = 'ChangeCrewButton_base_0f',
                    Re = 'ChangeCrewButton_base__inactive_77',
                    Oe = 'ChangeCrewButton_normalState_07',
                    Pe = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    je = (0, r.Pi)(({ isSelected: e, isLocked: t, mainRole: n, isFemale: r }) => {
                        const o = g().model,
                            s = (0, a.useState)(!1),
                            i = s[0],
                            l = s[1],
                            d = (0, j.Sr)(c.D9, {
                                item: c.x3.ChangeButtonTooltip,
                                action: c.eX.Viewed,
                                parentScreen: o.computes.getUiLoggingParentScreen(),
                            }),
                            m = (0, a.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, y.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, se.Gc)(n, r, se.wP.Objective),
                                              }),
                                          ],
                                [t, r, n],
                            ),
                            _ = m[0],
                            E = m[1];
                        return u().createElement(
                            h.i,
                            {
                                header: _,
                                body: E,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            u().createElement(
                                'div',
                                {
                                    className: p()(Me, (t || e) && Re),
                                    onMouseEnter: () => {
                                        d.onShow(), t || e || (re.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        d.onHide(), l(!1);
                                    },
                                },
                                u().createElement('div', { className: p()(Oe, i && Pe) }),
                                u().createElement('div', { className: p()(He, (e || i) && We) }),
                            ),
                        );
                    }),
                    $e = 'CrewSlot_base_ac',
                    Ge = 'CrewSlot_changeCrew_02',
                    Ve = 'CrewSlot_content_5b',
                    ze = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ue = 'CrewSlot_warningHighlight_ff',
                    Ze = 'CrewSlot_selectHighlight_50',
                    qe = 'CrewSlot_selectHighlightInTankmanMode_37';
                var Ye = n(7077),
                    Xe = n(7078),
                    Ke = n(2603),
                    Qe = n(771);
                const Je = 'SpecializationAndName_base_ef',
                    et = 'SpecializationAndName_roleWrapper_87',
                    tt = 'SpecializationAndName_role_55',
                    nt = 'SpecializationAndName_role__withGap_35',
                    at = 'SpecializationAndName_name_aa',
                    ut = ({ roles: e, tankmanID: t = Qe.y$, slotIdx: n, name: a }) =>
                        u().createElement(
                            'div',
                            { className: Je },
                            u().createElement(
                                Xe.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.rs, slotIdx: n, tankmanID: t },
                                },
                                u().createElement(
                                    'div',
                                    { className: et },
                                    i.UI(e, (e, t) =>
                                        u().createElement('div', {
                                            key: `role__${e}`,
                                            className: p()(tt, t > 0 && nt),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            u().createElement('div', { className: at }, a),
                        ),
                    rt = 'EmptySlotContent_base_77',
                    ot = 'EmptySlotContent_tankmanIcon_07',
                    st = 'EmptySlotContent_icon_a8',
                    it = 'EmptySlotContent_specialization_1f',
                    lt = 'EmptySlotContent_specialization__disabled_3d',
                    ct = 'EmptySlotContent_vehicle_55',
                    dt = { transform: 'translateX(0rem)', opacity: 1 },
                    mt = { transform: 'translateX(-70rem)', opacity: 0 },
                    _t = (0, a.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: r,
                            isDisabled: o,
                            isSelected: s,
                            slotIdx: l,
                            blinkStyle: c,
                            qtTankmanIconStyle: d,
                        }) => {
                            const m = (0, oe.useSpring)(
                                    () => ({
                                        from: dt,
                                        to: mt,
                                        config: { duration: 200, easing: ie.ei },
                                        immediate: !0,
                                        pause: s,
                                    }),
                                    [s],
                                ),
                                _ = m[0],
                                g = m[1],
                                E = (0, a.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || g.start({ reset: !0, reverse: !0 });
                                }, [g, t]),
                                h = i.U2(e, 0) || '',
                                b = R.strings.crew_widget.vehicleWithName.$dyn((0, y.BN)(r)),
                                v = (0, y.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(h),
                                });
                            return u().createElement(
                                'div',
                                { className: rt, onMouseEnter: E, onMouseLeave: E },
                                u().createElement(
                                    'div',
                                    { className: ot },
                                    u().createElement(
                                        oe.animated.div,
                                        { style: d },
                                        u().createElement(Ye.G, {
                                            name: 'empty',
                                            size: Ye.U.c100x60Barracks,
                                            classMix: st,
                                        }),
                                        u().createElement(
                                            oe.animated.div,
                                            { style: o ? void 0 : c },
                                            u().createElement(Ye.G, {
                                                name: 'emptyRed',
                                                size: Ye.U.c100x60Barracks,
                                                classMix: st,
                                            }),
                                        ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: p()(it, o && lt) },
                                    u().createElement(ut, { slotIdx: l, roles: e, name: v }),
                                ),
                                u().createElement(
                                    oe.animated.div,
                                    { className: ct, style: s ? void 0 : _ },
                                    (0, y.uF)(b, { name: n }),
                                ),
                            );
                        },
                    );
                var gt = n(5415),
                    Et = n(8271);
                const pt = (e) => e.skills.length + e.newSkillsAmount + e.possibleSkillsAmount,
                    ht = (e, t, n) => {
                        const a = ((e, t, n) => {
                                if (e <= t) return [1, e, 24];
                                const a = Math.floor((n - 2) / 18);
                                return [2, e <= 2 * a ? a : Math.ceil(e / 2), 16];
                            })(e, t, n),
                            u = a[0],
                            r = a[1],
                            o = a[2];
                        let s = 2,
                            i = o;
                        for (; r * i + s + (r - 1) > n; ) s > 0 ? (s -= 1) : (i -= 1);
                        return i !== o && (s = i - o), [u, r, s, o, i];
                    };
                var bt = n(4385),
                    vt = n(5563);
                const ft = 'AcceleratedTrainingIcon_base_4f',
                    At = 'AcceleratedTrainingIcon_icon_45',
                    Ct = (0, a.memo)(({ classMix: e }) =>
                        u().createElement(
                            h.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                                body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            },
                            u().createElement(
                                'div',
                                { className: p()(ft, e) },
                                u().createElement('div', { className: At }),
                            ),
                        ),
                    ),
                    Ft = {
                        base: 'LastSkillInfo_base_38',
                        levelsContainer: 'LastSkillInfo_levelsContainer_4f',
                        realLevel: 'LastSkillInfo_realLevel_78',
                        base__small: 'LastSkillInfo_base__small_c5',
                        possibleLevel: 'LastSkillInfo_possibleLevel_02',
                        acceleratedTrainingIcon: 'LastSkillInfo_acceleratedTrainingIcon_bf',
                        base__big: 'LastSkillInfo_base__big_10',
                    },
                    wt = 0.01,
                    Bt = (0, a.memo)(
                        ({
                            lastSkillLevel: e,
                            lastPossibleSkillLevel: t,
                            isLevelVisible: n,
                            isAcceleratedTrainingVisible: r,
                            skillSize: o,
                            blinkStyle: s,
                        }) => {
                            const i = (0, a.useRef)(e),
                                l = (0, oe.useSpring)(() => ({ from: { scale: 1 } })),
                                c = l[0],
                                d = l[1];
                            (0, a.useEffect)(() => {
                                t < 0 &&
                                    i.current !== e &&
                                    (d.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ie.Fs },
                                    }),
                                    (i.current = e));
                            }, [e, t, d]);
                            const m = (0, a.useMemo)(
                                    () =>
                                        0 === t
                                            ? [R.strings.common.percentValue(), t]
                                            : t < wt
                                              ? [R.strings.crew_widget.plusMinValue(), wt]
                                              : [R.strings.crew_widget.plusValue(), t],
                                    [t],
                                ),
                                _ = m[0],
                                g = m[1];
                            return u().createElement(
                                'div',
                                { className: p()(Ft.base, Ft[`base__${o}`]) },
                                n &&
                                    u().createElement(
                                        'div',
                                        { className: Ft.levelsContainer },
                                        e >= 0 &&
                                            e < 100 &&
                                            u().createElement(
                                                oe.animated.div,
                                                { style: c },
                                                u().createElement(
                                                    'div',
                                                    { className: Ft.realLevel },
                                                    (0, y.uF)(R.strings.common.percentValue(), {
                                                        value: e > 0 && e < wt ? wt : e,
                                                    }),
                                                ),
                                            ),
                                        t >= 0 &&
                                            t < 100 &&
                                            u().createElement(
                                                oe.animated.div,
                                                { className: Ft.possibleLevel, style: s },
                                                (0, y.uF)(_, { value: g }),
                                            ),
                                    ),
                                r && u().createElement(Ct, { classMix: Ft.acceleratedTrainingIcon }),
                            );
                        },
                    );
                var Dt = n(8485);
                const yt = 33,
                    kt = 0,
                    St = !0,
                    It = 'play';
                const Tt = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function xt() {
                    return (
                        (xt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        xt.apply(this, arguments)
                    );
                }
                const Nt = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            r = e.getImageSource,
                            o = e.frameCount,
                            s = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? yt : i,
                            c = e.initialFrameIndex,
                            d = void 0 === c ? kt : c,
                            m = e.lastFrameIndex,
                            _ = void 0 === m ? o - 1 : m,
                            g = e.loop,
                            E = void 0 === g ? St : g,
                            p = e.state,
                            h = void 0 === p ? It : p,
                            b = e.onAnimationDone,
                            v = e.onAnimationComplete,
                            f = e.poster,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, Tt);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = Rt(d, _, r),
                                                t = Lt(d, _),
                                                a = window.setInterval(() => {
                                                    const u = t(),
                                                        r = e.get(u);
                                                    r
                                                        ? (null == s || s(u, r),
                                                          n(r),
                                                          u === _ &&
                                                              (null == v || v(),
                                                              E || (null == b || b(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && f ? { path: f, x: 0, y: 0 } : r(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(Mt(e, t));
                                            return (
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, d, _, E, s, v, b, f, h]),
                            u().createElement('canvas', xt({}, A, { width: t, height: n, ref: C }))
                        );
                    }),
                    Lt = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    Mt = (e, t) => Object.assign({}, e, { img: t }),
                    Rt = (e, t, n) => {
                        const a = new Map(),
                            u = {};
                        for (let r = e; r <= t; r++) {
                            const e = n(r),
                                t = u[e.path];
                            if (t) a.set(r, Mt(e, t));
                            else {
                                const t = new Image();
                                (u[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, Mt(e, t));
                            }
                        }
                        return a;
                    };
                function Ot(e) {
                    return (t) => `${e}${t}`;
                }
                const Pt = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                    'revers',
                ];
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
                let Wt;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(Wt || (Wt = {}));
                const jt = (e, t, n) => {
                        const a = new Image();
                        (a.src = n(t)), e.push(a);
                    },
                    $t =
                        ((0, a.memo)((e) => {
                            let t = e.width,
                                n = e.height,
                                r = e.getSrcByFrame,
                                o = e.frameCount,
                                s = e.onAnimate,
                                i = void 0 === s ? () => {} : s,
                                l = e.frameTime,
                                c = void 0 === l ? 33 : l,
                                d = e.initialFrameIndex,
                                m = void 0 === d ? 0 : d,
                                _ = e.loop,
                                g = void 0 === _ || _,
                                E = e.state,
                                p = void 0 === E ? Wt.Play : E,
                                h = e.onAnimationComplete,
                                b = void 0 === h ? () => {} : h,
                                v = e.revers,
                                f = void 0 !== v && v,
                                A = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        u = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                    return u;
                                })(e, Pt);
                            const C = (0, a.useRef)(null);
                            return (
                                (0, a.useEffect)(() => {
                                    const e = C.current;
                                    if (!e) return;
                                    const a = o - 1,
                                        u = e.getContext('2d'),
                                        s = (a) => {
                                            u.clearRect(0, 0, e.width, e.height), u.drawImage(a, 0, 0, t, n);
                                        };
                                    if ('stop' === p) {
                                        const e = r(0),
                                            t = new Image();
                                        t.src = e;
                                        const n = () => s(t);
                                        return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                                    }
                                    const l = ((e, t, n) => {
                                            const a = [];
                                            if (n) for (let n = e; n >= 0; n--) jt(a, n, t);
                                            else for (let n = 0; n < e; n++) jt(a, n, t);
                                            return a;
                                        })(o, r, f),
                                        d = ((e, t = 0) => {
                                            let n = t;
                                            return () => {
                                                const t = n;
                                                return (n += 1), n > e && (n = 0), t;
                                            };
                                        })(a, m),
                                        _ = setInterval(() => {
                                            const e = d(),
                                                t = l[e];
                                            s(l[e]), i(e, t), e === a && (b(), g || clearInterval(_));
                                        }, c);
                                    return () => clearInterval(_);
                                }, [o, c, r, n, m, g, i, b, p, t, f]),
                                u().createElement('canvas', Ht({}, A, { width: t, height: n, ref: C }))
                            );
                        }),
                        'AnimatedNewSkill_base_6b'),
                    Gt = 'AnimatedNewSkill_base__big_31';
                function Vt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return zt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return zt(e, t);
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
                function zt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                class Ut {
                    constructor() {
                        (this._intervalID = void 0),
                            (this._observers = void 0),
                            (this._intervalID = null),
                            (this._observers = new Map());
                    }
                    static get instance() {
                        return Ut._instance || (Ut._instance = new Ut()), Ut._instance;
                    }
                    subscribe(e) {
                        this._observers.set(e, e),
                            1 === this._observers.size &&
                                (this._intervalID = window.setInterval(() => {
                                    for (var e, t = Vt(this._observers.values()); !(e = t()).done; ) {
                                        (0, e.value)();
                                    }
                                }, 5e3));
                    }
                    unsubscribe(e) {
                        this._observers.delete(e),
                            0 === this._observers.size &&
                                null !== this._intervalID &&
                                (clearInterval(this._intervalID), (this._intervalID = null));
                    }
                }
                Ut._instance = void 0;
                const Zt = {
                        width: 24,
                        height: 24,
                        frameCount: 42,
                        chunk: { count: 1, columns: 42, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_'),
                    },
                    qt = {
                        width: 16,
                        height: 16,
                        frameCount: 32,
                        chunk: { count: 1, columns: 32, rows: 1 },
                        getChunkPath: Ot('R.images.gui.maps.icons.sequence.new_skill.skill_small_'),
                    },
                    Yt = ({ size: e }) => {
                        const t = e === Dt.O.Small ? qt : Zt,
                            n = (function (e) {
                                const t = e.chunk,
                                    n = t.rows * t.columns;
                                return (a) => {
                                    const u = a % n,
                                        r = (u % t.columns) * e.width,
                                        o = Math.trunc(u / t.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(a / n)), x: r, y: o };
                                };
                            })(t),
                            r = (0, a.useState)(Wt.Stop),
                            o = r[0],
                            s = r[1],
                            i = (0, a.useCallback)(() => {
                                s(Wt.Play);
                            }, [s]),
                            l = (0, a.useCallback)(() => {
                                s(Wt.Stop);
                            }, [s]);
                        return (
                            (0, a.useEffect)(() => (Ut.instance.subscribe(i), () => Ut.instance.unsubscribe(i)), [i]),
                            u().createElement(Nt, {
                                width: t.width,
                                height: t.height,
                                frameCount: t.frameCount,
                                getImageSource: n,
                                loop: !1,
                                state: o,
                                onAnimationDone: l,
                                className: p()($t, e === Dt.O.Big && Gt),
                            })
                        );
                    },
                    Xt = { base: 'Skill_base_ba', base__big: 'Skill_base__big_eb' };
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                let Qt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Qt || (Qt = {}));
                const Jt = (0, a.memo)(
                        ({
                            name: e,
                            icon: t,
                            type: n,
                            size: r,
                            marginValue: o,
                            clipWidth: s,
                            tankmanId: i,
                            skillsEfficiency: l,
                            blinkStyle: c,
                            showNewSkillAnimation: d,
                            isTooltipEnabled: m = !0,
                            hasInstruction: _,
                        }) => {
                            const g = (0, a.useRef)(''),
                                E = (0, oe.useSpring)(() => ({ from: { scale: 1 } })),
                                h = E[0],
                                v = E[1];
                            (0, a.useEffect)(() => {
                                n === Et.W.New &&
                                    g.current === Et.W.Possible &&
                                    v.start({
                                        from: { scale: 1 },
                                        to: [{ scale: 1.2 }, { scale: 1 }],
                                        delay: 200,
                                        config: { duration: 400, easing: ie.Fs },
                                    }),
                                    (g.current = n);
                            }, [n, v]);
                            const f = (0, a.useCallback)(() => {
                                switch (n) {
                                    case Et.W.Learned:
                                    case Et.W.Learning:
                                    case Et.W.Irrelevant:
                                        return {
                                            contentId:
                                                R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                    'resId',
                                                ),
                                            args: { tooltipId: Ke.HZ, tankmanID: i, skillName: e },
                                        };
                                    case Et.W.New:
                                    case Et.W.Possible:
                                        return {
                                            contentId: R.views.lobby.crew.tooltips.PerkAvailableTooltip('resId'),
                                            args: { tankmanID: i },
                                        };
                                }
                            }, [n, e, i]);
                            return u().createElement(
                                b.u,
                                Kt({}, f(), {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: m,
                                    ignoreShowDelay: !0,
                                }),
                                u().createElement(
                                    oe.animated.div,
                                    { style: h },
                                    u().createElement(
                                        oe.animated.div,
                                        { style: n === Et.W.Possible ? c : void 0 },
                                        u().createElement(
                                            'div',
                                            {
                                                className: p()(Xt.base, Xt[`base__${r}`]),
                                                style: { marginLeft: `${o}rem`, clipPath: `inset(0 ${s}rem 0 0)` },
                                            },
                                            !d || (n !== Et.W.Possible && n !== Et.W.New)
                                                ? u().createElement(Dt.d, {
                                                      icon: t,
                                                      size: r,
                                                      type: n,
                                                      efficiency: l,
                                                      hasInstruction: _,
                                                  })
                                                : u().createElement(Yt, { size: r }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    en = 'SkillsList_base_11',
                    tn = 'SkillsList_efficiency_72',
                    nn = 'SkillsList_container_c7',
                    an = 'SkillsList_row_03';
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
                const rn = ({
                        tankman: e,
                        isAcceleratedTrainingVisible: t = !1,
                        rowWidth: n = 220,
                        maxBigSkillsInRow: a = 16,
                        blinkStyle: r,
                        isSkillTooltipEnabled: o = !0,
                        showNewSkillAnimation: s = !1,
                    }) => {
                        const l = pt(e),
                            c = ht(l, a, n),
                            d = c[0],
                            m = c[1],
                            _ = c[2],
                            g = c[3],
                            E = c[4],
                            p = d > 1 ? Qt.Small : Qt.Big,
                            h = (0, se.Y4)(e.skillsEfficiency) !== se.H$.Normal,
                            b = -1 !== e.possibleSkillsEfficiency,
                            v = b ? e.possibleSkillsEfficiency : e.skillsEfficiency,
                            f = (0, se.Y4)(v) !== se.H$.Low;
                        return u().createElement(
                            'div',
                            { className: en },
                            h &&
                                u().createElement(
                                    oe.animated.div,
                                    { style: b ? r : void 0 },
                                    u().createElement(vt.A, {
                                        efficiencyValue: v,
                                        tankmanID: e.tankmanID,
                                        className: tn,
                                    }),
                                ),
                            u().createElement(
                                'div',
                                { className: nn },
                                (0, bt.K)(d, (n) => {
                                    const a = Math.min(m, l - n * m),
                                        c = n === d - 1;
                                    return u().createElement(
                                        'div',
                                        { className: an, key: `row_${n}` },
                                        (0, bt.K)(a, (t) => {
                                            const l = m * n + t;
                                            return u().createElement(
                                                Jt,
                                                un(
                                                    {},
                                                    ((e, t) => {
                                                        const n = t.skills.length;
                                                        let a = '',
                                                            u = '',
                                                            r = Et.W.Learned,
                                                            o = !1;
                                                        if (e < n) {
                                                            const n = i.U2(t.skills, e);
                                                            n &&
                                                                ((a = n.name),
                                                                (u = n.icon),
                                                                (r = n.type),
                                                                (o = n.hasInstruction));
                                                        } else
                                                            (r = e < n + t.newSkillsAmount ? Et.W.New : Et.W.Possible),
                                                                (u = Qe.jw);
                                                        return { name: a, icon: u, type: r, hasInstruction: o };
                                                    })(l, e),
                                                    {
                                                        size: p,
                                                        marginValue: 0 === t ? 0 : _,
                                                        key: `skill_${l}`,
                                                        clipWidth: t === a - 1 ? 0 : g - E,
                                                        tankmanId: e.tankmanID,
                                                        blinkStyle: r,
                                                        isTooltipEnabled: o,
                                                        showNewSkillAnimation: s,
                                                        skillsEfficiency: v,
                                                    },
                                                ),
                                            );
                                        }),
                                        c &&
                                            u().createElement(Bt, {
                                                lastSkillLevel: e.possibleSkillsAmount > 0 ? -1 : e.lastSkillLevel,
                                                lastPossibleSkillLevel: e.lastPossibleSkillLevel,
                                                isLevelVisible: f,
                                                isAcceleratedTrainingVisible: t,
                                                skillSize: p,
                                                blinkStyle: r,
                                            }),
                                    );
                                }),
                            ),
                        );
                    },
                    on = 'TankmanInfo_base_69',
                    sn = 'TankmanInfo_base__disabled_36',
                    ln = 'TankmanInfo_tankmanTooltipHoverArea_9b',
                    cn = 'TankmanInfo_specialization_77',
                    dn = 'TankmanInfo_specialization__withManySkills_9a',
                    mn = 'TankmanInfo_skillsContainer_17',
                    _n = 'TankmanInfo_skillsContainer__withManySkills_00',
                    gn = (0, r.Pi)(({ slotIdx: e, tankman: t, layoutInfo: n, blinkStyle: a, isDisabled: r }) => {
                        const o = g().model,
                            s = (0, gt.GS)().mediaSize,
                            i = ((e, t, n, a) => {
                                const u = t.skillsEfficiency < Qe.yb,
                                    r = e.isCurrentLayoutQuickTraining || n;
                                let o,
                                    s = 220;
                                return (
                                    (r || n) && (s = a ? 146 : 190),
                                    u && (s -= 36),
                                    (o = u
                                        ? e.isCurrentLayoutHangar
                                            ? 12
                                            : e.isCurrentLayoutQuickTraining
                                              ? 10
                                              : 11
                                        : e.isCurrentLayoutQuickTraining || r
                                          ? 12
                                          : 16),
                                    [s, o, pt(t) > o]
                                );
                            })(n, t, o.computes.isChangeCrewButtonVisible(), s < gt.cJ.Small),
                            l = i[0],
                            c = i[1],
                            d = i[2],
                            m =
                                !n.isCurrentLayoutQuickTraining &&
                                -1 !== t.tankmanID &&
                                t.isLessMastered &&
                                t.skillsEfficiency < 100;
                        return u().createElement(
                            'div',
                            { className: p()(on, r && sn) },
                            u().createElement(
                                Xe.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ke.v$, tankmanID: t.tankmanID },
                                },
                                u().createElement('div', { className: ln }),
                            ),
                            u().createElement(
                                'div',
                                { className: p()(cn, d && dn) },
                                u().createElement(ut, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                }),
                            ),
                            u().createElement(
                                'div',
                                { className: p()(mn, d && _n) },
                                u().createElement(rn, {
                                    tankman: t,
                                    isAcceleratedTrainingVisible: m,
                                    rowWidth: l,
                                    maxBigSkillsInRow: c,
                                    blinkStyle: a,
                                    showNewSkillAnimation: n.isCurrentLayoutHangar,
                                }),
                            ),
                        );
                    }),
                    En = 'QuickTrainingTankmanSlotContent_base_8d',
                    pn = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    hn = 'QuickTrainingTankmanSlotContent_highlight_72',
                    bn = 'QuickTrainingTankmanSlotContent_icon_7c',
                    vn = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    fn = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    An = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Cn = { opacity: 0 },
                    Fn = [{ opacity: 1 }, { opacity: 0 }],
                    wn = (0, a.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: r,
                            layoutInfo: o,
                            isDisabled: s,
                        }) => {
                            const i = (0, a.useRef)(t.lastSkillLevelFull),
                                l = (0, a.useRef)(t.skills.length),
                                c = (0, oe.useSpring)(() => ({ from: vn })),
                                d = c[0],
                                m = c[1],
                                _ = (0, oe.useSpring)(() => ({ from: Cn })),
                                g = _[0],
                                E = _[1],
                                p = (0, a.useRef)(!1);
                            return (
                                (0, a.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? p.current ||
                                          (m.start({
                                              from: vn,
                                              to: fn,
                                              reverse: false,
                                              config: { duration: 300, easing: ie.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (t.skills.length > l.current || t.lastSkillLevelFull > i.current
                                                ? (m.start({
                                                      from: fn,
                                                      to: An,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }),
                                                  (i.current = t.lastSkillLevelFull),
                                                  (l.current = t.skills.length),
                                                  E.start({
                                                      from: Cn,
                                                      to: Fn,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((i.current = t.lastSkillLevelFull), (l.current = t.skills.length));
                                }, [m, E, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.length]),
                                u().createElement(
                                    'div',
                                    { className: En },
                                    u().createElement(oe.animated.div, { className: hn, style: g }),
                                    u().createElement(
                                        oe.animated.div,
                                        { style: r },
                                        u().createElement(Ye.G, {
                                            name: t.icon,
                                            size: Ye.U.c100x60Barracks,
                                            classMix: bn,
                                            isSkin: t.isInSkin,
                                        }),
                                    ),
                                    u().createElement(oe.animated.div, { className: pn, style: d }),
                                    u().createElement(gn, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: o,
                                        blinkStyle: n,
                                        isDisabled: s,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const n = e.tankman,
                                a = t.tankman;
                            return (
                                n.hasPossibleProgress === a.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const n = e.length;
                                    for (let r = 0; r < n; r++) {
                                        var a, u;
                                        if (
                                            (null == (a = i.U2(e, r)) ? void 0 : a.name) !==
                                            (null == (u = i.U2(t, r)) ? void 0 : u.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(n.skills, a.skills) &&
                                n.lastSkillLevelFull === a.lastSkillLevelFull &&
                                n.possibleSkillsAmount === a.possibleSkillsAmount &&
                                n.lastPossibleSkillLevel === a.lastPossibleSkillLevel &&
                                n.skillsEfficiency === a.skillsEfficiency &&
                                n.possibleSkillsEfficiency === a.possibleSkillsEfficiency
                            );
                        },
                    ),
                    Bn = 'TankmanSlotContent_base_00',
                    Dn = 'TankmanSlotContent_icon_ef',
                    yn = (0, a.memo)(({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a }) =>
                        u().createElement(
                            'div',
                            { className: Bn },
                            u().createElement(Ye.G, {
                                name: t.icon,
                                size: Ye.U.c100x60Barracks,
                                classMix: Dn,
                                isSkin: t.isInSkin,
                            }),
                            u().createElement(gn, { slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a }),
                        ),
                    ),
                    kn = (0, a.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: r,
                            vehicleType: o,
                            isDisabled: s,
                            isSelected: i,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                        }) =>
                            -1 === n.tankmanID
                                ? u().createElement(_t, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: o,
                                      isDisabled: s,
                                      isSelected: i,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                  })
                                : a.isCurrentLayoutQuickTraining
                                  ? u().createElement(wn, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: s,
                                    })
                                  : u().createElement(yn, { slotIdx: e, tankman: n, layoutInfo: a, isDisabled: s }),
                    ),
                    Sn = { transform: 'translateX(0rem)' },
                    In = { transform: 'translateX(41rem)' },
                    Tn = { opacity: 0 },
                    xn = { opacity: 1 },
                    Nn = (0, r.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: r,
                            isSelected: o,
                            isAnySlotSelected: s,
                            isDisabled: l,
                            blinkSlotStyle: d,
                            blinkTankmanStyle: m,
                            qtTankmanIconStyle: _,
                        }) => {
                            const E = g(),
                                h = E.model,
                                b = E.controls,
                                v = ((e, t) => {
                                    const n = (0, j.Jp)(c.D9),
                                        a = (0, H.f)(
                                            () => n({ action: c.eX.Click, parentScreen: e, item: t }),
                                            [e, t],
                                            c.tL,
                                        );
                                    return (e) => {
                                        e.button === W.RIGHT && a();
                                    };
                                })(h.computes.getUiLoggingParentScreen(), c.x3.SlotContextMenu),
                                f = b.onSlotClick,
                                A = b.onChangeCrewClick,
                                C = h.computes.isChangeCrewButtonVisible(),
                                F = h.computes.isTankmanMode(),
                                w = h.isCrewLocked.get(),
                                B = h.vehicleName.get(),
                                D = h.vehicleType.get(),
                                y = !l && n.isInteractive && (!r.isCurrentLayoutQuickTraining || s),
                                k = (0, a.useCallback)(() => {
                                    y && !F && ((0, re.G)(R.sounds.yes1()), f(e, n.tankmanID));
                                }, [e, n, f, F, y]),
                                S = (0, a.useCallback)(
                                    (t) => {
                                        t.stopPropagation(), w || ((0, re.G)(R.sounds.yes1()), A(e, n.tankmanID));
                                    },
                                    [e, n, A, w],
                                ),
                                I = (0, a.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return u().createElement(
                                Le,
                                {
                                    args: I,
                                    isEnabled: !l,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    onMouseDown: v,
                                },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        ve,
                                        {
                                            onClick: k,
                                            isSelected: o,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: r,
                                            isEnabledForMouse: y,
                                        },
                                        u().createElement(
                                            'div',
                                            { className: $e },
                                            n.hasWarning && u().createElement('div', { className: Ue }),
                                            o && u().createElement('div', { className: F ? qe : Ze }),
                                            u().createElement(
                                                fe,
                                                {
                                                    startState: Sn,
                                                    endState: In,
                                                    layoutInfo: r,
                                                    isPaused: !C,
                                                    className: p()(Ve, C && ze),
                                                    isTankmanMode: F,
                                                },
                                                u().createElement(kn, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: r,
                                                    isDisabled: l,
                                                    vehicleName: B,
                                                    vehicleType: D,
                                                    blinkSlotStyle: d,
                                                    blinkTankmanStyle: m,
                                                    qtTankmanIconStyle: _,
                                                    isSelected: o,
                                                }),
                                            ),
                                            C &&
                                                u().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    u().createElement(
                                                        fe,
                                                        {
                                                            startState: Tn,
                                                            endState: xn,
                                                            layoutInfo: r,
                                                            isPaused: !C,
                                                            className: Ge,
                                                            isTankmanMode: F,
                                                        },
                                                        u().createElement(je, {
                                                            isSelected: r.isCurrentLayoutMemberChange && o,
                                                            isLocked: w,
                                                            mainRole: i.U2(t, 0) || '',
                                                            isFemale: -1 !== n.tankmanID && n.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ln = 'SlotsList_base_5f';
                function Mn() {
                    return (
                        (Mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mn.apply(this, arguments)
                    );
                }
                const Rn = { transform: 'translateX(0rem)' },
                    On = { transform: 'translateX(15rem)' },
                    Pn = (0, r.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n }) => {
                        const r = g().model,
                            o = r.computes.isAnyEmptySlots(),
                            s = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: ie.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            i = s[0],
                            l = s[1];
                        (0, a.useEffect)(() => {
                            o ? l.resume() : l.pause();
                        }, [l, o]);
                        const c = (0, oe.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: ie.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            d = c[0],
                            m = c[1];
                        (0, a.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ? m.resume() : m.pause();
                        }, [m, e.isCurrentLayoutQuickTraining]);
                        const _ = (0, oe.useSpring)(() => ({
                                from: Rn,
                                to: On,
                                delay: 200,
                                config: { duration: 300, easing: ie.ei },
                                pause: !e.isCurrentLayoutQuickTraining,
                            }))[0],
                            E = (0, a.useCallback)(
                                (n) => t || (e.isCurrentLayoutQuickTraining && -1 === n),
                                [t, e.isCurrentLayoutQuickTraining],
                            );
                        return u().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: p()(Ln, n) },
                            r.computes
                                .getSlots()
                                .map((t, n) =>
                                    u().createElement(
                                        Nn,
                                        Mn({}, t, {
                                            layoutInfo: e,
                                            key: `slot_${n}_${t.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (r.computes.isSlotSelected(t.slotIdx) || r.computes.isTankmanMode()),
                                            isAnySlotSelected: r.computes.isAnySlotSelected(),
                                            isDisabled: E(t.tankman.tankmanID),
                                            blinkSlotStyle: d,
                                            blinkTankmanStyle: i,
                                            qtTankmanIconStyle: _,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Hn = (0, r.Pi)(() => {
                        const e = g().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo();
                        return u().createElement(
                            'div',
                            { className: ne },
                            e.computes.isButtonBarVisible() &&
                                u().createElement(
                                    'div',
                                    { className: ae },
                                    u().createElement(te, { isWidgetDisabled: t }),
                                ),
                            u().createElement(Pn, { layoutInfo: a, isWidgetDisabled: t, className: ue }),
                            n && u().createElement(Se, { layoutInfo: a, isDisabled: t }),
                        );
                    }),
                    Wn = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    jn = (0, a.memo)(() => u().createElement(_, { options: Wn }, u().createElement(Hn, null)));
            },
            5801: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => Te });
                var a = n(6179),
                    u = n.n(a),
                    r = n(6483),
                    o = n.n(r),
                    s = n(2106),
                    i = n(6373);
                let l;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Barracks = 'barracks'),
                        (e.MemberChange = 'memberChange'),
                        (e.TankChange = 'tankChange'),
                        (e.PersonalData = 'personalData');
                })(l || (l = {}));
                var c = n(3403),
                    d = n(3415),
                    m = n(9480),
                    _ = n(9631);
                const g = 'FilterTitle_base_a7',
                    E = 'FilterTitle_label_05',
                    p = 'FilterTitle_discount_42',
                    h = 'FilterTitle_discountIcon_30',
                    b = ({ label: e, hasDiscount: t, className: n }) =>
                        u().createElement(
                            'div',
                            { className: o()(g, n) },
                            u().createElement('div', { className: E }, e),
                            t && u().createElement('div', { className: p }, u().createElement('div', { className: h })),
                        );
                let v;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Nation = 'nation'),
                        (e.Location = 'location'),
                        (e.TankmanRole = 'tankmanRole'),
                        (e.TankmanKind = 'tankmanKind'),
                        (e.VehicleGrade = 'vehicleGrade'),
                        (e.VehicleTier = 'vehicleTier'),
                        (e.VehicleType = 'vehicleType'),
                        (e.PersonalDataType = 'personalDataType'),
                        (e.VehicleCD = 'vehicle');
                })(v || (v = {}));
                var f = n(3649);
                const A = 'ToggleIcon_base_59',
                    C = 'ToggleIcon_base__small_3e',
                    F = 'ToggleIcon_icon_e7',
                    w = u().memo(function ({ icon: e, isSmall: t = !1, classNames: n }) {
                        return u().createElement(
                            'div',
                            { className: o()(A, t && C) },
                            u().createElement('div', {
                                className: o()(F, null == n ? void 0 : n.icon),
                                style: { backgroundImage: `url(${e})` },
                            }),
                        );
                    });
                var B = n(9690);
                const D = 'VehicleTier_base_9c',
                    y = 'VehicleTier_base__small_fc',
                    k = ({ level: e, isSmall: t = !1 }) =>
                        u().createElement('div', { className: o()(D, t && y) }, (0, B.HG)(e)),
                    S = {
                        icon__vehicleType: 'ToggleButtonIcon_icon__vehicleType_83',
                        icon__nation: 'ToggleButtonIcon_icon__nation_c1',
                        icon__vehicleGradePrimary: 'ToggleButtonIcon_icon__vehicleGradePrimary_d6',
                        icon__tankmanRole: 'ToggleButtonIcon_icon__tankmanRole_4b',
                        icon__selected: 'ToggleButtonIcon_icon__selected_ca',
                        icon__tankmanKind: 'ToggleButtonIcon_icon__tankmanKind_5e',
                        icon__vehicleGradeElite: 'ToggleButtonIcon_icon__vehicleGradeElite_26',
                        icon__locationRecruit: 'ToggleButtonIcon_icon__locationRecruit_3b',
                        icon__locationTankman: 'ToggleButtonIcon_icon__locationTankman_f6',
                        icon__personalDataType: 'ToggleButtonIcon_icon__personalDataType_a8',
                        icon__tankmanKindDismissed: 'ToggleButtonIcon_icon__tankmanKindDismissed_86',
                        icon__vehicleGradePremium: 'ToggleButtonIcon_icon__vehicleGradePremium_11',
                    },
                    I = ({ id: e, icon: t, type: n, isSmall: a = !0, isSelected: r = !1 }) =>
                        n === v.VehicleTier
                            ? u().createElement(k, { isSmall: a, level: Number(e) })
                            : u().createElement(w, {
                                  icon: t,
                                  isSmall: a,
                                  classNames: {
                                      icon: o()(S[`icon__${n}`], S[`icon__${n}${(0, f.e)(e)}`], r && S.icon__selected),
                                  },
                              }),
                    T = {
                        base: 'FilterToggleGroup_base_69',
                        title: 'FilterToggleGroup_title_65',
                        content: 'FilterToggleGroup_content_80',
                        toggle: 'FilterToggleGroup_toggle_d4',
                        base__inPopup: 'FilterToggleGroup_base__inPopup_11',
                    };
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                let N;
                !(function (e) {
                    (e.Default = 'default'), (e.InPopup = 'inPopup');
                })(N || (N = {}));
                const L = ({ header: e, body: t, contentId: n, targetId: a }) =>
                        n
                            ? { contentId: n, targetId: a }
                            : t || e
                              ? { header: null != e ? e : void 0, body: null != t ? t : void 0 }
                              : void 0,
                    M = ({
                        id: e,
                        type: t,
                        label: n,
                        hasDiscount: a,
                        filters: r,
                        onClick: s,
                        className: i,
                        toggleProps: l,
                        theme: c = N.Default,
                    }) => {
                        const g = c === N.InPopup;
                        return u().createElement(
                            'div',
                            { className: o()(T.base, T[`base__${c}`], i) },
                            g && u().createElement(b, { className: T.title, label: n, hasDiscount: a }),
                            u().createElement(
                                'div',
                                { className: T.content },
                                m.UI(r, ({ id: n, isSelected: a, tooltip: r, icon: i, counter: c }) =>
                                    u().createElement(
                                        d.l,
                                        { key: n, tooltipArgs: L(r), className: T.toggle },
                                        u().createElement(
                                            _.C,
                                            x({}, l, {
                                                className: o()(T.toggle, null == l ? void 0 : l.className),
                                                isActive: a,
                                                onClick: () => (null == s ? void 0 : s(e, n)),
                                                counter: c,
                                            }),
                                            u().createElement(I, {
                                                id: n,
                                                icon: i,
                                                type: t,
                                                isSmall: g,
                                                isSelected: a,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    };
                var O = n(9197);
                const P = (0, n(3215).q)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'isSearchEnabled',
                                    'searchString',
                                    'searchPlaceholder',
                                    'searchTooltipHeader',
                                    'searchTooltipBody',
                                    'isPopoverEnabled',
                                    'isPopoverHighlighted',
                                    'hasAppliedFilters',
                                    'panelType',
                                    'title',
                                    'popoverTooltipHeader',
                                    'popoverTooltipBody',
                                    'hasDiscountAlert',
                                ]),
                                {
                                    amountInfo: e.object('amountInfo'),
                                    filter: e.object('filter'),
                                    filters: e.array('filter.filters'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            search: e.createCallback((e) => ({ value: e }), 'onSearch'),
                            updateFilter: e.createCallback((e, t) => ({ groupID: e, toggleID: t }), 'onUpdateFilter'),
                            resetFilter: e.createCallbackNoArgs('onResetFilter'),
                        }),
                    ),
                    H = P[0],
                    W = P[1];
                var j = n(3457),
                    $ = n(3616),
                    G = n(1037),
                    V = n(9367);
                const z = 'PopupButton_base_7c',
                    U = 'PopupButton_popupButtonLabel_ed',
                    Z = 'PopupButton_buttonIconWrapper_d7',
                    q = 'PopupButton_buttonIcon_e0',
                    Y = 'PopupButton_buttonIcon__isHighlighted_84',
                    X = 'PopupButton_discountAlert_c8',
                    K = ({ isHighlighted: e, hasDiscountAlert: t, popoverDirection: n = G.IC.Bottom }) =>
                        u().createElement(
                            'div',
                            { className: z },
                            u().createElement('div', { className: U }, R.strings.crew.filter.popup.button.title()),
                            u().createElement(
                                $.Z,
                                {
                                    contentId: R.views.lobby.crew.popovers.FilterPopoverView('resId'),
                                    targetId: R.views.lobby.crew.widgets.FilterPanelWidget('resId'),
                                    direction: n,
                                },
                                u().createElement(
                                    'div',
                                    { id: 'popup_btn', className: Z },
                                    u().createElement(
                                        _.C,
                                        { type: j.L$.ghost, size: j.qE.small, isActive: e, hasIndicator: !1 },
                                        u().createElement('div', { className: o()(q, e && Y) }),
                                    ),
                                    t && u().createElement(V.Q, { className: X }),
                                ),
                            ),
                        );
                var Q = n(8018);
                const J = 'ResetButton_base_58',
                    ee = 'ResetButton_button_a5',
                    te = 'ResetButton_icon_4a',
                    ne = ({ onClick: e }) =>
                        u().createElement(
                            'div',
                            { className: J },
                            u().createElement(
                                i.i,
                                Q.Xd,
                                u().createElement(
                                    j.u5,
                                    { mixClass: ee, onClick: e, type: j.L$.ghost, size: j.qE.small },
                                    u().createElement('div', { className: te }),
                                ),
                            ),
                        ),
                    ae = 'default',
                    ue = 'search',
                    re = 'email',
                    oe = 'password',
                    se = 'normal',
                    ie = 'disabled',
                    le = 'alert',
                    ce = 'error',
                    de = 'medium',
                    me = {
                        [ae]: '',
                        [re]: R.strings.common.input.placeholder.email(),
                        [ue]: R.strings.common.input.placeholder.search(),
                        [oe]: R.strings.common.input.placeholder.password(),
                    },
                    _e = { [ae]: 'text', [re]: 'text', [ue]: 'text', [oe]: 'password' },
                    ge = { [ae]: '', [re]: 'Invalid email', [ue]: '', [oe]: '' },
                    Ee = R.images.gui.maps.icons.components.input;
                function pe(e, t) {
                    return (
                        t !== re ||
                        (function (e) {
                            const t = e.match(
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            );
                            return Boolean(t);
                        })(e)
                    );
                }
                var he = n(7727);
                const be = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    ve = u().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = ae,
                            size: r = de,
                            variant: s = se,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: m,
                            iconSource: _,
                            classMix: g,
                            onMouseEnter: E,
                            onMouseLeave: p,
                            onMouseDown: h,
                            onMouseUp: b,
                            onClick: v,
                            onChange: f,
                            onClear: A,
                            onFocus: C,
                            onBlur: F,
                        }) => {
                            const w = (0, a.useState)(!1),
                                B = w[0],
                                D = w[1],
                                y = (0, a.useRef)(null),
                                k = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = s !== ie,
                                I = (0, a.useCallback)(
                                    (e) => {
                                        S && (D(!0), C && C(e));
                                    },
                                    [S, C],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (D(!1), F && F(e));
                                    },
                                    [S, F],
                                );
                            (0, a.useEffect)(() => {
                                S && B && d && y.current && y.current.select();
                            }, [d, B, S]);
                            const x = (0, a.useCallback)(
                                    (e) => {
                                        S && f && f(e.target.value);
                                    },
                                    [S, f],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseOver = !0), E && E(e));
                                    },
                                    [S, E],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            p && p(e));
                                    },
                                    [S, p],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !0), h && h(e));
                                    },
                                    [S, h],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !1), b && b(e));
                                    },
                                    [S, b],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        if (S && y.current) {
                                            (!B || (B && e.target !== y.current)) && y.current.focus(), v && v(e);
                                        }
                                    },
                                    [B, S, v],
                                ),
                                P = i || me[n],
                                H = Boolean(_),
                                W = o()(
                                    be.base,
                                    be[`base__${r}`],
                                    l && be[`base__${s}`],
                                    B && be.base__focused,
                                    H && be.base__withIcon,
                                    g,
                                ),
                                j = (0, a.useMemo)(() => (_ ? { backgroundImage: `url(${_})` } : null), [_]),
                                $ = o()(be.input, be[`input__${n}`]),
                                G = o()(be.icon, be[`icon__${n}`]),
                                V = o()(be.placeholder, be[`placeholder__${n}`]);
                            return u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: W,
                                    onMouseEnter: N,
                                    onMouseDown: M,
                                    onMouseUp: R,
                                    onMouseLeave: L,
                                    onClick: O,
                                },
                                !S && u().createElement('div', { className: be.disabled }),
                                j && u().createElement('div', { style: j, className: G }),
                                u().createElement('input', {
                                    ref: y,
                                    className: $,
                                    type: _e[n],
                                    value: t,
                                    onChange: x,
                                    disabled: !S,
                                    onFocus: I,
                                    onBlur: T,
                                    maxLength: m,
                                }),
                                P && !t && !B && u().createElement('div', { className: V }, P),
                                c &&
                                    u().createElement('div', {
                                        className: be.clear,
                                        onClick: (e) => {
                                            he.$.playClick(), A && A(e);
                                        },
                                        onMouseEnter: he.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    fe = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Ae = ({ variant: e, show: t = !0, helperText: n, helperIcon: r, classMix: s }) => {
                        const i = (0, a.useMemo)(() => {
                                const t =
                                    r ||
                                    (function (e) {
                                        return e === le ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [r, e]),
                            l = o()(fe.base, t && fe.base__shown),
                            c = o()(fe.message, fe[`message__${e}`], s);
                        return u().createElement(
                            'div',
                            { className: l },
                            i && u().createElement('div', { className: fe.icon, style: i }),
                            u().createElement('div', { className: c }, n),
                        );
                    },
                    Ce = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Fe = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
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
                const Be = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    De = (e) => {
                        let t = e.componentId,
                            n = e.type,
                            r = void 0 === n ? ae : n,
                            s = e.variant,
                            i = void 0 === s ? se : s,
                            l = e.size,
                            c = void 0 === l ? de : l,
                            m = e.value,
                            _ = e.tooltipArgs,
                            g = e.helperText,
                            E = void 0 === g ? '' : g,
                            p = e.isValidated,
                            h = void 0 === p || p,
                            b = e.showHelper,
                            v = void 0 === b || b,
                            f = e.error,
                            A = e.options,
                            C = e.onFocus,
                            F = e.onMouseEnter,
                            w = e.onMouseLeave,
                            B = e.onMouseUp,
                            D = e.onMouseDown,
                            y = e.onChange,
                            k = e.classMix,
                            S = e.controlClassMix,
                            I = e.helperClassMix,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    u = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                                return u;
                            })(e, Fe);
                        const x = (0, a.useState)(m),
                            N = x[0],
                            L = x[1],
                            M = (0, a.useState)(h),
                            R = M[0],
                            O = M[1],
                            P = (0, a.useMemo)(() => Object.assign({}, Be, A), [A]),
                            H = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: m, type: r }),
                            W = (0, a.useCallback)((e) => {
                                e !== H.current.value &&
                                    ((H.current.value = e), (H.current.isChangeHandled = !1), L(e));
                            }, []),
                            j = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    P.performChangeValidation &&
                                        (t = P.changesValidator ? P.changesValidator(e) : pe(e, H.current.type)),
                                        y && y(e, t);
                                },
                                [y, P],
                            ),
                            $ = (0, a.useCallback)(() => {
                                H.current.debounceTimeout &&
                                    (window.clearTimeout(H.current.debounceTimeout), (H.current.debounceTimeout = 0));
                            }, []),
                            G = (0, a.useCallback)(() => W(''), [W]);
                        (0, a.useEffect)(() => () => $(), [$]);
                        const V = (0, a.useCallback)(
                            (e) => {
                                $(),
                                    P.debounceTime
                                        ? (H.current.debounceTimeout = window.setTimeout(() => {
                                              j(e);
                                          }, P.debounceTime))
                                        : j(e);
                            },
                            [j, $, P.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            H.current.isChangeHandled ||
                                H.current.value !== N ||
                                (V(H.current.value), (H.current.isChangeHandled = !0));
                        }, [N, V]),
                            (0, a.useEffect)(() => {
                                H.current.isChangeHandled && m !== H.current.value && ((H.current.value = m), L(m)),
                                    (H.current.type = r);
                            }, [m, r]),
                            (0, a.useEffect)(() => {
                                O(h);
                            }, [h, i]);
                        const z = (0, a.useCallback)((e) => F && F(e), [F]),
                            U = (0, a.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && R && O(!1), C && C(e);
                                },
                                [R, C, P.disableHighlightOnFocus],
                            ),
                            Z = (0, a.useCallback)((e) => B && B(e), [B]),
                            q = (0, a.useCallback)((e) => D && D(e), [D]),
                            Y = (0, a.useCallback)((e) => w && w(e), [w]),
                            X = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, t) {
                                              return e === ue ? Ee.$dyn(`search_${t}`) : '';
                                          })(r, c)
                                        : '',
                                [r, c, P.withTypeIcon],
                            ),
                            K = E || ge[r],
                            Q = Boolean(N),
                            J = f ? ce : i,
                            ee = Boolean(f) || R,
                            te = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && r === ue),
                                [r, Q, P],
                            ),
                            ne = o()(Ce.base, Ce[`base__${c}`], Ce[`base__${i}`], k);
                        return u().createElement(
                            'div',
                            { id: t, className: ne, onMouseEnter: z, onMouseDown: q, onMouseUp: Z, onMouseLeave: Y },
                            u().createElement(
                                d.l,
                                { tooltipArgs: _ },
                                u().createElement(
                                    ve,
                                    we(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: X,
                                            size: c,
                                            type: r,
                                            variant: J,
                                            value: N,
                                            withClear: te,
                                            highlighted: ee,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: U,
                                            onChange: W,
                                            onClear: G,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            K &&
                                u().createElement(
                                    'div',
                                    { className: Ce.helper },
                                    u().createElement(Ae, {
                                        variant: J,
                                        show: v && (P.isPermanentHelper || ee),
                                        helperText: f || K,
                                        helperIcon: P.helperIconSource,
                                        classMix: I,
                                    }),
                                ),
                        );
                    },
                    ye = ({ value: e, placeholder: t, tooltipHeader: n, onChange: a, className: r, tooltipBody: o }) =>
                        u().createElement(
                            i.i,
                            { header: null != n ? n : void 0, body: o, isEnabled: Boolean(n || o) },
                            u().createElement(De, {
                                type: ue,
                                placeholder: null != t ? t : void 0,
                                value: e,
                                classMix: r,
                                onChange: a,
                            }),
                        ),
                    ke = {
                        base: 'FilterPanelWidgetApp_base_1c',
                        titleWrapper: 'FilterPanelWidgetApp_titleWrapper_1b',
                        title: 'FilterPanelWidgetApp_title_ad',
                        filters: 'FilterPanelWidgetApp_filters_0d',
                        counterGlow: 'FilterPanelWidgetApp_counterGlow_df',
                        separator: 'FilterPanelWidgetApp_separator_9e',
                        filterLabel: 'FilterPanelWidgetApp_filterLabel_5b',
                        base__tankChange: 'FilterPanelWidgetApp_base__tankChange_ff',
                        base__memberChange: 'FilterPanelWidgetApp_base__memberChange_18',
                        popupButtonWrapper: 'FilterPanelWidgetApp_popupButtonWrapper_4c',
                        base__personalData: 'FilterPanelWidgetApp_base__personalData_1d',
                        search: 'FilterPanelWidgetApp_search_0e',
                    },
                    Se = (0, c.Pi)(({ popoverDirection: e }) => {
                        const t = W(),
                            n = t.model,
                            a = t.controls,
                            r = n.amountInfo.get(),
                            c = r.from,
                            d = r.to,
                            m = n.panelType.get(),
                            _ = n.filter.get(),
                            g = n.hasAppliedFilters.get(),
                            E = g || (0 === c && 0 === d),
                            p = n.popoverTooltipHeader.get(),
                            h = n.popoverTooltipBody.get();
                        return u().createElement(
                            'div',
                            { className: o()(ke.base, ke[`base__${m}`]) },
                            u().createElement(
                                'div',
                                { className: ke.titleWrapper },
                                u().createElement(O.C, {
                                    title: n.title.get(),
                                    isGlowVisible: E,
                                    from: c,
                                    to: d,
                                    className: ke.title,
                                    classNames: { counterGlow: ke.counterGlow },
                                }),
                                g && u().createElement(ne, { onClick: a.resetFilter }),
                            ),
                            u().createElement(
                                'div',
                                { className: ke.filters },
                                n.isSearchEnabled.get() &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement(ye, {
                                            value: n.searchString.get(),
                                            onChange: a.search,
                                            className: ke.search,
                                            placeholder: n.searchPlaceholder.get(),
                                            tooltipHeader: n.searchTooltipHeader.get(),
                                            tooltipBody: n.searchTooltipBody.get(),
                                        }),
                                        m === l.Barracks && u().createElement('div', { className: ke.separator }),
                                    ),
                                _.label && u().createElement('div', { className: ke.filterLabel }, _.label),
                                u().createElement(M, {
                                    id: _.id,
                                    label: _.label,
                                    type: _.type,
                                    hasDiscount: _.hasDiscount,
                                    filters: n.filters.get(),
                                    toggleProps: { type: s.L.ghost },
                                    onClick: a.updateFilter,
                                }),
                                n.isPopoverEnabled.get() &&
                                    u().createElement(
                                        i.i,
                                        {
                                            header: null != p ? p : void 0,
                                            body: null != h ? h : void 0,
                                            isEnabled: Boolean(p || h),
                                        },
                                        u().createElement(
                                            'div',
                                            { className: ke.popupButtonWrapper },
                                            u().createElement(K, {
                                                isHighlighted: n.isPopoverHighlighted.get(),
                                                hasDiscountAlert: n.hasDiscountAlert.get(),
                                                popoverDirection: e,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ie = { rootId: R.views.lobby.crew.widgets.FilterPanelWidget('resId') },
                    Te = u().memo(function ({ popoverDirection: e }) {
                        return u().createElement(H, { options: Ie }, u().createElement(Se, { popoverDirection: e }));
                    });
            },
            8271: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { W: () => a }),
                    (function (e) {
                        (e.New = 'new'),
                            (e.Learned = 'learned'),
                            (e.Learning = 'learning'),
                            (e.Irrelevant = 'irrelevant'),
                            (e.Possible = 'possible');
                    })(a || (a = {}));
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => r, HZ: () => a, M4: () => o, rs: () => s, v$: () => u });
                const a = 'crewPerkGf',
                    u = 'tankman',
                    r = 'skillsEfficiency',
                    o = 'crewSkillUntrained',
                    s = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { jw: () => r, sU: () => a, y$: () => o, yb: () => u });
                const a = -1,
                    u = 1,
                    r = 'new_skill',
                    o = -1;
                let s;
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
                })(s || (s = {}));
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
            8055: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
            },
            4769: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'PopoverDecorator_base_ed',
                    decorator: 'PopoverDecorator_decorator_d3',
                    arrow: 'PopoverDecorator_arrow_8a',
                    arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                    arrow__top: 'PopoverDecorator_arrow__top_6e',
                    arrow__left: 'PopoverDecorator_arrow__left_7a',
                    arrow__right: 'PopoverDecorator_arrow__right_b6',
                    closeBtn: 'PopoverDecorator_closeBtn_32',
                    content: 'PopoverDecorator_content_f0',
                };
            },
            130: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'EfficiencyIndicator_base_34',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'SkillIcon_base_43',
                    base__small: 'SkillIcon_base__small_d0',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
            },
            3938: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
                };
            },
            9426: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TankmanSkill_base_84',
                    base__big: 'TankmanSkill_base__big_a0',
                    background: 'TankmanSkill_background_e5',
                    background__grey: 'TankmanSkill_background__grey_49',
                    background__lightYellow: 'TankmanSkill_background__lightYellow_9f',
                    background__yellow: 'TankmanSkill_background__yellow_e2',
                    background__red: 'TankmanSkill_background__red_ca',
                    container: 'TankmanSkill_container_84',
                    disabledIcon: 'TankmanSkill_disabledIcon_25',
                    disabled: 'TankmanSkill_disabled_ba',
                };
            },
            4723: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'ToggleButton_base_09',
                    overlay: 'ToggleButton_overlay_76',
                    base__active: 'ToggleButton_base__active_05',
                    button: 'ToggleButton_button_14',
                    indicator: 'ToggleButton_indicator_c2',
                    counter: 'ToggleButton_counter_86',
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
        (__webpack_require__.j = 587),
        (() => {
            var e = { 587: 0, 3: 0, 595: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [56], () => __webpack_require__(5565));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
