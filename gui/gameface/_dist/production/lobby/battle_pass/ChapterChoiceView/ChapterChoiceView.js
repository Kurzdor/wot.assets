(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var a = t(6179),
                    n = t.n(a),
                    r = t(9916);
                class s extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3649),
                    s = t(6179),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: a = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: n()(o.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, a, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a.z });
                var a = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => _ });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    s = t(5262);
                const i = a.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    _ = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var a = t(3138),
                    n = t(6536),
                    r = t(6179),
                    s = t.n(r),
                    i = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(i.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        _ = t[1],
                        d = (0, r.useCallback)((e, u) => {
                            const t = a.O.view.pxToRem(e),
                                n = a.O.view.pxToRem(u);
                            _(Object.assign({ width: t, height: n }, (0, l.T)(t, n, o.j)));
                        }, []),
                        E = (0, r.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, n.Z)(() => {
                        a.O.client.events.on('clientResized', d), a.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', d),
                                    a.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [d, E],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const s = ['children'];
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, s);
                    const i = (0, a.useContext)(r.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        _ = i.small,
                        d = i.extraSmall,
                        E = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        C = i.extraSmallWidth,
                        D = i.extraLargeHeight,
                        h = i.largeHeight,
                        b = i.mediumHeight,
                        B = i.smallHeight,
                        p = i.extraSmallHeight,
                        g = { extraLarge: D, large: h, medium: b, small: B, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && _) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, n.H)(u, t, g);
                        if (t.largeWidth && m) return (0, n.H)(u, t, g);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, g);
                        if (t.smallWidth && F) return (0, n.H)(u, t, g);
                        if (t.extraSmallWidth && C) return (0, n.H)(u, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && h) return u;
                            if (t.mediumHeight && b) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && p) return u;
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
                (0, a.memo)(i);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
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
                t.d(u, { YN: () => n.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var a;
                function n(e, u, t) {
                    const a = (function (e, u) {
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
                        n = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => n }),
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
            1975: (e, u, t) => {
                'use strict';
                t.d(u, { $u: () => _.$, ko: () => A });
                var a = t(6483),
                    n = t.n(a),
                    r = t(6179),
                    s = t.n(r),
                    i = t(2468),
                    o = t(7442),
                    l = t(2407),
                    c = t(156),
                    _ = t(7736),
                    d = t(1635);
                t(6823);
                const E = c.Gh,
                    m = {
                        freezed: !1,
                        withStack: !1,
                        type: _.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    A = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = E,
                            size: t = _.$.Default,
                            animationSettings: a = m,
                            disabled: r = !1,
                            withoutBackground: A = !1,
                            value: F,
                            deltaFrom: C,
                            lineRef: D,
                            onChangeAnimationState: h,
                            onEndAnimation: b,
                            onComplete: B,
                        }) => {
                            const p = (0, d.S)(F, e, C);
                            return s().createElement(
                                'div',
                                { className: n()(i.Z.base, i.Z[`base__${t}`]), style: (0, c.VQ)(u) },
                                !A && s().createElement(o.J, { size: t }),
                                s().createElement(l.r, {
                                    size: t,
                                    lineRef: D,
                                    disabled: r,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: b,
                                    onChangeAnimationState: h,
                                    onComplete: B,
                                }),
                            );
                        },
                    );
            },
            7442: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6483),
                    s = t.n(r),
                    i = t(7736),
                    o = t(2468);
                const l = ({ size: e = i.$.Default }) => {
                    const u = s()(o.Z.background, o.Z[`background__${e}`]);
                    return n().createElement('div', { className: u });
                };
            },
            8150: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => o });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6483),
                    s = t.n(r),
                    i = t(8804);
                const o = ({ size: e }) => {
                    const u = s()(i.Z.base, i.Z[`base__${e}`]);
                    return n().createElement('div', { className: u });
                };
            },
            2407: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(5680),
                    s = t(6736),
                    i = t(2386);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: a,
                        deltaFrom: l,
                        animationSettings: c,
                        onEndAnimation: _,
                        onChangeAnimationState: d,
                        onComplete: E,
                    }) => {
                        if (l === u)
                            return n().createElement(r.M, {
                                key: `${l}-${u}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: a,
                                onComplete: E,
                            });
                        const m = {
                            from: l,
                            to: u,
                            size: e,
                            lineRef: t,
                            disabled: a,
                            animationSettings: c,
                            onComplete: E,
                            onEndAnimation: _,
                            onChangeAnimationState: d,
                        };
                        return c.withStack
                            ? n().createElement(i.F, m)
                            : n().createElement(s.H, o({ key: `${l}-${u}` }, m));
                    },
                );
            },
            1848: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6483),
                    s = t.n(r),
                    i = t(8150),
                    o = t(6664);
                const l = (0, a.memo)(
                    ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: r, withoutBounce: l }) => {
                        const c = s()(
                                o.Z.base,
                                o.Z[`base__${e}`],
                                t && o.Z.base__disabled,
                                r && o.Z.base__finished,
                                l && o.Z.base__withoutBounce,
                            ),
                            _ = !t && !r;
                        return n().createElement(
                            'div',
                            { className: c, style: a, ref: u },
                            n().createElement('div', { className: o.Z.pattern }),
                            n().createElement('div', { className: o.Z.gradient }),
                            _ && n().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => m });
                var a = t(6483),
                    n = t.n(a),
                    r = t(122),
                    s = t(6179),
                    i = t.n(s),
                    o = t(8150),
                    l = t(6823),
                    c = t(6147);
                const _ = (e) => (e ? { left: 0 } : { right: 0 }),
                    d = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    E = (e) => ({ transitionDuration: `${e}ms` }),
                    m = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: m,
                            to: A,
                            onEndAnimation: F,
                            onChangeAnimationState: C,
                            className: D,
                        }) => {
                            const h = A < a,
                                b = (0, s.useState)(l.S.Idle),
                                B = b[0],
                                p = b[1],
                                g = B === l.S.End,
                                v = B === l.S.Idle,
                                w = B === l.S.Grow,
                                f = B === l.S.Shrink,
                                S = (0, s.useCallback)(
                                    (e) => {
                                        p(e), C && C(e);
                                    },
                                    [C],
                                ),
                                y = (0, s.useCallback)(
                                    (e, u) =>
                                        (0, r.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, s.useEffect)(() => {
                                if (!t)
                                    return v
                                        ? y(l.S.Grow, u)
                                        : w
                                          ? y(l.S.Shrink, e)
                                          : f
                                            ? y(l.S.End, e)
                                            : void (g && F && F());
                            }, [y, t, g, w, v, f, F, u, e]);
                            const x = (0, s.useMemo)(() => Object.assign({ width: '100%' }, E(e), _(h)), [h, e]),
                                L = (0, s.useMemo)(() => Object.assign({ width: '0%' }, E(e), _(h)), [h, e]),
                                k = (0, s.useMemo)(() => Object.assign({ width: '0%' }, d(h, a), E(e)), [a, h, e]),
                                P = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(A - a)}%` }, d(h, a), E(e)),
                                    [a, h, A, e],
                                );
                            if (g) return null;
                            const M = n()(c.Z.base, D, h && 0 === A && c.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: v ? k : P, className: M },
                                i().createElement(
                                    'div',
                                    { style: f ? L : x, className: c.Z.glow },
                                    i().createElement(o.$, { size: m }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, u, t) => {
                'use strict';
                t.d(u, { x: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(122),
                    s = t(6823),
                    i = t(8150),
                    o = t(9919);
                const l = (0, a.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: u,
                        freezed: t,
                        from: l,
                        size: c,
                        to: _,
                        onEndAnimation: d,
                        onChangeAnimationState: E,
                    }) => {
                        const m = _ < l,
                            A = (0, a.useState)(s.V.Idle),
                            F = A[0],
                            C = A[1],
                            D = F === s.V.In,
                            h = F === s.V.End,
                            b = F === s.V.Idle,
                            B = (0, a.useCallback)(
                                (e) => {
                                    C(e), E && E(e);
                                },
                                [E],
                            );
                        (0, a.useEffect)(() => {
                            if (b && !t) {
                                const e = u;
                                return (0, r.F)(() => {
                                    B(s.V.In);
                                }, e);
                            }
                        }, [B, t, b, u]),
                            (0, a.useEffect)(() => {
                                if (D) {
                                    const t = e + u;
                                    return (0, r.F)(() => {
                                        d && d(), B(s.V.End);
                                    }, t);
                                }
                            }, [B, D, d, u, e]);
                        const p = (0, a.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            g = (0, a.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${u}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, u, e],
                            ),
                            v = (0, a.useMemo)(
                                () => ({ width: `${Math.abs(l - _)}%`, left: `${m ? _ : l}%` }),
                                [l, m, _],
                            );
                        return h
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: o.Z.base, style: v },
                                  n().createElement(
                                      'div',
                                      { style: b ? p : g, className: o.Z.delta },
                                      n().createElement(i.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => o });
                var a = t(6179),
                    n = t.n(a),
                    r = t(2434),
                    s = t(1848),
                    i = t(6823);
                const o = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: o,
                        disabled: l,
                        isComplete: c,
                        animationSettings: _,
                        onEndAnimation: d,
                        onChangeAnimationState: E,
                    }) => {
                        const m = e < t,
                            A = (0, a.useState)(!1),
                            F = A[0],
                            C = A[1],
                            D = (0, a.useCallback)(
                                (e) => {
                                    e === i.S.Shrink && C(!0), E && E(e);
                                },
                                [E],
                            ),
                            h = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            b = (0, a.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${_.line.duration}ms` }),
                                [_.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, {
                                size: u,
                                lineRef: o,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: m && 0 === e,
                                baseStyles: F ? b : h,
                            }),
                            t >= 0 &&
                                n().createElement(r.O, {
                                    transitionDuration: _.delta.duration,
                                    transitionDelay: _.delta.delay,
                                    onChangeAnimationState: D,
                                    freezed: _.freezed,
                                    onEndAnimation: d,
                                    from: t,
                                    size: u,
                                    to: e,
                                    className: _.delta.className,
                                }),
                        );
                    },
                );
            },
            828: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => i });
                var a = t(6179),
                    n = t.n(a),
                    r = t(5913),
                    s = t(1848);
                const i = (0, a.memo)(
                    ({
                        to: e,
                        size: u,
                        from: t,
                        lineRef: i,
                        disabled: o,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: _,
                        onEndAnimation: d,
                    }) => {
                        const E = (0, a.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, { size: u, lineRef: i, disabled: o, isComplete: l, baseStyles: E }),
                            t >= 0 &&
                                n().createElement(r.x, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: t,
                                    size: u,
                                    to: e,
                                    onChangeAnimationState: _,
                                    onEndAnimation: d,
                                }),
                        );
                    },
                );
            },
            6736: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => c });
                var a = t(6179),
                    n = t.n(a),
                    r = t(7736),
                    s = t(828),
                    i = t(538);
                const o = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let u = e.onComplete,
                        t = e.onEndAnimation,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, o);
                    const _ = (0, a.useState)(!1),
                        d = _[0],
                        E = _[1],
                        m = (0, a.useCallback)(() => {
                            const e = 100 === c.to;
                            e !== d && E(e), e && u && u(), t && t();
                        }, [d, u, t, c.to]);
                    switch (c.animationSettings.type) {
                        case r.r.Simple:
                            return n().createElement(s.D, l({}, c, { onEndAnimation: m, isComplete: d }));
                        case r.r.Growing:
                            return n().createElement(i.F, l({}, c, { onEndAnimation: m, isComplete: d }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { S: () => a, V: () => n }),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(n || (n = {}));
            },
            2386: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => o });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6736);
                const s = ['onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, s);
                    const o = (0, a.useRef)({}),
                        l = (0, a.useCallback)(() => {
                            (o.current.from = void 0), u && u();
                        }, [u]),
                        c = 'number' == typeof o.current.from ? o.current.from : t.from;
                    return (
                        (o.current.from = c),
                        n().createElement(r.H, i({}, t, { onEndAnimation: l, key: `${c}-${t.to}`, from: c }))
                    );
                });
            },
            5680: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => s });
                var a = t(6179),
                    n = t.n(a),
                    r = t(1848);
                const s = ({ size: e, value: u, lineRef: t, disabled: s, onComplete: i }) => {
                    const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                        l = 100 === u;
                    return (
                        (0, a.useEffect)(() => {
                            l && i && i();
                        }, [l, i]),
                        n().createElement(r.t, { size: e, disabled: s, baseStyles: o, isComplete: l, lineRef: t })
                    );
                };
            },
            156: (e, u, t) => {
                'use strict';
                t.d(u, { Gh: () => n, VQ: () => a });
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
                    n = {
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
                    };
            },
            7736: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { $: () => a, r: () => n }),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(n || (n = {}));
            },
            1635: (e, u, t) => {
                'use strict';
                t.d(u, { S: () => s });
                var a = t(6179),
                    n = t(7515);
                const r = (e, u, t) => {
                        if ('number' == typeof t) {
                            return ((0, n.u)(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    s = (e, u, t) =>
                        (0, a.useMemo)(() => {
                            const a = ((0, n.u)(0, u, e) / u) * 100;
                            return { value: a, deltaFrom: r(a, u, t) };
                        }, [t, u, e]);
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var a = t(2056),
                    n = t(6179),
                    r = t.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, s);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: _ });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [_, t, l, c, d]);
                        return r().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var a = t(7902),
                    n = t(9916),
                    r = t(6179);
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
                function i(e) {
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
                const o = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            C = e.decoratorId,
                            D = void 0 === C ? 0 : C,
                            h = e.isEnabled,
                            b = void 0 === h || h,
                            B = e.targetId,
                            p = void 0 === B ? 0 : B,
                            g = e.onShow,
                            v = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, s);
                        const f = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => p || (0, a.F)().resId, [p]),
                            y = (0, r.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: i(n) }, S),
                                    g && g(),
                                    (f.current.isVisible = !0));
                            }, [t, D, n, S, g]),
                            x = (0, r.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, S),
                                        f.current.isVisible && v && v(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, D, S, v]),
                            L = (0, r.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === b && x();
                            }, [b, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              x(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && x(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && x(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var k;
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => a });
                const a = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => a });
                const a = (e, u) => {
                    let t;
                    const a = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(a);
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var a = t(3138);
                function n(e, u) {
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
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: r = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = t(u),
                            n = r.split('.').reduce((e, u) => e[u], a);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const s = 'string' == typeof n ? `${r}.${n}` : r,
                                o = a.O.view.addModelObserver(s, u, !0);
                            return i.set(o, t), e && t(l(n)), o;
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
                            for (var e, t = n(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var a = t(4598),
                    n = t(9174),
                    r = t(6179),
                    s = t.n(r),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, r.useRef)([]),
                                E = (t, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        s = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : _(e),
                                                        s = n.LO.box(r, { equals: a.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = _(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
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
                                                            s = Object.entries(r),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(o),
                                F = A[0],
                                C = A[1],
                                D = (0, r.useState)(() => E(o, l, _)),
                                h = D[0],
                                b = D[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? b(E(F, l, _)) : (m.current = !0);
                                }, [_, F, l]),
                                (0, r.useEffect)(() => {
                                    C(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        h.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [h],
                                ),
                                s().createElement(t.Provider, { value: h }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => r, onScaleUpdated: () => s });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = t(527),
                    n = t(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2493: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959),
                    n = t(514);
                const r = { view: t(7641), client: a, sound: n.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var a = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, a.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, r, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => g,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => b,
                        pxToRem: () => C,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function g() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                t.d(u, { jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => a });
                const a = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        a = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (a = window.subViews[t].id)),
                        { caller: t, stack: u, resId: a }
                    );
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => r });
                var a = t(6179);
                const n = [];
                function r(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), n)
                    );
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var a = t(6179),
                    n = t(7739),
                    r = t(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, a.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
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
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
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
                    })(n || (n = {}));
            },
            9480: (e, u, t) => {
                'use strict';
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => o, UI: () => s, sE: () => l, v_: () => c, yW: () => i });
                const n = a;
                function r(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                function i(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(n(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(n(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function l(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const a = r(e[t]);
                        if (u(a, t, e)) return a;
                    }
                }
                function c(e, u = ',') {
                    let t = '';
                    for (let a = 0; a < e.length; a++) {
                        a > 0 && (t += u);
                        const r = n(e, a);
                        t += null == r ? '' : String(r);
                    }
                    return t;
                }
            },
            7727: (e, u, t) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => n, G: () => a });
                const n = {
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
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => s, Uw: () => A, WU: () => r, e: () => i, v2: () => n });
                var a = t(1281);
                let n;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(n || (n = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    _ = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? l : c, []),
                    d = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = n.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = o(e);
                            return _(r, /( )/, u).forEach((e) => (t = t.concat(_(e, a, n.left)))), t;
                        })(e, u);
                    },
                    A = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => C });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const n = a;
                var r = t(1358);
                var s = t(8613);
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
                var d = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            A(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    h = () => D(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var B = t(7572);
                const p = n.instance,
                    g = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(_),
                                    height: E.O.view.pxToRem(d),
                                };
                            D(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = g;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1205: (e, u, t) => {
                'use strict';
                var a = t(7739),
                    n = t(6179),
                    r = t.n(n),
                    s = t(6483),
                    i = t.n(s),
                    o = t(926),
                    l = t.n(o),
                    c = t(5415);
                const _ = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const E = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, _);
                        const n = (0, c.GS)(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            l = n.mediaSize;
                        return r().createElement('div', d({ className: i()(t, E[s], m[o], A[l]) }, a), u);
                    },
                    C = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, C);
                    return r().createElement(a.ZN, null, r().createElement(F, t, u));
                };
                var h = t(493),
                    b = t.n(h),
                    B = t(7727);
                const p = {
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
                    g = [
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
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                class w extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, B.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, B.G)(this.props.soundClick);
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
                            a = e.goto,
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, g)),
                            m = i()(p.base, p[`base__${s}`], p[`base__${n}`], null == o ? void 0 : o.base),
                            A = i()(p.icon, p[`icon__${s}`], p[`icon__${n}`], null == o ? void 0 : o.icon),
                            F = i()(p.glow, null == o ? void 0 : o.glow),
                            C = i()(p.caption, p[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = i()(p.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            v(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && r().createElement('div', { className: p.shine }),
                            r().createElement('div', { className: A }, r().createElement('div', { className: F })),
                            r().createElement('div', { className: C }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var f = t(3138),
                    S = t(5521);
                t(9916);
                const y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function x(e = S.n.NONE, u = y, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== S.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && f.O.view.isEventHandled()) return;
                                f.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, a]);
                }
                var L = t(9480),
                    k = t(3403),
                    P = t(6254);
                let M, T;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(M || (M = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(T || (T = {}));
                var N = t(3215),
                    I = t(4598),
                    O = t(3946);
                const H = (0, N.q)()(
                        ({ observableModel: e }) => {
                            const u = e.array('chapters'),
                                t = { root: e.object(), chapters: u },
                                a = (0, O.Om)(() => L.G(u.get(), ({ isExtra: e }) => e)),
                                n = (0, O.Om)(() => L.G(u.get(), ({ chapterState: e }) => e === M.Active)),
                                r = (0, O.Om)(() => L.yW(u.get(), ({ chapterState: e }) => e === M.Completed)),
                                s = (0, O.Om)((e) => L.sE(u.get(), (u) => u.chapterID === e), { equals: I.jv }),
                                i = (0, O.Om)((e) => {
                                    const t = L.sE(u.get(), (u) => u.chapterID === e);
                                    return {
                                        levelProgression: (null == t ? void 0 : t.levelProgression) || 0,
                                        currentLevel: (null == t ? void 0 : t.currentLevel) || 0,
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getChapterById: s,
                                    getProgressionInfoByChapterId: i,
                                    hasExtra: a,
                                    hasActive: n,
                                    isCompleted: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            selectChapter: e.createCallback((e) => ({ chapterID: e }), 'onChapterSelect'),
                            buyChapter: e.createCallback((e) => ({ chapterID: e }), 'onBuyClick'),
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            close: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    $ = H[0],
                    G = H[1],
                    z = 'App_base_26',
                    W = 'App_additionalBackground_c6',
                    U = 'App_infoButtons_78',
                    j = 'App_header_41',
                    q = 'App_chapters_8a',
                    V = 'App_chapters__normal_df',
                    Z = 'App_chapters__extend_a3';
                var Y = t(9766);
                const X =
                    (e, u) =>
                    (...t) => {
                        if (e(...t)) return u(...t);
                    };
                let K;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(K || (K = {}));
                const Q = {
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
                    J = [
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
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const ue = (e) => {
                    let u = e.type,
                        t = e.children,
                        a = e.className,
                        s = e.classNames,
                        o = e.disabled,
                        l = void 0 !== o && o,
                        c = e.isVisibleLabel,
                        _ = void 0 !== c && c,
                        d = e.soundHover,
                        E = void 0 === d ? R.sounds.highlight() : d,
                        m = e.soundClick,
                        A = void 0 === m ? R.sounds.play() : m,
                        F = e.size,
                        C = void 0 === F ? 'normal' : F,
                        D = e.onClick,
                        h = e.onMouseEnter,
                        b = e.onMouseLeave,
                        p = e.onMouseDown,
                        g = e.onMouseUp,
                        v = e.onFocus,
                        w = e.onBlur,
                        f = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, J);
                    const S = (0, n.useState)(!1),
                        y = S[0],
                        x = S[1],
                        L = (0, n.useState)(!1),
                        k = L[0],
                        P = L[1],
                        M = (0, n.useRef)(null),
                        T = () => !1 === l,
                        N = (e) => T() && ((e) => e.button === K.LEFT)(e),
                        I = X(T, (e) => {
                            null == D || D(e);
                        }),
                        O = X(N, (e) => {
                            x(!0), null == p || p(e), A && (0, B.G)(A);
                        }),
                        H = X(N, (e) => {
                            x(!1), null == g || g(e);
                        }),
                        $ = X(T, (e) => {
                            P(!0), null == h || h(e), E && (0, B.G)(E);
                        }),
                        G = X(T, (e) => {
                            null == v || v(e);
                        }),
                        z = X(T, (e) => {
                            null == w || w(e);
                        });
                    return r().createElement(
                        'div',
                        ee(
                            {
                                ref: M,
                                className: i()(
                                    Q.base,
                                    l && Q.base__disabled,
                                    _ && Q.base__visibleLabel,
                                    !l && y && Q.base__mouseDown,
                                    !l && k && Q.base__hovered,
                                    a,
                                ),
                                onClick: I,
                                onMouseEnter: $,
                                onMouseLeave: (e) => {
                                    P(!1), x(!1), null == b || b(e);
                                },
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: z,
                            },
                            f,
                        ),
                        r().createElement('div', {
                            className: i()(Q.icon, Q[`icon__${C}`], Q[`icon__${u}`], null == s ? void 0 : s.icon),
                        }),
                        t &&
                            r().createElement(
                                'div',
                                { className: i()(Q.label, Q[`label__${C}`], null == s ? void 0 : s.label) },
                                t,
                            ),
                    );
                };
                var te = t(3815),
                    ae = t(9485);
                const ne = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    re = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const se = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    ie = (e) =>
                        se
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = re.length - 1; t >= 0; t--)
                                      for (; e >= re[t]; ) (u += ne[t]), (e -= re[t]);
                                  return u;
                              })(e);
                var oe = t(3649);
                const le = (e, u) => e.split(',').includes(u),
                    ce = {
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
                let _e, de;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(_e || (_e = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(de || (de = {}));
                const Ee = ({
                    isElite: e,
                    vehicleName: u,
                    vehicleShortName: t,
                    vehicleType: a,
                    vehicleLvl: n,
                    tags: s = '',
                    size: o = _e.extraSmall,
                    type: l = de.colored,
                    className: c,
                    classNames: _,
                    isShortName: d = !1,
                }) => {
                    const E = `${(0, oe.BN)(a)}${e ? '_elite' : ''}`,
                        m = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                    return r().createElement(
                        'div',
                        {
                            className: i()(
                                ce.base,
                                ce[`base__size${(0, oe.e)(o)}`],
                                ce[`base__type${(0, oe.e)(l)}`],
                                c,
                            ),
                        },
                        r().createElement('div', { className: i()(ce.level, null == _ ? void 0 : _.level) }, ie(n)),
                        r().createElement('div', {
                            className: i()(
                                ce.type,
                                e && ce[`type__elite${(0, oe.e)(o)}`],
                                ce[`type__${o}`],
                                null == _ ? void 0 : _.typeIcon,
                            ),
                            style: { backgroundImage: `url(${m})` },
                        }),
                        le(s, 'premiumIGR') && r().createElement('div', { className: ce.premiumIGR }),
                        r().createElement('div', { className: i()(ce.name, null == _ ? void 0 : _.name) }, d ? t : u),
                    );
                };
                let me, Ae, Fe, Ce, De, he, be;
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
                })(me || (me = {})),
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
                    })(Ae || (Ae = {})),
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
                    })(Fe || (Fe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ce || (Ce = {})),
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
                    })(De || (De = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(he || (he = {})),
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
                    })(be || (be = {}));
                t(2372);
                me.Items,
                    me.Equipment,
                    me.Xp,
                    me.XpFactor,
                    me.Blueprints,
                    me.BlueprintsAny,
                    me.Goodies,
                    me.Berths,
                    me.Slots,
                    me.Tokens,
                    me.CrewSkins,
                    me.CrewBooks,
                    me.Customizations,
                    me.CreditsFactor,
                    me.TankmenXp,
                    me.TankmenXpFactor,
                    me.FreeXpFactor,
                    me.BattleToken,
                    me.PremiumUniversal,
                    me.NaturalCover,
                    me.BpCoin,
                    me.BattlePassSelectToken,
                    me.BattlaPassFinalAchievement,
                    me.BattleBadge,
                    me.BonusX5,
                    me.CrewBonusX3,
                    me.NewYearInvoice,
                    me.EpicSelectToken,
                    me.Comp7TokenWeeklyReward,
                    me.DeluxeGift,
                    me.BattleBoosterGift,
                    me.OptionalDevice,
                    me.Gold,
                    me.Credits,
                    me.Crystal,
                    me.FreeXp,
                    me.BattlePassPoints,
                    me.EquipCoin,
                    me.PremiumPlus,
                    me.Premium,
                    Fe.Small,
                    Fe.Big;
                var Be = t(8546);
                let pe;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(pe || (pe = {}));
                pe.style, pe.tankman;
                var ge = t(8613);
                Date.now(), ge.Ew.getRegionalDateTime, ge.Ew.getFormattedDateTime;
                const ve = 'bp_highlight';
                var we = t(8596);
                const fe = 'Shield_base_ec',
                    Se = 'Shield_flag_a2',
                    ye = 'Shield_flag__isChapterChosen_81',
                    xe = 'Shield_flag__medium_78',
                    Le = 'Shield_emblem_59',
                    ke = 'Shield_chapterLogoIcon_4b',
                    Pe = (0, k.Pi)(({ size: e, chapterID: u = 0 }) => {
                        const t = G().model,
                            a = t.root.get().seasonNum,
                            n = t.computes.getChapterById(u);
                        if (!n) return null;
                        const s = n.isBought,
                            o = n.isExtra,
                            l = n.chapterState,
                            c = t.computes.getProgressionInfoByChapterId(u),
                            _ = c.currentLevel,
                            d = c.levelProgression,
                            E = { level: _, to: d, from: d },
                            m = l === M.Completed ? Be.Bq.Completed : s ? Be.Bq.Bought : Be.Bq.Free,
                            A = l === M.Active,
                            F = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(E),
                            C = F || l !== M.NotStarted,
                            D = C && m !== Be.Bq.Completed;
                        return r().createElement(
                            'div',
                            { className: fe },
                            r().createElement('div', {
                                className: i()(Se, e === Be.$u.Medium && xe, D && ye),
                                style: (0, ae.fW)(u, e),
                            }),
                            r().createElement(
                                'div',
                                { className: Le },
                                r().createElement(we.G4, {
                                    progression: E,
                                    size: e,
                                    chapterID: u,
                                    seasonNum: a,
                                    battlePassState: m,
                                    hasBattlePass: s,
                                    hasBeenActive: C,
                                    isChapterSelection: !0,
                                    isOpen: D,
                                    isChapterChosen: A,
                                    showProgressBar: A,
                                    isExtra: o,
                                }),
                                D && r().createElement('div', { className: ke, style: (0, ae.cs)(u, s, e) }),
                            ),
                        );
                    }),
                    Me = {
                        base: 'Chapter_base_f0',
                        base__qHDSize: 'Chapter_base__qHDSize_da',
                        bg: 'Chapter_bg_2e',
                        base__paused: 'Chapter_base__paused_ff',
                        base__notStarted: 'Chapter_base__notStarted_9b',
                        base__completed: 'Chapter_base__completed_88',
                        bgHover: 'Chapter_bgHover_ac',
                        border: 'Chapter_border_5c',
                        frame: 'Chapter_frame_58',
                        content: 'Chapter_content_61',
                        vehicleImg: 'Chapter_vehicleImg_b1',
                        shieldWrapper: 'Chapter_shieldWrapper_27',
                        shield: 'Chapter_shield_bc',
                        shieldShine: 'Chapter_shieldShine_3f',
                        rotate: 'Chapter_rotate_78',
                        completedIcon: 'Chapter_completedIcon_f2',
                        title: 'Chapter_title_57',
                        base__active: 'Chapter_base__active_e5',
                        vehicleStyle: 'Chapter_vehicleStyle_85',
                        preview: 'Chapter_preview_1d',
                        previewWrapper: 'Chapter_previewWrapper_74',
                        styleTitle: 'Chapter_styleTitle_0d',
                        vehicleTitle: 'Chapter_vehicleTitle_10',
                        crewTitle: 'Chapter_crewTitle_71',
                        crewSubtitle: 'Chapter_crewSubtitle_f3',
                        vehicleInHangar: 'Chapter_vehicleInHangar_61',
                        fadeOut: 'Chapter_fadeOut_82',
                        fadeIn: 'Chapter_fadeIn_f7',
                        fadeInWithScale: 'Chapter_fadeInWithScale_4c',
                        slideUp: 'Chapter_slideUp_71',
                        scale: 'Chapter_scale_96',
                    };
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Ne = R.strings.battle_pass,
                    Ie = (0, k.Pi)(({ chapterID: e }) => {
                        const u = G(),
                            t = u.model,
                            a = u.controls,
                            s = t.computes.getChapterById(e);
                        if (!s) return null;
                        const o = s.chapterState,
                            l = s.styleName,
                            _ = s.isVehicleInHangar,
                            d = s.vehicleInfo,
                            E = s.finalRewardType,
                            m = s.tankmanNames,
                            A = (0, c.GS)(),
                            F = A.mediaSize,
                            C = A.remScreenWidth,
                            D = A.remScreenHeight,
                            h = (0, n.useCallback)(
                                (u) => {
                                    a.openPreview(e), u.stopPropagation();
                                },
                                [e, a],
                            ),
                            b = (0, te.z)(() => {
                                (0, B.G)(ve);
                            }),
                            p = F <= c.cJ.Medium ? Be.$u.Small : Be.$u.Medium,
                            g = C >= 2560 && D >= 1440,
                            v = o === M.Completed,
                            w = o === M.Active,
                            f = Ne.chapter.fullNameUppercased.$num(e);
                        return r().createElement(
                            'div',
                            {
                                className: i()(Me.base, Me[`base__${o}`], g && Me.base__qHDSize),
                                onMouseEnter: b,
                                onClick: () => {
                                    B.$.playClick(), a.selectChapter(e);
                                },
                            },
                            r().createElement(
                                'div',
                                { className: Me.bg, style: (0, ae.TZ)(e) },
                                r().createElement('div', { className: Me.vehicleImg, style: (0, ae.OH)(e) }),
                                r().createElement('div', { className: Me.bgHover }),
                                w && r().createElement('div', { className: Me.frame }),
                            ),
                            r().createElement(
                                'div',
                                { className: Me.content },
                                r().createElement(
                                    'div',
                                    { className: Me.shieldWrapper },
                                    w && r().createElement('div', { className: Me.shieldShine }),
                                    r().createElement(
                                        'div',
                                        { className: Me.shield },
                                        r().createElement(Pe, { size: p, chapterID: e }),
                                    ),
                                ),
                                v && r().createElement('div', { className: Me.completedIcon }),
                                r().createElement('div', { className: Me.title }, f),
                                r().createElement(
                                    'div',
                                    { className: Me.vehicleStyle },
                                    E !== T.Tankman &&
                                        r().createElement(
                                            'div',
                                            { className: Me.preview },
                                            r().createElement(
                                                'div',
                                                { className: Me.previewWrapper },
                                                r().createElement(ue, {
                                                    type: 'preview',
                                                    onClick: h,
                                                    size: F < c.cJ.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: Me.styleTitle },
                                        ((e, u) => {
                                            switch (e) {
                                                case T.Style:
                                                    return r().createElement(Y.z, {
                                                        text: Ne.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: u },
                                                    });
                                                case T.Tankman:
                                                    return r().createElement(
                                                        'div',
                                                        { className: Me.crewTitle },
                                                        r().createElement(Y.z, {
                                                            text: Ne.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case T.Vehicle:
                                                    return r().createElement(Y.z, {
                                                        text: Ne.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, l),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Me.vehicleTitle },
                                        ((e, u, t) => {
                                            switch (e) {
                                                case T.Style:
                                                    return r().createElement(Y.z, {
                                                        text: Ne.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: r().createElement(
                                                                Ee,
                                                                Te({}, t, { type: de.white }),
                                                            ),
                                                        },
                                                    });
                                                case T.Tankman:
                                                    return r().createElement(Y.z, {
                                                        classMix: Me.crewSubtitle,
                                                        text: L.v_(u, Ne.common.comma()),
                                                    });
                                                case T.Vehicle:
                                                    return r().createElement(Y.z, {
                                                        text: Ne.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: r().createElement(
                                                                Ee,
                                                                Te({}, t, { type: de.white }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, m, d),
                                        _ && r().createElement('div', { className: Me.vehicleInHangar }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Oe = t(4769),
                    Re = t(8001);
                const He = {
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
                let $e, Ge;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($e || ($e = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Ge || (Ge = {}));
                const ze = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const C = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        h = D[0],
                        b = D[1],
                        p = (0, n.useState)(!1),
                        g = p[0],
                        v = p[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                h && null !== C.current && !C.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, n.useEffect)(() => {
                            b(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: C,
                                className: i()(
                                    He.base,
                                    He[`base__${a}`],
                                    s && He.base__disabled,
                                    u && He[`base__${u}`],
                                    h && He.base__focus,
                                    g && He.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && (0, B.G)(l), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), v(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && (0, B.G)(c),
                                        E && E(e),
                                        t && (s || (C.current && (C.current.focus(), b(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (A && A(e), v(!1));
                                },
                                onClick: function (e) {
                                    s || (F && F(e));
                                },
                            },
                            a !== $e.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: He.back }),
                                    r().createElement('span', { className: He.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: i()(He.state, He.state__default) },
                                r().createElement('span', { className: He.stateDisabled }),
                                r().createElement('span', { className: He.stateHighlightHover }),
                                r().createElement('span', { className: He.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: He.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ze.defaultProps = { type: $e.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const We = ze;
                var Ue = t(6373),
                    je = t(7030);
                const qe = 'ChapterCompleted_base_55',
                    Ve = 'ChapterCompleted_effect_1e',
                    Ze = 'ChapterCompleted_shine_2f',
                    Ye = 'ChapterCompleted_shield_af',
                    Xe = 'ChapterCompleted_title_1a',
                    Ke = 'ChapterCompleted_boughtGlow_56',
                    Qe = 'ChapterCompleted_bought_b1',
                    Je = 'ChapterCompleted_button_33',
                    eu = 'ChapterCompleted_buttonWrapper_04',
                    uu = R.strings.battle_pass,
                    tu = (0, k.Pi)(({ chapterId: e }) => {
                        const u = (0, n.useState)(!1),
                            t = u[0],
                            a = u[1],
                            s = G(),
                            i = s.model,
                            o = s.controls,
                            l = i.computes.getChapterById(e);
                        if (!l) return null;
                        const _ = (0, je.useSpring)({
                                from: { transform: 'rotate(0deg)' },
                                to: { transform: 'rotate(360deg)' },
                                reset: !0,
                                pause: !t,
                                config: { duration: 6e4 },
                            }),
                            d = (0, c.GS)().mediaSize,
                            E = d <= c.cJ.Small ? Be.$u.Small : Be.$u.Medium,
                            m = d <= c.cJ.Small ? Be.$u.Small : Be.$u.Medium,
                            A = (0, te.z)(() => {
                                (0, B.G)('bp_highlight_02'), a(!0);
                            }),
                            F = (0, te.z)(() => {
                                a(!1);
                            }),
                            C = uu.chapter.fullNameUppercased.$num(e);
                        return r().createElement(
                            'div',
                            { className: qe },
                            r().createElement(
                                'div',
                                {
                                    className: Ve,
                                    onClick: () => {
                                        (0, B.G)('play'), o.selectChapter(e);
                                    },
                                    onMouseEnter: A,
                                    onMouseOut: F,
                                },
                                r().createElement(je.animated.div, { className: Ze, style: _ }),
                                r().createElement(
                                    'div',
                                    { className: Ye },
                                    r().createElement(Pe, { size: m, chapterID: e }),
                                ),
                            ),
                            r().createElement('div', { className: Xe }, C),
                            l.isBought
                                ? r().createElement(
                                      Ue.i,
                                      { body: uu.chapterChoice.chapterBought.tooltip() },
                                      r().createElement(
                                          'div',
                                          { className: Ke },
                                          r().createElement('div', { className: Qe }),
                                      ),
                                  )
                                : r().createElement(
                                      'div',
                                      { className: eu },
                                      r().createElement(
                                          'div',
                                          { className: Je },
                                          r().createElement(
                                              We,
                                              { onClick: () => o.buyChapter(e), type: $e.main, size: E },
                                              uu.chapterChoice.buy(),
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    au = 'Header_base_71',
                    nu = 'Header_title_af',
                    ru = 'Header_base__qHDSize_a9',
                    su = 'Header_description_cc',
                    iu = 'Header_freePoints_05',
                    ou = 'Header_freePointsInfo_f3',
                    lu = 'Header_freePointsCount_a8',
                    cu = 'Header_freePointsIcon_be',
                    _u = R.strings.battle_pass.chapterChoice.freePoints,
                    du = (0, k.Pi)(({ title: e, description: u }) => {
                        const t = G().model,
                            a = t.root.get().freePoints,
                            n = !t.computes.isCompleted() && a > 0,
                            s = t.computes.isCompleted() ? u : '',
                            o = (0, c.GS)(),
                            l = o.remScreenWidth,
                            _ = o.remScreenHeight,
                            d = l >= 2560 && _ >= 1440;
                        return r().createElement(
                            'div',
                            { className: i()(au, d && ru) },
                            r().createElement('div', { className: nu }, e),
                            r().createElement(
                                'div',
                                { className: su },
                                n
                                    ? r().createElement(
                                          'div',
                                          { className: iu },
                                          _u.description(),
                                          r().createElement(
                                              Ue.i,
                                              { header: _u.tooltip.title(), body: _u.tooltip.description() },
                                              r().createElement(
                                                  'div',
                                                  { className: ou },
                                                  r().createElement('span', { className: lu }, a),
                                                  r().createElement('span', { className: cu }),
                                              ),
                                          ),
                                      )
                                    : r().createElement('span', null, s),
                            ),
                        );
                    }),
                    Eu = 'ChaptersCompleted_base_6f',
                    mu = 'ChaptersCompleted_chapters_8d',
                    Au = 'ChaptersCompleted_header_08',
                    Fu = 'ChaptersCompleted_headerShadow_8f',
                    Cu = 'ChaptersCompleted_headerLips_9a',
                    Du = 'ChaptersCompleted_headerLips__top_c4',
                    hu = 'ChaptersCompleted_headerLips__bottom_60',
                    bu = 'ChaptersCompleted_headerLines_a6',
                    Bu = 'ChaptersCompleted_awards_2b',
                    pu = R.strings.battle_pass,
                    gu = (0, k.Pi)(() => {
                        const e = G().model.chapters.get();
                        return r().createElement(
                            'div',
                            { className: Eu },
                            r().createElement(
                                'div',
                                { className: mu },
                                L.UI(e, (e, u) => r().createElement(tu, { key: u, chapterId: e.chapterID })),
                            ),
                            r().createElement(
                                'div',
                                { className: Au },
                                r().createElement('div', { className: Fu }),
                                r().createElement(
                                    'div',
                                    { className: i()(Cu, Du) },
                                    r().createElement('div', { className: bu }),
                                ),
                                r().createElement(du, {
                                    title: pu.chapterChoice.allChaptersCompleted.title(),
                                    description: pu.chapterChoice.allChaptersCompleted.description(),
                                }),
                                r().createElement(
                                    'div',
                                    { className: i()(Cu, hu) },
                                    r().createElement('div', { className: bu }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Bu },
                                r().createElement(Re.Z, { size: Oe.W9.Big, context: 'model.awardsWidget' }),
                            ),
                        );
                    }),
                    vu = 'Separator_base_8a',
                    wu = 'Separator_base__qHDSize_bb',
                    fu = 'Separator_line_97',
                    Su = 'Separator_line__top_a6',
                    yu = 'Separator_line__bottom_a0',
                    xu = 'Separator_plus_41',
                    Lu = () => {
                        const e = (0, c.GS)(),
                            u = e.remScreenWidth,
                            t = e.remScreenHeight,
                            a = u >= 2560 && t >= 1440;
                        return r().createElement(
                            'div',
                            { className: i()(vu, a && wu) },
                            r().createElement('div', { className: i()(fu, Su) }),
                            r().createElement('div', { className: xu }),
                            r().createElement('div', { className: i()(fu, yu) }),
                        );
                    },
                    ku = R.strings.battle_pass,
                    Pu = (0, k.Pi)(() => {
                        const e = G(),
                            u = e.model,
                            t = e.controls,
                            a = t.openAbout,
                            s = t.openPointsInfo,
                            o = t.onViewLoaded,
                            l = t.close,
                            c = u.root.get().isSeasonWithAdditionalBackground,
                            _ = u.chapters.get(),
                            d = u.computes.hasExtra() && c,
                            E = (0, n.useState)(!1),
                            m = E[0],
                            A = E[1];
                        var F;
                        (F = l),
                            x(S.n.ESCAPE, F),
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
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
                                    })(() => {
                                        m || (o(), A(!0));
                                    }),
                                [m, o],
                            );
                        const C = u.computes.hasActive() ? ku.chapterChoice.activeTitle() : ku.chapterChoice.title();
                        return r().createElement(
                            'div',
                            { className: z },
                            u.computes.isCompleted()
                                ? r().createElement(gu, null)
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      d && r().createElement('div', { className: W }),
                                      r().createElement(
                                          'div',
                                          { className: U },
                                          r().createElement(w, {
                                              caption: ku.intro.aboutButton(),
                                              type: 'info',
                                              onClick: a,
                                          }),
                                          r().createElement(w, {
                                              caption: ku.howToEarnPoints.title(),
                                              type: 'info',
                                              onClick: s,
                                          }),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: j },
                                          r().createElement(du, {
                                              title: C,
                                              description: ku.chapterChoice.style.description(),
                                          }),
                                      ),
                                      r().createElement(P.i, { place: P.Z.CHAPTER_CHOICE }),
                                      r().createElement(
                                          'div',
                                          { className: i()(q, _.length > 3 ? Z : V) },
                                          L.UI(_, ({ chapterID: e }, u) =>
                                              r().createElement(
                                                  r().Fragment,
                                                  { key: u },
                                                  3 === u && r().createElement(Lu, null),
                                                  r().createElement(Ie, { chapterID: e }),
                                              ),
                                          ),
                                      ),
                                  ),
                        );
                    });
                engine.whenReady.then(() => {
                    b().render(
                        r().createElement(D, null, r().createElement($, null, r().createElement(Pu, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9485: (e, u, t) => {
                'use strict';
                t.d(u, { OH: () => l, TZ: () => o, cs: () => s, fW: () => i, wD: () => r });
                var a = t(8546);
                const n = (e) => {
                        switch (e) {
                            case a.$u.Micro:
                                return 's';
                            case a.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    r = (e, u, t = '') => {
                        const a = t.length > 0 ? `_${t}` : t,
                            n = e.$dyn(`c_${u}${a}`),
                            r = String(u).slice(-1),
                            s = e.$dyn(`default_${r}${a}`);
                        return n || s;
                    },
                    s = (e, u, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            s = u ? 'BP' : '',
                            i = `${n(t)}${s}`;
                        return { backgroundImage: `url(${r(a, e, i)})` };
                    },
                    i = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.logo.flag,
                            a = n(u);
                        return { backgroundImage: `url(${r(t, e, a)})` };
                    },
                    o = (e) => ({
                        backgroundImage: `url(${r(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    l = (e) => ({
                        backgroundImage: `url(${r(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            8001: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => re });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6483),
                    s = t.n(r),
                    i = t(9480),
                    o = t(3403),
                    l = t(6373),
                    c = t(7727),
                    _ = t(5415);
                const d = (e, u, t, a, n) => {
                    const r = R.images.gui.maps.icons.battlePass.awards_widget;
                    return n
                        ? `url(${r.$dyn(`${e.toLowerCase()}_${u}${t}_${a}_${n}`)})`
                        : `url(${r.$dyn(`${e.toLowerCase()}_${u}${t}_${a}`)})`;
                };
                var E = t(4769);
                const m = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    A = ({ size: e, isHover: u, disabled: t = !1, type: a = E.w2.Coin }) => {
                        const r = (0, _.GS)().mediaSize >= _.cJ.Medium ? E.S$.Medium : E.S$.Small;
                        return n().createElement(
                            'div',
                            { className: s()(m.base, m[`base__${e}`], m[`base__${e}${a}`], u && m.base__hovered) },
                            t
                                ? n().createElement('div', {
                                      className: m.bgDisabled,
                                      style: { backgroundImage: d(a, E.Hd.Background, E.fq.Disabled, e, r) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: m.bg,
                                          style: { backgroundImage: d(a, E.Hd.Background, E.fq.None, e, r) },
                                      }),
                                      n().createElement('div', {
                                          className: m.bgHover,
                                          style: { backgroundImage: d(a, E.Hd.Background, E.fq.Hover, e, r) },
                                      }),
                                  ),
                        );
                    },
                    F = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    C = ({ size: e, isHover: u, highlighted: t = !1, disabled: a = !1, type: r = E.w2.Coin }) => {
                        const i = (0, _.GS)().mediaSize >= _.cJ.Medium ? E.S$.Medium : E.S$.Small;
                        return n().createElement(
                            'div',
                            { className: s()(F.base, F[`base__${e}`], u && F.base__hovered) },
                            a
                                ? n().createElement('div', {
                                      className: s()(F.borderDisabled, F[`borderDisabled__${e}`]),
                                      style: { backgroundImage: d(r, E.Hd.Border, E.fq.Disabled, e, i) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: F.border,
                                          style: {
                                              backgroundImage: d(t ? E.w2.Collection : r, E.Hd.Border, E.fq.None, e, i),
                                          },
                                      }),
                                      n().createElement('div', {
                                          className: F.borderHover,
                                          style: { backgroundImage: d(r, E.Hd.Border, E.fq.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var D = t(2372),
                    h = t(9766);
                const b = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    B = ({ state: e, count: u, size: t, maxCount: a = 0 }) => {
                        switch (e) {
                            case g.InProgress:
                                return n().createElement(h.z, { text: `${u || 0} / ${a}` });
                            case g.Completed:
                                return n().createElement('div', { className: s()(b.base, b[`base__${t}`]) });
                            default:
                                return n().createElement(D.A, { format: 'integral', value: u });
                        }
                    },
                    p = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let g;
                !(function (e) {
                    (e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed');
                })(g || (g = {}));
                const v = ({
                        size: e,
                        count: u,
                        maxCount: t,
                        state: a = g.Default,
                        isLocked: r = !1,
                        disabled: i = !1,
                    }) =>
                        n().createElement(
                            'div',
                            { className: s()(p.base, p[`base__${e}`], r && p.base__locked, i && p.base__disabled) },
                            n().createElement(B, { state: a, size: e, count: u, maxCount: t }),
                        ),
                    w = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    f = (e, u, t) => {
                        switch (!0) {
                            case t:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case u:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    S = ({ size: e, isHover: u, isDark: t = !0, disabled: a = !1, type: r }) => {
                        const i = (0, _.GS)().mediaSize >= _.cJ.Medium ? E.S$.Medium : E.S$.Small;
                        return n().createElement('div', {
                            className: s()(w.base, w[`base__${e}`], w[`base__${f(u, t, a)}`]),
                            style: {
                                backgroundImage: d(r, E.Hd.Icon, E.fq.None, e, r === E.w2.Collection ? E.S$.None : i),
                            },
                        });
                    },
                    y = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
                    },
                    x = (e, u) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case u:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    L = ({ size: e, title: u, isHover: t, disabled: a = !1, isGold: r = !1 }) =>
                        n().createElement(
                            'div',
                            { className: s()(y.base, y[`base__${e}`], y[`base__${x(a, t)}`], r && y.base__gold) },
                            u,
                        ),
                    k = {
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
                    P = R.strings.battle_pass.awardsWidget,
                    M = ({ count: e, disabled: u = !1, onClick: t, size: r }) => {
                        const i = (0, a.useState)(!1),
                            o = i[0],
                            _ = i[1],
                            d = 1 === e ? P.title.awardSingle() : P.title.awardMultiple(),
                            m = u ? P.description.awardDisabled() : P.description.award(),
                            F = (0, a.useCallback)(() => {
                                u || (c.$.playClick(), t());
                            }, [u, t]);
                        return n().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(
                                        k.base,
                                        k[`base__${r}`],
                                        u ? k.base__disabled : k.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), _(!0);
                                    },
                                    onMouseLeave: () => {
                                        _(!1);
                                    },
                                    onClick: F,
                                },
                                n().createElement(C, { size: r, isHover: o, type: E.w2.Award, disabled: u }),
                                n().createElement(A, { size: r, isHover: o, type: E.w2.Award, disabled: u }),
                                n().createElement(S, {
                                    size: r,
                                    isHover: o,
                                    type: E.w2.Award,
                                    disabled: u,
                                    isDark: !1,
                                }),
                                n().createElement(v, { size: r, count: e, disabled: u }),
                                n().createElement(L, { size: r, isHover: o, title: d, disabled: u, isGold: !0 }),
                                !u &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: s()(k.shine, k.shine__left) }),
                                        n().createElement('div', { className: s()(k.shine, k.shine__right) }),
                                        n().createElement('div', { className: k.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: k.blinkShape },
                                            n().createElement('div', { className: k.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    T = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    N = R.strings.battle_pass.awardsWidget,
                    I = ({ count: e, onClick: u, size: t }) => {
                        const r = (0, a.useState)(!1),
                            i = r[0],
                            o = r[1];
                        return n().createElement(
                            l.i,
                            { body: N.description.coin(), isEnabled: Boolean(N.description.coin()) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(T.base, T[`base__${t}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), o(!0);
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        c.$.playClick(), u();
                                    },
                                },
                                n().createElement(C, { size: t, isHover: i }),
                                n().createElement(A, { size: t, isHover: i }),
                                n().createElement(S, { size: t, isHover: i, type: E.w2.Coin }),
                                n().createElement(v, { size: t, count: e }),
                                n().createElement(L, { size: t, isHover: i, title: N.title.coin() }),
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
                    H = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const G = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        i = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, H);
                    const _ = a ? null : t,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const E = _ && !d && _ > o,
                        m = s()(
                            O.base,
                            O[`base__${u}`],
                            r && O.base__animated,
                            i && O.base__hidden,
                            !_ && O.base__pattern,
                            a && O.base__empty,
                            l,
                        );
                    return n().createElement(
                        'div',
                        $({ className: m }, c),
                        n().createElement('div', { className: O.bg }),
                        n().createElement('div', { className: O.pattern }),
                        n().createElement(
                            'div',
                            { className: s()(O.value, d && O.value__text) },
                            E ? o : _,
                            E && n().createElement('span', { className: O.plus }, '+'),
                        ),
                    );
                };
                G.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var z = t(3815);
                const W = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    U = R.strings.battle_pass.awardsWidget,
                    j = ({ count: e, maxCount: u, newItemsCount: t, hasTrigger: r, size: i, onClick: o }) => {
                        const _ = (0, a.useState)(!1),
                            d = _[0],
                            m = _[1],
                            F = u === e,
                            D = i === E.W9.Small && r,
                            h = F ? U.description.collectionCompleted() : U.description.collection(),
                            b = (0, z.z)(() => {
                                c.$.playClick(), o();
                            });
                        return n().createElement(
                            l.i,
                            { body: h, isEnabled: Boolean(h) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(W.base, W[`base__${i}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), m(!0);
                                    },
                                    onMouseLeave: () => {
                                        m(!1);
                                    },
                                    onClick: b,
                                },
                                n().createElement(C, { size: i, isHover: d, type: E.w2.Coin, highlighted: D }),
                                n().createElement(A, { size: i, isHover: d }),
                                n().createElement(S, { size: i, isHover: d, type: E.w2.Collection }),
                                n().createElement(v, {
                                    size: i,
                                    count: e,
                                    maxCount: u,
                                    state: F ? g.Completed : g.InProgress,
                                }),
                                n().createElement(L, { size: i, isHover: d, title: U.title.collection() }),
                                t > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: W.bubble },
                                        n().createElement(G, { size: 'small' }),
                                    ),
                            ),
                        );
                    },
                    q = {
                        base: 'CommanderAward_base_11',
                        base__big: 'CommanderAward_base__big_ce',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    V = R.strings.battle_pass.awardsWidget,
                    Z = ({ onClick: e, size: u }) => {
                        const t = (0, a.useState)(!1),
                            r = t[0],
                            i = t[1],
                            o = V.description.commander();
                        return n().createElement(
                            l.i,
                            { body: o, isEnabled: Boolean(o) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(q.base, q[`base__${u}`], r && q.base__hover),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), i(!0);
                                    },
                                    onMouseLeave: () => i(!1),
                                    onClick: () => {
                                        c.$.playClick(), e();
                                    },
                                },
                                n().createElement(C, { size: u, isHover: r }),
                                n().createElement(A, { size: u, isHover: r }),
                                n().createElement(L, { size: u, isHover: r, title: V.title.commander() }),
                                n().createElement('div', { className: q.icon }),
                            ),
                        );
                    },
                    Y = {
                        base: 'PointAward_base_6f',
                        base__big: 'PointAward_base__big_dc',
                        locked: 'PointAward_locked_7c',
                        lockedHover: 'PointAward_lockedHover_80',
                        locked__hidden: 'PointAward_locked__hidden_bb',
                        lockedHover__hidden: 'PointAward_lockedHover__hidden_17',
                        base__hover: 'PointAward_base__hover_50',
                    },
                    X = R.strings.battle_pass.awardsWidget,
                    K = ({ count: e, onClick: u, size: t, isLocked: r, hasExtra: i = !1 }) => {
                        const o = (0, a.useState)(!1),
                            _ = o[0],
                            d = o[1],
                            m = ((e, u) => {
                                switch (!0) {
                                    case e && u:
                                        return X.description.pointLockedExceptExtra();
                                    case e && !u:
                                        return X.description.pointLocked();
                                    default:
                                        return X.description.point();
                                }
                            })(r, i);
                        return n().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            n().createElement(
                                'div',
                                {
                                    className: s()(Y.base, Y[`base__${t}`], _ && Y.base__hover),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), d(!0);
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: () => {
                                        c.$.playClick(), u();
                                    },
                                },
                                n().createElement(C, { size: t, isHover: _ }),
                                n().createElement(A, { size: t, isHover: _ }),
                                n().createElement(S, { size: t, isHover: _, type: E.w2.Point }),
                                n().createElement(v, { size: t, count: e, isLocked: r }),
                                n().createElement(L, { size: t, isHover: _, title: X.title.point() }),
                                n().createElement('div', {
                                    className: s()(Y.locked, Y[`locked__${t}`], !r && Y.locked__hidden),
                                }),
                                n().createElement('div', {
                                    className: s()(Y.lockedHover, Y[`lockedHover__${t}`], !r && Y.lockedHover__hidden),
                                }),
                            ),
                        );
                    };
                var Q = t(3215),
                    J = t(3946);
                const ee = (0, Q.q)()(
                        ({ observableModel: e, externalModel: u }) => {
                            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                a = (0, J.Om)((e) => {
                                    const a = t.root.get(),
                                        n = a.bpbitCount,
                                        r = a.notChosenRewardCount,
                                        s = a.bpcoinCount,
                                        i = a.isChooseRewardsEnabled,
                                        o = a.isBattlePassCompleted,
                                        l = a.hasExtra,
                                        c = a.isSpecialVoiceTankmenEnabled,
                                        _ = a.isBpBitEnabled,
                                        d = a.isBpCoinEnabled,
                                        m = t.collectionEntryPoint.get(),
                                        A = m.collectionItemCount,
                                        F = m.newCollectionItemCount,
                                        C = m.maxCollectionItemCount,
                                        D = m.isFirstEnter,
                                        h = m.isCollectionsEnabled;
                                    return [
                                        {
                                            type: E.w2.Award,
                                            props: {
                                                size: e,
                                                count: r,
                                                disabled: !i,
                                                onClick: u.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: r > 0,
                                        },
                                        {
                                            type: E.w2.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: u.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: E.w2.Point,
                                            props: {
                                                size: e,
                                                count: n,
                                                isLocked: !o,
                                                hasExtra: l,
                                                onClick: u.createCallbackNoArgs('onBpbitClick'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: E.w2.Collection,
                                            props: {
                                                size: e,
                                                count: A,
                                                maxCount: C,
                                                newItemsCount: F,
                                                hasTrigger: D,
                                                onClick: u.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: h,
                                        },
                                        {
                                            type: E.w2.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                onClick: u.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: c,
                                        },
                                    ];
                                });
                            return Object.assign({}, t, { computes: { awardsList: a } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpPoints: e.createCallbackNoArgs('onBpbitClick'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    ue = ee[0],
                    te = ee[1],
                    ae = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        award__last: 'AwardsWrapper_award__last_b0',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    ne = (0, o.Pi)(({ size: e }) => {
                        const u = te().model;
                        return n().createElement(
                            'div',
                            { className: s()(ae.base, ae[`base__${e}`]) },
                            i.UI(
                                u.computes.awardsList(e),
                                (e, u, t) =>
                                    e.condition &&
                                    n().createElement(
                                        'div',
                                        { key: e.type, className: s()(ae.award, u === t.length - 1 && ae.award__last) },
                                        ((e, u) => {
                                            switch (e) {
                                                case E.w2.Award:
                                                    return n().createElement(M, u);
                                                case E.w2.Coin:
                                                    return n().createElement(I, u);
                                                case E.w2.Point:
                                                    return n().createElement(K, u);
                                                case E.w2.Collection:
                                                    return n().createElement(j, u);
                                                case E.w2.Commander:
                                                    return n().createElement(Z, u);
                                                default:
                                                    return console.warn('Unknown award type: ', e), null;
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    re = ({ size: e = E.W9.Small, context: u = 'model' }) =>
                        n().createElement(ue, { options: { context: u } }, n().createElement(ne, { size: e }));
            },
            4769: (e, u, t) => {
                'use strict';
                let a, n, r, s, i;
                t.d(u, { Hd: () => s, S$: () => r, W9: () => n, fq: () => i, w2: () => a }),
                    (function (e) {
                        (e.Award = 'Award'),
                            (e.Coin = 'Coin'),
                            (e.Point = 'Point'),
                            (e.Collection = 'Collection'),
                            (e.Commander = 'Commander');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = ''), (e.Small = 's'), (e.Medium = 'm');
                    })(r || (r = {})),
                    (function (e) {
                        (e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = '');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = '');
                    })(i || (i = {}));
            },
            8596: (e, u, t) => {
                'use strict';
                t.d(u, { G4: () => w });
                var a = t(6483),
                    n = t.n(a),
                    r = t(6179),
                    s = t.n(r);
                const i = (e, u) => {
                    const t = u.postfix ? `_${u.postfix}` : '';
                    return ((e) => {
                        const u = e.path.$dyn(`${e.name}_${e.id}`),
                            t = e.path.$dyn('default');
                        return u || t;
                    })(e).$dyn(`${u.name}${t}`);
                };
                let o;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(o || (o = {}));
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
                var c = t(9485);
                const _ = {
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
                    d = ({
                        level: e,
                        size: u,
                        isGold: t,
                        isForRewardScreen: a,
                        curState: r,
                        isFirstLevel: i,
                        showProgressionCompleted: o,
                    }) => {
                        const l = n()(_.base, _[`base__${u}`]),
                            c = n()(
                                _.text,
                                _.text__filtered,
                                _[`text__${u}`],
                                _[`text__${r}`],
                                o && _.text__hideWithDelay,
                                i && _.text__new,
                                a && _.text__rewardScreen,
                            ),
                            d = n()(
                                _.textWithBlend,
                                i && _.text__new,
                                o && _.text__hideWithDelay,
                                _[`textWithBlend__${r}`],
                            ),
                            E = n()(_.text, _.text__blended, _[`text__${u}`], a && _.text__rewardScreen),
                            m = n()(
                                _.textMask,
                                t && _.textMask__gold,
                                a && _.textMask__animated,
                                t && a && _.textMask__goldContrast,
                                _[`textMask__${u}`],
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            s().createElement('div', { className: c }, e),
                            s().createElement(
                                'div',
                                { className: d },
                                s().createElement('div', { className: E }, e),
                                s().createElement('div', { className: m }),
                            ),
                        );
                    };
                var E = t(8546);
                const m = {
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
                    A = (e, u) => {
                        const t = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case E.$u.Small:
                                    return 'l';
                                case E.$u.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(u)}${t}`;
                    },
                    F = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: u,
                            size: t,
                            battlePassState: a,
                            hasProgression: r,
                            isGolden: l,
                            labelAnimation: _,
                            newLabelAnimation: F,
                            isChapterChosen: C = !1,
                            chapterID: D = 0,
                            seasonNum: h = -1,
                            isProgressionCompleted: b = !1,
                            hasBeenActive: B = !1,
                            isChapterSelection: p = !1,
                            isProgression: g = !1,
                        }) => {
                            let v = '',
                                w = '';
                            t === E.$u.Small
                                ? ((v = 'Small'), (w = '__small'))
                                : t === E.$u.Micro && ((v = 'Micro'), (w = '__micro'));
                            const f = a === E.Bq.SwitchedChapterRightNow,
                                S = a === E.Bq.CompletedRightNow,
                                y = ((e, u, t, a, n) => (e || n ? u || !t : u || !a))(p, b, B, C, g),
                                x = !g && !p;
                            return s().createElement(
                                s().Fragment,
                                null,
                                y
                                    ? s().createElement('div', {
                                          className: n()(m.icon, w && m[`icon${w}`], S && m[`icon__animated${v}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      u = A(l, t);
                                                  if (x) {
                                                      if (b) {
                                                          const t = { path: e.icon, name: o.Season, id: h };
                                                          return i(t, { name: 'icon', postfix: u });
                                                      }
                                                      if (!C) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, D, u);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  m.label,
                                                  m[`label${w}`],
                                                  f && m.label__new,
                                                  f && m[`label__new${v}`],
                                                  !S && b && m.label__disabled,
                                                  m[`label__${_}${v}`],
                                                  r && m[`label__hasProgress${v}`],
                                                  r && m[`label__hasProgress${v}${g ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(d, {
                                              level: u,
                                              size: t,
                                              isGold: l,
                                              isFirstLevel: f,
                                              curState: _,
                                              showProgressionCompleted: S,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                m.label,
                                                m[`label${w}`],
                                                f && m.label__new,
                                                f && m[`label__new${v}`],
                                                m[`label__${F}${v}`],
                                                r && m[`label__hasProgress${v}`],
                                            ),
                                        },
                                        s().createElement(d, {
                                            level: e,
                                            size: t,
                                            isGold: l,
                                            isFirstLevel: f,
                                            curState: F,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var C = t(1975);
                const D = {
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
                    h = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: u = !1,
                            showProgressionCompleted: t,
                            isProgressionCompleted: a,
                            size: r,
                        }) => {
                            const i = n()(D.base, D[`base__${r}`], t && D.base__completed, !t && a && D.base__hidden);
                            return s().createElement(
                                'div',
                                { className: i },
                                s().createElement(C.ko, {
                                    key: e.to,
                                    size: C.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: u,
                                }),
                            );
                        },
                    );
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                let B, p;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(B || (B = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(p || (p = {}));
                const g = (e, u, t, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: o.Chapter, id: a },
                            s = e ? B.Open : B.Closed,
                            l = ((e, u) =>
                                e
                                    ? p.Gold
                                    : u === E.Bq.Completed || u === E.Bq.CompletedRightNow
                                      ? p.Completed
                                      : p.Initial)(u, t),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${i(r, { name: 'emblem', postfix: `${s}_${l}${c}` })})` };
                    },
                    v = (e, u) => {
                        const t = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: o.Season, id: e };
                        return { backgroundImage: `url(${i(t, { name: 'extra', postfix: u })})` };
                    },
                    w = (0, r.memo)((e) => {
                        const u = e.progression,
                            t = e.size,
                            a = e.battlePassState,
                            r = e.hasBattlePass,
                            i = e.isChapterChosen,
                            o = e.hasBeenActive,
                            c = void 0 !== o && o,
                            _ = e.isChapterSelection,
                            d = void 0 !== _ && _,
                            m = e.isOpen,
                            A = void 0 !== m && m,
                            C = e.isProgression,
                            D = void 0 !== C && C,
                            B = e.showProgressBar,
                            p = void 0 === B || B,
                            w = e.isExtra,
                            f = void 0 !== w && w,
                            S = e.chapterID,
                            y = e.seasonNum,
                            x = ((e) => {
                                switch (e) {
                                    case E.$u.Small:
                                        return 'small';
                                    case E.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(t),
                            L = a === E.Bq.CompletedRightNow,
                            k = r || a === E.Bq.Bought,
                            P = (a === E.Bq.Completed || L) && k,
                            M = (a === E.Bq.Completed || L) && !k,
                            T = P || M,
                            N = void 0 !== u.from,
                            I = p && ((N && i) || c);
                        return s().createElement(
                            'div',
                            { className: l.base },
                            f &&
                                s().createElement('div', {
                                    className: n()(l.extra, x && l[`extra__${x}`]),
                                    style: v(y, x),
                                }),
                            s().createElement(
                                'div',
                                { className: n()(l.image, x && l[`image__${x}`]), style: g(A, k, a, S, x) },
                                a !== E.Bq.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            F,
                                            b(
                                                {
                                                    hasProgression: N,
                                                    isGolden: k,
                                                    isProgressionCompleted: T,
                                                    isChapterChosen: i,
                                                    hasBeenActive: c,
                                                    isChapterSelection: d,
                                                    isProgression: D,
                                                },
                                                e,
                                                u,
                                            ),
                                        ),
                                        I &&
                                            s().createElement(h, {
                                                key: u.to,
                                                progression: u,
                                                showProgressionCompleted: L,
                                                isProgressionCompleted: T,
                                                size: t,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, u, t) => {
                'use strict';
                let a, n, r, s;
                t.d(u, { $u: () => a, Bq: () => r }),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(n || (n = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(r || (r = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(s || (s = {}));
            },
            6254: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l, Z: () => o });
                var a = t(6483),
                    n = t.n(a),
                    r = t(6179),
                    s = t.n(r);
                const i = {
                    base: 'Identity_base_56',
                    base__chapter_choice: 'Identity_base__chapter_choice_df',
                    base__progression: 'Identity_base__progression_1c',
                    identityImage: 'Identity_identityImage_69',
                };
                let o;
                !(function (e) {
                    (e.PROGRESSION = 'progression'), (e.CHAPTER_CHOICE = 'chapter_choice');
                })(o || (o = {}));
                const l = ({ place: e }) =>
                    s().createElement(
                        'div',
                        { className: n()(i.base, i[`base__${e}`]) },
                        s().createElement('div', { className: i.identityImage }),
                    );
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            2468: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
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
            6147: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (__webpack_require__.j = 1201),
        (() => {
            var e = { 1201: 0, 7737: 0, 1730: 0, 1937: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(1205));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
