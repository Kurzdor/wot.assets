(() => {
    var __webpack_modules__ = {
            2372: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => s });
                var a = u(6179),
                    r = u.n(a),
                    n = u(9916);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const t = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var a = u(6483),
                    r = u.n(a),
                    n = u(3649),
                    s = u(6179),
                    o = u.n(s),
                    i = u(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: u,
                    alignment: a = n.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, n.WU)(t, e) : t;
                    return o().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: r()(i.Z.base, u), key: `${t}-${l}` },
                                (0, n.Uw)(t, a, e).map((e, t) =>
                                    o().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => a.z });
                var a = u(280);
                u(8082);
            },
            8082: (e, t, u) => {
                'use strict';
                u(3649);
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => d });
                var a = u(3138),
                    r = u(6179),
                    n = u(1043),
                    s = u(5262);
                const o = a.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, n.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var a = u(3138),
                    r = u(6536),
                    n = u(6179),
                    s = u.n(n),
                    o = u(3495),
                    i = u(1043),
                    l = u(5262);
                const c = ({ children: e }) => {
                    const t = (0, n.useContext)(o.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        d = u[1],
                        _ = (0, n.useCallback)((e, t) => {
                            const u = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: r }, (0, l.T)(u, r, i.j)));
                        }, []),
                        m = (0, n.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [_, m],
                        );
                    const E = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(o.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    r = u(7382),
                    n = u(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, s);
                    const o = (0, a.useContext)(n.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        E = o.largeWidth,
                        g = o.mediumWidth,
                        p = o.smallWidth,
                        b = o.extraSmallWidth,
                        h = o.extraLargeHeight,
                        A = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        f = o.extraSmallHeight,
                        D = { extraLarge: h, large: A, medium: v, small: C, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && _) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, r.H)(t, u, D);
                        if (u.largeWidth && E) return (0, r.H)(t, u, D);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, D);
                        if (u.smallWidth && p) return (0, r.H)(t, u, D);
                        if (u.extraSmallWidth && b) return (0, r.H)(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && A) return t;
                            if (u.mediumHeight && v) return t;
                            if (u.smallHeight && C) return t;
                            if (u.extraSmallHeight && f) return t;
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
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => a });
                const a = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                u.d(t, { YN: () => r.Y, ZN: () => a.Z });
                u(6010);
                var a = u(1039),
                    r = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var a;
                function r(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === u.extraLarge.weight,
                        large: n === u.large.weight,
                        medium: n === u.medium.weight,
                        small: n === u.small.weight,
                        extraSmall: n === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => r, u: () => a }),
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
            1975: (e, t, u) => {
                'use strict';
                u.d(t, { $u: () => d.$, ko: () => g, uH: () => m, uu: () => E });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    s = u.n(n),
                    o = u(2468),
                    i = u(7442),
                    l = u(2407),
                    c = u(156),
                    d = u(7736),
                    _ = u(1635);
                u(6823);
                const m = c.Gh,
                    E = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    g = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: u = d.$.Default,
                            animationSettings: a = E,
                            disabled: n = !1,
                            withoutBackground: g = !1,
                            value: p,
                            deltaFrom: b,
                            lineRef: h,
                            onChangeAnimationState: A,
                            onEndAnimation: v,
                            onComplete: C,
                        }) => {
                            const f = (0, _.S)(p, e, b);
                            return s().createElement(
                                'div',
                                { className: r()(o.Z.base, o.Z[`base__${u}`]), style: (0, c.VQ)(t) },
                                !g && s().createElement(i.J, { size: u }),
                                s().createElement(l.r, {
                                    size: u,
                                    lineRef: h,
                                    disabled: n,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: v,
                                    onChangeAnimationState: A,
                                    onComplete: C,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    o = u(7736),
                    i = u(2468);
                const l = ({ size: e = o.$.Default }) => {
                    const t = s()(i.Z.background, i.Z[`background__${e}`]);
                    return r().createElement('div', { className: t });
                };
            },
            8150: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => i });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    o = u(8804);
                const i = ({ size: e }) => {
                    const t = s()(o.Z.base, o.Z[`base__${e}`]);
                    return r().createElement('div', { className: t });
                };
            },
            2407: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(5680),
                    s = u(6736),
                    o = u(2386);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: u,
                        disabled: a,
                        deltaFrom: l,
                        animationSettings: c,
                        onEndAnimation: d,
                        onChangeAnimationState: _,
                        onComplete: m,
                    }) => {
                        if (l === t)
                            return r().createElement(n.M, {
                                key: `${l}-${t}`,
                                size: e,
                                value: t,
                                lineRef: u,
                                disabled: a,
                                onComplete: m,
                            });
                        const E = {
                            from: l,
                            to: t,
                            size: e,
                            lineRef: u,
                            disabled: a,
                            animationSettings: c,
                            onComplete: m,
                            onEndAnimation: d,
                            onChangeAnimationState: _,
                        };
                        return c.withStack
                            ? r().createElement(o.F, E)
                            : r().createElement(s.H, i({ key: `${l}-${t}` }, E));
                    },
                );
            },
            1848: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    o = u(8150),
                    i = u(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: l }) => {
                        const c = s()(
                                i.Z.base,
                                i.Z[`base__${e}`],
                                u && i.Z.base__disabled,
                                n && i.Z.base__finished,
                                l && i.Z.base__withoutBounce,
                            ),
                            d = !u && !n;
                        return r().createElement(
                            'div',
                            { className: c, style: a, ref: t },
                            r().createElement('div', { className: i.Z.pattern }),
                            r().createElement('div', { className: i.Z.gradient }),
                            d && r().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => E });
                var a = u(6483),
                    r = u.n(a),
                    n = u(122),
                    s = u(6179),
                    o = u.n(s),
                    i = u(8150),
                    l = u(6823),
                    c = u(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    E = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: E,
                            to: g,
                            onEndAnimation: p,
                            onChangeAnimationState: b,
                            className: h,
                        }) => {
                            const A = g < a,
                                v = (0, s.useState)(l.S.Idle),
                                C = v[0],
                                f = v[1],
                                D = C === l.S.End,
                                F = C === l.S.Idle,
                                B = C === l.S.Grow,
                                w = C === l.S.Shrink,
                                S = (0, s.useCallback)(
                                    (e) => {
                                        f(e), b && b(e);
                                    },
                                    [b],
                                ),
                                P = (0, s.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            S(e);
                                        }, t),
                                    [S],
                                );
                            (0, s.useEffect)(() => {
                                if (!u)
                                    return F
                                        ? P(l.S.Grow, t)
                                        : B
                                          ? P(l.S.Shrink, e)
                                          : w
                                            ? P(l.S.End, e)
                                            : void (D && p && p());
                            }, [P, u, D, B, F, w, p, t, e]);
                            const y = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(A)), [A, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(A)), [A, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _(A, a), m(e)), [a, A, e]),
                                L = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - a)}%` }, _(A, a), m(e)),
                                    [a, A, g, e],
                                );
                            if (D) return null;
                            const N = r()(c.Z.base, h, A && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: F ? R : L, className: N },
                                o().createElement(
                                    'div',
                                    { style: w ? k : y, className: c.Z.glow },
                                    o().createElement(i.$, { size: E }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, u) => {
                'use strict';
                u.d(t, { x: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(122),
                    s = u(6823),
                    o = u(8150),
                    i = u(9919);
                const l = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: u,
                        from: l,
                        size: c,
                        to: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = d < l,
                            g = (0, a.useState)(s.V.Idle),
                            p = g[0],
                            b = g[1],
                            h = p === s.V.In,
                            A = p === s.V.End,
                            v = p === s.V.Idle,
                            C = (0, a.useCallback)(
                                (e) => {
                                    b(e), m && m(e);
                                },
                                [m],
                            );
                        (0, a.useEffect)(() => {
                            if (v && !u) {
                                const e = t;
                                return (0, n.F)(() => {
                                    C(s.V.In);
                                }, e);
                            }
                        }, [C, u, v, t]),
                            (0, a.useEffect)(() => {
                                if (h) {
                                    const u = e + t;
                                    return (0, n.F)(() => {
                                        _ && _(), C(s.V.End);
                                    }, u);
                                }
                            }, [C, h, _, t, e]);
                        const f = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            F = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${E ? d : l}%` }),
                                [l, E, d],
                            );
                        return A
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: F },
                                  r().createElement(
                                      'div',
                                      { style: v ? f : D, className: i.Z.delta },
                                      r().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => i });
                var a = u(6179),
                    r = u.n(a),
                    n = u(2434),
                    s = u(1848),
                    o = u(6823);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: i,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const E = e < u,
                            g = (0, a.useState)(!1),
                            p = g[0],
                            b = g[1],
                            h = (0, a.useCallback)(
                                (e) => {
                                    e === o.S.Shrink && b(!0), m && m(e);
                                },
                                [m],
                            ),
                            A = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            v = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(s.t, {
                                size: t,
                                lineRef: i,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: E && 0 === e,
                                baseStyles: p ? v : A,
                            }),
                            u >= 0 &&
                                r().createElement(n.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: h,
                                    freezed: d.freezed,
                                    onEndAnimation: _,
                                    from: u,
                                    size: t,
                                    to: e,
                                    className: d.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, t, u) => {
                'use strict';
                u.d(t, { D: () => o });
                var a = u(6179),
                    r = u.n(a),
                    n = u(5913),
                    s = u(1848);
                const o = (0, a.memo)(
                    ({
                        to: e,
                        size: t,
                        from: u,
                        lineRef: o,
                        disabled: i,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: _,
                    }) => {
                        const m = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(s.t, { size: t, lineRef: o, disabled: i, isComplete: l, baseStyles: m }),
                            u >= 0 &&
                                r().createElement(n.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: u,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: d,
                                    onEndAnimation: _,
                                }),
                        );
                    },
                );
            },
            6736: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => c });
                var a = u(6179),
                    r = u.n(a),
                    n = u(7736),
                    s = u(828),
                    o = u(538);
                const i = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let t = e.onComplete,
                        u = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, i);
                    const d = (0, a.useState)(!1),
                        _ = d[0],
                        m = d[1],
                        E = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            e !== _ && m(e), e && t && t(), u && u();
                        }, [_, t, u, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return r().createElement(s.D, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        case n.r.Growing:
                            return r().createElement(o.F, l({}, c, { onEndAnimation: E, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, u) => {
                'use strict';
                let a, r;
                u.d(t, { S: () => a, V: () => r }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(r || (r = {}));
            },
            2386: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => i });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6736);
                const s = ['onEndAnimation'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, s);
                    const i = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        c = 'number' == typeof i.current.from ? i.current.from : u.from;
                    return (
                        (i.current.from = c),
                        r().createElement(n.H, o({}, u, { onEndAnimation: l, key: `${c}-${u.to}`, from: c }))
                    );
                });
            },
            5680: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => s });
                var a = u(6179),
                    r = u.n(a),
                    n = u(1848);
                const s = ({ size: e, value: t, lineRef: u, disabled: s, onComplete: o }) => {
                    const i = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, a.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        r().createElement(n.t, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: u })
                    );
                };
            },
            156: (e, t, u) => {
                'use strict';
                u.d(t, { Gh: () => r, VQ: () => a, fV: () => n });
                const a = (e) => ({
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
                    r = {
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
                    n = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#ссс', bgColorDisabled: 'transparent', bgColorFinished: '#ссс' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_light_grey',
                        },
                        glow: 'R.images.gui.maps.icons.battlePass.progression.progress_glow_white',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#fff',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    };
            },
            7736: (e, t, u) => {
                'use strict';
                let a, r;
                u.d(t, { $: () => a, r: () => r }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(r || (r = {}));
            },
            1635: (e, t, u) => {
                'use strict';
                u.d(t, { S: () => s });
                var a = u(6179),
                    r = u(7515);
                const n = (e, t, u) => {
                        if ('number' == typeof u) {
                            return ((0, r.u)(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    s = (e, t, u) =>
                        (0, a.useMemo)(() => {
                            const a = ((0, r.u)(0, t, e) / t) * 100;
                            return { value: a, deltaFrom: n(a, t, u) };
                        }, [u, t, e]);
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var a = u(2056),
                    r = u(6179),
                    n = u.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, s);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, _]);
                        return n().createElement(
                            a.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var a = u(7902),
                    r = u(9916),
                    n = u(6179);
                const s = [
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
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const i = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            A = e.isEnabled,
                            v = void 0 === A || A,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            D = e.onShow,
                            F = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, s);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(() => f || (0, a.F)().resId, [f]),
                            P = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, h, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    D && D(),
                                    (w.current.isVisible = !0));
                            }, [u, h, r, S, D]),
                            y = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, h, { on: !1 }, S),
                                        w.current.isVisible && F && F(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, h, S, F]),
                            k = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === v && y();
                            }, [v, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return v
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(P, E ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && y(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && y(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var R;
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => a });
                const a = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            122: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => a });
                const a = (e, t) => {
                    let u;
                    const a = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        'function' == typeof u && u(), clearTimeout(a);
                    };
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => o });
                var a = u(3138);
                function r(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return n(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: u = s, context: n = 'model' } = {}) {
                    const o = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = o.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = u(t),
                            r = n.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const s = 'string' == typeof r ? `${n}.${r}` : n,
                                i = a.O.view.addModelObserver(s, t, !0);
                            return o.set(i, u), e && u(l(r)), i;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = r(o.keys()); !(e = u()).done; ) {
                                i(e.value, t);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var a = u(4598),
                    r = u(9174),
                    n = u(6179),
                    s = u.n(n),
                    o = u(8246);
                const i = () => (e, t) => {
                    const u = (0, n.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, n.useRef)([]),
                                m = (u, n, s) => {
                                    var i;
                                    const l = o.U(n),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const n = null != t ? t : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const n = null != t ? t : d(e),
                                                        s = r.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            n[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    }
                                                    {
                                                        const n = e,
                                                            s = Object.entries(n),
                                                            o = s.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, n.useRef)(!1),
                                g = (0, n.useState)(i),
                                p = g[0],
                                b = g[1],
                                h = (0, n.useState)(() => m(i, l, d)),
                                A = h[0],
                                v = h[1];
                            return (
                                (0, n.useEffect)(() => {
                                    E.current ? v(m(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, n.useEffect)(() => {
                                    b(i);
                                }, [i]),
                                (0, n.useEffect)(
                                    () => () => {
                                        A.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [A],
                                ),
                                s().createElement(u.Provider, { value: A }, c)
                            );
                        },
                        () => (0, n.useContext)(u),
                    ];
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => o, onResize: () => n, onScaleUpdated: () => s });
                var a = u(2472),
                    r = u(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${t}`,
                                        s = l[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var a = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            2472: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var a = u(5959);
                const r = { view: u(7641), client: a };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var a = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => F,
                        getScale: () => p,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => v,
                        pxToRem: () => b,
                        remToPx: () => h,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var a = u(3722),
                    r = u(6112),
                    n = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function C() {
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
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    o = 64,
                    i = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (a = window.subViews[u].id)),
                        { caller: u, stack: t, resId: a }
                    );
                };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3815: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n });
                var a = u(6179);
                const r = [];
                function n(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var a = u(6179),
                    r = u(7739),
                    n = u(1043);
                let s, o, i;
                !(function (e) {
                    (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        n = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
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
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let a, r;
                u.d(t, { n: () => a }),
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
            9480: (e, t, u) => {
                'use strict';
                function a(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { MH: () => r, UI: () => n });
                const r = a;
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
            },
            7727: (e, t, u) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { $: () => r, G: () => a });
                const r = {
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
            3649: (e, t, u) => {
                'use strict';
                u.d(t, { BN: () => o, Uw: () => p, WU: () => n, e: () => i, uF: () => s, v2: () => r });
                var a = u(1281);
                let r;
                function n(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    _ = (e, t, u = r.left) => e.split(t).reduce(u === r.left ? c : d, []),
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = r.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(u)) return m(e);
                        if ('ja' === u) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = r.left) => {
                            let u = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = l(e);
                            return _(n, /( )/, t).forEach((e) => (u = u.concat(_(e, a, r.left)))), u;
                        })(e, t);
                    },
                    p = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : g(e, t)));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                var a = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, u, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(n) : (this._views[u] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => n.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => b, Eu: () => h });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
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
                        const u = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var n = u(1358);
                var s = u(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function g(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        u = arguments;
                                    return new Promise(function (a, r) {
                                        var n = e.apply(t, u);
                                        function s(e) {
                                            g(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    v = () => A(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var f = u(7572);
                const D = r.instance,
                    F = {
                        DataTracker: n.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, r = R.invalid('resId'), n) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + s.x,
                                    y: m.O.view.pxToRem(c) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(E),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, v);
                        },
                        handleViewEvent: A,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < r.length; t++) u[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => n, Z5: () => a, cy: () => r });
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
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    n = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            599: (e, t, u) => {
                'use strict';
                var a = {};
                u.r(a),
                    u.d(a, {
                        Area: () => Ga,
                        Bar: () => Wa,
                        DefaultScroll: () => Ha,
                        Direction: () => Da,
                        defaultSettings: () => Fa,
                        useHorizontalScrollApi: () => wa,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => sr, Bar: () => ar, Default: () => nr, useVerticalScrollApi: () => za });
                var n = u(7739),
                    s = u(6179),
                    o = u.n(s),
                    i = u(6483),
                    l = u.n(i),
                    c = u(926),
                    d = u.n(c),
                    _ = u(5415);
                const m = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = {
                        [_.fd.ExtraSmall]: '',
                        [_.fd.Small]: d().SMALL_WIDTH,
                        [_.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [_.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [_.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [_.Aq.ExtraSmall]: '',
                        [_.Aq.Small]: d().SMALL_HEIGHT,
                        [_.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [_.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [_.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    b = {
                        [_.cJ.ExtraSmall]: '',
                        [_.cJ.Small]: d().SMALL,
                        [_.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [_.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [_.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    h = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, m);
                        const r = (0, _.GS)(),
                            n = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', E({ className: l()(u, g[n], p[s], b[i]) }, a), t);
                    },
                    A = ['children'];
                const v = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, A);
                    return o().createElement(n.ZN, null, o().createElement(h, u, t));
                };
                var C = u(493),
                    f = u.n(C);
                const D = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
                var F = u(3138),
                    B = u(5521),
                    w = u(9916);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function P(e = B.n.NONE, t = S, u = !1, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== B.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && F.O.view.isEventHandled()) return;
                                F.O.view.setEventHandled(), t(r), u && r.stopPropagation();
                            }
                        }
                    }, [t, e, u, a]);
                }
                var y = u(7727),
                    k = u(3403);
                let L, N, x;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(L || (L = {})),
                    (function (e) {
                        (e.NoAction = 'noAction'),
                            (e.Buy = 'buy'),
                            (e.BuyLevel = 'buyLevel'),
                            (e.ActivateChapter = 'activateChapter');
                    })(N || (N = {})),
                    (function (e) {
                        (e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday');
                    })(x || (x = {}));
                var T = u(3215),
                    I = u(4598),
                    M = u(9480),
                    O = u(3946);
                let W, $, H, G, z, U, V;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin');
                })(W || (W = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })($ || ($ = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(H || (H = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(G || (G = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(z || (z = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(U || (U = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(V || (V = {}));
                var j = u(2372);
                const q = [
                        W.Items,
                        W.Equipment,
                        W.Xp,
                        W.XpFactor,
                        W.Blueprints,
                        W.BlueprintsAny,
                        W.Goodies,
                        W.Berths,
                        W.Slots,
                        W.Tokens,
                        W.CrewSkins,
                        W.CrewBooks,
                        W.Customizations,
                        W.CreditsFactor,
                        W.TankmenXp,
                        W.TankmenXpFactor,
                        W.FreeXpFactor,
                        W.BattleToken,
                        W.PremiumUniversal,
                        W.NaturalCover,
                        W.BpCoin,
                        W.BattlePassSelectToken,
                        W.BattlaPassFinalAchievement,
                        W.BattleBadge,
                        W.BonusX5,
                        W.CrewBonusX3,
                        W.NewYearInvoice,
                        W.EpicSelectToken,
                        W.Comp7TokenWeeklyReward,
                        W.DeluxeGift,
                        W.BattleBoosterGift,
                        W.OptionalDevice,
                    ],
                    Y = [W.Gold, W.Credits, W.Crystal, W.FreeXp],
                    Z = [W.BattlePassPoints, W.EquipCoin],
                    X = [W.PremiumPlus, W.Premium],
                    K = ['engravings', 'backgrounds'],
                    Q = ['engraving', 'background'],
                    J = (e, t = H.Small) => {
                        const u = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case H.S600x450:
                                        return 'c_600x450';
                                    case H.S400x300:
                                        return 'c_400x300';
                                    case H.S296x222:
                                        return 'c_296x222';
                                    case H.S232x174:
                                        return 'c_232x174';
                                    case H.Big:
                                        return 'c_80x80';
                                    case H.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const a = K[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            n = r.$dyn(u);
                                        return n ? `${n}` : `${r.$dyn(Q[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    ee = (e, t, u) => {
                        const a = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            a,
                            u,
                        );
                    },
                    te = [H.Small, H.Big];
                let ue, ae;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(ue || (ue = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(ae || (ae = {}));
                var re = u(8546);
                let ne;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(ne || (ne = {}));
                ne.style, ne.tankman;
                var se = u(3649),
                    oe = u(8613);
                const ie = 60,
                    le = 3600,
                    ce = 86400,
                    de = (Date.now(), oe.Ew.getRegionalDateTime);
                oe.Ew.getFormattedDateTime;
                function _e(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / ce);
                    t -= u * ce;
                    const a = Math.trunc(t / le);
                    t -= a * le;
                    const r = Math.trunc(t / ie);
                    return (t -= r * ie), { days: u, hours: a, minutes: r, seconds: t };
                }
                const me = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    Ee = 'progressiveStyle',
                    ge = 'style',
                    pe = 'tankman',
                    be = 'voicedTankman',
                    he = 'vehicle',
                    Ae = 'battleQuest',
                    ve = (e) => {
                        var t;
                        const u = 1 === e.length ? e[0] : e.includes(he) ? he : ge,
                            a = null != (t = e.find((e) => e !== u)) ? t : '';
                        return { mainReward: u, additionalReward: a };
                    };
                let Ce, fe, De, Fe, Be;
                !(function (e) {
                    (e.left = 'left'), (e.right = 'right');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted');
                    })(fe || (fe = {})),
                    (function (e) {
                        (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward');
                    })(De || (De = {})),
                    (function (e) {
                        (e.back = 'back'), (e.forward = 'forward');
                    })(Fe || (Fe = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gray = 'gray');
                    })(Be || (Be = {}));
                const we = [L.Active, L.Completed],
                    Se = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    levels: e.array('levels.items'),
                                    widget3dStyle: e.object('widget3dStyle'),
                                    widget3dStyleVehicleInfo: e.object('widget3dStyle.vehicleInfo'),
                                    widgetFinalRewards: e.object('widgetFinalRewards'),
                                    vehicleInfo: e.object('widgetFinalRewards.vehicleInfo'),
                                    freeTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.free'),
                                    paidTankmanInfo: e.array('widgetFinalRewards.tankmanInfo.paid'),
                                    styleInfo: e.object('widgetFinalRewards.styleInfo'),
                                    price: e.array('price'),
                                    freeFinalRewards: e.array('freeFinalRewards'),
                                    paidFinalRewards: e.array('paidFinalRewards'),
                                },
                                u = (0, O.Om)(() => M.UI(t.freeFinalRewards.get(), I.yR), { equals: I.jv }),
                                a = (0, O.Om)(() => M.UI(t.paidFinalRewards.get(), I.yR), { equals: I.jv }),
                                r = (0, O.Om)(() => t.root.get().chapterType === x.HOLIDAY),
                                n = (0, O.Om)(() => {
                                    const e = u();
                                    return !(!a().length && ve(e).mainReward === Ee);
                                }),
                                s = (0, O.Om)(() => t.root.get().chapterType === x.EXTRA),
                                o = (0, O.Om)(() => !(r() || s()), { equals: I.jv }),
                                i = (0, O.Om)(() => t.price.get().prices.length > 1),
                                l = (0, O.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                c = (0, O.Om)((e) => {
                                    const u = t.levels.get(),
                                        a = M.MH(u, e - 1);
                                    return (
                                        a || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, a, { maxLevel: u.length })
                                    );
                                }),
                                d = (0, O.Om)((e, t) => {
                                    const u = c(e);
                                    return t
                                        ? M.UI(u.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : M.UI(u.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                _ = (0, O.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.freePointsInLevel,
                                        a = e.currentPointsInLevel,
                                        r = e.chapterState,
                                        n = e.isExtra,
                                        s = we.includes(r) || n ? a : u,
                                        o = c(1);
                                    return { current: s, total: null == o ? void 0 : o.levelPoints };
                                }),
                                m = (0, O.Om)((e, u) => {
                                    const a = t.root.get(),
                                        r = a.chapterState,
                                        n = a.currentLevel,
                                        s = a.potentialLevel,
                                        o = a.currentPointsInChapter,
                                        i = a.freePointsInChapter,
                                        l = c(e),
                                        d = l.levelPoints,
                                        _ = l.maxLevel,
                                        m = u ? i : o,
                                        E = u ? s : n;
                                    return e < E || (E === _ && m === d * _)
                                        ? fe.COMPLETED
                                        : e === E && (r !== L.NotStarted || m > 0)
                                          ? fe.IN_PROGRESS
                                          : fe.NOT_STARTED;
                                }),
                                E = (0, O.Om)((e, u, a, r) => {
                                    const n = t.root.get();
                                    return ((n.currentLevel - 1) * e + (n.currentPointsInLevel / r) * u) / a;
                                }),
                                g = (0, O.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                p = (0, O.Om)((e, t) => {
                                    const u = c(e),
                                        a = u.needTakeFree,
                                        r = u.needTakePaid;
                                    return t ? r : a;
                                }),
                                b = (0, O.Om)((e, u) => {
                                    const a = t.root.get(),
                                        r = a.isBattlePassPurchased,
                                        n = a.chapterState,
                                        s = c(e),
                                        o = m(e, !1);
                                    return {
                                        cardStatus: { current: o, potential: m(e, !0) },
                                        isRare: s.isRare && o !== fe.IN_PROGRESS,
                                        isDisabled: (u && !r) || (n !== L.Active && o === fe.NOT_STARTED),
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    isMulticurrency: i,
                                    getFreeFinalRewards: u,
                                    getPaidFinalRewards: a,
                                    regularBattlePass: o,
                                    getFinalRewardTankmanInfo: l,
                                    currentLevelPoints: _,
                                    levelInfo: c,
                                    levelRewardItems: d,
                                    getCurrentWidth: E,
                                    getTotalLevelPoints: g,
                                    isRewardNeedTake: p,
                                    cardStates: b,
                                    isLayoutWithExtraWidget: n,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPreview: e.createCallbackNoArgs('widgetFinalRewards.onRewardPreviewClick'),
                            open3dStylePreview: e.createCallback((e) => ({ level: e }), 'widget3dStyle.onPreviewClick'),
                            confirm: e.createCallbackNoArgs('onActionClick'),
                            showTankmen: e.createCallbackNoArgs('widgetFinalRewards.showTankmen'),
                            openInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            chapterChoice: e.createCallbackNoArgs('onChapterChoice'),
                            close: e.createCallbackNoArgs('onClose'),
                            viewLoad: e.createCallbackNoArgs('onViewLoaded'),
                            finishLevelsAnimation: e.createCallbackNoArgs('onLevelsAnimationFinished'),
                            takeReward: e.createCallback(({ level: e }) => ({ level: e }), 'onTakeClick'),
                            finishAnimation: e.createCallbackNoArgs('onFinishedAnimation'),
                        }),
                    ),
                    Pe = Se[0],
                    ye = Se[1],
                    ke = {
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
                    Re = [
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
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                class Ne extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, y.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, y.G)(this.props.soundClick);
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
                            u = e.onClick,
                            a = e.goto,
                            r = e.side,
                            n = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(e, Re)),
                            E = l()(ke.base, ke[`base__${n}`], ke[`base__${r}`], null == s ? void 0 : s.base),
                            g = l()(ke.icon, ke[`icon__${n}`], ke[`icon__${r}`], null == s ? void 0 : s.icon),
                            p = l()(ke.glow, null == s ? void 0 : s.glow),
                            b = l()(ke.caption, ke[`caption__${n}`], null == s ? void 0 : s.caption),
                            h = l()(ke.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            Le(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== n && o().createElement('div', { className: ke.shine }),
                            o().createElement('div', { className: g }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: b }, t),
                            a && o().createElement('div', { className: h }, a),
                        );
                    }
                }
                Ne.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var xe = u(9485);
                const Te = 'BattlePassProgressionsViewContent_base_67',
                    Ie = 'BattlePassProgressionsViewContent_base__extra_e2',
                    Me = 'BattlePassProgressionsViewContent_header_76',
                    Oe = 'BattlePassProgressionsViewContent_progression_7c',
                    We = 'BattlePassProgressionsViewContent_progression__extraChapter_01',
                    $e = 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                    He = 'BattlePassProgressionsViewContent_footer_13',
                    Ge = 'BattlePassProgressionsViewContent_close_69',
                    ze = {
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
                let Ue, Ve;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ue || (Ue = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Ve || (Ve = {}));
                const je = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: r,
                    mixClass: n,
                    soundHover: i,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: E,
                    onMouseLeave: g,
                    onClick: p,
                }) => {
                    const b = (0, s.useRef)(null),
                        h = (0, s.useState)(u),
                        A = h[0],
                        v = h[1],
                        C = (0, s.useState)(!1),
                        f = C[0],
                        D = C[1],
                        F = (0, s.useState)(!1),
                        B = F[0],
                        w = F[1],
                        S = (0, s.useCallback)(() => {
                            r || (b.current && (b.current.focus(), v(!0)));
                        }, [r]),
                        P = (0, s.useCallback)(
                            (e) => {
                                A && null !== b.current && !b.current.contains(e.target) && v(!1);
                            },
                            [A],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                r || (p && p(e));
                            },
                            [r, p],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                r || (null !== i && (0, y.G)(i), d && d(e), w(!0));
                            },
                            [r, i, d],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                r || (E && E(e), D(!1));
                            },
                            [r, E],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                r || (null !== c && (0, y.G)(c), m && m(e), u && S(), D(!0));
                            },
                            [r, c, m, S, u],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                r || (g && g(e), D(!1));
                            },
                            [r, g],
                        ),
                        M = l()(
                            ze.base,
                            ze[`base__${a}`],
                            {
                                [ze.base__disabled]: r,
                                [ze[`base__${t}`]]: t,
                                [ze.base__focus]: A,
                                [ze.base__highlightActive]: f,
                                [ze.base__firstHover]: B,
                            },
                            n,
                        ),
                        O = l()(ze.state, ze.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, s.useEffect)(() => {
                            v(u);
                        }, [u]),
                        o().createElement(
                            'div',
                            {
                                ref: b,
                                className: M,
                                onMouseEnter: L,
                                onMouseMove: N,
                                onMouseUp: x,
                                onMouseDown: T,
                                onMouseLeave: I,
                                onClick: k,
                            },
                            a !== Ue.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: ze.back }),
                                    o().createElement('span', { className: ze.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: O },
                                o().createElement('span', { className: ze.stateDisabled }),
                                o().createElement('span', { className: ze.stateHighlightHover }),
                                o().createElement('span', { className: ze.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: ze.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                je.defaultProps = { type: Ue.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const qe = (0, s.memo)(je);
                var Ye = u(6373),
                    Ze = u(2056);
                const Xe = 'ComanderDescription_rewardTitle_02',
                    Ke = 'ComanderDescription_rewardName_12',
                    Qe = 'ComanderDescription_rewardDescription_a8',
                    Je = 'ComanderDescription_rewardLockIcon_9c',
                    et = 'ComanderDescription_rewardLockText_09',
                    tt = 'ComanderDescription_showCommander_9d',
                    ut = 'ComanderDescription_close_3c';
                var at = u(122);
                const rt = 'Voice_base_e2',
                    nt = 'Voice_icon_da',
                    st = 'Voice_icon__speaker_48',
                    ot = 'Voice_icon__wave0_17',
                    it = 'Voice_base__animate_d7',
                    lt = 'Voice_icon__wave1_22',
                    ct = 'Voice_icon__wave2_08',
                    dt = R.strings.battle_pass.progression.extraChapterWidget,
                    _t = (() => {
                        const e = Math.ceil(3.75);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    mt = ({ groupName: e }) => {
                        const t = (0, s.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, s.useCallback)(() => {
                                u || ((0, y.G)(R.sounds.play()), (0, y.G)(e), a(!0));
                            }, [u, e]);
                        return (
                            (0, s.useEffect)(() => {
                                u &&
                                    (0, at.F)(() => {
                                        a(!1);
                                    }, _t.totalDuration);
                            }, [u]),
                            o().createElement(
                                Ye.i,
                                { body: dt.tooltip() },
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(rt, u && it),
                                        onClick: r,
                                        onMouseEnter: () => {
                                            (0, y.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${_t.duration}ms`,
                                            '--animation-iteration-count': _t.iterationCount,
                                        },
                                    },
                                    o().createElement('div', { className: l()(nt, st) }),
                                    o().createElement('div', { className: l()(nt, ot) }),
                                    o().createElement('div', { className: l()(nt, lt) }),
                                    o().createElement('div', { className: l()(nt, ct) }),
                                ),
                            )
                        );
                    },
                    Et = R.strings.battle_pass.progression.extraChapterWidget,
                    gt = R.strings.battle_pass.awardsWidget.description.commander(),
                    pt = (0, k.Pi)(({ isBattlePassBought: e = !1, isPaidReward: t = !1 }) => {
                        const u = ye(),
                            a = u.model,
                            r = u.controls,
                            n = a.root.get().isSpecialTankmenEnabled,
                            s = a.computes.getFinalRewardTankmanInfo(t),
                            i = s.tankman,
                            l = s.groupName;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(mt, { groupName: l }),
                            o().createElement('div', { className: Xe }, Et.commander()),
                            o().createElement('div', { className: Ke }, i),
                            e &&
                                o().createElement(
                                    Ze.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Qe },
                                        o().createElement('div', { className: Je }),
                                        o().createElement('div', { className: et }, Et.labelWithBP()),
                                    ),
                                ),
                            n &&
                                o().createElement(
                                    Ye.i,
                                    { body: gt, isEnabled: Boolean(gt) },
                                    o().createElement(
                                        'div',
                                        { className: tt },
                                        o().createElement(
                                            qe,
                                            { type: Ue.primary, size: Ve.small, mixClass: ut, onClick: r.showTankmen },
                                            Et.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var bt = u(9766);
                const ht =
                    (e, t) =>
                    (...u) => {
                        if (e(...u)) return t(...u);
                    };
                let At;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(At || (At = {}));
                const vt = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    Ct = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const Dt = (e) => {
                        let t = e.type,
                            u = e.children,
                            a = e.className,
                            r = e.classNames,
                            n = e.disabled,
                            i = void 0 !== n && n,
                            c = e.isVisibleLabel,
                            d = void 0 !== c && c,
                            _ = e.soundHover,
                            m = void 0 === _ ? R.sounds.highlight() : _,
                            E = e.soundClick,
                            g = void 0 === E ? R.sounds.play() : E,
                            p = e.size,
                            b = void 0 === p ? 'normal' : p,
                            h = e.onClick,
                            A = e.onMouseEnter,
                            v = e.onMouseLeave,
                            C = e.onMouseDown,
                            f = e.onMouseUp,
                            D = e.onFocus,
                            F = e.onBlur,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Ct);
                        const w = (0, s.useState)(!1),
                            S = w[0],
                            P = w[1],
                            k = (0, s.useState)(!1),
                            L = k[0],
                            N = k[1],
                            x = (0, s.useRef)(null),
                            T = () => !1 === i,
                            I = (e) => T() && ((e) => e.button === At.LEFT)(e),
                            M = ht(T, (e) => {
                                null == h || h(e);
                            }),
                            O = ht(I, (e) => {
                                P(!0), null == C || C(e), g && (0, y.G)(g);
                            }),
                            W = ht(I, (e) => {
                                P(!1), null == f || f(e);
                            }),
                            $ = ht(T, (e) => {
                                N(!0), null == A || A(e), m && (0, y.G)(m);
                            }),
                            H = ht(T, (e) => {
                                null == D || D(e);
                            }),
                            G = ht(T, (e) => {
                                null == F || F(e);
                            });
                        return o().createElement(
                            'div',
                            ft(
                                {
                                    ref: x,
                                    className: l()(
                                        vt.base,
                                        i && vt.base__disabled,
                                        d && vt.base__visibleLabel,
                                        !i && S && vt.base__mouseDown,
                                        !i && L && vt.base__hovered,
                                        a,
                                    ),
                                    onClick: M,
                                    onMouseEnter: $,
                                    onMouseLeave: (e) => {
                                        N(!1), P(!1), null == v || v(e);
                                    },
                                    onMouseDown: O,
                                    onMouseUp: W,
                                    onFocus: H,
                                    onBlur: G,
                                },
                                B,
                            ),
                            o().createElement('div', {
                                className: l()(
                                    vt.icon,
                                    vt[`icon__${b}`],
                                    vt[`icon__${t}`],
                                    null == r ? void 0 : r.icon,
                                ),
                            }),
                            u &&
                                o().createElement(
                                    'div',
                                    { className: l()(vt.label, vt[`label__${b}`], null == r ? void 0 : r.label) },
                                    u,
                                ),
                        );
                    },
                    Ft = 'AdditionalRewardInfo_rewardText_6f',
                    Bt = 'AdditionalRewardInfo_subTitle_89',
                    wt = 'AdditionalRewardInfo_subTitleTextWrapper_cf',
                    St = 'AdditionalRewardInfo_subTitleText_bb',
                    Pt = 'AdditionalRewardInfo_subTitleText__truncated_9f',
                    yt = 'AdditionalRewardInfo_infoIcon_33';
                function kt(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                function Rt(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, r) {
                            var n = e.apply(t, u);
                            function s(e) {
                                kt(n, a, r, s, o, 'next', e);
                            }
                            function o(e) {
                                kt(n, a, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const Lt = R.strings.battle_pass.progression.extraChapterWidget,
                    Nt = (0, k.Pi)(({ additionalReward: e }) => {
                        const t = ye().model,
                            u = t.widgetFinalRewards,
                            a = t.styleInfo,
                            r = t.vehicleInfo.get().vehicleName,
                            n = u.get().battleQuest,
                            i = (0, s.useState)(!1),
                            c = i[0],
                            d = i[1],
                            _ = (0, s.useRef)(null),
                            m = (0, s.useCallback)(
                                Rt(function* () {
                                    yield (0, w.Eu)();
                                    const e = _.current;
                                    e && d(e.scrollWidth > e.offsetWidth);
                                }),
                                [],
                            );
                        var E;
                        return (
                            (E = () => (
                                m(),
                                engine.on('clientResized', m),
                                () => {
                                    engine.off('clientResized', m);
                                }
                            )),
                            (0, s.useEffect)(E, []),
                            o().createElement(
                                o().Fragment,
                                null,
                                e === ge &&
                                    o().createElement(bt.z, {
                                        classMix: Ft,
                                        text: Lt.vehicleSubTitle(),
                                        binding: { styleName: a.get().styleName },
                                    }),
                                e === Ae &&
                                    o().createElement(
                                        Ze.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: n },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Bt },
                                            o().createElement(
                                                'div',
                                                { className: wt },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(St, c && Pt), ref: _ },
                                                    (0, se.uF)(Lt.styleSubTitle(), { vehicleName: r }),
                                                ),
                                            ),
                                            o().createElement('div', { className: yt }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    xt = 'StyleDescription_rewardTitle_81',
                    Tt = 'StyleDescription_title_60',
                    It = 'StyleDescription_remark_0e',
                    Mt = 'StyleDescription_lockIcon_35',
                    Ot = R.strings.battle_pass.progression.extraChapterWidget,
                    Wt = (0, k.Pi)(({ additionalReward: e }) => {
                        const t = ye(),
                            u = t.model,
                            a = u.styleInfo,
                            r = u.root,
                            n = t.controls,
                            s = r.get().isBattlePassPurchased;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(Dt, { type: 'preview', size: 'normal', onClick: n.openPreview }),
                            o().createElement('div', { className: xt }, Ot.styleTitle()),
                            o().createElement(bt.z, {
                                classMix: Tt,
                                text: Ot.styleName(),
                                binding: { styleName: a.get().styleName },
                            }),
                            e && o().createElement(Nt, { additionalReward: e }),
                            !s &&
                                o().createElement(
                                    Ze.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: It },
                                        o().createElement('div', { className: Mt }),
                                        o().createElement('div', null, Ot.styleRemark()),
                                    ),
                                ),
                        );
                    }),
                    $t = 'TankmanDescription_title_56',
                    Ht = 'TankmanDescription_name_8a',
                    Gt = 'TankmanDescription_skills_11',
                    zt = 'TankmanDescription_skill_2d',
                    Ut = 'TankmanDescription_skill__paidReward_6e',
                    Vt = 'TankmanDescription_description_78',
                    jt = 'TankmanDescription_icon_fe',
                    qt = 'TankmanDescription_text_09',
                    Yt = R.strings.battle_pass.progression.extraChapterWidget,
                    Zt = (0, k.Pi)(({ isBattlePassBought: e = !1, isPaidReward: t = !1 }) => {
                        const u = ye().model.computes.getFinalRewardTankmanInfo(t),
                            a = u.tankman,
                            r = u.skills;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', { className: $t }, Yt.tankman()),
                            o().createElement('div', { className: Ht }, a),
                            o().createElement(
                                'div',
                                { className: Gt },
                                M.UI(r, (e, u) =>
                                    o().createElement('div', {
                                        key: `${e}_${u}`,
                                        className: l()(zt, t && Ut),
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e}')`,
                                        },
                                    }),
                                ),
                            ),
                            e &&
                                o().createElement(
                                    Ze.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Vt },
                                        o().createElement('div', { className: jt }),
                                        o().createElement('div', { className: qt }, Yt.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    Xt = () => {},
                    Kt = (e = 0, t, u = 0, a = Xt) => {
                        const r = (0, s.useState)(e),
                            n = r[0],
                            o = r[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const r = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== u && t <= u ? (o(u), a && a(), clearInterval(n)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? ie : 1)),
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                            }, [e, t, u, a]),
                            n
                        );
                    };
                u(6536);
                w.Sw.instance;
                let Qt;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Qt || (Qt = {}));
                w.Sw.instance;
                const Jt = Kt,
                    eu = (e) => (e < 10 ? '0' + e : e),
                    tu = 'Timer_base_0c',
                    uu = 'Timer_light_02',
                    au = 'Timer_icon_c5',
                    ru = 'Timer_value_1c',
                    nu = ({ expireTime: e = 0 }) => {
                        const t = Jt(e, 1),
                            u = `${(a = _e(t)).days ? (0, se.WU)(R.strings.common.duration.days(), { days: a.days }) : ''} ${eu(a.hours)} : ${eu(a.minutes)} : ${eu(a.seconds)}`;
                        var a;
                        return o().createElement(
                            Ye.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            o().createElement(
                                'div',
                                { className: tu },
                                o().createElement('div', { className: uu }),
                                o().createElement('div', { className: uu }),
                                o().createElement('div', { className: au }),
                                o().createElement('div', { className: ru }, u),
                            ),
                        );
                    },
                    su = {
                        vehicleBg: 'VehicleDescription_vehicleBg_26',
                        vehicleBg__description: 'VehicleDescription_vehicleBg__description_96',
                        vehicleCaption: 'VehicleDescription_vehicleCaption_d5',
                        description: 'VehicleDescription_description_58',
                        rewardLabel: 'VehicleDescription_rewardLabel_95',
                        rewardDescription: 'VehicleDescription_rewardDescription_26',
                        rewardLockIcon: 'VehicleDescription_rewardLockIcon_b5',
                        rewardLockText: 'VehicleDescription_rewardLockText_b3',
                    },
                    ou = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    iu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function lu(e) {
                    let t = '';
                    for (let u = iu.length - 1; u >= 0; u--) for (; e >= iu[u]; ) (t += ou[u]), (e -= iu[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const cu = 'VehicleInfo_base_ef',
                    du = 'VehicleInfo_type_40',
                    _u = ({ vehicleLvl: e, vehicleName: t, vehicleType: u, isElite: a, classNames: r }) =>
                        o().createElement(
                            'div',
                            { className: l()(cu, null == r ? void 0 : r.base) },
                            lu(e),
                            o().createElement('div', {
                                className: l()(du, null == r ? void 0 : r.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, se.BN)(u)}${a ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    mu = R.strings.battle_pass.progression.extraChapterWidget,
                    Eu = (0, k.Pi)(({ isBattlePassBought: e = !1, additionalReward: t, isShowDescription: u = !1 }) => {
                        const a = ye(),
                            r = a.model,
                            n = r.vehicleInfo,
                            s = r.root,
                            i = a.controls,
                            c = n.get(),
                            d = c.vehicleType,
                            m = c.isElite,
                            E = c.vehicleName,
                            g = c.vehicleShortName,
                            p = c.vehicleLvl,
                            b = c.vehicleNation,
                            h = (0, _.GS)().mediaSize,
                            A = s.get().seasonNum,
                            v = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${b})` },
                            C = h > _.cJ.Medium ? 14 : 12,
                            f = E.length > C ? g : E;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', {
                                className: l()(su.vehicleBg, u && su.vehicleBg__description),
                                style: v,
                            }),
                            o().createElement(Dt, { type: 'preview', size: 'normal', onClick: i.openPreview }),
                            o().createElement('div', { className: su.vehicleCaption }, mu.vehicleCaption()),
                            o().createElement(_u, {
                                classNames: { base: su.vehicleInfo },
                                vehicleLvl: p,
                                vehicleName: f,
                                vehicleType: d,
                                isElite: m,
                            }),
                            u &&
                                o().createElement(
                                    'div',
                                    { className: su.description },
                                    o().createElement(bt.z, { text: mu.tank.description.$num(A) }),
                                ),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: su.rewardLabel },
                                    o().createElement(Nt, { additionalReward: t }),
                                ),
                            e &&
                                o().createElement(
                                    Ze.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: su.rewardDescription },
                                        o().createElement('div', { className: su.rewardLockIcon }),
                                        o().createElement('div', { className: su.rewardLockText }, mu.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    gu = 'ExtraChapterWidget_base_61',
                    pu = 'ExtraChapterWidget_widgetWrapper_00',
                    bu = 'ExtraChapterWidget_glow_e7',
                    hu = 'ExtraChapterWidget_content_a7',
                    Au = 'ExtraChapterWidget_content__left_be',
                    vu = 'ExtraChapterWidget_content__vehicle_c6',
                    Cu = 'ExtraChapterWidget_separatorBg_ab',
                    fu = 'ExtraChapterWidget_timer_9b',
                    Du = 'Separator_base_c5',
                    Fu = 'Separator_separatorBg_28',
                    Bu = ({ classNames: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(Du, null == e ? void 0 : e.base) },
                            o().createElement('div', { className: l()(Fu, null == e ? void 0 : e.separatorBg) }),
                        );
                let wu;
                !(function (e) {
                    (e.Free = 'free'), (e.Paid = 'paid');
                })(wu || (wu = {}));
                const Su = (e, t, u = !1, a = !1) => {
                        switch (e.mainReward) {
                            case be:
                                return o().createElement(pt, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                    isPaidReward: t === wu.Paid,
                                });
                            case pe:
                                return o().createElement(Zt, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                    isPaidReward: t === wu.Paid,
                                });
                            case he:
                                return o().createElement(Eu, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                    isShowDescription: a,
                                });
                            case ge:
                                return o().createElement(Wt, {
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                });
                            default:
                                console.warn('Unknown type: ', e.mainReward);
                        }
                    },
                    Pu = (0, k.Pi)(() => {
                        const e = ye().model,
                            t = e.root,
                            u = e.computes,
                            a = t.get(),
                            r = a.isBattlePassPurchased,
                            n = a.timeLeft,
                            s = u.regularBattlePass(),
                            i = u.getFreeFinalRewards(),
                            c = u.getPaidFinalRewards(),
                            d = !c.length && ve(i).mainReward === he;
                        return o().createElement(
                            'div',
                            { className: gu },
                            o().createElement(
                                'div',
                                { className: pu },
                                o().createElement('div', { className: bu }),
                                o().createElement('div', { className: l()(hu, d && vu) }, Su(ve(i), wu.Free, !1, d)),
                                c.length &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(Bu, { classNames: { separatorBg: Cu } }),
                                        o().createElement('div', { className: l()(hu, Au) }, Su(ve(c), wu.Paid, !r)),
                                    ),
                            ),
                            !s && o().createElement('div', { className: fu }, o().createElement(nu, { expireTime: n })),
                        );
                    }),
                    yu = {
                        base: 'Footer_base_5e',
                        light: 'Footer_light_19',
                        light__red: 'Footer_light__red_67',
                        light__green: 'Footer_light__green_ec',
                        buttonWrapper: 'Footer_buttonWrapper_fc',
                        buttonWrapper__multiCurrency: 'Footer_buttonWrapper__multiCurrency_df',
                        multicurrencyIcon: 'Footer_multicurrencyIcon_bc',
                        button: 'Footer_button_80',
                        labelContainer: 'Footer_labelContainer_43',
                        label: 'Footer_label_2a',
                        days: 'Footer_days_5e',
                        points: 'Footer_points_af',
                        status: 'Footer_status_b0',
                        info: 'Footer_info_a4',
                        infoHover: 'Footer_infoHover_81',
                        blink: 'Footer_blink_bc',
                        move: 'Footer_move_b0',
                    },
                    ku = R.strings.battle_pass.progression,
                    Ru = R.strings.battle_pass.tooltips.footerBuyBtn,
                    Lu = R.strings.battle_pass.tooltips.progression,
                    Nu = (e, t) =>
                        e
                            ? t
                                ? ku.activatePausedExtraChapterDescr()
                                : ku.activateExtraChapterDescr()
                            : ku.activateChapterDescr();
                let xu;
                !(function (e) {
                    (e.Red = 'red'), (e.Green = 'green'), (e.None = '');
                })(xu || (xu = {}));
                const Tu = (0, k.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        u = e.controls,
                        a = t.root.get(),
                        r = a.actionType,
                        n = a.chapterType,
                        s = a.hasExtra,
                        i = a.isSeasonEndingSoon,
                        c = a.freePointsInChapter,
                        d = a.currentPointsInChapter,
                        m = a.chapterState,
                        E = a.timeLeft,
                        g = n === x.EXTRA,
                        p = m === L.Paused,
                        b = c - d,
                        h = r === N.ActivateChapter && b > 0,
                        A = r !== N.ActivateChapter && i,
                        v = t.computes.isMulticurrency() && r === N.Buy,
                        C = (0, _.GS)().mediaSize <= _.cJ.Small ? Ve.small : Ve.medium,
                        f = ((e) => {
                            switch (e) {
                                case N.Buy:
                                    return {
                                        buyBtnLabel: ku.battlePassBuyBtn(),
                                        tooltip: Ru.battlePass.descr(),
                                        label: ku.battlePassBuyDescr(),
                                        warning: ku.seasonEndingDescr(),
                                        buttonType: Ue.main,
                                        lightColor: xu.Red,
                                    };
                                case N.BuyLevel:
                                    return {
                                        buyBtnLabel: ku.episodeBuyBtn(),
                                        tooltip: Ru.episode.descr(),
                                        label: ku.episodeBuyDescr(),
                                        warning: ku.seasonEndingDescr(),
                                        buttonType: Ue.main,
                                        lightColor: xu.None,
                                    };
                                case N.ActivateChapter:
                                    return {
                                        buyBtnLabel: ku.activateChapter(),
                                        tooltip: Ru.activateChapter.descr(),
                                        label: Nu(g, p),
                                        warning: ku.footer.freePointsDescr(),
                                        buttonType: Ue.primary,
                                        lightColor: xu.Green,
                                    };
                                default:
                                    return {
                                        buyBtnLabel: '',
                                        tooltip: '',
                                        label: '',
                                        warning: '',
                                        buttonType: Ue.ghost,
                                        lightColor: xu.Green,
                                    };
                            }
                        })(r),
                        D = f.buyBtnLabel,
                        F = f.tooltip,
                        B = f.label,
                        w = f.warning,
                        S = f.buttonType,
                        P = f.lightColor,
                        y = h || A ? w : B,
                        k = ((e) => {
                            const t = _e(e),
                                u = R.strings.battle_pass.status.timeLeft;
                            switch (!0) {
                                case t.days >= 1:
                                    return (0, se.uF)(u.days(), { day: t.days });
                                case t.hours >= 1:
                                    return (0, se.uF)(u.hours(), { hour: t.hours });
                                case t.minutes >= 1:
                                    return (0, se.uF)(u.min(), { min: t.minutes });
                                default:
                                    return u.lessMin();
                            }
                        })(E);
                    return o().createElement(
                        'div',
                        { className: yu.base },
                        o().createElement('div', { className: l()(yu.light, yu[`light__${P}`]) }),
                        o().createElement(
                            'div',
                            { className: yu.labelContainer },
                            p && o().createElement('div', { className: yu.status }, ku.footer.status.paused()),
                            o().createElement('div', { className: yu.label }, y),
                            A && o().createElement('div', { className: yu.days }, k),
                            h &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: yu.points }, b),
                                    o().createElement(
                                        'div',
                                        { className: yu.info },
                                        o().createElement(
                                            Ye.i,
                                            {
                                                header: Lu.freePoints.header(),
                                                body: s ? Lu.freePoints.bodyExceptExtra() : Lu.freePoints.body(),
                                            },
                                            o().createElement('div', { className: yu.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        o().createElement(
                            'div',
                            { className: l()(yu.buttonWrapper, v && yu.buttonWrapper__multiCurrency) },
                            o().createElement(
                                Ye.i,
                                { body: F },
                                o().createElement(
                                    qe,
                                    { type: S, size: C, mixClass: yu.button, onClick: u.confirm },
                                    A && o().createElement('div', { className: yu.blink }),
                                    D,
                                ),
                            ),
                            v &&
                                o().createElement(
                                    Ye.i,
                                    { body: ku.footer.multicurrencyTooltip() },
                                    o().createElement('div', { className: yu.multicurrencyIcon }),
                                ),
                        ),
                    );
                });
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
                function Iu() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                let Mu;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(Mu || (Mu = {}));
                var Ou = u(8596),
                    Wu = u(5262);
                function $u(e, t, u) {
                    const a = (0, s.useContext)(n.YN);
                    let r = Object.entries(a).filter(([e, t]) => !0 === t && e in Wu.u);
                    return (
                        u && (r = r.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const a = r.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, se.e)(t))(u, e[0])]),
                            );
                            return (e[u] = l()(t[u], ...a)), e;
                        }, {})
                    );
                }
                const Hu = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let Gu;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(Gu || (Gu = {}));
                (0, s.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: u,
                        children: a,
                        leftSubText: r,
                        leftButtonType: n,
                        onClose: i,
                        onLeftButtonClick: c,
                        isHideButtons: d = !1,
                    }) => {
                        const _ = $u(['leftBlock', 'rightBlock'], Hu),
                            m = (0, s.useState)(d),
                            E = m[0],
                            g = m[1];
                        (0, s.useEffect)(() => g(!d), [d]);
                        const p = (0, s.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = l()(Hu.container, E && Hu.container__shown);
                        return o().createElement(
                            'div',
                            { className: Hu.base, style: p },
                            o().createElement(
                                'div',
                                { className: b },
                                Boolean(u) &&
                                    o().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        o().createElement(Ne, {
                                            caption: u || '',
                                            goto: r,
                                            type: n,
                                            side: 'left',
                                            onClick: c,
                                        }),
                                    ),
                                Boolean(t) &&
                                    o().createElement(
                                        'div',
                                        { className: _.rightBlock },
                                        o().createElement(Ne, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            o().createElement('div', { className: Hu.view }, a),
                        );
                    },
                );
                var zu = u(8001),
                    Uu = u(6254);
                const Vu = 'Header_base_6a',
                    ju = 'Header_labels_ec',
                    qu = 'Header_title_3d',
                    Yu = 'Header_chapterWrapper_6c',
                    Zu = 'Header_chapterText_57',
                    Xu = 'Header_chapterText__overflow_ce',
                    Ku = 'Header_chapterStatus_2e',
                    Qu = 'Header_date_f2',
                    Ju = 'Header_titleButtons_e8',
                    ea = 'Header_titleButton_5f',
                    ta = 'Header_logo_84',
                    ua = 'Header_awards_92',
                    aa = 'Header_flag_3d',
                    ra = 'Header_flag__isChapterChosen_ea',
                    na = 'Header_flag__isChapterNotChosen_d8',
                    sa = 'Header_emblem_56',
                    oa = 'Header_emblem__isChapterNotChosen_fd',
                    ia = 'Header_chapterLogoIcon_6b';
                function la(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                function ca(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, r) {
                            var n = e.apply(t, u);
                            function s(e) {
                                la(n, a, r, s, o, 'next', e);
                            }
                            function o(e) {
                                la(n, a, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let da;
                !(function (e) {
                    (e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium');
                })(da || (da = {}));
                const _a = R.strings.battle_pass,
                    ma = 'auto',
                    Ea = (0, k.Pi)(() => {
                        const e = ye(),
                            t = e.controls,
                            u = e.model,
                            a = u.root.get(),
                            r = a.chapterID,
                            n = a.chapterState,
                            i = a.seasonNum,
                            c = a.expireTime,
                            d = a.currentLevel,
                            m = a.isBattlePassPurchased,
                            E = a.currentPointsInChapter,
                            g = a.timeLeft,
                            p = a.chapterType,
                            b = [L.NotStarted, L.Paused],
                            h = (0, s.useState)(!1),
                            A = h[0],
                            v = h[1],
                            C = (0, s.useState)(ma),
                            f = C[0],
                            D = C[1],
                            F = (0, _.GS)().mediaSize,
                            B = F <= _.cJ.Medium ? re.$u.Small : re.$u.Medium,
                            S = F <= _.cJ.Medium ? viewEnv.pxToRem(da.Small) : viewEnv.pxToRem(da.Medium),
                            P = (0, s.useRef)(null),
                            y = (0, s.useRef)(null),
                            k =
                                (N = n) === L.Paused
                                    ? _a.progression.header.paused()
                                    : N === L.NotStarted
                                      ? _a.progression.header.inactive()
                                      : void 0;
                        var N;
                        const T = (0, s.useRef)(0),
                            I = n === L.Completed,
                            M = p === x.EXTRA,
                            O = () => (I ? re.Bq.Completed : m ? re.Bq.Bought : re.Bq.Free),
                            W = { level: d, from: E },
                            $ = n === L.Active,
                            H = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(W) || n !== L.NotStarted,
                            G = H && O() !== re.Bq.Completed,
                            z = O() === re.Bq.Bought,
                            U = new Date(1e3 * c),
                            V = Math.trunc(g / 86400),
                            j = _a.chapter.fullName.$num(r),
                            q = u.computes.regularBattlePass()
                                ? (0, se.uF)(_a.progression.season.end.normal(), {
                                      seasonNum: lu(i),
                                      seasonName: _a.season.fullName.$num(i),
                                      endDay: U.getDate(),
                                      endMonth: R.strings.menu.dateTime.months.$num(U.getMonth() + 1),
                                  })
                                : (0, se.uF)(_a.progression.season.end.special(), {
                                      endTime: de(c, Mu.DayMonthFullTime),
                                  }),
                            Y = (0, se.uF)(_a.progression.seasonEndingTooltip(), { day: V }),
                            Z = (0, se.uF)(_a.progression.header.chapter.status(), { chapterName: j }),
                            X = (0, s.useCallback)(
                                (e) => {
                                    e > T.current && (T.current = e);
                                },
                                [T],
                            ),
                            K = (0, s.useCallback)(
                                ca(function* () {
                                    yield (0, w.Eu)(), yield Iu();
                                    const e = P.current,
                                        t = y.current;
                                    e &&
                                        t &&
                                        (X(t.offsetWidth),
                                        k
                                            ? (v(T.current >= e.offsetWidth - S),
                                              D(e.offsetWidth / viewEnv.getScale() - S + 'rem'))
                                            : (v(T.current >= e.offsetWidth), D(ma)));
                                }),
                                [X, k, S],
                            );
                        return (
                            (0, s.useEffect)(
                                () => (
                                    K(),
                                    engine.on('clientResized', K),
                                    () => {
                                        engine.off('clientResized', K);
                                    }
                                ),
                                [n],
                            ),
                            o().createElement(
                                'div',
                                { className: Vu },
                                o().createElement(
                                    'div',
                                    { className: ta },
                                    o().createElement('div', {
                                        className: l()(aa, G && ra, b.includes(n) && na),
                                        style: (0, xe.fW)(r, B),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: l()(sa, b.includes(n) && oa) },
                                        o().createElement(Ou.G4, {
                                            progression: W,
                                            size: B,
                                            battlePassState: O(),
                                            hasBattlePass: m,
                                            isChapterChosen: $,
                                            isProgression: !0,
                                            chapterID: r,
                                            hasBeenActive: H,
                                            showProgressBar: !1,
                                            isOpen: G,
                                            isExtra: M,
                                            seasonNum: i,
                                        }),
                                        G && o().createElement('div', { className: ia, style: (0, xe.cs)(r, z, B) }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: ju },
                                    o().createElement(
                                        'div',
                                        { className: qu },
                                        o().createElement(
                                            Ye.i,
                                            { body: Y, isEnabled: Boolean(g) },
                                            o().createElement('div', { className: Qu }, q),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Yu, ref: P },
                                            o().createElement(
                                                'div',
                                                { style: { maxWidth: `${f}` } },
                                                o().createElement(
                                                    Ye.i,
                                                    { body: Z, isEnabled: A },
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(Zu, A && Xu), ref: y },
                                                        Z,
                                                    ),
                                                ),
                                            ),
                                            k && o().createElement('div', { className: Ku }, k),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Ju },
                                            o().createElement(
                                                'div',
                                                { className: ea },
                                                o().createElement(Ne, {
                                                    caption: M ? _a.progression.aboutExtra() : _a.progression.about(),
                                                    type: Gu.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: ea },
                                                o().createElement(Ne, {
                                                    caption: _a.howToEarnPoints.title(),
                                                    type: Gu.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(Uu.i, { place: Uu.Z.PROGRESSION }),
                                o().createElement(
                                    'div',
                                    { className: ua },
                                    o().createElement(zu.Z, { context: 'model.awardsWidget' }),
                                ),
                            )
                        );
                    }),
                    ga = {
                        base: 'Progression_base_52',
                        base__isLayoutWithExtraWidget: 'Progression_base__isLayoutWithExtraWidget_53',
                        scrollWrapper: 'Progression_scrollWrapper_3a',
                        wrapper: 'Progression_wrapper_0f',
                        section__last: 'Progression_section__last_4d',
                        divider: 'Progression_divider_4e',
                        dividerContent: 'Progression_dividerContent_82',
                        dividerText: 'Progression_dividerText_8c',
                        progressContainer: 'Progression_progressContainer_7f',
                        progress: 'Progression_progress_c8',
                        progress__inactive: 'Progression_progress__inactive_b8',
                        progressBackground: 'Progression_progressBackground_8c',
                        progressBackground__disabled: 'Progression_progressBackground__disabled_0b',
                        progressBackground__finished: 'Progression_progressBackground__finished_0e',
                        decor: 'Progression_decor_7f',
                        decorBackground: 'Progression_decorBackground_4c',
                        decor__left: 'Progression_decor__left_4e',
                        row: 'Progression_row_2c',
                        row__basic: 'Progression_row__basic_05',
                        bookmark: 'Progression_bookmark_78',
                        bookmark__start: 'Progression_bookmark__start_e7',
                        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_6c',
                        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_3b',
                        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_c3',
                        bookmarkBackground: 'Progression_bookmarkBackground_d6',
                        scrollToButton: 'Progression_scrollToButton_38',
                        scrollToButton__visible: 'Progression_scrollToButton__visible_47',
                        scrollToButton__forward: 'Progression_scrollToButton__forward_18',
                        scrollToButton__backward: 'Progression_scrollToButton__backward_1f',
                        arrowButton: 'Progression_arrowButton_ad',
                        progressionToButton: 'Progression_progressionToButton_3b',
                        progressionToButton__hidden: 'Progression_progressionToButton__hidden_29',
                        progressionToButton__back: 'Progression_progressionToButton__back_a8',
                        progressionToButton__forward: 'Progression_progressionToButton__forward_ce',
                        shadow: 'Progression_shadow_4a',
                        shadow__left: 'Progression_shadow__left_e1',
                        shadow__right: 'Progression_shadow__right_f8',
                        additionalShadow: 'Progression_additionalShadow_69',
                        additionalShadow__active: 'Progression_additionalShadow__active_80',
                        scrollBarPosition: 'Progression_scrollBarPosition_40',
                        fadeOut: 'Progression_fadeOut_7c',
                        fadeIn: 'Progression_fadeIn_1d',
                        fadeInWithScale: 'Progression_fadeInWithScale_74',
                        slideUp: 'Progression_slideUp_a2',
                        scale: 'Progression_scale_a8',
                        rotate: 'Progression_rotate_1c',
                    };
                var pa = u(7515),
                    ba = u(3815);
                function ha(e, t, u = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, s.useEffect)(() => r, [r]);
                    const n = (null != u ? u : []).concat([t]);
                    return [
                        (0, s.useCallback)((u) => {
                            (a.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, n),
                        r,
                    ];
                }
                function Aa(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return va(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return va(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function va(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                function Ca(e, t, u) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, u, a) {
                                let r,
                                    n = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), u.apply(l, i);
                                    }
                                    n ||
                                        (a && !r && d(),
                                        o(),
                                        void 0 === a && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        o(), (n = !0);
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return (0, s.useEffect)(() => a.cancel, [a]), a;
                }
                var fa = u(7030);
                let Da;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Da || (Da = {}));
                const Fa = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ba = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: n = !1,
                    }) => {
                        const o = (e, u) => {
                            const a = t(e),
                                r = a[0],
                                n = a[1];
                            return n <= r ? 0 : (0, pa.u)(r, n, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Fa : l,
                                d = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                m = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var a, r = Aa(t(e).values()); !(a = r()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, s.useMemo)(() => ({ on: u, off: a, trigger: r }), []);
                                })(),
                                E = Ca(
                                    () => {
                                        F.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, fa.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), m.trigger('change', e), n && E());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                p = g[0],
                                b = g[1],
                                h = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            n = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * u + n + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            b.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [b, c.animationConfig, p.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            n = h(t, e, a);
                                        A(n);
                                    },
                                    [A, h, c.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(a(e)),
                                            d.current && m.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, v, m],
                                ),
                                f = ((e, t = []) => {
                                    const u = (0, s.useRef)(),
                                        a = (0, s.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        D(() => {
                                            const e = d.current;
                                            e &&
                                                (A(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [A, p.scrollPosition.goal],
                                ),
                                B = (0, ba.z)(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && A(t, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: A,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: p,
                                    recalculateContent: B,
                                    events: { on: m.on, off: m.off },
                                }),
                                [p.scrollPosition, A, v, m.off, m.on, B, C, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    wa = Ba({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Da.Next : Da.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Sa = 'HorizontalBar_base_49',
                    Pa = 'HorizontalBar_base__nonActive_82',
                    ya = 'HorizontalBar_leftButton_5f',
                    ka = 'HorizontalBar_rightButton_03',
                    Ra = 'HorizontalBar_track_0d',
                    La = 'HorizontalBar_thumb_fd',
                    Na = 'HorizontalBar_rail_32',
                    xa = 'disable',
                    Ta = { pending: !1, offset: 0 },
                    Ia = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ma = () => {},
                    Oa = (e, t) => Math.max(20, e.offsetWidth * t),
                    Wa = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ia, onDrag: a = Ma }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(Ta),
                            E = m[0],
                            g = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            b = () => {
                                const t = c.current,
                                    u = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = (0, pa.u)(0, 1, s / (r - a)),
                                    _ = (t.offsetWidth - Oa(t, o)) * l;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (n.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return n.current.classList.add(xa), void i.current.classList.remove(xa);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return n.current.classList.remove(xa), void i.current.classList.add(xa);
                                            var t, u;
                                            n.current.classList.remove(xa), i.current.classList.remove(xa);
                                        }
                                    })(_);
                            },
                            h = (0, ba.z)(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && a && u)) return;
                                    const s = Math.min(1, a / n);
                                    (t.style.width = `${Oa(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Pa) : r.current.classList.remove(Pa));
                                })(),
                                    b();
                            });
                        (0, s.useEffect)(() => D(h)),
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = Ma;
                                        const a = () => {
                                            u(), (u = D(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = F.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const n = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!n || !s) return;
                                        const o = c.current,
                                            i = d.current;
                                        if (!o || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - E.offset - o.getBoundingClientRect().x,
                                            _ = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: _ });
                                    }),
                                    u = F.O.client.events.mouse.up(() => {
                                        t(), p(Ta);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const A = ha((t) => e.applyStepTo(t), _, [e]),
                            v = A[0],
                            C = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const f = (e) => {
                            e.target.classList.contains(xa) || (0, y.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Sa, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ya, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xa) || 0 !== e.button || ((0, y.G)('play'), v(Da.Next));
                                },
                                onMouseUp: C,
                                ref: n,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ra, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, y.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const n = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Da.Prev : Da.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: d, className: l()(La, t.thumb) }),
                                o().createElement('div', { className: l()(Na, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(ka, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xa) || 0 !== e.button || ((0, y.G)('play'), v(Da.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    $a = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ha = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: n,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()($a.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()($a.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()($a.defaultScrollArea, r) },
                                o().createElement(Ga, { className: i, api: m, classNames: n }, e),
                            ),
                            o().createElement(Wa, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    Ga = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, s.useEffect)(() => D(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()($a.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()($a.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()($a.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Ga.Bar = Wa), (Ga.Default = Ha);
                const za = Ba({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Da.Next : Da.Prev),
                    }),
                    Ua = 'VerticalBar_base_f3',
                    Va = 'VerticalBar_base__nonActive_42',
                    ja = 'VerticalBar_topButton_d7',
                    qa = 'VerticalBar_bottomButton_06',
                    Ya = 'VerticalBar_track_df',
                    Za = 'VerticalBar_thumb_32',
                    Xa = 'VerticalBar_rail_43',
                    Ka = 'disable',
                    Qa = () => {},
                    Ja = { pending: !1, offset: 0 },
                    er = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    tr = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ur = (e, t) => Math.max(20, e.offsetHeight * t),
                    ar = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = er, onDrag: a = Qa }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(Ja),
                            E = m[0],
                            g = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            b = (0, ba.z)(() => {
                                const t = d.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && t && u)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (t.style.height = `${ur(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Va) : r.current.classList.remove(Va)),
                                    s
                                );
                            }),
                            h = (0, ba.z)(() => {
                                const t = c.current,
                                    u = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = (0, pa.u)(0, 1, s / (r - a)),
                                    _ = (t.offsetHeight - ur(t, o)) * l;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (n.current && i.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return n.current.classList.add(Ka), void i.current.classList.remove(Ka);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return n.current.classList.remove(Ka), void i.current.classList.add(Ka);
                                            var t, u;
                                            n.current.classList.remove(Ka), i.current.classList.remove(Ka);
                                        }
                                    })(_);
                            }),
                            A = (0, ba.z)(() => {
                                tr(e, () => {
                                    b(), h();
                                });
                            });
                        (0, s.useEffect)(() => D(A)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    tr(e, () => {
                                        h();
                                    });
                                };
                                let u = Qa;
                                const a = () => {
                                    u(), (u = D(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = F.O.client.events.mouse.up(() => {
                                        p(Ja);
                                    }),
                                    u = F.O.client.events.mouse.move(([t]) => {
                                        tr(e, (u) => {
                                            const r = c.current,
                                                n = d.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const o = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const v = ha((t) => e.applyStepTo(t), _, [e]),
                            C = v[0],
                            f = v[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const B = (e) => {
                            e.target.classList.contains(Ka) || (0, y.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Ua, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ja, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) || 0 !== e.button || ((0, y.G)('play'), C(Da.Next));
                                },
                                ref: n,
                                onMouseEnter: B,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ya, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, y.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        tr(e, (a) => {
                                                            if (!a) return;
                                                            const r = u(e),
                                                                n = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Da.Prev : Da.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                o().createElement('div', { ref: d, className: l()(Za, t.thumb) }),
                                o().createElement('div', { className: l()(Xa, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(qa, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) || 0 !== e.button || ((0, y.G)('play'), C(Da.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    rr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    nr = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: n,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(rr.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(rr.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(rr.area, r) },
                                o().createElement(sr, { className: n, classNames: i, api: m }, e),
                            ),
                            o().createElement(ar, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    sr = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, s.useEffect)(() => D(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(rr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(rr.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                sr.Default = nr;
                const or = { Vertical: r, Horizontal: a };
                let ir;
                !(function (e) {
                    (e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle');
                })(ir || (ir = {}));
                const lr = { type: ir.Idle };
                let cr;
                !(function (e) {
                    (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton');
                })(cr || (cr = {}));
                const dr = {
                        base: 'ArrowButton_base_8c',
                        base__gray: 'ArrowButton_base__gray_bd',
                        icon: 'ArrowButton_icon_af',
                        icon__4k: 'ArrowButton_icon__4k_23',
                        icon__back: 'ArrowButton_icon__back_28',
                        icon__forward: 'ArrowButton_icon__forward_ff',
                    },
                    _r = ({ onClick: e, direction: t, type: u = Be.Default, className: a, tooltipBody: r }) => {
                        const n = (0, s.useCallback)(() => {
                                (0, y.G)('highlight');
                            }, []),
                            i = (0, s.useCallback)(() => {
                                (0, y.G)('bp_slide'), e();
                            }, [e]);
                        return o().createElement(
                            Ye.i,
                            { body: r },
                            o().createElement(
                                'div',
                                { className: l()(dr.base, dr[`base__${u}`], a), onClick: i, onMouseEnter: n },
                                o().createElement('div', {
                                    className: l()(dr.icon, dr[`icon__${t}`], 2 === F.O.view.getScale() && dr.icon__4k),
                                }),
                            ),
                        );
                    },
                    mr = 'Bookmark_base_cc',
                    Er = 'Bookmark_container_72',
                    gr = 'Bookmark_container__start_b1',
                    pr = 'Bookmark_container__wide_14',
                    br = 'Bookmark_textWrapper_46',
                    hr = 'Bookmark_withTooltip_58',
                    Ar = 'Bookmark_text_6f',
                    vr = 'Bookmark_text__basic_01',
                    Cr = 'Bookmark_text__premium_b8',
                    fr = 'Bookmark_text__single_a0',
                    Dr = 'Bookmark_text__wide_4c',
                    Fr = 'Bookmark_text__disappeared_f2',
                    Br = 'Bookmark_textInner_b4',
                    wr = 'Bookmark_leftTextLine_0a',
                    Sr = 'Bookmark_rightTextLine_37',
                    Pr = ({ isWide: e, isDecorated: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(Ar, fr, e && Dr) },
                            t && o().createElement('div', { className: wr }),
                            o().createElement(
                                'div',
                                { className: Br },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && o().createElement('div', { className: Sr }),
                        ),
                    yr = (0, s.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: u,
                                tooltipTitle: a,
                                chapterStep: r,
                                mixClass: n,
                            },
                            i,
                        ) => {
                            const c = (0, s.useRef)(null);
                            (0, s.useImperativeHandle)(i, () => ({
                                width: () => {
                                    const e = c.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const d = (0, se.uF)(R.strings.battle_pass.tooltips.postProgress.body(), {
                                chapterStep: r,
                            });
                            return o().createElement(
                                'div',
                                { className: l()(mr, n), ref: c },
                                o().createElement(
                                    'div',
                                    { className: l()(Er, e && pr, !e && gr) },
                                    e
                                        ? o().createElement(
                                              Ye.i,
                                              { body: u, header: a, isEnabled: 'string' == typeof u },
                                              o().createElement(
                                                  'div',
                                                  { className: hr },
                                                  o().createElement(Pr, { isWide: e, isDecorated: !0 }),
                                              ),
                                          )
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: br },
                                                  o().createElement(
                                                      Ye.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: d,
                                                      },
                                                      o().createElement(Pr, { isWide: e }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  Ze.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      { className: l()(Ar, Cr) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: l()(Ar, vr, t && Fr) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var kr = u(1975),
                    Rr = u(7442),
                    Lr = u(156);
                const Nr = 'OptimizedProgressBar_base_1f',
                    xr = 'OptimizedProgressBar_wrapper_ab',
                    Tr = 'OptimizedProgressBar_background_ce';
                var Ir = u(7736);
                const Mr = ['api', 'value', 'maxValue', 'theme'];
                function Or() {
                    return (
                        (Or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Or.apply(this, arguments)
                    );
                }
                const Wr = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    $r = (e) => {
                        let t = e.api,
                            u = e.value,
                            a = e.maxValue,
                            r = void 0 === a ? 100 : a,
                            n = e.theme,
                            i = void 0 === n ? kr.uH : n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, Mr);
                        const c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            m = (0, pa.u)(0, u, r) / r,
                            E = (0, s.useCallback)(
                                (e) => {
                                    _.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, a) => {
                                            const r = u.offsetWidth - a.offsetWidth,
                                                n = e - Wr(u, t),
                                                s = (0, pa.u)(0, r, n);
                                            a.style.left = `${s}px`;
                                        })(e, c.current, _.current),
                                        d.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: a, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(a.offsetWidth * u) - 8e3),
                                                    s = e - Wr(a, t),
                                                    o = (0, pa.u)(0, n, s);
                                                r.style.left = `${o}px`;
                                            })(e, m, { line: d.current, container: c.current });
                                },
                                [m],
                            ),
                            g = (0, s.useMemo)(() => (0, Lr.VQ)(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: Nr, ref: c },
                                o().createElement(
                                    'div',
                                    { className: xr },
                                    o().createElement(
                                        'div',
                                        { style: g, className: Tr, ref: _ },
                                        o().createElement(Rr.J, { size: l.size }),
                                    ),
                                    o().createElement(
                                        kr.ko,
                                        Or({}, l, {
                                            lineRef: d,
                                            value: u,
                                            theme: i,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
                var Hr = u(1481);
                const Gr = 'VehicleInfo_base_b3',
                    zr = 'VehicleInfo_prefix_f6',
                    Ur = 'VehicleInfo_type_1b',
                    Vr = R.strings.battle_pass.progression.widget3dStyle,
                    jr = (0, s.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: u, isElite: a }) => {
                        const r = (0, s.useMemo)(() => {
                            const e = (0, se.BN)(u);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${a ? '_elite' : ''}`)})`,
                            };
                        }, [u, a]);
                        return o().createElement(
                            'div',
                            { className: Gr },
                            o().createElement('div', { className: zr }, Vr.forVehicle()),
                            lu(e),
                            o().createElement('div', { className: Ur, style: r }),
                            t,
                        );
                    }),
                    qr = 'Widget3dStyle_base_ae',
                    Yr = 'Widget3dStyle_title_20',
                    Zr = 'Widget3dStyle_base__closedChapter_d4',
                    Xr = 'Widget3dStyle_box_f8',
                    Kr = 'Widget3dStyle_light_82',
                    Qr = 'Widget3dStyle_image_f7',
                    Jr = 'Widget3dStyle_previewButton_03',
                    en = 'Widget3dStyle_box__hovered_c3',
                    tn = 'Widget3dStyle_footer_b9',
                    un = 'Widget3dStyle_caption_2b',
                    an = R.strings.battle_pass.progression.widget3dStyle;
                let rn;
                !(function (e) {
                    (e.None = ''), (e.Small = '_small'), (e.Medium = '_medium');
                })(rn || (rn = {}));
                const nn = (0, k.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: u }) => {
                        const a = (0, s.useState)(!1),
                            r = a[0],
                            n = a[1],
                            i = ye(),
                            c = i.controls,
                            d = i.model,
                            m = d.root.get(),
                            E = m.chapterState,
                            g = m.isStyleTaken,
                            p = d.widget3dStyle.get(),
                            b = p.styleName,
                            h = p.styleId,
                            A = ((e, t) => (2 !== t ? (e <= _.cJ.Small ? rn.Small : rn.Medium) : rn.None))(
                                (0, _.GS)().mediaSize,
                                viewEnv.getScale(),
                            ),
                            v = ((e, t, u) => {
                                const a = `style_3d_${e}_${t}${u}`;
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(a)})`,
                                };
                            })(t, h, A),
                            C = (0, se.uF)(an.currentStyle(), { name: b }),
                            f = (0, s.useCallback)(() => {
                                c.open3dStylePreview(t);
                            }, [c, t]);
                        return o().createElement(
                            'div',
                            { className: l()(qr, E === L.Completed && Zr), ref: e },
                            !g && u && o().createElement('div', { className: Yr }, an.titleNoChapterSelected()),
                            o().createElement(
                                'div',
                                { className: l()(Xr, r && en), onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
                                !g && t === Js && o().createElement('div', { className: Kr }),
                                o().createElement('div', { className: Qr, style: v }),
                                o().createElement('div', { className: Jr }, o().createElement(Hr.k, { onClick: f })),
                            ),
                            o().createElement(
                                'div',
                                { className: tn },
                                o().createElement('div', { className: un }, C),
                                o().createElement(jr, d.widget3dStyleVehicleInfo.get()),
                            ),
                        );
                    }),
                    sn = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: u,
                        pointsInLevel: a,
                        totalPointsInLevel: r,
                        currentLevel: n,
                    }) => (e > n ? u + t * (e - 2) + t * (a / r) : (e - 1) * t + u * (a / r)),
                    on = (e) => e + 1,
                    ln = (0, k.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: u,
                            currentLevelWidth: a,
                            level: r,
                            previousLevel: n,
                            currentPointsInLevel: i,
                            previousPointsInLevel: l,
                            currentPointsInChapter: c,
                            previousPointsInChapter: d,
                            theme: _,
                        }) => {
                            const m = ye().model,
                                E = m.root.get(),
                                g = E.isPaused,
                                p = E.showLevelsAnimations,
                                b = E.currentLevel,
                                h = m.levels.get(),
                                A = (0, s.useState)(0),
                                v = A[0],
                                C = A[1],
                                f = (0, s.useRef)(-1),
                                F = (0, s.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                B = F[0],
                                w = B.previousBaseEarnedPoints,
                                S = B.maxBasePoints,
                                P = B.baseProgressionSize,
                                y = F[1];
                            (0, s.useEffect)(() => {
                                if (g) return;
                                const e = f.current !== d,
                                    t = e ? n : r,
                                    s = a + (h.length - 1) * u,
                                    o = h[t - 1],
                                    _ = r <= h.length ? r - 1 : h.length - 1,
                                    m = h[_].value.levelPoints,
                                    E = sn({
                                        level: r,
                                        levelWidth: u,
                                        currentLevelWidth: a,
                                        pointsInLevel: i,
                                        totalPointsInLevel: m,
                                        currentLevel: b,
                                    }),
                                    p = o ? o.value.levelPoints : 0,
                                    A = sn({
                                        level: t > r ? r : t,
                                        levelWidth: u,
                                        currentLevelWidth: t < b ? u : a,
                                        pointsInLevel: l,
                                        totalPointsInLevel: p,
                                        currentLevel: b,
                                    }),
                                    v = e && t <= r ? A : E;
                                d !== c && u && (f.current = d),
                                    y({ maxBasePoints: s, previousBaseEarnedPoints: v, baseProgressionSize: E });
                            }, [g, u, a, r, n, c, l, i, d, b, h]);
                            const k = (0, s.useMemo)(
                                () =>
                                    Object.assign({}, kr.uu, {
                                        withStack: !0,
                                        type: Ir.r.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, s.useEffect)(() => {
                                    const e = b !== n || i !== l;
                                    if (!p && (e || c === d))
                                        return e && -1 === f.current
                                            ? (0, at.F)(() => {
                                                  C(on);
                                              }, 700)
                                            : void 0;
                                    C(on);
                                }, [c, d, p]),
                                (0, s.useEffect)(() => {
                                    if (p)
                                        return D(() => {
                                            t && t();
                                        });
                                }, [t, p]),
                                o().createElement($r, {
                                    key: v,
                                    animationSettings: k,
                                    deltaFrom: w,
                                    value: P,
                                    maxValue: S || void 0,
                                    api: e,
                                    theme: _,
                                })
                            );
                        },
                    ),
                    cn = R.strings.battle_pass.tooltips.progression.freePoints,
                    dn = (0, k.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: u,
                            currentLevelWidth: a,
                            progressChange: r,
                        }) => {
                            const n = ye().model,
                                i = n.root.get(),
                                c = i.chapterState,
                                d = i.currentLevel,
                                _ = i.previousLevel,
                                m = i.currentPointsInLevel,
                                E = i.previousPointsInLevel,
                                g = i.currentPointsInChapter,
                                p = i.previousPointsInChapter,
                                b = i.freePointsInLevel,
                                h = i.freePointsInChapter,
                                A = i.previousFreePointsInChapter,
                                v = i.previousFreePointsInLevel,
                                C = i.potentialLevel,
                                f = i.previousPotentialLevel,
                                D = n.levels.get(),
                                B = (() => {
                                    const e = (0, s.useState)(F.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, s.useEffect)(() => {
                                            const e = () => {
                                                u(F.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })(),
                                w = (c === L.NotStarted || c === L.Paused) && h - g > 0,
                                S = n.computes.getTotalLevelPoints(),
                                P = n.computes.getCurrentWidth(u, a, B, S),
                                y = g >= D.length * S,
                                k = {
                                    '--progress-line-base': Lr.Gh.line.bgColorBase,
                                    '--progress-line-disabled': Lr.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': Lr.Gh.line.bgColorFinished,
                                };
                            return o().createElement(
                                'div',
                                { className: ga.progressContainer },
                                w &&
                                    o().createElement(
                                        Ye.i,
                                        { header: cn.header(), body: cn.body() },
                                        o().createElement(
                                            'div',
                                            { className: ga.progress },
                                            o().createElement(ln, {
                                                api: t,
                                                progressChange: r,
                                                levelWidth: u,
                                                currentLevelWidth: a,
                                                level: C,
                                                previousLevel: f,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: v,
                                                currentPointsInChapter: h,
                                                previousPointsInChapter: A,
                                                theme: Lr.fV,
                                            }),
                                        ),
                                    ),
                                o().createElement('div', {
                                    className: l()(ga.progressBackground, y && ga.progressBackground__finished),
                                    style: Object.assign({ width: `${P}rem` }, k),
                                }),
                                o().createElement(
                                    Ze.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    o().createElement(
                                        'div',
                                        { className: l()(ga.progress, w && ga.progress__inactive) },
                                        o().createElement(ln, {
                                            api: e,
                                            levelWidth: u,
                                            currentLevelWidth: a,
                                            level: d,
                                            previousLevel: _,
                                            currentPointsInLevel: m,
                                            previousPointsInLevel: E,
                                            currentPointsInChapter: g,
                                            previousPointsInChapter: p,
                                            progressChange: r,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    _n = 'Background_base_f7',
                    mn = 'Background_default_c1',
                    En = 'Background_base__premium_e1',
                    gn = 'Background_rare_b6',
                    pn = 'Background_rareBg_ee',
                    bn = 'Background_pattern_81',
                    hn = 'Background_pattern__left_86',
                    An = 'Background_pattern__right_c6',
                    vn = 'Background_pattern__leftIndent_14',
                    Cn = 'Background_pattern__rightIndent_48',
                    fn = 'Background_pattern__completed_20',
                    Dn = 'Background_disabled_ba',
                    Fn = 'Background_inProgress_68',
                    Bn = 'Background_inProgressInner_0d',
                    wn = 'Background_inProgressPart_68',
                    Sn = 'Background_inProgressPart__left_76',
                    Pn = 'Background_inProgressPart__right_5b',
                    yn = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    kn = (0, k.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const u = ye().model.computes.cardStates(e, t),
                            a = u.cardStatus,
                            r = u.isRare,
                            n = u.isDisabled,
                            s =
                                a.current !== fe.IN_PROGRESS &&
                                ((e, t) => {
                                    switch (e) {
                                        case fe.NOT_STARTED:
                                            return t;
                                        case fe.COMPLETED:
                                            return !t;
                                        default:
                                            return console.warn(`Unsupported status for isIndent: ${e}`), !1;
                                    }
                                })(a.current, t);
                        return o().createElement(
                            'div',
                            { className: l()(_n, t && En) },
                            o().createElement('div', { className: mn }),
                            n && o().createElement('div', { className: Dn }),
                            a.current === fe.IN_PROGRESS &&
                                o().createElement(
                                    'div',
                                    { className: Fn },
                                    o().createElement('div', { className: l()(wn, Sn) }),
                                    !t && o().createElement('div', { className: Bn }),
                                    o().createElement('div', { className: l()(wn, Pn) }),
                                ),
                            r &&
                                o().createElement(
                                    'div',
                                    { className: gn },
                                    o().createElement('div', {
                                        className: l()(bn, hn, s && vn, a.current === fe.COMPLETED && fn),
                                        style: { backgroundImage: yn('left') },
                                    }),
                                    o().createElement('div', {
                                        className: l()(bn, An, !s && Cn, a.current === fe.COMPLETED && fn),
                                        style: { backgroundImage: yn('right') },
                                    }),
                                    a.current === fe.NOT_STARTED && o().createElement('div', { className: pn }),
                                ),
                        );
                    }),
                    Rn = {
                        base: 'Stage_base_46',
                        base__rewardTaken: 'Stage_base__rewardTaken_fc',
                        number: 'Stage_number_1f',
                        animatedNumber: 'Stage_animatedNumber_5b',
                        numberInProgress: 'Stage_numberInProgress_69',
                        title: 'Stage_title_ee',
                        glow: 'Stage_glow_9e',
                        base__inProgress: 'Stage_base__inProgress_d9',
                        animatedGlow: 'Stage_animatedGlow_11',
                        iconFinal: 'Stage_iconFinal_70',
                    },
                    Ln = R.strings.battle_pass.progression,
                    Nn = (0, k.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: u }) => {
                        const a = ye(),
                            r = a.model,
                            n = a.controls,
                            i = r.root.get(),
                            c = i.chapterState,
                            d = i.showLevelsAnimations,
                            _ = (0, s.useState)(!1),
                            m = _[0],
                            E = _[1],
                            g = r.computes.cardStates(e, !1).cardStatus,
                            p = r.computes.isRewardNeedTake(e, !1) || r.computes.isRewardNeedTake(e, !0),
                            b = r.computes.levelInfo(e).maxLevel === e,
                            h = g.current === fe.IN_PROGRESS,
                            A = c === L.NotStarted || c === L.Paused,
                            v = g.current === fe.COMPLETED && !p && !u,
                            C = (0, fa.useSpring)({
                                from: { stageOpacity: m ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, y.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: me },
                            }).stageOpacity,
                            f = (0, fa.useSpring)({
                                from: { sparkOpacity: m ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => E(!1),
                                config: { duration: 1500, easing: me },
                            }).sparkOpacity;
                        return (
                            (0, s.useEffect)(() => {
                                if (d && h)
                                    return (0, at.F)(() => {
                                        E(!0), n.finishLevelsAnimation();
                                    }, t + 100);
                            }, [d, h, t]),
                            o().createElement(
                                'div',
                                { className: l()(Rn.base, Rn[`base__${g.current}`], v && Rn.base__rewardTaken) },
                                h &&
                                    !A &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Rn.glow }),
                                        o().createElement(fa.animated.div, {
                                            style: { opacity: f },
                                            className: Rn.animatedGlow,
                                        }),
                                    ),
                                b && o().createElement('div', { className: Rn.iconFinal }),
                                h
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: Rn.numberInProgress },
                                              e,
                                              o().createElement(
                                                  fa.animated.div,
                                                  {
                                                      style: {
                                                          opacity: C,
                                                          transform: C.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Rn.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: Rn.title },
                                              A ? Ln.pausedStep() : Ln.currentStep(),
                                          ),
                                      )
                                    : o().createElement('div', { className: Rn.number }, e),
                            )
                        );
                    });
                var xn = u(8664);
                const Tn = 'ClosedStatus_base_8a',
                    In = 'ClosedStatus_icon_18',
                    Mn = 'ClosedStatus_icon__current_44',
                    On = 'ClosedStatus_icon__exit_fd',
                    Wn = 'ClosedStatus_icon__exitActive_65',
                    $n = 'ClosedStatus_icon__exitCurrentActive_4d',
                    Hn = 'ClosedStatus_icon__exitDone_b2',
                    Gn = 'ClosedStatus_title_a3',
                    zn = 'ClosedStatus_title__exit_16',
                    Un = 'ClosedStatus_title__exitActive_44',
                    Vn = 'ClosedStatus_title__exitDone_51';
                function jn() {
                    return (
                        (jn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        jn.apply(this, arguments)
                    );
                }
                const qn = (0, k.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: u,
                            baseUnlockProps: a,
                        }) => {
                            const r = ye().model,
                                n = r.root.get().isBattlePassPurchased,
                                s = r.computes.cardStates(e, !0).cardStatus.current === fe.IN_PROGRESS,
                                i = { exit: On, exitActive: s ? $n : Wn, exitDone: Hn },
                                c = { exit: zn, exitActive: Un, exitDone: Vn },
                                d = !n || t,
                                _ = s && d;
                            return o().createElement(
                                'div',
                                { className: Tn },
                                d &&
                                    o().createElement(
                                        xn.Z,
                                        jn({}, a, { classNames: i, onExited: u }),
                                        o().createElement('div', { className: l()(In, s && Mn) }),
                                    ),
                                _ &&
                                    o().createElement(
                                        xn.Z,
                                        jn({}, a, { classNames: d ? c : {} }),
                                        o().createElement(
                                            'div',
                                            { className: Gn },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Yn = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                    },
                    Zn = ({ completedIn: e, handleCompleteGlowAnimationExited: t, children: u }) => {
                        const a = {
                            exit: Yn.iconGlow__completedEnter,
                            exitActive: Yn.iconGlow__completedEnterActive,
                            exitDone: Yn.iconGlow__completedEnterDone,
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Yn.base, e && Yn.base__showAnimation) },
                            o().createElement(xn.Z, { in: !e, timeout: Es, classNames: a, onExited: t }, u),
                            o().createElement(
                                Ye.i,
                                { body: gs.tooltips.completed.got() },
                                o().createElement('div', { className: Yn.icon }),
                            ),
                        );
                    },
                    Xn = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    Kn = (0, k.Pi)(() => {
                        const e = ye().model.computes.currentLevelPoints(),
                            t = e.current,
                            u = e.total;
                        return o().createElement(
                            Ze.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            o().createElement(
                                'div',
                                { className: Xn.base },
                                o().createElement('div', { className: l()(Xn.value, Xn.value__current) }, t),
                                o().createElement('div', { className: Xn.divider }, '/'),
                                o().createElement('div', { className: l()(Xn.value, Xn.value__total) }, u),
                                o().createElement('div', { className: Xn.icon }),
                            ),
                        );
                    }),
                    Qn = 'Effects_glowWrapper_94',
                    Jn = 'Effects_glow_f7',
                    es = 'Effects_glow__active_d4',
                    ts = 'Effects_dust_5a',
                    us = 'Effects_dust__active_b4';
                function as() {
                    return (
                        (as =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        as.apply(this, arguments)
                    );
                }
                const rs = ({ baseUnlockProps: e }) => {
                        const t = { exit: Jn, exitActive: es, exitDone: Jn },
                            u = { exit: ts, exitActive: us, exitDone: ts };
                        return o().createElement(
                            'div',
                            null,
                            o().createElement(
                                xn.Z,
                                as({}, e, { classNames: t }),
                                o().createElement(
                                    'div',
                                    { className: Qn },
                                    o().createElement('div', { className: Jn }),
                                ),
                            ),
                            o().createElement(
                                xn.Z,
                                as({}, e, { classNames: u }),
                                o().createElement(
                                    'div',
                                    { className: Qn },
                                    o().createElement('div', { className: ts }),
                                ),
                            ),
                        );
                    },
                    ns = 'Status_base_1f',
                    ss = 'Status_base__inProgress_b8',
                    os = 'Status_base__premiumInProgress_5e',
                    is = 'Status_iconContainer_2f',
                    ls = 'Status_iconInner_30',
                    cs = 'Status_iconGlow_c5',
                    ds = 'Status_iconGlow__completed_b9',
                    _s = 'Status_iconGlow__hidden_24',
                    ms = 'Status_pointsWrapper_e8',
                    Es = 1500,
                    gs = R.strings.battle_pass,
                    ps = R.views.lobby.battle_pass,
                    bs = (0, k.Pi)(
                        ({
                            isPremium: e,
                            playCompleteAnimation: t,
                            playUnlockAnimation: u,
                            completeAnimationDelay: a = 0,
                            unlockAnimationDelay: r = 0,
                            baseTimeout: n = 0,
                            playUnlockAnimationSound: i = !0,
                            playCompleteAnimationSound: c = !0,
                            onAnimationDone: d,
                            initialAnimationDelay: _,
                            completedDuration: m,
                            level: E,
                        }) => {
                            const g = ye().model,
                                p = g.computes.cardStates(E, e),
                                b = p.cardStatus,
                                h = p.isDisabled,
                                A = g.computes.isRewardNeedTake(E, e),
                                v = (0, s.useState)(!1),
                                C = v[0],
                                f = v[1],
                                D = (0, s.useState)(!1),
                                F = D[0],
                                B = D[1],
                                w = (0, s.useState)(!0),
                                S = w[0],
                                P = w[1],
                                k = (0, s.useState)(!1),
                                R = k[0],
                                L = k[1],
                                N = b.current === fe.COMPLETED && !A && !h,
                                x = (h && e) || N || u,
                                T = !e && b.current === fe.IN_PROGRESS && b.potential !== fe.COMPLETED,
                                I = () => {
                                    c && (0, y.G)(De.IMPROVED_REWARD), f(!0);
                                };
                            (0, s.useEffect)(
                                () =>
                                    u
                                        ? (0, at.F)(() => {
                                              P(!1),
                                                  i &&
                                                      !R &&
                                                      (b.current === fe.IN_PROGRESS
                                                          ? (0, y.G)(De.UNLOCK_BIG)
                                                          : (0, y.G)(De.UNLOCK_SMALL));
                                          }, _ + r)
                                        : t
                                          ? (B(!0),
                                            (0, at.F)(() => {
                                                B(!1), I();
                                            }, _ + a))
                                          : void (F && B(!1)),
                                [u, t, F],
                            ),
                                (0, s.useEffect)(() => {
                                    if (t && R)
                                        return (0, at.F)(() => {
                                            I();
                                        }, a);
                                }, [t, R]);
                            const M = () => {
                                    !t && d && d(), L(!0);
                                },
                                O = { in: S, timeout: Es + n };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(ns, b.current === fe.IN_PROGRESS && (e ? os : ss)),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                x &&
                                    o().createElement(
                                        'div',
                                        { className: is },
                                        ((!t && N) || (C && !A)) &&
                                            o().createElement(
                                                Zn,
                                                {
                                                    completedIn: C,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        F && B(!1);
                                                    },
                                                },
                                                o().createElement('div', { className: l()(cs, ds, F && _s) }),
                                            ),
                                        !t &&
                                            !u &&
                                            h &&
                                            e &&
                                            o().createElement(
                                                Ze.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: ps.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(qn, {
                                                        level: E,
                                                        baseUnlockProps: O,
                                                        playUnlockAnimation: u,
                                                        handleUnlockAnimationExited: M,
                                                    }),
                                                ),
                                            ),
                                        u &&
                                            !R &&
                                            o().createElement(
                                                Ze.u,
                                                { contentId: ps.tooltips.BattlePassLockIconTooltipView('resId') },
                                                o().createElement(
                                                    'div',
                                                    { className: ls },
                                                    o().createElement(qn, {
                                                        level: E,
                                                        baseUnlockProps: O,
                                                        playUnlockAnimation: u,
                                                        handleUnlockAnimationExited: M,
                                                    }),
                                                    b.current === fe.IN_PROGRESS &&
                                                        o().createElement(rs, { baseUnlockProps: O }),
                                                ),
                                            ),
                                    ),
                                T && o().createElement('div', { className: ms }, o().createElement(Kn, null)),
                            );
                        },
                    ),
                    hs = 'CardContent_base_aa',
                    As = 'CardContent_status_6f',
                    vs = 'CardContent_buttonHolder_a0',
                    Cs = 'CardContent_buttonLight_95',
                    fs = 'CardContent_buttonInner_27',
                    Ds = 'CardContent_buttonInner__disabled_b1',
                    Fs = 'CardContent_button_3a',
                    Bs = 'CardContent_button__disabled_a8',
                    ws = 'CardContent_buttonBlink_db',
                    Ss = 'CardContent_buttonText_fc',
                    Ps = ['children'];
                function ys() {
                    return (
                        (ys =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ys.apply(this, arguments)
                    );
                }
                const ks = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Ps);
                    return o().createElement(
                        Ze.u,
                        ys(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function Rs() {
                    return (
                        (Rs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Rs.apply(this, arguments)
                    );
                }
                const Ls = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = o().createElement('div', { className: u }, e);
                        if (t.header || t.body) return o().createElement(Ye.i, t, a);
                        const r = t.contentId;
                        return r
                            ? o().createElement(Ze.u, Rs({}, t, { contentId: r }), a)
                            : o().createElement(ks, t, a);
                    },
                    Ns = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    xs = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = H.Big,
                        special: r,
                        value: n,
                        valueType: s,
                        style: i,
                        className: c,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const E = ((e, t) => {
                                if (void 0 === t || !te.includes(e)) return null;
                                switch (t) {
                                    case z.BATTLE_BOOSTER:
                                    case z.BATTLE_BOOSTER_REPLACE:
                                        return U.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case z.BATTLE_BOOSTER:
                                        return V.BATTLE_BOOSTER;
                                    case z.BATTLE_BOOSTER_REPLACE:
                                        return V.BATTLE_BOOSTER_REPLACE;
                                    case z.BUILT_IN_EQUIPMENT:
                                        return V.BUILT_IN_EQUIPMENT;
                                    case z.EQUIPMENT_PLUS:
                                        return V.EQUIPMENT_PLUS;
                                    case z.EQUIPMENT_TROPHY_BASIC:
                                        return V.EQUIPMENT_TROPHY_BASIC;
                                    case z.EQUIPMENT_TROPHY_UPGRADED:
                                        return V.EQUIPMENT_TROPHY_UPGRADED;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case z.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return V.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case z.PROGRESSION_STYLE_UPGRADED_1:
                                        return V.PROGRESSION_STYLE_UPGRADED_1;
                                    case z.PROGRESSION_STYLE_UPGRADED_2:
                                        return V.PROGRESSION_STYLE_UPGRADED_2;
                                    case z.PROGRESSION_STYLE_UPGRADED_3:
                                        return V.PROGRESSION_STYLE_UPGRADED_3;
                                    case z.PROGRESSION_STYLE_UPGRADED_4:
                                        return V.PROGRESSION_STYLE_UPGRADED_4;
                                    case z.PROGRESSION_STYLE_UPGRADED_5:
                                        return V.PROGRESSION_STYLE_UPGRADED_5;
                                    case z.PROGRESSION_STYLE_UPGRADED_6:
                                        return V.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case G.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case G.CURRENCY:
                                    case G.NUMBER:
                                        return o().createElement(j.A, { format: 'integral', value: Number(e) });
                                    case G.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, s);
                        return o().createElement(
                            'div',
                            { className: l()(Ns.base, Ns[`base__${a}`], c), style: i },
                            o().createElement(
                                Ls,
                                { tooltipArgs: _, className: Ns.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: l()(Ns.image, null == d ? void 0 : d.image) },
                                        E &&
                                            o().createElement('div', {
                                                className: l()(Ns.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: l()(Ns.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            o().createElement('div', {
                                                className: l()(Ns.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Ns.info,
                                                    Ns[`info__${e}`],
                                                    s === G.MULTI && Ns.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            u &&
                                o().createElement(
                                    Ls,
                                    { tooltipArgs: m },
                                    o().createElement('div', {
                                        className: l()(Ns.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ts = {
                        base: 'Rewards_base_46',
                        base__column: 'Rewards_base__column_5d',
                        base__inProgress: 'Rewards_base__inProgress_a5',
                        reward: 'Rewards_reward_1f',
                        base__tripleDefault: 'Rewards_base__tripleDefault_fd',
                        reward__0: 'Rewards_reward__0_7c',
                        reward__2: 'Rewards_reward__2_e3',
                        base__reverse: 'Rewards_base__reverse_14',
                        base__tripleInProgress: 'Rewards_base__tripleInProgress_85',
                        reward__1: 'Rewards_reward__1_11',
                        shine: 'Rewards_shine_3f',
                        base__animated: 'Rewards_base__animated_6a',
                        fade: 'Rewards_fade_96',
                        rewardInner: 'Rewards_rewardInner_ac',
                        changeReward: 'Rewards_changeReward_ee',
                        staticShine: 'Rewards_staticShine_e4',
                        explosion: 'Rewards_explosion_f6',
                    };
                function Is() {
                    return (
                        (Is =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Is.apply(this, arguments)
                    );
                }
                const Ms = (0, O.Om)((e) => {
                        const t = e.item,
                            u = e.name,
                            a = e.value,
                            r = e.overlayType,
                            n = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            name: t || u,
                            smallImage: J(e, H.Small),
                            bigImage: J(e, H.Big),
                            special: r,
                            value: a,
                            valueType:
                                ((o = u),
                                q.includes(o)
                                    ? G.MULTI
                                    : Y.includes(o)
                                      ? G.CURRENCY
                                      : Z.includes(o)
                                        ? G.NUMBER
                                        : X.includes(o)
                                          ? G.PREMIUM_PLUS
                                          : G.STRING),
                            tooltipArgs: ee({ tooltipId: n }, Number(s), { ignoreShowDelay: !0 }),
                        };
                        var o;
                    }),
                    Os = (0, k.Pi)(({ isPremium: e, levelNum: t, hasAnimation: u }) => {
                        const a = (0, _.GS)().mediaSize <= _.cJ.Small,
                            r = ye().model,
                            n = r.computes.cardStates(t, e).cardStatus,
                            i = r.computes.isRewardNeedTake(t, e),
                            c = r.computes.levelRewardItems(t, !0),
                            d = r.computes.levelRewardItems(t, !1),
                            m = e ? d : c,
                            E = (0, s.useState)(m),
                            g = E[0],
                            p = E[1],
                            b = n.current === fe.IN_PROGRESS,
                            h = (0, s.useRef)(!1);
                        return (
                            (0, s.useEffect)(() => {
                                if (h.current) return (0, at.F)(() => p(m), 1e3);
                                h.current = !0;
                            }, [m, h]),
                            o().createElement(
                                'div',
                                {
                                    className: l()(
                                        Ts.base,
                                        b && Ts.base__inProgress,
                                        e && Ts.base__reverse,
                                        u && Ts.base__animated,
                                        2 === m.length && Ts.base__column,
                                        3 === m.length && (b ? Ts.base__tripleInProgress : Ts.base__tripleDefault),
                                    ),
                                },
                                M.UI(g, (e, t) => {
                                    const r = Ms(e),
                                        n =
                                            r.name.includes(W.StyleProgressToken) ||
                                            r.name.includes(W.BattlePassSelectToken),
                                        s = (i && n) || u;
                                    return o().createElement(
                                        'div',
                                        { key: `reward__${r.name}${t}`, className: l()(Ts.reward, Ts[`reward__${t}`]) },
                                        s && o().createElement('div', { className: Ts.shine }),
                                        u &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', { className: Ts.staticShine }),
                                                o().createElement('div', { className: Ts.explosion }),
                                            ),
                                        o().createElement(
                                            xs,
                                            Is(
                                                {
                                                    size: a ? H.Small : H.Big,
                                                    image: a ? r.smallImage : r.bigImage,
                                                    className: Ts.rewardInner,
                                                },
                                                r,
                                            ),
                                        ),
                                    );
                                }),
                            )
                        );
                    }),
                    Ws = 'CardRewards_base_d6',
                    $s = 'CardRewards_base__completed_56',
                    Hs = (0, k.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: u = !1 }) => {
                        const a = ye().model,
                            r = a.computes.cardStates(e, u),
                            n = r.cardStatus,
                            s = r.isDisabled,
                            i = a.computes.isRewardNeedTake(e, u),
                            c = n.current === fe.COMPLETED && !i && !s && !t;
                        return o().createElement(
                            'div',
                            { className: l()(Ws, c && $s) },
                            o().createElement(Os, { levelNum: e, isPremium: u, hasAnimation: t }),
                        );
                    });
                function Gs() {
                    return (
                        (Gs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Gs.apply(this, arguments)
                    );
                }
                const zs = 100,
                    Us = 1800,
                    Vs = R.strings.battle_pass.progression,
                    js = (0, k.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: u,
                            maxVisibleCards: a,
                            showLevelsAnimations: r,
                            showBuyAnimations: n,
                        }) => {
                            const i = ye(),
                                c = i.model,
                                d = i.controls,
                                m = d.finishAnimation,
                                E = d.takeReward,
                                g = c.root.get(),
                                p = g.isBattlePassPurchased,
                                b = g.currentLevel,
                                h = g.previousLevel,
                                A = c.computes.levelInfo(t),
                                v = A.needTakePaid,
                                C = A.needTakeFree,
                                f = A.isFreeRewardChoiceEnabled,
                                D = A.isPaidRewardChoiceEnabled,
                                F = c.computes.cardStates(t, e).cardStatus,
                                B = c.computes.isRewardNeedTake(t, e),
                                w = F.current === fe.IN_PROGRESS,
                                S = F.current === fe.COMPLETED,
                                P = (0, s.useState)(!1),
                                y = P[0],
                                k = P[1],
                                R = (0, s.useState)(!1),
                                L = R[0],
                                N = R[1],
                                x = (0, _.GS)().mediaSize <= _.cJ.Small ? Ve.extraSmall : Ve.small,
                                T = (0, s.useRef)(B),
                                I = T.current;
                            (0, s.useEffect)(() => {
                                T.current = B;
                            }),
                                (0, s.useEffect)(() => {
                                    if (I && !B) {
                                        const e = (0, at.F)(() => {
                                                k(!1), m();
                                            }, Us),
                                            t = (0, at.F)(() => {
                                                N(!1);
                                            }, 2300);
                                        return (
                                            k(!0),
                                            N(!0),
                                            () => {
                                                e(), t();
                                            }
                                        );
                                    }
                                }, [B]);
                            const M = (() => {
                                    let s,
                                        o = 0,
                                        i = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        E = 300 * Math.ceil(b / 25);
                                    if (a && n && p) {
                                        const e = Math.floor(0.5 * a);
                                        let u = b - e,
                                            r = b + e,
                                            n = 0;
                                        u <= 0 && ((n = 1 - u), (r += n), (u = 1));
                                        const s = t < b && t >= u,
                                            l = t > b && t <= r,
                                            E = t === u;
                                        s ? (o = (t - u + 1) * zs) : l && (o = (t - u) * zs),
                                            (d = Boolean(w || s || l || E)),
                                            (_ = Boolean(w || E)),
                                            (m = Boolean(S && d)),
                                            (i = (a - n - 1) * zs),
                                            w && (c = (t - u + 1) * zs * 2.5);
                                    }
                                    if (a && r) {
                                        const n = Math.min(b - h, Math.floor(0.5 * a));
                                        let o = b - n;
                                        o <= 0 && (o = 1);
                                        const c = t < b && t >= o;
                                        c && ((i = (t - o + 1) * zs), e && (i += zs)),
                                            (m = Boolean(S && c)),
                                            (l = n * zs + zs * Math.trunc(n / 2) + E),
                                            r && (s = u);
                                    }
                                    return (
                                        L && ((E = 0), (i = Us), (m = Boolean(S))),
                                        t === b - 1 && (s = u),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: o,
                                            onAnimationDone: s,
                                            completeAnimationDelay: i,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: E,
                                        }
                                    );
                                })(),
                                O = (0, ba.z)(() => {
                                    E({ level: t });
                                }),
                                W = C || v,
                                $ = W && !(f || D);
                            return o().createElement(
                                'div',
                                { className: hs },
                                !e &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(Nn, {
                                            stepNumber: t,
                                            stageAnimationDelay: M.stageAnimationDelay,
                                            isRewardAnimationActive: y,
                                        }),
                                        W &&
                                            o().createElement(
                                                Ye.i,
                                                { isEnabled: $, body: Vs.btnRewardsUnavailable() },
                                                o().createElement(
                                                    'div',
                                                    { className: vs },
                                                    !$ && o().createElement('div', { className: Cs }),
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(fs, $ && Ds) },
                                                        o().createElement(
                                                            qe,
                                                            {
                                                                type: Ue.ghost,
                                                                size: x,
                                                                disabled: $,
                                                                onClick: O,
                                                                mixClass: l()(Fs, $ && Bs),
                                                            },
                                                            !$ && o().createElement('div', { className: ws }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Ss },
                                                                Vs.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                o().createElement(Hs, { levelNum: t, isPremium: e, isRewardAnimationActive: y }),
                                o().createElement(
                                    'div',
                                    { className: As },
                                    o().createElement(
                                        bs,
                                        Gs({ isPremium: Boolean(e), completedDuration: 500, level: t }, M),
                                    ),
                                ),
                            );
                        },
                    ),
                    qs = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__rare: 'Divider_base__rare_89',
                        base__completed: 'Divider_base__completed_ed',
                        base__premium: 'Divider_base__premium_82',
                        inner: 'Divider_inner_40',
                    },
                    Ys = ({ position: e, isPremium: t = !1, isRare: u = !1, status: a }) =>
                        o().createElement(
                            'div',
                            {
                                className: l()(
                                    qs.base,
                                    qs[`base__${a}`],
                                    qs[`base__${e}`],
                                    u && qs.base__rare,
                                    t && qs.base__premium,
                                ),
                            },
                            o().createElement('div', { className: qs.inner }),
                        ),
                    Zs = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__nonPremium: 'Card_base__nonPremium_ee',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    Xs = (0, k.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            maxLevels: u,
                            maxVisibleCards: a,
                            showBuyAnimations: r,
                            showLevelsAnimations: n,
                            onAnimationDone: i,
                            levelRef: c,
                        }) => {
                            const d = ye().model,
                                _ = d.root.get(),
                                m = _.currentPointsInLevel,
                                E = _.chapterState,
                                g = d.computes.cardStates(t, e),
                                p = g.cardStatus,
                                b = g.isRare,
                                h = d.computes.levelInfo(t).levelPoints,
                                A = !e && (p.current === fe.COMPLETED || p.current === fe.IN_PROGRESS),
                                v = 1 === t,
                                C = t === u,
                                f = v ? void 0 : d.computes.cardStates(t - 1, e),
                                D = C ? void 0 : d.computes.cardStates(t + 1, e),
                                F = (0, s.useRef)(null),
                                B = e ? (t - 1) * h : h;
                            (0, s.useImperativeHandle)(c, () => ({
                                width: () => {
                                    const e = F.current;
                                    return e ? e.offsetWidth : void 0;
                                },
                                offsetLeft: () => {
                                    const e = F.current;
                                    return e ? e.offsetLeft : void 0;
                                },
                                getOffsetLeftInArea: () => {
                                    const e = F.current;
                                    if (!e) return 0;
                                    const t = e.parentNode,
                                        u = t ? t.offsetLeft : 0;
                                    return e.offsetLeft + u;
                                },
                                getHTMLElement: () => F.current,
                            }));
                            const w =
                                    !v &&
                                    ((p.current === fe.NOT_STARTED && !b) ||
                                        ((null == f ? void 0 : f.isRare) && p.current !== fe.IN_PROGRESS) ||
                                        (null == f ? void 0 : f.cardStatus.current) === fe.IN_PROGRESS),
                                S =
                                    !C &&
                                    ((p.current === fe.COMPLETED && !b) ||
                                        ((null == D ? void 0 : D.isRare) && p.current !== fe.IN_PROGRESS) ||
                                        (null == D ? void 0 : D.cardStatus.current) === fe.IN_PROGRESS),
                                P = ((e, t, u, a) =>
                                    e === fe.COMPLETED
                                        ? 100
                                        : e !== fe.IN_PROGRESS || (t !== L.NotStarted && t !== L.Paused)
                                          ? 0
                                          : (100 * u) / a)(p.current, E, m, B),
                                y = { width: `${P}%` },
                                k = {
                                    '--small-card-width': '140rem',
                                    '--small-current-card-width': '224rem',
                                    '--big-card-width': '220rem',
                                    '--big-current-card-width': '340rem',
                                };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(Zs.base, Zs[`base__${p.current}`], !e && Zs.base__nonPremium),
                                    ref: F,
                                    style: k,
                                },
                                o().createElement(kn, { level: t, isPremium: e }),
                                o().createElement(js, {
                                    isPremium: e,
                                    stepNumber: t,
                                    maxVisibleCards: a,
                                    showLevelsAnimations: n,
                                    showBuyAnimations: r,
                                    onFinalAnimationDone: i,
                                }),
                                e &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: l()(Zs.totalPoints, Zs.totalPoints__default) },
                                            B,
                                        ),
                                        C &&
                                            o().createElement(
                                                'div',
                                                { className: l()(Zs.totalPoints, Zs.totalPoints__final) },
                                                u * h,
                                            ),
                                    ),
                                A && o().createElement('div', { className: Zs.progressShadow, style: y }),
                                !w &&
                                    o().createElement(Ys, {
                                        position: Ce.left,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                                !S &&
                                    o().createElement(Ys, {
                                        position: Ce.right,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                            );
                        },
                    ),
                    Ks = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: u,
                            isPremium: a,
                            sectionKey: r,
                            maxVisibleCards: n,
                        }) => {
                            const i = ye().model,
                                c = i.root.get(),
                                d = c.chapterID,
                                _ = c.currentLevel,
                                m = c.potentialLevel,
                                E = c.showBuyAnimations,
                                g = c.showLevelsAnimations,
                                p = i.levels.get(),
                                b = (0, s.useState)(!1),
                                h = b[0],
                                A = b[1],
                                v = () => {
                                    A(!0);
                                },
                                C = Boolean(n && a && E),
                                f = Boolean(n && g),
                                D = (a, r, n) => (a === r ? e : a === n ? u : t);
                            return o().createElement(
                                'div',
                                { className: l()(ga.row, !a && ga.row__basic) },
                                M.UI(p, (e, t) =>
                                    o().createElement(Xs, {
                                        key: `${d}_${r}_${t}`,
                                        showBuyAnimations: C && !h,
                                        showLevelsAnimations: f,
                                        levelRef: D(e.level, _, m),
                                        stepNumber: e.level,
                                        isPremium: a,
                                        maxLevels: p.length,
                                        maxVisibleCards: n,
                                        onAnimationDone: v,
                                    }),
                                ),
                            );
                        },
                    );
                function Qs() {
                    return (
                        (Qs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Qs.apply(this, arguments)
                    );
                }
                const Js = 1,
                    eo = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: u,
                            onProgressChanged: a,
                            widget3dStyleLeftRef: r,
                            shadowLipRef: n,
                            api: i,
                        }) => {
                            const c = ye().model,
                                d = c.root.get(),
                                m = d.currentLevel,
                                E = d.currentPointsInLevel,
                                g = d.showLevelsAnimations,
                                p = c.computes.isLayoutWithExtraWidget(),
                                b = c.levels.get(),
                                h = (0, s.useRef)({ update: () => {} }),
                                A = (0, s.useRef)({ update: () => {} });
                            i.current.moveProgressBars = (e) => {
                                h.current.update(e), A.current.update(e);
                            };
                            const v = (0, s.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                C = v[0],
                                f = v[1],
                                D = (0, s.useCallback)(() => {
                                    if (e.current) {
                                        const u = e.current,
                                            a = t.current,
                                            r = u ? u.width() : 0,
                                            n = a ? a.width() : 0;
                                        return !n && r
                                            ? { currentLevelWidth: r, levelWidth: 224 === r ? 140 : 220 }
                                            : { currentLevelWidth: r, levelWidth: n };
                                    }
                                }, [e, t]),
                                F = (0, _.GS)().mediaSize;
                            return (
                                (0, s.useEffect)(() => {
                                    (0, w.Eu)().then(() => {
                                        const e = D();
                                        if (e) {
                                            const t =
                                                Math.floor(
                                                    (viewEnv.getClientSizeRem().width - e.currentLevelWidth) /
                                                        e.levelWidth,
                                                ) + 1;
                                            f({
                                                levelWidth: e.levelWidth,
                                                currentLevelWidth: e.currentLevelWidth,
                                                maxCardsShown: t,
                                            });
                                        }
                                    });
                                }, [F, D, b.length, m, E]),
                                (0, s.useEffect)(() => {
                                    g && (0, y.G)(R.sounds.bp_progress_bar_start());
                                }, [g]),
                                (0, s.useEffect)(() => {
                                    a && a();
                                }, [m, E, a]),
                                o().createElement(
                                    'div',
                                    { className: ga.wrapper },
                                    !p &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(nn, { widget3dStyleRef: r, level: Js, isShowTitle: !0 }),
                                            o().createElement(
                                                'div',
                                                { className: l()(ga.decor, ga.decor__left) },
                                                o().createElement('div', { className: ga.decorBackground }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: ga.bookmarkBackground, ref: n },
                                                o().createElement(yr, {
                                                    isDisappeared: !0,
                                                    mixClass: ga.bookmarkLeftResponsive,
                                                }),
                                            ),
                                        ),
                                    o().createElement(
                                        'div',
                                        { className: ga.section },
                                        o().createElement(Ks, {
                                            sectionKey: 'baseCard',
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: u,
                                            maxVisibleCards: g ? C.maxCardsShown : 0,
                                            currentLevel: m,
                                        }),
                                        o().createElement(
                                            dn,
                                            Qs({ progressApi: h, freePointsApi: A, progressChange: a }, C),
                                        ),
                                        o().createElement(Ks, {
                                            sectionKey: 'basePremiumCard',
                                            isPremium: !0,
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: u,
                                            maxVisibleCards: C.maxCardsShown,
                                            currentLevel: m,
                                        }),
                                    ),
                                    !p &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                'div',
                                                { className: ga.decor },
                                                o().createElement('div', { className: ga.decorBackground }),
                                            ),
                                            o().createElement(nn, { level: 4 }),
                                        ),
                                )
                            );
                        },
                    );
                function to() {
                    return (
                        (to =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        to.apply(this, arguments)
                    );
                }
                function uo(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const ao = { allowedButtons: [cr.MainButton] },
                    ro = R.strings.battle_pass.progression;
                let no;
                !(function (e) {
                    (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel');
                })(no || (no = {}));
                const so = (0, k.Pi)(({ onScrollToEnd: e, onHorizontalScroll: t }) => {
                        const u = ye().model,
                            a = u.levels.get(),
                            r = u.root.get(),
                            n = r.currentLevel,
                            i = r.isBattlePassPurchased,
                            c = r.showBuyAnimations,
                            d = (0, s.useRef)({ moveProgressBars: () => {} }),
                            _ = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            g = (0, s.useRef)(null),
                            p = (0, s.useRef)(null),
                            b = (0, s.useRef)(null),
                            h = (0, s.useRef)(null),
                            A = (0, s.useRef)(0),
                            v = u.computes.isLayoutWithExtraWidget(),
                            C = (0, s.useState)(no.Hidden),
                            f = C[0],
                            F = C[1],
                            B = (0, s.useState)(no.Hidden),
                            S = B[0],
                            P = B[1],
                            y = (0, s.useState)(!1),
                            k = y[0],
                            R = y[1],
                            L = wa(),
                            N = L.animationScroll.scrollPosition,
                            x = L.applyScroll,
                            T = L.events,
                            I = L.handleMouseWheel,
                            M = L.getContainerSize,
                            O = L.getWrapperSize,
                            W = (function (e, t, u) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    n = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, s.useState)(lr),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = d.type === ir.Dragging ? 'move' : 'grab');
                                    }, [a, d.type]),
                                    (0, s.useEffect)(() => {
                                        if (d.type !== ir.Dragging) return;
                                        const e = (e) => {
                                            const u = a.current,
                                                s = r.current;
                                            if (!u || !s) return;
                                            const l = d.positionFrom - e.screenX,
                                                c = d.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(u, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        };
                                        function u() {
                                            window.removeEventListener('mousemove', e),
                                                document.body.removeEventListener('mouseleave', u),
                                                _({ type: 'scrollingToEnd' });
                                        }
                                        return (
                                            window.addEventListener('mousemove', e),
                                            window.addEventListener('mouseup', u),
                                            document.body.addEventListener('mouseleave', u),
                                            () => {
                                                window.removeEventListener('mousemove', e),
                                                    window.removeEventListener('mouseup', u),
                                                    document.body.removeEventListener('mouseleave', u);
                                            }
                                        );
                                    }, [i.scrollPosition, o, a, d, n, r, t, u]),
                                    (0, s.useEffect)(() => {
                                        if (d.type !== ir.End) return;
                                        const e = () => {
                                            _(lr);
                                        };
                                        return i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [i.scrollPosition, d.type, l]),
                                    (0, s.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (u &&
                                                u.allowedButtons &&
                                                -1 === u.allowedButtons.findIndex((t) => e.button === t)) ||
                                                _({
                                                    type: ir.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, a, u]),
                                    [d, _]
                                );
                            })(L, void 0, ao),
                            $ = W[0],
                            H = W[1],
                            G = (e) => {
                                $.type === ir.Dragging && H({ type: ir.End }), I(e);
                            },
                            z = (0, s.useMemo)(() => Object.assign({}, L, { handleMouseWheel: G }), []),
                            U = (0, s.useCallback)(
                                (e) => {
                                    const t = g.current ? g.current.offsetWidth : 0,
                                        u = p.current ? p.current.offsetWidth : 0;
                                    if (_.current) {
                                        const a = O();
                                        d.current.moveProgressBars({
                                            viewPort: _.current,
                                            horizontalScrollPosition: a ? e - a : e,
                                            leftOffset: t + u,
                                        }),
                                            R(v || e > t + 0.5 * u);
                                    }
                                },
                                [O, v],
                            ),
                            V = (0, s.useCallback)((e = !1) => {
                                const t = m.current;
                                let u = 0,
                                    a = 0;
                                const r = g.current ? g.current.offsetWidth : 0,
                                    n = p.current ? p.current.offsetWidth : 0;
                                t && ((u = t.width()), (a = t.offsetLeft() + r + n));
                                const s = _.current;
                                let o = 0;
                                if (u && s) {
                                    const t = 0.5 * s.offsetWidth;
                                    e && A.current
                                        ? (o = a + u - 0.5 * A.current - t)
                                        : ((o = a + 0.5 * u - t), (A.current = u));
                                }
                                return (o = Math.round(o < 0 ? 0 : o)), o;
                            }, []),
                            j = () => {
                                const e = _.current,
                                    t = m && m.current,
                                    u = E.current,
                                    a = g.current ? g.current.offsetWidth : 0,
                                    r = p.current ? p.current.offsetWidth : 0;
                                if (t) {
                                    const n = t.offsetLeft() + a + r,
                                        s = (null == u ? void 0 : u.offsetLeft()) + a + r,
                                        o =
                                            N.goal < n - e.offsetWidth
                                                ? no.NavToCurrentLevel
                                                : u && N.goal < s - e.offsetWidth
                                                  ? no.NavToPotentialLevel
                                                  : no.Hidden,
                                        i = (() => {
                                            switch (!0) {
                                                case u && N.goal > s + u.width():
                                                    return no.NavToPotentialLevel;
                                                case N.goal > n + t.width():
                                                    return no.NavToCurrentLevel;
                                                default:
                                                    return no.Hidden;
                                            }
                                        })();
                                    F(o), P(i);
                                }
                            },
                            q = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && _ && _.current) {
                                        const u = e.current,
                                            a = g.current ? g.current.offsetWidth : 0,
                                            r = p.current ? p.current.offsetWidth : 0;
                                        let n = 0,
                                            s = 0;
                                        u && ((n = u.width()), (s = u.offsetLeft() + a + r));
                                        const o = _.current;
                                        n && o && (t = s + 0.5 * n - 0.5 * o.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t));
                                    }
                                    return t;
                                })(e);
                                U(N.goal), x(t), j();
                            },
                            Y = (e) => {
                                switch (e) {
                                    case no.NavToCurrentLevel:
                                        return q(m);
                                    case no.NavToPotentialLevel:
                                        return q(E);
                                }
                            },
                            Z = (e) => {
                                switch (e) {
                                    case no.NavToCurrentLevel:
                                        return { type: Be.Default, tooltipBody: ro.backToCurrentStageArrow.descr() };
                                    case no.NavToPotentialLevel:
                                        return { type: Be.Gray, tooltipBody: ro.backToPotentialStageArrow.descr() };
                                }
                            },
                            X = () => {
                                const t = L.getBounds()[1];
                                U(N.goal), j(), e(N.goal === t);
                            };
                        return (
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        i && c && x(V());
                                    }),
                                [x, V, i, c],
                            ),
                            (0, s.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = M(),
                                                    t = N.goal;
                                                yield (0, w.Eu)(), yield Iu();
                                                const u = M(),
                                                    a = _.current,
                                                    r = L.getBounds()[1],
                                                    n = 0.25 * a.offsetWidth,
                                                    s = u && e && u !== e ? (t * u) / e : t;
                                                U(s), x(s > r - n ? r : s);
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (a, r) {
                                                    var n = e.apply(t, u);
                                                    function s(e) {
                                                        uo(n, a, r, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        uo(n, a, r, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => (0, at.F)(() => q(m), 700), [n]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                        t(!1), U(N.goal);
                                    },
                                    u = () => {
                                        t(!0), U(N.goal);
                                    };
                                return (
                                    T.on('rest', e),
                                    T.on('start', u),
                                    () => {
                                        T.off('rest', e), T.off('start', u);
                                    }
                                );
                            }, [$.type, T, U, t, N.goal]),
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: l()(ga.bookmark, ga.bookmark__start) },
                                    o().createElement(yr, {
                                        chapterStep: a.length,
                                        mixClass: l()(ga.bookmarkLeftFixed, k && ga.bookmarkLeftFixed__active),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: ga.scrollWrapper, ref: _, onClick: X, onMouseLeave: j, onWheel: X },
                                    o().createElement(
                                        or.Horizontal.Area.Default,
                                        { api: z, barClassNames: { base: ga.scrollBarPosition }, onDrag: X },
                                        o().createElement(eo, {
                                            api: d,
                                            currentCardRef: m,
                                            freeProgressionCutCardRef: b,
                                            potentialLevelCardRef: E,
                                            separatorRef: h,
                                            widget3dStyleLeftRef: g,
                                            shadowLipRef: p,
                                            onProgressChanged: X,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            ga.scrollToButton,
                                            ga.scrollToButton__backward,
                                            S !== no.Hidden && ga.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        _r,
                                        to(
                                            { onClick: () => Y(S), direction: Fe.back, className: ga.arrowButton },
                                            Z(S),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            ga.scrollToButton,
                                            ga.scrollToButton__forward,
                                            f !== no.Hidden && ga.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        _r,
                                        to(
                                            { onClick: () => Y(f), direction: Fe.forward, className: ga.arrowButton },
                                            Z(f),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    oo = (0, k.Pi)(() => {
                        const e = ye().model.computes.isLayoutWithExtraWidget(),
                            t = (0, s.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, s.useState)(!1),
                            n = r[0],
                            i = r[1];
                        return o().createElement(
                            'div',
                            { className: l()(ga.base, e && ga.base__isLayoutWithExtraWidget) },
                            o().createElement(
                                'div',
                                { className: l()(ga.shadow, ga.shadow__left) },
                                o().createElement('div', {
                                    className: l()(ga.additionalShadow, ga.additionalShadow__active),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(ga.shadow, ga.shadow__right) },
                                o().createElement('div', {
                                    className: l()(ga.additionalShadow, !u && n && ga.additionalShadow__active),
                                }),
                            ),
                            o().createElement(so, {
                                onScrollToEnd: (e) => {
                                    a(e);
                                },
                                onHorizontalScroll: (e) => {
                                    i(e);
                                },
                            }),
                        );
                    }),
                    io = (0, k.Pi)(() => {
                        const e = ye(),
                            t = e.model,
                            u = t.root,
                            a = t.computes,
                            r = e.controls,
                            n = u.get(),
                            s = n.chapterType,
                            i = n.chapterID,
                            c = n.actionType,
                            d = n.isPaused,
                            _ = a.isLayoutWithExtraWidget(),
                            m = c !== N.NoAction,
                            E = R.strings.battle_pass.progression.btnAllChapters(),
                            g = l()(Oe, _ && We);
                        return o().createElement(
                            'div',
                            { className: l()(Te, _ && Ie), style: (0, xe.W4)(i) },
                            s !== x.HOLIDAY &&
                                o().createElement(
                                    'div',
                                    { className: Ge },
                                    o().createElement(Ne, {
                                        caption: E,
                                        side: 'left',
                                        type: 'back',
                                        onClick: r.chapterChoice,
                                    }),
                                ),
                            !d && o().createElement('div', { className: g }, o().createElement(oo, null)),
                            o().createElement('div', { className: He }, m && o().createElement(Tu, null)),
                            o().createElement('div', { className: Me }, o().createElement(Ea, null)),
                            _ && o().createElement('div', { className: $e }, o().createElement(Pu, null)),
                        );
                    }),
                    lo = 'BattlePassProgressionsViewApp_base_40',
                    co = (0, k.Pi)(() => {
                        const e = ye(),
                            t = e.model,
                            u = e.controls,
                            a = t.root.get().showReplaceRewardsAnimations;
                        var r;
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    e(),
                                    () => {
                                        window.removeEventListener('resize', e), (document.body.style.height = 'auto');
                                    }
                                );
                            }, []),
                            (r = u.close),
                            P(B.n.ESCAPE, r),
                            (0, s.useEffect)(
                                () =>
                                    D(() => {
                                        u.viewLoad();
                                    }),
                                [],
                            ),
                            (0, s.useEffect)(() => {
                                a && (0, y.G)(R.sounds.bp_pick_up_award());
                            }, [a]),
                            o().createElement('div', { className: lo }, o().createElement(io, null))
                        );
                    });
                engine.whenReady.then(() => {
                    f().render(
                        o().createElement(Pe, null, o().createElement(v, null, o().createElement(co, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9485: (e, t, u) => {
                'use strict';
                u.d(t, { W4: () => i, cs: () => s, fW: () => o, wD: () => n });
                var a = u(8546);
                const r = (e) => {
                        switch (e) {
                            case a.$u.Micro:
                                return 's';
                            case a.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    n = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            r = e.$dyn(`c_${t}${a}`),
                            n = String(t).slice(-1),
                            s = e.$dyn(`default_${n}${a}`);
                        return r || s;
                    },
                    s = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            s = t ? 'BP' : '',
                            o = `${r(u)}${s}`;
                        return { backgroundImage: `url(${n(a, e, o)})` };
                    },
                    o = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = r(t);
                        return { backgroundImage: `url(${n(u, e, a)})` };
                    },
                    i = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${n(t.progression, e)})` }
                            : { backgroundImage: `url(${t.$dyn('common')})` };
                    };
            },
            8001: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => ne });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    o = u(9480),
                    i = u(3403),
                    l = u(6373),
                    c = u(7727),
                    d = u(5415);
                const _ = (e, t, u, a, r) => {
                    const n = R.images.gui.maps.icons.battlePass.awards_widget;
                    return r
                        ? `url(${n.$dyn(`${e.toLowerCase()}_${t}${u}_${a}_${r}`)})`
                        : `url(${n.$dyn(`${e.toLowerCase()}_${t}${u}_${a}`)})`;
                };
                var m = u(4769);
                const E = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    g = ({ size: e, isHover: t, disabled: u = !1, type: a = m.w2.Coin }) => {
                        const n = (0, d.GS)().mediaSize >= d.cJ.Medium ? m.S$.Medium : m.S$.Small;
                        return r().createElement(
                            'div',
                            { className: s()(E.base, E[`base__${e}`], E[`base__${e}${a}`], t && E.base__hovered) },
                            u
                                ? r().createElement('div', {
                                      className: E.bgDisabled,
                                      style: { backgroundImage: _(a, m.Hd.Background, m.fq.Disabled, e, n) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: E.bg,
                                          style: { backgroundImage: _(a, m.Hd.Background, m.fq.None, e, n) },
                                      }),
                                      r().createElement('div', {
                                          className: E.bgHover,
                                          style: { backgroundImage: _(a, m.Hd.Background, m.fq.Hover, e, n) },
                                      }),
                                  ),
                        );
                    },
                    p = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    b = ({ size: e, isHover: t, highlighted: u = !1, disabled: a = !1, type: n = m.w2.Coin }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? m.S$.Medium : m.S$.Small;
                        return r().createElement(
                            'div',
                            { className: s()(p.base, p[`base__${e}`], t && p.base__hovered) },
                            a
                                ? r().createElement('div', {
                                      className: s()(p.borderDisabled, p[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(n, m.Hd.Border, m.fq.Disabled, e, o) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: p.border,
                                          style: {
                                              backgroundImage: _(u ? m.w2.Collection : n, m.Hd.Border, m.fq.None, e, o),
                                          },
                                      }),
                                      r().createElement('div', {
                                          className: p.borderHover,
                                          style: { backgroundImage: _(n, m.Hd.Border, m.fq.Hover, e, o) },
                                      }),
                                  ),
                        );
                    };
                var h = u(2372),
                    A = u(9766);
                const v = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    C = ({ state: e, count: t, size: u, maxCount: a = 0 }) => {
                        switch (e) {
                            case D.InProgress:
                                return r().createElement(A.z, { text: `${t || 0} / ${a}` });
                            case D.Completed:
                                return r().createElement('div', { className: s()(v.base, v[`base__${u}`]) });
                            default:
                                return r().createElement(h.A, { format: 'integral', value: t });
                        }
                    },
                    f = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let D;
                !(function (e) {
                    (e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed');
                })(D || (D = {}));
                const F = ({
                        size: e,
                        count: t,
                        maxCount: u,
                        state: a = D.Default,
                        isLocked: n = !1,
                        disabled: o = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: s()(f.base, f[`base__${e}`], n && f.base__locked, o && f.base__disabled) },
                            r().createElement(C, { state: a, size: e, count: t, maxCount: u }),
                        ),
                    B = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    w = (e, t, u) => {
                        switch (!0) {
                            case u:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case t:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    S = ({ size: e, isHover: t, isDark: u = !0, disabled: a = !1, type: n }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? m.S$.Medium : m.S$.Small;
                        return r().createElement('div', {
                            className: s()(B.base, B[`base__${e}`], B[`base__${w(t, u, a)}`]),
                            style: {
                                backgroundImage: _(n, m.Hd.Icon, m.fq.None, e, n === m.w2.Collection ? m.S$.None : o),
                            },
                        });
                    },
                    P = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    y = (e, t) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case t:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    k = ({ size: e, title: t, isHover: u, disabled: a = !1, isGold: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: s()(P.base, P[`base__${e}`], P[`base__${y(a, u)}`], n && P.base__gold) },
                            t,
                        ),
                    L = {
                        base: 'ChoiceAward_base_0d',
                        base__big: 'ChoiceAward_base__big_ec',
                        base__disabled: 'ChoiceAward_base__disabled_f1',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_a0',
                        baseAppear: 'ChoiceAward_baseAppear_89',
                        shine: 'ChoiceAward_shine_d5',
                        shine_small_s: 'ChoiceAward_shine_small_s_f2',
                        shine_small_m: 'ChoiceAward_shine_small_m_de',
                        shine_big_s: 'ChoiceAward_shine_big_s_02',
                        shine_big_m: 'ChoiceAward_shine_big_m_ed',
                        shine__left: 'ChoiceAward_shine__left_2e',
                        shine__right: 'ChoiceAward_shine__right_64',
                        arrow: 'ChoiceAward_arrow_30',
                        blinkShape: 'ChoiceAward_blinkShape_89',
                        blink: 'ChoiceAward_blink_f0',
                        blinker: 'ChoiceAward_blinker_0c',
                    },
                    N = R.strings.battle_pass.awardsWidget,
                    x = ({ count: e, disabled: t = !1, onClick: u, size: n }) => {
                        const o = (0, a.useState)(!1),
                            i = o[0],
                            d = o[1],
                            _ = 1 === e ? N.title.awardSingle() : N.title.awardMultiple(),
                            E = t ? N.description.awardDisabled() : N.description.award(),
                            p = (0, a.useCallback)(() => {
                                t || (c.$.playClick(), u());
                            }, [t, u]);
                        return r().createElement(
                            l.i,
                            { body: E, isEnabled: Boolean(E) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        L.base,
                                        L[`base__${n}`],
                                        t ? L.base__disabled : L.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), d(!0);
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: p,
                                },
                                r().createElement(b, { size: n, isHover: i, type: m.w2.Award, disabled: t }),
                                r().createElement(g, { size: n, isHover: i, type: m.w2.Award, disabled: t }),
                                r().createElement(S, {
                                    size: n,
                                    isHover: i,
                                    type: m.w2.Award,
                                    disabled: t,
                                    isDark: !1,
                                }),
                                r().createElement(F, { size: n, count: e, disabled: t }),
                                r().createElement(k, { size: n, isHover: i, title: _, disabled: t, isGold: !0 }),
                                !t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(L.shine, L.shine__left) }),
                                        r().createElement('div', { className: s()(L.shine, L.shine__right) }),
                                        r().createElement('div', { className: L.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: L.blinkShape },
                                            r().createElement('div', { className: L.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    T = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    I = R.strings.battle_pass.awardsWidget,
                    M = ({ count: e, onClick: t, size: u }) => {
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1];
                        return r().createElement(
                            l.i,
                            { body: I.description.coin(), isEnabled: Boolean(I.description.coin()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(T.base, T[`base__${u}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), i(!0);
                                    },
                                    onMouseLeave: () => {
                                        i(!1);
                                    },
                                    onClick: () => {
                                        c.$.playClick(), t();
                                    },
                                },
                                r().createElement(b, { size: u, isHover: o }),
                                r().createElement(g, { size: u, isHover: o }),
                                r().createElement(S, { size: u, isHover: o, type: m.w2.Coin }),
                                r().createElement(F, { size: u, count: e }),
                                r().createElement(k, { size: u, isHover: o, title: I.title.coin() }),
                            ),
                        );
                    },
                    O = {
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
                    W = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const H = (e) => {
                    let t = e.size,
                        u = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        o = e.hide,
                        i = e.maximumNumber,
                        l = e.className,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, W);
                    const d = a ? null : u,
                        _ = 'string' == typeof d;
                    if ((d && !_ && d < 0) || 0 === d) return null;
                    const m = d && !_ && d > i,
                        E = s()(
                            O.base,
                            O[`base__${t}`],
                            n && O.base__animated,
                            o && O.base__hidden,
                            !d && O.base__pattern,
                            a && O.base__empty,
                            l,
                        );
                    return r().createElement(
                        'div',
                        $({ className: E }, c),
                        r().createElement('div', { className: O.bg }),
                        r().createElement('div', { className: O.pattern }),
                        r().createElement(
                            'div',
                            { className: s()(O.value, _ && O.value__text) },
                            m ? i : d,
                            m && r().createElement('span', { className: O.plus }, '+'),
                        ),
                    );
                };
                H.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var G = u(3815);
                const z = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    U = R.strings.battle_pass.awardsWidget,
                    V = ({ count: e, maxCount: t, newItemsCount: u, hasTrigger: n, size: o, onClick: i }) => {
                        const d = (0, a.useState)(!1),
                            _ = d[0],
                            E = d[1],
                            p = t === e,
                            h = o === m.W9.Small && n,
                            A = p ? U.description.collectionCompleted() : U.description.collection(),
                            v = (0, G.z)(() => {
                                c.$.playClick(), i();
                            });
                        return r().createElement(
                            l.i,
                            { body: A, isEnabled: Boolean(A) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(z.base, z[`base__${o}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), E(!0);
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                    onClick: v,
                                },
                                r().createElement(b, { size: o, isHover: _, type: m.w2.Coin, highlighted: h }),
                                r().createElement(g, { size: o, isHover: _ }),
                                r().createElement(S, { size: o, isHover: _, type: m.w2.Collection }),
                                r().createElement(F, {
                                    size: o,
                                    count: e,
                                    maxCount: t,
                                    state: p ? D.Completed : D.InProgress,
                                }),
                                r().createElement(k, { size: o, isHover: _, title: U.title.collection() }),
                                u > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: z.bubble },
                                        r().createElement(H, { size: 'small' }),
                                    ),
                            ),
                        );
                    },
                    j = {
                        base: 'CommanderAward_base_11',
                        base__big: 'CommanderAward_base__big_ce',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    q = R.strings.battle_pass.awardsWidget,
                    Y = ({ onClick: e, size: t }) => {
                        const u = (0, a.useState)(!1),
                            n = u[0],
                            o = u[1],
                            i = q.description.commander();
                        return r().createElement(
                            l.i,
                            { body: i, isEnabled: Boolean(i) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(j.base, j[`base__${t}`], n && j.base__hover),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), o(!0);
                                    },
                                    onMouseLeave: () => o(!1),
                                    onClick: () => {
                                        c.$.playClick(), e();
                                    },
                                },
                                r().createElement(b, { size: t, isHover: n }),
                                r().createElement(g, { size: t, isHover: n }),
                                r().createElement(k, { size: t, isHover: n, title: q.title.commander() }),
                                r().createElement('div', { className: j.icon }),
                            ),
                        );
                    },
                    Z = {
                        base: 'PointAward_base_6f',
                        base__big: 'PointAward_base__big_dc',
                        locked: 'PointAward_locked_7c',
                        lockedHover: 'PointAward_lockedHover_80',
                        locked__hidden: 'PointAward_locked__hidden_bb',
                        lockedHover__hidden: 'PointAward_lockedHover__hidden_17',
                        base__hover: 'PointAward_base__hover_50',
                    },
                    X = R.strings.battle_pass.awardsWidget,
                    K = ({ count: e, onClick: t, size: u, isLocked: n, hasExtra: o = !1 }) => {
                        const i = (0, a.useState)(!1),
                            d = i[0],
                            _ = i[1],
                            E = ((e, t) => {
                                switch (!0) {
                                    case e && t:
                                        return X.description.pointLockedExceptExtra();
                                    case e && !t:
                                        return X.description.pointLocked();
                                    default:
                                        return X.description.point();
                                }
                            })(n, o);
                        return r().createElement(
                            l.i,
                            { body: E, isEnabled: Boolean(E) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(Z.base, Z[`base__${u}`], d && Z.base__hover),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), _(!0);
                                    },
                                    onMouseLeave: () => {
                                        _(!1);
                                    },
                                    onClick: () => {
                                        c.$.playClick(), t();
                                    },
                                },
                                r().createElement(b, { size: u, isHover: d }),
                                r().createElement(g, { size: u, isHover: d }),
                                r().createElement(S, { size: u, isHover: d, type: m.w2.Point }),
                                r().createElement(F, { size: u, count: e, isLocked: n }),
                                r().createElement(k, { size: u, isHover: d, title: X.title.point() }),
                                r().createElement('div', {
                                    className: s()(Z.locked, Z[`locked__${u}`], !n && Z.locked__hidden),
                                }),
                                r().createElement('div', {
                                    className: s()(Z.lockedHover, Z[`lockedHover__${u}`], !n && Z.lockedHover__hidden),
                                }),
                            ),
                        );
                    };
                var Q = u(3215),
                    J = u(3946);
                const ee = (0, Q.q)()(
                        ({ observableModel: e, externalModel: t }) => {
                            const u = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                a = (0, J.Om)((e) => {
                                    const a = u.root.get(),
                                        r = a.bpbitCount,
                                        n = a.notChosenRewardCount,
                                        s = a.bpcoinCount,
                                        o = a.isChooseRewardsEnabled,
                                        i = a.isBattlePassCompleted,
                                        l = a.hasExtra,
                                        c = a.isSpecialVoiceTankmenEnabled,
                                        d = a.isBpBitEnabled,
                                        _ = a.isBpCoinEnabled,
                                        E = u.collectionEntryPoint.get(),
                                        g = E.collectionItemCount,
                                        p = E.newCollectionItemCount,
                                        b = E.maxCollectionItemCount,
                                        h = E.isFirstEnter,
                                        A = E.isCollectionsEnabled;
                                    return [
                                        {
                                            type: m.w2.Award,
                                            props: {
                                                size: e,
                                                count: n,
                                                disabled: !o,
                                                onClick: t.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: n > 0,
                                        },
                                        {
                                            type: m.w2.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: t.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: m.w2.Point,
                                            props: {
                                                size: e,
                                                count: r,
                                                isLocked: !i,
                                                hasExtra: l,
                                                onClick: t.createCallbackNoArgs('onBpbitClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: m.w2.Collection,
                                            props: {
                                                size: e,
                                                count: g,
                                                maxCount: b,
                                                newItemsCount: p,
                                                hasTrigger: h,
                                                onClick: t.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: A,
                                        },
                                        {
                                            type: m.w2.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                onClick: t.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: c,
                                        },
                                    ];
                                });
                            return Object.assign({}, u, { computes: { awardsList: a } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpPoints: e.createCallbackNoArgs('onBpbitClick'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    te = ee[0],
                    ue = ee[1],
                    ae = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        award__last: 'AwardsWrapper_award__last_b0',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    re = (0, i.Pi)(({ size: e }) => {
                        const t = ue().model;
                        return r().createElement(
                            'div',
                            { className: s()(ae.base, ae[`base__${e}`]) },
                            o.UI(
                                t.computes.awardsList(e),
                                (e, t, u) =>
                                    e.condition &&
                                    r().createElement(
                                        'div',
                                        { key: e.type, className: s()(ae.award, t === u.length - 1 && ae.award__last) },
                                        ((e, t) => {
                                            switch (e) {
                                                case m.w2.Award:
                                                    return r().createElement(x, t);
                                                case m.w2.Coin:
                                                    return r().createElement(M, t);
                                                case m.w2.Point:
                                                    return r().createElement(K, t);
                                                case m.w2.Collection:
                                                    return r().createElement(V, t);
                                                case m.w2.Commander:
                                                    return r().createElement(Y, t);
                                                default:
                                                    return console.warn('Unknown award type: ', e), null;
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    ne = ({ size: e = m.W9.Small, context: t = 'model' }) =>
                        r().createElement(te, { options: { context: t } }, r().createElement(re, { size: e }));
            },
            4769: (e, t, u) => {
                'use strict';
                let a, r, n, s, o;
                u.d(t, { Hd: () => s, S$: () => n, W9: () => r, fq: () => o, w2: () => a }),
                    (function (e) {
                        (e.Award = 'Award'),
                            (e.Coin = 'Coin'),
                            (e.Point = 'Point'),
                            (e.Collection = 'Collection'),
                            (e.Commander = 'Commander');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(r || (r = {})),
                    (function (e) {
                        (e.None = ''), (e.Small = 's'), (e.Medium = 'm');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = '');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = '');
                    })(o || (o = {}));
            },
            8596: (e, t, u) => {
                'use strict';
                u.d(t, { G4: () => B });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    s = u.n(n);
                const o = (e, t) => {
                    const u = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            u = e.path.$dyn('default');
                        return t || u;
                    })(e).$dyn(`${t.name}${u}`);
                };
                let i;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(i || (i = {}));
                const l = {
                    base: 'Emblem_base_be',
                    progress: 'Emblem_progress_37',
                    progress__small: 'Emblem_progress__small_42',
                    progress__completed: 'Emblem_progress__completed_69',
                    hideProgress: 'Emblem_hideProgress_b4',
                    progress__hidden: 'Emblem_progress__hidden_6d',
                    image: 'Emblem_image_dc',
                    image__micro: 'Emblem_image__micro_aa',
                    image__small: 'Emblem_image__small_ce',
                    extra: 'Emblem_extra_d4',
                    extra__micro: 'Emblem_extra__micro_f7',
                    extra__small: 'Emblem_extra__small_28',
                    hideLevel: 'Emblem_hideLevel_f2',
                    showLevel: 'Emblem_showLevel_c5',
                    hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                    showLevelSmall: 'Emblem_showLevelSmall_31',
                    hideLevelMicro: 'Emblem_hideLevelMicro_15',
                    showLevelMicro: 'Emblem_showLevelMicro_bc',
                    showIcon: 'Emblem_showIcon_c2',
                    showIconSmall: 'Emblem_showIconSmall_1d',
                    showIconMicro: 'Emblem_showIconMicro_f8',
                };
                var c = u(9485);
                const d = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    _ = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: o,
                        showProgressionCompleted: i,
                    }) => {
                        const l = r()(d.base, d[`base__${t}`]),
                            c = r()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${n}`],
                                i && d.text__hideWithDelay,
                                o && d.text__new,
                                a && d.text__rewardScreen,
                            ),
                            _ = r()(
                                d.textWithBlend,
                                o && d.text__new,
                                i && d.text__hideWithDelay,
                                d[`textWithBlend__${n}`],
                            ),
                            m = r()(d.text, d.text__blended, d[`text__${t}`], a && d.text__rewardScreen),
                            E = r()(
                                d.textMask,
                                u && d.textMask__gold,
                                a && d.textMask__animated,
                                u && a && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: c }, e),
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: E }),
                            ),
                        );
                    };
                var m = u(8546);
                const E = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    g = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case m.$u.Small:
                                    return 'l';
                                case m.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    p = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: l,
                            labelAnimation: d,
                            newLabelAnimation: p,
                            isChapterChosen: b = !1,
                            chapterID: h = 0,
                            seasonNum: A = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: C = !1,
                            isChapterSelection: f = !1,
                            isProgression: D = !1,
                        }) => {
                            let F = '',
                                B = '';
                            u === m.$u.Small
                                ? ((F = 'Small'), (B = '__small'))
                                : u === m.$u.Micro && ((F = 'Micro'), (B = '__micro'));
                            const w = a === m.Bq.SwitchedChapterRightNow,
                                S = a === m.Bq.CompletedRightNow,
                                P = ((e, t, u, a, r) => (e || r ? t || !u : t || !a))(f, v, C, b, D),
                                y = !D && !f;
                            return s().createElement(
                                s().Fragment,
                                null,
                                P
                                    ? s().createElement('div', {
                                          className: r()(E.icon, B && E[`icon${B}`], S && E[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(l, u);
                                                  if (y) {
                                                      if (v) {
                                                          const u = { path: e.icon, name: i.Season, id: A };
                                                          return o(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!b) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, h, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: r()(
                                                  E.label,
                                                  E[`label${B}`],
                                                  w && E.label__new,
                                                  w && E[`label__new${F}`],
                                                  !S && v && E.label__disabled,
                                                  E[`label__${d}${F}`],
                                                  n && E[`label__hasProgress${F}`],
                                                  n && E[`label__hasProgress${F}${D ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(_, {
                                              level: t,
                                              size: u,
                                              isGold: l,
                                              isFirstLevel: w,
                                              curState: d,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                E.label,
                                                E[`label${B}`],
                                                w && E.label__new,
                                                w && E[`label__new${F}`],
                                                E[`label__${p}${F}`],
                                                n && E[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(_, {
                                            level: e,
                                            size: u,
                                            isGold: l,
                                            isFirstLevel: w,
                                            curState: p,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var b = u(1975);
                const h = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    A = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const o = r()(h.base, h[`base__${n}`], u && h.base__completed, !u && a && h.base__hidden);
                            return s().createElement(
                                'div',
                                { className: o },
                                s().createElement(b.ko, {
                                    key: e.to,
                                    size: b.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                let C, f;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(C || (C = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(f || (f = {}));
                const D = (e, t, u, a, r) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: i.Chapter, id: a },
                            s = e ? C.Open : C.Closed,
                            l = ((e, t) =>
                                e
                                    ? f.Gold
                                    : t === m.Bq.Completed || t === m.Bq.CompletedRightNow
                                      ? f.Completed
                                      : f.Initial)(t, u),
                            c = r.length > 0 ? `_${r}` : '';
                        return { backgroundImage: `url(${o(n, { name: 'emblem', postfix: `${s}_${l}${c}` })})` };
                    },
                    F = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: i.Season, id: e };
                        return { backgroundImage: `url(${o(u, { name: 'extra', postfix: t })})` };
                    },
                    B = (0, n.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            o = e.isChapterChosen,
                            i = e.hasBeenActive,
                            c = void 0 !== i && i,
                            d = e.isChapterSelection,
                            _ = void 0 !== d && d,
                            E = e.isOpen,
                            g = void 0 !== E && E,
                            b = e.isProgression,
                            h = void 0 !== b && b,
                            C = e.showProgressBar,
                            f = void 0 === C || C,
                            B = e.isExtra,
                            w = void 0 !== B && B,
                            S = e.chapterID,
                            P = e.seasonNum,
                            y = ((e) => {
                                switch (e) {
                                    case m.$u.Small:
                                        return 'small';
                                    case m.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            k = a === m.Bq.CompletedRightNow,
                            R = n || a === m.Bq.Bought,
                            L = (a === m.Bq.Completed || k) && R,
                            N = (a === m.Bq.Completed || k) && !R,
                            x = L || N,
                            T = void 0 !== t.from,
                            I = f && ((T && o) || c);
                        return s().createElement(
                            'div',
                            { className: l.base },
                            w &&
                                s().createElement('div', {
                                    className: r()(l.extra, y && l[`extra__${y}`]),
                                    style: F(P, y),
                                }),
                            s().createElement(
                                'div',
                                { className: r()(l.image, y && l[`image__${y}`]), style: D(g, R, a, S, y) },
                                a !== m.Bq.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            p,
                                            v(
                                                {
                                                    hasProgression: T,
                                                    isGolden: R,
                                                    isProgressionCompleted: x,
                                                    isChapterChosen: o,
                                                    hasBeenActive: c,
                                                    isChapterSelection: _,
                                                    isProgression: h,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        I &&
                                            s().createElement(A, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: k,
                                                isProgressionCompleted: x,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, t, u) => {
                'use strict';
                let a, r, n, s;
                u.d(t, { $u: () => a, Bq: () => n }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(r || (r = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(s || (s = {}));
            },
            6254: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l, Z: () => i });
                var a = u(6483),
                    r = u.n(a),
                    n = u(6179),
                    s = u.n(n);
                const o = {
                    base: 'Identity_base_56',
                    base__chapter_choice: 'Identity_base__chapter_choice_df',
                    base__progression: 'Identity_base__progression_1c',
                    identityImage: 'Identity_identityImage_69',
                };
                let i;
                !(function (e) {
                    (e.PROGRESSION = 'progression'), (e.CHAPTER_CHOICE = 'chapter_choice');
                })(i || (i = {}));
                const l = ({ place: e }) =>
                    s().createElement(
                        'div',
                        { className: r()(o.base, o[`base__${e}`]) },
                        s().createElement('div', { className: o.identityImage }),
                    );
            },
            1481: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => _ });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    o = u(7727);
                const i = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    d = 'LoupeButton_hoverArea_d0',
                    _ = ({ onClick: e, hoverAreaClasses: t }) => {
                        const u = (0, a.useCallback)(() => (0, o.G)('highlight'), []),
                            n = (0, a.useCallback)(() => {
                                (0, o.G)('play'), e();
                            }, [e]),
                            _ = s()(d, t);
                        return r().createElement(
                            'div',
                            { className: i, onClick: n, onMouseEnter: u },
                            r().createElement('div', { className: l }),
                            r().createElement('div', { className: c }),
                            t && r().createElement('div', { className: _ }),
                        );
                    };
            },
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressLineImpose_base_80',
                    base__disabled: 'ProgressLineImpose_base__disabled_cc',
                    base__finished: 'ProgressLineImpose_base__finished_d4',
                    base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                    pattern: 'ProgressLineImpose_pattern_1c',
                    base__small: 'ProgressLineImpose_base__small_55',
                    gradient: 'ProgressLineImpose_gradient_35',
                    glow: 'ProgressLineImpose_glow_a5',
                    glow__left: 'ProgressLineImpose_glow__left_d8',
                };
            },
            6147: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, a] = deferred[i], n = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 1488),
        (() => {
            var e = { 1488: 0, 7737: 0, 1730: 0, 1937: 0, 8363: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        r,
                        [n, s, o] = u,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(599));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
