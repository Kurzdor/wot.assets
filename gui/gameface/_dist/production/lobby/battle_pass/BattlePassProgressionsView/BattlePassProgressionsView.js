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
                        A = o.extraLargeHeight,
                        h = o.largeHeight,
                        v = o.mediumHeight,
                        C = o.smallHeight,
                        f = o.extraSmallHeight,
                        F = { extraLarge: A, large: h, medium: v, small: C, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && _) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, r.H)(t, u, F);
                        if (u.largeWidth && E) return (0, r.H)(t, u, F);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, F);
                        if (u.smallWidth && p) return (0, r.H)(t, u, F);
                        if (u.extraSmallWidth && b) return (0, r.H)(t, u, F);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && A) return t;
                            if (u.largeHeight && h) return t;
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
                            lineRef: A,
                            onChangeAnimationState: h,
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
                                    lineRef: A,
                                    disabled: n,
                                    value: f.value,
                                    deltaFrom: f.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: v,
                                    onChangeAnimationState: h,
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
                            className: A,
                        }) => {
                            const h = g < a,
                                v = (0, s.useState)(l.S.Idle),
                                C = v[0],
                                f = v[1],
                                F = C === l.S.End,
                                D = C === l.S.Idle,
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
                                    return D
                                        ? P(l.S.Grow, t)
                                        : B
                                          ? P(l.S.Shrink, e)
                                          : w
                                            ? P(l.S.End, e)
                                            : void (F && p && p());
                            }, [P, u, F, B, D, w, p, t, e]);
                            const y = (0, s.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(h)), [h, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(h)), [h, e]),
                                R = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _(h, a), m(e)), [a, h, e]),
                                L = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(g - a)}%` }, _(h, a), m(e)),
                                    [a, h, g, e],
                                );
                            if (F) return null;
                            const N = r()(c.Z.base, A, h && 0 === g && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: D ? R : L, className: N },
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
                            A = p === s.V.In,
                            h = p === s.V.End,
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
                                if (A) {
                                    const u = e + t;
                                    return (0, n.F)(() => {
                                        _ && _(), C(s.V.End);
                                    }, u);
                                }
                            }, [C, A, _, t, e]);
                        const f = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            F = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [E ? 'left' : 'right']: '0',
                                }),
                                [E, t, e],
                            ),
                            D = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${E ? d : l}%` }),
                                [l, E, d],
                            );
                        return h
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: i.Z.base, style: D },
                                  r().createElement(
                                      'div',
                                      { style: v ? f : F, className: i.Z.delta },
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
                            A = (0, a.useCallback)(
                                (e) => {
                                    e === o.S.Shrink && b(!0), m && m(e);
                                },
                                [m],
                            ),
                            h = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
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
                                baseStyles: p ? v : h,
                            }),
                            u >= 0 &&
                                r().createElement(n.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: A,
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
                            A = void 0 === b ? 0 : b,
                            h = e.isEnabled,
                            v = void 0 === h || h,
                            C = e.targetId,
                            f = void 0 === C ? 0 : C,
                            F = e.onShow,
                            D = e.onHide,
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
                                    (i(u, A, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    F && F(),
                                    (w.current.isVisible = !0));
                            }, [u, A, r, S, F]),
                            y = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, A, { on: !1 }, S),
                                        w.current.isVisible && D && D(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, A, S, D]),
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
                                A = (0, n.useState)(() => m(i, l, d)),
                                h = A[0],
                                v = A[1];
                            return (
                                (0, n.useEffect)(() => {
                                    E.current ? v(m(p, l, d)) : (E.current = !0);
                                }, [d, p, l]),
                                (0, n.useEffect)(() => {
                                    b(i);
                                }, [i]),
                                (0, n.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                s().createElement(u.Provider, { value: h }, c)
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
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => _,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => f,
                        isFocused: () => v,
                        pxToRem: () => b,
                        remToPx: () => A,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
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
                    return 'rem' === e ? t : { x: A(t.x), y: A(t.y) };
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
                function A(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
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
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
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
                u.d(t, { Sw: () => n.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => b, Eu: () => A });
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
                    A = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
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
                    v = () => h(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var f = u(7572);
                const F = r.instance,
                    D = {
                        DataTracker: n.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => h(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => h(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            h(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
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
                            h(o.POP_OVER, {
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
                        handleViewEvent: h,
                        onBindingsReady: b,
                        onLayoutReady: A,
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
                        ClickOutsideManager: F,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = D;
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
                        Area: () => $a,
                        Bar: () => Ia,
                        DefaultScroll: () => Oa,
                        Direction: () => va,
                        defaultSettings: () => Ca,
                        useHorizontalScrollApi: () => Fa,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => ar, Bar: () => er, Default: () => ur, useVerticalScrollApi: () => Ha });
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
                    A = (e) => {
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
                    h = ['children'];
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
                        })(e, h);
                    return o().createElement(n.ZN, null, o().createElement(A, u, t));
                };
                var C = u(493),
                    f = u.n(C);
                const F = (e) => {
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
                var D = u(3138),
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
                                if (!a && D.O.view.isEventHandled()) return;
                                D.O.view.setEventHandled(), t(r), u && r.stopPropagation();
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
                let $, H, W, G, z;
                !(function (e) {
                    (e.left = 'left'), (e.right = 'right');
                })($ || ($ = {})),
                    (function (e) {
                        (e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted');
                    })(H || (H = {})),
                    (function (e) {
                        (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward');
                    })(W || (W = {})),
                    (function (e) {
                        (e.back = 'back'), (e.forward = 'forward');
                    })(G || (G = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gray = 'gray');
                    })(z || (z = {}));
                const U = [L.Active, L.Completed],
                    V = (0, T.q)()(
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
                                n = (0, O.Om)(() => t.root.get().chapterType === x.EXTRA),
                                s = (0, O.Om)(() => r() || n(), { equals: I.jv }),
                                o = (0, O.Om)(() => t.price.get().prices.length > 1),
                                i = (0, O.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                l = (0, O.Om)((e) => {
                                    const u = t.levels.get(),
                                        a = M.MH(u, e - 1);
                                    return (
                                        a || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, a, { maxLevel: u.length })
                                    );
                                }),
                                c = (0, O.Om)((e, t) => {
                                    const u = l(e);
                                    return t
                                        ? M.UI(u.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : M.UI(u.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                d = (0, O.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.freePointsInLevel,
                                        a = e.currentPointsInLevel,
                                        r = e.chapterState,
                                        n = e.isExtra,
                                        s = U.includes(r) || n ? a : u,
                                        o = l(1);
                                    return { current: s, total: null == o ? void 0 : o.levelPoints };
                                }),
                                _ = (0, O.Om)((e, u) => {
                                    const a = t.root.get(),
                                        r = a.chapterState,
                                        n = a.currentLevel,
                                        s = a.potentialLevel,
                                        o = a.currentPointsInChapter,
                                        i = a.freePointsInChapter,
                                        c = l(e),
                                        d = c.levelPoints,
                                        _ = c.maxLevel,
                                        m = u ? i : o,
                                        E = u ? s : n;
                                    return e < E || (E === _ && m === d * _)
                                        ? H.COMPLETED
                                        : e === E && (r !== L.NotStarted || m > 0)
                                          ? H.IN_PROGRESS
                                          : H.NOT_STARTED;
                                }),
                                m = (0, O.Om)((e, u, a, r) => {
                                    const n = t.root.get();
                                    return ((n.currentLevel - 1) * e + (n.currentPointsInLevel / r) * u) / a;
                                }),
                                E = (0, O.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                g = (0, O.Om)((e, t) => {
                                    const u = l(e),
                                        a = u.needTakeFree,
                                        r = u.needTakePaid;
                                    return t ? r : a;
                                }),
                                p = (0, O.Om)((e, u) => {
                                    const a = t.root.get(),
                                        r = a.isBattlePassPurchased,
                                        n = a.chapterState,
                                        s = l(e),
                                        o = _(e, !1);
                                    return {
                                        cardStatus: { current: o, potential: _(e, !0) },
                                        isRare: s.isRare && o !== H.IN_PROGRESS,
                                        isDisabled: (u && !r) || (n !== L.Active && o === H.NOT_STARTED),
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    isMulticurrency: o,
                                    getFreeFinalRewards: u,
                                    getPaidFinalRewards: a,
                                    hasCustomSettings: s,
                                    getFinalRewardTankmanInfo: i,
                                    currentLevelPoints: d,
                                    levelInfo: l,
                                    levelRewardItems: c,
                                    getCurrentWidth: m,
                                    getTotalLevelPoints: E,
                                    isRewardNeedTake: g,
                                    cardStates: p,
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
                    j = V[0],
                    q = V[1],
                    Y = {
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
                    X = [
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
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                class K extends o().PureComponent {
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
                                })(e, X)),
                            E = l()(Y.base, Y[`base__${n}`], Y[`base__${r}`], null == s ? void 0 : s.base),
                            g = l()(Y.icon, Y[`icon__${n}`], Y[`icon__${r}`], null == s ? void 0 : s.icon),
                            p = l()(Y.glow, null == s ? void 0 : s.glow),
                            b = l()(Y.caption, Y[`caption__${n}`], null == s ? void 0 : s.caption),
                            A = l()(Y.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            Z(
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
                            'info' !== n && o().createElement('div', { className: Y.shine }),
                            o().createElement('div', { className: g }, o().createElement('div', { className: p })),
                            o().createElement('div', { className: b }, t),
                            a && o().createElement('div', { className: A }, a),
                        );
                    }
                }
                K.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Q = u(9485);
                const J = 'BattlePassProgressionsViewContent_base_67',
                    ee = 'BattlePassProgressionsViewContent_base__extra_e2',
                    te = 'BattlePassProgressionsViewContent_header_76',
                    ue = 'BattlePassProgressionsViewContent_progression_7c',
                    ae = 'BattlePassProgressionsViewContent_progression__extraChapter_01',
                    re = 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                    ne = 'BattlePassProgressionsViewContent_footer_13',
                    se = 'BattlePassProgressionsViewContent_close_69';
                let oe, ie, le, ce, de, _e, me;
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
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice');
                })(oe || (oe = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(ie || (ie = {})),
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
                            (e.S48x48 = 's48x48');
                    })(le || (le = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ce || (ce = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(de || (de = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(_e || (_e = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(me || (me = {}));
                var Ee = u(2372);
                const ge = [
                        oe.Items,
                        oe.Equipment,
                        oe.Xp,
                        oe.XpFactor,
                        oe.Blueprints,
                        oe.BlueprintsAny,
                        oe.Goodies,
                        oe.Berths,
                        oe.Slots,
                        oe.Tokens,
                        oe.CrewSkins,
                        oe.CrewBooks,
                        oe.Customizations,
                        oe.CreditsFactor,
                        oe.TankmenXp,
                        oe.TankmenXpFactor,
                        oe.FreeXpFactor,
                        oe.BattleToken,
                        oe.PremiumUniversal,
                        oe.NaturalCover,
                        oe.BpCoin,
                        oe.BattlePassSelectToken,
                        oe.BattlaPassFinalAchievement,
                        oe.BattleBadge,
                        oe.BonusX5,
                        oe.CrewBonusX3,
                        oe.NewYearFillers,
                        oe.NewYearInvoice,
                        oe.EpicSelectToken,
                        oe.Comp7TokenWeeklyReward,
                        oe.BattleBoosterGift,
                        oe.OptionalDevice,
                        oe.FragmentAntimatter,
                        oe.CosmicLootbox,
                    ],
                    pe = [oe.Gold, oe.Credits, oe.Crystal, oe.FreeXp],
                    be = [oe.BattlePassPoints],
                    Ae = [oe.PremiumPlus, oe.Premium],
                    he = ['engravings', 'backgrounds'],
                    ve = ['engraving', 'background'],
                    Ce = (e, t = le.Small) => {
                        const u = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case le.S600x450:
                                        return 'c_600x450';
                                    case le.S400x300:
                                        return 'c_400x300';
                                    case le.S296x222:
                                        return 'c_296x222';
                                    case le.S232x174:
                                        return 'c_232x174';
                                    case le.Big:
                                        return 'c_80x80';
                                    case le.Small:
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
                                    const a = he[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            n = r.$dyn(u);
                                        return n ? `${n}` : `${r.$dyn(ve[e])}`;
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
                    fe = (e, t, u) => {
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
                    Fe = [le.Small, le.Big];
                let De;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(De || (De = {}));
                var Be = u(8546);
                let we;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(we || (we = {}));
                we.style, we.tankman;
                var Se = u(3649),
                    Pe = u(8613);
                const ye = 60,
                    ke = 3600,
                    Re = 86400,
                    Le = (Date.now(), Pe.Ew.getRegionalDateTime);
                Pe.Ew.getFormattedDateTime;
                function Ne(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / Re);
                    t -= u * Re;
                    const a = Math.trunc(t / ke);
                    t -= a * ke;
                    const r = Math.trunc(t / ye);
                    return (t -= r * ye), { days: u, hours: a, minutes: r, seconds: t };
                }
                const xe = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    Te = 'progressiveStyle',
                    Ie = 'style',
                    Me = 'tankman',
                    Oe = 'voicedTankman',
                    $e = 'vehicle',
                    He = 'battleQuest',
                    We = (e) => {
                        var t;
                        const u = 1 === e.length ? e[0] : e.includes($e) ? $e : Ie,
                            a = null != (t = e.find((e) => e !== u)) ? t : '';
                        return { mainReward: u, additionalReward: a };
                    },
                    Ge = {
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
                let ze, Ue;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ze || (ze = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ue || (Ue = {}));
                const Ve = ({
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
                        A = (0, s.useState)(u),
                        h = A[0],
                        v = A[1],
                        C = (0, s.useState)(!1),
                        f = C[0],
                        F = C[1],
                        D = (0, s.useState)(!1),
                        B = D[0],
                        w = D[1],
                        S = (0, s.useCallback)(() => {
                            r || (b.current && (b.current.focus(), v(!0)));
                        }, [r]),
                        P = (0, s.useCallback)(
                            (e) => {
                                h && null !== b.current && !b.current.contains(e.target) && v(!1);
                            },
                            [h],
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
                                r || (E && E(e), F(!1));
                            },
                            [r, E],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                r || (null !== c && (0, y.G)(c), m && m(e), u && S(), F(!0));
                            },
                            [r, c, m, S, u],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                r || (g && g(e), F(!1));
                            },
                            [r, g],
                        ),
                        M = l()(
                            Ge.base,
                            Ge[`base__${a}`],
                            {
                                [Ge.base__disabled]: r,
                                [Ge[`base__${t}`]]: t,
                                [Ge.base__focus]: h,
                                [Ge.base__highlightActive]: f,
                                [Ge.base__firstHover]: B,
                            },
                            n,
                        ),
                        O = l()(Ge.state, Ge.state__default);
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
                            a !== ze.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Ge.back }),
                                    o().createElement('span', { className: Ge.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: O },
                                o().createElement('span', { className: Ge.stateDisabled }),
                                o().createElement('span', { className: Ge.stateHighlightHover }),
                                o().createElement('span', { className: Ge.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Ge.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ve.defaultProps = { type: ze.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const je = (0, s.memo)(Ve);
                var qe = u(6373),
                    Ye = u(2056);
                const Xe = 'ComanderDescription_rewardTitle_02',
                    Ze = 'ComanderDescription_rewardName_12',
                    Ke = 'ComanderDescription_rewardDescription_a8',
                    Qe = 'ComanderDescription_rewardLockIcon_9c',
                    Je = 'ComanderDescription_rewardLockText_09',
                    et = 'ComanderDescription_showCommander_9d',
                    tt = 'ComanderDescription_close_3c';
                var ut = u(122);
                const at = 'Voice_base_e2',
                    rt = 'Voice_icon_da',
                    nt = 'Voice_icon__speaker_48',
                    st = 'Voice_icon__wave0_17',
                    ot = 'Voice_base__animate_d7',
                    it = 'Voice_icon__wave1_22',
                    lt = 'Voice_icon__wave2_08',
                    ct = R.strings.battle_pass.progression.extraChapterWidget,
                    dt = (() => {
                        const e = Math.ceil(3.75);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    _t = ({ groupName: e }) => {
                        const t = (0, s.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, s.useCallback)(() => {
                                u || ((0, y.G)(R.sounds.play()), (0, y.G)(e), a(!0));
                            }, [u, e]);
                        return (
                            (0, s.useEffect)(() => {
                                u &&
                                    (0, ut.F)(() => {
                                        a(!1);
                                    }, dt.totalDuration);
                            }, [u]),
                            o().createElement(
                                qe.i,
                                { body: ct.tooltip() },
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(at, u && ot),
                                        onClick: r,
                                        onMouseEnter: () => {
                                            (0, y.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${dt.duration}ms`,
                                            '--animation-iteration-count': dt.iterationCount,
                                        },
                                    },
                                    o().createElement('div', { className: l()(rt, nt) }),
                                    o().createElement('div', { className: l()(rt, st) }),
                                    o().createElement('div', { className: l()(rt, it) }),
                                    o().createElement('div', { className: l()(rt, lt) }),
                                ),
                            )
                        );
                    },
                    mt = R.strings.battle_pass.progression.extraChapterWidget,
                    Et = R.strings.battle_pass.awardsWidget.description.commander(),
                    gt = (0, k.Pi)(({ isBattlePassBought: e = !1, isPaidReward: t = !1 }) => {
                        const u = q(),
                            a = u.model,
                            r = u.controls,
                            n = a.root.get().specialVoiceTankmenCount,
                            s = a.computes.getFinalRewardTankmanInfo(t),
                            i = s.tankman,
                            l = s.groupName;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(_t, { groupName: l }),
                            o().createElement('div', { className: Xe }, mt.commander()),
                            o().createElement('div', { className: Ze }, i),
                            e &&
                                o().createElement(
                                    Ye.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Ke },
                                        o().createElement('div', { className: Qe }),
                                        o().createElement('div', { className: Je }, mt.labelWithBP()),
                                    ),
                                ),
                            n > 1 &&
                                o().createElement(
                                    qe.i,
                                    { body: Et, isEnabled: Boolean(Et) },
                                    o().createElement(
                                        'div',
                                        { className: et },
                                        o().createElement(
                                            je,
                                            { type: ze.primary, size: Ue.small, mixClass: tt, onClick: r.showTankmen },
                                            mt.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var pt = u(9766);
                const bt =
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
                const ht = {
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
                    vt = [
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
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const ft = (e) => {
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
                            A = e.onClick,
                            h = e.onMouseEnter,
                            v = e.onMouseLeave,
                            C = e.onMouseDown,
                            f = e.onMouseUp,
                            F = e.onFocus,
                            D = e.onBlur,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, vt);
                        const w = (0, s.useState)(!1),
                            S = w[0],
                            P = w[1],
                            k = (0, s.useState)(!1),
                            L = k[0],
                            N = k[1],
                            x = (0, s.useRef)(null),
                            T = () => !1 === i,
                            I = (e) => T() && ((e) => e.button === At.LEFT)(e),
                            M = bt(T, (e) => {
                                null == A || A(e);
                            }),
                            O = bt(I, (e) => {
                                P(!0), null == C || C(e), g && (0, y.G)(g);
                            }),
                            $ = bt(I, (e) => {
                                P(!1), null == f || f(e);
                            }),
                            H = bt(T, (e) => {
                                N(!0), null == h || h(e), m && (0, y.G)(m);
                            }),
                            W = bt(T, (e) => {
                                null == F || F(e);
                            }),
                            G = bt(T, (e) => {
                                null == D || D(e);
                            });
                        return o().createElement(
                            'div',
                            Ct(
                                {
                                    ref: x,
                                    className: l()(
                                        ht.base,
                                        i && ht.base__disabled,
                                        d && ht.base__visibleLabel,
                                        !i && S && ht.base__mouseDown,
                                        !i && L && ht.base__hovered,
                                        a,
                                    ),
                                    onClick: M,
                                    onMouseEnter: H,
                                    onMouseLeave: (e) => {
                                        N(!1), P(!1), null == v || v(e);
                                    },
                                    onMouseDown: O,
                                    onMouseUp: $,
                                    onFocus: W,
                                    onBlur: G,
                                },
                                B,
                            ),
                            o().createElement('div', {
                                className: l()(
                                    ht.icon,
                                    ht[`icon__${b}`],
                                    ht[`icon__${t}`],
                                    null == r ? void 0 : r.icon,
                                ),
                            }),
                            u &&
                                o().createElement(
                                    'div',
                                    { className: l()(ht.label, ht[`label__${b}`], null == r ? void 0 : r.label) },
                                    u,
                                ),
                        );
                    },
                    Ft = 'AdditionalRewardInfo_rewardText_6f',
                    Dt = 'AdditionalRewardInfo_subTitle_89',
                    Bt = 'AdditionalRewardInfo_subTitleTextWrapper_cf',
                    wt = 'AdditionalRewardInfo_subTitleText_bb',
                    St = 'AdditionalRewardInfo_subTitleText__truncated_9f',
                    Pt = 'AdditionalRewardInfo_infoIcon_33';
                function yt(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                function kt(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, r) {
                            var n = e.apply(t, u);
                            function s(e) {
                                yt(n, a, r, s, o, 'next', e);
                            }
                            function o(e) {
                                yt(n, a, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const Rt = R.strings.battle_pass.progression.extraChapterWidget,
                    Lt = (0, k.Pi)(({ additionalReward: e }) => {
                        const t = q().model,
                            u = t.widgetFinalRewards,
                            a = t.styleInfo,
                            r = t.vehicleInfo.get().vehicleName,
                            n = u.get().battleQuest,
                            i = (0, s.useState)(!1),
                            c = i[0],
                            d = i[1],
                            _ = (0, s.useRef)(null),
                            m = (0, s.useCallback)(
                                kt(function* () {
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
                                e === Ie &&
                                    o().createElement(pt.z, {
                                        classMix: Ft,
                                        text: Rt.vehicleSubTitle(),
                                        binding: { styleName: a.get().styleName },
                                    }),
                                e === He &&
                                    o().createElement(
                                        Ye.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: n },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Dt },
                                            o().createElement(
                                                'div',
                                                { className: Bt },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(wt, c && St), ref: _ },
                                                    (0, Se.uF)(Rt.styleSubTitle(), { vehicleName: r }),
                                                ),
                                            ),
                                            o().createElement('div', { className: Pt }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    Nt = 'StyleDescription_rewardTitle_81',
                    xt = 'StyleDescription_title_60',
                    Tt = 'StyleDescription_remark_0e',
                    It = 'StyleDescription_lockIcon_35',
                    Mt = R.strings.battle_pass.progression.extraChapterWidget,
                    Ot = (0, k.Pi)(({ additionalReward: e }) => {
                        const t = q(),
                            u = t.model,
                            a = u.styleInfo,
                            r = u.root,
                            n = t.controls,
                            s = r.get().isBattlePassPurchased;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(ft, { type: 'preview', size: 'normal', onClick: n.openPreview }),
                            o().createElement('div', { className: Nt }, Mt.styleTitle()),
                            o().createElement(pt.z, {
                                classMix: xt,
                                text: Mt.styleName(),
                                binding: { styleName: a.get().styleName },
                            }),
                            e && o().createElement(Lt, { additionalReward: e }),
                            !s &&
                                o().createElement(
                                    Ye.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Tt },
                                        o().createElement('div', { className: It }),
                                        o().createElement('div', null, Mt.styleRemark()),
                                    ),
                                ),
                        );
                    }),
                    $t = 'TankmanDescription_title_56',
                    Ht = 'TankmanDescription_name_8a',
                    Wt = 'TankmanDescription_skills_11',
                    Gt = 'TankmanDescription_skill_2d',
                    zt = 'TankmanDescription_skill__paidReward_6e',
                    Ut = 'TankmanDescription_description_78',
                    Vt = 'TankmanDescription_icon_fe',
                    jt = 'TankmanDescription_text_09',
                    qt = R.strings.battle_pass.progression.extraChapterWidget,
                    Yt = (0, k.Pi)(({ isBattlePassBought: e = !1, isPaidReward: t = !1 }) => {
                        const u = q().model.computes.getFinalRewardTankmanInfo(t),
                            a = u.tankman,
                            r = u.skills;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', { className: $t }, qt.tankman()),
                            o().createElement('div', { className: Ht }, a),
                            o().createElement(
                                'div',
                                { className: Wt },
                                M.UI(r, (e, u) =>
                                    o().createElement('div', {
                                        key: `${e}_${u}`,
                                        className: l()(Gt, t && zt),
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e}')`,
                                        },
                                    }),
                                ),
                            ),
                            e &&
                                o().createElement(
                                    Ye.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: Ut },
                                        o().createElement('div', { className: Vt }),
                                        o().createElement('div', { className: jt }, qt.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    Xt = () => {},
                    Zt = (e = 0, t, u = 0, a = Xt) => {
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
                                            1e3 * (t || (e > 120 ? ye : 1)),
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
                let Kt;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Kt || (Kt = {}));
                w.Sw.instance;
                const Qt = Zt,
                    Jt = (e) => (e < 10 ? '0' + e : e),
                    eu = 'Timer_base_0c',
                    tu = 'Timer_light_02',
                    uu = 'Timer_icon_c5',
                    au = 'Timer_value_1c',
                    ru = ({ expireTime: e = 0 }) => {
                        const t = Qt(e, 1),
                            u = `${(a = Ne(t)).days ? (0, Se.WU)(R.strings.common.duration.days(), { days: a.days }) : ''} ${Jt(a.hours)} : ${Jt(a.minutes)} : ${Jt(a.seconds)}`;
                        var a;
                        return o().createElement(
                            qe.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            o().createElement(
                                'div',
                                { className: eu },
                                o().createElement('div', { className: tu }),
                                o().createElement('div', { className: tu }),
                                o().createElement('div', { className: uu }),
                                o().createElement('div', { className: au }, u),
                            ),
                        );
                    },
                    nu = {
                        vehicleBg: 'VehicleDescription_vehicleBg_26',
                        vehicleCaption: 'VehicleDescription_vehicleCaption_d5',
                        rewardLabel: 'VehicleDescription_rewardLabel_95',
                        rewardDescription: 'VehicleDescription_rewardDescription_26',
                        rewardLockIcon: 'VehicleDescription_rewardLockIcon_b5',
                        rewardLockText: 'VehicleDescription_rewardLockText_b3',
                    },
                    su = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ou = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function iu(e) {
                    let t = '';
                    for (let u = ou.length - 1; u >= 0; u--) for (; e >= ou[u]; ) (t += su[u]), (e -= ou[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const lu = 'VehicleInfo_base_ef',
                    cu = 'VehicleInfo_type_40',
                    du = ({ vehicleLvl: e, vehicleName: t, vehicleType: u, isElite: a, classNames: r }) =>
                        o().createElement(
                            'div',
                            { className: l()(lu, null == r ? void 0 : r.base) },
                            iu(e),
                            o().createElement('div', {
                                className: l()(cu, null == r ? void 0 : r.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, Se.BN)(u)}${a ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    _u = R.strings.battle_pass.progression.extraChapterWidget,
                    mu = (0, k.Pi)(({ isBattlePassBought: e = !1, additionalReward: t }) => {
                        const u = q(),
                            a = u.model.vehicleInfo,
                            r = u.controls,
                            n = a.get(),
                            s = n.vehicleType,
                            i = n.isElite,
                            l = n.vehicleName,
                            c = n.vehicleShortName,
                            d = n.vehicleLvl,
                            m = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${n.vehicleNation})` },
                            E = (0, _.GS)().mediaSize > _.cJ.Medium ? 14 : 12,
                            g = l.length > E ? c : l;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', { className: nu.vehicleBg, style: m }),
                            o().createElement(ft, { type: 'preview', size: 'normal', onClick: r.openPreview }),
                            o().createElement('div', { className: nu.vehicleCaption }, _u.vehicleCaption()),
                            o().createElement(du, {
                                classNames: { base: nu.vehicleInfo },
                                vehicleLvl: d,
                                vehicleName: g,
                                vehicleType: s,
                                isElite: i,
                            }),
                            t &&
                                o().createElement(
                                    'div',
                                    { className: nu.rewardLabel },
                                    o().createElement(Lt, { additionalReward: t }),
                                ),
                            e &&
                                o().createElement(
                                    Ye.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    o().createElement(
                                        'div',
                                        { className: nu.rewardDescription },
                                        o().createElement('div', { className: nu.rewardLockIcon }),
                                        o().createElement('div', { className: nu.rewardLockText }, _u.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    Eu = 'ExtraChapterWidget_base_61',
                    gu = 'ExtraChapterWidget_widgetWrapper_00',
                    pu = 'ExtraChapterWidget_glow_e7',
                    bu = 'ExtraChapterWidget_content_a7',
                    Au = 'ExtraChapterWidget_content__left_be',
                    hu = 'ExtraChapterWidget_separatorBg_ab',
                    vu = 'ExtraChapterWidget_timer_9b',
                    Cu = 'Separator_base_c5',
                    fu = 'Separator_separatorBg_28',
                    Fu = ({ classNames: e }) =>
                        o().createElement(
                            'div',
                            { className: l()(Cu, null == e ? void 0 : e.base) },
                            o().createElement('div', { className: l()(fu, null == e ? void 0 : e.separatorBg) }),
                        );
                let Du;
                !(function (e) {
                    (e.Free = 'free'), (e.Paid = 'paid');
                })(Du || (Du = {}));
                const Bu = (e, t, u = !1) => {
                        switch (e.mainReward) {
                            case Oe:
                                return o().createElement(gt, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                    isPaidReward: t === Du.Paid,
                                });
                            case Me:
                                return o().createElement(Yt, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                    isPaidReward: t === Du.Paid,
                                });
                            case $e:
                                return o().createElement(mu, {
                                    isBattlePassBought: u,
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                });
                            case Ie:
                                return o().createElement(Ot, {
                                    additionalReward: null == e ? void 0 : e.additionalReward,
                                });
                            default:
                                console.warn('Unknown type: ', e.mainReward);
                        }
                    },
                    wu = (0, k.Pi)(() => {
                        const e = q().model,
                            t = e.root,
                            u = e.computes,
                            a = t.get(),
                            r = a.isBattlePassPurchased,
                            n = a.expireTime,
                            s = u.getFreeFinalRewards(),
                            i = u.getPaidFinalRewards();
                        return o().createElement(
                            'div',
                            { className: Eu },
                            o().createElement(
                                'div',
                                { className: gu },
                                o().createElement('div', { className: pu }),
                                o().createElement('div', { className: bu }, Bu(We(s), Du.Free)),
                                o().createElement(Fu, { classNames: { separatorBg: hu } }),
                                o().createElement('div', { className: l()(bu, Au) }, Bu(We(i), Du.Paid, !r)),
                            ),
                            o().createElement('div', { className: vu }, o().createElement(ru, { expireTime: n })),
                        );
                    }),
                    Su = {
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
                    Pu = R.strings.battle_pass.progression,
                    yu = R.strings.battle_pass.tooltips.footerBuyBtn,
                    ku = R.strings.battle_pass.tooltips.progression,
                    Ru = (e, t) =>
                        e
                            ? t
                                ? Pu.activatePausedExtraChapterDescr()
                                : Pu.activateExtraChapterDescr()
                            : Pu.activateChapterDescr();
                let Lu;
                !(function (e) {
                    (e.Red = 'red'), (e.Green = 'green'), (e.None = '');
                })(Lu || (Lu = {}));
                const Nu = (0, k.Pi)(() => {
                    const e = q(),
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
                        A = r === N.ActivateChapter && b > 0,
                        h = r !== N.ActivateChapter && i,
                        v = t.computes.isMulticurrency() && r === N.Buy,
                        C = (0, _.GS)().mediaSize <= _.cJ.Small ? Ue.small : Ue.medium,
                        f = ((e) => {
                            switch (e) {
                                case N.Buy:
                                    return {
                                        buyBtnLabel: Pu.battlePassBuyBtn(),
                                        tooltip: yu.battlePass.descr(),
                                        label: Pu.battlePassBuyDescr(),
                                        warning: Pu.seasonEndingDescr(),
                                        buttonType: ze.main,
                                        lightColor: Lu.Red,
                                    };
                                case N.BuyLevel:
                                    return {
                                        buyBtnLabel: Pu.episodeBuyBtn(),
                                        tooltip: yu.episode.descr(),
                                        label: Pu.episodeBuyDescr(),
                                        warning: Pu.seasonEndingDescr(),
                                        buttonType: ze.main,
                                        lightColor: Lu.None,
                                    };
                                case N.ActivateChapter:
                                    return {
                                        buyBtnLabel: Pu.activateChapter(),
                                        tooltip: yu.activateChapter.descr(),
                                        label: Ru(g, p),
                                        warning: Pu.footer.freePointsDescr(),
                                        buttonType: ze.primary,
                                        lightColor: Lu.Green,
                                    };
                                default:
                                    return {
                                        buyBtnLabel: '',
                                        tooltip: '',
                                        label: '',
                                        warning: '',
                                        buttonType: ze.ghost,
                                        lightColor: Lu.Green,
                                    };
                            }
                        })(r),
                        F = f.buyBtnLabel,
                        D = f.tooltip,
                        B = f.label,
                        w = f.warning,
                        S = f.buttonType,
                        P = f.lightColor,
                        y = A || h ? w : B,
                        k = ((e) => {
                            const t = Ne(e),
                                u = R.strings.battle_pass.status.timeLeft;
                            switch (!0) {
                                case t.days >= 1:
                                    return (0, Se.uF)(u.days(), { day: t.days });
                                case t.hours >= 1:
                                    return (0, Se.uF)(u.hours(), { hour: t.hours });
                                case t.minutes >= 1:
                                    return (0, Se.uF)(u.min(), { min: t.minutes });
                                default:
                                    return u.lessMin();
                            }
                        })(E);
                    return o().createElement(
                        'div',
                        { className: Su.base },
                        o().createElement('div', { className: l()(Su.light, Su[`light__${P}`]) }),
                        o().createElement(
                            'div',
                            { className: Su.labelContainer },
                            p && o().createElement('div', { className: Su.status }, Pu.footer.status.paused()),
                            o().createElement('div', { className: Su.label }, y),
                            h && o().createElement('div', { className: Su.days }, k),
                            A &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Su.points }, b),
                                    o().createElement(
                                        'div',
                                        { className: Su.info },
                                        o().createElement(
                                            qe.i,
                                            {
                                                header: ku.freePoints.header(),
                                                body: s ? ku.freePoints.bodyExceptExtra() : ku.freePoints.body(),
                                            },
                                            o().createElement('div', { className: Su.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        o().createElement(
                            'div',
                            { className: l()(Su.buttonWrapper, v && Su.buttonWrapper__multiCurrency) },
                            o().createElement(
                                qe.i,
                                { body: D },
                                o().createElement(
                                    je,
                                    { type: S, size: C, mixClass: Su.button, onClick: u.confirm },
                                    h && o().createElement('div', { className: Su.blink }),
                                    F,
                                ),
                            ),
                            v &&
                                o().createElement(
                                    qe.i,
                                    { body: Pu.footer.multicurrencyTooltip() },
                                    o().createElement('div', { className: Su.multicurrencyIcon }),
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
                function xu() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
                let Tu;
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
                })(Tu || (Tu = {}));
                var Iu = u(8596),
                    Mu = u(5262);
                function Ou(e, t, u) {
                    const a = (0, s.useContext)(n.YN);
                    let r = Object.entries(a).filter(([e, t]) => !0 === t && e in Mu.u);
                    return (
                        u && (r = r.filter((e) => u.includes(e[0]))),
                        e.reduce((e, u) => {
                            const a = r.map((e) =>
                                l()(t[((e, t) => e + '__' + t)(u, e[0])], t[((e, t) => e + (0, Se.e)(t))(u, e[0])]),
                            );
                            return (e[u] = l()(t[u], ...a)), e;
                        }, {})
                    );
                }
                const $u = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let Hu;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(Hu || (Hu = {}));
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
                        const _ = Ou(['leftBlock', 'rightBlock'], $u),
                            m = (0, s.useState)(d),
                            E = m[0],
                            g = m[1];
                        (0, s.useEffect)(() => g(!d), [d]);
                        const p = (0, s.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            b = l()($u.container, E && $u.container__shown);
                        return o().createElement(
                            'div',
                            { className: $u.base, style: p },
                            o().createElement(
                                'div',
                                { className: b },
                                Boolean(u) &&
                                    o().createElement(
                                        'div',
                                        { className: _.leftBlock },
                                        o().createElement(K, {
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
                                        o().createElement(K, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                            ),
                            o().createElement('div', { className: $u.view }, a),
                        );
                    },
                );
                var Wu = u(8001);
                const Gu = 'Header_base_6a',
                    zu = 'Header_labels_ec',
                    Uu = 'Header_title_3d',
                    Vu = 'Header_chapterWrapper_6c',
                    ju = 'Header_chapterText_57',
                    qu = 'Header_chapterText__overflow_ce',
                    Yu = 'Header_chapterStatus_2e',
                    Xu = 'Header_date_f2',
                    Zu = 'Header_titleButtons_e8',
                    Ku = 'Header_titleButton_5f',
                    Qu = 'Header_logo_84',
                    Ju = 'Header_awards_92',
                    ea = 'Header_flag_3d',
                    ta = 'Header_flag__isChapterChosen_ea',
                    ua = 'Header_flag__isChapterNotChosen_d8',
                    aa = 'Header_emblem_56',
                    ra = 'Header_emblem__isChapterNotChosen_fd',
                    na = 'Header_chapterLogoIcon_6b';
                function sa(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                function oa(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, r) {
                            var n = e.apply(t, u);
                            function s(e) {
                                sa(n, a, r, s, o, 'next', e);
                            }
                            function o(e) {
                                sa(n, a, r, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let ia;
                !(function (e) {
                    (e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium');
                })(ia || (ia = {}));
                const la = R.strings.battle_pass,
                    ca = 'auto',
                    da = (0, k.Pi)(() => {
                        const e = q(),
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
                            A = (0, s.useState)(!1),
                            h = A[0],
                            v = A[1],
                            C = (0, s.useState)(ca),
                            f = C[0],
                            F = C[1],
                            D = (0, _.GS)().mediaSize,
                            B = D <= _.cJ.Medium ? Be.$u.Small : Be.$u.Medium,
                            S = D <= _.cJ.Medium ? ia.Small : ia.Medium,
                            P = (0, s.useRef)(null),
                            y = (0, s.useRef)(null),
                            k =
                                (N = n) === L.Paused
                                    ? la.progression.header.paused()
                                    : N === L.NotStarted
                                      ? la.progression.header.inactive()
                                      : void 0;
                        var N;
                        const T = (0, s.useRef)(0),
                            I = n === L.Completed,
                            M = p === x.EXTRA,
                            O = () => (I ? Be.Bq.Completed : m ? Be.Bq.Bought : Be.Bq.Free),
                            $ = { level: d, from: E },
                            H = n === L.Active,
                            W = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))($) || n !== L.NotStarted,
                            G = W && O() !== Be.Bq.Completed,
                            z = O() === Be.Bq.Bought,
                            U = new Date(1e3 * c),
                            V = Math.trunc(g / 86400),
                            j = la.chapter.fullName.$num(r),
                            Y = u.computes.hasCustomSettings()
                                ? (0, Se.uF)(la.progression.season.end.special(), {
                                      endTime: Le(c, Tu.DayMonthFullTime),
                                  })
                                : (0, Se.uF)(la.progression.season.end.normal(), {
                                      seasonNum: iu(i),
                                      seasonName: la.season.fullName.$num(i),
                                      endDay: U.getDate(),
                                      endMonth: R.strings.menu.dateTime.months.$num(U.getMonth() + 1),
                                  }),
                            X = (0, Se.uF)(la.progression.seasonEndingTooltip(), { day: V }),
                            Z = (0, Se.uF)(la.progression.header.chapter.status(), { chapterName: j }),
                            J = (0, s.useCallback)(
                                (e) => {
                                    e > T.current && (T.current = e);
                                },
                                [T],
                            ),
                            ee = (0, s.useCallback)(
                                oa(function* () {
                                    yield (0, w.Eu)(), yield xu();
                                    const e = P.current,
                                        t = y.current;
                                    e &&
                                        t &&
                                        (J(t.offsetWidth),
                                        k
                                            ? (v(T.current >= e.offsetWidth - S),
                                              F(e.offsetWidth / viewEnv.getScale() - S + 'rem'))
                                            : (v(T.current >= e.offsetWidth), F(ca)));
                                }),
                                [J, k, S],
                            );
                        return (
                            (0, s.useEffect)(
                                () => (
                                    ee(),
                                    engine.on('clientResized', ee),
                                    () => {
                                        engine.off('clientResized', ee);
                                    }
                                ),
                                [n],
                            ),
                            o().createElement(
                                'div',
                                { className: Gu },
                                o().createElement(
                                    'div',
                                    { className: Qu },
                                    o().createElement('div', {
                                        className: l()(ea, G && ta, b.includes(n) && ua),
                                        style: (0, Q.fW)(r, B),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: l()(aa, b.includes(n) && ra) },
                                        o().createElement(Iu.G4, {
                                            progression: $,
                                            size: B,
                                            battlePassState: O(),
                                            hasBattlePass: m,
                                            isChapterChosen: H,
                                            isProgression: !0,
                                            chapterID: r,
                                            hasBeenActive: W,
                                            showProgressBar: !1,
                                            isOpen: G,
                                            isExtra: M,
                                            seasonNum: i,
                                        }),
                                        G && o().createElement('div', { className: na, style: (0, Q.cs)(r, z, B) }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: zu },
                                    o().createElement(
                                        'div',
                                        { className: Uu },
                                        o().createElement(
                                            qe.i,
                                            { body: X, isEnabled: Boolean(g) },
                                            o().createElement('div', { className: Xu }, Y),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Vu, ref: P },
                                            o().createElement(
                                                'div',
                                                { style: { maxWidth: `${f}` } },
                                                o().createElement(
                                                    qe.i,
                                                    { body: Z, isEnabled: h },
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(ju, h && qu), ref: y },
                                                        Z,
                                                    ),
                                                ),
                                            ),
                                            k && o().createElement('div', { className: Yu }, k),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Zu },
                                            o().createElement(
                                                'div',
                                                { className: Ku },
                                                o().createElement(K, {
                                                    caption: M ? la.progression.aboutExtra() : la.progression.about(),
                                                    type: Hu.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Ku },
                                                o().createElement(K, {
                                                    caption: la.howToEarnPoints.title(),
                                                    type: Hu.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Ju },
                                    o().createElement(Wu.Z, { context: 'model.awardsWidget' }),
                                ),
                            )
                        );
                    }),
                    _a = {
                        base: 'Progression_base_52',
                        base__isExtra: 'Progression_base__isExtra_a3',
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
                var ma = u(7515),
                    Ea = u(3815);
                function ga(e, t, u = []) {
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
                function pa(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ba(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return ba(e, t);
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
                function ba(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                function Aa(e, t, u) {
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
                var ha = u(7030);
                let va;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(va || (va = {}));
                const Ca = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    fa = ({
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
                            return n <= r ? 0 : (0, ma.u)(r, n, u);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? Ca : l,
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
                                            for (var a, r = pa(t(e).values()); !(a = r()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, s.useMemo)(() => ({ on: u, off: a, trigger: r }), []);
                                })(),
                                E = Aa(
                                    () => {
                                        D.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, ha.useSpring)(() => ({
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
                                A = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            n = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * u + n + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                h = (0, s.useCallback)(
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
                                            n = A(t, e, a);
                                        h(n);
                                    },
                                    [h, A, c.step],
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
                                        F(() => {
                                            const e = d.current;
                                            e &&
                                                (h(o(e, p.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [h, p.scrollPosition.goal],
                                ),
                                B = (0, Ea.z)(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && h(t, { immediate: !0 }),
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
                                    applyScroll: h,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: p,
                                    recalculateContent: B,
                                    events: { on: m.on, off: m.off },
                                }),
                                [p.scrollPosition, h, v, m.off, m.on, B, C, b, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Fa = fa({
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
                        getDirection: (e) => (e.deltaY > 1 ? va.Next : va.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Da = 'HorizontalBar_base_49',
                    Ba = 'HorizontalBar_base__nonActive_82',
                    wa = 'HorizontalBar_leftButton_5f',
                    Sa = 'HorizontalBar_rightButton_03',
                    Pa = 'HorizontalBar_track_0d',
                    ya = 'HorizontalBar_thumb_fd',
                    ka = 'HorizontalBar_rail_32',
                    Ra = 'disable',
                    La = { pending: !1, offset: 0 },
                    Na = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    xa = () => {},
                    Ta = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ia = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Na, onDrag: a = xa }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(La),
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
                                    l = (0, ma.u)(0, 1, s / (r - a)),
                                    _ = (t.offsetWidth - Ta(t, o)) * l;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (n.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return n.current.classList.add(Ra), void i.current.classList.remove(Ra);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return n.current.classList.remove(Ra), void i.current.classList.add(Ra);
                                            var t, u;
                                            n.current.classList.remove(Ra), i.current.classList.remove(Ra);
                                        }
                                    })(_);
                            },
                            A = (0, Ea.z)(() => {
                                (() => {
                                    const t = d.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && a && u)) return;
                                    const s = Math.min(1, a / n);
                                    (t.style.width = `${Ta(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Ba) : r.current.classList.remove(Ba));
                                })(),
                                    b();
                            });
                        (0, s.useEffect)(() => F(A)),
                            (0, s.useEffect)(
                                () =>
                                    F(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = xa;
                                        const a = () => {
                                            u(), (u = F(A));
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
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = D.O.client.events.mouse.move(([t, u]) => {
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
                                    u = D.O.client.events.mouse.up(() => {
                                        t(), p(La);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, E.offset, E.pending, a, p]);
                        const h = ga((t) => e.applyStepTo(t), _, [e]),
                            v = h[0],
                            C = h[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ra) || (0, y.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Da, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(wa, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ra) || 0 !== e.button || ((0, y.G)('play'), v(va.Next));
                                },
                                onMouseUp: C,
                                ref: n,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Pa, t.track),
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
                                                })(t.screenX > a.getBoundingClientRect().x ? va.Prev : va.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: d, className: l()(ya, t.thumb) }),
                                o().createElement('div', { className: l()(ka, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Sa, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ra) || 0 !== e.button || ((0, y.G)('play'), v(va.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Ma = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Oa = ({
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
                                return Object.assign({}, e, { base: l()(Ma.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(Ma.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Ma.defaultScrollArea, r) },
                                o().createElement($a, { className: i, api: m, classNames: n }, e),
                            ),
                            o().createElement(Ia, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    $a = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, s.useEffect)(() => F(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Ma.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ma.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Ma.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ($a.Bar = Ia), ($a.Default = Oa);
                const Ha = fa({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? va.Next : va.Prev),
                    }),
                    Wa = 'VerticalBar_base_f3',
                    Ga = 'VerticalBar_base__nonActive_42',
                    za = 'VerticalBar_topButton_d7',
                    Ua = 'VerticalBar_bottomButton_06',
                    Va = 'VerticalBar_track_df',
                    ja = 'VerticalBar_thumb_32',
                    qa = 'VerticalBar_rail_43',
                    Ya = 'disable',
                    Xa = () => {},
                    Za = { pending: !1, offset: 0 },
                    Ka = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qa = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ja = (e, t) => Math.max(20, e.offsetHeight * t),
                    er = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ka, onDrag: a = Xa }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = e.stepTimeout || 100,
                            m = (0, s.useState)(Za),
                            E = m[0],
                            g = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            b = (0, Ea.z)(() => {
                                const t = d.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && t && u)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (t.style.height = `${Ja(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(Ga) : r.current.classList.remove(Ga)),
                                    s
                                );
                            }),
                            A = (0, Ea.z)(() => {
                                const t = c.current,
                                    u = d.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / r),
                                    l = (0, ma.u)(0, 1, s / (r - a)),
                                    _ = (t.offsetHeight - Ja(t, o)) * l;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (n.current && i.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return n.current.classList.add(Ya), void i.current.classList.remove(Ya);
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return n.current.classList.remove(Ya), void i.current.classList.add(Ya);
                                            var t, u;
                                            n.current.classList.remove(Ya), i.current.classList.remove(Ya);
                                        }
                                    })(_);
                            }),
                            h = (0, Ea.z)(() => {
                                Qa(e, () => {
                                    b(), A();
                                });
                            });
                        (0, s.useEffect)(() => F(h)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Qa(e, () => {
                                        A();
                                    });
                                };
                                let u = Xa;
                                const a = () => {
                                    u(), (u = F(h));
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
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = D.O.client.events.mouse.up(() => {
                                        p(Za);
                                    }),
                                    u = D.O.client.events.mouse.move(([t]) => {
                                        Qa(e, (u) => {
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
                        const v = ga((t) => e.applyStepTo(t), _, [e]),
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
                            e.target.classList.contains(Ya) || (0, y.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Wa, t.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(za, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ya) || 0 !== e.button || ((0, y.G)('play'), C(va.Next));
                                },
                                ref: n,
                                onMouseEnter: B,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Va, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, y.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Qa(e, (a) => {
                                                            if (!a) return;
                                                            const r = u(e),
                                                                n = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? va.Prev : va.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                o().createElement('div', { ref: d, className: l()(ja, t.thumb) }),
                                o().createElement('div', { className: l()(qa, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Ua, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ya) || 0 !== e.button || ((0, y.G)('play'), C(va.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    tr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ur = ({
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
                                return Object.assign({}, e, { base: l()(tr.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: l()(tr.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(tr.area, r) },
                                o().createElement(ar, { className: n, classNames: i, api: m }, e),
                            ),
                            o().createElement(er, { getStepByRailClick: c, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    ar = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, s.useEffect)(() => F(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(tr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(tr.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                ar.Default = ur;
                const rr = { Vertical: r, Horizontal: a };
                let nr;
                !(function (e) {
                    (e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle');
                })(nr || (nr = {}));
                const sr = { type: nr.Idle };
                let or;
                !(function (e) {
                    (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton');
                })(or || (or = {}));
                const ir = {
                        base: 'ArrowButton_base_8c',
                        base__gray: 'ArrowButton_base__gray_bd',
                        icon: 'ArrowButton_icon_af',
                        icon__4k: 'ArrowButton_icon__4k_23',
                        icon__back: 'ArrowButton_icon__back_28',
                        icon__forward: 'ArrowButton_icon__forward_ff',
                    },
                    lr = ({ onClick: e, direction: t, type: u = z.Default, className: a, tooltipBody: r }) => {
                        const n = (0, s.useCallback)(() => {
                                (0, y.G)('highlight');
                            }, []),
                            i = (0, s.useCallback)(() => {
                                (0, y.G)('bp_slide'), e();
                            }, [e]);
                        return o().createElement(
                            qe.i,
                            { body: r },
                            o().createElement(
                                'div',
                                { className: l()(ir.base, ir[`base__${u}`], a), onClick: i, onMouseEnter: n },
                                o().createElement('div', {
                                    className: l()(ir.icon, ir[`icon__${t}`], 2 === D.O.view.getScale() && ir.icon__4k),
                                }),
                            ),
                        );
                    },
                    cr = 'Bookmark_base_cc',
                    dr = 'Bookmark_container_72',
                    _r = 'Bookmark_container__start_b1',
                    mr = 'Bookmark_container__wide_14',
                    Er = 'Bookmark_textWrapper_46',
                    gr = 'Bookmark_withTooltip_58',
                    pr = 'Bookmark_text_6f',
                    br = 'Bookmark_text__basic_01',
                    Ar = 'Bookmark_text__premium_b8',
                    hr = 'Bookmark_text__single_a0',
                    vr = 'Bookmark_text__wide_4c',
                    Cr = 'Bookmark_text__disappeared_f2',
                    fr = 'Bookmark_textInner_b4',
                    Fr = 'Bookmark_leftTextLine_0a',
                    Dr = 'Bookmark_rightTextLine_37',
                    Br = ({ isWide: e, isDecorated: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(pr, hr, e && vr) },
                            t && o().createElement('div', { className: Fr }),
                            o().createElement(
                                'div',
                                { className: fr },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && o().createElement('div', { className: Dr }),
                        ),
                    wr = (0, s.forwardRef)(
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
                            const d = (0, Se.uF)(R.strings.battle_pass.tooltips.postProgress.body(), {
                                chapterStep: r,
                            });
                            return o().createElement(
                                'div',
                                { className: l()(cr, n), ref: c },
                                o().createElement(
                                    'div',
                                    { className: l()(dr, e && mr, !e && _r) },
                                    e
                                        ? o().createElement(
                                              qe.i,
                                              { body: u, header: a, isEnabled: 'string' == typeof u },
                                              o().createElement(
                                                  'div',
                                                  { className: gr },
                                                  o().createElement(Br, { isWide: e, isDecorated: !0 }),
                                              ),
                                          )
                                        : o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(
                                                  'div',
                                                  { className: Er },
                                                  o().createElement(
                                                      qe.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: d,
                                                      },
                                                      o().createElement(Br, { isWide: e }),
                                                  ),
                                              ),
                                              o().createElement(
                                                  Ye.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  o().createElement(
                                                      'div',
                                                      { className: l()(pr, Ar) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              o().createElement(
                                                  'div',
                                                  { className: l()(pr, br, t && Cr) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var Sr = u(1975),
                    Pr = u(7442),
                    yr = u(156);
                const kr = 'OptimizedProgressBar_base_1f',
                    Rr = 'OptimizedProgressBar_wrapper_ab',
                    Lr = 'OptimizedProgressBar_background_ce';
                var Nr = u(7736);
                const xr = ['api', 'value', 'maxValue', 'theme'];
                function Tr() {
                    return (
                        (Tr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Tr.apply(this, arguments)
                    );
                }
                const Ir = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Mr = (e) => {
                        let t = e.api,
                            u = e.value,
                            a = e.maxValue,
                            r = void 0 === a ? 100 : a,
                            n = e.theme,
                            i = void 0 === n ? Sr.uH : n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, xr);
                        const c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            m = (0, ma.u)(0, u, r) / r,
                            E = (0, s.useCallback)(
                                (e) => {
                                    _.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, a) => {
                                            const r = u.offsetWidth - a.offsetWidth,
                                                n = e - Ir(u, t),
                                                s = (0, ma.u)(0, r, n);
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
                                                    s = e - Ir(a, t),
                                                    o = (0, ma.u)(0, n, s);
                                                r.style.left = `${o}px`;
                                            })(e, m, { line: d.current, container: c.current });
                                },
                                [m],
                            ),
                            g = (0, s.useMemo)(() => (0, yr.VQ)(i), [i]);
                        return (
                            (t.current.update = E),
                            o().createElement(
                                'div',
                                { className: kr, ref: c },
                                o().createElement(
                                    'div',
                                    { className: Rr },
                                    o().createElement(
                                        'div',
                                        { style: g, className: Lr, ref: _ },
                                        o().createElement(Pr.J, { size: l.size }),
                                    ),
                                    o().createElement(
                                        Sr.ko,
                                        Tr({}, l, {
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
                var Or = u(1481);
                const $r = 'VehicleInfo_base_b3',
                    Hr = 'VehicleInfo_prefix_f6',
                    Wr = 'VehicleInfo_type_1b',
                    Gr = R.strings.battle_pass.progression.widget3dStyle,
                    zr = (0, s.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: u, isElite: a }) => {
                        const r = (0, s.useMemo)(() => {
                            const e = (0, Se.BN)(u);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${a ? '_elite' : ''}`)})`,
                            };
                        }, [u, a]);
                        return o().createElement(
                            'div',
                            { className: $r },
                            o().createElement('div', { className: Hr }, Gr.forVehicle()),
                            iu(e),
                            o().createElement('div', { className: Wr, style: r }),
                            t,
                        );
                    }),
                    Ur = 'Widget3dStyle_base_ae',
                    Vr = 'Widget3dStyle_title_20',
                    jr = 'Widget3dStyle_base__closedChapter_d4',
                    qr = 'Widget3dStyle_box_f8',
                    Yr = 'Widget3dStyle_light_82',
                    Xr = 'Widget3dStyle_image_f7',
                    Zr = 'Widget3dStyle_previewButton_03',
                    Kr = 'Widget3dStyle_box__hovered_c3',
                    Qr = 'Widget3dStyle_footer_b9',
                    Jr = 'Widget3dStyle_caption_2b',
                    en = R.strings.battle_pass.progression.widget3dStyle;
                let tn;
                !(function (e) {
                    (e.None = ''), (e.Small = '_small'), (e.Medium = '_medium');
                })(tn || (tn = {}));
                const un = (0, k.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: u }) => {
                        const a = (0, s.useState)(!1),
                            r = a[0],
                            n = a[1],
                            i = q(),
                            c = i.controls,
                            d = i.model,
                            m = d.root.get(),
                            E = m.chapterState,
                            g = m.isStyleTaken,
                            p = d.widget3dStyle.get(),
                            b = p.styleName,
                            A = p.styleId,
                            h = ((e, t) => (2 !== t ? (e <= _.cJ.Small ? tn.Small : tn.Medium) : tn.None))(
                                (0, _.GS)().mediaSize,
                                viewEnv.getScale(),
                            ),
                            v = ((e, t, u) => {
                                const a = `style_3d_${e}_${t}${u}`;
                                return {
                                    backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(a)})`,
                                };
                            })(t, A, h),
                            C = (0, Se.uF)(en.currentStyle(), { name: b }),
                            f = (0, s.useCallback)(() => {
                                c.open3dStylePreview(t);
                            }, [c, t]);
                        return o().createElement(
                            'div',
                            { className: l()(Ur, E === L.Completed && jr), ref: e },
                            !g && u && o().createElement('div', { className: Vr }, en.titleNoChapterSelected()),
                            o().createElement(
                                'div',
                                { className: l()(qr, r && Kr), onMouseEnter: () => n(!0), onMouseLeave: () => n(!1) },
                                !g && t === ao && o().createElement('div', { className: Yr }),
                                o().createElement('div', { className: Xr, style: v }),
                                o().createElement('div', { className: Zr }, o().createElement(Or.k, { onClick: f })),
                            ),
                            o().createElement(
                                'div',
                                { className: Qr },
                                o().createElement('div', { className: Jr }, C),
                                o().createElement(zr, d.widget3dStyleVehicleInfo.get()),
                            ),
                        );
                    }),
                    an = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: u,
                        pointsInLevel: a,
                        totalPointsInLevel: r,
                        currentLevel: n,
                    }) => (e > n ? u + t * (e - 2) + t * (a / r) : (e - 1) * t + u * (a / r)),
                    rn = (e) => e + 1,
                    nn = (0, k.Pi)(
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
                            const m = q().model,
                                E = m.root.get(),
                                g = E.isPaused,
                                p = E.showLevelsAnimations,
                                b = E.currentLevel,
                                A = m.levels.get(),
                                h = (0, s.useState)(0),
                                v = h[0],
                                C = h[1],
                                f = (0, s.useRef)(-1),
                                D = (0, s.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                B = D[0],
                                w = B.previousBaseEarnedPoints,
                                S = B.maxBasePoints,
                                P = B.baseProgressionSize,
                                y = D[1];
                            (0, s.useEffect)(() => {
                                if (g) return;
                                const e = f.current !== d,
                                    t = e ? n : r,
                                    s = a + (A.length - 1) * u,
                                    o = A[t - 1],
                                    _ = r <= A.length ? r - 1 : A.length - 1,
                                    m = A[_].value.levelPoints,
                                    E = an({
                                        level: r,
                                        levelWidth: u,
                                        currentLevelWidth: a,
                                        pointsInLevel: i,
                                        totalPointsInLevel: m,
                                        currentLevel: b,
                                    }),
                                    p = o ? o.value.levelPoints : 0,
                                    h = an({
                                        level: t > r ? r : t,
                                        levelWidth: u,
                                        currentLevelWidth: t < b ? u : a,
                                        pointsInLevel: l,
                                        totalPointsInLevel: p,
                                        currentLevel: b,
                                    }),
                                    v = e && t <= r ? h : E;
                                d !== c && u && (f.current = d),
                                    y({ maxBasePoints: s, previousBaseEarnedPoints: v, baseProgressionSize: E });
                            }, [g, u, a, r, n, c, l, i, d, b, A]);
                            const k = (0, s.useMemo)(
                                () =>
                                    Object.assign({}, Sr.uu, {
                                        withStack: !0,
                                        type: Nr.r.Simple,
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
                                            ? (0, ut.F)(() => {
                                                  C(rn);
                                              }, 700)
                                            : void 0;
                                    C(rn);
                                }, [c, d, p]),
                                (0, s.useEffect)(() => {
                                    if (p)
                                        return F(() => {
                                            t && t();
                                        });
                                }, [t, p]),
                                o().createElement(Mr, {
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
                    sn = R.strings.battle_pass.tooltips.progression.freePoints,
                    on = (0, k.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: u,
                            currentLevelWidth: a,
                            progressChange: r,
                        }) => {
                            const n = q().model,
                                i = n.root.get(),
                                c = i.chapterState,
                                d = i.currentLevel,
                                _ = i.previousLevel,
                                m = i.currentPointsInLevel,
                                E = i.previousPointsInLevel,
                                g = i.currentPointsInChapter,
                                p = i.previousPointsInChapter,
                                b = i.freePointsInLevel,
                                A = i.freePointsInChapter,
                                h = i.previousFreePointsInChapter,
                                v = i.previousFreePointsInLevel,
                                C = i.potentialLevel,
                                f = i.previousPotentialLevel,
                                F = n.levels.get(),
                                B = (() => {
                                    const e = (0, s.useState)(D.O.view.getScale()),
                                        t = e[0],
                                        u = e[1];
                                    return (
                                        (0, s.useEffect)(() => {
                                            const e = () => {
                                                u(D.O.view.getScale());
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
                                w = (c === L.NotStarted || c === L.Paused) && A - g > 0,
                                S = n.computes.getTotalLevelPoints(),
                                P = n.computes.getCurrentWidth(u, a, B, S),
                                y = g >= F.length * S,
                                k = {
                                    '--progress-line-base': yr.Gh.line.bgColorBase,
                                    '--progress-line-disabled': yr.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': yr.Gh.line.bgColorFinished,
                                };
                            return o().createElement(
                                'div',
                                { className: _a.progressContainer },
                                w &&
                                    o().createElement(
                                        qe.i,
                                        { header: sn.header(), body: sn.body() },
                                        o().createElement(
                                            'div',
                                            { className: _a.progress },
                                            o().createElement(nn, {
                                                api: t,
                                                progressChange: r,
                                                levelWidth: u,
                                                currentLevelWidth: a,
                                                level: C,
                                                previousLevel: f,
                                                currentPointsInLevel: b,
                                                previousPointsInLevel: v,
                                                currentPointsInChapter: A,
                                                previousPointsInChapter: h,
                                                theme: yr.fV,
                                            }),
                                        ),
                                    ),
                                o().createElement('div', {
                                    className: l()(_a.progressBackground, y && _a.progressBackground__finished),
                                    style: Object.assign({ width: `${P}rem` }, k),
                                }),
                                o().createElement(
                                    Ye.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    o().createElement(
                                        'div',
                                        { className: l()(_a.progress, w && _a.progress__inactive) },
                                        o().createElement(nn, {
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
                    ln = 'Background_base_f7',
                    cn = 'Background_default_c1',
                    dn = 'Background_base__premium_e1',
                    _n = 'Background_rare_b6',
                    mn = 'Background_rareBg_ee',
                    En = 'Background_pattern_81',
                    gn = 'Background_pattern__left_86',
                    pn = 'Background_pattern__right_c6',
                    bn = 'Background_pattern__leftIndent_14',
                    An = 'Background_pattern__rightIndent_48',
                    hn = 'Background_pattern__completed_20',
                    vn = 'Background_disabled_ba',
                    Cn = 'Background_inProgress_68',
                    fn = 'Background_inProgressInner_0d',
                    Fn = 'Background_inProgressPart_68',
                    Dn = 'Background_inProgressPart__left_76',
                    Bn = 'Background_inProgressPart__right_5b',
                    wn = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    Sn = (0, k.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const u = q().model.computes.cardStates(e, t),
                            a = u.cardStatus,
                            r = u.isRare,
                            n = u.isDisabled,
                            s =
                                a.current !== H.IN_PROGRESS &&
                                ((e, t) => {
                                    switch (e) {
                                        case H.NOT_STARTED:
                                            return t;
                                        case H.COMPLETED:
                                            return !t;
                                        default:
                                            return console.warn(`Unsupported status for isIndent: ${e}`), !1;
                                    }
                                })(a.current, t);
                        return o().createElement(
                            'div',
                            { className: l()(ln, t && dn) },
                            o().createElement('div', { className: cn }),
                            n && o().createElement('div', { className: vn }),
                            a.current === H.IN_PROGRESS &&
                                o().createElement(
                                    'div',
                                    { className: Cn },
                                    o().createElement('div', { className: l()(Fn, Dn) }),
                                    !t && o().createElement('div', { className: fn }),
                                    o().createElement('div', { className: l()(Fn, Bn) }),
                                ),
                            r &&
                                o().createElement(
                                    'div',
                                    { className: _n },
                                    o().createElement('div', {
                                        className: l()(En, gn, s && bn, a.current === H.COMPLETED && hn),
                                        style: { backgroundImage: wn('left') },
                                    }),
                                    o().createElement('div', {
                                        className: l()(En, pn, !s && An, a.current === H.COMPLETED && hn),
                                        style: { backgroundImage: wn('right') },
                                    }),
                                    a.current === H.NOT_STARTED && o().createElement('div', { className: mn }),
                                ),
                        );
                    }),
                    Pn = {
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
                    yn = R.strings.battle_pass.progression,
                    kn = (0, k.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: u }) => {
                        const a = q(),
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
                            A = g.current === H.IN_PROGRESS,
                            h = c === L.NotStarted || c === L.Paused,
                            v = g.current === H.COMPLETED && !p && !u,
                            C = (0, ha.useSpring)({
                                from: { stageOpacity: m ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, y.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: xe },
                            }).stageOpacity,
                            f = (0, ha.useSpring)({
                                from: { sparkOpacity: m ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => E(!1),
                                config: { duration: 1500, easing: xe },
                            }).sparkOpacity;
                        return (
                            (0, s.useEffect)(() => {
                                if (d && A)
                                    return (0, ut.F)(() => {
                                        E(!0), n.finishLevelsAnimation();
                                    }, t + 100);
                            }, [d, A, t]),
                            o().createElement(
                                'div',
                                { className: l()(Pn.base, Pn[`base__${g.current}`], v && Pn.base__rewardTaken) },
                                A &&
                                    !h &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Pn.glow }),
                                        o().createElement(ha.animated.div, {
                                            style: { opacity: f },
                                            className: Pn.animatedGlow,
                                        }),
                                    ),
                                b && o().createElement('div', { className: Pn.iconFinal }),
                                A
                                    ? o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              'div',
                                              { className: Pn.numberInProgress },
                                              e,
                                              o().createElement(
                                                  ha.animated.div,
                                                  {
                                                      style: {
                                                          opacity: C,
                                                          transform: C.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Pn.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          o().createElement(
                                              'div',
                                              { className: Pn.title },
                                              h ? yn.pausedStep() : yn.currentStep(),
                                          ),
                                      )
                                    : o().createElement('div', { className: Pn.number }, e),
                            )
                        );
                    });
                var Rn = u(8664);
                const Ln = 'ClosedStatus_base_8a',
                    Nn = 'ClosedStatus_icon_18',
                    xn = 'ClosedStatus_icon__current_44',
                    Tn = 'ClosedStatus_icon__exit_fd',
                    In = 'ClosedStatus_icon__exitActive_65',
                    Mn = 'ClosedStatus_icon__exitCurrentActive_4d',
                    On = 'ClosedStatus_icon__exitDone_b2',
                    $n = 'ClosedStatus_title_a3',
                    Hn = 'ClosedStatus_title__exit_16',
                    Wn = 'ClosedStatus_title__exitActive_44',
                    Gn = 'ClosedStatus_title__exitDone_51';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Un = (0, k.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: u,
                            baseUnlockProps: a,
                        }) => {
                            const r = q().model,
                                n = r.root.get().isBattlePassPurchased,
                                s = r.computes.cardStates(e, !0).cardStatus.current === H.IN_PROGRESS,
                                i = { exit: Tn, exitActive: s ? Mn : In, exitDone: On },
                                c = { exit: Hn, exitActive: Wn, exitDone: Gn },
                                d = !n || t,
                                _ = s && d;
                            return o().createElement(
                                'div',
                                { className: Ln },
                                d &&
                                    o().createElement(
                                        Rn.Z,
                                        zn({}, a, { classNames: i, onExited: u }),
                                        o().createElement('div', { className: l()(Nn, s && xn) }),
                                    ),
                                _ &&
                                    o().createElement(
                                        Rn.Z,
                                        zn({}, a, { classNames: d ? c : {} }),
                                        o().createElement(
                                            'div',
                                            { className: $n },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Vn = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                    },
                    jn = ({
                        completedIn: e,
                        handleCompleteGlowAnimationExited: t,
                        children: u,
                        isRewardAnimationEnd: a,
                    }) => {
                        const r = {
                            exit: Vn.iconGlow__completedEnter,
                            exitActive: Vn.iconGlow__completedEnterActive,
                            exitDone: Vn.iconGlow__completedEnterDone,
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Vn.base, a && Vn.base__showAnimation) },
                            o().createElement(Rn.Z, { in: !e, timeout: As, classNames: r, onExited: t }, u),
                            o().createElement(
                                qe.i,
                                { body: hs.tooltips.completed.got() },
                                o().createElement('div', { className: Vn.icon }),
                            ),
                        );
                    },
                    qn = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    Yn = (0, k.Pi)(() => {
                        const e = q().model.computes.currentLevelPoints(),
                            t = e.current,
                            u = e.total;
                        return o().createElement(
                            Ye.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            o().createElement(
                                'div',
                                { className: qn.base },
                                o().createElement('div', { className: l()(qn.value, qn.value__current) }, t),
                                o().createElement('div', { className: qn.divider }, '/'),
                                o().createElement('div', { className: l()(qn.value, qn.value__total) }, u),
                                o().createElement('div', { className: qn.icon }),
                            ),
                        );
                    }),
                    Xn = 'Effects_glowWrapper_94',
                    Zn = 'Effects_glow_f7',
                    Kn = 'Effects_glow__active_d4',
                    Qn = 'Effects_dust_5a',
                    Jn = 'Effects_dust__active_b4';
                function es() {
                    return (
                        (es =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        es.apply(this, arguments)
                    );
                }
                const ts = ({ baseUnlockProps: e }) => {
                        const t = { exit: Zn, exitActive: Kn, exitDone: Zn },
                            u = { exit: Qn, exitActive: Jn, exitDone: Qn };
                        return o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Rn.Z,
                                es({}, e, { classNames: t }),
                                o().createElement(
                                    'div',
                                    { className: Xn },
                                    o().createElement('div', { className: Zn }),
                                ),
                            ),
                            o().createElement(
                                Rn.Z,
                                es({}, e, { classNames: u }),
                                o().createElement(
                                    'div',
                                    { className: Xn },
                                    o().createElement('div', { className: Qn }),
                                ),
                            ),
                        );
                    },
                    us = 'Status_base_1f',
                    as = 'Status_base__inProgress_b8',
                    rs = 'Status_base__premiumInProgress_5e',
                    ns = 'Status_iconContainer_2f',
                    ss = 'Status_iconInner_30',
                    os = 'Status_iconGlow_c5',
                    is = 'Status_iconGlow__completed_b9',
                    ls = 'Status_iconGlow__hidden_24',
                    cs = 'Status_icon_8b',
                    ds = 'Status_icon__completed_d3',
                    _s = 'Status_icon__completedEnter_e2',
                    ms = 'Status_icon__completedEnterActive_d1',
                    Es = 'Status_icon__completedEnterDone_9e',
                    gs = 'Status_animatedGlowIcon_43',
                    ps = 'Status_animatedGlowIcon__completed_01',
                    bs = 'Status_pointsWrapper_e8',
                    As = 1500,
                    hs = R.strings.battle_pass,
                    vs = R.views.lobby.battle_pass,
                    Cs = (0, k.Pi)(
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
                            playCompleteSelectRewardAnimation: E,
                            isRewardAnimationEnd: g,
                            level: p,
                        }) => {
                            const b = q().model,
                                A = b.computes.cardStates(p, e),
                                h = A.cardStatus,
                                v = A.isDisabled,
                                C = b.computes.isRewardNeedTake(p, e),
                                f = (0, s.useState)(!1),
                                F = f[0],
                                D = f[1],
                                B = (0, s.useState)(!1),
                                w = B[0],
                                S = B[1],
                                P = (0, s.useState)(!0),
                                k = P[0],
                                R = P[1],
                                L = (0, s.useState)(!1),
                                N = L[0],
                                x = L[1],
                                T = h.current === H.COMPLETED && !C && !v,
                                I = (v && e) || T || u,
                                M =
                                    !e &&
                                    (h.potential === H.IN_PROGRESS ||
                                        (h.current === H.IN_PROGRESS && h.potential !== H.COMPLETED)),
                                O = () => {
                                    c && (0, y.G)(W.IMPROVED_REWARD), D(!0);
                                };
                            (0, s.useEffect)(
                                () =>
                                    u
                                        ? (0, ut.F)(() => {
                                              R(!1),
                                                  i &&
                                                      !N &&
                                                      (h.current === H.IN_PROGRESS
                                                          ? (0, y.G)(W.UNLOCK_BIG)
                                                          : (0, y.G)(W.UNLOCK_SMALL));
                                          }, _ + r)
                                        : t
                                          ? (S(!0),
                                            (0, ut.F)(() => {
                                                S(!1), O();
                                            }, _ + a))
                                          : void (w && S(!1)),
                                [u, t, w],
                            ),
                                (0, s.useEffect)(() => {
                                    if (t && N)
                                        return (0, ut.F)(() => {
                                            O();
                                        }, a);
                                }, [t, N]);
                            const $ = { exit: _s, exitActive: ms, exitDone: Es },
                                G = () => {
                                    !t && d && d(), x(!0);
                                },
                                z = { in: k, timeout: As + n };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(us, h.current === H.IN_PROGRESS && (e ? rs : as)),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                I &&
                                    o().createElement(
                                        'div',
                                        { className: ns },
                                        ((!t && T) || (F && !C)) &&
                                            o().createElement(
                                                jn,
                                                {
                                                    completedIn: F,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        w && S(!1);
                                                    },
                                                    isRewardAnimationEnd: g,
                                                },
                                                o().createElement('div', { className: l()(os, is, w && ls) }),
                                            ),
                                        (t || E) &&
                                            !C &&
                                            !F &&
                                            o().createElement(
                                                Rn.Z,
                                                {
                                                    in: !F,
                                                    timeout: As,
                                                    classNames: $,
                                                    onExited: () => {
                                                        d && d();
                                                    },
                                                },
                                                o().createElement(
                                                    'div',
                                                    { className: l()(cs, F && ds) },
                                                    o().createElement('div', { className: l()(gs, F && ps) }),
                                                ),
                                            ),
                                        !t &&
                                            !u &&
                                            v &&
                                            e &&
                                            o().createElement(
                                                Ye.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: vs.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(Un, {
                                                        level: p,
                                                        baseUnlockProps: z,
                                                        playUnlockAnimation: u,
                                                        handleUnlockAnimationExited: G,
                                                    }),
                                                ),
                                            ),
                                        u &&
                                            !N &&
                                            o().createElement(
                                                Ye.u,
                                                { contentId: vs.tooltips.BattlePassLockIconTooltipView('resId') },
                                                o().createElement(
                                                    'div',
                                                    { className: ss },
                                                    o().createElement(Un, {
                                                        level: p,
                                                        baseUnlockProps: z,
                                                        playUnlockAnimation: u,
                                                        handleUnlockAnimationExited: G,
                                                    }),
                                                    h.current === H.IN_PROGRESS &&
                                                        o().createElement(ts, { baseUnlockProps: z }),
                                                ),
                                            ),
                                    ),
                                M && o().createElement('div', { className: bs }, o().createElement(Yn, null)),
                            );
                        },
                    ),
                    fs = 'CardContent_base_aa',
                    Fs = 'CardContent_status_6f',
                    Ds = 'CardContent_buttonHolder_a0',
                    Bs = 'CardContent_buttonLight_95',
                    ws = 'CardContent_buttonInner_27',
                    Ss = 'CardContent_buttonInner__disabled_b1',
                    Ps = 'CardContent_button_3a',
                    ys = 'CardContent_button__disabled_a8',
                    ks = 'CardContent_buttonBlink_db',
                    Rs = 'CardContent_buttonText_fc',
                    Ls = ['children'];
                function Ns() {
                    return (
                        (Ns =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ns.apply(this, arguments)
                    );
                }
                const xs = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) (u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                            return r;
                        })(e, Ls);
                    return o().createElement(
                        Ye.u,
                        Ns(
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
                function Ts() {
                    return (
                        (Ts =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ts.apply(this, arguments)
                    );
                }
                const Is = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = o().createElement('div', { className: u }, e);
                        if (t.header || t.body) return o().createElement(qe.i, t, a);
                        const r = t.contentId;
                        return r
                            ? o().createElement(Ye.u, Ts({}, t, { contentId: r }), a)
                            : o().createElement(xs, t, a);
                    },
                    Ms = {
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
                    Os = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = le.Big,
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
                                if (void 0 === t || !Fe.includes(e)) return null;
                                switch (t) {
                                    case de.BATTLE_BOOSTER:
                                    case de.BATTLE_BOOSTER_REPLACE:
                                        return _e.BATTLE_BOOSTER;
                                }
                            })(a, r),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case de.BATTLE_BOOSTER:
                                        return me.BATTLE_BOOSTER;
                                    case de.BATTLE_BOOSTER_REPLACE:
                                        return me.BATTLE_BOOSTER_REPLACE;
                                    case de.BUILT_IN_EQUIPMENT:
                                        return me.BUILT_IN_EQUIPMENT;
                                    case de.EQUIPMENT_PLUS:
                                        return me.EQUIPMENT_PLUS;
                                    case de.EQUIPMENT_TROPHY_BASIC:
                                        return me.EQUIPMENT_TROPHY_BASIC;
                                    case de.EQUIPMENT_TROPHY_UPGRADED:
                                        return me.EQUIPMENT_TROPHY_UPGRADED;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case de.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return me.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case de.PROGRESSION_STYLE_UPGRADED_1:
                                        return me.PROGRESSION_STYLE_UPGRADED_1;
                                    case de.PROGRESSION_STYLE_UPGRADED_2:
                                        return me.PROGRESSION_STYLE_UPGRADED_2;
                                    case de.PROGRESSION_STYLE_UPGRADED_3:
                                        return me.PROGRESSION_STYLE_UPGRADED_3;
                                    case de.PROGRESSION_STYLE_UPGRADED_4:
                                        return me.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            p = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ce.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ce.CURRENCY:
                                    case ce.NUMBER:
                                        return o().createElement(Ee.A, { format: 'integral', value: Number(e) });
                                    case ce.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, s);
                        return o().createElement(
                            'div',
                            { className: l()(Ms.base, Ms[`base__${a}`], c), style: i },
                            o().createElement(
                                Is,
                                { tooltipArgs: _, className: Ms.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: l()(Ms.image, null == d ? void 0 : d.image) },
                                        E &&
                                            o().createElement('div', {
                                                className: l()(Ms.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            o().createElement('div', {
                                                className: l()(Ms.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            o().createElement('div', {
                                                className: l()(Ms.overlay, null == d ? void 0 : d.overlay),
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
                                                    Ms.info,
                                                    Ms[`info__${e}`],
                                                    s === ce.MULTI && Ms.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            u &&
                                o().createElement(
                                    Is,
                                    { tooltipArgs: m },
                                    o().createElement('div', {
                                        className: l()(Ms.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    $s = {
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
                function Hs() {
                    return (
                        (Hs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Hs.apply(this, arguments)
                    );
                }
                const Ws = (0, O.Om)((e) => {
                        const t = e.item,
                            u = e.name,
                            a = e.value,
                            r = e.overlayType,
                            n = e.tooltipId,
                            s = e.tooltipContentId;
                        return {
                            name: t || u,
                            smallImage: Ce(e, le.Small),
                            bigImage: Ce(e, le.Big),
                            special: r,
                            value: a,
                            valueType:
                                ((o = u),
                                ge.includes(o)
                                    ? ce.MULTI
                                    : pe.includes(o)
                                      ? ce.CURRENCY
                                      : be.includes(o)
                                        ? ce.NUMBER
                                        : Ae.includes(o)
                                          ? ce.PREMIUM_PLUS
                                          : ce.STRING),
                            tooltipArgs: fe({ tooltipId: n }, Number(s), { ignoreShowDelay: !0 }),
                        };
                        var o;
                    }),
                    Gs = (0, k.Pi)(({ isPremium: e, levelNum: t, hasAnimation: u }) => {
                        const a = (0, _.GS)().mediaSize <= _.cJ.Small,
                            r = q().model,
                            n = r.computes.cardStates(t, e).cardStatus,
                            i = r.computes.isRewardNeedTake(t, e),
                            c = r.computes.levelRewardItems(t, !0),
                            d = r.computes.levelRewardItems(t, !1),
                            m = e ? d : c,
                            E = (0, s.useState)(m),
                            g = E[0],
                            p = E[1],
                            b = n.current === H.IN_PROGRESS,
                            A = (0, s.useRef)(!1);
                        return (
                            (0, s.useEffect)(() => {
                                if (A.current) return (0, ut.F)(() => p(m), 1e3);
                                A.current = !0;
                            }, [m, A]),
                            o().createElement(
                                'div',
                                {
                                    className: l()(
                                        $s.base,
                                        b && $s.base__inProgress,
                                        e && $s.base__reverse,
                                        u && $s.base__animated,
                                        2 === m.length && $s.base__column,
                                        3 === m.length && (b ? $s.base__tripleInProgress : $s.base__tripleDefault),
                                    ),
                                },
                                M.UI(g, (e, t) => {
                                    const r = Ws(e),
                                        n =
                                            r.name.includes(oe.StyleProgressToken) ||
                                            r.name.includes(oe.BattlePassSelectToken),
                                        s = (i && n) || u;
                                    return o().createElement(
                                        'div',
                                        { key: `reward__${r.name}${t}`, className: l()($s.reward, $s[`reward__${t}`]) },
                                        s && o().createElement('div', { className: $s.shine }),
                                        u &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                o().createElement('div', { className: $s.staticShine }),
                                                o().createElement('div', { className: $s.explosion }),
                                            ),
                                        o().createElement(
                                            Os,
                                            Hs(
                                                {
                                                    size: a ? le.Small : le.Big,
                                                    image: a ? r.smallImage : r.bigImage,
                                                    className: $s.rewardInner,
                                                },
                                                r,
                                            ),
                                        ),
                                    );
                                }),
                            )
                        );
                    }),
                    zs = 'CardRewards_base_d6',
                    Us = 'CardRewards_base__completed_56',
                    Vs = (0, k.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: u = !1 }) => {
                        const a = q().model,
                            r = a.computes.cardStates(e, u),
                            n = r.cardStatus,
                            s = r.isDisabled,
                            i = a.computes.isRewardNeedTake(e, u),
                            c = n.current === H.COMPLETED && !i && !s && !t;
                        return o().createElement(
                            'div',
                            { className: l()(zs, c && Us) },
                            o().createElement(Gs, { levelNum: e, isPremium: u, hasAnimation: t }),
                        );
                    });
                function js() {
                    return (
                        (js =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        js.apply(this, arguments)
                    );
                }
                const qs = 100,
                    Ys = 1800,
                    Xs = R.strings.battle_pass.progression,
                    Zs = (0, k.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: u,
                            maxVisibleCards: a,
                            showLevelsAnimations: r,
                            showBuyAnimations: n,
                        }) => {
                            const i = q(),
                                c = i.model,
                                d = i.controls,
                                m = d.finishAnimation,
                                E = d.takeReward,
                                g = c.root.get(),
                                p = g.isBattlePassPurchased,
                                b = g.currentLevel,
                                A = g.previousLevel,
                                h = c.computes.levelInfo(t),
                                v = h.needTakePaid,
                                C = h.needTakeFree,
                                f = h.isFreeRewardChoiceEnabled,
                                F = h.isPaidRewardChoiceEnabled,
                                D = c.computes.cardStates(t, e).cardStatus,
                                B = c.computes.isRewardNeedTake(t, e),
                                w = D.current === H.IN_PROGRESS,
                                S = D.current === H.COMPLETED,
                                P = (0, s.useState)(!1),
                                y = P[0],
                                k = P[1],
                                R = (0, s.useState)(!1),
                                L = R[0],
                                N = R[1],
                                x = (0, s.useState)(!1),
                                T = x[0],
                                I = x[1],
                                M = (0, _.GS)().mediaSize <= _.cJ.Small ? Ue.extraSmall : Ue.small,
                                O = (0, s.useRef)(B),
                                $ = O.current;
                            (0, s.useEffect)(() => {
                                O.current = B;
                            }),
                                (0, s.useEffect)(() => {
                                    if ($ && !B) {
                                        const e = (0, ut.F)(() => {
                                                k(!1), N(!0), m();
                                            }, Ys),
                                            t = (0, ut.F)(() => {
                                                I(!1);
                                            }, 2300);
                                        return (
                                            k(!0),
                                            I(!0),
                                            () => {
                                                e(), t();
                                            }
                                        );
                                    }
                                }, [B]);
                            const W = (() => {
                                    let s,
                                        o = 0,
                                        i = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        E = !1,
                                        g = 300 * Math.ceil(b / 25);
                                    if (a && n && p) {
                                        const e = Math.floor(0.5 * a);
                                        let u = b - e,
                                            r = b + e,
                                            n = 0;
                                        u <= 0 && ((n = 1 - u), (r += n), (u = 1));
                                        const s = t < b && t >= u,
                                            l = t > b && t <= r,
                                            g = t === u;
                                        s ? (o = (t - u + 1) * qs) : l && (o = (t - u) * qs),
                                            (d = Boolean(w || s || l || g)),
                                            (_ = Boolean(w || g)),
                                            (m = Boolean(S && d)),
                                            (E = Boolean(B && d)),
                                            (i = (a - n - 1) * qs),
                                            w && (c = (t - u + 1) * qs * 2.5);
                                    }
                                    if (a && r) {
                                        const n = Math.min(b - A, Math.floor(0.5 * a));
                                        let o = b - n;
                                        o <= 0 && (o = 1);
                                        const c = t < b && t >= o;
                                        c && ((i = (t - o + 1) * qs), e && (i += qs)),
                                            (m = Boolean(S && c)),
                                            (l = n * qs + qs * Math.trunc(n / 2) + g),
                                            r && (s = u);
                                    }
                                    return (
                                        T && ((g = 0), (i = Ys), (m = Boolean(S)), (E = Boolean(B))),
                                        t === b - 1 && (s = u),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteSelectRewardAnimation: E,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: o,
                                            onAnimationDone: s,
                                            completeAnimationDelay: i,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: g,
                                        }
                                    );
                                })(),
                                G = (0, Ea.z)(() => {
                                    E({ level: t });
                                }),
                                z = C || v,
                                U = z && !(f || F);
                            return o().createElement(
                                'div',
                                { className: fs },
                                !e &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(kn, {
                                            stepNumber: t,
                                            stageAnimationDelay: W.stageAnimationDelay,
                                            isRewardAnimationActive: y,
                                        }),
                                        z &&
                                            o().createElement(
                                                qe.i,
                                                { isEnabled: U, body: Xs.btnRewardsUnavailable() },
                                                o().createElement(
                                                    'div',
                                                    { className: Ds },
                                                    !U && o().createElement('div', { className: Bs }),
                                                    o().createElement(
                                                        'div',
                                                        { className: l()(ws, U && Ss) },
                                                        o().createElement(
                                                            je,
                                                            {
                                                                type: ze.ghost,
                                                                size: M,
                                                                disabled: U,
                                                                onClick: G,
                                                                mixClass: l()(Ps, U && ys),
                                                            },
                                                            !U && o().createElement('div', { className: ks }),
                                                            o().createElement(
                                                                'div',
                                                                { className: Rs },
                                                                Xs.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                o().createElement(Vs, { levelNum: t, isPremium: e, isRewardAnimationActive: y }),
                                o().createElement(
                                    'div',
                                    { className: Fs },
                                    o().createElement(
                                        Cs,
                                        js(
                                            {
                                                isPremium: Boolean(e),
                                                completedDuration: 500,
                                                isRewardAnimationEnd: L,
                                                level: t,
                                            },
                                            W,
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ks = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__rare: 'Divider_base__rare_89',
                        base__completed: 'Divider_base__completed_ed',
                        base__premium: 'Divider_base__premium_82',
                        inner: 'Divider_inner_40',
                    },
                    Qs = ({ position: e, isPremium: t = !1, isRare: u = !1, status: a }) =>
                        o().createElement(
                            'div',
                            {
                                className: l()(
                                    Ks.base,
                                    Ks[`base__${a}`],
                                    Ks[`base__${e}`],
                                    u && Ks.base__rare,
                                    t && Ks.base__premium,
                                ),
                            },
                            o().createElement('div', { className: Ks.inner }),
                        ),
                    Js = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__nonPremium: 'Card_base__nonPremium_ee',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    eo = (0, k.Pi)(
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
                            const d = q().model,
                                _ = d.root.get(),
                                m = _.currentPointsInLevel,
                                E = _.chapterState,
                                g = d.computes.cardStates(t, e),
                                p = g.cardStatus,
                                b = g.isRare,
                                A = d.computes.levelInfo(t).levelPoints,
                                h = !e && (p.current === H.COMPLETED || p.current === H.IN_PROGRESS),
                                v = 1 === t,
                                C = t === u,
                                f = v ? void 0 : d.computes.cardStates(t - 1, e),
                                F = C ? void 0 : d.computes.cardStates(t + 1, e),
                                D = (0, s.useRef)(null),
                                B = e ? (t - 1) * A : A;
                            (0, s.useImperativeHandle)(c, () => ({
                                width: () => {
                                    const e = D.current;
                                    return e ? e.offsetWidth : void 0;
                                },
                                offsetLeft: () => {
                                    const e = D.current;
                                    return e ? e.offsetLeft : void 0;
                                },
                                getOffsetLeftInArea: () => {
                                    const e = D.current;
                                    if (!e) return 0;
                                    const t = e.parentNode,
                                        u = t ? t.offsetLeft : 0;
                                    return e.offsetLeft + u;
                                },
                                getHTMLElement: () => D.current,
                            }));
                            const w =
                                    !v &&
                                    ((p.current === H.NOT_STARTED && !b) ||
                                        ((null == f ? void 0 : f.isRare) && p.current !== H.IN_PROGRESS) ||
                                        (null == f ? void 0 : f.cardStatus.current) === H.IN_PROGRESS),
                                S =
                                    !C &&
                                    ((p.current === H.COMPLETED && !b) ||
                                        ((null == F ? void 0 : F.isRare) && p.current !== H.IN_PROGRESS) ||
                                        (null == F ? void 0 : F.cardStatus.current) === H.IN_PROGRESS),
                                P = ((e, t, u, a) =>
                                    e === H.COMPLETED
                                        ? 100
                                        : e !== H.IN_PROGRESS || (t !== L.NotStarted && t !== L.Paused)
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
                                    className: l()(Js.base, Js[`base__${p.current}`], !e && Js.base__nonPremium),
                                    ref: D,
                                    style: k,
                                },
                                o().createElement(Sn, { level: t, isPremium: e }),
                                o().createElement(Zs, {
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
                                            { className: l()(Js.totalPoints, Js.totalPoints__default) },
                                            B,
                                        ),
                                        C &&
                                            o().createElement(
                                                'div',
                                                { className: l()(Js.totalPoints, Js.totalPoints__final) },
                                                u * A,
                                            ),
                                    ),
                                h && o().createElement('div', { className: Js.progressShadow, style: y }),
                                !w &&
                                    o().createElement(Qs, {
                                        position: $.left,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                                !S &&
                                    o().createElement(Qs, {
                                        position: $.right,
                                        isPremium: e,
                                        isRare: b,
                                        status: p.current,
                                    }),
                            );
                        },
                    ),
                    to = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: u,
                            isPremium: a,
                            sectionKey: r,
                            maxVisibleCards: n,
                        }) => {
                            const i = q().model,
                                c = i.root.get(),
                                d = c.chapterID,
                                _ = c.currentLevel,
                                m = c.potentialLevel,
                                E = c.showBuyAnimations,
                                g = c.showLevelsAnimations,
                                p = i.levels.get(),
                                b = (0, s.useState)(!1),
                                A = b[0],
                                h = b[1],
                                v = () => {
                                    h(!0);
                                },
                                C = Boolean(n && a && E),
                                f = Boolean(n && g),
                                F = (a, r, n) => (a === r ? e : a === n ? u : t);
                            return o().createElement(
                                'div',
                                { className: l()(_a.row, !a && _a.row__basic) },
                                M.UI(p, (e, t) =>
                                    o().createElement(eo, {
                                        key: `${d}_${r}_${t}`,
                                        showBuyAnimations: C && !A,
                                        showLevelsAnimations: f,
                                        levelRef: F(e.level, _, m),
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
                function uo() {
                    return (
                        (uo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        uo.apply(this, arguments)
                    );
                }
                const ao = 1,
                    ro = (0, k.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: u,
                            onProgressChanged: a,
                            widget3dStyleLeftRef: r,
                            shadowLipRef: n,
                            api: i,
                        }) => {
                            const c = q().model,
                                d = c.root.get(),
                                m = d.currentLevel,
                                E = d.currentPointsInLevel,
                                g = d.showLevelsAnimations,
                                p = d.chapterType === x.EXTRA,
                                b = c.computes.getFreeFinalRewards(),
                                A = c.levels.get(),
                                h = (0, s.useRef)({ update: () => {} }),
                                v = (0, s.useRef)({ update: () => {} });
                            i.current.moveProgressBars = (e) => {
                                h.current.update(e), v.current.update(e);
                            };
                            const C = (0, s.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                f = C[0],
                                F = C[1],
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
                                B = (0, _.GS)().mediaSize;
                            (0, s.useEffect)(() => {
                                (0, w.Eu)().then(() => {
                                    const e = D();
                                    if (e) {
                                        const t =
                                            Math.floor(
                                                (viewEnv.getClientSizeRem().width - e.currentLevelWidth) / e.levelWidth,
                                            ) + 1;
                                        F({
                                            levelWidth: e.levelWidth,
                                            currentLevelWidth: e.currentLevelWidth,
                                            maxCardsShown: t,
                                        });
                                    }
                                });
                            }, [B, D, A.length, m, E]),
                                (0, s.useEffect)(() => {
                                    g && (0, y.G)(R.sounds.bp_progress_bar_start());
                                }, [g]),
                                (0, s.useEffect)(() => {
                                    a && a();
                                }, [m, E, a]);
                            const S = !p && We(b).mainReward === Te;
                            return o().createElement(
                                'div',
                                { className: _a.wrapper },
                                S &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(un, { widget3dStyleRef: r, level: ao, isShowTitle: !0 }),
                                        o().createElement(
                                            'div',
                                            { className: l()(_a.decor, _a.decor__left) },
                                            o().createElement('div', { className: _a.decorBackground }),
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: _a.bookmarkBackground, ref: n },
                                            o().createElement(wr, {
                                                isDisappeared: !0,
                                                mixClass: _a.bookmarkLeftResponsive,
                                            }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: _a.section },
                                    o().createElement(to, {
                                        sectionKey: 'baseCard',
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        potentialLevelCardRef: u,
                                        maxVisibleCards: g ? f.maxCardsShown : 0,
                                        currentLevel: m,
                                    }),
                                    o().createElement(
                                        on,
                                        uo({ progressApi: h, freePointsApi: v, progressChange: a }, f),
                                    ),
                                    o().createElement(to, {
                                        sectionKey: 'basePremiumCard',
                                        isPremium: !0,
                                        currentCardRef: e,
                                        freeProgressionCutCardRef: t,
                                        potentialLevelCardRef: u,
                                        maxVisibleCards: f.maxCardsShown,
                                        currentLevel: m,
                                    }),
                                ),
                                S &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            'div',
                                            { className: _a.decor },
                                            o().createElement('div', { className: _a.decorBackground }),
                                        ),
                                        o().createElement(un, { level: 4 }),
                                    ),
                            );
                        },
                    );
                function no() {
                    return (
                        (no =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        no.apply(this, arguments)
                    );
                }
                function so(e, t, u, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, r);
                }
                const oo = { allowedButtons: [or.MainButton] },
                    io = R.strings.battle_pass.progression;
                let lo;
                !(function (e) {
                    (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel');
                })(lo || (lo = {}));
                const co = (0, k.Pi)(({ onScrollToEnd: e, onHorizontalScroll: t }) => {
                        const u = q().model,
                            a = u.levels.get(),
                            r = u.root.get(),
                            n = r.currentLevel,
                            i = r.isBattlePassPurchased,
                            c = r.showBuyAnimations,
                            d = r.chapterType,
                            _ = (0, s.useRef)({ moveProgressBars: () => {} }),
                            m = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            g = (0, s.useRef)(null),
                            p = (0, s.useRef)(null),
                            b = (0, s.useRef)(null),
                            A = (0, s.useRef)(null),
                            h = (0, s.useRef)(null),
                            v = (0, s.useRef)(0),
                            C = d === x.EXTRA,
                            f = (0, s.useState)(lo.Hidden),
                            D = f[0],
                            B = f[1],
                            S = (0, s.useState)(lo.Hidden),
                            P = S[0],
                            y = S[1],
                            k = (0, s.useState)(!1),
                            R = k[0],
                            L = k[1],
                            N = Fa(),
                            T = N.animationScroll.scrollPosition,
                            I = N.applyScroll,
                            M = N.events,
                            O = N.handleMouseWheel,
                            $ = N.getContainerSize,
                            H = N.getWrapperSize,
                            W = (function (e, t, u) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    n = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, s.useState)(sr),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = d.type === nr.Dragging ? 'move' : 'grab');
                                    }, [a, d.type]),
                                    (0, s.useEffect)(() => {
                                        if (d.type !== nr.Dragging) return;
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
                                        if (d.type !== nr.End) return;
                                        const e = () => {
                                            _(sr);
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
                                                    type: nr.Dragging,
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
                            })(N, void 0, oo),
                            U = W[0],
                            V = W[1],
                            j = (e) => {
                                U.type === nr.Dragging && V({ type: nr.End }), O(e);
                            },
                            Y = (0, s.useMemo)(() => Object.assign({}, N, { handleMouseWheel: j }), []),
                            X = (0, s.useCallback)(
                                (e) => {
                                    const t = p.current ? p.current.offsetWidth : 0,
                                        u = b.current ? b.current.offsetWidth : 0;
                                    if (m.current) {
                                        const a = H();
                                        _.current.moveProgressBars({
                                            viewPort: m.current,
                                            horizontalScrollPosition: a ? e - a : e,
                                            leftOffset: t + u,
                                        }),
                                            L(C || e > t + 0.5 * u);
                                    }
                                },
                                [H, C],
                            ),
                            Z = (0, s.useCallback)((e = !1) => {
                                const t = E.current;
                                let u = 0,
                                    a = 0;
                                const r = p.current ? p.current.offsetWidth : 0,
                                    n = b.current ? b.current.offsetWidth : 0;
                                t && ((u = t.width()), (a = t.offsetLeft() + r + n));
                                const s = m.current;
                                let o = 0;
                                if (u && s) {
                                    const t = 0.5 * s.offsetWidth;
                                    e && v.current
                                        ? (o = a + u - 0.5 * v.current - t)
                                        : ((o = a + 0.5 * u - t), (v.current = u));
                                }
                                return (o = Math.round(o < 0 ? 0 : o)), o;
                            }, []),
                            K = () => {
                                const e = m.current,
                                    t = E && E.current,
                                    u = g.current,
                                    a = p.current ? p.current.offsetWidth : 0,
                                    r = b.current ? b.current.offsetWidth : 0;
                                if (t) {
                                    const n = t.offsetLeft() + a + r,
                                        s = (null == u ? void 0 : u.offsetLeft()) + a + r,
                                        o =
                                            T.goal < n - e.offsetWidth
                                                ? lo.NavToCurrentLevel
                                                : u && T.goal < s - e.offsetWidth
                                                  ? lo.NavToPotentialLevel
                                                  : lo.Hidden,
                                        i = (() => {
                                            switch (!0) {
                                                case u && T.goal > s + u.width():
                                                    return lo.NavToPotentialLevel;
                                                case T.goal > n + t.width():
                                                    return lo.NavToCurrentLevel;
                                                default:
                                                    return lo.Hidden;
                                            }
                                        })();
                                    B(o), y(i);
                                }
                            },
                            Q = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && m && m.current) {
                                        const u = e.current,
                                            a = p.current ? p.current.offsetWidth : 0,
                                            r = b.current ? b.current.offsetWidth : 0;
                                        let n = 0,
                                            s = 0;
                                        u && ((n = u.width()), (s = u.offsetLeft() + a + r));
                                        const o = m.current;
                                        n && o && (t = s + 0.5 * n - 0.5 * o.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t));
                                    }
                                    return t;
                                })(e);
                                X(T.goal), I(t), K();
                            },
                            J = (e) => {
                                switch (e) {
                                    case lo.NavToCurrentLevel:
                                        return Q(E);
                                    case lo.NavToPotentialLevel:
                                        return Q(g);
                                }
                            },
                            ee = (e) => {
                                switch (e) {
                                    case lo.NavToCurrentLevel:
                                        return { type: z.Default, tooltipBody: io.backToCurrentStageArrow.descr() };
                                    case lo.NavToPotentialLevel:
                                        return { type: z.Gray, tooltipBody: io.backToPotentialStageArrow.descr() };
                                }
                            },
                            te = () => {
                                const t = N.getBounds()[1];
                                X(T.goal), K(), e(T.goal === t);
                            };
                        return (
                            (0, s.useEffect)(
                                () =>
                                    F(() => {
                                        i && c && I(Z());
                                    }),
                                [I, Z, i, c],
                            ),
                            (0, s.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = $(),
                                                    t = T.goal;
                                                yield (0, w.Eu)(), yield xu();
                                                const u = $(),
                                                    a = m.current,
                                                    r = N.getBounds()[1],
                                                    n = 0.25 * a.offsetWidth,
                                                    s = u && e && u !== e ? (t * u) / e : t;
                                                X(s), I(s > r - n ? r : s);
                                            }),
                                            function () {
                                                var t = this,
                                                    u = arguments;
                                                return new Promise(function (a, r) {
                                                    var n = e.apply(t, u);
                                                    function s(e) {
                                                        so(n, a, r, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        so(n, a, r, s, o, 'throw', e);
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
                            (0, s.useEffect)(() => (0, ut.F)(() => Q(E), 700), [n]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                        t(!1), X(T.goal);
                                    },
                                    u = () => {
                                        t(!0), X(T.goal);
                                    };
                                return (
                                    M.on('rest', e),
                                    M.on('start', u),
                                    () => {
                                        M.off('rest', e), M.off('start', u);
                                    }
                                );
                            }, [U.type, M, X, t, T.goal]),
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: l()(_a.bookmark, _a.bookmark__start) },
                                    o().createElement(wr, {
                                        chapterStep: a.length,
                                        mixClass: l()(_a.bookmarkLeftFixed, R && _a.bookmarkLeftFixed__active),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: _a.scrollWrapper, ref: m, onClick: te, onMouseLeave: K, onWheel: te },
                                    o().createElement(
                                        rr.Horizontal.Area.Default,
                                        { api: Y, barClassNames: { base: _a.scrollBarPosition }, onDrag: te },
                                        o().createElement(ro, {
                                            api: _,
                                            currentCardRef: E,
                                            freeProgressionCutCardRef: A,
                                            potentialLevelCardRef: g,
                                            separatorRef: h,
                                            widget3dStyleLeftRef: p,
                                            shadowLipRef: b,
                                            onProgressChanged: te,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            _a.scrollToButton,
                                            _a.scrollToButton__backward,
                                            P !== lo.Hidden && _a.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        lr,
                                        no(
                                            { onClick: () => J(P), direction: G.back, className: _a.arrowButton },
                                            ee(P),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            _a.scrollToButton,
                                            _a.scrollToButton__forward,
                                            D !== lo.Hidden && _a.scrollToButton__visible,
                                        ),
                                    },
                                    o().createElement(
                                        lr,
                                        no(
                                            { onClick: () => J(D), direction: G.forward, className: _a.arrowButton },
                                            ee(D),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    _o = (0, k.Pi)(() => {
                        const e = q().model.root.get().chapterType === x.EXTRA,
                            t = (0, s.useState)(!1),
                            u = t[0],
                            a = t[1],
                            r = (0, s.useState)(!1),
                            n = r[0],
                            i = r[1];
                        return o().createElement(
                            'div',
                            { className: l()(_a.base, e && _a.base__isExtra) },
                            o().createElement(
                                'div',
                                { className: l()(_a.shadow, _a.shadow__left) },
                                o().createElement('div', {
                                    className: l()(_a.additionalShadow, _a.additionalShadow__active),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(_a.shadow, _a.shadow__right) },
                                o().createElement('div', {
                                    className: l()(_a.additionalShadow, !u && n && _a.additionalShadow__active),
                                }),
                            ),
                            o().createElement(co, {
                                onScrollToEnd: (e) => {
                                    a(e);
                                },
                                onHorizontalScroll: (e) => {
                                    i(e);
                                },
                            }),
                        );
                    }),
                    mo = (0, k.Pi)(() => {
                        const e = q(),
                            t = e.model,
                            u = t.root,
                            a = t.computes,
                            r = e.controls,
                            n = u.get(),
                            s = n.chapterType,
                            i = n.chapterID,
                            c = n.actionType,
                            d = n.isPaused,
                            _ = c !== N.NoAction,
                            m = a.hasCustomSettings(),
                            E = R.strings.battle_pass.progression.btnAllChapters(),
                            g = l()(ue, m && ae);
                        return o().createElement(
                            'div',
                            { className: l()(J, m && ee), style: (0, Q.W4)(i) },
                            s !== x.HOLIDAY &&
                                o().createElement(
                                    'div',
                                    { className: se },
                                    o().createElement(K, {
                                        caption: E,
                                        side: 'left',
                                        type: 'back',
                                        onClick: r.chapterChoice,
                                    }),
                                ),
                            !d && o().createElement('div', { className: g }, o().createElement(_o, null)),
                            o().createElement('div', { className: ne }, _ && o().createElement(Nu, null)),
                            o().createElement('div', { className: te }, o().createElement(da, null)),
                            m && o().createElement('div', { className: re }, o().createElement(wu, null)),
                        );
                    }),
                    Eo = 'BattlePassProgressionsViewApp_base_40',
                    go = (0, k.Pi)(() => {
                        const e = q(),
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
                                    F(() => {
                                        u.viewLoad();
                                    }),
                                [],
                            ),
                            (0, s.useEffect)(() => {
                                a && (0, y.G)(R.sounds.bp_pick_up_award());
                            }, [a]),
                            o().createElement('div', { className: Eo }, o().createElement(mo, null))
                        );
                    });
                engine.whenReady.then(() => {
                    f().render(
                        o().createElement(j, null, o().createElement(v, null, o().createElement(go, null))),
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
                            ? { backgroundImage: `url(${n(t.chapter, e)})` }
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
                var A = u(2372),
                    h = u(9766);
                const v = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    C = ({ state: e, count: t, size: u, maxCount: a = 0 }) => {
                        switch (e) {
                            case F.InProgress:
                                return r().createElement(h.z, { text: `${t || 0} / ${a}` });
                            case F.Completed:
                                return r().createElement('div', { className: s()(v.base, v[`base__${u}`]) });
                            default:
                                return r().createElement(A.A, { format: 'integral', value: t });
                        }
                    },
                    f = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let F;
                !(function (e) {
                    (e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed');
                })(F || (F = {}));
                const D = ({
                        size: e,
                        count: t,
                        maxCount: u,
                        state: a = F.Default,
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
                                r().createElement(D, { size: n, count: e, disabled: t }),
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
                                r().createElement(D, { size: u, count: e }),
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
                    $ = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
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
                        })(e, $);
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
                        H({ className: E }, c),
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
                W.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
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
                            A = o === m.W9.Small && n,
                            h = p ? U.description.collectionCompleted() : U.description.collection(),
                            v = (0, G.z)(() => {
                                c.$.playClick(), i();
                            });
                        return r().createElement(
                            l.i,
                            { body: h, isEnabled: Boolean(h) },
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
                                r().createElement(b, { size: o, isHover: _, type: m.w2.Coin, highlighted: A }),
                                r().createElement(g, { size: o, isHover: _ }),
                                r().createElement(S, { size: o, isHover: _, type: m.w2.Collection }),
                                r().createElement(D, {
                                    size: o,
                                    count: e,
                                    maxCount: t,
                                    state: p ? F.Completed : F.InProgress,
                                }),
                                r().createElement(k, { size: o, isHover: _, title: U.title.collection() }),
                                u > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: z.bubble },
                                        r().createElement(W, { size: 'small' }),
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
                    X = {
                        base: 'PointAward_base_6f',
                        base__big: 'PointAward_base__big_dc',
                        locked: 'PointAward_locked_7c',
                        lockedHover: 'PointAward_lockedHover_80',
                        locked__hidden: 'PointAward_locked__hidden_bb',
                        lockedHover__hidden: 'PointAward_lockedHover__hidden_17',
                        base__hover: 'PointAward_base__hover_50',
                    },
                    Z = R.strings.battle_pass.awardsWidget,
                    K = ({ count: e, onClick: t, size: u, isLocked: n, hasExtra: o = !1 }) => {
                        const i = (0, a.useState)(!1),
                            d = i[0],
                            _ = i[1],
                            E = ((e, t) => {
                                switch (!0) {
                                    case e && t:
                                        return Z.description.pointLockedExceptExtra();
                                    case e && !t:
                                        return Z.description.pointLocked();
                                    default:
                                        return Z.description.point();
                                }
                            })(n, o);
                        return r().createElement(
                            l.i,
                            { body: E, isEnabled: Boolean(E) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(X.base, X[`base__${u}`], d && X.base__hover),
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
                                r().createElement(D, { size: u, count: e, isLocked: n }),
                                r().createElement(k, { size: u, isHover: d, title: Z.title.point() }),
                                r().createElement('div', {
                                    className: s()(X.locked, X[`locked__${u}`], !n && X.locked__hidden),
                                }),
                                r().createElement('div', {
                                    className: s()(X.lockedHover, X[`lockedHover__${u}`], !n && X.lockedHover__hidden),
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
                                        A = E.isFirstEnter,
                                        h = E.isCollectionsEnabled;
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
                                                hasTrigger: A,
                                                onClick: t.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: h,
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
                            chapterID: A = 0,
                            seasonNum: h = -1,
                            isProgressionCompleted: v = !1,
                            hasBeenActive: C = !1,
                            isChapterSelection: f = !1,
                            isProgression: F = !1,
                        }) => {
                            let D = '',
                                B = '';
                            u === m.$u.Small
                                ? ((D = 'Small'), (B = '__small'))
                                : u === m.$u.Micro && ((D = 'Micro'), (B = '__micro'));
                            const w = a === m.Bq.SwitchedChapterRightNow,
                                S = a === m.Bq.CompletedRightNow,
                                P = ((e, t, u, a, r) => (e || r ? t || !u : t || !a))(f, v, C, b, F),
                                y = !F && !f;
                            return s().createElement(
                                s().Fragment,
                                null,
                                P
                                    ? s().createElement('div', {
                                          className: r()(E.icon, B && E[`icon${B}`], S && E[`icon__animated${D}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = g(l, u);
                                                  if (y) {
                                                      if (v) {
                                                          const u = { path: e.icon, name: i.Season, id: h };
                                                          return o(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!b) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, A, t);
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
                                                  w && E[`label__new${D}`],
                                                  !S && v && E.label__disabled,
                                                  E[`label__${d}${D}`],
                                                  n && E[`label__hasProgress${D}`],
                                                  n && E[`label__hasProgress${D}${F ? 'Progression' : ''}`],
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
                                                w && E[`label__new${D}`],
                                                E[`label__${p}${D}`],
                                                n && E[`label__hasProgress${D}`],
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
                const A = {
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
                    h = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const o = r()(A.base, A[`base__${n}`], u && A.base__completed, !u && a && A.base__hidden);
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
                const F = (e, t, u, a, r) => {
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
                    D = (e, t) => {
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
                            A = void 0 !== b && b,
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
                                    style: D(P, y),
                                }),
                            s().createElement(
                                'div',
                                { className: r()(l.image, y && l[`image__${y}`]), style: F(g, R, a, S, y) },
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
                                                    isProgression: A,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        I &&
                                            s().createElement(h, {
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
            var e = { 1488: 0, 7737: 0, 1730: 0, 8363: 0 };
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
